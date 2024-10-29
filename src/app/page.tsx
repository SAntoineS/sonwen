import Navbar from "@/app/ui/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Project from "@/app/ui/project/project";

const project = {
    year: '2024',
    name: 'Choeur Rivaz Saint-Saphorin',
    desc: 'Redesign of the association\'s website, incorporating an updated design adapted to mobile solutions (responsive), as well as a CMS to manage manage site content and navigation.',
    href: 'https://choeurivazstsaph.ch/',
    imgSlug: 'choeur.webp'
}

export default function Home() {
    return (
        <main className="mx-52 my-10 py-10 bg-white rounded-[32px]">
            <div className="container">
                <Navbar/>
                <div className="flex flex-col pt-24 gap-6">
                    <Image src="/avatar.svg" alt="Avatar" width="80" height="80"/>
                    <h1>I craft interfaces</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Link href="#projects" className="flex items-center gap-1 font-medium text-black/85 underline">
                        Take me to the magic land
                        <ArrowUpRight/>
                    </Link>
                </div>
                <div id="projects" className="flex flex-col pt-24 gap-6">
                    <h2>Selected Project</h2>
                    <div className="h-[200vh]">
                        <Project project={project} />
                    </div>
                </div>
            </div>
        </main>
    );
}
