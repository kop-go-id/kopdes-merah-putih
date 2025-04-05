import { useState, useEffect } from "react";
import {
  Wrench,
  FastForward,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("July 12, 2025 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const modelData = [
    {
      icon: <Wrench size={40} className="text-[#A0B73E]" />,
      title: "Membangun Koperasi Baru",
    },
    {
      icon: <FastForward size={40} className="text-[#A0B73E]" />,
      title: "Mengembangkan yang Sudah Ada",
    },
    {
      icon: <Users size={40} className="text-[#A0B73E]" />,
      title: "Revitalisasi Koperasi",
    },
  ];

  const benefitsData = [
    {
      image: "/images/nelayan.png",
      title: "Pemberdayaan, pelibatan & kohesi sosial masyarakat",
    },
    {
      image: "/images/pexels-photo-4445848.jpeg",
      title: "Memperpendek supply chain (rantai pasok)",
    },
    {
      image: "/images/pexels-photo-3226898.jpeg",
      title: "Menekan harga di tingkat konsumen",
    },
    {
      image: "/images/pexels-photo-2857587.jpeg",
      title: "Mensejahterakan petani & produsen lokal",
    },
  ];

  const bussinessTypeData = [
    "Gerai Sembako (Embrio KopHub)",
    "Apotek Desa",
    "Gerai Kantor Koperasi",
    "Gerai Unit Usaha Simpan Pinjam (Embrio Kop Bank)",
    "Gerai Klinik Desa",
    "Gerai Cold Storage/Cold Chain",
    "Logistik (Distribusi)",
  ];

  const faqs = [
    {
      question: "Apakah semua koperasi wajib menggunakan domain .kop.id?",
      answer:
        "Baik Koperasi yang sudah memiliki website sendiri maupun yang belum, semua diwajibkan beralih ke domain .kop.id sebagai identitas koperasi di digital agar aktivitas digitalnya terhubung dalam Digitalisasi Koperasi.",
    },
    {
      question: "Bagaimana cara mendaftar domain .kop.id?",
      answer:
        "Untuk mendaftar domain .kop.id, koperasi perlu mengajukan permohonan melalui platform resmi yang telah ditentukan oleh pemerintah.",
    },
    {
      question: "Apakah ada biaya tahunan untuk domain ini?",
      answer:
        "Ya, terdapat biaya tahunan yang harus dibayarkan oleh koperasi untuk mempertahankan domain .kop.id agar tetap aktif.",
    },
  ];

  const regulations = [
    "Undang-Undang Nomor 25 Tahun 1992 tentang Perkoperasian",
    "Undang-Undang Nomor 6 Tahun 2014 tentang Desa",
    "Undang-Undang Nomor 59 Tahun 2024 tentang RPJPN Tahun 2025–2045",
    "Peraturan Pemerintah Nomor 7 Tahun 2021 tentang Kemudahan, Pelindungan dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil dan Menengah",
    "Peraturan Pemerintah Nomor 11 Tahun 2021 tentang Badan Usaha Milik Desa",
    "Peraturan Presiden Nomor 12 tahun 2025 tentang RPJMN tahun 2025–2029",
    "Peraturan Menteri Desa PDT No 7 Tahun 2023 tentang Prioritas Penggunaan Dana Desa tahun 2024",
    "Rancangan Peraturan Menteri Koperasi tentang Koperasi Desa Merah Putih",
  ];
  return (
    <div className="poppins-regular bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero */}
      <div className="relative w-full bg-white shadow-md pt-[70px] md:pt-[90px] lg:pt-[80px] pb-6 flex flex-col items-center">
        {/* Wrapper untuk Grid di Desktop */}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Countdown Section */}
          <div className="relative w-full md:order-2">
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex justify-center">
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center "
                style={{
                  backgroundImage: "url(/images/v621.webp)",
                }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

              {/* Countdown Title & Timer */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h5 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                  Hitung Mundur Peluncuran Koperasi
                  <br />
                  Desa Merah Putih 12 Juli 2025
                </h5>

                {/* Countdown Timer */}
                <div className="flex justify-center space-x-4 md:space-x-8 lg:space-x-12 text-white font-semibold mt-4">
                  {[
                    { label: "Hari", value: timeLeft.days },
                    { label: "Jam", value: timeLeft.hours },
                    { label: "Menit", value: timeLeft.minutes },
                    { label: "Detik", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-3 rounded-lg">
                      <span className="block font-bold text-3xl md:text-4xl lg:text-5xl">
                        {item.value}
                      </span>
                      <span className="text-md md:text-lg">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Quote Section */}
          <div className="relative md:order-1">
            <div className="bg-[#FBFEF5] p-6 rounded-lg shadow-lg relative">
              <p className="text-[#025669] font-bold text-lg md:text-xl lg:text-5xl text-center md:text-left">
                "Koperasi Desa Sebagai Upaya Meningkatkan Ketahanan Pangan"
              </p>
              <p className="text-[#025669] font-bold text-md mt-2 text-center md:text-left">
                - Presiden Prabowo
              </p>
              <div className="absolute top-0 right-0 w-2 h-full bg-[#A52525]"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="w-full px-6 md:px-10  py-10 mx-auto max-w-screen-xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Column (Text) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#025669] mb-4 md:mb-6">
              Tentang Koperasi Desa Merah Putih
            </h2>
            <p className="text-gray-600 text-justify">
              Undang-Undang 1945 Pasal 33 menegaskan bahwa perekonomian
              Indonesia disusun atas usaha bersama yang didasarkan pada asas
              kekeluargaan. Presiden Republik Indonesia sangat mendukung segala
              upaya untuk menggerakkan koperasi di seluruh Indonesia,
              mencerminkan komitmen pemerintah dalam memperkuat ekonomi
              kerakyatan.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              Pembentukan Koperasi Desa Merah Putih didorong oleh kebutuhan
              untuk meningkatkan kesejahteraan ekonomi masyarakat desa melalui
              pendekatan ekonomi kerakyatan yang berbasis pada prinsip gotong
              royong, kekeluargaan, dan saling membantu.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              Dalam retreat kepala daerah di Akmil Magelang pada 21-28 Februari
              2025, Presiden Prabowo menekankan pentingnya pembentukan Koperasi
              Desa sebagai upaya untuk meningkatkan ketahanan pangan.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              Pada Rapat Terbatas di Istana Negara pada 3 Maret 2025, Presiden
              RI mengumumkan peluncuran 70.000 koperasi desa dengan nama
              Koperasi Desa Merah Putih, yang akan dilakukan pada Hari Koperasi
              Nasional pada 12 Juli 2025. Inisiatif ini bertujuan untuk
              memperkuat ekonomi desa dan meningkatkan kesejahteraan masyarakat
              melalui koperasi.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/presiden.png"
              alt="Presiden Prabowo"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Additional text below both columns */}
        <div className="w-full pt-6 text-center">
          <p className="text-gray-600 text-justify">
            Koperasi ini diharapkan menjadi motor penggerak perekonomian desa,
            memberikan akses modal, serta membangun ekosistem bisnis berbasis
            gotong royong.
          </p>
        </div>
      </div>
      <div id="model" className="py-10">
        <h2 className="text-center text-lg font-semibold text-[#0D3B66] mb-6">
          Model Pembentukan
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          {modelData.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[150px] bg-[#FCFCFC] shadow-md rounded-xl flex flex-col items-center justify-center text-center p-4"
            >
              {item.icon}
              <p className="mt-3 text-sm font-semibold text-[#0D3B66]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div id="benefit" className="bg-[#F9FBF3] py-10 px-6">
        <div className="bg-[#F9FBF3] py-10 px-6">
          <div className=" mx-auto flex flex-col lg:flex-row items-start gap-8">
            {/* Bagian Kiri: Judul */}
            <div className="lg:w-1/3">
              <h2 className="text-left text-xl font-semibold text-[#0D3B66]">
                7 Manfaat Koperasi Desa Merah Putih <br /> Sebagai Pusat
                Produksi & Distribusi
              </h2>
            </div>

            {/* Bagian Kanan: Carousel */}
            <div className="lg:w-2/3 w-full">
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="pb-6"
              >
                {benefitsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white  shadow-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[200px] object-cover"
                      />
                      <p className="p-4 text-sm font-semibold text-[#0D3B66]">
                        {item.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        id="type"
        className="relative w-full h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/pexels-photo-6447910.jpeg')",
        }} // Ganti dengan path gambar
      >
        {/* Overlay untuk lebih jelas */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Konten */}
        <div className="relative z-10 text-center">
          <h2 className="text-lg font-semibold mb-4">Jenis Usaha</h2>
          <div className="flex flex-wrap justify-center gap-3 px-4 max-w-3xl">
            {bussinessTypeData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="faq"
        className="relative flex justify-center items-center bg-cover bg-center py-48 px-4"
        style={{ backgroundImage: "url('/images/faq.png')" }} // Ganti dengan path gambar yang sesuai
      >
        {/* Container */}
        <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6 relative">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Pertanyaan Umum
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {faqs.map((faq, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next cursor-pointer">
            <ChevronRight className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
      <div
        id="regulation"
        className="flex justify-center items-center px-6 py-12"
      >
        <div className="flex flex-col md:flex-row w-full max-w-5xl">
          {/* Label Kiri */}
          <div className="bg-[#A0B73E] text-white font-semibold text-lg p-6 md:rounded-l-lg flex items-center justify-center md:justify-start w-full md:w-[40%] text-center md:text-left">
            Regulasi atau Dasar Hukum <br /> Koperasi Desa Merah Putih
          </div>

          {/* Daftar Regulasi */}
          <div className="bg-white shadow-lg md:rounded-r-lg p-6 w-full">
            {regulations.map((item, index) => (
              <div
                key={index}
                className="py-3 border-b last:border-none text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] bg-[#0E4B5A] flex items-center justify-center px-8">
        {/* Container */}
        <div className="max-w-5xl w-full flex items-center justify-between">
          {/* Text & Buttons */}
          <div className="text-white">
            <h1 className="text-3xl font-bold leading-snug">
              Mari Bangun Negeri Dengan Jadi Bagian <br />
              Dari Koperasi Desa Merah Putih
            </h1>
            <div className="mt-6 flex space-x-4">
              <Link href={'/accounts/login'} className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold shadow">
                Masuk
              </Link>
              <Link href={'/accounts/register'} className="bg-[#A0B73E] text-white px-6 py-2 rounded-lg font-semibold shadow">
                Daftar
              </Link>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute right-0 bottom-0 lg:w-[500px] md:w-[300px] w-[180px]">
            <img
              src="/images/anak-anak.png"
              alt="Anak membawa bendera Indonesia"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="border-t-4 border-b-4  border-[#8B2F2F]"></div>
      <Footer />
    </div>
  );
}
