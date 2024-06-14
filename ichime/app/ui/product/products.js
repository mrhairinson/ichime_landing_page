"use client";
import Image from "next/image";
import Rate from "./star-rate";

export default function Products({ src, alt, title, downloadNumbers, rate, isHide, canHide, applyHide, canHideMd }) {
  return (
    <div className={`flex flex-col justify-between max-w-[280px] ${((isHide && canHide) || (isHide && applyHide && canHideMd)) && "hidden"}`}>
      <div>
        <Image src={src} alt={alt} width={280} height={280} />

        <h2 className="font-bold leading-[13px] md:leading-[35px] text-[11px] md:text-[30px] text-pretty mt-[10px] md:mt-[28px]">
          {title}
        </h2>
      </div>

      <div className="flex text-[8px] md:text-[20px] font-normal leading-[9px] md:leading-[23px] gap-[5px] md:gap-3 mt-[5px] md:mt-3">
        {/* Download time and get on gg */}
        <div className="flex-1">
          <div className="border-r-[0.4px] md:border-r border-black py-1">
            {downloadNumbers} <br /> Download
          </div>
          <button className="transition drop-shadow-none hover:drop-shadow-button mt-[6px] md:mt-3">
            <Image
              src={"/images/button/ggPlayBtn.png"}
              width={111}
              height={33}
              alt={"Google Play Store Button"}
            />
          </button>
        </div>
        {/* rate and get from app store */}
        <div className="flex-1">
          <div className="py-1 pl-2 min-h-[26px] md:min-h-[54px]">
            <p className="pb-[2px]">{rate}</p>
            <Rate rate={rate}/>
          </div>
          <button className="transition drop-shadow-none hover:drop-shadow-button mt-[6px] md:mt-3">
            <Image
              src={"/images/button/appStoreBtn.png"}
              width={111}
              height={33}
              alt={"Google Play Store Button"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
