import React from 'react';
import Image from 'next/image';

export default function Contacts() {
  const contatactData = Array.from({ length: 38 }, (_, i) => ({
    nama: `Kantor Wilayah ${i + 1}`,
    email: `wilayah${i + 1}@kopdes.id`,
    phone: `0812-000${i + 1}`,
    alamat: `Jl. Wilayah No.${i + 1}, Indonesia`,
  }));

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Logo dan Kontak Utama */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Image
          src="/images/logo.png" // Ganti dengan path logo kamu
          alt="Logo Koperasi Merah Putih"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-[#0D3B66]">
          Koperasi Merah Putih
        </h1>
        <p className="mt-2 text-gray-600">Email: dev@satu.kop.id</p>
        <p className="text-gray-600">Telepon: 0812-3456-7890</p>
        <p className="text-gray-600">
          Alamat: Jl. Merdeka No. 45, Jakarta Pusat
        </p>
      </div>

      {/* Daftar Kontak Kantor Wilayah */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-[#0D3B66] mb-6 text-center">
          Daftar Kontak Kantor Wilayah
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contatactData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-bold text-[#0D3B66] mb-2">{item.nama}</h3>
              <p className="text-sm text-gray-700">📍 {item.alamat}</p>
              <p className="text-sm text-gray-700">📞 {item.phone}</p>
              <p className="text-sm text-gray-700">✉️ {item.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
