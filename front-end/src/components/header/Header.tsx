"use client";

import React from "react";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "@/utils/userContext";

const Header = () => {
  const { userData, logout: authLogout } = useAuth();

  const isLoggedIn = !!userData?.email;

  console.log("Header mounted");

  const handleLogout = () => {
    console.log("Button clicked!");

    try {
      authLogout();
      localStorage.removeItem("authorization");
      localStorage.removeItem("userId");
      console.log("User logged out");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="inset-x-0 h-[59px] bg-background flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
          <Coffee className="w-9 h-9" />
          <h1 className="text-2xl font-bold">Buy Me Coffee</h1>
        </Link>

        {isLoggedIn ? (
          <Button onClick={handleLogout}>
            <Link href="/login" className="flex items-center gap-x-2">
              <Coffee className="w-5 h-5" />
              log out
            </Link>
          </Button>
        ) : (
          <Button onClick={handleLogout} asChild>
            <Link href="/login" className="flex items-center gap-x-2">
              <Coffee className="w-5 h-5" />
              Log Out
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
