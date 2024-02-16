import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/theme.css";
import "@/styles/utils.css";
import "@/styles/mods.css";
import "@/styles/embla.css";
import "@/styles/description.css";
import "@splidejs/react-splide/css";
import { Toaster } from "@/components/ui/toaster";

import { CookiesProvider } from "next-client-cookies/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "cyberflake",
    description: "Cyberflake is a social media platform for developers.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <CookiesProvider>{children}</CookiesProvider>
                <Toaster />
            </body>
        </html>
    );
}
