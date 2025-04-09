import React, { useEffect, useState } from "react";
import { Input, Select, Upload, Button, Form, Divider, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Stepper from "@/components/Stepper";
import { useRouter } from "next/router";
import { callApi, getAPIEndpoint } from "@/utils/endpoint";

const { Dragger } = Upload;
const { Option } = Select;

export default function RegistrationExisting() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [provinces, setProvinces] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districts, setDistricts] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [subDistricts, setSubDistricts] = useState();
  const [subDistrictCode, setSubDistrictCode] = useState();
  const [villages, setVillages] = useState();
  const [villageCode, setVillageCode] = useState();

  const fetchProvince = async () => {
    try {
      const endpoint = getAPIEndpoint('/provinces', 'GET');
      const response = await callApi(endpoint);
      setProvinces(response?.data);
    } catch (err) {}
  };

  const fetchDistrict = async () => {
    try {
      const endpoint = getAPIEndpoint(`/districts/by-province-code/${provinceCode}`, 'GET');
      const response = await callApi(endpoint);
      setDistricts(response?.data);
    } catch (err) {}
  };

  const fetchSubDistrict = async () => {
    try {
      const endpoint = getAPIEndpoint(`/sub-districts/by-district-code/${districtCode}`, 'GET');
      const response = await callApi(endpoint);
      setSubDistricts(response?.data);
    } catch (err) {}
  };

  const fetchVillage = async () => {
    try {
      const endpoint = getAPIEndpoint(`/villages/by-sub-district-code/${subDistrictCode}`, 'GET');
      const response = await callApi(endpoint);
      setVillages(response?.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    fetchDistrict();
  }, [provinceCode]);

  useEffect(() => {
    fetchSubDistrict();
  }, [districtCode]);

  useEffect(() => {
    fetchVillage();
  }, [subDistrictCode]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sidebar */}
      <Stepper activeIndex={1} />

      {/* Main Content */}
      <div className="md:w-[70%] w-full px-6 py-10">
        <h2 className="text-2xl font-semibold text-[#003B49] mb-1">
          Informasi Data Koperasi
        </h2>
        <p className="text-[#7CAF3C] mb-6">Membangun Koperasi Baru</p>

        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => console.log("Form Values:", values)}
        >
          <Form.Item
            label="Nama Koperasi Baru"
            name="namaKoperasi"
            className="mb-4"
          >
            <Input
              addonBefore="Koperasi Desa Merah Putih"
              placeholder="Masukkan nama koperasi, yaitu nama desa"
            />
          </Form.Item>

          <Form.Item label="Provinsi" name="provinsi" className="mb-4">
            <Select
              placeholder="Pilih Provinsi" 
              options={provinces.map((province) => ({
                label: province.name,
                value: province.code,
              }))}
              onChange={(val) => setProvinceCode(val)}
            />
          </Form.Item>

          <Form.Item label="Kabupaten/Kota" name="kabupaten" className="mb-4">
            <Select
              placeholder="Pilih Kabupaten/Kota" 
              options={districts?.map((district) => ({
                label: district.name,
                value: district.code,
              }))}
              onChange={(val) => setDistrictCode(val)}
            />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Form.Item label="Kecamatan" name="kecamatan">
            <Select
              placeholder="Pilih Kecamatan" 
              options={subDistricts?.map((val) => ({
                label: val.name,
                value: val.code,
              }))}
              onChange={(val) => setSubDistrictCode(val)}
            />
            </Form.Item>

            <Form.Item label="Desa / Kelurahan" name="desa">
              <Select
                placeholder="Pilih Desa / Kelurahan" 
                options={villages?.map((val) => ({
                  label: val.name,
                  value: val.code,
                }))}
                onChange={(val) => setVillageCode(val)}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Notaris Pembuat Akta Koperasi"
            name="notaris"
            className="mb-4"
          >
            <Select placeholder="Pilih Notaris">
              <Option value="notaris1">Notaris A</Option>
            </Select>
          </Form.Item>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium">
                Berita Acara Musyawarah Desa
              </label>
              <Button type="primary" size="small">
                Unduh Template Musyawarah Desa
              </Button>
            </div>
            <Form.Item name="beritaMusyawarah">
              <Dragger className="!bg-white">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Unggah atau tarik dokumen ke sini
                </p>
              </Dragger>
            </Form.Item>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium">Berita Acara Rapat Anggota</label>
              <Button type="primary" size="small">
                Unduh Template Rapat Anggota
              </Button>
            </div>
            <Form.Item name="beritaRapat">
              <Dragger className="!bg-white">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Unggah atau tarik dokumen ke sini
                </p>
              </Dragger>
            </Form.Item>
          </div>

          <Form.Item
            label="Jenis Usaha Koperasi"
            name="jenisUsaha"
            className="mb-4"
          >
            <Select placeholder="Pilih jenis usaha">
              <Option value="perdagangan">Perdagangan</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Pendaftaran Nama Domain"
            name="domain"
            className="mb-6"
          >
            <Input addonAfter=".kop.id" />
          </Form.Item>

          <Divider>Penanggung Jawab</Divider>
          <Form.Item
            label="Nama Penanggung Jawab"
            name="nama"
            rules={[
              { required: true, message: "Masukkan nama penanggung jawab" },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Alamat Email"
              name="email"
              rules={[{ type: "email", message: "Email tidak valid" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Nomor HP" name="phone">
              <Input addonBefore="+62" placeholder="812345678" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Buat Kata Sandi"
              name="password"
              rules={[{ required: true, message: "Masukkan kata sandi" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Ulangi Kata Sandi"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Ulangi kata sandi" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Kata sandi tidak cocok");
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Harus menyetujui pernyataan"),
              },
            ]}
          >
            <Checkbox>
              Saya menyatakan data yang saya berikan adalah benar, jika
              dikemudian hari ternyata terdapat ketidaksesuaian atau kekeliruan,
              saya bersedia menerima segala konsekuensi hukum serta sanksi
              administratif yang berlaku.
            </Checkbox>
          </Form.Item>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Button onClick={() => router.back()} type="default" block className="md:w-1/2">
              Kembali
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="md:w-1/2 bg-teal-800 hover:bg-teal-900"
            >
              Daftar Sekarang
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
