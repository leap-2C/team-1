import React from "react";
import { Coffee } from "lucide-react";
import CoffeeIcon from "@/components/icons/CoffeeIcon";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-amber-400 w-1/2 h-full flex justify-center items-center relative">
        <div className="flex text-[16px] font-bold gap-2 absolute top-8 left-20 ">
          <Coffee className="w-6 h-6 text-[16px] font-bold" />
          Buy Me Coffee
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-[455px]">
          <CoffeeIcon />
          <div className="font-bold text-2xl">Fund your creative work</div>
          <div className="text-center text-[16px]">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
        <div>
          <div className="font-bold text-2xl">Create Your Account</div>
          <div className="text-[#71717A]">Choose a username for your page</div>
        </div>
        <div>Username</div>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-[400px]"
          placeholder="Username"
        ></input>
      </div>
    </div>
  );
};

export default Login;
