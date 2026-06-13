"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const contactInfo = [
    { icon: <MapPin className="w-6 h-6 text-emerald-600" />, title: "Office Address", details: "Ishwardi, Pabna, Bangladesh" },
    { icon: <Mail className="w-6 h-6 text-emerald-600" />, title: "Email Address", details: "contact@jia.com.bd" },
    { icon: <Phone className="w-6 h-6 text-emerald-600" />, title: "Phone Support", details: "+880 1700-000000" }
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            Reach out to JIA for queries, donations, or volunteer applications.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/30 dark:border-zinc-800/40 flex gap-4 items-start"
                >
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-950 dark:text-white text-base">{info.title}</h3>
                    <p className="text-sm text-zinc-655 dark:text-zinc-400 mt-1">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Form */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-900/50">
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
