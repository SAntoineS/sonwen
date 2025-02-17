'use client';

import Link from "next/link";
import {Copy, Menu, X} from 'lucide-react';
import {useEffect, useState} from "react";
import clsx from "clsx";

export default function Navbar() {
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@sonwen.ch").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500); // Masquer "Copié !" après 2 secondes
        });
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden"); // Cleanup au démontage
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[#EFEFEF]/30 z-10">
            <div className="container mx-auto flex justify-between py-6 font-semibold">
                <div className="flex items-center gap-20">
                    <Link href="/" className="uppercase text-3xl z-30">swn.</Link>

                    <div className="hidden md:flex items-center gap-10 text-base">
                        <Link href="#about" className="link">about</Link>
                        <Link href="#work" className="link">work</Link>
                    </div>
                </div>

                <div
                    className="hidden text-base relative md:flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow cursor-pointer transition-all duration-300 ease-out hover:shadow-none"
                    onClick={handleCopy}>
                    <p>hello@sonwen.ch</p>
                    <Copy color="#797979" size={18}/>

                    <span
                        className={clsx('absolute right-0 top-[120%] px-5 py-2 bg-black text-white rounded-full text-sm z-10 transition-all duration-300 ease-out',
                            {
                                'opacity-0': !copied,
                                'opacity-100': copied,
                            })}>
                            Email Copié !
                        </span>
                </div>

                {/* Menu Burger (Mobile) */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu size={28} />
                </button>
            </div>

            <div className={clsx(
                    "z-20 fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-between gap-10 text-lg font-semibold transition-transform duration-300",
                    {
                        "translate-x-0": menuOpen,
                        "-translate-x-full": !menuOpen,
                    }
                )}>
                <div className="flex flex-col gap-20 text-3xl pt-72">
                    <Link href="#about" className="link" onClick={() => setMenuOpen(false)}>about</Link>
                    <Link href="#work" className="link" onClick={() => setMenuOpen(false)}>work</Link>
                </div>

                {/* Email Copy Button (Mobile) */}
                <div className="mb-20 text-base relative flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow cursor-pointer transition-all duration-300 ease-out hover:shadow-none"
                    onClick={handleCopy}>
                    <p>hello@sonwen.ch</p>
                    <Copy color="#797979" size={18} />
                    <span
                        className={clsx('absolute right-0 top-[120%] px-5 py-2 bg-black text-white rounded-full text-sm z-10 transition-all duration-300 ease-out', {
                            'opacity-0': !copied,
                            'opacity-100': copied,
                        })}>
                        Email Copié !
                    </span>
                </div>

                {/* Close Button */}
                <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}>
                    <X size={28} />
                </button>
            </div>
        </nav>
    );
}
