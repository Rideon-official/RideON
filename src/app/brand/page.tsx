"use client";
import Hero from "./components/Hero";
import RideonMeaning from "./components/RideonMeaning";
import About from "./components/About";
import CoreStrengths from "./components/CoreStrengths";
import Journey from "./components/Journey";


export default function BrandPage() {
return (
<main className="bg-[#111111] text-white">
{/* Hero */}
<Hero />
{/* RIDEON 알파벳 의미 */}
<RideonMeaning />
{/* About */}
<About />
{/* Journey */}
<Journey />
{/* Core Strengths */}
<CoreStrengths />
</main>
);
}