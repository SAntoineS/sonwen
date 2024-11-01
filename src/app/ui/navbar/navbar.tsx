'use client';

import Link from "next/link";
import {Copy} from 'lucide-react';
import {useState} from "react";
import clsx from "clsx";
import {motion} from "framer-motion"; // Importer motion

export default function Navbar() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@sonwen.ch").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500); // Masquer "Copié !" après 2 secondes
        });
    };

    // Configuration d'animation commune
    const animationProps = {
        initial: {opacity: 0, y: -10},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.5, ease: "easeInOut"}, // Ajout de ease
    };

    return (
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[#EFEFEF]/30 z-50">
            <div className="container mx-auto flex justify-between py-6 font-semibold">
                <div className="flex items-center gap-36">
                    <motion.div {...animationProps}>
                        <Link href="/" className="uppercase text-xl">sonwen</Link>
                    </motion.div>
                    <div className="flex items-center gap-10 text-base">
                        <motion.div {...animationProps} transition={{...animationProps.transition, delay: 0.1}}>
                            <Link href="#about" className="uppercase link">about</Link>
                        </motion.div>
                        <motion.div {...animationProps} transition={{...animationProps.transition, delay: 0.2}}>
                            <Link href="#work" className="uppercase link">work</Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div {...animationProps} transition={{...animationProps.transition, delay: 0.3}}
                            className="text-base relative flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow cursor-pointer transition-all duration-300 ease-out hover:shadow-none"
                            onClick={handleCopy}>
                    <p>hello@sonwen.ch</p>
                    <Copy color="#797979" size={18}/>

                    <span
                        className={clsx('absolute right-0 top-[120%] px-2 py-1 bg-black text-white rounded-full text-sm z-10 transition-all duration-300 ease-out',
                            {
                                'opacity-0': !copied,
                                'opacity-100': copied,
                            })}>
                            Email Copié !
                        </span>
                </motion.div>
            </div>
        </nav>
    );
}
