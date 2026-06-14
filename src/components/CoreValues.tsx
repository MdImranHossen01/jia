import Link from "next/link";
import { Compass, Target, ArrowRight } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-3">WHO WE ARE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white leading-tight">Guided by Compassion and Action</h2>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              JIA operates with the objective of eliminating structural vulnerabilities in the community. Through structured medical campaigns, food drives, and book distributions, we empower local citizens to build their own paths of growth.
            </p>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 group">
                More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-900/40">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-500" /> Our Vision
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">An inclusive society offering equal access to health, learning, and self-sustainability.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-900/40">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-500" /> Our Mission
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Empowering families by delivering basic medical aid, emergency relief, and digital skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
