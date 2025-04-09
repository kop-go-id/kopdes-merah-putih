"use client";

import { useState } from "react";
import {
  MenuOutlined,
  CheckOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function DashboardProgressPage() {
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

        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#025669]">
          Status Koperasi
        </h2>

        {/* Progress Bar */}
        <div className="bg-[#F7F8FA] rounded-xl shadow-md px-6 py-10">
          <div className="flex justify-between items-start relative">
            {[
              {
                title: "Status Pendaftaran",
                date: "08 April 2025",
                link: null,
              },
              {
                title: "Diproses Notaris",
                date: "10 April 2025",
                link: null,
              },
              {
                title: "Selesai",
                date: null,
                link: "Unduh Surat",
              },
            ].map((step, index, array) => (
              <div key={index} className="relative flex-1 flex flex-col items-center">
                {/* Garis antar step */}
                {index < array.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-[2px] bg-[#A0B73E] z-0" />
                )}

                {/* Icon Centang */}
                <div className="w-12 h-12 rounded-full bg-[#A0B73E] flex items-center justify-center text-white z-10 mb-3">
                  <CheckOutlined style={{ fontSize: 18 }} />
                </div>

                {/* Teks Judul + Tanggal/Link */}
                <div className="text-center">
                  <div className="text-[#121212] font-semibold">{step.title}</div>
                  {step.link ? (
                    <Link href="#" className="text-blue-600 text-sm font-medium">
                      {step.link}
                    </Link>
                  ) : (
                    <div className="text-sm text-[#121212]">{step.date}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
