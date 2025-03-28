import type {Metadata} from "next";
import "./ui/globals.css";
import {inter} from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: "Sonwen",
    description: "Découvrez mes projets frontend réalisés avec Next.js, React, et TypeScript. Spécialisé dans les interfaces modernes et performantes.",
    openGraph: {
        title: "Portfolio Frontend de Sonwen",
        description: "Découvrez des projets web interactifs et innovants avec Next.js et TypeScript.",
        url: "https://sonwen.ch",
        type: "website",
        images: [
            {
                url: "https://tonportfolio.com/images/preview.png",
                width: 1200,
                height: 630,
                alt: "Aperçu du portfolio de Sonwen",
            },
        ],
    },
    twitter: {
        site: "@sonwen",
    },
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased bg-[#EFEFEF] text-lg m-0 p-0`}>
        <div className="container mx-auto"> {/* Ajoute un padding-top pour laisser de la place pour la navbar fixe */}
            {children}
        </div>
        </body>
        </html>
    );
}

