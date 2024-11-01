'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Project() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Animation pour le texte
    const animationPropsImage = {
        initial: { opacity: 0, x: 100 }, // Commence à gauche et invisible
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    const animationPropsText = {
        initial: { opacity: 0, x: -100 }, // Commence à droite et invisible
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    return (
        <main id="work" ref={ref} className="pt-52 flex uppercase">
            <motion.div className="flex flex-col w-1/2 pr-10" {...animationPropsText}>
                <h2>Latest project</h2>
                <h3>Chœur Rivaz St-Saphorin</h3>
                <p className="normal-case pb-5">
                    Redesign of the association&#39;s website, incorporating an updated design adapted to mobile solutions (responsive), as well as a CMS to manage site content and navigation.
                </p>
                <Link href="https://choeurivazstsaph.ch/" target="_blank" className="link w-fit">Take a look</Link>
            </motion.div>
            <motion.div className="relative w-1/2 border rounded-[48px]" {...animationPropsImage}>
                <Image
                    className="rounded-[48px]"
                    src="/choeur.webp"
                    quality={100}
                    fill
                    sizes="100vw"
                    alt="test"
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </main>
    );
}
