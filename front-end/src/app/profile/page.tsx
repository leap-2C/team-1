import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex w-full h-[56px] p-2 px-4 justify-center items-center">
        <div className="flex justify-between w-full max-w-[1440px]">
          <p className="text-black font-inter text-[16px] font-bold leading-[20px] tracking-[0.32px]">
            BUY ME COFFEE
          </p>
          <p className="text-sky-950">Log out</p>
        </div>
      </div>

      <div className="flex w-[510px] max-w-[672px]  items-center justify-center gap-[24px]">
        <div>
          <h3 className="text-[var(--text-text-foreground, #09090B)] font-inter text-[24px] font-semibold leading-[32px] tracking-[-0.6px]">
            Complete your profile page
          </h3>
          <div className="flex justify-center items-center w-40 h-40 rounded-full bg-gray-200">
            <Label htmlFor="picture" className="cursor-pointer">
              Upload Photo
              <Input id="picture" type="file" className="hidden" />
            </Label>
          </div>

          <div>
            Name
            <Input
              className="w-[510px] "
              type="Name"
              placeholder="Enter your name here"
            />
          </div>
          <div>
            About
            <Input
              className="h-[131px]"
              type="About"
              placeholder="Write about yourself here"
            />
          </div>
          <div>
            Social media URL
            <Input type="Social media" placeholder="https://" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
