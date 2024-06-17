"use client";
import Image from "next/image";
import Rate from "./star-rate";
import Link from "next/link";

export default function Products({
  src,
  alt,
  title,
  downloadNumbers,
  rate,
  linkGooglePlay = "",
  linkAppStore = "",
  canHide = false,
  applyHide = false,
  canHideMd = false,
}) {
  return (
    <div
      className={`flex flex-col justify-between max-w-[280px] ${
        (canHide || (applyHide && canHideMd)) && "hidden"
      }`}
    >
      <div>
        <Image src={src} alt={alt} width={280} height={280} />

        <h2 className="font-bold leading-[13px] sm:leading-[20px] md:leading-[28px] ml:leading-[35px] text-[11px] sm:text-[17px] md:text-[24px] ml:text-[30px] text-pretty mt-[10px] sm:mt-[14px] md:mt-[19px] ml:mt-[28px]">
          {title}
        </h2>
      </div>

      <div className="flex text-[10px] sm:text-[15px] md:text-[18px] ml:text-[20px] font-normal leading-[9px] sm:leading-[12px] md:leading-[16px] ml:leading-[23px] gap-[5px] sm:gap-2 ml:gap-3 mt-[5px] sm:mt-2 ml:mt-3">
        {/* Download time and get on gg */}
        <div className="flex-1">
          <div className="border-r-[0.4px] md:border-r border-black py-1 min-h-[26px] sm:min-h-[32px] md:min-h-[42px] ml:min-h-[54px]">
            {downloadNumbers} <br /> Download
          </div>
          {linkGooglePlay != "" && (
            <Link
              href={linkGooglePlay}
              target="_blank"
              className="transition drop-shadow-none hover:drop-shadow-button mt-[6px] md:mt-3"
            >
              <Image
                src={"/images/button/ggPlayBtn.png"}
                width={120}
                height={36}
                alt={"Google Play Store Button"}
                className="pt-[6px] md:pt-3"
              />
            </Link>
          )}
        </div>
        {/* rate and get from app store */}
        <div className="flex-1">
          <div className="py-1 min-h-[26px] sm:min-h-[32px] md:min-h-[42px] ml:min-h-[54px]">
            <p className="pb-[2px]">{rate}</p>
            <Rate rate={rate} />
          </div>
          {linkAppStore != "" && (
            <Link
              href={linkAppStore}
              target="_blank"
              className="transition drop-shadow-none hover:drop-shadow-button"
            >
              <Image
                src={"/images/button/appStoreBtn.png"}
                width={120}
                height={36}
                alt={"Google Play Store Button"}
                className="pt-[6px] md:pt-3"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
