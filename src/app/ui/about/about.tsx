import Image from 'next/image'
import Link from "next/link";
import { Palette, FileCode2, Hexagon } from 'lucide-react';

export function Avatar() {
    return <Image width="24" height="24" className="w-[198px] h-[198px] rounded-full"
                  src={`https://www.svgrepo.com/show/335455/profile-default.svg`}
                  alt="A portrait of me"/>
}

export default function About() {
    return (
        <main id="about" className="h-screen flex flex-col py-20">
            <div className="flex flex-col items-start gap-20 h-full">
                <h2 className="borderLeft">about me</h2>
                <div className="w-full h-full gap-32 flex flex-col items-center justify-center">
                    {/* BIO */}
                    <div className="flex items-center w-4/5 gap-20 h-fit">
                        <Avatar/>
                        <div className="flex flex-col gap-5">
                            <span className="text-[30px]">Antoine Sidot</span>
                            <p className="font-light">I&#39;m more than one in love for Front-End. My experience with
                                interface design turn me one extremely criterious with
                                alignments, margins, colors and a lot other resorces in CSS. Today I work with projects
                                in a whole world.</p>
                            <div className="flex items-center gap-4 uppercase">
                                <Link href="https://www.instagram.com/antoine.xrz/" target="_blank">
                                    instagram
                                </Link>
                                <Link href="https://github.com/SAntoineS" target="_blank">
                                    github
                                </Link>
                                <Link href="mailto:antoine.sidot08@gmail.com" target="_blank">
                                    email
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Primary Skills */}
                    <div className="flex items-center justify-between w-full gap-10 h-fit">
                        {/* Interface & Design */}
                        <div className="flex items-center gap-3 p-3 rounded-[10px] border border-[#EEEEEE]">
                            <Palette/>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-extrabold">Interface & Design</span>
                                <span
                                    className="text-[13px] font-light">Briefing, wireframe, UX, UI and branding.</span>
                            </div>
                        </div>

                        {/* HTML & CSS */}
                        <div className="flex items-center gap-3 p-3 rounded-[10px] border border-[#EEEEEE]">
                            <FileCode2/>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-extrabold">HTML & CSS</span>
                                <span
                                    className="text-[13px] font-light">Responsive websites with fast loading.</span>
                            </div>
                        </div>

                        {/* Node */}
                        <div className="flex items-center gap-3 p-3 rounded-[10px] border border-[#EEEEEE]">
                            <Hexagon/>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-extrabold">React Next Vue</span>
                                <span
                                    className="text-[13px] font-light">Build your system with node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
