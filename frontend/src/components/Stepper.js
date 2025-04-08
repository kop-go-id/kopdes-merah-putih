import { useState } from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";

export default function Stepper() {
    const [activeIndex, setActiveIndex] = useState(0);

    const schema = [
      {
        label: "Pilih Skema",
        desc: "Pilih salah satu dari tiga skema yang disediakan",
      },
      {
        label: "Informasi Data Koperasi & Penanggung Jawab",
        desc: "Isi detail dari data koperasi anda",
      },
      {
        label: "Informasi Data Penanggung Jawab",
        desc: "Isi data diri penanggung jawab koperasi",
      },
    ]

    return (
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
            {schema.map((item, index) => {
              const active = activeIndex >= index;

              return (
                <div className={twMerge("flex items-start space-x-3", active ? "" : "opacity-70")}>
                  <div className={twMerge("w-5 h-5 rounded-full border-2 border-white", active ? "flex items-center justify-center" : "")}>
                    {active && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              )
            })}
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
    )
}