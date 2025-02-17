'use client'

import Image from "next/image";

export default function About() {
    return (
        <main id="about" className="py-24 flex flex-col lg:flex-row items-center lg:items-start uppercase gap-10">
            <div className="relative w-full lg:w-1/2 h-[50vh] md:h-[65vh] border rounded-[48px]">
                <Image
                    alt="Chœur"
                    className="rounded-[48px] object-cover"
                    src="/choeur.webp"
                    fill
                />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-5 lg:pl-10 text-center lg:text-left gap-5">
                <h2>Few Words</h2>
                <h3>About me</h3>
                <p className="normal-case pb-5">
                    An experienced front-end developer in JavaScript, VueJS, React and Angular, I&#39;ve worked on various projects ranging from SPA development to user experience optimization.
                </p>
                <p className="normal-case pb-5">
                    I hold a Certificat Fédéral de Capacité en Développement d&#39;Application (Federal Certificate of Competence in Application Development) and was recently certified in Angular and Scrum.
                </p>
                <p className="normal-case pb-5">
                    I enjoy working in a team, sharing my knowledge and contributing positively to innovative projects.
                </p>
            </div>
        </main>
    );
}