"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Config, loadConfig } from "@/lib/fs";
import { useEffect, useState } from "react";
import WelcomePage from "@/components/welcome";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    loadConfig()
    .then((config) => setConfig(config));
  }, [])
  

  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-50`}>
        {config ? (
          <>{children}</>
        ) : (
          <WelcomePage />
        )}
      </body>
    </html>
  );
}
