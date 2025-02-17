import Link from "next/link";

export default function Footer() {
    return (
        <main className="h-52 flex flex-col md:flex-row bg-black text-white rounded-t-[48px] font-semibold">
            <div className="flex flex-col items-center justify-center md:w-1/2 h-full gap-2">
                <Link href="/" className="uppercase text-2xl md:text-3xl">swn.</Link>
                <p className="text-[#999999] text-sm md:text-base">frontend developer</p>
            </div>
            <div className="flex flex-col items-center justify-center md:w-1/2 h-full gap-2">
                <p className="text-2xl md:text-3xl uppercase">Socials</p>
                <div className="flex items-center justify-center gap-5 text-[#999999] text-sm md:text-base flex-wrap">
                    <Link href="https://www.linkedin.com/in/antoinesidot/" target="_blank" className="link">linkedin</Link>
                    <Link href="https://github.com/SAntoineS" target="_blank" className="link">github</Link>
                    <Link href="https://www.instagram.com/antoine.xrz/" target="_blank" className="link">instagram</Link>
                </div>
            </div>
        </main>
    );
}
