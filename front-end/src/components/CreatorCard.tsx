import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function CreatorCard({
  name,
  about,
  avatarImage,
  socialMediaURL,
  userId,
}: {
  id: number
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  userId: number;
}) {
  const { push } = useRouter();
  return (
    <div className="border rounded-2xl bg-white h-56">
      <div className="p-6">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex gap-1.5">
            <Image
              src={avatarImage && avatarImage.trim() !== "" ? avatarImage : "/default-avatar.png"}
              alt={name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h3 className="font-semibold text-[20px] flex items-center">
              {name}
            </h3>
          </div>
          <Button
            variant={"secondary"}
            onClick={() => {
              push(`/donation/${userId}`);
            }}
          >
            View profile <ExternalLink />
          </Button>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="text-[16px] font-semibold mb-[14px]">
              About {name}
            </div>
            <div className="text-sm text-gray-600">{about}</div>
          </div>
          <div className="w-1/2">
            <div className="text-[16px] font-semibold mb-[14px]">
              Social media URL
            </div>
            <div className="text-[14px] font-normal">{socialMediaURL}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
