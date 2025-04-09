import React from "react";
// import { Coffee } from "lucide-react";
import CoffeeIcon from "@/components/icons/CoffeeIcon";

const Donation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Donation Page</h1>
      <p className="text-lg mb-8">
        If you enjoy our work, consider buying us a coffee!
      </p>
      <a
        href="https://www.buymeacoffee.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-white px-6 py-3 rounded-full flex items-center"
      >
        <CoffeeIcon className="mr-2" />
        Buy us a coffee
      </a>
    </div>  
  );
};
export default Donation;