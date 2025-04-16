import { Input } from "@/components/ui/input";
import DonationButtons from "./DonationButtons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const DonationSection = () => {
  return (
    <div className="w-full rounded-lg border border-solid gap-2 p-6 bg-white flex flex-col items-start justify-start">
      <h1 className="text-2xl font-medium">Buy user_name a Coffee</h1>
      <DonationButtons />
      <div className="w-full gap-2 flex flex-col items-start justify-start mt-[32px]">
        <div className="w-full gap-2 flex flex-col items-start justify-start">
          <h1 className="font-inter font-medium text-[14px] leading-[14px] tracking-[0]">
            Enter BuyMeCoffee or social account URL:
          </h1>
          <Input
            type="text"
            placeholder="https://www.buymeacoffee.com/username"
            className="w-full h-[40px] p-3 resize-none rounded border text-[14px]"
          />
        </div>
        <div className="w-full gap-2 flex flex-col items-start justify-start mt-[20px]">
          <h1 className="font-inter font-medium text-[14px] leading-[14px] tracking-[0]">
            Special message:
          </h1>
          <Textarea
            placeholder="Please write your message here"
            className="w-full h-[131px] p-3 resize-none rounded border text-[14px]"
          />
        </div>
        <Button disabled className="w-full h-[40px] mt-[32px]">
          Support
        </Button>
      </div>
    </div>
  );
};
export default DonationSection;
