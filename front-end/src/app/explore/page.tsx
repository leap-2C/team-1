"use client";

import DashBoard from "@/components/DashBoard";
import SearchBar from "@/components/SearchBar";
import CreatorCard from "@/components/CreatorCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import axios from "axios";
import { useAuth } from "../../../utils/userContext";
type ProfileType = {
  id: number;
  socialMediaURL: string;
};
export default function Explore() {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = useAuth();

  const getProfiles = async () => {
    if (token !== null) {
      try {
        setLoading(true);
        const profileAll = await axiosInstance.get("/profile/explore", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfiles(profileAll.data.profiles);
      } catch (err) {
        setLoading(false);
        console.log("error", err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/3">
        <DashBoard />
      </div>
      <div className="w-2/3 mr-20">
        <div className="flex flex-col mt-[44px] gap-6">
          <h4 className="text-[20px] leading-[28px] font-semibold">
            Explore Creators
          </h4>
          <div className="w-[243px] h-9">
            <SearchBar
              placeholder="Search name"
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6">
          <div className="flex flex-col gap-6">
            {profiles.map((profile) => (
              <CreatorCard
                key={profile.id}
                {...profile}
                socialMediaURL={profile.socialMediaURL || "N/A"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
