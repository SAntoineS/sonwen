'use client'

import {dotGothic} from "@/app/ui/fonts";
import Link from "next/link";
import {useEffect, useState} from "react";
import { ArrowUp } from 'lucide-react';

export default function HeroSection() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className="relative h-screen flex flex-col items-center justify-center text-center">
            <Link className="absolute font-extrabold text-[36px] top-8 left-0" href="/">
                snw.
            </Link>
            <div
                className="absolute flex flex-col items-center justify-center left-4 gap-20 border border-red-500 h-1/2 text-[14px] select-none">
                <Link className="-rotate-90 link" href="/">home</Link>
                <Link className="-rotate-90 link" href="#about">about me</Link>
                <Link className="-rotate-90 link" href="#projects">projects</Link>
                <Link className="-rotate-90 link" href="#contact">contact</Link>
            </div>
            <div className="relative flex items-end">
                <h1 className={`${dotGothic.className}`}>front-end.web(developer)</h1>
                <div className="codingRectangle"></div>
            </div>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-16 right-8 p-3 rounded-full bg-black text-white shadow-lg transition-opacity duration-300 ease-in-out z-50 ${
                    showScrollTop ? "opacity-100" : "opacity-0"
                }`}
                aria-label="Scroll to top">
                <ArrowUp size={24}/>
            </button>
        </main>
    );
}
