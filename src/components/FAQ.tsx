"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: "What is JIA?", answer: "JIA is a non-governmental, non-profit organization dedicated to the socio-economic development, health services, and educational support of underprivileged populations." },
    { question: "How can I join as a volunteer?", answer: "We welcome passionate individuals! You can apply by contacting us through our contact page or emailing us directly. No prior experience is required, just a heart to serve." },
    { question: "Are your funding sources transparent?", answer: "Yes, 100%. We publish financial reports of all donation inputs and project expenditures to our donors and community leaders for total accountability." },
    { question: "What are your sister concerns?", answer: "Our active sister concerns are JIA Pixel (jiapixel.com) and Pathchakro (pathchakro.com), both contributing to digital creativity and educational reading initiatives respectively." }
  ];

  return (
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
  );
}
