import React, { useRef, useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

type DonationButtonProps = {
  setAmount: (val: number | null) => void;
};
const DonationButtons = (props: DonationButtonProps) => {
  const { setAmount } = props;
  const [activateIndex, setActivateIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActivateIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const prices = [1, 2, 5, 10];

  const handleAmount = (activateIndex) => {
    if (activateIndex) {
      if (activateIndex === 0) {
        setAmount(1);
      } else if (activateIndex === 1) {
        setAmount(2);
      } else if (activateIndex === 2) {
        setAmount(5);
      } else {
        setAmount(10);
      }
    }
  };
  return (
    <div
      className="w-full gap-4 flex items-start justify-start"
      ref={containerRef}
    >
      {prices.map((price, index) => (
        <Button
          key={index}
          onClick={() => {
            setActivateIndex(index);
            handleAmount(activateIndex);
          }}
          className={`w-[72px] h-[40px] bg-gray-200 text-gray-800 hover:bg-gray-300 ${
            activateIndex === index
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
