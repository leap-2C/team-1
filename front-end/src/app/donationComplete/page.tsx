import { CheckCircle2 } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[133px] gap-6">
        <div className="w-[648px] flex flex-col gap-5">
          <div className="bg-[#18BA51] w-16 h-16 flex items-center justify-center rounded-full mx-auto mt-10">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center justify-center text-[16px] font-semibold">
            Donation Complete !
          </div>
        </div>
        <div className="w-[486px] flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="bg-black rounded-full">IMG</div>
            <div>Space ranger:</div>
          </div>
          <div>
            Thank you for supporting me! It means a lot to have your support.
            It’s a step toward creating a more inclusive and accepting community
            of artists.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
