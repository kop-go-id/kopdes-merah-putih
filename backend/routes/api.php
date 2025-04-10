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
Route::post('/forgot-password', [AuthController::class, 'sendResetLink']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/provinces', [LocationController::class, 'provinces']);
Route::get('/districts/by-province-code/{provinceCode}', [LocationController::class, 'districts']);
Route::get('/sub-districts/by-district-code/{districtCode}', [LocationController::class, 'subDistricts']);
Route::prefix('villages')->group(function () {
    Route::get('/by-sub-district-code/{subDistrictCode}', [LocationController::class, 'villages']);
    Route::get('/duplicate-check/{villageCode}', [LocationController::class, 'villageDuplicateCheck']);
});

Route::apiResource('cooperatives', CooperativeController::class);
Route::get('/verifikasi-pengajuan', [CooperativeController::class, 'verify']);

Route::prefix('cooperative')->group(function () {
    Route::post('/register', [CooperativeController::class, 'register']);
    Route::get('/by-nik/{nik}', [CooperativeController::class, 'getByNIK']);
    Route::get('/types', [CooperativeController::class, 'getCooperativeTypes']);
});

Route::prefix('npak')->group(function () {
    Route::get('/', [NPAKController::class, 'npaks']);
    Route::get('/search', [NPAKController::class, 'search']);
    Route::get('/validity-check/{notaryId}/{districtCode}', [NPAKController::class, 'validityCheck']);
    Route::get('/by-district-code/{districtCode}', [NPAKController::class, 'getByDistrict']);
    Route::get('/by-province-code/{provinceCode}', [NPAKController::class, 'getByProvince']);
});