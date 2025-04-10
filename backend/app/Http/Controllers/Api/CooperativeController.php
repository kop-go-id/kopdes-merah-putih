<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CooperativeKLU;
use App\Models\CooperativeManagement;
use Hash;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Http\Request;
use App\Models\CooperativeType;
use App\Models\Cooverative;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;

class CooperativeController extends Controller
{
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
                'cooperative_name' => 'required|string|max:50|unique:cooperatives,name',
                'province_id' => 'required|exists:provinces,province_id',
                'district_id' => 'required|exists:districts,district_id',
                'subdistrict_id' => 'required|exists:subdistricts,subdistrict_id',
                'village_id' => 'required|exists:villages,village_id',
                'npak_id' => 'required|exists:npaks,notary_id',
                'bamd' => 'required|file|mimes:pdf,docx',
                'bara' => 'required|file|mimes:pdf,docx',
                'klu_ids' => 'required|string',
                'subdomain' => 'required|string|max:50|unique:cooperatives,subdomain',
                'name' => 'required|string|min:3|max:50',
                'email' => 'required|string|email|min:3|max:50|unique:users,email',
                'phone' => 'required|string|min:3|max:50|unique:users,phone',
                'password' => 'required|min:8|max:50|confirmed',
            ]);
    
            $user = User::create([
                'name'=> $request->input('name'),
                'email' => $request->input('email'),
                'phone'=> $request->input('phone'),
                'password'=> Hash::make($request->input('password')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);

            $bamd = $request->file('bamd');
            $bamd_file_name = time() . '_' . $bamd->getClientOriginalName();
            $bara_file_name = time() . '_' . $bamd->getClientOriginalName();
            $storeBamd = $bamd->storeAs("test", $bamd_file_name, "gcs");
            $storeBara = $bamd->storeAs("test", $bara_file_name, "gcs");
            $disk = Storage::disk('gcs');
            $fetchBamd = $disk->url($storeBamd);
            $fetchBara = $disk->url($storeBamd);

            $cooperative = Cooverative::create([
                'name' => $request->input('cooperative_name'),
                'provinceId' => $request->input('province_id'),
                'districtId' => $request->input('district_id'),
                'subdistrictId' => $request->input('subdistrict_id'),
                'villageId' => $request->input('village_id'),
                'userId' => $user->id,
                'npakId' => 1,
                'subdomain' => $request->input('subdomain'),
                'email' => $request->input('email'),
                'phone'=> $request->input('phone'),
                'bamd' => $fetchBamd,
                'bara' => $fetchBara
            ]);
    
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
                'role' => 'Administrator koperasi',
                'npwp' => '',
                'phone' => $request->input('phone'),
                'gender' => 'male',
                'cooperativeId' => $cooperative->cooperative_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
    
            return response()->json([
                'message' => 'Cooperative created successfully.',
                'data' => [
                    'user' => $user,
                    'cooperative' => $cooperative,
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

    public function uploadFile(UploadedFile $file, $folder = null, $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        return $file->storeAs(
            $folder,
            $name . "." . $file->getClientOriginalExtension(),
            'gcs'
        );
    }

}
