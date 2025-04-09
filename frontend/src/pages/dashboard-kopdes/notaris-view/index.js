"use client";

import { useState } from "react";
import {
  MenuOutlined,
  CheckCircleFilled,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Table, Badge, Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Nama Koperasi",
    dataIndex: "namaKoperasi",
    key: "namaKoperasi",
    render: (text) => <span className="font-medium text-[#121212]">{text}</span>,
    align: "center",
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    align: "center",
  },
  {
    title: "Status Pendaftaran",
    dataIndex: "pendaftaran",
    key: "pendaftaran",
    align: "center",
    render: () => (
      <CheckCircleFilled style={{ color: "#A0B73E", fontSize: 20 }} />
    ),
  },
  {
    title: "Diproses Notaris",
    dataIndex: "notaris",
    key: "notaris",
    align: "center",
    render: () => (
      <CheckCircleFilled style={{ color: "#A0B73E", fontSize: 20 }} />
    ),
  },
  {
    title: "Selesai",
    dataIndex: "selesai",
    key: "selesai",
    align: "center",
    render: () => (
      <Link href="#" className="text-blue-600 font-medium">
        Unduh Surat
      </Link>
    ),
  },
];

const data = [
  {
    key: "1",
    namaKoperasi: "Koperasi Desa Merah Putih Desa Sukatani",
    tanggal: "08 April 2025",
    pendaftaran: true,
    notaris: true,
    selesai: true,
  },
];

export default function DashboardPage() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Desktop */}
      <aside className="w-[260px] bg-[#F7F8FA] p-6 hidden md:block">
        <div className="flex items-center justify-center py-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="text-[#025669] font-medium">• Status Koperasi</li>
          </ul>
        </nav>
      </aside>

      {/* Sidebar - Drawer for Mobile */}
      <Drawer
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        width={260}
      >
        <div className="bg-[#F7F8FA] h-full p-6">
          <div className="flex items-center justify-center py-6">
          </div>
          <nav>
            <ul className="space-y-4">
              <li className="text-[#025669] font-medium">• Status Koperasi</li>
            </ul>
          </nav>
        </div>
      </Drawer>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 w-full">
              {/* Logo Tengah Atas (Mobile) */}
                      <div className="flex justify-center md:hidden mb-4">
                        <Image
                          src="/images/logo.png"
                          alt="Logo"
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </div>
              {/* Topbar */}
              <div className="flex justify-between items-center mb-6">
                {/* Hamburger - only show on mobile */}
                <button
                  className="block md:hidden text-[#025669]"
                  onClick={() => setDrawerVisible(true)}
                >
                  <MenuOutlined style={{ fontSize: 20 }} />
                </button>
      
                {/* Spacer untuk centering icons to right */}
                <div className="flex-1 flex justify-end items-center gap-4">
                  <Badge offset={[-1, 2]}>
                    <BellOutlined style={{ fontSize: 20, color: "#025669" }} />
                  </Badge>
                  <UserOutlined style={{ fontSize: 20, color: "#025669" }} />
                </div>
              </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="w-full overflow-x-auto">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
            />
          </div>
        </div>
      </main>
    </div>
  );
}
