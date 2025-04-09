"use client";

import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import validator from "email-validator";

type Props = {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showEmailError: boolean;
  setShowEmailError: (val: boolean) => void;
  showPasswordError: boolean;
  setShowPasswordError: (val: boolean) => void;
};

const isValidEmail = (email: string) => validator.validate(email);

const isValidPassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export default function Step2EmailPasswordForm({
  email,
  setEmail,
  password,
  setPassword,
  showEmailError,
  setShowEmailError,
  showPasswordError,
  setShowPasswordError,
}: Props) {
  return (
    <>
      <div>
        <div className="font-medium mb-1">Email</div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (showEmailError) setShowEmailError(true);
          }}
          onBlur={() => setShowEmailError(true)}
          className="border-2 border-gray-300 rounded-md p-2 w-[359px]"
          placeholder="Enter email here"
        />
        {!isValidEmail(email) && showEmailError && (
          <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
            <XCircle className="w-[14px] h-[14px]" />
            Please enter a valid email
          </div>
        )}
      </div>

      <div>
        <div className="font-medium mb-1">Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (showPasswordError) setShowPasswordError(true);
          }}
          onBlur={() => setShowPasswordError(true)}
          className="border-2 border-gray-300 rounded-md p-2 w-[359px]"
          placeholder="Enter password here"
        />
        {!isValidPassword(password) && showPasswordError && (
          <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
            <XCircle className="w-[25px] h-[14px]" />
            <div className="w-[360px]">
              Must have at least 8 characters, include an uppercase, lowercase
              letter, a number, and a special character.
            </div>
          </div>
        )}
      </div>

      <Button
        // root oruulah push to profile page
        className={`w-[359px] h-10 transition-colors ${
          isValidEmail(email) && isValidPassword(password)
            ? "bg-black text-white hover:bg-neutral-800"
            : "bg-[#d1d1d1] text-[#a3a3a3] cursor-not-allowed"
        }`}
        disabled={!isValidEmail(email) || !isValidPassword(password)}
      >
        Continue
      </Button>
    </>
  );
}
