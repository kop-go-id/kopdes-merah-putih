'use client';

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Avatar,
  Space,
} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const { Header, Sider, Content } = Layout;

const cooperatives = [
  { icon: <DashboardOutlined />, label: 'Dashboard', path: '/koperasi/dashboard' },
  { icon: <DashboardOutlined />, label: 'Pendaftaran', path: '/koperasi/pendaftaran' },
  { icon: <AppstoreOutlined />, label: 'Anggota', path: '/koperasi/anggota' },
];

const profileMenu = (
  <Menu>
    <Menu.Item key="profile" icon={<UserOutlined />}>Profil</Menu.Item>
    <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
  </Menu>
);

export default function LayoutWrapper({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="min-h-screen">
      <Sider
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => setCollapsed(broken)}
        trigger={null}
        className="bg-[#01566a]"
      >
        <div className="px-4 py-3 hidden lg:flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-30 p-1 rounded-full bg-white shadow"
          />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          rootClassName="bg-[#01566a] border-none"
          className="custom-menu"
          items={cooperatives.map((item, index) => ({
            key: `${index + 1}`,
            icon: <span className="text-white">{item.icon}</span>,
            label: (
              <Link href={item.path}>
                <span className="text-white">{item.label}</span>
              </Link>
            ),
          }))}
        />
      </Sider>

      <Layout>
        <Header className="bg-white flex items-center justify-between px-4 shadow">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="lg:hidden"
            />
          </div>

          <Dropdown overlay={profileMenu} trigger={['click']}>
            <Space className="cursor-pointer">
              <Avatar style={{ backgroundColor: '#025669' }} icon={<UserOutlined />} />
              <span className="hidden md:inline text-gray-700">Admin</span>
            </Space>
          </Dropdown>
        </Header>

        <Content className="m-4 p-4 bg-white rounded shadow overflow-auto">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
