'use client';

import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Project({project}) {

    return (
        <div className="flex border">
            <div className="w-1/2 flex flex-col gap-1">
                <span className="text-black/35 text-sm">{project.year}</span>
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <Link href={project.href} target="_blank"
                      className="flex items-center gap-1 font-medium text-black/85 underline">
                    Try it out
                    <ArrowUpRight/>
                </Link>
            </div>
            <Image src={'/'+project.imgSlug} alt="Project Image" width="100" height="100"/>
        </div>

    );
}

