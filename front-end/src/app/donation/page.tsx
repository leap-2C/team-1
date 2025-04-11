"use client";

import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import ImageUploaderDonation from "@/app/donation/_components/ImageUploaderDonation";
import UserAvatar from "./_components/UserAvatar";
import DonationSection from "./_components/DonationSection";

const Donation = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-[1440px] mx-auto h-[319px] rounded-xl z-0 flex items-center justify-center bg-gray-200">
          <ImageUploaderDonation />
        </div>
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar />
          <DonationSection />
        </div>
    </div>
  );
};
export default Donation;

//Supporters data
{
  /* <div className="w-full gap-2 flex flex-col rounded-lg border border-solid p-6">
  <p className="font-semibold text-[16px] leading-[24px] tracking-normal">
    Recent Supporters
  </p>

  {recentSupporters.length === 0 ? (
    <div className="w-full gap-2 flex flex-col justify-center items-center rounded-lg border border-solid p-6">
      <p className="font-light text-[14px] leading-[24px] tracking-normal">
        <Heart style={{fill: 'red'}} size={24} className="text-red-500" />
      </p>
      <p className="font-semibold text-[16px] leading-[24px] tracking-normal text-center">
        Be the first one to support Jake
      </p>
    </div>
  ) : (
    recentSupporters.map((supporter, index) => (
      <div key={index} className="w-full gap-2 flex flex-col justify-center items-start rounded-lg border border-solid p-6">
        <p className="font-semibold text-[14px] leading-[24px] tracking-normal">
          {supporter.name}
        </p>
        <p className="text-[14px] text-gray-500">
          Donation: ${supporter.donation}
        </p>
        <p className="text-[14px] text-gray-500">
          Comment: {supporter.comment}
        </p>
      </div>
    ))
  )}
</div> */
}
