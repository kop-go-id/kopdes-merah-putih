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
        Schema::create('districts', function (Blueprint $table) {
            $table->id('district_id');
            $table->char('province_code', 50);
            $table->char('name', 50);
            $table->char('code', 50)->unique(); // <- tambahkan ini!
            $table->timestamps();
        
            $table->foreign('province_code')
                ->references('code')
                ->on('provinces')
                ->onDelete('cascade');
        });              
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('districts');
    }
};
