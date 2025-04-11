"use client";

import { CheckCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafa] px-4">
      <div className="max-w-xl text-center bg-white p-8 rounded-lg shadow-md">
        <CheckCircleTwoTone
          twoToneColor="#A0B73E"
          style={{ fontSize: "64px" }}
        />
        <h1 className="text-2xl font-bold text-[#025669] mt-4 mb-2">
          Pendaftaran Berhasil!
        </h1>
        <p className="text-gray-600 mb-6">
          Terima kasih telah mendaftarkan koperasi Anda.
          <br />
          Kami akan segera memproses data yang telah Anda kirimkan.
        </p>

        <Button
          type="primary"
          className="bg-[#025669] hover:bg-[#024655] border-none text-white"
          onClick={() => router.push("/koperasi/dashboard")}
        >
          Lihat Dashboard
        </Button>
      </div>
    </div>
  );
}


/* TODO: [Maintenance]
  Register Form (pendaftaran baru & mengembangkan yang sudah ada) could to be one form in different page
  Add conditional logic to create share form.
  Also, create share layout on the left side.
*/
