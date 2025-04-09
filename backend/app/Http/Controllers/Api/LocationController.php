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
        $provinces = Province::orderBy('name', 'asc')->get();
        return response()->json([
            'message' => 'Data provinsi',
            'data' => $provinces,
        ], 200);
    }

    public function districts(Request $request, $provinceCode)
    {
        $districts = District::where('province_code', $provinceCode)->orderBy('name', 'asc')->get();
        return response()->json([
            'message' => 'Data district',
            'data' => $districts,
        ], 200);
    }

    public function subDistricts(Request $request, $districtCode)
    {
        $subdistricts = Subdistrict::where('district_code', $districtCode)->orderBy('name', 'asc')->get();
        return response()->json([
            'message' => 'Data sub district',
            'data' => $subdistricts,
        ], 200);
    }

    public function villages(Request $request, $subDistrictCode)
    {
        $villages = Village::where('subdistrict_code', $subDistrictCode)->orderBy('name', 'asc')->get();
        return response()->json([
            'message' => 'Data villages',
            'data' => $villages,
        ], 200);
    }
}
