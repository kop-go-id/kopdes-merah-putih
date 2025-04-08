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
        Schema::create('cooperative_legal_stages', function (Blueprint $table) {
            $table->id('cooperative_legal_stage_id');
            $table->char('cooperativeId', 50)->nullable(false);
            $table->char('legalStageId', 50)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cooperative_legal_stages');
    }
};
