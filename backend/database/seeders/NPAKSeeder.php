<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use App\Models\NPAK;

class NPAKSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        NPAK::insert([
            [
                'notary_id' => 1,
                'name' => 'Dede Zakaria, S.H., M.Kn.',
                'address' => 'Jl. Kh. Ahmad Dahlan No. 71 (D/H 6A) Kel. Petir, Kec. Cipondoh, Kota Tangerang',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'provinceId' => 11, // Jawa Barat
                'districtId' => 154, // Kab Bogor
                'ahu_number' => 'AHU-1114.AH.2.1.TAHUN 215',
                'sk_number' => 'W11.AH.2.1-183/XII/215',
                'certificate_training' => '1296/SERT-NPAK/DEP.I/VII/224224-27',
                'email' => 'ddzakaria12@gmail.com',
                'primary_phone' => '6281288017351',
                'secondary_phone' => '6281288017351',
                'office_telephone' => '(021)82495554'
            ],
            [
                'notary_id' => 2,
                'name' => 'Rasyida Thalib, S.H., M.Kn.',
                'address' => 'Jl. Aip Ks. Tubun No. 15 Kel. Pasar Batang Kec. Brebes Kab. Brebes',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'provinceId' => 11, // Jawa Barat
                'districtId' => 169, // Kab Bekasi
                'ahu_number' => 'C-37.HT.3.1-Th.27',
                'sk_number' => 'W8.HT.3.1-17/27',
                'certificate_training' => '131/SERT-NPAK/DEP.I/VII/224224-41',
                'email' => 'rastha_azatha@yahoo.com',
                'primary_phone' => '6281314561123',
                'secondary_phone' => '6285717362908',
                'office_telephone' => '(021)87901643'
            ],
            [
                'notary_id' => 3,
                'name' => 'Aviandini Hanuranti, S.H., M.Kn.',
                'address' => 'Jl. Kh. Ahmad Dahlan No. 71 (D/H 6A) Kel. Petir, Kec. Cipondoh, Kota Tangerang',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'provinceId' => 11, // Jawa Barat
                'districtId' => 154, // Kab Bogor
                'ahu_number' => 'AHU-81.AH.2.2.TAHUN 223',
                'sk_number' => 'W11.AH.2.1-15/II/217',
                'certificate_training' => '1325/SERT-NPAK/DEP.I/VII/224224-56',
                'email' => 'ahanuranti@gmail.com',
                'primary_phone' => '6282310270448',
                'secondary_phone' => '6281314561123',
                'office_telephone' => '(0251)8240762'
            ],
            [
                'notary_id' => 4,
                'name' => 'Ukon Krisnajaya, S.H., Spn.',
                'address' => 'Perum Griya Mas Matungkas Lorong Melon Block C No. 21 Desa Matungkas Kec. Dimembe',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'provinceId' => 38, // Jakarta
                'districtId' => 508, // Jakarta Selatan
                'ahu_number' => 'C-963.HT.3.2-Th.22',
                'sk_number' => '142/HKM.P/22/PN.Jak.Sel.',
                'certificate_training' => '136/SERT-NPAK/DEP.I/VII/224224-37',
                'email' => 'ukonkrisna@gmail.com',
                'primary_phone' => '6285717362908',
                'secondary_phone' => '628176634514',
                'office_telephone' => '(021)94901888'
            ],
            [
                'notary_id' => 5,
                'name' => 'Bella Ratna Syafierra, S.H., M.Kn.',
                'address' => 'Jl. Kh. Ali Hamzah No. 27, Kel. Payo Lebar, Kec. Jelutung, Kota Jambi',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'provinceId' => 11, // Jawa Barat
                'districtId' => 171, // Kota Bogor
                'ahu_number' => 'AHU–521.AH.2.1.TAHUN 223',
                'sk_number' => 'W.11.AH.2.1-1343/XI/223',
                'certificate_training' => '1312/SERT-NPAK/DEP.I/VII/224224-43',
                'email' => 'bellamuladi@gmail.com',
                'primary_phone' => '628176634514',
                'secondary_phone' => '6282310270448',
                'office_telephone' => '(021)82480748'
            ]
        ]);
    }
}
