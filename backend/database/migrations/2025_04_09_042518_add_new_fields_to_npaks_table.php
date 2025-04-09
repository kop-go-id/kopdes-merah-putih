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
        Schema::table('npaks', function (Blueprint $table) {
            $table->unsignedBigInteger('districtId'); // FK ke tabel provinsi

            $table->foreign('districtId')
                ->references('district_id')
                ->on('districts')
                ->onDelete('cascade');

            $table->char('ahu_number', 50)->nullable(false);
            $table->char('sk_number', 50)->nullable(false);
            $table->char('certificate_training', 50)->nullable(false);
            $table->char('email', 50)->nullable(false);
            $table->char('primary_phone', 50)->nullable(false);
            $table->char('secondary_phone', 50)->nullable(false);
            $table->char('office_telephone', 50)->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('npaks', function (Blueprint $table) {
            $table->dropColumn([
                'districtId',
                'ahu_number',
                'sk_number',
                'certificate_training',
                'email',
                'primary_phone',
                'secondary_phone',
                'office_telephone',
            ]);
        });
    }
};
