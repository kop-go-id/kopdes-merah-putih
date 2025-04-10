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
Route::prefix('villages')->group(function () {
    Route::get('/by-sub-district-code/{subDistrictCode}', [LocationController::class, 'villages']);
    Route::get('/duplicate-check/{villageCode}', [LocationController::class, 'villageDuplicateCheck']);
});

Route::prefix('cooperative')->group(function () {
    Route::post('/register', [CooperativeController::class, 'register']);
    Route::get('/by-nik/{nik}', [CooperativeController::class, 'getByNIK']);
    Route::get('/types', [CooperativeController::class, 'getCooperativeTypes']);
});

Route::prefix('npak')->group(function () {
    Route::get('/npak', [NPAKController::class, 'npaks']);
    Route::get('/npak/by-district-code/{districtCode}', [NPAKController::class, 'getByDistrict']);
    Route::get('/npak/by-province-code/{provinceCode}', [NPAKController::class, 'getByProvince']);
});