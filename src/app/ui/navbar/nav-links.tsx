'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {Circle, Dot} from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Sonwen',
        href: '/',
    },
    {
        name: 'Projects',
        href: '#projects',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
];

export default function NavLinks() {

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={'flex flex-col gap-2 h-[48px] items-center justify-center px-4 text-black/60 hover:text-black/100'}>
                        <span className="hidden md:block">{link.name}</span>
                    </Link>
                );
            })}
        </>
    );
}

