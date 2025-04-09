<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Http\Request;
use App\Models\CooperativeType;
use App\Models\Cooverative;

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
            for ($i=0; $i < count($fields); $i++) { 
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

    // public function index()
    // {
    //     $cooperatives = Cooverative::with([
    //         'province:id,name',
    //         'district:id,name',
    //         'subdistrict:id,name',
    //         'village:id,name',
    //         'npak:id,name',
    //         'user:id,name,email'
    //     ])->get();

    //     return response()->json([
    //         'message' => 'List of cooperatives',
    //         'data' => $cooperatives
    //     ]);
    // }

    // public function store(Request $request)
    // {
    //     try {
    //         $request->validate([
    //             'name'              => 'required|string|max:50',
    //             'display_name'      => 'nullable|string|max:50',
    //             'working_area'      => 'nullable|string|max:50',
    //             'form'              => 'required|string|max:50',
    //             'management_pattern'=> 'required|string|max:50',
    //             'timeframe'         => 'nullable|date',
    //             'provinceId'        => 'required|exists:provinces,province_id',
    //             'districtId'        => 'required|exists:districts,district_id',
    //             'subdistrictId'     => 'required|exists:subdistricts,subdistrict_id',
    //             'villageId'         => 'required|exists:villages,village_id',
    //             'address'           => 'nullable|string|max:50',
    //             'rt'                => 'nullable|string|max:50',
    //             'rw'                => 'nullable|string|max:50',
    //             'postal_code'       => 'nullable|string|max:50',
    //             'phone'             => 'required|string|max:50',
    //             'email'             => 'required|email|max:50',
    //             'npakId'            => 'required|exists:npaks,notary_id',
    //             'napk'              => 'nullable|string|max:50',
    //             'establishment_date'=> 'nullable|string|max:50',
    //             'meeting_date'      => 'nullable|string|max:50',
    //             'meeting_address'   => 'nullable|string|max:50',
    //             'meeting_participant'=> 'nullable|string|max:50',
    //             'capital'           => 'nullable|string|max:50',
    //             'principal_saving'  => 'nullable|string|max:50',
    //             'mandatory_saving'  => 'nullable|string|max:50',
    //             'grant_fund'        => 'nullable|string|max:50',
    //             'bamd'              => 'required|string|max:50',
    //             'bara'              => 'required|string|max:50',
    //             'subdomain'         => 'required|string|max:50|unique:cooperatives,subdomain',
    //             'nik'               => 'required|numeric',
    //             'userId'            => 'required|exists:users,id',
    //             'request_name'      => 'nullable|numeric',
    //             'old_name'          => 'nullable|numeric',
    //             'registration_type' => 'required|string|max:50',
    //         ]);

    //         $cooperative = Cooverative::create($request->all());

    //         return response()->json([
    //             'message' => 'Cooperative created successfully.',
    //             'data' => $cooperative
    //         ], 201);

    //     } catch (\Throwable $e) {
    //         return response()->json([
    //             'message' => 'Failed to create cooperative.',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

}
