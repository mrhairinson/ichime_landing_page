"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { productItems, testimonials } from "../lib/pageData";
import Products from "../ui/product/products";
import Carousel from "../ui/components/carousel";

export default function Product() {
  const [isHide, setIsHide] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const MD_SCREEN_WIDTH = 786;

  /**
   * Function listen to the screen size change
   * @returns
   */
  const handleResize = () => setScreenWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main id="product">
      {/* Content Header */}
      <div className={`flex flex-col items-center`}>
        <h1 className="text-pageTitleLg font-bold leading-[120px]">
          Launch your dream app today!
        </h1>
        <h2 className="text-center text-pageSubTitleLg font-bold leading-[50px]">
          Unlock the potential of your ideas with ICHIME Studio <br />
          Where creativity meets cutting-edge technology
        </h2>
        <div className="flex gap-[35px] pt-[41px]">
          <button className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/ggPlayBtn.png"}
              width={327}
              height={97}
              alt={"Google Play Store Button"}
            />
          </button>
          <button className="transition drop-shadow-none hover:drop-shadow-button">
            <Image
              src={"/images/button/appStoreBtn.png"}
              width={327}
              height={97}
              alt={"Google Play Store Button"}
            />
          </button>
        </div>
      </div>

      {/* Product Shown */}
      <section className="mt-[68px] mb-[48px]">
        <h1 className="text-pageTitleLg font-bold leading-[64px] text-center">
          Featured Products
        </h1>
        {/* Product shown */}
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-x-[40px] gap-y-[55px] px-[100px] mt-[60px]">
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
          className="w-[271px] h-[78px] text-[30px] text-center font-bold leading-9 bg-[#FFBD00] rounded-[20px] drop-shadow-button transition-all hover:text-[32px]"
        >
          {isHide ? "See More >>>" : "See Less <<<"}
        </button>
      </div>

      {/* Tesimonial Session */}
      <section className="flex px-[100px] mt-[69px] justify-between items-center mb-[45px]">
        {/* Testi */}
        <div className="">
          <h2 className="font-bold text-[50px] leading-[58px] px-3 text-nowrap">
            Our Testimonials
          </h2>
          <div className="pt-[15px] flex flex-col gap-[34px]">
            <div className="w-full border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b-2 border-[#10134C]"></div>
            <div className="w-full border-b-2 border-[#10134C]"></div>
          </div>
        </div>

        {/* Slider Testi */}
        <div className="flex flex-none justify-between bg-[url('/images/footerBg.png')] w-[769px] h-[262px] rounded-[30px] relative  text-white">
          <div className="absolute left-[46px] top-[-20px]">
            <Image
              src={"/images/icons/testimonialQuote.png"}
              width={57}
              height={126}
              alt={"Tesimonial quote"}
            />
          </div>
          <Carousel autoSlide autoSlideInterval={4000} useWhitePointer={true} useNavigationIcon={true}>
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-[769px] min-h-[150px] px-[83px] pt-[24px] text-[20px] font-bold">
                <p className="max-h-[150px] w-full text-justify overflow-hidden text-ellipsis">
                  {item.content}
                </p>
                <div className="flex gap-[13px] items-center justify-end">
                  <Image
                    src={item.src}
                    width={63}
                    height={63}
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
