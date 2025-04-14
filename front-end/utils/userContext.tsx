"use client";

import { axiosInstance } from "@/lib/addedAxiosInstance";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextProps = {
//   userData: UserData[];
//   setUserData: (UserData: UserData[]) => void;
//   error?: string;
  token: string | null;
//   setToken:() => void;
};

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
//   const [userData, setUserData] = useState<UserData[]>([]);
//   const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(JSON.parse(localStorage.getItem("authorization") || ""));
    }
  }, []);

//   const getUserData = async () => {
//     if (!token) return null;
//     try {
//       const address = await axiosInstance.get("/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUserData(address.data.user);
//     } catch (err) {
//       console.log("error", err);
//       if (axios.isAxiosError(err)) {
//         setError(err.response?.data.message);
//       }
//     }
//   };
//   useEffect(() => {
//     getUserData();
//   }, [token]);
  return (
    <UserContext.Provider value={{ token }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => useContext(UserContext);
