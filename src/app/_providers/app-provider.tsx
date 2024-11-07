"use client";
import { AppSessionProvider } from "@/entities/session/session.client.tsx";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { queryClient } from "@/lib/api/query-client";
import { ComposeChildren } from "@/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
