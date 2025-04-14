import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Supporters() {
  return (
    <div className="w-full gap-2 rounded-lg border border-solid p-6">
      <div className="gap-2">
        <div className="w-full flex items-center justify-between gap-2">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center w-full">
            <div className=" flex items-center justify-between font-medium text-sm leading-5 tracking-normal">
              <p>user_name</p>
              <p>+ amount$</p>
            </div>
            <div className="font-light text-sm leading-5 tracking-normal flex items-center justify-between">
              <p>user_social_media_url</p>
              <p>** hours ago</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-2 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full gap-2 flex flex-col rounded-lg border border-solid p-6">
    <p className="font-semibold text-[16px] leading-[24px] tracking-normal">
      Recent Supporters
    </p>
  
    {recentSupporters.length === 0 ? (
      <div className="w-full gap-2 flex flex-col justify-center items-center rounded-lg border border-solid p-6">
        <p className="font-light text-[14px] leading-[24px] tracking-normal">
          <Heart style={{fill: 'red'}} size={24} className="text-red-500" />
        </p>
        <p className="font-semibold text-[16px] leading-[24px] tracking-normal text-center">
          Be the first one to support Jake
        </p>
      </div>
    ) : (
      recentSupporters.map((supporter, index) => (
        <div key={index} className="w-full gap-2 flex flex-col justify-center items-start rounded-lg border border-solid p-6">
          <p className="font-semibold text-[14px] leading-[24px] tracking-normal">
            {supporter.name}
          </p>
          <p className="text-[14px] text-gray-500">
            Donation: ${supporter.donation}
          </p>
          <p className="text-[14px] text-gray-500">
            Comment: {supporter.comment}
          </p>
        </div>
      ))
    )}
  </div> */
}
