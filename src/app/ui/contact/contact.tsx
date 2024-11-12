import Link from "next/link";

export default function Contact() {
    return (
        <main id="contact" className="relative h-screen flex flex-col border py-20 border-blue-500">
            <div className="flex flex-col items-center">
                <h2 className="borderMiddle">contact me</h2>
                <div>

                </div>
            </div>
            <Link className="absolute bottom-8 left-0 font-extrabold text-[36px]" href="/">
                snw.
            </Link>
            <span className="absolute bottom-8 right-0 text-[#808080] font-light text-[12px]">coding by <span className="font-bold">me</span></span>
        </main>
    );
}
