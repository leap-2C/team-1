"use client"

import React from "react";
import HomePageUserAvatar from "./_components/HomePageUserAvatar";
import { useAuth } from "@/utils/userContext";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="relative">
    <div className="max-w-[1440px] mx-auto flex flex-col items-start justify-end absolute top-[44px] right-[80px]">
        <HomePageUserAvatar />
    </div>
    </div>
  );
}
