"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterStep1() {
  const router = useRouter()
  const [selected, setSelected] = useState("")

  const options = [
    {
      title: "Membangun Koperasi Baru",
      desc:
        "Dibentuk melalui musyawarah desa dengan calon anggota koperasi minimal 9 orang membentuk Koperasi Desa Merah Putih. Jumlah anggota dapat dikembangkan lebih banyak.",
    },
    {
      title: "Mengembangkan Yang Sudah Ada",
      desc:
        "Dibentuk melalui rapat Perubahan Anggaran Dasar melibatkan masyarakat desa untuk membentuk Koperasi Desa Merah Putih.",
    },
    {
      title: "Revitalisasi Koperasi",
      desc:
        "Dibentuk melalui pembentukan tim Revitalisasi internal Koperasi, terdiri dari perangkat organisasi (Pengurus, Pengawas, Anggota, dan Karyawan) dengan mempertimbangkan kualitas Sumber Daya Manusia/kompetensi.",
      disabled: true,
    },
  ]

  const handleNext = () => {
    if (!selected) return
    // Arahkan ke step-2 di dalam folder /register
    router.push("/register/step-2")
  }

  return (
    <div className="min-h-screen flex bg-white text-[#121212] font-sans">
      {/* Sidebar */}
      <aside className="w-[320px] bg-[#025669] text-white flex flex-col justify-between py-10 px-6 rounded-r-[32px]">
        <div>
          {/* Logo */}
          <div className="mb-10">
            <div className="text-sm font-bold uppercase tracking-wide">Koperasi Desa Merah Putih</div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            <StepItem active label="Pilih Skema" desc="Pilih salah satu dari tiga skema yang disediakan" />
            <StepItem label="Informasi Data Koperasi" desc="Isi detail dari data koperasi anda" />
            <StepItem label="Informasi Data Penanggung Jawab" desc="Isi data diri penanggung jawab koperasi" />
          </div>
        </div>

        {/* Kembali */}
        <button className="text-sm mt-10 text-white/80 hover:underline text-left">
          &larr; Kembali ke halaman utama
        </button>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-12">
        <h1 className="text-2xl font-bold mb-8">Pilih Skema Koperasi</h1>

        {/* Kontainer radio + tombol */}
        <div className="space-y-6 max-w-2xl w-full">
          {options.map((item, idx) => (
            <label
              key={idx}
              className={`flex items-start border rounded-xl p-4 cursor-pointer transition ${
                selected === item.title
                  ? "border-[#025669] bg-[#F0F9FA]"
                  : "border-gray-300 hover:border-[#025669]/50"
              } ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <input
                type="radio"
                name="skema"
                className="mt-1 mr-4"
                value={item.title}
                checked={selected === item.title}
                onChange={() => setSelected(item.title)}
                disabled={item.disabled}
              />
              <div>
                <div className="font-semibold text-lg">{item.title}</div>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </label>
          ))}

          {/* Tombol berikutnya */}
          <button
            onClick={handleNext}
            className={`w-full px-6 py-2 rounded-lg font-semibold transition ${
              selected
                ? "bg-[#025669] text-white hover:bg-[#024956]"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selected}
          >
            Berikutnya
          </button>
        </div>
      </main>
    </div>
  )
}

// Komponen Step di sidebar
function StepItem({ label, desc, active }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1">
        {active ? (
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#025669] text-sm font-bold">
            ✓
          </div>
        ) : (
          <div className="w-5 h-5 border-2 border-white rounded-full"></div>
        )}
      </div>
      <div>
        <div className={`font-semibold ${active ? "text-white" : "text-white/70"}`}>{label}</div>
        <div className="text-sm text-white/60">{desc}</div>
      </div>
    </div>
  )
}
