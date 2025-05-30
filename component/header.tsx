'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/introduce', label: 'Giới Thiệu' },
    { href: '/project', label: 'Dự Án' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Liên Hệ' },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#0e425a] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white text-sm">
          {/* Logo */}
          <Link href="/" className="mb-2 md:mb-0">
            <Image
              src="https://dansolutions.vn/wp-content/uploads/2024/05/logo-horizontal-1.png"
              alt="Dan Solutions Logo"
              width={170}
              height={78.34}
              priority
            />
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 gap-2 md:gap-0 text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center">
              <FaPhoneAlt size={14} />
              <span>(+84) 932 320 105</span>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <FaEnvelope size={14} />
              <span>huyenpv@dansolutions.vn</span>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-#c36-600 text-white text-sm font-medium px-[40px] pt-[7px] pb-[8px] rounded"

            >
              Liên Hệ
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white py-4 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-base font-medium">
            {navItems.map(({ href, label }) => (
              <li
                key={href}
                className={`${
                  pathname === href
                    ? 'text-[#e6344a] border-b-2 border-[#e6344a]'
                    : 'text-gray-800 hover:text-[#e6344a]'
                } pb-1 transition`}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com/dhuyenkhtn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#0e425a] text-[#0e425a] hover:bg-[#0e425a] hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://x.com/danhuyenphan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#0e425a] text-[#0e425a] hover:bg-[#0e425a] hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>

  );
}
