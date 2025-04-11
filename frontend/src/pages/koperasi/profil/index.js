'use client';

import React from 'react';
import LayoutWrapper from '@/components/Layout';
import Link from 'next/link';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function ProfilKoperasiPage() {
  const data = {
    namaKoperasi: 'Koperasi Desa Makmur',
    namaDiSk: 'Koperasi Desa Makmur Sejahtera',
    jenisKoperasi: 'Konsumen',
    wilayahKeanggotaan: 'Kabupaten',
    bentukKoperasi: 'Primer',
    polaPengelolaan: 'Konvensional',
    jangkaWaktu: 'Tidak terbatas',
    provinsi: 'Jawa Barat',
    kabupaten: 'Bandung',
    kecamatan: 'Cibiru',
    kelurahan: 'Cibiru Wetan',
    alamat: 'Jl. Raya Cibiru No. 12',
    rw: '05',
    rt: '03',
    kodePos: '40614',
    telepon: '081234567890',
    email: 'koperasi@makmur.id',
    namaNotaris: 'Budi Santosa, SH',
    dokRAT: 'RAT_2024.pdf',
    dokMusDes: 'Musdes_2024.pdf',
  };

  return (
    <LayoutWrapper>
      <div className="p-6">
        {/* Header dengan tombol Edit */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-[#004c5a]">
            Profil Koperasi
          </h1>
          <div className="hidden md:block">
            <Link href="/koperasi/profil/edit-forms">
              <Button
                type="primary"
                icon={<EditOutlined />}
                className="bg-[#025669]"
              >
                Edit Profil
              </Button>
            </Link>
          </div>
        </div>

        {/* Tombol Edit di mobile */}
        <div className="block md:hidden mb-4">
          <Link href="/koperasi/profil/edit-forms">
            <Button
              type="primary"
              icon={<EditOutlined />}
              className="bg-[#025669] hover:bg-[#024655]"
            >
              Edit Profil
            </Button>
          </Link>
        </div>

        {/* Informasi Profil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ReadOnly label="Nama Koperasi" value={data.namaKoperasi} />
          <ReadOnly label="Nama di SK" value={data.namaDiSk} />
          <ReadOnly label="Jenis Koperasi" value={data.jenisKoperasi} />
          <ReadOnly
            label="Wilayah Keanggotaan"
            value={data.wilayahKeanggotaan}
          />
          <ReadOnly label="Bentuk Koperasi" value={data.bentukKoperasi} />
          <ReadOnly label="Pola Pengelolaan" value={data.polaPengelolaan} />
          <ReadOnly label="Jangka Waktu" value={data.jangkaWaktu} />
        </div>

        {/* Kedudukan Koperasi */}
        <h3 className="text-xl font-semibold text-[#004c5a] mb-4">
          Kedudukan Koperasi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ReadOnly label="Provinsi" value={data.provinsi} />
          <ReadOnly label="Kabupaten/Kota" value={data.kabupaten} />
          <ReadOnly label="Kecamatan" value={data.kecamatan} />
          <ReadOnly label="Kelurahan/Desa" value={data.kelurahan} />
          <ReadOnly
            label="Alamat"
            value={data.alamat}
            className="md:col-span-2"
          />
          <ReadOnly label="RW" value={data.rw} />
          <ReadOnly label="RT" value={data.rt} />
          <ReadOnly label="Kode Pos" value={data.kodePos} />
          <ReadOnly label="Nomor Telepon" value={data.telepon} />
          <ReadOnly label="Email" value={data.email} />
        </div>

        {/* Dokumen Legalitas */}
        <h3 className="text-xl font-semibold text-[#004c5a] mb-4">
          Dokumen Legalitas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReadOnly label="Nama Notaris" value={data.namaNotaris} />
          <DocumentCard title="Dokumen RAT" fileName={data.dokRAT} />
          <DocumentCard
            title="Dokumen Musyawarah Desa"
            fileName={data.dokMusDes}
          />
        </div>
      </div>
    </LayoutWrapper>
  );
}

function ReadOnly({ label, value, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm text-gray-700 font-medium mb-1">{label}</label>
      <div className="text-gray-800">{value}</div>
    </div>
  );
}

function DocumentCard({ title, fileName }) {
  return (
    <div className="border border-gray-200 rounded p-4 shadow-sm">
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <a href="#" className="text-blue-600 underline text-sm">
        {fileName}
      </a>
    </div>
  );
}
