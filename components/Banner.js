import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32  bottom-0 z-20 bg-gradient-to-t from-gray-100 to-transparent " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="w-full h-44 md:w-full  md:h-[460px] lg:w-full lg:h-[750px]">
          <Image layout="fill" src="/1.webp" alt="carousel first image" />
        </div>
        <div className="w-full h-[460px] lg:w-full lg:h-[750px]">
          <Image layout="fill" src="/2.jpg" alt="carousel second image" />
        </div>
        <div className="w-full h-[460px] lg:w-full lg:h-[750px]">
          <Image layout="fill" src="/3.jpg" alt="carousel third image" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
