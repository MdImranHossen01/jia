"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Award, 
  Users, 
  Compass, 
  Target, 
  ChevronDown, 
  Calendar,
  Camera,
  BookOpen,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const achievements = [
    { number: "15K+", label: "Lives Impacted", icon: <Heart className="w-5 h-5 text-emerald-500" /> },
    { number: "50+", label: "Active Volunteers", icon: <Users className="w-5 h-5 text-emerald-500" /> },
    { number: "12+", label: "Core Projects", icon: <Award className="w-5 h-5 text-emerald-500" /> },
    { number: "5+", label: "Years of Service", icon: <Calendar className="w-5 h-5 text-emerald-500" /> }
  ];

  const faqs: FAQItem[] = [
    { question: "What is JIA?", answer: "JIA is a non-governmental, non-profit organization dedicated to the socio-economic development, health services, and educational support of underprivileged populations." },
    { question: "How can I join as a volunteer?", answer: "We welcome passionate individuals! You can apply by contacting us through our contact page or emailing us directly. No prior experience is required, just a heart to serve." },
    { question: "Are your funding sources transparent?", answer: "Yes, 100%. We publish financial reports of all donation inputs and project expenditures to our donors and community leaders for total accountability." },
    { question: "What are your sister concerns?", answer: "Our active sister concerns are JIA Pixel (jiapixel.com) and Pathchakro (pathchakro.com), both contributing to digital creativity and educational reading initiatives respectively." }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
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

      {/* Summary Core Values */}
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

      {/* Summary Achievements Banner */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <span className="text-3xl font-extrabold text-zinc-950 dark:text-white">{item.number}</span>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/achievement" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 group">
              View Detailed Achievements <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sister Concerns */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">OUR ECOSYSTEM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white mt-2">Active Sister Concerns</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Initiatives launched to support creativity, technology education, and learning expansion.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* JIA Pixel */}
            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-900/50 flex flex-col justify-between group hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-3">JIA Pixel</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Providing modern graphic design education, digital content creation resources, and tech literacy projects to prepare local youth for the online economy.
                </p>
              </div>
              <a 
                href="https://jiapixel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Visit jiapixel.com <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Pathchakro */}
            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-900/50 flex flex-col justify-between group hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-3">Pathchakro</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  An open reading forum and micro-library project promoting book reading, group discussions, and creative writing programs for kids and students.
                </p>
              </div>
              <a 
                href="https://pathchakro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Visit pathchakro.com <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Find answers to the most common queries about our operations, programs, and donations.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-zinc-900 transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-base md:text-lg text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${isOpen ? "transform rotate-180 text-emerald-500" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-200/30 dark:border-zinc-800/30 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
