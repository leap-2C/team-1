"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/app/types";

interface UserContextType {
  userData: User | null;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  userData: null,
  logout: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserData(parsed);
      } catch (e) {
        console.error("Invalid user data in storage", e);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
