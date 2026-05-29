"use client";

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
  Instagram,
  Sparkles,
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
    <main className="relative min-h-screen bg-[#faf9fe] overflow-x-hidden">
      {/* JSON‑LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Masked background blobs (CSS mask effect) --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2563EB]/10 blur-[130px] rounded-full pointer-events-none mask-gradient" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none mask-gradient-reverse" />
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-[0.02] pointer-events-none" />

      {/* --- HERO (reduced font size) --- */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-[11px] font-medium tracking-wider uppercase mb-6">
          <Search className="w-3.5 h-3.5" />
          <span>Entity Disambiguation Record</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-800 mb-5 leading-tight tracking-tight">
          Jitendra Singh
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600 text-2xl md:text-3xl lg:text-4xl mt-1">
            The Developer Entity
          </span>
        </h1>
        <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect,
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* --- MAIN (smaller text, softer cards) --- */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-16 pb-20">
        {/* DISAMBIGUATION CARD */}
        <section>
          <div className="bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-center">
            <div className="p-3 bg-[#2563EB]/10 rounded-full shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">The Global Name Collision</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                "Jitendra Singh" is a globally prevalent identifier shared by politicians,
                entrepreneurs, and public figures. This page serves as a cryptographic semantic
                anchor to explicitly isolate and define{" "}
                <strong className="text-[#2563EB] font-medium">
                  Jitendra Singh Nimod
                </strong> within the context of technology, software engineering, and web
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE + ARCHITECTURE (cards with masked hover effect) */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-1.5 bg-[#2563EB]/10 rounded-md">
              <User className="w-4 h-4 text-[#2563EB]" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">
              Profile & Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: BrainCircuit,
                title: "Mathematical Logic Foundation",
                desc: "Rooted in B.Sc Mathematics (PCM). This training provides an uncompromising logical foundation for algorithm design, state management, and scalable systems.",
                color: "blue",
              },
              {
                icon: Terminal,
                title: "Full Stack Engineering",
                desc: "Operating out of Rajasthan, focusing on PWAs, premium UI/UX, and complex authentication architectures using modern frameworks.",
                color: "purple",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition-all"
              >
                <div
                  className={`p-2.5 rounded-lg w-fit mb-4 transition-all ${
                    item.color === "blue"
                      ? "bg-[#2563EB]/10 group-hover:bg-[#2563EB]"
                      : "bg-purple-100 group-hover:bg-purple-500"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.color === "blue" ? "text-[#2563EB] group-hover:text-white" : "text-purple-600 group-hover:text-white"
                    } transition`}
                  />
                </div>
                <h3 className="text-md font-semibold text-zinc-800 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK – with interactive masked counter (new feature) */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-purple-500/5 to-transparent rounded-2xl" />
          <div className="relative bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-md">
                <Code2 className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">The Technical Stack</h2>
            </div>
            <p className="text-sm text-zinc-500 mb-6 max-w-2xl">
              When the name "Jitendra Singh" appears alongside these technologies, it definitively
              points to this specific developer profile:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Next.js",
                "React",
                "Node.js",
                "Tailwind CSS",
                "SEO",
                "Auth Systems",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-xs text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* NEW: Masked micro‑interaction – floating stat reveal */}
            <div className="relative mt-4 pt-4 border-t border-zinc-200/60">
              <div className="flex items-center gap-3 text-xs text-zinc-400 group/stats cursor-pointer">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="group-hover/stats:text-[#2563EB] transition-colors">
                  Hover to see live contribution mask →
                </span>
                <div className="relative overflow-hidden h-5 group-hover/stats:max-w-[200px] max-w-0 transition-all duration-300">
                  <span className="whitespace-nowrap text-[#2563EB] font-mono text-xs">
                    27+ repos · 4.2k commits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTITY BRANCHING – reduced font */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-[#2563EB]/10 rounded-md">
              <GitBranch className="w-4 h-4 text-[#2563EB]" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">Identity Branching</h2>
          </div>
          <p className="text-sm text-zinc-500 mb-6 max-w-3xl">
            In modern developer ecosystems, primary names fragment into aliases. The following
            nodes are cryptographic equivalents to the primary Jitendra Singh identity:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
            ].map((alias) => (
              <Link
                key={alias.path}
                href={alias.path}
                className="group p-3 bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-lg hover:bg-white hover:border-[#2563EB]/30 hover:shadow-sm transition-all text-center"
              >
                <span className="text-xs font-medium text-zinc-600 group-hover:text-[#2563EB]">
                  {alias.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* GLOBAL FOOTPRINT */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-[#2563EB]/10 rounded-md">
              <Globe2 className="w-4 h-4 text-[#2563EB]" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">Global Developer Footprint</h2>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            Verifiable accounts and repositories that validate the technical contributions of this
            entity across the internet.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "GitHub", url: "https://github.com/jitendra-math", icon: Github },
              { name: "Dev.to", url: "https://dev.to/jitendrasingh", icon: Terminal },
              { name: "Medium", url: "https://medium.com/@i.jitendra.singh0", icon: Database },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <platform.icon className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                  <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-800">
                    {platform.name}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA – cleaner, smaller */}
        <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Verify the Identity</h2>
          <p className="text-white/80 text-sm max-w-md mx-auto mb-6">
            Connect with the real Jitendra Singh Nimod across platforms.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/jitendra-math"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2563EB] text-sm font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-md"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/jitendra-singh07"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </section>

        {/* SOCIAL LINKS (compact) */}
        <div className="flex flex-wrap justify-center gap-5 pt-6 pb-4">
          <a href="https://github.com/jitendra-math" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/jitendra-singh07" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/jitendra.07_7" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </article>

      {/* Inline style for CSS mask (works on modern browsers) */}
      <style jsx>{`
        .mask-gradient {
          mask-image: radial-gradient(circle at 30% 40%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 30% 40%, black 30%, transparent 80%);
        }
        .mask-gradient-reverse {
          mask-image: radial-gradient(circle at 70% 60%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 70% 60%, black 30%, transparent 80%);
        }
      `}</style>
    </main>
  );
}