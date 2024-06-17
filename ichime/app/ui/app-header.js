"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//Link data
const links = [
  {
    name: "ABOUT US",
    href: "#about",
  },
  {
    name: "PRODUCT",
    href: "/product#product",
  },
  {
    name: "CONTACT US",
    href: "#contact",
  },
];

//Lang data
const LANG = {
  ENGLISH: "ENGLISH",
  VIETNAMESE: "VIETNAMESE",
};

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [lang, setLang] = useState("ENGLISH");
  return (
    <header className="fixed top-0 left-0 z-[1] w-full lg:min-w-[1440px] bg-white flex justify-between pr-[14px] md:pr-[42px] min-h-[60px] md:min-h-[100px] lg:min-h-[7.5rem] pl-[14px] md:pl-[42px] text-[2.1875rem] drop-shadow-xl">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src="/images/logoIchime.png"
          width={347}
          height={97}
          alt="Ichime Logo"
          className="w-[200px] md:w-[347px] cursor-pointer bg-white"
        />
      </Link>
      {/* Navbar */}
      <nav className="flex-1 flex justify-end lg:justify-between gap-10 bg-white">
        <div
          className={`absolute transition-all ${
            isOpenMenu
              ? "top-[60px] md:top-[100px]"
              : "top-[-120px] md:top-[-250px]"
          } left-0 z-[-1] lg:z-[2] w-full item lg:static lg:flex lg:gap-10 justify-end lg:items-center`}
        >
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className="block text-[20px] md:text-[35px] bg-white"
              >
                <p
                  className="relative w-full text-center font-bold leading-10 md:leading-[80px] lg:leading-[120px] after:lg:absolute after:lg:bottom-5 transition-all after:transition-all after:lg:block after:lg:w-0 after:lg:border-0 after:lg:border-[#10134C] hover:after:lg:border-[2px] hover:after:lg:w-[100px] hover:bg-slate-200 hover:lg:bg-white"
                  onClick={() => setIsOpenMenu(false)}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Chọn ngôn ngữ */}
        <div className="flex items-center min-w-fit">
          <div className="flex items-center flex-none">
            <div className="block pr-1 md:pr-3">
              <Image
                src="/images/icons/language.png"
                width={54}
                height={54}
                alt="Global"
                className={`w-[2rem] md:w-[3.375rem] cursor-pointer transition-all ${
                  isOpenLang ? "rotate-90" : "rotate-0"
                }`}
                onClick={() => {
                  setIsOpenLang(!isOpenLang);
                  setIsOpenMenu(false);
                }}
              />
            </div>
          </div>
          {!isOpenMenu && (
            <div
              className="cursor-pointer flex lg:hidden items-center text-[35px] md:text-[60px]"
              onClick={() => {
                setIsOpenMenu(true);
                setIsOpenLang(false);
              }}
            >
              <ion-icon name="menu"></ion-icon>
            </div>
          )}

          {isOpenMenu && (
            <div
              className="cursor-pointer flex lg:hidden items-center text-[35px] md:text-[60px]"
              onClick={() => setIsOpenMenu(false)}
            >
              <ion-icon name="close"></ion-icon>
            </div>
          )}

          <p className="hidden lg:flex font-bold items-center">{lang}</p>
        </div>
      </nav>
      <div
        className={`absolute font-bold flex flex-col bg-white z-[-1] transition-all h-fit pb-1 md:pb-5 ${
          isOpenLang
            ? "top-[60px] md:top-[100px] lg:top-[120px]"
            : "top-[-100px] md:top-[-150px] lg:top-[-120px]"
        }  left-0 w-full`}
      >
        <button
          className={`w-full transition-all hover:bg-slate-200 text-[20px] md:text-[35px] leading-[35px] md:leading-[50px] ${lang === LANG.ENGLISH && "bg-slate-200"}`}
          onClick={() => {
            setIsOpenLang(false);
            setLang(LANG.ENGLISH);
          }}
        >
          English
        </button>
        <button
          className={`w-full transition-all hover:bg-slate-200 text-[20px] md:text-[35px] leading-[35px] md:leading-[50px] ${lang === LANG.VIETNAMESE && "bg-slate-200"}`}
          onClick={() => {
            setIsOpenLang(false);
            setLang(LANG.VIETNAMESE);
          }}
        >
          Vietnamese
        </button>
      </div>
    </header>
  );
}
