"use client";

import React, { useState } from "react";
import { Coffee } from "lucide-react";
import CoffeeIcon from "@/components/icons/CoffeeIcon";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="flex w-full h-screen">
      <div className="bg-amber-400 w-1/2 h-full flex justify-center items-center relative">
        <div className="flex text-[16px] font-bold gap-2 absolute top-8 left-20">
          <Coffee className="w-6 h-6 text-[16px] font-bold" />
          Buy Me Coffee
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-[455px]">
          <CoffeeIcon />
          <div className="font-bold text-2xl">Fund your creative work</div>
          <div className="text-center text-[16px] font-normal">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4 relative">
        <Button
          className="w-[73px] h-10 absolute top-8 right-20"
          variant={"secondary"}
        >
          Log in
        </Button>

        <div className="w-[407px] min-h-[256px] flex flex-col justify-evenly gap-4">
          <div>
            <div className="font-bold text-2xl">Create Your Account</div>
            <div className="text-[#71717A]">
              {step === 1
                ? "Choose a username for your page"
                : "Enter your email and password"}
            </div>
          </div>

          {step === 1 && (
            <>
              <div>
                <div className="font-medium mb-1">Username</div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-2 border-gray-300 rounded-md p-2 w-[359px]"
                  placeholder="Enter username here"
                />
              </div>

              <Button
                className={`w-[359px] h-10 transition-colors ${
                  username.trim()
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-[#d1d1d1] text-[#a3a3a3] cursor-not-allowed"
                }`}
                disabled={!username.trim()}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <div className="font-medium mb-1">Email</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setShowEmailError(true)}
                  className="border-2 border-gray-300 rounded-md p-2 w-[359px]"
                  placeholder="Enter email here"
                />
                {!isValidEmail(email) && showEmailError && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span className="text-lg">✖</span> Please enter a valid
                    email
                  </div>
                )}
              </div>
              <div>
                <div className="font-medium mb-1">Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 rounded-md p-2 w-[359px]"
                  placeholder="Enter password here"
                />
              </div>

              <Button
                className={`w-[359px] h-10 transition-colors ${
                  isValidEmail(email) && password.trim()
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-[#d1d1d1] text-[#a3a3a3] cursor-not-allowed"
                }`}
                disabled={!isValidEmail(email) || !password.trim()}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
