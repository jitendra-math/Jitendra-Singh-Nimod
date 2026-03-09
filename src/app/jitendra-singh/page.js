// src/app/jitendra-singh/page.js
// Ultra-premium light theme version with blue accents

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
  Search,
  Github,
  Linkedin,
  Mail,
  Instagram
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
    "JSS Originals founder"
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
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium tracking-widest uppercase mb-8">
          <Search className="w-4 h-4" />
          <span>Entity Disambiguation Record</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6 leading-tight">
          Jitendra Singh <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
            The Developer Entity
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect, 
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-20">

        {/* DISAMBIGUATION NOTICE */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-[#2563EB]/10 rounded-full shrink-0">
              <ShieldAlert className="w-8 h-8 text-[#2563EB]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-800 mb-3">The Global Name Collision</h2>
              <p className="text-zinc-600 leading-relaxed">
                "Jitendra Singh" is a globally prevalent identifier shared by politicians, entrepreneurs, and public figures. 
                This page serves as a cryptographic semantic anchor to explicitly isolate and define{' '}
                <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> within the context of technology, 
                software engineering, and web infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE & ARCHITECTURE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <User className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Profile & Architecture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Math Foundation */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
              <div className="p-3 bg-[#2563EB]/10 rounded-xl w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition">
                <BrainCircuit className="w-8 h-8 text-[#2563EB] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">Mathematical Logic Foundation</h3>
              <p className="text-zinc-600 leading-relaxed">
                Rooted in an academic background of <strong className="text-[#2563EB]">B.Sc Mathematics (PCM)</strong>. 
                This mathematical training provides an uncompromising logical foundation for algorithm design, 
                state management, and building highly scalable digital systems.
              </p>
            </div>

            {/* Development Focus */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
              <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6 group-hover:bg-purple-500 group-hover:text-white transition">
                <Terminal className="w-8 h-8 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">Full Stack Engineering</h3>
              <p className="text-zinc-600 leading-relaxed">
                Operating out of Rajasthan, the focus lies heavily on crafting progressive web apps (PWAs), 
                implementing premium UI/UX, and establishing complex authentication architectures using modern frameworks.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl">
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Code2 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">The Technical Stack</h2>
            </div>
            
            <p className="text-zinc-600 mb-8 max-w-2xl leading-relaxed">
              When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js Architecture", 
                "React & Modern Frontend", 
                "Node.js / APIs", 
                "Tailwind CSS", 
                "SEO Optimization", 
                "Authentication Systems"
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* IDENTITY BRANCHING */}
        <section className="pt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <GitBranch className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Identity Branching</h2>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8 max-w-3xl">
            In modern developer ecosystems, primary names fragment into aliases. The following nodes are cryptographic equivalents to the primary Jitendra Singh identity:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" }
            ].map((alias) => (
              <Link
                key={alias.path}
                href={alias.path}
                className="group p-4 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all text-center"
              >
                <span className="text-sm font-medium text-zinc-700 group-hover:text-[#2563EB]">
                  {alias.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* GLOBAL FOOTPRINT */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <Globe2 className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Global Developer Footprint</h2>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8">
            Verifiable accounts and repositories that validate the technical contributions of this entity across the internet.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-zinc-500 group-hover:text-[#2563EB]" />
                <span className="font-medium text-zinc-700 group-hover:text-zinc-900">GitHub</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
            </a>
            <a
              href="https://dev.to/jitendrasingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-zinc-500 group-hover:text-[#2563EB]" />
                <span className="font-medium text-zinc-700 group-hover:text-zinc-900">Dev.to</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
            </a>
            <a
              href="https://medium.com/@i.jitendra.singh0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-zinc-500 group-hover:text-[#2563EB]" />
                <span className="font-medium text-zinc-700 group-hover:text-zinc-900">Medium</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
            </a>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Verify the Identity</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Connect with the real Jitendra Singh Nimod across platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jitendra-singh07"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </section>

        {/* BOTTOM SOCIAL */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
          <a href="https://github.com/jitendra-math" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/jitendra-singh07" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/jitendra.07_7" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </article>
    </main>
  );
}
