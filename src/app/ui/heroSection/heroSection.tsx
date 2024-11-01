'use client'

import { motion } from "framer-motion";

export default function HeroSection() {
    // Configuration d'animation pour les titres
    const titleAnimationProps = {
        initial: { opacity: 0, y: 20 }, // Commence légèrement en bas
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeInOut" }, // Durée et courbe d'accélération
    };

    return (
        <main className="pt-52 uppercase">
            <div className="flex flex-col items-center justify-center">
                <motion.h1 {...titleAnimationProps} transition={{ ...titleAnimationProps.transition, delay: 0.6 }}>Frontend</motion.h1>
                <motion.h1 {...titleAnimationProps} transition={{ ...titleAnimationProps.transition, delay: 0.6 }}>
                    Developer
                </motion.h1>
                <motion.div {...titleAnimationProps} transition={{ ...titleAnimationProps.transition, delay: 0.7 }}
                    className="flex justify-between items-center w-1/2 uppercase font-semibold text-base pt-5 leading-4">
                    <p>Currently crafting<br/> at Ville De Lausanne</p>
                    <p>(2024 - present)</p>
                </motion.div>
            </div>
        </main>
    );
}
