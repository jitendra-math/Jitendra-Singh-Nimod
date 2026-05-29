// src/app/jitendra-singh/page.js
// Ultra-premium light theme – Minimalist Titanium & Deep Indigo
// Mobile-first architecture, glassmorphism, and microscopic typography.

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
    <main className="relative min-h-screen bg-[#FDFDFD] selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden font-sans">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Ambient Background (Subtle Titanium & Indigo Glow) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-b from-indigo-50/50 via-slate-50/20 to-transparent blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

      {/* HERO SECTION */}
      <header className="relative z-10 max-w-3xl mx-auto px-5 pt-24 pb-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-6 bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <Fingerprint className="w-3 h-3 text-indigo-500" strokeWidth={2.5} />
          <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">
            Entity Record
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-2">
          Jitendra Singh
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md font-light leading-relaxed">
          Cryptographic semantic anchor for the digital architect, mathematician, and full-stack engineer operating from Rajasthan.
        </p>
      </header>

      {/* MAIN ARCHITECTURE */}
      <article className="relative z-10 max-w-2xl mx-auto px-5 space-y-6 pb-24">
        
        {/* DISAMBIGUATION (iOS Widget Style) */}
        <section className="group relative bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[28px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all hover:bg-white/60">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <ShieldCheck className="w-24 h-24 text-slate-900" />
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-500" strokeWidth={2} />
              <h2 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
                Global Collision
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-[90%]">
              "Jitendra Singh" is a high-frequency global identifier. This module explicitly isolates <strong className="font-medium text-slate-900">Jitendra Singh Nimod</strong> within the domains of web infrastructure and premium UI engineering.
            </p>
          </div>
        </section>

        {/* CORE PROFILE GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Logic Card */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
            <Cpu className="w-4 h-4 text-slate-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-sm font-medium text-slate-900 mb-1.5">Mathematical Logic</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Rooted in B.Sc Mathematics (PCM). Providing a strict logical foundation for scalable state management and algorithm design.
            </p>
          </div>

          {/* Engineering Card */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
            <TerminalSquare className="w-4 h-4 text-slate-400 mb-4" strokeWidth={1.5} />
            <h3 className="text-sm font-medium text-slate-900 mb-1.5">Full Stack Systems</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Specializing in mobile-first architectures, PWAs, and high-fidelity interfaces using the modern JavaScript ecosystem.
            </p>
          </div>
        </section>

        {/* TECH STACK (Minimalist Tags) */}
        <section className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-indigo-500" strokeWidth={2} />
            <h2 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
              Technical Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js App Router", "SvelteKit", "Tailwind CSS", "Vercel Infrastructure", "Node.js", "AI Integration"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-50/50 border border-slate-200/50 rounded-xl text-[10px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* IDENTITY NODES (List format for better mobile flow) */}
        <section className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-indigo-500" strokeWidth={2} />
              <h2 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
                Alias Nodes
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
            ].map((alias) => (
              <Link
                key={alias.path}
                href={alias.path}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50/80 transition-colors"
              >
                <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  {alias.name}
                </span>
                <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* SOCIAL DOCK (Floating style) */}
        <div className="pt-6 pb-4">
          <div className="flex justify-center items-center gap-6 px-6 py-4 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-fit mx-auto">
            <a href="https://github.com/jitendra-math" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/jitendra-singh07" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/jitendra.07_7" className="text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <div className="w-[1px] h-4 bg-slate-200" />
            <a href="mailto:contact@jitubanna.com" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
