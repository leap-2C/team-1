"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import { X } from "lucide-react";
import { Example } from "./_components/CountryDropdown";
import { CardNumber } from "./_components/Card-Number";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [socialMediaURL, setSocialMedia] = useState("");
  const [password] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");
  const { push } = useRouter();
  const [error, setError] = useState("");

  const CreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      // First, login to get the token
      const address = await axiosInstance.post("/users/login", {
        password: password,
      });

      if (address.status === 200) {
        const { token } = address.data;
        localStorage.setItem("authorization", JSON.stringify(token));

        const profileData = {
          name,
          about,
          socialMediaURL,
        };

        const profileResponse = await axiosInstance.post(
          "/profiles",
          profileData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (profileResponse.status === 201) {
          push("/profile");
        }
      }
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  };

  const handleContinue = () => {
    if (step === 1) {
      let hasError = false;

      if (!name) {
        setNameError("Please enter your name");
        hasError = true;
      } else {
        setNameError("");
      }

      if (!about) {
        setAboutError("Please enter info about yourself");
        hasError = true;
      } else {
        setAboutError("");
      }

      if (!socialMediaURL) {
        setSocialMediaError("Please enter a social link");
        hasError = true;
      } else {
        setSocialMediaError("");
      }

      if (hasError) return;

      setStep(2);
    } else {
      console.log("Final Step: ", { username, password });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-[510px] max-w-[672px] items-center justify-center gap-6">
        <div>
          {step === 1 ? (
            <>
              <h3 className="text-[var(--text-text-foreground, #09090B)] font-inter text-[24px] font-semibold leading-[32px] tracking-[-0.6px] mt-24">
                Complete your profile page
              </h3>
              <ImageUploader />
              {imageError && (
                <p className="text-red-500 text-sm mt-2">{imageError}</p>
              )}
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
                  <p className="text-red-500 text-sm mt-2 flex items-center mb-0">
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
                  <p className=" mt-2 text-red-500 text-sm flex items-center">
                    <X className="mr-1 h-4 w-4" />
                    {socialMediaError}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-[var(--text-text-foreground, #09090B)] font-inter text-[24px] font-semibold leading-[32px] tracking-[-0.6px] mt-24">
                How would you like to be paid?
              </h3>
              <p className="opacity-50">Enter location and payment details</p>
              <div className="mt-2">
                <Example />
              </div>
              <div className="flex gap-4">
                <div className="text-sm gap-2 mt-6 w-[249px] h-[64px]">
                  First Name
                  <Input
                    type="First Name"
                    placeholder="Enter your name here"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="text-sm gap-2 mt-6 w-[249px] h-[64px]">
                  Last Name
                  <Input
                    type="Last name"
                    placeholder="Enter your name here"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <CardNumber />
            </>
          )}
        </div>
      </div>
      <Button
        className="flex w-[246px] h-[40px] p-2 px-4 justify-center items-center mt-6"
        onClick={handleContinue}
      >
        Continue
      </Button>
      <div></div>
    </div>
  );
};

export default Page;
