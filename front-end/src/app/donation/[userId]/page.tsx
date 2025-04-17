"use client";

import React from "react";
import { useAuth } from "../../../utils/userContext";
import ImageUploaderDonation from "@/components/ImageUploaderDonation";
import UserAvatar from "../_components/UserAvatar";
import DonationSection from "@/components/DonationSection";

const Donation = () => {
  const context = useAuth();

  if (!context) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Authentication context is not available.</p>
      </div>
    );
  }

  const { userData, error } = context;

  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1440px] mx-auto h-[319px] rounded-xl z-0 flex items-center justify-center bg-gray-200">
        <ImageUploaderDonation/>
      </div>

      {userData ? (
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar {...userData} />
          <DonationSection {...userData} />
        </div>
      ) : (
        <div className="text-gray-500 mt-4">
          <p>No user data available.</p>
        </div>
      )}

      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default Donation;
