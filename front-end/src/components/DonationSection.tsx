import { User } from "@/app/types";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import { useCurrent } from "@/utils/currentUserContext";
import axios from "axios";
import { useState } from "react";
import DonationButtons from "./DonationButtons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const DonationSection = (props: User) => {
  const { id } = props;
  const { currentUserData } = useCurrent();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [socialURLOrBuyMeCoffee, setSocialURLOrBuyMeCoffee] = useState("");
  const [specialMessage, setSpecialMessage] = useState("");
  const [amount, setAmount] = useState<number | null>(null);

  if (!currentUserData) return <div>...Loading</div>;

  const createDonation = async () => {
    try {
      setLoading(true);
      const donationData = {
        amount,
        specialMessage,
        socialURLOrBuyMeCoffee,
        donorId: currentUserData.id,
        recipientId: id,
      };

      const res = await axiosInstance.post("donation", donationData);
      if (res.status === 201) {
        console.log(res.data);
        // push("/success");
      }
    } catch (err) {
      console.error("Error while creating profile:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-lg border border-solid gap-2 p-6 bg-white flex flex-col items-start justify-start">
      <h1 className="text-2xl font-medium">Buy user_name a Coffee</h1>

      <DonationButtons setAmount={setAmount} />

      <div className="w-full gap-2 flex flex-col items-start justify-start mt-[32px]">
        <div className="w-full gap-2 flex flex-col items-start justify-start">
          <h1 className="font-inter font-medium text-[14px]">
            Enter BuyMeCoffee or social account URL:
          </h1>
          <Input
            type="text"
            placeholder="https://www.buymeacoffee.com/username"
            className="w-full h-[40px] p-3 resize-none rounded border text-[14px]"
            value={socialURLOrBuyMeCoffee}
            onChange={(e) => setSocialURLOrBuyMeCoffee(e.target.value)}
          />
        </div>

        <div className="w-full gap-2 flex flex-col items-start justify-start mt-[20px]">
          <h1 className="font-inter font-medium text-[14px]">
            Special message:
          </h1>
          <Input
            type="text"
            placeholder="https://www.buymeacoffee.com/username"
            className="w-full h-[131px] p-3 resize-none rounded border text-[14px]"
            value={specialMessage}
            onChange={(e) => setSpecialMessage(e.target.value)}
          />
        </div>

        <Button
          className="w-full h-[40px] mt-[32px]"
          onClick={createDonation}
          disabled={loading || amount === null}
        >
          {loading ? "Processing..." : "Support"}
        </Button>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default DonationSection;
