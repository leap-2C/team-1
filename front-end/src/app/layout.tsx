"use client";

import Header from "@/components/header/Header";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function MainRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = usePathname();

  const shouldDisplayHeader = paths !== "/signup" && paths !== "/login";
  console.log("Current path:", paths);

  return (
    <html lang="en">
      <body>
        {shouldDisplayHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
