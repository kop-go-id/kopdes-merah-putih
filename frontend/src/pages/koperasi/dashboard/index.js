'use client';

import React from 'react';
import { Button, Result } from 'antd';
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
