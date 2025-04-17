import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Donation, ProfileDetail } from "@/app/types";

export type DonorUser = {
  id: string;
  username: string;
  profile?: ProfileDetail;
};

export default function Supporters({ donations }: { donations: Donation[] }) {
  if (!donations) {
    return <div>...Loading</div>;
  }

  console.log(donations);
  return (
    <div className="flex flex-col w-full gap-4 rounded-lg border border-solid p-6">
      {donations.length !== 0 &&
        donations.map((donation) => (
          <div className="gap-2" key={donation.id}>
            <div className="w-full flex items-center justify-between gap-2">
              <Avatar className="w-[40px] h-[40px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center w-full">
                <div className="flex items-center justify-between font-medium text-sm leading-5 tracking-normal">
                  {donation.donorUsers ? (
                    <p>{donation.donorUsers.username}</p>
                  ) : (
                    <p className="italic text-gray-400">Anonymous</p>
                  )}
                  <p>+ ${donation.amount}</p>
                </div>
                <div className="font-light text-sm leading-5 tracking-normal flex items-center justify-between">
                  {donation.donorUsers?.profile ? (
                    <p>{donation.donorUsers.profile.SocialMediaURL}</p>
                  ) : (
                    <p className="italic text-gray-400"></p>
                  )}
                  <p>{new Date(donation.updatedAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
            {donation.specialMessage && (
              <div className="w-full flex items-center justify-start gap-2 mt-2">
                <p>{donation.specialMessage}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
