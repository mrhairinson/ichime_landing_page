"use client";
import Image from "next/image";
import Carousel from "./components/carousel";
import { slides } from "../lib/pageData";

export default function Banner() {
  return (
    <section id="about">
      <Carousel autoSlide autoSlideInterval={4000}>
        {slides.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            width={1440}
            height={703}
            style={{ maxHeight: '703px', aspectRatio: 1440/703}}
            alt={image.alt}
          />
          // <div className="h-[703px]">
          // </div>
        ))}
      </Carousel>
    </section>
  );
}
