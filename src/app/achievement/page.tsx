"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AchievementItem {
  number: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Achievement() {
  const achievements: AchievementItem[] = [
    { number: "15K+", label: "Lives Impacted", desc: "Socio-economic support and food distribution campaigns.", icon: <Heart className="w-6 h-6 text-emerald-500" /> },
    { number: "50+", label: "Active Volunteers", desc: "Dedicated youth working across Ishwardi and adjacent areas.", icon: <Users className="w-6 h-6 text-emerald-500" /> },
    { number: "12+", label: "Core Projects", desc: "Health, educational, and disaster response campaigns completed.", icon: <Award className="w-6 h-6 text-emerald-500" /> },
    { number: "5+", label: "Years of Service", desc: "Continuously uplifting the community since our founding.", icon: <Calendar className="w-6 h-6 text-emerald-500" /> }
  ];

  const campaigns = [
    { title: "Winter Clothing Drive", year: "2025", result: "Distributed blankets and warm clothes to 1,200 families." },
    { title: "Free Health Camp", year: "2024", result: "Provided free medical diagnostics and prescription medicine to 800 patients." },
    { title: "Flood Relief Action", year: "2024", result: "Supplied essential food supplies and clean drinking water during Pabna regional floods." },
    { title: "Back-to-School Initiative", year: "2023", result: "Provided educational accessories and notebooks to 500 elementary students." }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

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
            Achievements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            A summary of the results JIA has accomplished through years of local volunteer service.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/45 dark:border-zinc-900/40 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-2">
                  {item.number}
                </h3>
                <h4 className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {item.label}
                </h4>
                <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Campaigns */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-12 text-center">Successful Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/40"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{item.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">{item.year}</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{item.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
