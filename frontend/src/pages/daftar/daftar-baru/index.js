"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterStep2() {
  const router = useRouter()

  const [form, setForm] = useState({
    provinsi: "",
    desa: "",
    kecamatan: "",
    notaris: "",
    jenisUsaha: "",
    domain: "",
    fileMusyawarah: null,
    fileRapat: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    // validasi bisa ditambah di sini
    router.push("/register/step-3")
  }

  const handleBack = () => {
    router.push("/register/step-1")
  }

  return (
    <div className="min-h-screen flex bg-white text-[#121212] font-sans">
      {/* Sidebar */}
      <aside className="w-[320px] bg-[#025669] text-white flex flex-col justify-between py-10 px-6 rounded-r-[32px]">
        <div>
          <div className="mb-10">
            <div className="text-sm font-bold uppercase tracking-wide">Koperasi Desa Merah Putih</div>
          </div>

          <div className="space-y-8">
            <StepItem checked label="Pilih Skema" desc="Pilih salah satu dari tiga skema yang disediakan" />
            <StepItem active label="Informasi Data Koperasi" desc="Isi detail dari data koperasi anda" />
            <StepItem label="Informasi Data Penanggung Jawab" desc="Isi data diri penanggung jawab koperasi" />
          </div>
        </div>

        <button className="text-sm mt-10 text-white/80 hover:underline text-left">
          &larr; Kembali ke halaman utama
        </button>
      </aside>

      {/* Form Content */}
      <main className="flex-1 p-12">
        <h1 className="text-2xl font-bold">Informasi Data Koperasi</h1>
        <p className="text-[#78BE20] font-semibold mb-8">Membangun Koperasi Baru</p>

        <div className="space-y-6 max-w-2xl w-full">
          {/* Nama koperasi */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Koperasi Baru</label>
            <input
              type="text"
              readOnly
              value="Koperasi Desa Merah Putih"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>

          {/* Provinsi */}
          <div>
            <label className="block text-sm font-medium mb-1">Provinsi</label>
            <select
              name="provinsi"
              value={form.provinsi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Pilih Provinsi</option>
              <option value="jawa-barat">Jawa Barat</option>
              <option value="jawa-tengah">Jawa Tengah</option>
              <option value="jawa-timur">Jawa Timur</option>
            </select>
          </div>

          {/* Desa & Kecamatan */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Desa / Kelurahan</label>
              <input
                type="text"
                name="desa"
                value={form.desa}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kecamatan</label>
              <input
                type="text"
                name="kecamatan"
                value={form.kecamatan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Notaris */}
          <div>
            <label className="block text-sm font-medium mb-1">Notaris Pembuat Akta Koperasi</label>
            <select
              name="notaris"
              value={form.notaris}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Pilih Notaris</option>
              <option value="notaris-a">Notaris A</option>
              <option value="notaris-b">Notaris B</option>
            </select>
          </div>

          {/* Upload Musyawarah */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Berita Acara Musyawarah Desa</label>
              <button className="text-xs px-2 py-1 bg-[#025669] text-white rounded">
                Unduh Template Musyawarah Desa
              </button>
            </div>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 text-center text-sm text-gray-600 bg-gray-50">
              <input type="file" className="hidden" id="musyawarah-upload" />
              <label htmlFor="musyawarah-upload" className="cursor-pointer">
                Unggah atau tarik dokumen ke sini
              </label>
            </div>
          </div>

          {/* Upload Rapat */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Berita Acara Rapat Anggota</label>
              <button className="text-xs px-2 py-1 bg-[#025669] text-white rounded">
                Unduh Template Rapat Anggota
              </button>
            </div>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 text-center text-sm text-gray-600 bg-gray-50">
              <input type="file" className="hidden" id="rapat-upload" />
              <label htmlFor="rapat-upload" className="cursor-pointer">
                Unggah atau tarik dokumen ke sini
              </label>
            </div>
          </div>

          {/* Jenis Usaha */}
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Usaha Koperasi</label>
            <select
              name="jenisUsaha"
              value={form.jenisUsaha}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Pilih jenis usaha</option>
              <option value="simpan-pinjam">Simpan Pinjam</option>
              <option value="produsen">Produsen</option>
              <option value="konsumen">Konsumen</option>
            </select>
          </div>

          {/* Domain */}
          <div>
            <label className="block text-sm font-medium mb-1">Pendaftaran Nama Domain</label>
            <div className="flex items-center">
              <input
                type="text"
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-l-lg px-4 py-2"
              />
              <span className="bg-gray-100 border border-l-0 border-gray-300 px-4 py-2 rounded-r-lg">.kop.id</span>
            </div>
          </div>

          {/* Tombol Navigasi */}
          <div className="flex justify-between mt-8">
            <button onClick={handleBack} className="text-gray-600 hover:underline">
              Kembali
            </button>
            <button
              onClick={handleNext}
              className="bg-[#025669] text-white px-6 py-2 rounded-lg hover:bg-[#024956]"
            >
              Berikutnya
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function StepItem({ label, desc, active, checked }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1">
        {checked ? (
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#025669] text-sm font-bold">
            ✓
          </div>
        ) : active ? (
          <div className="w-5 h-5 bg-white border-2 border-white rounded-full"></div>
        ) : (
          <div className="w-5 h-5 border-2 border-white rounded-full"></div>
        )}
      </div>
      <div>
        <div className={`font-semibold ${active || checked ? "text-white" : "text-white/70"}`}>{label}</div>
        <div className="text-sm text-white/60">{desc}</div>
      </div>
    </div>
  )
}
