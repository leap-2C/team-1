"use client";

import React from "react";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "@/utils/userContext";

const Header = () => {
  const { userData, logout } = useAuth();

  const isLoggedIn = !!userData?.email;

  return (
    <div className="inset-x-0 h-[59px] bg-background flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
          <Coffee className="w-9 h-9" />
          <h1 className="text-2xl font-bold">Buy Me Coffee</h1>
        </Link>

        {isLoggedIn ? (
          <Button
            onClick={logout}
            className="flex items-center gap-x-2 text-red-500"
          >
            <Coffee className="w-5 h-5" />
            Log Out
          </Button>
        ) : (
          <Button asChild>
            <Link href="/login" className="flex items-center gap-x-2">
              <Coffee className="w-5 h-5" />
              Log In
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
