"use client";

import { User } from "@/app/types";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type CurrentUserProps = {
  currentUserData?: User;
  setCurrentUserData: (User: User) => void;
  error?: string;
  token: string | null;
};

export const CurrentUser = createContext<CurrentUserProps | null>(null);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserData, setCurrentUserData] = useState<User>();
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedToken = localStorage.getItem("authorization");
        if (storedToken) {
          setToken(JSON.parse(storedToken));
        }
      } catch (e) {
        console.error("Failed to parse token from localStorage", e);
      }
    }
  }, [])
  

  const getUserData = async () => {
    if (!token) return;
    try {
      const response = await axiosInstance.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCurrentUserData(response.data.user);
    } catch (err) {
      console.log("error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  return (
    <CurrentUser.Provider
      value={{ error, token, currentUserData, setCurrentUserData }}
    >
      {children}
    </CurrentUser.Provider>
  );
};
export const useCurrent = (): CurrentUserProps => {
  const context = useContext(CurrentUser);
  if (!context) {
    throw new Error("useCurrent must be used within a CurrentUserProvider");
  }
  return context;
};
