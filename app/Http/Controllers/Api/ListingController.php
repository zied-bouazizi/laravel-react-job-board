<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ListingResource;
use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->get('limit', 6);
        $listings = Listing::latest()->paginate($perPage);

        return ListingResource::collection($listings);
    }
}
