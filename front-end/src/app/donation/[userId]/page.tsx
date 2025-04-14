"use client";

import React, { useEffect, useState } from "react";
import ImageUploaderDonation from "../_components/ImageUploaderDonation";
import UserAvatar from "../_components/UserAvatar";
import DonationSection from "../_components/DonationSection";
import { useParams, useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useAuth } from "../../../../utils/userContext";
import axios from "axios";

const Donation = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<{}>({});

  const params = useParams();
  const id = params.userId;
  const token = useAuth(); // ✅ Move useAuth to top

  const getMovieData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`profile/view/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserProfile(response.data.userInfo);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.status_message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1440px] mx-auto h-[319px] rounded-xl z-0 flex items-center justify-center bg-gray-200">
        <ImageUploaderDonation />
      </div>

      {loading ? (
        <div className="py-10 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="relative rounded-xl top-[-70px] z-20 w-full max-w-[1280px] mx-auto flex items-start justify-start gap-5">
          <UserAvatar userProfile={userProfile}/>
          {/* <DonationSection user={userProfile} /> */}
        </div>
      )}

      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default Donation;
