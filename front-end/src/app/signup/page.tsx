"use client";

import React, { useState } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Step1UsernameForm from "@/components/Step1UsernameForm";
import Step2EmailPasswordForm from "@/components/Step2EmailPasswordForm";
import AuthCarousel from "@/components/AuthCarousel";
import CarouselCoffeeImg from "@/assets/images/coffee.png";
import CarouselImage2 from "@/assets/images/coffee2.webp";
import CarouselImage3 from "@/assets/images/coffee3.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

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
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </Button>

        <div className="w-[388px] mb-4 mr-5.5">
          <div className="flex justify-between text-sm font-medium mb-1">
            <span className={step === 1 ? "text-[#ffb900]" : ""}>Step 1</span>
            <span className={step === 2 ? "text-[#ffb900]" : ""}>Step 2</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffb900] transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="w-[407px] min-h-[256px] flex flex-col justify-evenly gap-4">
          <div>
            <div className="font-bold text-2xl">
              {step === 1
                ? "Choose a username for your page"
                : `Welcome, ${username}`}
            </div>
            <div className="text-[#71717A]">
              {step === 1
                ? "Create Your Account"
                : "Connect email and set a password"}
            </div>
          </div>

          {step === 1 ? (
            <Step1UsernameForm
              username={username}
              setUsername={setUsername}
              onNext={() => setStep(2)}
            />
          ) : (
            <>
              <Step2EmailPasswordForm
                username={username}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showEmailError={showEmailError}
                setShowEmailError={setShowEmailError}
                showPasswordError={showPasswordError}
                setShowPasswordError={setShowPasswordError}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
