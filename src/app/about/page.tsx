"use client";

import { motion } from "framer-motion";
import { Compass, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
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
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            Empowering underprivileged populations with education, medical help, and self-reliance models.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-emerald dark:prose-invert max-w-none space-y-6"
          >
            <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-6">Our Story</h2>
            <p className="text-zinc-650 dark:text-zinc-350 leading-relaxed">
              JIA was founded on the belief that localized efforts lead to direct, meaningful transformations. As a collective of youth, professionals, and local volunteers, we identified structural gaps in education, nutrition, and standard primary health services.
            </p>
            <p className="text-zinc-650 dark:text-zinc-350 leading-relaxed">
              Since our inception, we have executed dozens of food distribution campaigns, funded healthcare aid initiatives, and distributed school bags and books. We focus on bridging resources between those who wish to contribute and the communities that require direct upliftment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Guidelines */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/40"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">Vision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                An inclusive world offering balanced opportunities, literacy access, and basic health provisions to every family.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/40"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center text-teal-600 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">Mission</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Executing campaigns, distributing essentials, and launching modern skill programs to break systemic poverty cycles.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/40"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">Core Values</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Total financial transparency, absolute dedication to humanity, and community involvement at every project phase.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
