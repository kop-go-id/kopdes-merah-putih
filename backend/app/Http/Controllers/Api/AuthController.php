<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        try {
            $request->validate([
                'name'     => 'required|string|max:255',
                'email'    => 'required|email|unique:users,email',
                'phone'    => 'required|string|unique:users,phone',
                'role'     => 'required|in:Administrator,Administrator koperasi',
                'password' => 'required|string|min:6|confirmed',
            ]);

            $user = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'phone'    => $request->phone,
                'role'     => $request->role,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Registration successfull!',
                'user' => $user,
                'token' => $token
            ], 201);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'An error occurred during registration.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message' => 'Invalid credentials.',
                ], 401);
            }

            $cooperative = $user->cooperative;

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login successful.',
                'user' => $user,
                'cooperative' => $cooperative,
                'token' => $token
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'An error occurred during login.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout successfull.',
        ]);
    }

    public function profile(Request $request)
    {
        try {
            $user = $request->user();

            if (!$user) {
                return response()->json([
                    'message' => 'User not found.',
                ], 404);
            }

            return response()->json([
                'message' => 'User profile retrieved successfully.',
                'user' => $user
            ], 200);
            
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'An error occurred while retrieving the profile.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        Log::info('Status Password Reset', ['status' => $status]);

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json(['message' => 'Password reset link has been sent to your email.']);
        } elseif ($status === Password::RESET_THROTTLED) {
            return response()->json(['message' => 'Too many reset attempts. Please try again later.'], 429);
        }

        return response()->json(['message' => 'Failed to send password reset link.'], 500);
    }


}