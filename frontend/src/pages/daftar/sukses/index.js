import { Result, Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        {/* Logo */}
        <div className="mb-6">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>

        {/* Ant Design Success Component */}
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
          <Result
            status="success"
            title="🎉 Pendaftaran Berhasil!"
            subTitle="Terima kasih telah mendaftar di Koperasi Merah Putih. Kami akan segera menghubungi Anda untuk proses selanjutnya."
            extra={
              <Link href="/">
                <Button type="primary" className="bg-blue-600 hover:bg-blue-700">
                  Kembali ke Beranda
                </Button>
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
}
