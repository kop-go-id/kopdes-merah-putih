import { Form, Input, Select, Upload, Button, Divider, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Stepper from "@/components/Stepper";
import { useRouter } from "next/router";

const { Option } = Select;
const { Dragger } = Upload;

export default function RegistrationExisting() {
    const router = useRouter();
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

        <Form layout="vertical">
          <Divider>Informasi Koperasi</Divider>
          <Form.Item label="Nama Koperasi Baru" name="namaKoperasi">
            <Input placeholder="Koperasi Desa Merah Putih" />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item label="Provinsi" name="provinsi">
              <Select placeholder="Pilih Provinsi">
                <Option value="jateng">Jawa Tengah</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Kabupaten/Kota" name="kabupaten">
              <Select placeholder="Pilih Kabupaten/Kota">
                <Option value="semarang">Semarang</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Desa / Kelurahan" name="desa">
              <Input />
            </Form.Item>

            <Form.Item label="Kecamatan" name="kecamatan">
              <Input />
            </Form.Item>
          </div>

          <Form.Item label="Notaris Pembuat Akta Koperasi" name="notaris">
            <Select placeholder="Pilih Notaris">
              <Option value="notaris1">Notaris 1</Option>
            </Select>
          </Form.Item>

          {/* Upload Musyawarah Desa */}
          <Form.Item
            label={
              <div className="flex justify-between items-center">
                Berita Acara Musyawarah Desa
                <Button size="small" type="link">
                  Unduh Template Musyawarah Desa
                </Button>
              </div>
            }
            name="beritaMusyawarah"
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="text-sm text-gray-600">
                Unggah atau tarik dokumen ke sini
              </p>
            </Dragger>
          </Form.Item>

          {/* Upload Rapat Anggota */}
          <Form.Item
            label={
              <div className="flex justify-between items-center">
                Berita Acara Rapat Anggota
                <Button size="small" type="link">
                  Unduh Template Rapat Anggota
                </Button>
              </div>
            }
            name="beritaRapat"
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="text-sm text-gray-600">
                Unggah atau tarik dokumen ke sini
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Jenis Usaha Koperasi" name="jenisUsaha">
            <Select placeholder="Pilih jenis usaha">
              <Option value="pertanian">Pertanian</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Pendaftaran Nama Domain" name="domain">
            <Input placeholder="namakoperasi" addonAfter=".kop.id" />
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
            <Button onClick={() => router.back()}  type="default" block className="md:w-1/2">
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
