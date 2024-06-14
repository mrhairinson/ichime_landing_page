"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { productItems, testimonials } from "../lib/pageData";
import Products from "../ui/product/products";
import Carousel from "../ui/components/carousel";

export default function Product() {
  const [isHide, setIsHide] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);
  const MD_SCREEN_WIDTH = 786;

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
    <main id="product">
      {/* Element to get window size */}
      <div className="absolute w-full"></div>
      {/* Content Header */}
      <div className={`flex flex-col items-center`}>
        <h1 className="text-[18px] md:text-pageTitleLg font-bold leading-[23px] md:leading-[95px] pt-[17px] md:pt-[23px]">
          Launch your dream app today!
        </h1>
        <h2 className="text-center text-[15px] md:text-pageSubTitleLg font-bold leading-[17.5px] md:leading-[50px] mt-[11px] md:mt-[23px]">
          Unlock the potential of your ideas with ICHIME Studio <br />
          Where creativity meets cutting-edge technology
        </h2>
        <div className="flex gap-[11px] md:gap-[35px] mt-[16px] md:mt-[41px]">
          <button className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/ggPlayBtn.png"}
              width={327}
              height={97}
              className="w-[98px] md:w-[327px]"
              alt={"Google Play Store Button"}
            />
          </button>
          <button className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/appStoreBtn.png"}
              width={327}
              height={97}
              className="w-[98px] md:w-[327px]"
              alt={"Google Play Store Button"}
            />
          </button>
        </div>
      </div>

      {/* Product Shown */}
      <section className="mt-[25px] md:mt-[68px] mb-[17px] md:mb-[48px]">
        <h1 className="text-[20px] md:text-pageTitleLg font-bold leading-[23px] md:leading-[64px] text-center">
          Featured Products
        </h1>
        {/* Product shown */}
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-x-[25px] md:gap-x-[40px] gap-y-[17px] md:gap-y-[55px] px-[40px] md:px-[100px] mt-[18px] md:mt-[60px]">
          {productItems.map((item) => (
            <Products
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              downloadNumbers={item.downloadNumbers}
              rate={item.rate}
              isHide={isHide}
              canHide={item?.canHide}
              canHideMd={item?.canHideMd}
              applyHide={screenWidth <= MD_SCREEN_WIDTH}
            />
          ))}
        </div>
      </section>

      {/* See more button */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsHide(!isHide)}
          className="w-[73px] md:w-[271px] h-[21px] md:h-[78px] text-[8px] md:text-[30px] text-center font-bold bg-[#FFBD00] rounded-[5px] md:rounded-[20px] drop-shadow-button transition-all hover:text-[9px] hover:md:text-[32px] pt-[2px]"
        >
          {isHide ? "See More >>>" : "See Less <<<"}
        </button>
      </div>

      {/* Tesimonial Session */}
      <section className="flex px-[40px] md:px-[100px] mt-[23px] md:mt-[69px] mb-[16px] md:mb-[45px] justify-between items-center">
        {/* Testi */}
        <div className="">
          <h2 className="font-bold text-[11px] md:text-[50px] leading-[13px] md:leading-[58px] px-[6px] md:px-3 text-nowrap">
            Our Testimonials
          </h2>
          <div className="pt-[5px] md:pt-[15px] flex flex-col gap-[8px] md:gap-[34px]">
            <div className="w-full border-b md:border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b md:border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b md:border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b md:border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b md:border-b-2 border-[#10134C]"></div>
          </div>
        </div>

        {/* Slider Testi */}
        <div className="flex flex-none justify-between bg-[url('/images/footerBg.png')] w-[230px] md:w-[769px] h-[74px] md:h-[262px] rounded-[10px] md:rounded-[30px] relative  text-white">
          <div className="absolute left-[10px] md:left-[46px] top-[-5px] md:top-[-20px]">
            <Image
              src={"/images/icons/testimonialQuote.png"}
              width={57}
              height={126}
              className="w-[12px] md:w-[57px]"
              alt={"Tesimonial quote"}
            />
          </div>
          <Carousel
            autoSlide
            autoSlideInterval={4000}
            useWhitePointer={screenWidth > MD_SCREEN_WIDTH}
            useNavigationIcon={screenWidth > MD_SCREEN_WIDTH}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[230px] md:min-w-[769px] min-h-[35px] md:min-h-[150px] px-[13px] md:px-[83px] pt-[10px] md:pt-[24px] text-[6px] md:text-[20px] font-bold"
              >
                <p className="max-h-[150px] w-full text-justify overflow-hidden text-ellipsis">
                  {item.content}
                </p>
                <div className="flex gap-[13px] items-center justify-end">
                  <Image src={item.src} width={63} height={63} className="w-[19px] md:w-[63px]" alt={item.alt} />
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
