"use client";

import { User } from "@/app/types";
import { axiosInstance } from "@/lib/addedAxiosInstance";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

export type CurrentUserProps = {
    currentUserData?: User;
    setCurrentUserData: (User: User) => void;
  error?: string;
  token: string | null;
//   setToken:() => void;
};

export const CurrentUser = createContext<CurrentUserProps | null>(null);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserData, setCurrentUserData] = useState<User>();
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authorization")
      setToken(token);
    }
  }, []);

  const getUserData = async () => {
    if (!token) return
    try {
      const response = await axiosInstance.get("users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCurrentUserData(response.data.userInfo as User);
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
    <CurrentUser.Provider value={{ error, token, currentUserData, setCurrentUserData }}>
      {children}
    </CurrentUser.Provider>
  );
};
export const useCurrent = () => useContext(CurrentUser);
