"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCurrent } from "@/utils/currentUserContext";
import Cloudinary from "@/components/cloudinaryWidget";

const Page = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [SocialMediaURL, setSocialMedia] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");
  const [avatarImage, setAvatarImage] = useState("");
  const { push } = useRouter();
  const { currentUserData, token } = useCurrent();
  // const current = useCurrent();
  // if(!current){
  //   return <div>...Loading</div>
  // }
  // const { currentUserData, token } = current

  const handleContinue = () => {
    let hasError = false;

    if (!name) {
      setNameError("Please enter your name");
      hasError = true;
    } else setNameError("");

    if (!about) {
      setAboutError("Please enter info about yourself");
      hasError = true;
    } else setAboutError("");

    if (!SocialMediaURL) {
      setSocialMediaError("Please enter a social link");
      hasError = true;
    } else setSocialMediaError("");

    if (hasError) return;
  };

  const CreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUserData && !token) {
      setError("User is not authenticated. Please log in.");
      return;
    }

    try {
      setLoading(true);

      const profileData = {
        avatarImage,
        name,
        about,
        SocialMediaURL,
        userId: currentUserData.id,
      };

      const res = await axiosInstance.post("users/profile", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        const { profileExists } = res.data;
        if (!profileExists) {
          push("/profile");
        } else {
          push("/");
        }
      }
    } catch (err) {
      console.error("Error while creating profile:", err);
      setLoading(false);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else {
        setError("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-[510px] max-w-[672px] items-center justify-center gap-6">
        <div>
          <h3 className="text-[24px] font-semibold mt-24">
            Complete your profile page
          </h3>

          <div className="flex justify-center items-center w-40 h-40 rounded-full bg-white mt-6 border-2 border-gray-400 border-dotted relative">
            <Cloudinary avatarImage={avatarImage} setAvatarImage={setAvatarImage}/>
          </div>  
          <div className="text-sm gap-2 mt-6">
            Name
            <Input
              className="w-[510px]"
              type="text"
              placeholder="Enter your name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <X className="mr-1 h-4 w-4" />
                {nameError}
              </p>
            )}
          </div>

          <div className="text-sm gap-2 mt-6">
            About
            <Input
              className="h-[131px]"
              type="text"
              placeholder="Write about yourself here"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            {aboutError && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <X className="mr-1 h-4 w-4" />
                {aboutError}
              </p>
            )}
          </div>

          <div className="text-sm gap-2 mt-6">
            Social media URL
            <Input
              type="text"
              placeholder="https://"
              value={SocialMediaURL}
              onChange={(e) => setSocialMedia(e.target.value)}
            />
            {socialMediaError && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <X className="mr-1 h-4 w-4" />
                {socialMediaError}
              </p>
            )}
          </div>
        </div>
      </div>

      <form onSubmit={CreateProfile}>
        <Button
          className="w-[246px] h-[40px] mt-6"
          onClick={handleContinue}
          type="submit"
          disabled={loading}
        ></Button>
        {loading && <div>...loading</div>}
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Page;
