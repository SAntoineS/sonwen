import HeroSection from "@/app/ui/heroSection/heroSection";
import About from "@/app/ui/about/about";
import Project from "@/app/ui/project/project";
import Contact from "@/app/ui/contact/contact";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container">
            <HeroSection/>
            <Project/>
            <About/>
            <Contact/>
        </main>
    );
}
