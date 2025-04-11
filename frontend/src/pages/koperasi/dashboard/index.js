'use client';

import React from 'react';
import { Button, Result, Table } from 'antd';
import 'tailwindcss/tailwind.css';
import LayoutWrapper from '@/components/Layout';

export default function CooperativeDashboard() {
  const stats = [
    { title: "Total Desa", value: "96,180", bg: "bg-blue-500", text: "text-white" },
    { title: "Total Desa Tanpa Koperasi", value: "57,671", bg: "bg-red-500", text: "text-white" },
    { title: "Total Koperasi Aktif", value: "131,165", bg: "bg-green-500", text: "text-white" },
    { title: "Total GAPOKTAN", value: "508", bg: "bg-red-700", text: "text-white" },
    { title: "Total KUD", value: "4,385", bg: "bg-blue-900", text: "text-white" },
  ];

  const columns = [
    { title: 'No.', dataIndex: 'no', key: 'no' },
    { title: 'Provinsi', dataIndex: 'provinsi', key: 'provinsi' },
    { title: 'Jumlah Desa', dataIndex: 'jumlahDesa', key: 'jumlahDesa' },
    { title: 'Jumlah Desa Tanpa Koperasi', dataIndex: 'desaTanpaKoperasi', key: 'desaTanpaKoperasi' },
    { title: 'Jumlah Koperasi Aktif', dataIndex: 'koperasiAktif', key: 'koperasiAktif' },
    { title: 'Jumlah Koperasi Sektor Riil', dataIndex: 'koperasiRiil', key: 'koperasiRiil' },
    { title: 'Jumlah GAPOKTAN', dataIndex: 'gapoktan', key: 'gapoktan' },
    { title: 'Jumlah KUD', dataIndex: 'kud', key: 'kud' },
    { title: 'Screening 1', dataIndex: 'screening1', key: 'screening1' },
    { title: 'Screening 2', dataIndex: 'screening2', key: 'screening2' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];
  
  const data = [
    {
      key: 1,
      no: 1,
      provinsi: 'Aceh',
      jumlahDesa: '7,187',
      desaTanpaKoperasi: '5,715',
      koperasiAktif: '4,116',
      koperasiRiil: '3,626',
      gapoktan: '1',
      kud: '111',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 2,
      no: 2,
      provinsi: 'Sumatera Utara',
      jumlahDesa: '6,894',
      desaTanpaKoperasi: '4,987',
      koperasiAktif: '5,437',
      koperasiRiil: '3,562',
      gapoktan: '7',
      kud: '139',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 3,
      no: 3,
      provinsi: 'Sumatera Barat',
      jumlahDesa: '2,231',
      desaTanpaKoperasi: '1,409',
      koperasiAktif: '2,326',
      koperasiRiil: '1,701',
      gapoktan: '9',
      kud: '113',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 4,
      no: 4,
      provinsi: 'Riau',
      jumlahDesa: '2,088',
      desaTanpaKoperasi: '1,015',
      koperasiAktif: '3,290',
      koperasiRiil: '2,721',
      gapoktan: '3',
      kud: '229',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 5,
      no: 5,
      provinsi: 'Jambi',
      jumlahDesa: '1,810',
      desaTanpaKoperasi: '1,112',
      koperasiAktif: '1,902',
      koperasiRiil: '1,505',
      gapoktan: '8',
      kud: '146',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 6,
      no: 6,
      provinsi: 'Sumatera Selatan',
      jumlahDesa: '3,484',
      desaTanpaKoperasi: '2,048',
      koperasiAktif: '4,335',
      koperasiRiil: '3,664',
      gapoktan: '9',
      kud: '355',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 7,
      no: 7,
      provinsi: 'Bengkulu',
      jumlahDesa: '1,952',
      desaTanpaKoperasi: '1,384',
      koperasiAktif: '2,052',
      koperasiRiil: '1,681',
      gapoktan: '11',
      kud: '37',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
    {
      key: 8,
      no: 8,
      provinsi: 'Lampung',
      jumlahDesa: '2,888',
      desaTanpaKoperasi: '1,899',
      koperasiAktif: '3,104',
      koperasiRiil: '1,385',
      gapoktan: '30',
      kud: '37',
      screening1: '-',
      screening2: '-',
      status: '-',
    },
  ];
  return (
    <LayoutWrapper>
          <div className="p-4 space-y-4">
      <div className="text-xl font-semibold mb-2">Statistik Potensi Koperasi Merah Putih</div>
      <div className="text-sm text-gray-500 mb-4">
        Status Data : 19 Maret 2025 13:47:48
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow ${item.bg} ${item.text} p-4 text-center`}
          >
            <div className="text-sm font-medium">{item.title}</div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-4 bg-white rounded shadow overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        DATA POTENSI KOPERASI DESA MERAH PUTIH, SEKTOR RIIL WILAYAH BINAAN KABUPATEN/KOTA
      </h2>
      <p className="text-center text-sm text-gray-500 mb-4">
        SESUAI WILAYAH KOORDINASI SATUAN TUGAS KOPERASI DESA MERAH PUTIH DI SELURUH INDONESIA
      </p>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </LayoutWrapper>
  );
}
