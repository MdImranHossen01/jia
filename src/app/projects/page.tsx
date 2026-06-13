"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FuturePlan {
  year: string;
  title: string;
  desc: string;
}

export default function Projects() {
  const futurePlans: FuturePlan[] = [
    { year: "2026 Q3", title: "Digital Literacy Campaign", desc: "Equipping local schools with basic computer labs and training." },
    { year: "2026 Q4", title: "Sustained Free Medical Clinic", desc: "Setting up a weekly clinic providing free primary care and medicine." },
    { year: "2027 Q1", title: "Green Ishwardi Initiative", desc: "A massive afforestation campaign aiming to plant 10,000 native trees." }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 border-b border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white"
          >
            Future Plans & Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            The roadmap and targets we aim to complete over the next year.
          </motion.p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto px-6 relative border-l-2 border-emerald-100 dark:border-emerald-950 pl-8 ml-4 sm:ml-auto mr-auto space-y-12">
          {futurePlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-zinc-900 flex items-center justify-center shadow-md shadow-emerald-500/20" />
              
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3">
                {plan.year}
              </span>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2">{plan.title}</h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">{plan.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
