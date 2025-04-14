"use client";

import DashBoard from "@/components/DashBoard";
import SearchBar from "@/components/SearchBar";
import mockCreators from "@/data/mockCreators";
import CreatorCard from "@/components/CreatorCard";

export default function Explore() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/3">
        <DashBoard />
      </div>
      <div className="w-2/3 mr-20">
        <div className=" flex flex-col mt-[44px] gap-6">
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
        <div className="mt-6">
          <div className="flex flex-col gap-6 ">
            {mockCreators.map((creator) => (
              <CreatorCard
                key={creator.id}
                {...creator}
                socialMedia={creator.socialMedia || "N/A"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
