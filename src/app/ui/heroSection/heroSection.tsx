'use client'

import Link from "next/link";
import {ArrowUpRight} from 'lucide-react';

export default function HeroSection() {

    return (
        <main className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1><span className="coloredTitle">I'm Antoine</span>, a front-end developer with passion to create
                    great experiences.</h1>
                <div className="flex gap-5 flex-col md:flex-row md:gap-0 w-full justify-between pt-10">
                    <Link href="#contact" className="link">
                        Contact me <ArrowUpRight size={28} strokeWidth={1}/>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link href="https://www.linkedin.com/in/antoinesidot/" target="_blank"
                              className="link">LinkedIn</Link>
                        <Link href="https://github.com/SAntoineS" target="_blank" className="link">GitHub</Link>
                        <Link href="https://www.instagram.com/antoine.xrz/" target="_blank"
                              className="link">Instagram</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
