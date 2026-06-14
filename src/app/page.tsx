import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import Achievements from "@/components/Achievements";
import SisterConcerns from "@/components/SisterConcerns";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <CoreValues />
      <Achievements />
      <SisterConcerns />
      <FAQ />
      <Footer />
    </div>
  );
}
