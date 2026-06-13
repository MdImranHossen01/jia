"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export default function Impact() {
  const testimonials: Testimonial[] = [
    { name: "Rahima Begum", role: "Beneficiary, Ishwardi Sadar", text: "JIA stands by us in our times of need. Their medical campaign gave my daughter the treatment we couldn't afford otherwise." },
    { name: "Dr. Asif Mahmud", role: "Volunteer Doctor", text: "Working with JIA has been eye-opening. The dedication of their young volunteer base is truly inspiring and highly organized." },
    { name: "Kafil Uddin", role: "Local Merchant", text: "Their immediate food distribution drive during the winter season saved dozens of families in our area. Highly reliable team." }
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
            Our Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            Real stories and feedback from the community members JIA supports.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/30 dark:border-zinc-800/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="text-zinc-650 dark:text-zinc-355 text-sm italic leading-relaxed mb-6">
                  "{t.text}"
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
