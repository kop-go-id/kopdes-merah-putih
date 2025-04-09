import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Image } from "antd";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Tentang", link: "about" },
    { name: "Model", link: "model" },
    { name: "Manfaat", link: "benefit" },
    { name: "Jenis", link: "type" },
    { name: "Pertanyaan", link: "faq" },
    { name: "Regulasi", link: "regulation" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Koperasi Desa Merah Putih Logo"
                width={150}
                height={50}
                preview={false}
                className="h-10 md:h-12 mr-2"
              />
            </Link>
          </div>

          {/* Desktop Menu di pojok kanan */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.link.toLowerCase()}`}
                className="text-md text-gray-900 hover:text-[#A0B73E] transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Tombol Masuk */}
            <Link
              href="/masuk"
              className="ml-4 text-[#a0b73e] border border-[#a0b73e] px-4 py-2 rounded-md hover:bg-[#a0b73e] hover:text-white transition-colors"
            >
              Masuk
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.link.toLowerCase()}`}
                  className="text-md text-gray-900 hover:text-[#A0B73E] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Tombol Masuk di Mobile */}
              <Link
                href="/masuk"
                className="text-[#a0b73e] border border-[#a0b73e] px-4 py-2 rounded-md text-center hover:bg-[#a0b73e] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
