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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const contactData = [
    {
      nama: "Wilayah I",
      koordinator: "David Bastian",
      provinsi: "Aceh",
      email: "korwil1@merahputih.kop.id",
      phone: "0812-1234-0001",
      ukp: [
        "Asisten Deputi Pengelolaan Data",
        "Kepala Bagian Dukungan Strategis Pimpinan (F. Galih Andrianto)",
        "Kepala Bagian Advokasi dan Pertimbangan Hukum (Ahmad Hafizh)"
      ]
    },
    {
      nama: "Wilayah II",
      koordinator: "Panel Barus",
      provinsi: "Sumatera Utara dan Kepulauan Riau",
      email: "korwil2@merahputih.kop.id",
      phone: "0812-1234-0002",
      ukp: [
        "Sekretaris Deputi Bidang Pengembangan Usaha (Gendo Saragih)",
        "Kepala Biro Manajemen Kinerja dan Dukungan Strategis Pimpinan (Eka Pan Lestari)",
        "Kepala Biro SDM dan Organisasi (Nasrun)",
        "Kepala Bagian Perencanaan dan Evaluasi (Faizal Mhd. Alhaq)"
      ]
    },
    {
      nama: "Wilayah III",
      koordinator: "Koko Haryono",
      provinsi: "Sumatera Barat, Riau, Jambi, dan Bengkulu",
      email: "korwil3@merahputih.kop.id",
      phone: "0812-1234-0003",
      ukp: [
        "Asisten Deputi Pengembangan Produksi (Elviandi R.S.)",
        "Asisten Deputi Pemasaran (Fiter Beresman Silaen)",
        "Kepala Biro Umum dan Keuangan (M. Alishahdani.I)"
      ]
    },
    {
      nama: "Wilayah IV",
      koordinator: "Ambar Pertiwiningrum",
      provinsi: "Sumatera Selatan, Bangka Belitung, Lampung",
      email: "korwil4@merahputih.kop.id",
      phone: "0812-1234-0004",
      ukp: [
        "Asisten Deputi Akselerasi Jaringan Usaha (Cecep Setiawan)",
        "Asisten Deputi Restrukturisasi dan Revitalisasi Koperasi (Ruli Nurdina Sari)",
        "Inspektur Kementerian Koperasi (Adji Permana)"
      ]
    },
    {
      nama: "Wilayah V",
      koordinator: "Rulli Nuryanto",
      provinsi: "Jawa Barat",
      email: "korwil5@merahputih.kop.id",
      phone: "0812-1234-0005",
      ukp: [
        "Asisten Deputi Tata Kelola dan Manajemen Risiko (Trias Sujatmiko)",
        "Asisten Deputi Perlindungan Anggota (Sahrul)",
        "Asisten Deputi Pengawasan Penataan Usaha (Muhammad Husni)",
        "Pejabat Fungsional Perencana (Boyke Rachmat Faizal)"
      ]
    },
    {
      nama: "Wilayah VI",
      koordinator: "Destry Anna Sari",
      provinsi: "Jawa Tengah",
      email: "korwil6@merahputih.kop.id",
      phone: "0812-1234-0006",
      ukp: [
        "Sekretaris Deputi Pengembangan Talenta (Wisnu Gunadi)",
        "Asisten Deputi Pembiayaan (Niken Wulandari)",
        "Direktur Pembiayaan Syariah LPDB (Ari Permana)"
      ]
    },
    {
      nama: "Wilayah VII",
      koordinator: "Adi Sulistyowati",
      provinsi: "Jawa Timur",
      email: "korwil7@merahputih.kop.id",
      phone: "0812-1234-0007",
      ukp: [
        "Asisten Deputi Digitalisasi (Riza Azmi)",
        "Asisten Deputi Pemeriksaan (Mohammad Hidayat)",
        "Kepala Biro Humas & TI (Darmono)",
        "Direktur Bisnis LPDB (Krisdianto Soedarmono)"
      ]
    },
    {
      nama: "Wilayah VIII",
      koordinator: "Sweeta Melanie",
      provinsi: "Banten, DIY, NTB, NTT",
      email: "korwil8@merahputih.kop.id",
      phone: "0812-1234-0008",
      ukp: [
        "Asisten Deputi Literasi dan Penyuluhan (Edy Haryana)",
        "Direktur Pengembangan Usaha LPDB (Afif Thosin Roy Akhmad)",
        "Kepala Bagian Humas (Fitara Anindita T.)"
      ]
    },
    {
      nama: "Wilayah IX",
      koordinator: "Supomo",
      provinsi: "Kalbar, Kalteng, Kaltim, Kalsel, Bali",
      email: "korwil9@merahputih.kop.id",
      phone: "0812-1234-0009",
      ukp: [
        "Asisten Deputi Pemetaan Potensi Usaha (Lely Hiswendari)",
        "Asisten Deputi Peningkatan Kapasitas SDM (Siti Aedah)",
        "Kepala Biro Hukum & Kerja Sama (Lina Widiyastuti)",
        "Kepala Bagian Perundang-Undangan dan Kerja Sama (Feraldi Chandra Heraton)"
      ]
    },
    {
      nama: "Wilayah X",
      koordinator: "Henra Saragih",
      provinsi: "Kaltara, Sulteng, Sulsel, Sultra, Papua Barat",
      email: "korwil10n@merahputih.kop.id",
      phone: "0812-1234-0010",
      ukp: [
        "Sekretaris Deputi Kelembagaan (Niken Prasetyawati)",
        "Asisten Deputi Organisasi dan Badan Hukum (Try Aditya Putra)",
        "Kepala Bagian Umum, Inspektorat Kemenkop (Taufan Nasution)"
      ]
    },
    {
      nama: "Wilayah XI",
      koordinator: "Henny Navilah",
      provinsi: "Sulut, Gorontalo, Sulbar, Maluku, Papua Barat Daya",
      email: "korwil11@merahputih.kop.id",
      phone: "0812-1234-0011",
      ukp: [
        "Asisten Deputi Kemitraan (Leonardi Pratama)",
        "Asisten Deputi Rantai Pasok (M. Amin Nurhakim)",
        "Direktur Keuangan LPDB (Bambang Sadewo)"
      ]
    },
    {
      nama: "Wilayah XII",
      koordinator: "Herbert H.O. Siagian",
      provinsi: "Maluku Utara, Papua, Papua Tengah, Papua Pegunungan, Papua Selatan",
      email: "korwil12@merahputih.kop.id",
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
          Daftar Kontak Koordinator Wilayah
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
                    {item.provinsi}
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
