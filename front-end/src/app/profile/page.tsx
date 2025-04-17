"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Example } from "./_components/CountryDropdown";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/utils/userContext";
import { CldUploadWidget } from "next-cloudinary";

const Page = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [socialMediaURL, setSocialMedia] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [nameError, setNameError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");

  const { push } = useRouter();
  const { userData, setUserData } = useAuth();

  const handleContinue = () => {
    if (step === 1) {
      let hasError = false;

      if (!name) {
        setNameError("Please enter your name");
        hasError = true;
      } else setNameError("");

      if (!about) {
        setAboutError("Please enter info about yourself");
        hasError = true;
      } else setAboutError("");

      if (!socialMediaURL) {
        setSocialMediaError("Please enter a social link");
        hasError = true;
      } else setSocialMediaError("");

      if (hasError) return;

      setStep(2);
    }
  };

  const CreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData || !userData.token || !userData.id) {
      setError("User is not authenticated. Please log in.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const profileData = {
        name,
        about,
        socialMediaURL,
        userId: userData.id,
      };

      const res = await axiosInstance.post("users/profile", profileData, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      if (res.status === 201) {
        const updatedUser = res.data;

        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUserData(updatedUser);

        push("/profile");
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
          {step === 1 ? (
            <>
              <h3 className="text-[24px] font-semibold mt-24">
                Complete your profile page
              </h3>

              <div className="flex justify-center items-center w-40 h-40 rounded-full bg-white mt-6 border-2 border-gray-400 border-dotted">
                <CldUploadWidget uploadPreset="ml_default">
                  {({ open }) => (
                    <button onClick={() => open()}>Add Photo</button>
                  )}
                </CldUploadWidget>
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
                  value={socialMediaURL}
                  onChange={(e) => setSocialMedia(e.target.value)}
                />
                {socialMediaError && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <X className="mr-1 h-4 w-4" />
                    {socialMediaError}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-[24px] font-semibold mt-24">
                How would you like to be paid?
              </h3>
              <p className="opacity-50">Enter location and payment details</p>
              <div className="mt-2">
                <Example />
              </div>
              <div className="flex gap-4">
                <div className="text-sm gap-2 mt-6 w-[249px]">
                  First Name
                  <Input
                    placeholder="Enter your name here"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="text-sm gap-2 mt-6 w-[249px]">
                  Last Name
                  <Input
                    placeholder="Enter your name here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <form onSubmit={CreateProfile}>
        <Button
          className="w-[246px] h-[40px] mt-6"
          onClick={handleContinue}
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Continue"}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Page;
