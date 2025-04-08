'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
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
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/images/bg-login.jpeg')",
      }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Logo Koperasi"
            width={110}
            height={110}
            className="object-contain sm:w-[100px] sm:h-[100px]"
          />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#025669] text-center mb-6">
          Masuk Ke Akun Koperasi Desa Merah Putih
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Alamat email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Kata Sandi</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Tetap Masuk
            </label>
            <Link href="#" className="text-[#025669] hover:underline text-sm">
              Lupa Kata Sandi
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#025669] text-white w-full py-2 rounded text-sm sm:text-base"
          >
            Kirim
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-600 text-sm hover:underline">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
