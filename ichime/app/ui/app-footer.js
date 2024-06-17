"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section id="contact"  className="text-white">
      <div className="flex justify-between py-[8px] md:py-[16px] px-[16px] md:px-[55px]">
        <div className="flex items-center">
          <Image
            src="/images/compLabels/google.png"
            width={162}
            height={54}
            alt="Google company"
            className="w-[49px] sm:w-[70px] ml:w-[100px] lg:w-[162px] cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/meta.png"
            width={186}
            height={105}
            className="w-[54px] sm:w-[85px] ml:w-[120px] lg:w-[186px] cursor-pointer"
            alt="meta company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/singular.png"
            width={220}
            height={59}
            className="w-[66px] sm:w-[110px] ml:w-[160px] lg:w-[220px] cursor-pointer"
            alt="singular company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/sensorTower.png"
            width={257}
            height={85}
            className="w-[78px] sm:w-[115px] ml:w-[160px] lg:w-[257px] cursor-pointer"
            alt="sensorTower company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/dataAi.png"
            width={179}
            height={57}
            className="w-[53px] sm:w-[75px] ml:w-[100px] lg:w-[179px] cursor-pointer"
            alt="dataAi company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/yandex.png"
            width={133}
            height={32}
            className="w-[39px] sm:w-[60px] ml:w-[80px] lg:w-[133px] cursor-pointer"
            alt="yandex company"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[url('/images/footerBg.png')] h-fit w-full py-[15px] md:py-[40px] px-[21px] md:px-[76px]">
        {/* Logo */}
        <div>
          <div>
            <Image
              src="/images/logoIchimeFooter.png"
              width={651}
              height={122}
              alt="Ichime Footer Logo"
              className="w-[187px] sm:w-[400px] md:w-[651px]"
            />
          </div>
        </div>
        {/* Text */}
        <div className="">
          <h2 className="font-bold text-[20px] text-center sm:text-left ml:text-[25px] mlg:text-[30px] lg:text-[35px]">
            Launch your dream app today!
          </h2>
          <div className="text-[12px] mlg:text-[16px] lg:text-[20px] font-bold w-full md:max-w-[500px]">
            <div className="flex gap-[4px] md:gap-[17px]">
              <div className="pt-2 pl-[2px]">
                <Image
                  src="/images/icons/iconFooterAddr.png"
                  width={25}
                  height={18}
                  alt="Icon Footer Address"
                  className="w-[6px] sm:w-[12px] ml:w-[18px] lg:w-[25px] cursor-pointer"
                />
              </div>
              <a
                className="cursor-pointer hover:underline w-full"
                href="https://www.google.com/maps/search/?api=1&query=Toa+nha+TTC+Duy+Tan"
                target="_blank"
              >
                19 Duy Tan, Dich Vong Hau Ward, Cau Giay District, Hanoi City,
                Vietnam
              </a>
            </div>
            <div className="flex gap-[4px] md:gap-[17px] mb-1">
              <div className="pt-2">
                <Image
                  src="/images/icons/iconFooterMail.png"
                  width={20}
                  height={14}
                  alt="Icon Footer Mail"
                  className="w-[7px] sm:w-[11px] ml:w-[16px] lg:w-[20px] cursor-pointer"
                />
              </div>

              <p className="underline cursor-pointer">support@ichime.dev</p>
            </div>
            <div className="flex gap-[4px] md:gap-[17px]">
              <div className="pt-1 pl-[2px] pb-2">
                <Image
                  src="/images/icons/iconFooterPolicy.png"
                  width={18}
                  height={14}
                  alt="Icon Footer Policy"
                  className="w-[5px] sm:w-[9px] ml:w-[14px] lg:w-[18px] cursor-pointer"
                />
              </div>
              <Link href={"/policy#policy"}>
                <p className="cursor-pointer hover:underline">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
