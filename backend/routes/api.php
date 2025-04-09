<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\CooperativeController;
use App\Http\Controllers\Api\NPAKController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/profile', [AuthController::class, 'profile']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/provinces', [LocationController::class, 'provinces']);
Route::get('/districts/by-province-code/{provinceCode}', [LocationController::class, 'districts']);
Route::get('/sub-districts/by-district-code/{districtCode}', [LocationController::class, 'subDistricts']);
Route::get('/villages/by-sub-district-code/{subDistrictCode}', [LocationController::class, 'villages']);

Route::get('/cooperative/by-nik/{nik}', [CooperativeController::class, 'getByNIK']);
Route::get('/cooperative/types', [CooperativeController::class, 'getCooperativeTypes']);

Route::get('/npak', [NPAKController::class, 'npaks']);
Route::get('/npak/by-district-code/{districtCode}', [NPAKController::class, 'getByDistrict']);
Route::get('/npak/by-province-code/{provinceCode}', [NPAKController::class, 'getByProvince']);