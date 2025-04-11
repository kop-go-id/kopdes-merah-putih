<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            ['role_id' => 1, 'name' => 'KOPERASI', 'created_at' => now(), 'updated_at' => now()],
            ['role_id' => 2, 'name' => 'KEMENTERIAN LEMBAGA', 'created_at' => now(), 'updated_at' => now()],
            ['role_id' => 3, 'name' => 'KOORDINATOR WILAYAH & DINAS', 'created_at' => now(), 'updated_at' => now()],
            ['role_id' => 4, 'name' => 'NPAK', 'created_at' => now(), 'updated_at' => now()],
            ['role_id' => 5, 'name' => 'ADMINISTRATOR', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
