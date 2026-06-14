"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-emerald-300 blur-3xl filter animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-teal-300 blur-3xl filter animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <Heart className="w-3.5 h-3.5 fill-emerald-500 stroke-emerald-500 animate-bounce" /> Uplifting Humanity, Together
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]"
        >
          Empowering Communities <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Transforming Lives
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mt-8 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          JIA is a social organization dedicated to socio-economic development, health services, and education for underprivileged communities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/about"
            className="px-8 py-4 rounded-full text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all transform hover:-translate-y-0.5"
          >
            Explore Our Story
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 rounded-full text-base font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
