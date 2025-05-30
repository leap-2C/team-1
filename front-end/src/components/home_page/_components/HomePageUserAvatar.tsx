import { Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Supporters from "./Supporters";
import { useCurrent } from "@/utils/currentUserContext";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useEffect, useState } from "react";
import axios from "axios";
import { Donation } from "@/app/types";

const HomePageUserAvatar = () => {
  const current = useCurrent();

  const [donations, setDonations] = useState([]);
  const [, setError] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);

  const currentUserData = current?.currentUserData;
  const token = current?.token;
  console.log(currentUserData)

  useEffect(() => {
    if (!currentUserData || !token) return;

    const getDonations = async () => {
      try {
        const response = await axiosInstance.get(
          `/donation/${currentUserData.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDonations(response.data.receivedUser);
      } catch (err) {
        console.error("error", err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || "Something went wrong");
        }
      }
    };

    getDonations();
  }, [currentUserData, token]);

  if (!currentUserData) {
    return <div className="">...Loading</div>;
  }

  const totalAmount = donations?.reduce((sum: number, donation: Donation) => {
    return sum = sum + Number(donation.amount);
  }, 0)
  console.log(currentUserData)
  return (
    <div className="w-[955px] gap-5 flex flex-col items-start justify-start">
      <div className="w-full rounded-lg border border-solid gap-2 p-6 bg-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Avatar className="w-[48px] h-[48px]">
              <AvatarImage src={currentUserData.profile?.avatarImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-[16px] leading-[24px] tracking-normal">
                {currentUserData?.username}
              </p>
              <p className="text-[14px] leading-[24px] tracking-normal">
                {/* {currentUserData.profile.SocialMediaURL} */}
              </p>
            </div>
          </div>
          <Button variant="default" className="w-[159px] h-[40px] font-normal">
            <Copy size={16} />
            Share page link
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="gap-5 flex flex-col items-start justify-start">
          <div className="flex items-center justify-center gap-4 leading-[24px] tracking-normal">
            <p className="font-bold text-[20px]">Earnings</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last 30 days">Last 30 days</SelectItem>
                <SelectItem value="last 90 days">Last 90 days</SelectItem>
                <SelectItem value="all time">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="font-bold text-[36px] leading-[24px] tracking-normal mt-6">
            {totalAmount}$
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-base leading-6 tracking-normal">
          Recent transactions
        </p>
        <Select
          onValueChange={(value) => {
            setSelectedAmount(value === "all" ? null : value);
          }}
        >
          <SelectTrigger className="w-[109px]">
            <SelectValue placeholder="Amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="1">$1</SelectItem>
            <SelectItem value="2">$2</SelectItem>
            <SelectItem value="5">$5</SelectItem>
            <SelectItem value="10">$10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Supporters
        donations={
          selectedAmount
            ? donations?.filter(
                (donation: Donation) => String(donation.amount) === selectedAmount
              )
            : donations
        }
      />
    </div>
  );
};
export default HomePageUserAvatar;
