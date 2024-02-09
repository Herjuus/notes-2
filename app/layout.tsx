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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConfig()
    .then((config) => setConfig(config))
    .finally(() => setLoading(false));
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-50`}>
        <>
          {config ? (
            <>{children}</>
          ) : (
            <>
              {loading ? (
                <div></div>
              ) : (
                <WelcomePage setConfig={setConfig}/>
              )}
            </>
          )}
        </>
      </body>
    </html>
  );
}
