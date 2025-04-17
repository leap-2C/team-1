"use client";

import React from "react";
import ImageUploaderDonation from "@/components/ImageUploaderDonation";
import UserAvatar from "../donation/_components/UserAvatar";
import DonationSection from "@/components/DonationSection";


const Donation = () => {

  const context = useAuth()
  if(!context){
    return;
  }

  const {userData, error} = context
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1440px] mx-auto h-[319px] rounded-xl z-0 flex items-center justify-center bg-gray-200">
        <ImageUploaderDonation />
      </div>

      {userData && (
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar{...userData} />
          <DonationSection {...userData}/>
        </div>
      )}

      {error ? <div className="text-red-500 mt-4">{error}</div> : null}
    </div>
  );
};

export default Donation;
