// app/register/step-2-develop/page.js
"use client";

import { useRouter } from "next/navigation";

export default function Step2Develop() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex bg-white text-[#121212] font-sans">
      {/* Sidebar */}
      <aside className="w-[300px] bg-[#025669] text-white px-6 py-10 rounded-r-3xl">
        <div className="mb-10">
          <img src="/logo-koperasi.png" alt="Logo" className="w-32 mb-6" />
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="h-5 w-5 rounded-full bg-white text-[#025669] flex items-center justify-center text-sm font-bold">✓</div>
              <div>
                <p className="font-semibold">Pilih Skema</p>
                <p className="text-sm text-white/80">Pilih salah satu dari tiga skema yang disediakan</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-5 w-5 rounded-full bg-white text-[#025669] flex items-center justify-center text-sm font-bold">✓</div>
              <div>
                <p className="font-semibold">Informasi Data Koperasi</p>
                <p className="text-sm text-white/80">Isi detail dari data koperasi anda</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-5 w-5 border-2 border-white rounded-full" />
              <div>
                <p className="font-semibold text-white/70">Informasi Data Penanggung Jawab</p>
                <p className="text-sm text-white/50">Isi data diri penanggung jawab koperasi</p>
              </div>
            </div>
          </div>
          <button className="mt-20 text-white text-sm flex items-center space-x-2">
            ← <span>Kembali ke halaman utama</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 px-10 py-12">
        <h2 className="text-2xl font-bold text-[#025669]">Informasi Data Koperasi</h2>
        <p className="text-[#A4CE4E] font-semibold mb-8">Mengembangkan Yang Sudah Ada</p>

        <form className="space-y-4 max-w-3xl">
          <div>
            <label className="block font-semibold mb-1">Nomor Induk Koperasi</label>
            <div className="relative">
              <input type="text" className="w-full border rounded px-4 py-2 pr-10" />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Nama Koperasi Existing</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Provinsi</label>
              <select className="w-full border rounded px-4 py-2">
                <option>Pilih Provinsi</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Kecamatan</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Desa / Kelurahan</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Pilih Desa</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Nama Koperasi Baru</label>
            <input
              type="text"
              placeholder="Masukkan Nama Koperasi"
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Notaris Pembuat Akta Koperasi</label>
            <select className="w-full border rounded px-4 py-2">
              <option>Pilih Notaris</option>
            </select>
          </div>

          {/* Dokumen Musyawarah */}
          <div>
            <label className="block font-semibold mb-1">
              Berita Acara Musyawarah Desa{" "}
              <button type="button" className="ml-2 text-white bg-[#025669] text-xs px-2 py-1 rounded">
                Unduh Template Musyawarah Desa
              </button>
            </label>
            <div className="border rounded p-6 text-center text-sm text-gray-500">📄 Unggah atau tarik dokumen ke sini</div>
          </div>

          {/* Dokumen Rapat Anggota */}
          <div>
            <label className="block font-semibold mb-1">
              Berita Acara Rapat Anggota{" "}
              <button type="button" className="ml-2 text-white bg-[#025669] text-xs px-2 py-1 rounded">
                Unduh Template Rapat Anggota
              </button>
            </label>
            <div className="border rounded p-6 text-center text-sm text-gray-500">📄 Unggah atau tarik dokumen ke sini</div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Jenis Usaha Koperasi</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Pendaftaran Nama Domain</label>
            <div className="flex items-center">
              <input type="text" className="w-full border rounded-l px-4 py-2" />
              <span className="bg-gray-200 px-3 py-2 rounded-r text-sm text-gray-600">.kop.id</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="text-gray-500"
              onClick={() => router.back()}
            >
              Kembali
            </button>
            <button
              type="button"
              className="bg-[#025669] text-white px-6 py-2 rounded"
              onClick={() => router.push("/register/step-3")}
            >
              Berikutnya
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
