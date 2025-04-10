<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CooperativeKLU;
use App\Models\CooperativeLegalStage;
use App\Models\CooperativeManagement;
use App\Models\NPAKRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Http\Request;
use App\Models\CooperativeType;
use App\Models\Cooperative;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Province;
use App\Models\District;
use App\Models\Subdistrict;
use App\Models\Village;
use App\Models\UserRole;
use Illuminate\Support\Facades\Mail;
use App\Mail\CooperativeRegisterMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CooperativeController extends Controller
{

    public function index()
    {
        return response()->json([
            'status' => true,
            'message' => 'List data cooperatives',
            'data' => Cooperative::all()
        ]);
    }



    public function getByNIK(Request $request, $nik)
    {
        $targetUrl = 'https://nik.kop.go.id/odsnik/detail';

        if (!$nik) {
            return response()->json([
                'message' => 'Something wrong',
                'error' => 'NIK is mandatory',
            ], 500);
        }

        try {
            $response = Http::asForm()->post($targetUrl, [
                'nik' => $nik,
            ]);

            $html = $response->body();
            $crawler = new Crawler($html);

            $rows = $crawler->filter('table.styled-table tr');

            $data = [];

            $rows->each(function ($row) use (&$data) {
                $columns = $row->filter('td');
                if ($columns->count() === 2) {
                    $key = trim($columns->eq(0)->text());
                    $value = trim($columns->eq(1)->text());
                    $data[$key] = $value;
                }
            });

            $fields = [
                "Koperasi",
                "Nomor Badan Hukum Pendirian",
                "Tanggal Badan Hukum Pendirian",
                "Alamat",
                "Desa / Kelurahan",
                "Kecamatan",
                "Kabupaten",
                "Provinsi",
                "Bentuk Koperasi",
                "Jenis Koperasi",
                "Sektor Usaha",
                "Kelompok Koperasi",
                "Pola Pengelolaan",
                "Status NIK",
                "Tanggal Berlaku Sertifikat",
                "Grade",
                "KUK",
                "Jumlah Anggota Pria",
                "Jumlah Anggota Wanita",
                "Total Anggota",
                "Total Karyawan",
                "Total Manajer"
            ];

            $targetFields = [
                "name",
                "nbhp",
                "nbhp_date",
                "address",
                "village",
                "subdistrict",
                "district",
                "province",
                "form",
                "jenis_koperasi",
                "working_area",
                "kelompok_koperasi",
                "pola_pengelolaan",
                "nik_status",
                "certificate_valid_date",
                "grade",
                "kuk",
                "male_members",
                "female_members",
                "members_total",
                "employee_total",
                "manager_total"
            ];

            $result = [];
            for ($i = 0; $i < count($fields); $i++) {
                $result[$targetFields[$i]] = $data[$fields[$i]] ?? null;
            }

            return response()->json([
                'message' => 'Success',
                'data' => $result,
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something wrong',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getCooperativeTypes()
    {
        $cooperativeTypes = CooperativeType::with('klus')->get();
        return response()->json([
            'message' => 'Success',
            'data' => $cooperativeTypes,
        ], 201);
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'cooperative_name' => 'required|string|max:256|unique:cooperatives,name',
                'province_code' => 'required|exists:provinces,code',
                'district_code' => 'required|exists:districts,code',
                'subdistrict_code' => 'required|exists:subdistricts,code',
                'village_code' => 'required|exists:villages,code',
                'npak_id' => 'required|exists:npaks,notary_id',
                'bamd' => 'required|file|mimetypes:application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'bara' => 'required|file|mimetypes:application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'klu_ids' => 'required|string',
                'subdomain' => 'required|string|max:50|unique:cooperatives,subdomain',
                'nik' => 'unique:cooperatives,nik',
                'name' => 'required|string|min:3|max:50',
                'email' => 'required|string|email|min:3|max:50|unique:users,email',
                'phone' => 'required|string|min:3|max:16|unique:users,phone',
                'password' => 'required|min:8|max:50|confirmed',
                'npak_name' => 'required_if:npak_id,1|string|min:3|max:128',
                'npak_email' => 'required_if:npak_id,1|string|email|min:8|max:128',
                'npak_address' => 'required_if:npak_id,1|string|min:8|max:128',
                'npak_phone' => 'required_if:npak_id,1|string|min:8|max:16'
            ]);

            $existingName = Cooperative::where('name', strtoupper($request->input('cooperative_name')))->first();
            if ($existingName) {
                return response()->json([
                    'message' => 'Failed to create cooperative.',
                    'error' => 'Name already taken'
                ], 500);
            }
    
            $user = User::create([
                'name'=> $request->input('name'),
                'email' => $request->input('email'),
                'phone'=> $request->input('phone'),
                'role' => 'Pengurus koperasi',
                'password'=> Hash::make($request->input('password')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);

            $disk = Storage::disk('gcs');

            $bamd = $request->file('bamd');
            $bamd_file_name = time() . '_' . $bamd->getClientOriginalName();
            $storeBamd = $bamd->storeAs("bamd", $bamd_file_name, "gcs");
            $fetchBamd = $disk->url($storeBamd);

            $bara = $request->file('bara');
            $bara_file_name = time() . '_' . $bara->getClientOriginalName();
            $storeBara = $bara->storeAs("bara", $bara_file_name, "gcs");
            $fetchBara = $disk->url($storeBara);

            $province = Province::where('code', $request->input('province_code'))->first();
            $district = District::where('code', $request->input('district_code'))->first();
            $subdistrict = Subdistrict::where('code', $request->input('subdistrict_code'))->first();
            $village = Village::where('code', $request->input('village_code'))->first();

            $npakId = $request->input('npak_id');
            if ($npakId == 1) {
                NPAKRequest::insert([
                    'provinceId' => $province->province_id,
                    'districtId' => $district->district_id,
                    'name' => $request->input('npak_name'),
                    'primary_phone' => $request->input('npak_phone'),
                    'address' => $request->input('npak_address'),
                    'email' => $request->input('npak_email'),
                    'status' => 'Requested',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }

            $cooperative = Cooperative::create([
                'name' => strtoupper($request->input('cooperative_name')),
                'provinceId' => $province->province_id,
                'districtId' => $district->district_id,
                'subdistrictId' => $subdistrict->subdistrict_id,
                'villageId' => $village->village_id,
                'userId' => $user->id,
                'npakId' => $npakId,
                'subdomain' => $request->input('subdomain'),
                'nik' => $request->input('nik'),
                'email' => $request->input('email'),
                'phone'=> $request->input('phone'),
                'bamd' => $fetchBamd,
                'bara' => $fetchBara
            ]);

            $legalStage = CooperativeLegalStage::create([
                'cooperativeId' => $cooperative->cooperative_id,
                'legalStageId' => 1,                
                'created_at' => Carbon::now(),
                'updated_at'=> Carbon::now()
            ]);

            UserRole::insert([
                'role_positionId' => 1, // Penanggung Jawab Koperasi
                'userId' => $user->id,
                'npak' => $npakId,
                'cooperativeId' => $cooperative->cooperative_id,
                'created_at' => Carbon::now(),
                'updated_at'=> Carbon::now()
            ]);

            $legalStage->name = 'Registrasi';
    
            $klus = $request->input('klu_ids');
            foreach (explode(',', $klus) as $klu) {
                CooperativeKLU::create([
                    'cooperativeId' => $cooperative->cooperative_id,
                    'kluId' => $klu,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
    
            $management = CooperativeManagement::create([
                'status' => 'active',
                'nik' => '',
                'name' => $request->input('name'),
                'role' => 'Pengurus',
                'npwp' => '',
                'phone' => $request->input('phone'),
                'gender' => 'male',
                'cooperativeId' => $cooperative->cooperative_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);

            $token = Str::random(64);

            DB::table('cooperative_tokens')->insert([
                'cooperative_id' => $cooperative->cooperative_id,
                'token' => $token,
                'expires_at' => now()->addMinutes(30), // expire dalam 30 menit
            ]);

            $emailData = [
                'nama_koperasi' => $request->input('cooperative_name'),
                'provinsi' => $province->name ?? '-',
                'kabupaten' => $district->name ?? '-',
                'kecamatan' => $subdistrict->name ?? '-',
                'desa' => $village->name ?? '-',
                'alamat' => $request->input('alamat', '-'),
                'kode_pos' => $request->input('kode_pos', '-'),
                'telepon_koperasi' => $request->input('phone'),
                'email_koperasi' => $request->input('email'),
                'pj_nama' => $request->input('name'),
                'pj_email' => $request->input('email'),
                'pj_telepon' => $request->input('phone'),
                'action_url' => url('/verifikasi-pengajuan/' . $token),
            ];
            
            Mail::to($request->input('email'))->send(new CooperativeRegisterMail($emailData));
            
    
            return response()->json([
                'message' => 'Cooperative created successfully.',
                'data' => [
                    'user' => $user,
                    'cooperative' => $cooperative,
                    'legal_stage' => $legalStage,
                    'management' => $management
                ]
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Failed to create cooperative.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function verify($token)
    {
        $record = DB::table('cooperative_tokens')
            ->where('token', $token)
            ->where('expires_at', '>', now())
            ->first();

        if (!$record) {
            return response()->json(['message' => 'Token tidak valid atau expired'], 401);
        }

        $cooperative = Cooperative::where('cooperative_id', $record->cooperative_id)->first();

        if (!$cooperative) {
            return response()->json(['message' => 'Koperasi tidak ditemukan'], 404);
        }

        $user = User::find($cooperative->user_id); 

        $token = $user->createToken('magic-link-login')->plainTextToken;

        DB::table('cooperative_tokens')->where('token', $token)->delete();

        return redirect()->away("https://frontend.kop.id/dashboard?token={$token}");
    }


    

}
