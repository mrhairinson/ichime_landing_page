"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { productItems, testimonials } from "../lib/pageData";
import Products from "../ui/product/products";
import Carousel from "../ui/components/carousel";

export default function Product() {
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
    <main id="product">
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
              linkGooglePlay={item.linkGooglePlay}
              linkAppStore={item.linkAppStore}
              downloadNumbers={item.downloadNumbers}
              rate={item.rate}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
