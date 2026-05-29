// src/app/jitendra-singh/page.js
// Ultra-premium light theme – fresh palette: Slate, Emerald, Indigo, Soft Cyan

import Link from "next/link";
import {
  User,
  ShieldAlert,
  Terminal,
  BrainCircuit,
  Code2,
  GitBranch,
  Search,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Sparkles,
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
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-x-hidden">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Masked background blobs – fresh colors: indigo + emerald */}
      <div
        className="fixed top-[-20%] left-[-20%] w-[800px] h-[800px] bg-indigo-400/15 blur-[140px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 30% 40%, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 40%, black 25%, transparent 75%)",
        }}
      />
      <div
        className="fixed bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-emerald-400/15 blur-[140px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 70% 60%, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 60%, black 25%, transparent 75%)",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(#64748B_0.6px,transparent_0.6px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      {/* ===== HERO SECTION ===== */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[11px] font-semibold tracking-wide uppercase mb-8 shadow-sm">
          <Search className="w-3.5 h-3.5" />
          <span>Entity Disambiguation Record</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
          Jitendra Singh
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 text-3xl md:text-4xl lg:text-5xl mt-2">
            The Developer Entity
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect,
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-20 pb-24">
        {/* DISAMBIGUATION CARD */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 bg-indigo-50 rounded-xl shrink-0">
              <ShieldAlert className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">The Global Name Collision</h2>
              <p className="text-slate-500 leading-relaxed">
                "Jitendra Singh" is a globally prevalent identifier shared by politicians,
                entrepreneurs, and public figures. This page serves as a cryptographic semantic
                anchor to explicitly isolate and define{" "}
                <strong className="text-indigo-600 font-medium">Jitendra Singh Nimod</strong>{" "}
                within the context of technology, software engineering, and web infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE & ARCHITECTURE */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 bg-indigo-50 rounded-md">
              <User className="w-5 h-5 text-indigo-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
              Profile & Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all">
              <div className="p-2.5 bg-indigo-50 rounded-lg w-fit mb-5 group-hover:bg-indigo-500 transition-all">
                <BrainCircuit className="w-5 h-5 text-indigo-500 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Mathematical Logic Foundation</h3>
              <p className="text-slate-500 leading-relaxed">
                Rooted in B.Sc Mathematics (PCM). This training provides an uncompromising logical foundation for algorithm design, state management, and scalable systems.
              </p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="p-2.5 bg-emerald-50 rounded-lg w-fit mb-5 group-hover:bg-emerald-500 transition-all">
                <Terminal className="w-5 h-5 text-emerald-500 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Full Stack Engineering</h3>
              <p className="text-slate-500 leading-relaxed">
                Operating out of Rajasthan, focusing on PWAs, premium UI/UX, and complex authentication architectures using modern frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK with hover stat */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-emerald-50/50 to-transparent rounded-2xl" />
          <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-1.5 bg-indigo-50 rounded-md">
                <Code2 className="w-5 h-5 text-indigo-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">The Technical Stack</h2>
            </div>
            <p className="text-slate-500 mb-6 max-w-2xl">
              When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js", "React", "Node.js", "Tailwind CSS", "SEO", "Auth Systems"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Hover stat – pure CSS */}
            <div className="relative mt-4 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-3 text-xs text-slate-400 group/stats cursor-pointer">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="group-hover/stats:text-indigo-600 transition-colors">
                  Hover to see live contribution mask →
                </span>
                <div className="relative overflow-hidden h-5 group-hover/stats:max-w-[200px] max-w-0 transition-all duration-300">
                  <span className="whitespace-nowrap text-indigo-600 font-mono text-xs">
                    27+ repos · 4.2k commits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTITY BRANCHING */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1.5 bg-indigo-50 rounded-md">
              <GitBranch className="w-5 h-5 text-indigo-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Identity Branching</h2>
          </div>
          <p className="text-slate-500 mb-6 max-w-3xl">
            In modern developer ecosystems, primary names fragment into aliases. The following nodes are cryptographic equivalents to the primary Jitendra Singh identity:
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
                className="group p-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-lg hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all text-center"
              >
                <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600">
                  {alias.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SOCIAL LINKS (only) – cleaned footer */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 pb-4 border-t border-slate-200/60 mt-8">
          <a href="https://github.com/jitendra-math" className="text-slate-400 hover:text-indigo-500 transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/jitendra-singh07" className="text-slate-400 hover:text-indigo-500 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/jitendra.07_7" className="text-slate-400 hover:text-indigo-500 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-slate-400 hover:text-indigo-500 transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </article>
    </main>
  );
}