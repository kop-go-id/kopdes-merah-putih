export default function KonfirmasiEmail({ nama = "Bintang Danuarta" }) {
  return (
    <div className="bg-[#f5f5f5] px-4 py-10 text-sm text-[#222] font-sans min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <img src="/images/logo.png" className="h-10 mb-4" alt="logo" />
        <p>Halo <strong>{nama}</strong>,</p>
        <p className="mt-2">
          Sebagai tindak lanjut dari proses registrasi akun Anda untuk pengajuan Koperasi Merah Putih, kami mohon konfirmasi atas pernyataan berikut:
        </p>
        <ol className="pl-5 list-decimal space-y-1 mt-2">
          <li>Informasi dan data yang disampaikan dalam pengajuan ini adalah benar dan sesuai dengan keadaan yang sebenarnya.</li>
          <li>Pengajuan ini telah memenuhi seluruh persyaratan dan tidak melanggar ketentuan hukum maupun peraturan perundang-undangan yang berlaku.</li>
          <li>Anggota koperasi berdomisili di wilayah desa/kelurahan yang sama</li>
          <li>Saya bersedia menerima segala bentuk sanksi, termasuk namun tidak terbatas pada sanksi pidana, perdata, dan/atau administratif sesuai dengan ketentuan yang berlaku.</li>
          <li>Dengan memperhatikan hal-hal tersebut, saya menyatakan siap bertanggung jawab penuh atas pengajuan ini.</li>
        </ol>
        <p className="mt-4 font-bold">
          Dengan mengklik tombol di bawah ini, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh pernyataan di atas.
        </p>

        <div className="text-center mt-6">
          <button
            className="bg-[#006766] text-white px-6 py-2 rounded-md font-bold w-full"
          >
            Setuju dan Masuk
          </button>
        </div>

        <div className="mt-10 text-center border-t pt-6 text-xs text-gray-500">
          <img src="/images/logo-kemenkop.png" className="h-8 mx-auto mb-2" alt="Kemenkop Logo" />
          <div className="flex justify-center gap-3 mb-2">
            <img src="/images/facebook.png" className="h-5" alt="fb" />
            <img src="/images/ig.png" className="h-5" alt="ig" />
            <img src="/images/x.png" className="h-5" alt="Twitter" />
            <img src="/images/yt.png" className="h-5" alt="Youtube" />
          </div>
          <p>Hakcipta © 2025. Kementerian Koperasi Republik Indonesia</p>
        </div>
      </div>
    </div>
  );
}
