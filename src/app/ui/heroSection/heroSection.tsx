'use client'

export default function HeroSection() {

    return (
        <main className="h-screen flex items-center justify-center uppercase">
            <div className="flex flex-col items-center justify-center">
                <h1>Frontend</h1>
                <h1>Developer</h1>
                <div className="flex justify-between items-start w-full md:w-1/2 uppercase font-semibold text-base pt-5 leading-4">
                    <p>Currently crafting<br/> at (?)</p>
                    <p>(2025 - present)</p>
                </div>
            </div>
        </main>
    );
}
