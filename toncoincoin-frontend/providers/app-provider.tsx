"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
const queryClient = new QueryClient();

export function AppProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <NextThemesProvider {...props}>
                    {children}
                </NextThemesProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}