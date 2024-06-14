"use client";
import Image from "next/image";
import Link from "next/link";

//Link data
const links = [
  {
    name: "ABOUT US",
    href: "#about",
  },
  {
    name: "PRODUCT",
    href: "/#product",
  },
  {
    name: "CONTACT US",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header
      id="about"
      className="flex justify-between pr-[14px] md:pr-[42px] leading-[30px] md:leading-[120px] pl-[14px] md:pl-[42px] text-navSm md:text-navLg"
    >
      {/* Logo */}
      <div className="hidden md:flex items-center flex-none">
        <Image
          src="/images/logoIchime.png"
          width={347}
          height={97}
          alt="Ichime Logo"
        />
      </div>
      <div className="flex md:hidden items-center flex-none">
        <Image
          src="/images/logoIchime.png"
          width={96}
          height={27}
          alt="Ichime Logo"
        />
      </div>
      {/* Navbar */}
      <nav className="flex justify-between gap-2 md:gap-12">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="flex flex-none">
              <p className="relative font-bold flex items-center after:absolute after:bottom-5 after:transition-all after:block after:w-0 after:border-0 after:border-[#10134C] hover:after:border-[2px] hover:after:w-[100px]">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/* Chọn ngôn ngữ */}
        <div className="flex cursor-pointer">
          <div className="flex items-center flex-none">
            <div className="hidden md:block pr-3">
              <Image
                src="/images/icons/language.png"
                width={54}
                height={54}
                alt="Global"
              />
            </div>
            <div className="block md:hidden pb-1 pr-1">
              <Image
                src="/images/icons/language.png"
                width={16}
                height={16}
                alt="Global"
              />
            </div>
          </div>
          <p className="flex font-bold items-center">ENGLISH</p>
        </div>
      </nav>
    </header>
  );
}
