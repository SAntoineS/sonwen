'use client'
import Image from "next/image";
import Link from "next/link";
import {Copy} from "lucide-react";
import clsx from "clsx";
import {useState} from "react";


export default function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@sonwen.ch").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500); // Masquer "Copié !" après 2 secondes
        });
    };

    return (
        <main className="h-52 flex uppercase bg-black text-white rounded-t-[48px]">
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <p>sonwen</p>
                <p className="text-[#999999]">frontend developer</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-full text-base font-semibold normal-case gap-5">
                <div
                    className="relative flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow cursor-pointer transition-all duration-300 ease-out hover:shadow-none"
                    onClick={handleCopy}>
                    <p className="text-black">hello@sonwen.ch</p>
                    <Copy color="#797979" size={18}/>

                    <span
                        className={clsx('absolute right-0 top-[120%] px-2 py-1 bg-black text-white rounded-full text-sm z-10 transition-all duration-300 ease-out',
                            {
                                'opacity-0': !copied,
                                'opacity-100': copied,
                            })}>
                        Email Copié !
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center uppercase gap-2">
                    <p className="text-[#999999]">Socials</p>
                    <div className="flex items-center gap-2">
                        <Link href="https://www.linkedin.com/in/antoinesidot/" target="_blank" className="uppercase link">LinkedIn</Link>
                        <Link href="https://github.com/SAntoineS" target="_blank" className="uppercase link">GitHub</Link>
                        <Link href="https://www.instagram.com/antoine.xrz/" target="_blank" className="uppercase link">Instagram</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
