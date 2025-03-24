'use client'

import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function Project() {
    return (
        <main id="work" className="py-24 flex flex-col lg:flex-row items-center lg:items-start uppercase gap-10">
            <div className="flex flex-col w-full lg:w-1/2 px-5 lg:pr-10 text-left gap-5">
                <h2><span className="coloredTitle">Latest</span> project</h2>
                <h3>Chœur Rivaz St-Saphorin</h3>
                <p className="normal-case pb-5">
                    Redesign of the association&#39;s website, incorporating an updated design adapted to mobile
                    solutions (responsive), as well as a CMS to manage site content and navigation.
                </p>
                <Link href="https://choeurivazstsaph.ch/" target="_blank" className="link w-fit normal-case">
                    Take a look <ArrowUpRight size={28} strokeWidth={1}/>
                </Link>
            </div>
            <div className="relative w-full lg:w-1/2 h-[50vh] md:h-[60vh] border rounded-[48px]">
                <Image
                    alt="Chœur"
                    className="rounded-[48px] object-cover"
                    src="/choeur.webp"
                    fill
                />
            </div>
        </main>
    );
}