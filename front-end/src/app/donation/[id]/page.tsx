"use client";

import React, { useEffect, useState } from "react";
import UserAvatar from "../_components/UserAvatar";
import DonationSection from "@/components/DonationSection";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import axios from "axios";
import { useParams } from "next/navigation";
import { User } from "@/app/types";
import Image from "next/image";

const Donation = () => {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const id = params.id;

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/profile/view/${id}`);
      setUserProfile(response.data.userInfo);
      console.log(response.data.userInfo);
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getUserData();
    }
  }, [id]);

  if (loading) {
    return <div>..loading</div>;
  }
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-full h-[319px] flex justify-center items-center">
          {!userProfile?.profile?.backgroundImage && typeof userProfile?.profile?.backgroundImage ==="string" ?<Image
                          src={userProfile.profile?.backgroundImage}
                          alt="Uploaded"
                          className="w-full h-full rounded-xl object-cover"
                          width={1440}
                          height={319}/>:<div className="w-full h-full bg-cyan-300"></div>}
        </div>
      </div>
      {userProfile ? (
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar {...userProfile} />
          <DonationSection />
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
