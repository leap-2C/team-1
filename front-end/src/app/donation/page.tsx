"use client";

import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Camera } from 'lucide-react';
import ImageUploader from "@/components/ImageUploader";

const Donation = () => {
  return (
    <div className="">
      <div className="w-full h-[319px] flex items-center justify-center bg-gray-200">
     <ImageUploader/>
      </div>
    </div>
  ); 
};
export default Donation;


{/* <div className="font-medium text-[14px] bg-black text-white p-2 rounded-md">
<Label htmlFor="picture" className="cursor-pointer">
  <Camera className="" strokeWidth={1}/>
  Add a cover image
  <Input id="picture" type="file" className="hidden"/>
</Label>
</div> */}