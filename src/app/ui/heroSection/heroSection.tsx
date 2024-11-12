import {dotGothic} from "@/app/ui/fonts";
import Link from "next/link";

export default function HeroSection() {
    return (
        <main className="relative h-screen flex flex-col items-center justify-center text-center">
            <Link className="absolute font-extrabold text-[36px] top-8 left-0" href="/">
                snw.
            </Link>
            <div className="relative flex items-end">
                <h1 className={`${dotGothic.className}`}>front-end.web(developer)</h1>
                <div className="codingRectangle"></div>
            </div>
        </main>
    );
}
