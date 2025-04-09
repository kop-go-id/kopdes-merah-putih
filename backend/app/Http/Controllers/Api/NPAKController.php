<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NPAK;

class NPAKController extends Controller
{
    public function npaks()
    {
        $npaks = NPAK::with(['province', 'district'])->orderBy('name', 'asc')->get();
        return response()->json([
            'message' => 'Success',
            'data' => $npaks,
        ], 201);
    }
}
