import React, { useState, useRef, useEffect } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationButtons = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const prices = [1, 2, 5, 10];

  return (
    <div
      className="w-full gap-4 flex items-start justify-start"
      ref={containerRef}
    >
      {prices.map((price, index) => (
        <Button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-[72px] h-[40px] bg-gray-200 text-gray-800 hover:bg-gray-300 ${
            activeIndex === index
              ? "border-2 border-black"
              : "border border-transparent"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Coffee size={16} className="text-black-500" />
            <p className="font-medium text-[16px] leading-[24px] tracking-normal">
              ${price}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default DonationButtons;
