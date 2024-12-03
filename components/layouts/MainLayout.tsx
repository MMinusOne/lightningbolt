"use client";

import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { useThemeStore } from "../state/themeStore";
import { logConsoleMessages } from "@/utils/log";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect } from "react";
import Toast from "../misc/Toast";
import devtoolsRestrictions from "@/utils/devtool-restriction";
import Head from "next/head";
import GoogleAdsense from "../misc/GoogleAdsense";
import { Partytown } from "@builder.io/partytown/react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const themeStore = useThemeStore();

  useEffect(() => {
    logConsoleMessages();
    devtoolsRestrictions();
  }, []);

  return (
    <>
      <html lang="en" data-theme={themeStore.theme} className="w-full h-full">
        <Head>
          <Partytown debug={true} forward={["dataLayer.push"]} />
          <GoogleAdsense />
        </Head>
        <body className="w-full h-full">
          <QueryClientProvider client={queryClient}>
            <ClerkProvider>
              {children}
              <Toast />
            </ClerkProvider>
            <Analytics />
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
