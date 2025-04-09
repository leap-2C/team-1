import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

interface GenericCarouselProps {
  images: { src: string; alt: string }[];
}

export default function GenericCarousel({ images }: GenericCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full max-w-[vw]">
      <Carousel className="w-full relative overflow-hidden">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative w-full flex items-center justify-center"
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <div className="hidden md:block">
          <CarouselPrevious
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
            className="absolute left-5 top-[50%] transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
          />
          <CarouselNext
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
            }
            className="absolute right-5 top-[50%] transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
          />
        </div> */}
      </Carousel>
    </div>
  );
}
