import React, { useEffect } from "react";
import { Input, Select, Upload, Button, Form, Divider, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Stepper from "@/components/Stepper";
import { useRouter } from "next/router";
import { callApi, getAPIEndpoint } from "@/pages/utils/endpoint";

const { Dragger } = Upload;
const { Option } = Select;

export default function RegistrationExisting() {
  const [form] = Form.useForm();
  const router = useRouter();

  const fetchProvince = async () => {
    const endpoint = getAPIEndpoint('provinces', 'GET');
    const provinces = await callApi(endpoint);
    return provinces;
  };

  useEffect(() => {
    fetchProvince();
  }, []);

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
            <Select placeholder="Pilih Provinsi">
              <Option value="jakarta">DKI Jakarta</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Kabupaten/Kota" name="kabupaten" className="mb-4">
            <Select placeholder="Pilih Kabupaten/Kota">
              <Option value="jaksel">Jakarta Selatan</Option>
            </Select>
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Form.Item label="Desa / Kelurahan" name="desa">
              <Input />
            </Form.Item>

            <Form.Item label="Kecamatan" name="kecamatan">
              <Input />
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
