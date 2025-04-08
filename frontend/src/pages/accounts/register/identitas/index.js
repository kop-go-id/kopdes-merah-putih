// app/register/step-3/page.js

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Step3() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noHp: '',
    password: '',
    konfirmasiPassword: '',
    setuju: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lanjutkan ke proses submit atau simpan ke state global
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex bg-white text-[#121212] font-sans">
      {/* Sidebar */}
      <div className="w-[300px] bg-[#025669] text-white p-6 rounded-tr-[2rem] rounded-br-[2rem] flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <h1 className="text-sm font-bold">KOPERASI DESA MERAH PUTIH</h1>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-white bg-white mt-1" />
              <div>
                <p className="font-semibold">Pilih Skema</p>
                <p className="text-sm text-white/80">
                  Pilih salah satu dari tiga skema yang disediakan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-white bg-white mt-1" />
              <div>
                <p className="font-semibold">Informasi Data Koperasi</p>
                <p className="text-sm text-white/80">
                  Isi detail dari data koperasi anda
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-white bg-white mt-1" />
              <div>
                <p className="font-semibold">Informasi Data Penanggung Jawab</p>
                <p className="text-sm text-white/80">
                  Isi data diri penanggung jawab untuk personalisasi akun
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/register/step-2">
          <p className="text-sm underline mt-10">&larr; Kembali ke informasi data koperasi</p>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-semibold text-[#025669] mb-6">
          Informasi Data Penanggung Jawab
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          <div>
            <label className="block mb-1 font-medium">Nama Penanggung Jawab</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Alamat Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Nomor HP</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 rounded-l text-sm">
                  +62
                </span>
                <input
                  type="tel"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-r px-4 py-2"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Buat Kata Sandi</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Ulangi Kata Sandi</label>
              <input
                type="password"
                name="konfirmasiPassword"
                value={formData.konfirmasiPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="setuju"
              checked={formData.setuju}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <p className="text-sm">
              Saya menyatakan data yang saya berikan adalah benar, jika dikemudian hari ternyata terdapat ketidaksesuaian atau kekeliruan, saya bersedia menerima segala konsekuensi hukum serta sanksi administratif yang berlaku.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              type="submit"
              className="bg-[#025669] text-white w-full md:w-40 py-2 rounded"
            >
              Kirim
            </button>
            <Link
              href="/register/step-2"
              className="text-sm text-gray-700 underline"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
