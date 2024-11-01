'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Detecte si le composant est visible

    // Configuration d'animation pour l'image et le texte
    const animationPropsImage = {
        initial: { opacity: 0, x: -100 }, // Commence à gauche et invisible
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    const animationPropsText = {
        initial: { opacity: 0, x: 100 }, // Commence à droite et invisible
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    return (
        <main id="about" ref={ref} className="pt-52 flex uppercase">
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
            <motion.div className="flex flex-col w-1/2 pl-10" {...animationPropsText}>
                <h2>Few Words</h2>
                <p className="normal-case pb-5">
                    An experienced front-end developer in JavaScript, VueJS, React and Angular, I&#39;ve worked on various projects ranging from SPA development to user experience optimization.
                </p>
                <p className="normal-case pb-5">
                    I hold a Certificat Fédéral de Capacité en Développement d&#39;Application (Federal Certificate of Competence in Application Development) and was recently certified in Angular and Scrum.
                </p>
                <p className="normal-case pb-5">
                    I enjoy working in a team, sharing my knowledge and contributing positively to innovative projects.
                </p>
            </motion.div>
        </main>
    );
}
