"use client";

import { Button } from "@/components/ui/button";

type Props = {
  username: string;
  setUsername: (val: string) => void;
  onNext: () => void;
};

export default function Step1UsernameForm({
  username,
  setUsername,
  onNext,
}: Props) {
  return (
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
        onClick={onNext}
      >
        Continue
      </Button>
    </>
  );
}
