import Link from "next/link";

export default function Footer() {
    return (
        <main id="contact" className="alignFull bg-[#0E1111] text-white py-24">
            <div className="flex flex-col container gap-20">
                <h1>Want to <br/> contact me ?</h1>
                <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:items-center justify-between">
                    <Link href="mailto:hello@sonen.ch" className="link w-fit">hello@sonwen.ch</Link>
                    <div className="flex items-center gap-3">
                        <Link href="https://www.linkedin.com/in/antoinesidot/" target="_blank"
                              className="link">LinkedIn</Link>
                        <Link href="https://github.com/SAntoineS" target="_blank" className="link">GitHub</Link>
                        <Link href="https://www.instagram.com/antoine.xrz/" target="_blank"
                              className="link">Instagram</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <span>Made with love ❤️ by myself</span>
                </div>
            </div>
        </main>
    );
}
