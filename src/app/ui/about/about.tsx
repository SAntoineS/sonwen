'use client'

import Image from "next/image";
import Link from "next/link";
import {Download} from 'lucide-react';

export default function About() {
    return (
        <main id="about" className="py-24 flex flex-col lg:flex-row items-center lg:items-start uppercase gap-10">
            <div className="relative w-full lg:w-1/2 h-[50vh] md:h-[75vh] border rounded-[48px]">
                <Image
                    alt="Chœur"
                    className="rounded-[48px] object-cover"
                    src="/20230706_205423.jpg"
                    fill
                />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-5 lg:pl-10 gap-5">
                <h2><span className="coloredTitle">Few Words</span> about me</h2>
                <p className="normal-case pb-5">
                    An experienced front-end developer in JavaScript, VueJS, React, NextJS and Angular, I&#39;ve worked
                    on various projects ranging from SPA development to user experience optimization.
                </p>
                <div className="normal-case pb-5">
                    I hold a Certificat Fédéral de Capacité en Développement d&#39;Application (Federal Certificate of
                    Competence in Application Development) and was recently certified in <Link
                    href="https://api.certificates.dev/certificates/55d07536-4cbe-45d9-901a-189247f84c36/download?signature=1a3bbd85726185d4daedb69e9f20ba51f3209fd9bb2046bc20c7a7c1b60e204c"
                    target="_blank"
                    className="link font-semibold">Angular</Link>, <Link
                    href="https://www.udemy.com/certificate/UC-96a83779-19af-4ee5-a1bf-dee08b80aba7/" target="_blank"
                    className="link font-semibold">Next</Link>, <Link
                    href="https://www.awwwards.com/academy/certification/course/antoine-4/learn-figma-from-a-to-z"
                    target="_blank"
                    className="link font-semibold">Figma</Link> and <Link
                    href="https://www.credly.com/badges/daf1cf0e-e05d-472a-8add-516d86758b99/public_url" target="_blank"
                    className="link font-semibold">Scrum</Link>.
                </div>
                <p className="normal-case pb-5">
                    I enjoy working in a team, sharing my knowledge and contributing positively to innovative projects.
                </p>
                    <a href="/front-end-developer.pdf" className="link w-fit" download>Download CV <Download size={28} strokeWidth={1}/></a>
            </div>
        </main>
    );
}