// src/app/jitendra-singh/page.js
// Ultra-premium light theme – Vibrant Aurora (Violet/Rose/Cyan)
// Mobile-first architecture, glassmorphism, small typography, colorful aesthetic.

import Link from "next/link";
import {
  User,
  ShieldCheck,
  TerminalSquare,
  Cpu,
  Layers,
  Network,
  Fingerprint,
  Github,
  Linkedin,
  Mail,
  Instagram,
  ChevronRight,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh | The Developer Entity & Digital Identity",
  description:
    "Entity disambiguation profile for Jitendra Singh Nimod. Discover the web developer, programmer, and architect from Rajasthan, India operating under this name.",
  keywords: [
    "Jitendra Singh",
    "Jitendra Singh developer",
    "Jitendra Singh software engineer",
    "Jitendra Singh Rajasthan",
    "Jitendra Singh Nimod",
    "JSS Originals founder",
  ],
  alternates: { canonical: "/jitendra-singh" },
  openGraph: {
    title: "Jitendra Singh – Developer Entity Profile",
    description:
      "Official identity page for Jitendra Singh Nimod. Full Stack Developer from Rajasthan, India.",
    images: [{ url: "/images/og/jitendra-singh-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JitendraSinghPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Jitendra Singh",
      alternateName: "Jitendra Singh Nimod",
      jobTitle: "Full Stack Web Developer",
      description:
        "Jitendra Singh Nimod is a Full Stack Developer and B.Sc Mathematics student from Rajasthan, specializing in modern web architecture.",
      url: "https://me.jitubanna.com/jitendra-singh",
      sameAs: [
        "https://github.com/jitendra-math",
        "https://dev.to/jitendrasingh",
        "https://medium.com/@i.jitendra.singh0",
      ],
    },
  };

  return (
    <main className="relative min-h-screen bg-[#FAFAFA] selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden font-sans">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* VIBRANT AMBIENT BACKGROUNDS (Apple Siri/Aurora Style) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] bg-violet-400/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] bg-rose-400/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[60vw] min-w-[500px] bg-cyan-400/20 blur-[130px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.025] mix-blend-overlay pointer-events-none" />

      {/* HERO SECTION */}
      <header className="relative z-10 max-w-3xl mx-auto px-5 pt-24 pb-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 bg-white/50 backdrop-blur-xl border border-white/60 rounded-full shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-600" strokeWidth={2.5} />
          <span className="text-[10px] font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600 uppercase">
            Entity Record
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Jitendra Singh
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed">
          Cryptographic semantic anchor for the digital architect, mathematician, and full-stack engineer from Rajasthan.
        </p>
      </header>

      {/* MAIN ARCHITECTURE */}
      <article className="relative z-10 max-w-2xl mx-auto px-5 space-y-5 pb-24">
        
        {/* DISAMBIGUATION (Colorful Glass Card) */}
        <section className="group relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[28px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all hover:bg-white/80">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-violet-400/20 to-transparent blur-2xl rounded-full" />
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-violet-100 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-violet-600" strokeWidth={2} />
              </div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Global Collision
              </h2>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "Jitendra Singh" is a high-frequency global identifier. This module explicitly isolates <strong className="font-bold text-violet-700">Jitendra Singh Nimod</strong> within the domains of web infrastructure and premium UI engineering.
            </p>
          </div>
        </section>

        {/* CORE PROFILE GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Logic Card */}
          <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all group">
            <div className="p-2 bg-cyan-100/50 rounded-xl w-fit mb-4 group-hover:bg-cyan-100 transition-colors">
              <Cpu className="w-4 h-4 text-cyan-600" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Mathematical Logic</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Rooted in B.Sc Mathematics (PCM). Providing a strict logical foundation for scalable state management and algorithm design.
            </p>
          </div>

          {/* Engineering Card */}
          <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all group">
            <div className="p-2 bg-rose-100/50 rounded-xl w-fit mb-4 group-hover:bg-rose-100 transition-colors">
              <TerminalSquare className="w-4 h-4 text-rose-600" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Full Stack Systems</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Specializing in mobile-first architectures, PWAs, and high-fidelity interfaces using the modern JavaScript ecosystem.
            </p>
          </div>
        </section>

        {/* TECH STACK (Colorful Tags) */}
        <section className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[24px] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-amber-100 rounded-lg">
              <Layers className="w-4 h-4 text-amber-600" strokeWidth={2} />
            </div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Technical Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Next.js App Router", color: "text-slate-700 bg-slate-100" },
              { name: "SvelteKit", color: "text-orange-700 bg-orange-100" },
              { name: "Tailwind CSS", color: "text-cyan-700 bg-cyan-100" },
              { name: "Vercel", color: "text-slate-900 bg-white border border-slate-200" },
              { name: "Node.js", color: "text-green-700 bg-green-100" },
              { name: "AI Integration", color: "text-violet-700 bg-violet-100" }
            ].map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all cursor-default shadow-sm hover:scale-105 ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* IDENTITY NODES */}
        <section className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[24px] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-indigo-100 rounded-lg">
              <Network className="w-4 h-4 text-indigo-600" strokeWidth={2} />
            </div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Alias Nodes
            </h2>
          </div>
          
          <div className="flex flex-col gap-2">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
            ].map((alias) => (
              <Link
                key={alias.path}
                href={alias.path}
                className="group flex items-center justify-between p-3.5 bg-white/50 rounded-2xl hover:bg-white shadow-sm border border-transparent hover:border-violet-100 transition-all"
              >
                <span className="text-xs font-bold text-slate-700 group-hover:text-violet-700 transition-colors">
                  {alias.name}
                </span>
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-violet-50 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-violet-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SOCIAL DOCK (Floating style) */}
        <div className="pt-4 pb-4">
          <div className="flex justify-center items-center gap-6 px-6 py-4 bg-white/80 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full w-fit mx-auto">
            <a href="https://github.com/jitendra-math" className="text-slate-500 hover:text-slate-900 transition-colors hover:scale-110 transform">
              <Github className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="https://linkedin.com/in/jitendra-singh07" className="text-slate-500 hover:text-blue-600 transition-colors hover:scale-110 transform">
              <Linkedin className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="https://instagram.com/jitendra.07_7" className="text-slate-500 hover:text-rose-600 transition-colors hover:scale-110 transform">
              <Instagram className="w-4 h-4" strokeWidth={2} />
            </a>
            <div className="w-[1px] h-4 bg-slate-300" />
            <a href="mailto:contact@jitubanna.com" className="text-slate-500 hover:text-violet-600 transition-colors hover:scale-110 transform">
              <Mail className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
