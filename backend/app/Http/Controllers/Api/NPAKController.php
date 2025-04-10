<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\District;
use App\Models\Province;
use App\Models\NPAK;

class NPAKController extends Controller
{
    public function npaks()
    {
        $npaks = NPAK::with(['province', 'district'])
            ->where('provinceId', '!=', 0)
            ->orderBy('name', 'asc')
            ->get();

        $defaultNPAK = NPAK::with(['province', 'district'])
            ->where('provinceId', 0)
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => [...$defaultNPAK, ...$npaks],
        ], 201);
    }

    public function getByDistrict($districtCode)
    {
        $district = District::where('code', $districtCode)->first();
        if (!$district) {
            return response()->json([
                'message' => 'Invalid district',
                'error' => 'Invalida district'
            ], 500);
        }

        $npaks = NPAK::where('districtId', $district->district_id)
            ->where('provinceId', '!=', 0)
            ->with(['province', 'district'])
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $npaks,
        ], 201);
    }

    public function getByProvince($provinceCode)
    {
        $province = Province::where('code', $provinceCode)->first();
        if (!$province) {
            return response()->json([
                'message' => 'Invalid province',
                'error' => 'Invalida province'
            ], 500);
        }

        $npaks = NPAK::where('provinceId', $province->province_id)
            ->where('provinceId', '!=', 0)
            ->with(['province', 'district'])
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $npaks,
        ], 201);
    }
}
