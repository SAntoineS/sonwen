import {DotGothic16, Inter, Manrope} from 'next/font/google';

export const manrope = Manrope({ subsets: ['latin']});

export const dotGothic = DotGothic16({weight: '400', preload: false})

export const inter = Inter({ subsets: ['latin'] });