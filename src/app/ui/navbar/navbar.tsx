'use client';

import Link from "next/link";
import {Menu, X} from 'lucide-react';
import {useEffect, useState, useRef} from "react";
import clsx from "clsx";

export default function Navbar() {
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // Référence pour le menu

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@sonwen.ch").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    // Ferme le menu quand on clique en dehors
    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        function handleKeyDown(event: { key: string; }) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[#EFEFEF]/30 z-10">
            <div className="container flex justify-between py-6 font-semibold">
                <Link href="/" className={clsx("uppercase text-3xl z-30 transition-all duration-500 font-semibold",
                    {
                        "text-white": menuOpen,
                        "text-black": !menuOpen
                    }
                )}>swn.</Link>

                {/*<div
                    className="z-30 hidden text-base relative md:flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow cursor-pointer transition-all duration-300 ease-out hover:shadow-none"
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
                </div>*/}

                <button className="" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu size={28} strokeWidth={1}/>
                </button>
            </div>

            {/* Menu */}
            <div ref={menuRef} className={clsx(
                "z-20 fixed top-0 left-0 w-full bg-[#0E1111] text-white flex flex-col items-center justify-between gap-10 font-semibold transition-transform duration-300",
                {
                    "translate-y-0": menuOpen,
                    "-translate-y-full": !menuOpen,
                })}>
                <div className="container pb-20">
                    <div className="relative flex flex-col gap-20 pt-32">
                        <button className="absolute top-7 right-0" onClick={() => setMenuOpen(false)}>
                            <X size={28} strokeWidth={1}/>
                        </button>

                        <div className="flex flex-col items-center py-10 gap-20">
                            <Link href="#about" className="w-fit" onClick={() => setMenuOpen(false)}>
                                <h1 className="navBigLink">About</h1>
                            </Link>
                            <Link href="#work" className="w-fit" onClick={() => setMenuOpen(false)}>
                                <h1 className="navBigLink">Work</h1>
                            </Link>
                            <Link href="#contact" className="w-fit" onClick={() => setMenuOpen(false)}>
                                <h1 className="navBigLink">Contact</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}