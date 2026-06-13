"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  avatarBg: string;
  initials: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    { name: "Md. Imran Hossen", role: "Founder & Executive Director", avatarBg: "from-emerald-400 to-teal-500", initials: "IH" },
    { name: "Sayed Ahmed", role: "Director of Operations", avatarBg: "from-amber-400 to-orange-500", initials: "SA" },
    { name: "Fahim Rahman", role: "Lead Volunteer Coordinator", avatarBg: "from-blue-400 to-indigo-500", initials: "FR" },
    { name: "Tasmia Chowdhury", role: "Treasurer & Public Relations", avatarBg: "from-pink-400 to-rose-500", initials: "TC" }
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
            Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-base md:text-lg text-zinc-500 dark:text-zinc-400"
          >
            Meet the passionate individuals driving change and delivering community-led impact.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-900/40 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-tr ${member.avatarBg} flex items-center justify-center text-white font-extrabold text-3xl shadow-inner mb-6`}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{member.name}</h3>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2 uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
