import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Secondheader = () => {
  return (
    <div className="mt-4 mb-4 md:mt-6 md:mb-6">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="flex h-10 bg-gray-100 items-center justify-center">
          <p className="sm:font-small">Shop online 24/7</p>
        </div>
        <div className="flex h-10 bg-gray-100 items-center justify-center">
          <p className="sm:font-small">
            Click & collect available on all items
          </p>
        </div>
        <div className="flex h-10 bg-gray-100 items-center justify-center">
          <p className="sm:font-small">Free delivery on orders above EGP 350</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Secondheader;
