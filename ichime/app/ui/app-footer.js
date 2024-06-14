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
            className="hidden md:block"
            alt="Google company"
          />
          <Image
            src="/images/compLabels/google.png"
            width={49}
            height={16}
            className="block md:hidden"
            alt="Google company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/meta.png"
            width={186}
            height={105}
            className="hidden md:block"
            alt="meta company"
          />
          <Image
            src="/images/compLabels/meta.png"
            width={54}
            height={31}
            className="block md:hidden"
            alt="meta company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/singular.png"
            width={220}
            height={59}
            className="hidden md:block"
            alt="singular company"
          />
          <Image
            src="/images/compLabels/singular.png"
            width={66}
            height={18}
            className="block md:hidden"
            alt="singular company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/sensorTower.png"
            width={257}
            height={85}
            className="hidden md:block"
            alt="sensorTower company"
          />
          <Image
            src="/images/compLabels/sensorTower.png"
            width={78}
            height={25}
            className="block md:hidden"
            alt="sensorTower company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/dataAi.png"
            width={179}
            height={57}
            className="hidden md:block"
            alt="dataAi company"
          />
          <Image
            src="/images/compLabels/dataAi.png"
            width={53}
            height={17}
            className="block md:hidden"
            alt="dataAi company"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/compLabels/yandex.png"
            width={133}
            height={32}
            className="hidden md:block"
            alt="yandex company"
          />
          <Image
            src="/images/compLabels/yandex.png"
            width={39}
            height={10}
            className="block md:hidden"
            alt="yandex company"
          />
        </div>
      </div>
      <div className="flex justify-between bg-[url('/images/footerBg.png')] h-[84px] md:h-[280px] w-full aspect-[1440/280] pt-[15px] pl-[21px] md:pl-[76px] md:pt-[61px]">
        {/* Logo */}
        <div className="hidden md:flex">
          <div>
            <Image
              src="/images/logoIchimeFooter.png"
              width={651}
              height={122}
              alt="Ichime Footer Logo"
            />
          </div>
        </div>
        <div className="flex md:hidden">
          <div>
            <Image
              src="/images/logoIchimeFooter.png"
              width={187}
              height={35}
              alt="Ichime Footer Logo"
            />
          </div>
        </div>
        {/* Text */}
        <div className="px-6 md:px-20">
          <h2 className="font-bold text-footerTitleSm md:text-footerTitleLg">
            Launch your dream app today!
          </h2>
          <div className="text-footerTextSm md:text-footerTextLg font-bold max-w-[180px] md:max-w-[500px]">
            <div className="flex gap-[4px] md:gap-[17px]">
              <div className="pt-2 hidden md:block pl-[2px]">
                <Image
                  src="/images/icons/iconFooterAddr.png"
                  width={25}
                  height={18}
                  alt="Icon Footer Address"
                />
              </div>
              <div className="block md:hidden pl-[2px]">
                <Image
                  src="/images/icons/iconFooterAddr.png"
                  width={6}
                  height={7}
                  alt="Icon Footer Address"
                />
              </div>
              <a
                className="cursor-pointer hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Toa+nha+TTC+Duy+Tan"
                target="_blank"
              >
                19 Duy Tan, Dich Vong Hau Ward, Cau Giay District, Hanoi City,
                Vietnam
              </a>
            </div>
            <div className="flex gap-[4px] md:gap-[17px] mb-1">
              <div className="pt-2 hidden md:block">
                <Image
                  src="/images/icons/iconFooterMail.png"
                  width={20}
                  height={14}
                  alt="Icon Footer Mail"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/images/icons/iconFooterMail.png"
                  width={7}
                  height={6}
                  alt="Icon Footer Mail"
                />
              </div>

              <p className="underline cursor-pointer">support@ichime.dev</p>
            </div>
            <div className="flex gap-[4px] md:gap-[17px]">
              <div className="pt-1 hidden md:block pl-[2px] pb-2">
                <Image
                  src="/images/icons/iconFooterPolicy.png"
                  width={18}
                  height={14}
                  alt="Icon Footer Policy"
                />
              </div>
              <div className="block md:hidden pl-[1px]">
                <Image
                  src="/images/icons/iconFooterPolicy.png"
                  width={5}
                  height={7}
                  alt="Icon Footer Policy"
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
