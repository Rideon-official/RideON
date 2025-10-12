import Hero from "./_components/Hero";
import Values from "./_components/Values";
import Pillars from "./_components/Pillars";
import Timeline from "./_components/Timeline";
import CtaBanner from "./_components/CtaBanner";

export default function BrandPage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-12">
      <Hero />
      <Values />
      <Pillars />
      <Timeline />
      <CtaBanner />
    </main>
  );
}
