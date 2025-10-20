"use client";
import { Toaster } from "sonner";

import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackQueryProvider>
      <SidebarProvider>
        <AppSidebar />
        <Toaster />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </TanstackQueryProvider>
  );
};
