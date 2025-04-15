"use client";

import React, { useEffect, useState } from "react";
import ImageUploaderDonation from "../_components/ImageUploaderDonation";
import UserAvatar from "../_components/UserAvatar";
import DonationSection from "../_components/DonationSection";
import { useParams, useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useAuth } from "../../../utils/userContext";
import axios from "axios";
import { ProfileDetail, User } from "@/app/types";
import { UserContextProps } from "../../../utils/userContext";
import { Context } from "react";
import { useCurrent } from "@/utils/currentUserContext";

const Donation = () => {

  const context = useAuth()
  const currentContext= useCurrent()
  if(!context && !currentContext){
    return;
  }

  const {userData, error} = context
  const {token} = currentContext
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1440px] mx-auto h-[319px] rounded-xl z-0 flex items-center justify-center bg-gray-200">
        <ImageUploaderDonation />
      </div>

      {userData && (
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar {...userData} />
          <DonationSection {...userData}/>
        </div>
      )}

      {error ? <div className="text-red-500 mt-4">{error}</div> : null}
    </div>
  );
};

export default Donation;
