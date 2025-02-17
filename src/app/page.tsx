import Navbar from "@/app/ui/navbar/navbar";
import HeroSection from "@/app/ui/heroSection/heroSection";
import About from "@/app/ui/about/about";
import Project from "@/app/ui/project/project";
import Footer from "@/app/ui/footer/footer";

export default function Home() {
    return (
        <main className="">
            <Navbar/>
            <HeroSection/>
            <About/>
            <Project/>
            <Footer/>
        </main>
    );
}
