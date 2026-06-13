import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-400 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* NGO info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                J
              </span>
              <span className="font-extrabold text-xl tracking-tight text-white">
                JIA
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              JIA is committed to fostering sustainable development, healthcare support, and educational parity to enrich communities.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@jia.com.bd" className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+880170000000" className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-6">Quick Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors">Impact & Testimonials</Link></li>
              <li><Link href="/achievement" className="hover:text-emerald-400 transition-colors">Achievements</Link></li>
              <li><Link href="/projects" className="hover:text-emerald-400 transition-colors">Roadmap & Projects</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Address & Office */}
          <div>
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-6">Office Address</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Ishwardi, Pabna, Bangladesh</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>contact@jia.com.bd</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} JIA. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Powered by <a href="https://jiapixel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">JIA Pixel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
