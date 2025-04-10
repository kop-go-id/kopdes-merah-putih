<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Province;
use App\Models\District;
use App\Models\Subdistrict;
use App\Models\Village;

class LocationController extends Controller
{
    public function provinces()
    {
        $provinces = Province::orderBy('name', 'asc')
            ->where('province_id', '!=', 0)
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $provinces,
        ], 200);
    }

    public function districts(Request $request, $provinceCode)
    {
        $districts = District::where('province_code', $provinceCode)
            ->where('district_id', '!=', 0)
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $districts,
        ], 200);
    }

    public function subDistricts(Request $request, $districtCode)
    {
        $subdistricts = Subdistrict::where('district_code', $districtCode)
            ->where('subdistrict_id', '!=', 0)
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $subdistricts,
        ], 200);
    }

    public function villages(Request $request, $subDistrictCode)
    {
        $villages = Village::where('subdistrict_code', $subDistrictCode)
            ->where('village_id', '!=', 0)
            ->orderBy('name', 'asc')
            ->get();
        return response()->json([
            'message' => 'Success',
            'data' => $villages,
        ], 200);
    }
}
