import React, { useEffect, useState } from "react";
import { Form, Input, Select, Upload, Button, Divider, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Stepper from "@/components/Stepper";
import { useRouter } from "next/router";
import { fetchDistrict, fetchProvince, fetchSubDistrict, fetchVillage } from "@/services/region";
import { getCooperativeTypes, getNPAKByProvince } from "@/services/cooperative";

const { Option, OptGroup } = Select;
const { Dragger } = Upload;

export default function RegistrationExisting() {
  const router = useRouter();
  const [form] = Form.useForm();

  const [agreementStatus, setAgreementStatus] = useState({
    agreement_1: false,
    agreement_2: false,
  });

  const handleCheckboxChange = (e, name) => {
    setAgreementStatus((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };
  const [provinces, setProvinces] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districts, setDistricts] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [subDistricts, setSubDistricts] = useState();
  const [subDistrictCode, setSubDistrictCode] = useState();
  const [villages, setVillages] = useState();
  const [notaryNumbers, setNotaryNumbers] = useState();
  const [cooperativeTypes, setCooperativeTypes] = useState();

  useEffect(() => {
    fetchProvince().then(setProvinces);
    getCooperativeTypes().then(setCooperativeTypes);
  }, []);

  useEffect(() => {
    if (provinceCode) {
      fetchDistrict(provinceCode).then(setDistricts);
      getNPAKByProvince(provinceCode).then(setNotaryNumbers);
    }
  }, [provinceCode]);

  useEffect(() => {
    fetchSubDistrict(districtCode).then(setSubDistricts);
  }, [districtCode]);

  useEffect(() => {
    fetchVillage(subDistrictCode).then(setVillages);
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
        <p className="text-[#7CAF3C] mb-6">Mengembangkan Yang Sudah Ada</p>

        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => console.log("Form Values:", values)}
        >
          <Form.Item
            label="Nomor Induk Koperasi"
            name="nik"
            className="mb-4"
            rules={[{ required: true, message: "Nama koperasi wajib diisi." }]}
          >
            <Input.Search
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              placeholder="Masukkan Nomor Induk Koperasi"
            />
          </Form.Item>
          <Form.Item
            label="Nama Koperasi Existing"
            name="name"
            className="mb-4"
            rules={[{ required: true, message: "Nama koperasi wajib diisi." }]}
          >
            <Input
              addonBefore="Koperasi Desa Merah Putih"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              placeholder="Masukkan nama koperasi, yaitu nama desa. contoh DUREN TIGA"
            />
          </Form.Item>

          <Form.Item
            label="Provinsi"
            name="province"
            className="mb-4"
            rules={[{ required: true, message: "Provinsi wajib dipilih." }]}
          >
            <Select
              placeholder="Pilih Provinsi"
              options={provinces.map((province) => ({
                label: province.name,
                value: province.code,
              }))}
              showSearch
              filterOption={(input, option) =>
                option?.label?.toLowerCase().includes(input.toLowerCase())
              }
              onChange={(val) => setProvinceCode(val)}
            />
          </Form.Item>

          <Form.Item
            label="Kabupaten/Kota"
            name="district"
            className="mb-4"
            rules={[
              { required: true, message: "Kabupaten/Kota wajib dipilih." },
            ]}
          >
            <Select
              placeholder="Pilih Kabupaten/Kota"
              options={districts?.map((district) => ({
                label: district.name,
                value: district.code,
              }))}
              showSearch
              filterOption={(input, option) =>
                option?.label?.toLowerCase().includes(input.toLowerCase())
              }
              onChange={(val) => setDistrictCode(val)}
            />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Form.Item
              label="Kecamatan"
              name="subdistrict"
              rules={[{ required: true, message: "Kecamatan wajib dipilih." }]}
            >
              <Select
                placeholder="Pilih Kecamatan"
                options={subDistricts?.map((val) => ({
                  label: val.name,
                  value: val.code,
                }))}
                showSearch
                filterOption={(input, option) =>
                  option?.label?.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(val) => setSubDistrictCode(val)}
              />
            </Form.Item>

            <Form.Item
              label="Desa / Kelurahan"
              name="village"
              rules={[
                { required: true, message: "Desa/Kelurahan wajib dipilih." },
              ]}
            >
              <Select
                placeholder="Pilih Desa / Kelurahan"
                options={villages?.map((val) => ({
                  label: val.name,
                  value: val.code,
                }))}
                showSearch
                filterOption={(input, option) =>
                  option?.label?.toLowerCase().includes(input.toLowerCase())
                }
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Notaris Pembuat Akta Koperasi"
            name="npakId"
            className="mb-4"
            rules={[{ required: true, message: "Notaris wajib dipilih." }]}
          >
            <Select
              placeholder="Pilih Notaris"
              options={notaryNumbers?.map((notary) => ({
                label: notary.name,
                value: notary.notary_id,
              }))}
            />
          </Form.Item>

          <Form.Item
            label={
              <div className="flex flex-col gap-1">
                <span className="font-medium">
                  Berita Acara Musyawarah Desa
                </span>
                <Button
                  type="link"
                  size="small"
                  className="text-blue-600 p-0 self-start"
                  onClick={() => {
                    // Ganti dengan link file yang sebenarnya
                    window.open(
                      "/templates/musyawarah-desa-template.pdf",
                      "_blank"
                    );
                  }}
                >
                  Unduh Template Berita Acara Musyawarah Desa
                </Button>
              </div>
            }
            name="bamd"
            rules={[
              {
                required: true,
                message: "Dokumen Musyawarah Desa wajib diunggah.",
              },
            ]}
          >
            <Dragger className="!bg-white">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Unggah atau tarik dokumen Berita Acara Musyawarah Desa ke sini
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label={
              <div className="flex flex-col gap-1">
                <span className="font-medium">Berita Acara Rapat Anggota</span>
                <Button
                  type="link"
                  size="small"
                  className="text-blue-600 p-0 self-start"
                  onClick={() => {
                    window.open(
                      "/templates/rapat-anggota-template.pdf",
                      "_blank"
                    );
                  }}
                >
                  Unduh Template Berita Acara Rapat Anggota
                </Button>
              </div>
            }
            name="bara"
            rules={[
              {
                required: true,
                message: "Dokumen Rapat Anggota wajib diunggah.",
              },
            ]}
          >
            <Dragger className="!bg-white">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Unggah atau tarik dokumen Berita Acara Rapat Anggota ke sini
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Jenis Usaha Koperasi"
            name="klu"
            className="mb-4 w-full"
            rules={[
              {
                required: true,
                message: "Jenis Usaha Koperasi wajib dipilih.",
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Pilih Jenis Usaha"
              onChange={(val) => console.log("multi", val)}
              className="w-full"
              popupMatchSelectWidth={true}
            >
              {cooperativeTypes?.map((type) => (
                <OptGroup key={type.cooperative_type_id} label={type.name}>
                  {type.klus.map((option) => (
                    <Option key={option.klu_id} value={option.code_kbli}>
                      <span className="whitespace-normal break-words">{`${option.code_kbli} - ${option.name}`}</span>
                    </Option>
                  ))}
                </OptGroup>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Pendaftaran Nama Domain"
            name="domain"
            className="mb-6"
            rules={[
              { required: true, message: "Nama domain koperasi wajib diisi." },
            ]}
          >
            <Input
              onInput={(e) => (e.target.value = e.target.value.toLowerCase())}
              addonAfter=".kop.id"
              placeholder="contoh: durentiga"
            />
          </Form.Item>

          <Divider>Penanggung Jawab</Divider>
          <Form.Item
            label="Nama Penanggung Jawab"
            name="name"
            rules={[
              { required: true, message: "Nama penanggung jawab wajib diisi." },
            ]}
          >
            <Input
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              placeholder="Masukan nama penanggung jawab atau ketua koperasi"
            />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Alamat Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Alamat email tidak valid atau kosong.",
                },
              ]}
            >
              <Input placeholder="Masukan email koperasi" />
            </Form.Item>

            <Form.Item
              label="Nomor HP"
              name="phone"
              rules={[{ required: true, message: "Nomor HP wajib diisi." }]}
            >
              <Input addonBefore="+62" placeholder="812345678" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Buat Kata Sandi"
              name="password"
              rules={[{ required: true, message: "Kata sandi wajib diisi." }]}
            >
              <Input.Password placeholder="Masukan kata sandi" />
            </Form.Item>

            <Form.Item
              label="Ulangi Kata Sandi"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Konfirmasi kata sandi wajib diisi.",
                },
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
              <Input.Password placeholder="Masukan ulang kata sandi" />
            </Form.Item>
          </div>

          <Form.Item
            name="agreement_1"
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
            <Checkbox onChange={(e) => handleCheckboxChange(e, "agreement_1")}>
              Saya menyatakan data yang saya berikan adalah benar, jika
              dikemudian hari ternyata terdapat ketidaksesuaian atau kekeliruan,
              saya bersedia menerima segala konsekuensi hukum serta sanksi
              administratif yang berlaku.
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="agreement_2"
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
            <Checkbox onChange={(e) => handleCheckboxChange(e, "agreement_2")}>
              Saya menyatakan bahwa seluruh anggota koperasi berdomisili
              diwilayah yang sama.
            </Checkbox>
          </Form.Item>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Button
              onClick={() => router.back()}
              type="default"
              block
              className="md:w-1/2"
            >
              Kembali
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={
                agreementStatus.agreement_1 && agreementStatus.agreement_2
                  ? false
                  : true
              }
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
