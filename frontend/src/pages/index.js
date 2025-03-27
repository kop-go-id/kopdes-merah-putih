"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Image } from "antd";

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
              href="/tentang"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Tentang
            </Link>
            <Link
              href="/model"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Model
            </Link>
            <Link
              href="/manfaat"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Manfaat
            </Link>
            <Link
              href="/jenis"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Jenis
            </Link>
            <Link
              href="/pertanyaan"
              className="text-md text-gray-900 hover:text-[#A0B73E]"
            >
              Pertanyaan
            </Link>
            <Link
              href="/regulasi"
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
      <div className="hidden md:flex bg-white shadow-2xl px-10 absolute top-[475px]  flex-col">
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
