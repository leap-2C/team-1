"use client";

import DashBoard from "@/components/DashBoard";
import SettingsImageUploader from "@/components/SettingsImageUploader";
import { Button } from "@/components/ui/button";
import React from "react";
import { CountryDropdown } from "../profile/_components/Country-Dropdown";

const page = () => {
  return (
    <div className="flex w-full min-h-screen max-w-[1440px] mx-auto  ">
      <div className="w-1/3">
        <DashBoard />
      </div>

      <div className="w-2/3 mt-[44px]">
        <div className="w-[650px] border-[1px] border-gray-300 rounded-md p-6 bg-white mb-8">
          <div className="text-2xl font-semibold mb-8">My Account</div>
          <div>
            <div className="font-bold text-[16px] mb-6">Personal Info</div>
            <div>
              <div className="mb-6">
                <div>Add photo</div>
                <div>
                  <SettingsImageUploader />
                </div>
              </div>
              <div>
                <div>
                  <div>Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 w-full mb-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <div>About</div>
                  <textarea
                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                    placeholder="Tell us about yourself"
                    rows={5}
                  ></textarea>
                </div>
                <div>
                  <div>Social media URL</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 w-full mb-6"
                    placeholder="Enter your social media URL"
                  />
                </div>
              </div>
              <Button className="w-full h-10">Save changes</Button>
            </div>
          </div>
        </div>
        <div className="w-[650px] border-[1px] border-gray-300 rounded-md p-6 bg-white flex gap-6 flex-col mb-8">
          <div className="text-[16px] font-bold">Set a new password</div>
          <div>
            New password
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter new password"
            />
          </div>
          <div>
            Confirm password
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Confirm new password"
            />
          </div>
          <Button className="w-full h-10">Save changes</Button>
        </div>
        <div className="w-[650px] border-[1px] border-gray-300 rounded-md p-6 bg-white flex gap-6 flex-col mb-8">
          <div className="text-[16px] font-bold">Payment Details</div>
          <div>
            <div className="mb-2">Select country</div>
            <CountryDropdown />
          </div>
          <div className="flex gap-3">
            <div className="w-1/2">
              <div>First Name</div>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full mb-3"
                placeholder="Enter your first name"
              ></input>
            </div>
            <div className="w-1/2">
              <div>Last Name</div>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full mb-3"
                placeholder="Enter your last name"
              ></input>
            </div>
          </div>
          <Button className="w-full h-10">Save changes</Button>
        </div>
        <div className="w-[650px] border-[1px] border-gray-300 rounded-md p-6 bg-white flex gap-6 flex-col">
          <div>Success page</div>
          <div>
            <div className="mb-2">Confirmation message</div>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your confirmation message"
              rows={5}
            ></textarea>
          </div>
          <Button className="w-full h-10">Save changes</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
