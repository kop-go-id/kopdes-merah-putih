import React from "react";
import Image from "next/image";

export default function Contacts() {
  const contatactData = Array.from({ length: 38 }, (_, i) => ({
    nama: `Kantor Wilayah ${i + 1}`,
    email: `wilayah${i + 1}@kopdes.id`,
    phone: `0812-000${i + 1}`,
    alamat: `Jl. Wilayah No.${i + 1}, Indonesia`
  }));

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Logo dan Kontak Utama */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Image
          src="/images/logo.png" // Ganti dengan path logo kamu
          alt="Logo Koperasi Merah Putih"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-[#0D3B66]">Koperasi Merah Putih</h1>
        <p className="mt-2 text-gray-600">Email: dev@satu.kop.id</p>
        <p className="text-gray-600">Telepon: 0812-3456-7890</p>
        <p className="text-gray-600">Alamat: Jl. Merdeka No. 45, Jakarta Pusat</p>
      </div>

        <h2 className="text-xl font-semibold text-[#0D3B66] mb-4">
          Daftar Kontak Kantor Wilayah
        </h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari provinsi atau wilayah..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Kontak Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Card key={index} className="shadow-sm">
                <h3 className="font-bold text-[#0D3B66] mb-2">{item.nama}</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <UserOutlined className="mr-2" />
                    Koordinator: {item.koordinator}
                  </p>
                  <p>
                    <EnvironmentOutlined className="mr-2" />
                    {item.alamat}
                  </p>
                  <p>
                    <PhoneOutlined className="mr-2" />
                    <a
                      href={`tel:${item.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.phone}
                    </a>
                  </p>
                  <p>
                    <MailOutlined className="mr-2" />
                    <a
                      href={`mailto:${item.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.email}
                    </a>
                  </p>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-gray-700 mb-1">
                    <ApartmentOutlined className="mr-2" />
                    Unit Kerja Pelaksana:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {item.ukp.map((ukpItem, i) => (
                      <li key={i}>{ukpItem}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">Data tidak ditemukan.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
