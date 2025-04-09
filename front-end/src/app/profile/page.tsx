"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ImageUploader from "@/components/ImageUploader";

const Page = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Final Step: ", { username, password });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-[510px] max-w-[672px] items-center justify-center gap-6">
        <div>
          {step === 1 ? (
            <>
              <h3 className="text-[var(--text-text-foreground, #09090B)] font-inter text-[24px] font-semibold leading-[32px] tracking-[-0.6px] mt-24">
                Complete your profile page
              </h3>
              <ImageUploader />
              <div className="text-sm gap-2 mt-6">
                Name
                <Input
                  className="w-[510px]"
                  type="text"
                  placeholder="Enter your name here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
              </div>
              <div className="text-sm gap-2 mt-6">
                Social media URL
                <Input
                  type="text"
                  placeholder="https://"
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="text-sm gap-2 mt-6">
                First Name
                <Input
                  type="text"
                  placeholder="First Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="text-sm gap-2 mt-6">
                Last Name
                <Input
                  type="password"
                  placeholder="First Name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
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
      <div>
        <div className="font-bold text-2xl">{step === 1}</div>
        <div className="text-[#71717A]">{step === 1}</div>
      </div>
    </div>
  );
};

export default Page;
