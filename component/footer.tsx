'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <div className="bg-white py-10 text-[24px] font-medium w-full  ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">

        {/* Logo + Social */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <Link href="/">
            <Image
              src="https://dansolutions.vn/wp-content/uploads/2024/05/logo-horizontal-1.png"
              alt="Dan Solutions Logo"
              width={145}
              height={66.83}
            />
          </Link>
          <div className="flex space-x-4 text-primary justify-content items-center ">
            <a href="https://www.facebook.com/dhuyenkhtn" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-[9.64px] h-[18px] text-[#10425b]" />
            </a>
            <a href="https://www.x.com/danhuyenphan" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-[18px] h-[14.62] text-[#10425b] " />

            </a>
          </div>
        </div>

        {/* DỊCH VỤ */}
        <div className='text-[#10394C]'>
          <h2 className="text-lg mb-4 text-[24px] font-[600] text-[#222222]">DỊCH VỤ</h2>
          <ul className="space-y-2 text-gray-700 text-[16px]">
            <li><Link href="/du-an">Thiết kế và phát triển website</Link></li>
            <li>Gia công phần mềm theo yêu cầu</li>
            <li><Link href="/du-an">Phát triển ứng dụng mobile</Link></li>
            <li><Link href="#">Tư vấn công nghệ</Link></li>
            <li>Tư vấn SEO &amp; Nội dung</li>
            <li>Bảo trì vận hành &amp; Web Hosting</li>
          </ul>
        </div>

        {/* LĨNH VỰC */}
        <div className='text-[#10394C]'>
          <h2 className="text-lg font-semibold mb-4 text-[24px] text-primary">LĨNH VỰC</h2>
          <ul className="space-y-2 text-gray-700 text-[16px]">
            <li>Thương mại điện tử – Ecommerce</li>
            <li>Fintech – Tài Chính Công Nghệ</li>
            <li>EdTech – Giáo Dục</li>
            <li>Du lịch</li>
          </ul>
        </div>

        {/* LIÊN HỆ */}
        <div >
          <h2 className="text-lg font-semibold mb-4 text-[24px] text-primary ">LIÊN HỆ </h2>
          <ul className="space-y-2 text-[#000000] font-[400] text-[16px]">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4  fill-current"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>

              <a href="mailto:huyenpv@dansolutions.vn">huyenpv@dansolutions.vn</a>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-4  fill-current"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <span>(+84) 932 320 105</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-5  fill-current flex-shrink-0 translate-x-[3px]"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <span>174 Nguyen Van Cong, Go Vap District,<br />Ho Chi Minh City</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
