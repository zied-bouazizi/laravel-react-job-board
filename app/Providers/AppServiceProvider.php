<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\PersonalAccessToken;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url') . "/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });

        JsonResource::withoutWrapping();

        if (!app()->runningInConsole() && auth('sanctum')->check() && random_int(1, 100) <= 2) {
            PersonalAccessToken::whereNotNull('expires_at')
                ->where('expires_at', '<', now())
                ->limit(500)
                ->delete();
        }
    }
}
