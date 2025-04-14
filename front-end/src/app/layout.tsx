"use client";

import Header from "@/components/header/Header";
import { usePathname } from "next/navigation";
import "./globals.css";
import { UserContextProvider } from "../../utils/userContext";

export default function MainRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = usePathname();

  const shouldDisplayHeader = paths !== "/signup" && paths !== "/login";

  return (
    <html lang="en">
      <UserContextProvider>
      <body>
        {shouldDisplayHeader && <Header />}
        {children}
      </body>
      </UserContextProvider>
    </html>
  );
}
