<?php

use App\Http\Controllers\Api\ListingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('listings', ListingController::class);

require __DIR__ . '/auth.php';
