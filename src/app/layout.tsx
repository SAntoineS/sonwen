import type {Metadata} from "next";
import "./ui/globals.css";
import {inter} from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased bg-[#F5F5F5] text-lg`}>{children}</body>
        </html>
    );
}
