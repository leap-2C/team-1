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
import { useCurrent } from "./currentUserContext";

export type UserContextProps = {
  userData?: User;
  setUserData: (User: User) => void;
  error?: string;
};

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState("");
  const {token} = useCurrent()
  const params = useParams();
    const id = params.userId;
    const {push} = useRouter()

  const getUserData = async () => {
    if (!token) return

    try {
      const response = await axiosInstance.get(`profile/view/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.userInfo as User);
    } catch (err) {
      console.log("error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  };
  useEffect(() => {
    if (id && token) {
      getUserData();
    }
  }, [id, token]);
  console.log(token, "token")
  console.log(userData, "data")
  return (
    <UserContext.Provider value={{ error, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => useContext(UserContext);
