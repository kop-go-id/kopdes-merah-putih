"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import Navbar from "@/components/Navbar"; // sesuaikan path dengan strukturmu
import Footer from "@/components/Footer";

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const contactData = [
    {
      nama: "Wilayah I - Aceh",
      koordinator: "David Bastian",
      alamat: "Aceh",
      email: "aceh@kopdes.id",
      phone: "0812-1234-0001",
      ukp: [
        "Asisten Deputi Pengelolaan Data",
        "Kepala Bagian Dukungan Strategis Pimpinan (F. Galih Andrianto)",
        "Kepala Bagian Advokasi dan Pertimbangan Hukum (Ahmad Hafizh)"
      ]
    },
    {
      nama: "Wilayah II - Sumatera Utara dan Kepulauan Riau",
      koordinator: "Panel Barus",
      alamat: "Sumatera Utara & Kepulauan Riau",
      email: "sumutkepri@kopdes.id",
      phone: "0812-1234-0002",
      ukp: [
        "Sekretaris Deputi Bidang Pengembangan Usaha (Gendo Saragih)",
        "Kepala Biro Manajemen Kinerja dan Dukungan Strategis Pimpinan (Eka Pan Lestari)",
        "Kepala Biro SDM dan Organisasi (Nasrun)",
        "Kepala Bagian Perencanaan dan Evaluasi (Faizal Mhd. Alhaq)"
      ]
    },
    {
      nama: "Wilayah III - Sumatera Barat, Riau, Jambi, dan Bengkulu",
      koordinator: "Koko Haryono",
      alamat: "Padang, Pekanbaru, Jambi, Bengkulu",
      email: "sumbar-riau@kopdes.id",
      phone: "0812-1234-0003",
      ukp: [
        "Asisten Deputi Pengembangan Produksi (Elviandi R.S.)",
        "Asisten Deputi Pemasaran (Fiter Beresman Silaen)",
        "Kepala Biro Umum dan Keuangan (M. Alishahdani.I)"
      ]
    },
    {
      nama: "Wilayah IV - Sumatera Selatan, Bangka Belitung, Lampung",
      koordinator: "Ambar Pertiwiningrum",
      alamat: "Palembang, Pangkalpinang, Bandar Lampung",
      email: "sumsel-babel@kopdes.id",
      phone: "0812-1234-0004",
      ukp: [
        "Asisten Deputi Akselerasi Jaringan Usaha (Cecep Setiawan)",
        "Asisten Deputi Restrukturisasi dan Revitalisasi Koperasi (Ruli Nurdina Sari)",
        "Inspektur Kementerian Koperasi (Adji Permana)"
      ]
    },
    {
      nama: "Wilayah V - Jawa Barat",
      koordinator: "Rulli Nuryanto",
      alamat: "Bandung, Jawa Barat",
      email: "jabar@kopdes.id",
      phone: "0812-1234-0005",
      ukp: [
        "Asisten Deputi Tata Kelola dan Manajemen Risiko (Trias Sujatmiko)",
        "Asisten Deputi Perlindungan Anggota (Sahrul)",
        "Asisten Deputi Pengawasan Penataan Usaha (Muhammad Husni)",
        "Pejabat Fungsional Perencana (Boyke Rachmat Faizal)"
      ]
    },
    {
      nama: "Wilayah VI - Jawa Tengah",
      koordinator: "Destry Anna Sari",
      alamat: "Semarang, Jawa Tengah",
      email: "jateng@kopdes.id",
      phone: "0812-1234-0006",
      ukp: [
        "Sekretaris Deputi Pengembangan Talenta (Wisnu Gunadi)",
        "Asisten Deputi Pembiayaan (Niken Wulandari)",
        "Direktur Pembiayaan Syariah LPDB (Ari Permana)"
      ]
    },
    {
      nama: "Wilayah VII - Jawa Timur",
      koordinator: "Adi Sulistyowati",
      alamat: "Surabaya, Jawa Timur",
      email: "jatim@kopdes.id",
      phone: "0812-1234-0007",
      ukp: [
        "Asisten Deputi Digitalisasi (Riza Azmi)",
        "Asisten Deputi Pemeriksaan (Mohammad Hidayat)",
        "Kepala Biro Humas & TI (Darmono)",
        "Direktur Bisnis LPDB (Krisdianto Soedarmono)"
      ]
    },
    {
      nama: "Wilayah VIII - Banten, DIY, NTB, NTT",
      koordinator: "Sweeta Melanie",
      alamat: "Banten, Yogyakarta, Mataram, Kupang",
      email: "bantendiyntbntt@kopdes.id",
      phone: "0812-1234-0008",
      ukp: [
        "Asisten Deputi Literasi dan Penyuluhan (Edy Haryana)",
        "Direktur Pengembangan Usaha LPDB (Afif Thosin Roy Akhmad)",
        "Kepala Bagian Humas (Fitara Anindita T.)"
      ]
    },
    {
      nama: "Wilayah IX - Kalbar, Kalteng, Kaltim, Kalsel, Bali",
      koordinator: "Supomo",
      alamat: "Pontianak, Palangkaraya, Samarinda, Banjarmasin, Denpasar",
      email: "kalimantanbali@kopdes.id",
      phone: "0812-1234-0009",
      ukp: [
        "Asisten Deputi Pemetaan Potensi Usaha (Lely Hiswendari)",
        "Asisten Deputi Peningkatan Kapasitas SDM (Siti Aedah)",
        "Kepala Biro Hukum & Kerja Sama (Lina Widiyastuti)",
        "Kepala Bagian Perundang-Undangan dan Kerja Sama (Feraldi Chandra Heraton)"
      ]
    },
    {
      nama: "Wilayah X - Kaltara, Sulteng, Sulsel, Sultra, Papua Barat",
      koordinator: "Henra Saragih",
      alamat: "Tanjung Selor, Palu, Makassar, Kendari, Manokwari",
      email: "sulawesikalimantan@kopdes.id",
      phone: "0812-1234-0010",
      ukp: [
        "Sekretaris Deputi Kelembagaan (Niken Prasetyawati)",
        "Asisten Deputi Organisasi dan Badan Hukum (Try Aditya Putra)",
        "Kepala Bagian Umum, Inspektorat Kemenkop (Taufan Nasution)"
      ]
    },
    {
      nama: "Wilayah XI - Sulut, Gorontalo, Sulbar, Maluku, Papua Barat Daya",
      koordinator: "Henny Navilah",
      alamat: "Manado, Gorontalo, Mamuju, Ambon, Sorong",
      email: "sulutmaluku@kopdes.id",
      phone: "0812-1234-0011",
      ukp: [
        "Asisten Deputi Kemitraan (Leonardi Pratama)",
        "Asisten Deputi Rantai Pasok (M. Amin Nurhakim)",
        "Direktur Keuangan LPDB (Bambang Sadewo)"
      ]
    },
    {
      nama: "Wilayah XII - Maluku Utara, Papua, Papua Tengah, Papua Pegunungan, Papua Selatan",
      koordinator: "Herbert H.O. Siagian",
      alamat: "Ternate, Jayapura, Nabire, Wamena, Merauke",
      email: "papua@kopdes.id",
      phone: "0812-1234-0012",
      ukp: [
        "Sekretaris Deputi Pengawasan (Windy Novita Rauf)",
        "Asisten Deputi Kepatuhan Prinsip dan Penilaian Kesehatan (Dandy Bagus Ariyanto)",
        "Direktur Umum dan Hukum LPDB (Oetje Koesoema Prasetia)"
      ]
    },
  ];  

  const filteredData = contactData.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#0D3B66]">
                Kontak Koperasi Desa Merah Putih
              </h1>
              <p className="text-sm text-gray-600">Email: dev@satu.kop.id</p>
              <p className="text-sm text-gray-600">Telepon: 0812-3456-7890</p>
              <p className="text-sm text-gray-600">
                Jl. H. R. Rasuna Said No.Kav. 3-4, RT.6/RW.7, Kuningan, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-[#0D3B66] mb-4">
          Daftar Kontak Kantor Wilayah
        </h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari provinsi atau wilayah..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Kontak Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Card key={index} className="shadow-sm">
                <h3 className="font-bold text-[#0D3B66] mb-2">{item.nama}</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <UserOutlined className="mr-2" />
                    Koordinator: {item.koordinator}
                  </p>
                  <p>
                    <EnvironmentOutlined className="mr-2" />
                    {item.alamat}
                  </p>
                  <p>
                    <PhoneOutlined className="mr-2" />
                    <a
                      href={`tel:${item.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.phone}
                    </a>
                  </p>
                  <p>
                    <MailOutlined className="mr-2" />
                    <a
                      href={`mailto:${item.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.email}
                    </a>
                  </p>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-gray-700 mb-1">
                    <ApartmentOutlined className="mr-2" />
                    Unit Kerja Pelaksana:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {item.ukp.map((ukpItem, i) => (
                      <li key={i}>{ukpItem}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">Data tidak ditemukan.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
