'use client';

import React from 'react';
import { Timeline } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import LayoutWrapper from '@/components/Layout';

export default function CooperativePage() {
  const timelineItems = [
    {
      title: 'Status Pendaftaran',
      date: '08 April 2025',
      status: 'done',
    },
    {
      title: 'Diproses Notaris',
      date: '10 April 2025',
      status: 'done',
    },
    {
      title: 'Selesai',
      date: 'Unduh Surat',
      status: 'done',
      link: '#', // Ganti dengan link unduhan surat
    },
  ];

  return (
    <LayoutWrapper>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-[#004c5a] mb-6">
          Status Pendaftaran
        </h2>
        <Timeline
          items={timelineItems.map((item) => ({
            color: 'green',
            dot: (
              <CheckCircleTwoTone
                twoToneColor="#99c221"
                style={{ fontSize: 22 }}
              />
            ),
            children: (
              <div className="ml-2">
                <p className="font-semibold text-black">{item.title}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm text-[#004c5a] underline font-medium"
                  >
                    {item.date}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{item.date}</p>
                )}
              </div>
            ),
          }))}
        />
      </div>
    </LayoutWrapper>
  );
}
