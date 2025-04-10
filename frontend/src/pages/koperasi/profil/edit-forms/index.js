"use client";

import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import LayoutWrapper from "@/components/Layout";
import { useRouter } from "next/navigation";

const { Option } = Select;

export default function EditProfilKoperasiPage() {
  const router = useRouter();

  const handleFinish = (values) => {
    console.log("Form submitted:", values);
    router.push("/koperasi/profil");
  };

  const handleCancel = () => {
    router.push("/koperasi/profil");
  };

  return (
    <LayoutWrapper>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl font-bold text-[#025669] mb-2 sm:mb-0">
            Edit Profil Koperasi
          </h2>
        </div>

        <Form
          layout="vertical"
          onFinish={handleFinish}
          className="text-[#121212]"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Nama Koperasi" name="namaKoperasi">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Nama di SK" name="namaDiSk">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Jenis Koperasi" name="jenisKoperasi">
                <Select>
                  <Option value="Konsumen">Konsumen</Option>
                  <Option value="Produsen">Produsen</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Wilayah Keanggotaan" name="wilayahKeanggotaan">
                <Select>
                  <Option value="Kabupaten">Kabupaten</Option>
                  <Option value="Provinsi">Provinsi</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Bentuk Koperasi" name="bentukKoperasi">
                <Select>
                  <Option value="Primer">Primer</Option>
                  <Option value="Sekunder">Sekunder</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Pola Pengelolaan" name="polaPengelolaan">
                <Select>
                  <Option value="Konvensional">Konvensional</Option>
                  <Option value="Syariah">Syariah</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Jangka Waktu" name="jangkaWaktu">
                <Select>
                  <Option value="Tidak terbatas">Tidak terbatas</Option>
                  <Option value="Terbatas">Terbatas</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <h3 className="text-xl font-semibold text-[#025669] mt-6 mb-4">
            Kedudukan Koperasi
          </h3>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Provinsi" name="provinsi">
                <Select>
                  <Option value="Jawa Barat">Jawa Barat</Option>
                  <Option value="Jawa Tengah">Jawa Tengah</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Kabupaten/Kota" name="kabupaten">
                <Select>
                  <Option value="Bandung">Bandung</Option>
                  <Option value="Bekasi">Bekasi</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Kecamatan" name="kecamatan">
                <Select>
                  <Option value="Cibiru">Cibiru</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Kelurahan/Desa" name="kelurahan">
                <Select>
                  <Option value="Cibiru Wetan">Cibiru Wetan</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Alamat" name="alamat">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label="RW" name="rw">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label="RT" name="rt">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label="Kode Pos" name="kodePos">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Telepon" name="telepon">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <h3 className="text-xl font-semibold text-[#025669] mt-6 mb-4">
            Dokumen Legalitas
          </h3>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Nama Notaris" name="namaNotaris">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Upload Dokumen RAT" name="dokRAT">
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Pilih File</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Upload Musyawarah Desa" name="dokMusDes">
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Pilih File</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <Button
                onClick={handleCancel}
                style={{
                borderColor: "#ef4444", // Tailwind 'red-500'
                color: "#ef4444",
                }}
                className="hover:!bg-red-50 hover:!text-red-600"
            >
                Batal
            </Button>
            <Button
                type="primary"
                htmlType="submit"
                style={{
                backgroundColor: "#025669",
                borderColor: "#025669",
                }}
                className="hover:!bg-[#024655] text-white"
            >
                Simpan Perubahan
            </Button>
            </div>


        </Form>
      </div>
    </LayoutWrapper>
  );
}
