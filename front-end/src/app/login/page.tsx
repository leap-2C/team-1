"use client";

import React, { useState } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthCarousel from "@/components/AuthCarousel";
import CarouselCoffeeImg from "@/assets/images/coffee.png";
import CarouselImage2 from "@/assets/images/coffee2.webp";
import CarouselImage3 from "@/assets/images/coffee3.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    if (!password) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }

    if (email && password) {
      // Perform login logic here
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="bg-amber-400 w-1/2 h-full flex justify-center items-center relative">
        <div className="flex text-[16px] font-bold gap-2 absolute top-8 left-20">
          <Coffee className="w-6 h-6" />
          Buy Me Coffee
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-[455px]">
          <AuthCarousel
            images={[
              { src: CarouselCoffeeImg.src, alt: "Image 1" },
              { src: CarouselImage2.src, alt: "Image 2 " },
              { src: CarouselImage3.src, alt: "Image 3" },
            ]}
          />
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
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up
        </Button>

        <div className="w-[407px] min-h-[256px] flex flex-col justify-evenly gap-4">
          <div>
            <div className="font-bold text-2xl">Welcome back</div>
            <div className="text-[#71717A]">Enter your email and password</div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-[359px]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border rounded ${
                  showEmailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {showEmailError && (
                <div className="text-red-500 text-sm mt-1">
                  Email is required
                </div>
              )}
            </div>

            <div className="w-[359px]">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-3 border rounded ${
                  showPasswordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {showPasswordError && (
                <div className="text-red-500 text-sm mt-1">
                  Password is required
                </div>
              )}
            </div>

            <Button
              className={`w-[359px] h-10 transition-colors ${
                email && password
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-[#d1d1d1] text-[#a3a3a3] cursor-not-allowed"
              }`}
              disabled={!email || !password}
              onClick={handleLogin}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
