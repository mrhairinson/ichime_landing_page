"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  useWhitePointer = false,
  useNavigationIcon = false,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {useNavigationIcon && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full pb-16">
            <Image
              src={"/images/icons/arrow_back_ios.png"}
              alt="prev"
              height={35}
              width={35}
            />
          </button>
          <button onClick={next} className="p-1 rounded-full pb-16">
            <Image
              src={"/images/icons/arrow_forward_ios.png"}
              alt="next"
              height={35}
              width={35}
            />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
              transition-all w-3 h-3 ${
                useWhitePointer ? "bg-white" : "bg-main-color"
              } rounded-full cursor-pointer
              ${curr === i ? "p-0" : "bg-opacity-20"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
