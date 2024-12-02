"use client";

import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { logConsoleMessages } from "@/utils/log";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "../misc/Toast";
import { ClerkProvider } from "@clerk/nextjs";
import { useThemeStore } from "../state/themeStore";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const themeStore = useThemeStore();

  useEffect(() => {
    logConsoleMessages();
  }, []);

  return (
    <>
      <html lang="en" data-theme={themeStore.theme}>
        <body>
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
