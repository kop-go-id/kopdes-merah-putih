'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen flex items-center justify-center bg-white text-[#121212] font-sans px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
          Masuk Ke Akun Koperasi Desa Merah Putih
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Alamat email</label>
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
            <label className="block mb-1 font-medium">Kata Sandi</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Tetap Masuk
            </label>
            <Link href="#" className="text-primary hover:underline">
              Lupa Kata Sandi
            </Link>
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded"
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
