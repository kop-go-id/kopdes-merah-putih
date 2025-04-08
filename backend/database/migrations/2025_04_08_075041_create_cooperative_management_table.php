<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cooperative_management', function (Blueprint $table) {
            $table->id('cooperative_management_id');
            $table->char('status', 50)->nullable(false);
            $table->char('nik', 50)->nullable(false);
            $table->char('name', 50)->nullable(false);
            $table->char('role', 50)->nullable(false);
            $table->char('npwp', 50)->nullable(false);
            $table->char('phone', 50)->nullable(false);
            $table->char('gender', 50)->nullable(false);
            $table->unsignedBigInteger('cooperativeId');

            $table->foreign('cooperativeId')->references('cooperative_id')->on('cooperatives')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cooperative_management');
    }
};
