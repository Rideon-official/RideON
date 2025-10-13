"use client";
import Hero from "./_components/Hero";
import RideonMeaning from "./_components/RideonMeaning";
import About from "./_components/About";
import CoreStrengths from "./_components/CoreStrengths";
import Journey from "./_components/Journey";


export default function BrandPage() {
return (
<main className="bg-[#111111] text-white">
{/* Hero */}
<Hero />
{/* RIDEON 알파벳 의미 */}
<RideonMeaning />
{/* About */}
<About />
{/* Core Strengths */}
<CoreStrengths />
{/* Journey */}
<Journey />
</main>
);
}