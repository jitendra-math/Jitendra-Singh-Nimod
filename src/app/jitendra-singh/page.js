// src/app/jitendra-singh/page.js

import Link from "next/link";
import { 
  User, 
  ShieldAlert, 
  Terminal, 
  BrainCircuit, 
  Globe2, 
  Code2, 
  GitBranch, 
  ArrowRight,
  Database,
  Search
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
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
    "JSS Originals founder"
  ],
  alternates: { canonical: "/jitendra-singh" },
};

export default function Page() {
  // 🧠 ADVANCED SEO: Explicitly defining this 'Jitendra Singh' as a Developer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh",
      "alternateName": "Jitendra Singh Nimod",
      "jobTitle": "Full Stack Web Developer",
      "description": "Jitendra Singh Nimod is a Full Stack Developer and B.Sc Mathematics student from Rajasthan, specializing in modern web architecture.",
      "url": "https://me.jitubanna.com/jitendra-singh",
      "sameAs": [
        "https://github.com/jitendra-math",
        "https://dev.to/jitendrasingh",
        "https://medium.com/@i.jitendra.singh0"
      ]
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-cyan-500/30 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== EDITORIAL HERO HEADER ===== */}
      <header className="relative pt-32 pb-20 px-6 border-b border-white/[0.05] overflow-hidden">
        {/* Sleek Cyan/Blue Tech Glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-medium tracking-widest uppercase mb-8">
            <Search className="w-4 h-4" />
            <span>Entity Disambiguation Record</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Jitendra Singh <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              The Developer Entity
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            A common name across the globe, isolated here to define a specific digital architect, mathematician, and full-stack engineer from Rajasthan, India.
          </p>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 py-20 space-y-24">

        {/* DISAMBIGUATION NOTICE (THE PROBLEM) */}
        <section>
          <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            <div className="absolute -right-10 -top-10 opacity-5">
              <Database className="w-64 h-64 text-white" />
            </div>
            
            <div className="p-4 rounded-full bg-white/[0.03] border border-white/10 shrink-0 relative z-10">
              <ShieldAlert className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">The Global Name Collision</h2>
              <p className="text-zinc-400 leading-relaxed">
                "Jitendra Singh" is a globally prevalent identifier shared by politicians, entrepreneurs, and public figures. This page serves as a cryptographic semantic anchor to explicitly isolate and define <strong>Jitendra Singh Nimod</strong> within the context of technology, software engineering, and web infrastructure.
              </p>
            </div>
          </div>
        </section>

        

        {/* THE ARCHITECT (BENTO GRID PROFILE) */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <User className="w-6 h-6 text-white" />
            <h2 className="text-3xl font-semibold text-white tracking-tight">Profile & Architecture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Engineering & Math Foundation */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent group hover:border-cyan-500/20 transition-colors">
              <BrainCircuit className="w-8 h-8 text-cyan-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">Mathematical Logic Foundation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Rooted in an academic background of <strong>B.Sc Mathematics (PCM)</strong>. This mathematical training provides an uncompromising logical foundation for algorithm design, state management, and building highly scalable digital systems.
              </p>
            </div>

            {/* Development Focus */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent group hover:border-blue-500/20 transition-colors">
              <Terminal className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-medium text-white mb-3">Full Stack Engineering</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Operating out of Rajasthan, the focus lies heavily on crafting progressive web apps (PWAs), implementing premium UI/UX, and establishing complex authentication architectures using modern frameworks.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section className="relative p-10 md:p-12 rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-black overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">The Technical Stack</h2>
            </div>
            
            <p className="text-zinc-300 mb-8 max-w-2xl leading-relaxed">
              When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js Architecture", 
                "Svelte & PWAs", 
                "React Native", 
                "Tailwind CSS / Premium UI", 
                "Semantic Web / SEO", 
                "Authentication Systems"
              ].map((tech, i) => (
                <div key={i} className="px-5 py-3 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md text-sm font-medium text-zinc-200 shadow-xl">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* ALIAS RESOLUTION & IDENTITY */}
        <section className="pt-10 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="w-6 h-6 text-white" />
            <h2 className="text-3xl font-semibold text-white tracking-tight">Identity Branching</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            In modern developer ecosystems, primary names fragment into aliases. The following nodes are cryptographic equivalents to the primary Jitendra Singh identity:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Jitendra Singh Nimod", path: "jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "jitendra-nimod" },
              { name: "Jitu Nimod", path: "jitu-nimod" },
              { name: "JS Nimod", path: "js-nimod" }
            ].map((alias) => (
              <Link key={alias.path} href={`/identity/${alias.path}`} className="group p-4 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] transition-all flex flex-col items-center text-center gap-2">
                <span className="text-sm font-medium text-zinc-300 group-hover:text-cyan-300 transition-colors">{alias.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ECOSYSTEM LINKS */}
        <section className="pt-10">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-semibold text-white tracking-tight">Global Developer Footprint</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Verifiable accounts and repositories that validate the technical contributions of this entity across the internet.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a href="https://github.com/jitendra-math" target="_blank" rel="noopener noreferrer" className="flex-1 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-1 transition-all flex justify-between items-center group">
              <span className="font-medium text-zinc-200">GitHub Open Source</span>
              <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a href="https://dev.to/jitendrasingh" target="_blank" rel="noopener noreferrer" className="flex-1 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-1 transition-all flex justify-between items-center group">
              <span className="font-medium text-zinc-200">Dev.to Publications</span>
              <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a href="https://medium.com/@i.jitendra.singh0" target="_blank" rel="noopener noreferrer" className="flex-1 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-1 transition-all flex justify-between items-center group">
              <span className="font-medium text-zinc-200">Medium Articles</span>
              <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </section>

      </article>
    </main>
  );
}
