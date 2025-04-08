import { useState } from "react";
import { Radio, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const schemaList = [
  {
    value: "baru",
    title: "Membangun Koperasi Baru",
    desc: "Dibentuk melalui musyawarah desa dengan calon anggota koperasi minimal 9 orang membentuk Koperasi Desa Merah Putih. Jumlah anggota dapat dikembangkan lebih banyak.",
  },
  {
    value: "pengembangan",
    title: "Mengembangkan Yang Sudah Ada",
    desc: "Dibentuk melalui rapat Perubahan Anggaran Dasar melibatkan masyarakat desa untuk membentuk Koperasi Desa Merah Putih.",
  },
  {
    value: "revitalisasi",
    title: "Revitalisasi Koperasi",
    desc: "Dibentuk melalui pembentukan tim Revitalisasi internal Koperasi, terdiri dari perangkat organisasi (Pengurus, Pengawas, Anggota, dan Karyawan) dengan mempertimbangkan kualitas Sumber Daya Manusia/kompetensi.",
    avatar: "/images/avatar.png", // ganti dengan path avatar kamu
  },
];

export default function SchemaRegistration() {
  const router = useRouter();
  const [value, setValue] = useState(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pt-7 mx-7">
      {/* Sidebar */}
      <div className="md:w-[30%] w-full bg-primary text-white flex flex-col justify-between rounded-tr-[40px]">
        <div>
          <div className="rounded-br-xl lg:rounded-br-[40px] bg-white w-1/2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mb-6 w-40"
            />
          </div>
          <div className="space-y-6 p-6">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <div>
                <p className="font-semibold">Pilih Skema</p>
                <p className="text-sm text-gray-200">
                  Pilih salah satu dari tiga skema yang disediakan
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 opacity-70">
              <div className="w-5 h-5 rounded-full border-2 border-white"></div>
              <div>
                <p className="font-semibold">Informasi Data Koperasi & Penanggung Jawab</p>
                <p className="text-sm text-gray-300">
                  Isi detail dari data koperasi anda
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 opacity-70">
              <div className="w-5 h-5 rounded-full border-2 border-white"></div>
              <div>
                <p className="font-semibold">Informasi Data Penanggung Jawab</p>
                <p className="text-sm text-gray-300">
                  Isi data diri penanggung jawab koperasi
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button
          icon={<LeftOutlined />}
          className="mt-10 text-white border-white m-6"
          type="text"
        >
          Kembali ke halaman utama
        </Button>
      </div>

      {/* Main Content */}
      <div className="md:w-[70%] w-full px-6 py-10">
        <h2 className="text-2xl font-semibold text-[#003B49] mb-6">
          Pilih Skema Koperasi
        </h2>

        <Radio.Group
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="w-full space-y-4 flex flex-col"
        >
          {schemaList.map((skema, index) => (
            <Radio
              key={skema.value}
              value={skema.value}
              className="p-4 rounded-lg border border-gray-300 flex flex-col md:flex-row md:items-start gap-4"
              disabled={index === 2}
            >
              <div className="flex-grow">
                <p className="font-semibold text-lg">{skema.title}</p>
                <p className={index === 2 ? "text-gray text-sm" : "text-gray-600 text-sm"} >{skema.desc}</p>
              </div>
            </Radio>
          ))}
        </Radio.Group>

        <Button
          type="primary"
          className="mt-8 w-full md:w-40 bg-primary"
          disabled={!value}
          // router condition
          onClick={() => {
            if (value === "baru") {
              router.push("/daftar/pendaftaran-baru")
            } else {
              router.push("/daftar/pengembangan-koperasi")
            }
          }}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
}
