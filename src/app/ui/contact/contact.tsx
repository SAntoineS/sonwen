import Link from "next/link";
import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Contact() {
    return (
        <main id="contact" className="relative flex flex-col py-20">
            <div className="flex flex-col items-center">
                <h2 className="borderMiddle">contact me</h2>
                <div className="flex items-center justify-between gap-10 w-1/3 my-20">
                    <Link href="https://www.linkedin.com/in/antoinesidot/" target="_blank">
                        <Linkedin className="size-[25px] md:size-[35px]" />
                    </Link>
                    <Link href="https://www.instagram.com/antoine.xrz/" target="_blank">
                        <Instagram className="size-[25px] md:size-[35px]" />
                    </Link>
                    <Link href="https://github.com/SAntoineS" target="_blank">
                        <Github className="size-[25px] md:size-[35px]" />
                    </Link>
                </div>
            </div>
            <Link className="absolute bottom-8 left-0 font-extrabold text-[36px]" href="/">
                snw.
            </Link>
            <span className="absolute bottom-8 right-0 text-[#808080] font-light text-[12px]">coding by <span className="font-bold">me</span></span>
        </main>
    );
}
