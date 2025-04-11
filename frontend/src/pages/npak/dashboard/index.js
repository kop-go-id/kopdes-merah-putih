'use client';

import React from 'react';
import LayoutWrapper from '@/components/Layout';
import { Table, Button } from 'antd';
import { useRouter } from 'next/navigation';

const dataSource = [
  {
    key: '1',
    nama: 'Koperasi Tunas Mandiri',
    status: 'On Progress',
  },
  {
    key: '2',
    nama: 'Koperasi Sejahtera',
    status: 'Done',
  },
];

export default function NpakKoperasiPage() {
  const router = useRouter();

  const columns = [
    {
      title: 'Nama Koperasi',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Aksi',
      key: 'aksi',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => router.push(`/npak/koperasi/${record.key}`)}
        >
          Lihat Detail
        </Button>
      ),
    },
  ];

  return (
    <LayoutWrapper>
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-[#025669] mb-4">
          Daftar Koperasi NPAK
        </h2>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </LayoutWrapper>
  );
}
