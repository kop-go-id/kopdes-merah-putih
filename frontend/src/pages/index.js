"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
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

export default function Home() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countdown state
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Countdown effect
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const launchDate = new Date("July 12, 2025 00:00:00").getTime();
      const timeLeft = launchDate - now.getTime();

      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const items = [
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

  const manfaatList = [
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

  const jenisUsahaList = [
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
    <main className="poppins-regular bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Koperasi Desa Merah Putih Logo"
              width={150}
              preview={false}
              className="h-10 md:h-13 mr-2"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex justify-center space-x-10 items-center">
            <Link
              href="#about"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Tentang
            </Link>
            <Link
              href="#model"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Model
            </Link>
            <Link
              href="#benefit"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Manfaat
            </Link>
            <Link
              href="#type"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Jenis
            </Link>
            <Link
              href="#faq"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Pertanyaan
            </Link>
            <Link
              href="#regulation"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Regulasi
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/masuk"
              className="text-[#a0b73e] border border-[#a0b73e] px-4 py-2 rounded-md hover:bg-[#a0b73e] hover:text-white transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/masuk"
              className="text-[#025669] border border-[#025669] px-4 py-2 rounded-md hover:bg-[#025669] hover:text-white transition-colors"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col items-center space-y-4 mt-4 p-4 z-100`}
        >
          <Link
            href="/tentang"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Tentang
          </Link>
          <Link
            href="/model"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Model
          </Link>
          <Link
            href="/manfaat"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Manfaat
          </Link>
          <Link
            href="/jenis"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Jenis
          </Link>
          <Link
            href="/pertanyaan"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Pertanyaan
          </Link>
          <Link
            href="/regulasi"
            className="text-sm font-medium text-gray-900 hover:text-[#A0B73E]"
          >
            Regulasi
          </Link>
          <div className="flex w-full space-x-2">
            <Link
              href="/masuk"
              className="border border-[#a0b73e] px-4 py-2 rounded-md bg-[#a0b73e] text-white w-full text-center"
            >
              Masuk
            </Link>
            <Link
              href="/masuk"
              className="border border-[#025669] px-4 py-2 rounded-md bg-[#025669] text-white w-full text-center"
            >
              Masuk
            </Link>
          </div>
        </div>
      </nav>

      {/* Desktop Hero */}
      <div className="hidden md:block fixed top-0 left-0 w-full bg-white shadow-md p-4">
        <div className="absolute top-[127px] left-[605px] w-[755px] h-[396px] bg-[#A0B73E]"></div>
        <div className="absolute top-[127px] left-[630px] w-[750px] h-[395px] bg-[#025669]"></div>

        {/* Main Image */}
        <div
          className="absolute top-[80px] left-[630px] w-[750px] h-[439px] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/v621.webp)" }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute top-[84px] left-[630px] w-[750px] h-[439px] bg-black opacity-40"></div>

        {/* Countdown Title */}
        <div className="absolute top-[180px] left-[790px] z-20">
          <h5 className="text-2xl text-white font-semibold text-center">
            Hitung Mundur Peluncuran Koperasi
            <br />
            Desa Merah Putih 12 Juli 2025
          </h5>
        </div>

        {/* Desktop Countdown */}
        <div className="absolute top-[230px] left-[810px] z-20">
          <div className="flex justify-center space-x-10 text-white font-semibold font-['Plus Jakarta Sans'] p-4 mt-10">
            <div className="text-center">
              <span className="block font-bold text-[40px]">{days}</span>
              <span className="text-2xl">Hari</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-[40px]">{hours}</span>
              <span className="text-2xl">Jam</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-[40px]">{minutes}</span>
              <span className="text-2xl">Menit</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-[40px]">{seconds}</span>
              <span className="text-2xl">Detik</span>
            </div>
          </div>
        </div>

        <div className="absolute top-[154px] left-0 w-[630px] h-[255px] bg-cover bg-center">
          <div className="w-full h-full bg-[#FBFEF5]"></div>
          <div className="absolute top-0 right-0 w-[25px] h-full bg-[#A52525]"></div>
        </div>

        <div className="absolute top-[154px] left-0 w-[630px] h-[255px] bg-cover bg-center">
          <div className="absolute top-[32px] left-[61px] w-[503px] h-[191px] bg-cover bg-center">
            <span className="absolute top-[159px] left-0 text-[#025669] font-bold text-[25px] font-['Plus Jakarta Sans']">
              -Presiden Prabowo
            </span>
            <span className="absolute top-0 left-0 text-[#025669] font-bold text-[35px] font-['Plus Jakarta Sans']">
              "Koperasi Desa Sebagai Upaya Meningkatkan Ketahanan Pangan"
            </span>
          </div>
          <div className="absolute top-[255px] right-[170px] w-[800px] h-[65px] bg-[#A0B73E]"></div>
          <div className="absolute top-[255px] right-[200px] w-[500px] h-[35px] bg-[#025669]"></div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden relative h-auto bg-[#FBFEF5] flex flex-col items-center pt-16">
        {/* Background Color Layers */}
        <div className="absolute w-full h-[266px] bg-[#A0B73E] overflow-hidden"></div>
        <div className="absolute w-[320px] right-[0px] h-[266px] rounded-bl-[70px] bg-[#025669]"></div>

        {/* Background Image */}
        <div
          className="relative w-full h-[250px] bg-cover bg-center overflow-x-hidden rounded-bl-[40px]"
          style={{ backgroundImage: "url(/images/v621.webp)" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h5 className="text-lg font-semibold leading-6 text-center px-4 mb-4">
              Hitung Mundur Peluncuran Koperasi <br /> Desa Merah Putih 12 Juli
              2025
            </h5>

            {/* Mobile Countdown */}
            <div className="flex justify-center items-center space-x-6 text-white font-semibold font-['Plus Jakarta Sans'] mt-2">
              <div className="text-center">
                <span className="block font-bold text-[24px]">{days}</span>
                <span className="text-sm">Hari</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-[24px]">{hours}</span>
                <span className="text-sm">Jam</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-[24px]">{minutes}</span>
                <span className="text-sm">Menit</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-[24px]">{seconds}</span>
                <span className="text-sm">Detik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden z-10 w-full h-auto overflow-hidden">
        <div className="left-0 w-full flex flex-col items-center">
          {/* Quote */}
          <div className="w-full max-w-[90%] h-auto bg-cover bg-center text-center mt-4">
            <span className="block text-[#025669] font-bold text-[20px] font-['Plus Jakarta Sans']">
              "Koperasi Desa Sebagai Upaya Meningkatkan
              <br /> Ketahanan Pangan"
            </span>
            <span className="block text-[#025669] font-bold text-[18px] font-['Plus Jakarta Sans'] mt-2 mb-5">
              -Presiden Prabowo
            </span>
          </div>

          {/* Background Blocks */}
          <div className="w-full flex flex-col mt-2">
            <div className="w-[200px] h-[50px] bg-[#025669] ml-auto rounded-tl-[60px]"></div>
          </div>
        </div>
      </div>

      {/* About Section (Desktop) */}
      <div id="about" className="hidden md:flex bg-white shadow-2xl px-10 absolute top-[475px]  flex-col">
        <div className="flex">
          {/* Left Column (Text) */}
          <div className="w-1/2 flex flex-col justify-center mx-10">
            <h2 className="text-2xl font-medium text-[#025669] my-10">
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
            <p className="text-gray-600 text-justify mt-5">
              Pembentukan Koperasi Desa Merah Putih didorong oleh kebutuhan
              untuk meningkatkan kesejahteraan ekonomi masyarakat desa melalui
              pendekatan ekonomi kerakyatan yang berbasis pada prinsip gotong
              royong, kekeluargaan, dan saling membantu.
            </p>
            <p className="text-gray-600 text-justify mt-5">
              Dalam retreat kepala daerah di Akmil Magelang pada 21-28 Februari
              2025, Presiden Prabowo menekankan pentingnya pembentukan Koperasi
              Desa sebagai upaya untuk meningkatkan ketahanan pangan.
            </p>
            <p className="text-gray-600 text-justify mt-5">
              Pada Rapat Terbatas di Istana Negara pada 3 Maret 2025, Presiden
              RI mengumumkan peluncuran 70.000 koperasi desa dengan nama
              Koperasi Desa Merah Putih, yang akan dilakukan pada Hari Koperasi
              Nasional pada 12 Juli 2025. Inisiatif ini bertujuan untuk
              memperkuat ekonomi desa dan meningkatkan kesejahteraan masyarakat
              melalui koperasi.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-1/2 flex justify-center mx-3 mt-15">
            <Image
              src="/images/presiden.png"
              alt="Presiden Prabowo"
              width={604}
              preview={false}
            />
          </div>
        </div>

        {/* Additional text below both columns */}
        <div className="w-full mt-10 pb-10">
          <p className="text-gray-600 text-justify text-center">
            Koperasi ini diharapkan menjadi motor penggerak perekonomian desa,
            memberikan akses modal, serta membangun ekosistem bisnis berbasis
            gotong royong.
          </p>
        </div>
        <div id="model" className="py-10 bg-[#FBFEF5]">
          <h2 className="text-center text-lg font-semibold text-[#0D3B66] mb-6">
            Model Pembentukan
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
            {items.map((item, index) => (
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
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
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
                  {manfaatList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
          className="relative w-full h-[800px] flex flex-col items-center justify-center bg-cover bg-center text-white"
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
              {jenisUsahaList.map((item, index) => (
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
          style={{ backgroundImage: "url('/images/v621.webp')" }} // Ganti dengan path gambar yang sesuai
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
        <div id="regulation" className="flex justify-center items-center px-6 py-12">
          <div className="flex w-full max-w-5xl">
            {/* Label Kiri */}
            <div className="bg-[#A0B73E] text-white font-semibold text-lg p-6 rounded-l-lg flex items-center">
              Regulasi atau Dasar Hukum <br /> Koperasi Desa Merah Putih
            </div>

            {/* Daftar Regulasi */}
            <div className="bg-white shadow-lg rounded-r-lg p-6 w-full">
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
                <button className="bg-green-300 text-green-900 px-6 py-2 rounded-lg font-semibold shadow">
                  Daftar
                </button>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold shadow">
                  Masuk
                </button>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute right-0 bottom-0 w-[300px] md:w-[400px]">
              <img
                src="/images/anak-anak.png"
                alt="Anak membawa bendera Indonesia"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <footer className="bg-white border-t border-gray-300">
          {/* Border Merah di Bagian Atas */}
          <div className="border-t-4 border-[#8B2F2F]"></div>

          {/* Kontainer Footer */}
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-6 space-y-6 md:space-y-0">
            {/* Bagian Logo (Kiri) */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center md:items-start w-full md:w-1/2">
              <img
                src="/images/logo-kemenkop.png"
                alt="Kemenkop"
                className="h-12"
              />
              <img
                src="/images/logo-kemenkop.png"
                alt="Coop 2025"
                className="h-12"
              />
              <img
                src="/images/logo-kemenkop.png"
                alt="BerAKHLAK"
                className="h-12"
              />
            </div>

            {/* Bagian Address dan Social Icons (Kanan) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
              {/* Address Section */}
              <div className="max-w-md">
                <h2 className="text-lg font-semibold text-[#0E4B5A]">
                  Kementerian Koperasi Republik Indonesia
                </h2>
                <p className="text-sm">
                  Jl. H. R. Rasuna Said No.Kav. 3-4, RT.6/RW.7, Kuningan, Karet
                  Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah
                  Khusus Ibukota Jakarta 12940
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-end space-x-4">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="h-6"
                />
                <img src="/images/ig.png" alt="Instagram" className="h-6" />
                <img src="/images/x.png" alt="Twitter" className="h-6" />
                <img src="/images/yt.png" alt="YouTube" className="h-6" />
              </div>
            </div>
          </div>

          {/* Bagian Bawah Footer */}
          <div className="bg-[#0E4B5A] text-white text-center py-3 text-sm">
            Hakcipta © 2025. Kementerian Koperasi Republik Indonesia
          </div>
        </footer>
      </div>

      {/* About Section (Mobile) */}
      <div className="md:hidden bg-white shadow-md px-4 py-6 mt-8 rounded-t-[30px]">
        <h2 className="text-xl font-medium text-[#025669] mb-4 text-center">
          Tentang Koperasi Desa Merah Putih
        </h2>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/presiden.png"
            alt="Presiden Prabowo"
            width={300}
            className="rounded-lg"
            preview={false}
          />
        </div>

        <p className="text-gray-600 text-sm text-justify">
          Undang-Undang 1945 Pasal 33 menegaskan bahwa perekonomian Indonesia
          disusun atas usaha bersama yang didasarkan pada asas kekeluargaan.
          Presiden Republik Indonesia sangat mendukung segala upaya untuk
          menggerakkan koperasi di seluruh Indonesia, mencerminkan komitmen
          pemerintah dalam memperkuat ekonomi kerakyatan.
        </p>

        <p className="text-gray-600 text-sm text-justify mt-3">
          Pembentukan Koperasi Desa Merah Putih didorong oleh kebutuhan untuk
          meningkatkan kesejahteraan ekonomi masyarakat desa melalui pendekatan
          ekonomi kerakyatan yang berbasis pada prinsip gotong royong,
          kekeluargaan, dan saling membantu.
        </p>

        <p className="text-gray-600 text-sm text-justify mt-3">
          Dalam retreat kepala daerah di Akmil Magelang pada 21-28 Februari
          2025, Presiden Prabowo menekankan pentingnya pembentukan Koperasi Desa
          sebagai upaya untuk meningkatkan ketahanan pangan.
        </p>

        <p className="text-gray-600 text-sm text-justify mt-3">
          Pada Rapat Terbatas di Istana Negara pada 3 Maret 2025, Presiden RI
          mengumumkan peluncuran 70.000 koperasi desa dengan nama Koperasi Desa
          Merah Putih, yang akan dilakukan pada Hari Koperasi Nasional pada 12
          Juli 2025.
        </p>

        <div className="w-full mt-4 pb-2">
          <p className="text-gray-600 text-sm text-center">
            Koperasi ini diharapkan menjadi motor penggerak perekonomian desa,
            memberikan akses modal, serta membangun ekosistem bisnis berbasis
            gotong royong.
          </p>
        </div>
      </div>
    </main>
  );
}
