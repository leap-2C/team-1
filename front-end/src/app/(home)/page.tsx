"use client";

import HomePageUserAvatar from "./_components/HomePageUserAvatar";

export default function Home() {
  return (
    <div className="relative max-w-[1440px] mx-auto bg-black">
      <div className=" max-w-7xl mx-auto flex flex-col items-start justify-end absolute top-[44px] right-[80px]">
        <HomePageUserAvatar />
      </div>
    </div>
  );
}
