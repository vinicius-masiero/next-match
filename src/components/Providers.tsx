"use client";

import { usePresenceChannel } from "@/hooks/usePresenceChannel";
import { HeroUIProvider } from "@heroui/system";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: ReactNode }) {
  usePresenceChannel();
  return (
    <HeroUIProvider>
      <ToastContainer position="bottom-right" className="z-50" />
      {children}
    </HeroUIProvider>
  );
}
