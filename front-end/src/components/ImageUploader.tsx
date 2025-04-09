import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Camera } from "lucide-react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center w-40 h-40 rounded-full bg-white mt-6 border-2 border-gray-400 border-dotted">
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <Label htmlFor="picture" className="cursor-pointer">
            <Camera className="w-[28px] h-[28px] text-gray-500" />
            <Input
              id="picture"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </Label>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
