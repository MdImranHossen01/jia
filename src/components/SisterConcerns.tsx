import { Camera, BookOpen, ExternalLink } from "lucide-react";

export default function SisterConcerns() {
  return (
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
  );
}
