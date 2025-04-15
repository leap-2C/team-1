import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, ProfileDetail } from "@/app/types";

type UserAvatarProps = {
  username: string;
  email: string;
  profile: ProfileDetail;
};

const UserAvatar = (props: UserAvatarProps) => {
  const { username, email, profile } = props;

  const { about, SocialMediaURL } = profile;

  return (
    <div className="w-full gap-5 flex flex-col items-start justify-start">
      <div className="w-full rounded-lg border border-solid gap-2 p-6 bg-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Avatar className="w-[48px] h-[48px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex justify-center font-bold text-[20px] leading-[24px] tracking-normal">
              {username}
            </div>
          </div>
          <Button
            variant="secondary"
            className="w-[96px] h-[40px] bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Edit
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="gap-5 flex flex-col items-start justify-start">
          <p className="font-medium text-[16px] leading-[24px] tracking-normal">
            About: {username}
          </p>
          <p className="font-light text-[14px] leading-[24px] tracking-normal">
            {about}
          </p>
        </div>
      </div>
      <div className="w-full gap-2 rounded-lg border border-solid p-6">
        <p className="font-semibold text-[16px] leading-[24px] tracking-normal">
          Social media URL
        </p>
        <p className="font-light text-[14px] leading-[24px] tracking-normal">
          {SocialMediaURL}
        </p>
      </div>
      <div className="w-full gap-2 flex flex-col rounded-lg border border-solid p-6">
        <p className="font-semibold text-[16px] leading-[24px] tracking-normal">
          Recent Supporters
        </p>
        <div className="w-full gap-2 flex flex-col justify-center items-center rounded-lg border border-solid p-6">
          <p className="font-light text-[14px] leading-[24px] tracking-normal">
            <Heart style={{ fill: "red" }} size={24} className="text-red-500" />
          </p>
          <p className="font-semibold text-[16px] leading-[24px] tracking-normal text-center">
            Be the first one to support Jake
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserAvatar;
