<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolePositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('role_positions')->insert([
            [
                'role_id' => 1,
                'roleId' => '1',
                'position' => 'PENANGGUNG JAWAB KOPERASI',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 2,
                'roleId' => '1',
                'position' => 'ADMIN KOPERASI',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 3,
                'roleId' => '2',
                'position' => '18 KEMENTERIAN',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 4,
                'roleId' => '2',
                'position' => 'KOORDINATOR KEMENTERIAN',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 5,
                'roleId' => '3',
                'position' => 'INSTANSI DINAS',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 6,
                'roleId' => '4',
                'position' => 'PENANGGUNG JAWAB NPAK',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 7,
                'roleId' => '4',
                'position' => 'ADMIN NPAK',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_id' => 8,
                'roleId' => '5',
                'position' => 'CRUDD ALL',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
