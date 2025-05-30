'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-white py-10  text-[24] font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Social */}
        <div className=" flex flex-col gap-2 justify-content items-center">
          <Link href="/" className=" ">
            <Image
              src="https://dansolutions.vn/wp-content/uploads/2024/05/logo-horizontal-1.png"
              alt="Dan Solutions Logo"
              width={145}
              height={66.81}
            />
          </Link>
          <div className="flex space-x-4 text-[#10394C] justify-content ">
            <a href="https://www.facebook.com/dhuyenkhtn" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.x.com/danhuyenphan" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />

            </a>
          </div>
        </div>

        {/* DỊCH VỤ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">DỊCH VỤ</h2>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/du-an">Thiết kế và phát triển website</Link></li>
            <li>Gia công phần mềm theo yêu cầu</li>
            <li><Link href="/du-an">Phát triển ứng dụng mobile</Link></li>
            <li><Link href="#">Tư vấn công nghệ</Link></li>
            <li>Tư vấn SEO &amp; Nội dung</li>
            <li>Bảo trì vận hành &amp; Web Hosting</li>
          </ul>
        </div>

        {/* LĨNH VỰC */}
        <div>
          <h2 className="text-lg font-semibold mb-4">LĨNH VỰC</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Thương mại điện tử – Ecommerce</li>
            <li>Fintech – Tài Chính Công Nghệ</li>
            <li>EdTech – Giáo Dục</li>
            <li>Du lịch</li>
          </ul>
        </div>

        {/* LIÊN HỆ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">LIÊN HỆ </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <HiOutlineMail className="w-5 h-5 text-[#10394C]" />
              <a href="mailto:huyenpv@dansolutions.vn">huyenpv@dansolutions.vn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="w-5 h-5 text-[#10394C]" />
              <span>(+84) 932 320 105</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="w-5 h-5 text-[#10394C] mt-1" />
              <span>174 Nguyen Van Cong, Go Vap District,<br />Ho Chi Minh City</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
