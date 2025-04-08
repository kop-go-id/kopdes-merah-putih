<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Http\Request;

class CooperativeController extends Controller
{
    public function getByNIK(Request $request, $nik)
    {
        $targetUrl = 'https://nik.kop.go.id/odsnik/detail';

        if (!$nik) {
            return response()->json([
                'message' => 'Terjadi kesalahan saat mendapatkan data koperasi.',
                'error' => 'NIK tidak tersedia',
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
                "Alamat",
                "Desa / Kelurahan",
                "Kecamatan",
                "Kabupaten",
                "Provinsi",
                "Bentuk Koperasi",
                "Jenis Koperasi",
                "Sektor Usaha",
                "Kelompok Koperasi",
                "Pola Pengelolaan"
            ];

            $targetFields = [
                "name",
                "address",
                "village",
                "subdistrict",
                "district",
                "province",
                "form",
                "jenis_koperasi",
                "working_area",
                "kelompok_koperasi",
                "pola_pengelolaan"
            ];

            $result = [];
            for ($i=0; $i < count($fields); $i++) { 
                $result[$targetFields[$i]] = $data[$fields[$i]] ?? null;
            }

            return response()->json([
                'message' => 'Data koperasi',
                'data' => $result,
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan saat mendapatkan data koperasi.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
