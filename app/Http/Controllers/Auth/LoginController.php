<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): array
    {
        $request->authenticate();

        $user = $request->user();

        $remember = $request->boolean('remember');
        $tokenName = $remember ? 'main_remember' : 'main';
        $tokenResult = $user->createToken($tokenName);
        $token = $tokenResult->plainTextToken;

        if (!$remember) {
            $tokenResult->accessToken->expires_at = now()->addMinutes(120);
            $tokenResult->accessToken->save();
        }

        return [
            'user' => new UserResource($user),
            'token' => $token
        ];
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response()->noContent();
    }
}
