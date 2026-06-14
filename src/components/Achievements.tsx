import Link from "next/link";
import { Heart, Users, Award, Calendar, ArrowRight } from "lucide-react";

export default function Achievements() {
  const achievements = [
    { number: "15K+", label: "Lives Impacted", icon: <Heart className="w-5 h-5 text-emerald-500" /> },
    { number: "50+", label: "Active Volunteers", icon: <Users className="w-5 h-5 text-emerald-500" /> },
    { number: "12+", label: "Core Projects", icon: <Award className="w-5 h-5 text-emerald-500" /> },
    { number: "5+", label: "Years of Service", icon: <Calendar className="w-5 h-5 text-emerald-500" /> }
  ];

  return (
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
  );
}
