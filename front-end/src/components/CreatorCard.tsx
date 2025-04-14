import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function CreatorCard({
  name,
  bio,
  description,
  image,
  socialMedia,
}: {
  name: string;
  bio: string;
  description: string;
  image: string;
  socialMedia: string;
}) {
  return (
    <div className="border rounded-2xl bg-white h-56">
      <div className="p-6">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex gap-1.5">
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h3 className="font-semibold text-[20px] flex items-center">
              {name}
            </h3>
          </div>
          <Button variant={"secondary"}>
            View profile <ExternalLink />
          </Button>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="text-[16px] font-semibold mb-[14px]">{bio}</div>
            <div className="text-sm text-gray-600">{description}</div>
          </div>
          <div className="w-1/2">
            <div className="text-[16px] font-semibold mb-[14px]">
              Social media URL
            </div>
            <div className="text-[14px] font-normal">{socialMedia}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
