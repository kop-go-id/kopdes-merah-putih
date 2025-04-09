'use client';

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
  DatabaseOutlined,
  ShoppingOutlined,
  BarcodeOutlined,
  ImportOutlined,
  ExportOutlined,
  RetweetOutlined,
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
import 'tailwindcss/tailwind.css';

const { Header, Sider, Content } = Layout;

const items = [
  { icon: <DashboardOutlined />, label: 'Dashboard', path: '/dashboard' },
  { icon: <AppstoreOutlined />, label: 'Koperasi', path: '/koperasi' },
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
        className="bg-[#001529]"
      >
        <div className="text-white text-lg font-bold px-4 py-3 hidden lg:block">
          Logo
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']} // 🟡 Set default selected item here
          items={items.map((item, index) => ({
            key: `${index + 1}`,
            icon: item.icon,
            label: <Link href={item.path}>{item.label}</Link>,
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
