'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram  } from 'react-icons/fa';

const navItems = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/introduce', label: 'Giới Thiệu' },
  { href: '/project', label: 'Dự Án' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Liên Hệ' },
];

const socialLinks = [
  { href: 'https://facebook.com/dhuyenkhtn', icon: <FaFacebookF size={14} /> },
  { href: 'https://x.com/danhuyenphan', icon: <FaTwitter size={14} /> },
  { href: 'https://www.facebook.com/dhuyenkhtn', icon: <FaInstagram size={14} /> },
];


const Logo = ({ width = 170, height = 78.34 }: { width?: number; height?: number }) => {
  return (
    <Link href="/">
      <Image
        src="https://dansolutions.vn/wp-content/uploads/2024/05/logo-horizontal-1.png"
        alt="Dan Solutions Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}

const SocialIcons = ({ isSticky }: { isSticky: boolean }) => {
  const baseClass = 'w-8 h-8 flex items-center justify-center';
  const stickyClass = 'border-white text-white hover:text-[#10425B]';
  const normalClass = 'rounded-full border transition border-[#0e425a] text-[#0e425a] hover:bg-[#0e425a] hover:text-white';

  return (
    <div className="flex items-center space-x-3">
      {socialLinks.map(({ href, icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} ${isSticky ? stickyClass : normalClass}`}
>
          {icon}
        </a>
      ))}
    </div>
  );
}

const NavLinks = ({ pathname, isSticky }: { pathname: string; isSticky: boolean }) => {
  const activeClass = isSticky ? 'text-white' : 'text-[#e6344a] border-b-2 border-[#e6344a]';
  const inactiveClass = isSticky ? 'text-white' : 'text-gray-800 hover:text-[#e6344a]';

  return (
    <ul
      className={`flex flex-wrap ${isSticky ? 'space-x-6' : 'space-x-4 md:space-x-8'} font-bold uppercase justify-center`}
    >
      {navItems.map(({ href, label }) => (
        <li
          key={href}
          className={`pb-1 transition ${pathname === href ? activeClass : inactiveClass}`}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-500 ${isSticky ? 'fixed top-0 bg-[#10425B] shadow-md' : 'relative bg-white'}`}>
      {!isSticky ? (
        <>
          <div className="bg-[#10425B] py-3">
            <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-white text-sm">
              <Logo />
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
                  className="bg-[#deaf47] hover:bg-[#ed3255] text-white text-sm font-medium px-[40px] pt-[7px] pb-[8px] rounded"
                >
                  Liên Hệ
                </Link>
              </div>
            </div>
          </div>

          <nav className="py-5">
            <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
              <NavLinks pathname={pathname} isSticky={false} />
              <SocialIcons isSticky={false} />
            </div>
          </nav>
        </>
      ) : (
        <div className="py-3">
          <div className="max-w-8xl mx-auto flex items-center justify-between gap-4 text-white">
            <Logo width={178} height={86} />
            <div className="hidden md:flex">
              <NavLinks pathname={pathname} isSticky />
            </div>
            <SocialIcons isSticky />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;