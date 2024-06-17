"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { productItems, testimonials } from "./lib/pageData";
import Products from "./ui/product/products";
import Carousel from "./ui/components/carousel";
import Link from "next/link";

export default function Home() {
  const [isHide, setIsHide] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);
  const ML_SCREEN_WIDTH = 1240;

  useEffect(() => {
    /**
     * Function listen to the screen size change
     * @returns
     */
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {/* Element to get window size */}
      <div className="absolute w-full"></div>
      {/* Content Header */}
      <div className={`flex flex-col items-center`}>
        <h1 className="text-[18px] sm:text-[32px] ml:text-[55px] font-bold leading-[23px] sm:leading-[40px] ml:leading-[95px] pt-[17px] sm:pt-[20px] ml:pt-[23px]">
          Launch your dream app today!
        </h1>
        <h2 className="text-center text-[15px] sm:text-[23px] ml:text-[40px] font-bold leading-[17.5px] sm:leading-[30px] ml:leading-[50px] mt-[11px] md:mt-[23px]">
          Unlock the potential of your ideas with ICHIME Studio <br />
          Where creativity meets cutting-edge technology
        </h2>
        <div className="flex gap-[11px] sm:gap-[22px] ml:gap-[35px] mt-[16px] sm:mt-[28px] ml:mt-[41px]">
          <Link href={"https://play.google.com/store/apps/dev?id=6498748123207845551&pli=1"} target="_blank" className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/ggPlayBtn.png"}
              width={327}
              height={97}
              className="w-[98px] sm:w-[180px] ml:w-[327px]"
              alt={"Google Play Store Button"}
            />
          </Link>
          <button className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/appStoreBtn.png"}
              width={327}
              height={97}
              className="w-[98px] sm:w-[180px] ml:w-[327px]"
              alt={"Google Play Store Button"}
            />
          </button>
        </div>
      </div>

      {/* Product Shown */}
      <section className="mt-[20px] sm:mt-[40px] ml:mt-[68px] mb-[17px] sm:mb-[30px] ml:mb-[48px]">
        <h1 className="text-[20px] sm:text-[32px] ml:text-[55px] font-bold leading-[23px] sm:leading-[40px] ml:leading-[64px] text-center">
          Featured Products
        </h1>
        {/* Product shown */}
        <div className="grid grid-cols-3 mlg:grid-cols-4 gap-x-[25px] ml:gap-x-[40px] gap-y-[17px] ml:gap-y-[55px] px-[36px] sm:px-[60px] ml:px-[100px] mt-[18px] sm:mt-[36px] ml:mt-[60px]">
          {productItems.map((item) => (
            <Products
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              downloadNumbers={item.downloadNumbers}
              linkGooglePlay={item.linkGooglePlay}
              linkAppStore={item.linkAppStore}
              rate={item.rate}
              canHide={item?.canHide}
              canHideMd={item?.canHideMd}
              applyHide={screenWidth <= ML_SCREEN_WIDTH}
            />
          ))}
        </div>
      </section>

      {/* See more button */}
      <div className="flex justify-center">
        <Link
          href={"/product#product"}
          // onClick={() => setIsHide(!isHide)}
          className=" flex items-center justify-center w-[73px] sm:w-[171px] md:w-[271px] h-[21px] sm:h-[50px] md:h-[78px] text-[8px] sm:text-[20px] md:text-[30px] font-bold bg-[#FFBD00] rounded-[5px] sm:rounded-[12px] md:rounded-[20px] drop-shadow-button transition-all hover:text-[9px] hover:sm:text-[22px] hover:md:text-[32px]"
        >
          See More &gt;&gt;&gt;
        </Link>
      </div>

      {/* Tesimonial Session */}
      <section className="px-[40px] md:px-[100px] mt-[23px] md:mt-[69px] mb-[16px] md:mb-[45px] flex flex-col items-center">
        {/* Testi */}
        <div className="">
          <h2 className="font-bold text-[18px] sm:text-[30px] mlg:text-[50px] leading-[30px] md:leading-[70px] px-[6px] md:px-3 text-nowrap">
            Our Testimonials
          </h2>
        </div>
        {/* Slider Testi */}
        <div className="flex flex-none justify-between bg-[url('/images/footerBg.png')] aspect-[1000/262] w-[300px] sm:w-[450px] md:w-[700px] mlg:w-[800px] rounded-[10px] md:rounded-[30px] relative text-white">
          <div className="absolute left-[10px] md:left-[46px] top-[-5px] sm:top-[-7px] md:top-[-15px] lg:top-[-20px]">
            <Image
              src={"/images/icons/testimonialQuote.png"}
              width={57}
              height={126}
              className="w-[12px] sm:w-[20px] md:w-[40px] lg:w-[57px]"
              alt={"Tesimonial quote"}
            />
          </div>
          <Carousel
            autoSlide
            autoSlideInterval={4000}
            useWhitePointer={screenWidth > ML_SCREEN_WIDTH}
            useNavigationIcon={screenWidth > ML_SCREEN_WIDTH}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[300px] sm:min-w-[450px] md:min-w-[700px] mlg:min-w-[800px] px-[13px] md:px-[83px] pt-[10px] md:pt-[24px] text-[12px] md:text-[20px] font-bold"
              >
                <p className="max-h-[150px] w-full text-justify overflow-hidden text-ellipsis">
                  {item.content}
                </p>
                <div className="flex gap-[13px] items-center justify-end">
                  <Image
                    src={item.src}
                    width={63}
                    height={63}
                    className="w-[19px] md:w-[63px]"
                    alt={item.alt}
                  />
                  <p className="text-nowrap">{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
}
