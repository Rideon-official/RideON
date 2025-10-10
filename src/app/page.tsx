import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import RegionMap from "@/components/RegionMap";
import Ridy from "@/components/Ridy";
import PartnerMerge from "@/components/PartnerMerge";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Stats />
        <RegionMap />
        <Ridy />
        <PartnerMerge />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
