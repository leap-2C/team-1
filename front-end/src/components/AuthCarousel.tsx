"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "icon",
    alt: "Buy Me a Coffee Icon",
  },
  {
    src: "/assets/images/coffee.png",
    alt: "Buy Me a Coffee UI Example 1",
  },
  {
    src: "/assets/images/coffee2.webp",
    alt: "Buy Me a Coffee UI Example 2",
  },
];

const CoffeeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        {images[currentIndex].src === "icon" ? (
          <div className="w-full h-auto">
            {" "}
            {/* Placeholder for icon */}
            <span>☕</span>{" "}
            {/* You can customize this with your CoffeeIcon component */}
          </div>
        ) : (
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="responsive"
            width={700}
            height={400}
            className="object-cover"
          />
        )}
      </div>

      {/* Carousel Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight />
      </button>

      {/* Carousel Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCarousel;
