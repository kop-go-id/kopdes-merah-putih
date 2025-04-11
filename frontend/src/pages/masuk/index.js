'use client';

import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { login } from '@/services/auth';
import { fetchProvince } from '@/services/region';

export default function LoginFormAntd() {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleLogin = (values) => {
    // fetchProvince()
    try {
      login(values);
    } catch (error) {
      console.log(error)
    }
    // router.push('/koperasi');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/bg-login.jpeg')" }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Logo Koperasi"
            width={100}
            height={100}
            className="object-contain sm:w-[130px] sm:h-[130px]"
          />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#025669] text-center mb-6">
          Masuk Ke Akun Koperasi Desa/Kelurahan Merah Putih
        </h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          className="space-y-4"
        >
          <Form.Item
            label="Alamat email"
            name="email"
            rules={[{ required: true, message: 'Mohon masukkan email Anda' }]}
          >
            <Input placeholder="Masukkan email" />
          </Form.Item>

          <Form.Item
            label="Kata Sandi"
            name="password"
            rules={[
              { required: true, message: 'Mohon masukkan kata sandi Anda' },
            ]}
          >
            <Input.Password placeholder="Masukkan kata sandi" />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <Link href="#" className="text-[#025669] text-sm hover:underline">
              Lupa Kata Sandi
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              // onClick={() => router.push('/koperasi/pendaftaran')}
              className="bg-[#025669] w-full hover:opacity-90"
            >
              Masuk
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-600 text-sm hover:underline">
            Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}
