"use client";

const termsData = [
  {
    title: "Pendahuluan",
    content:
      "Selamat datang di situs web MerahPutih.kop.id. Dengan mengakses dan menggunakan layanan, Anda dianggap menyetujui syarat dan ketentuan ini.",
  },
  {
    title: "Definisi",
    content:
      "Penjelasan istilah seperti Pengguna, Pengelola Layanan, Notaris, Dinas, dsb. sebagai acuan dalam syarat dan ketentuan.",
  },
  {
    title: "Ruang Lingkup Layanan",
    content:
      "Layanan ini mencakup pendaftaran koperasi, dashboard statistik, chatbot konsultasi, dan layanan non-transaksional lainnya.",
  },
  {
    title: "Hak & Kewajiban Pengguna",
    content:
      "Pengguna berhak mendapat informasi, privasi, bantuan, serta wajib memberikan data benar dan tidak menyalahgunakan layanan.",
  },
  {
    title: "Hak & Kewajiban Pengelola",
    content:
      "Pengelola berhak memverifikasi data, membatasi akses, dan bertanggung jawab menjaga keamanan sistem dan privasi pengguna.",
  },
  {
    title: "Ketentuan Dashboard Statistik",
    content:
      "Dashboard hanya bisa diakses pengguna berwenang, data bersifat agregat, tidak untuk komersial, dan harus digunakan secara bertanggung jawab.",
  },
  {
    title: "Ketentuan Layanan Chatbot",
    content:
      "Chatbot AI hanya memberikan informasi awal, tidak menggantikan konsultasi profesional, dan tidak dapat mengambil keputusan resmi.",
  },
  {
    title: "Kebijakan Privasi",
    content:
      "Data pribadi disimpan aman, digunakan sesuai tujuan layanan, tidak dibagikan ke pihak ketiga kecuali yang sah secara hukum.",
  },
  {
    title: "Batasan Tanggung Jawab Pengelola",
    content:
      "Pengelola tidak bertanggung jawab atas gangguan teknis, kesalahan data, atau penyalahgunaan informasi oleh pihak luar.",
  },
  {
    title: "Perubahan Layanan & Kebijakan",
    content:
      "Pengelola berhak mengubah layanan atau syarat dan ketentuan, serta akan memberi tahu pengguna melalui media yang tersedia.",
  },
  {
    title: "Hukum & Penyelesaian Sengketa",
    content:
      "Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia, dan jika terjadi sengketa akan diselesaikan melalui pengadilan.",
  },
];

export default function TermsSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#025669] text-center mb-10">
        Syarat dan Ketentuan Penggunaan Layanan
      </h1>

      <div className="space-y-8">
        {termsData.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-semibold text-[#025669] mb-2">
              {index + 1}. {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        <p>
          Terakhir diperbarui: <strong>8 April 2025</strong>
        </p>
        <p>
          Kontak:{" "}
          <a
            href="mailto:kopdes@merahputih.kop.id"
            className="text-[#025669] underline"
          >
            kopdes@merahputih.kop.id
          </a>
        </p>
      </div>
    </section>
  );
}
