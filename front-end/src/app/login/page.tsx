"use client";

import React, { useState } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Step1UsernameForm from "@/components/Step1UsernameForm";
import Step2EmailPasswordForm from "@/components/Step2EmailPasswordForm";
import AuthCarousel from "@/components/AuthCarousel";

const Login = () => {
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
          <AuthCarousel />
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

export default Login;
