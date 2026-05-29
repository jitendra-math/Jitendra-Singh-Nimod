// src/app/jitendra-singh/page.js
// Premium indigo/fuchsia theme – no styled-jsx, fully server component

import Link from "next/link";
import {
  User,
  ShieldAlert,
  Terminal,
  BrainCircuit,
  Code2,
  GitBranch,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
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
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Masked background blobs – indigo + fuchsia */}
      <div
        className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
        }}
      />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-500/10 blur-[150px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(#6366f1_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none" />

      {/* HERO SECTION – with availability banner */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-12 text-center">
        {/* Availability Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-200 shadow-sm mb-8 mx-auto">
          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-xs font-medium text-indigo-700 tracking-wide">Currently Available for Opportunities</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 rounded-full text-indigo-700 text-[11px] font-medium tracking-wider uppercase mb-6 mx-auto">
          <Search className="w-3.5 h-3.5" />
          <span>The Developer Entity</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-5 leading-tight tracking-tight">
          Jitendra Singh
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl mt-1">
            The Developer Entity
          </span>
        </h1>

        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect,
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-16 pb-16">
        
        {/* DISAMBIGUATION – plain section */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldAlert className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">The Global Name Collision</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto">
            "Jitendra Singh" is a globally prevalent identifier shared by politicians,
            entrepreneurs, and public figures. This page serves as a cryptographic semantic
            anchor to explicitly isolate and define{" "}
            <strong className="text-indigo-600 font-medium">Jitendra Singh Nimod</strong>{" "}
            within the context of technology, software engineering, and web infrastructure.
          </p>
        </section>

        {/* PROFILE & ARCHITECTURE – cards */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="p-1.5 bg-indigo-100 rounded-md">
              <User className="w-4 h-4 text-indigo-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              Profile & Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl p-6 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all text-center">
              <div className="p-2.5 bg-indigo-100 rounded-lg w-fit mb-4 mx-auto group-hover:bg-indigo-500 transition-all">
                <BrainCircuit className="w-5 h-5 text-indigo-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-slate-800 mb-2">Mathematical Logic Foundation</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Rooted in B.Sc Mathematics (PCM). This training provides an uncompromising logical foundation for algorithm design, state management, and scalable systems.
              </p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl p-6 hover:bg-white hover:border-fuchsia-200 hover:shadow-md transition-all text-center">
              <div className="p-2.5 bg-fuchsia-100 rounded-lg w-fit mb-4 mx-auto group-hover:bg-fuchsia-500 transition-all">
                <Terminal className="w-5 h-5 text-fuchsia-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-slate-800 mb-2">Full Stack Engineering</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Operating out of Rajasthan, focusing on PWAs, premium UI/UX, and complex authentication architectures using modern frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK – plain section */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">The Technical Stack</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 max-w-2xl mx-auto">
            When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {["Next.js", "React", "Node.js", "Tailwind CSS", "SEO", "Auth Systems"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Hover stat */}
          <div className="relative pt-4 border-t border-slate-200/60 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 text-xs text-slate-400 group/stats cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
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
        </section>

        {/* IDENTITY BRANCHING – plain links with arrow */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Identity Branching</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 max-w-3xl mx-auto">
            In modern developer ecosystems, primary names fragment into aliases. The following nodes are cryptographic equivalents to the primary Jitendra Singh identity:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
            ].map((alias) => (
              <Link
                key={alias.path}
                href={alias.path}
                className="group inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
              >
                {alias.name}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/60 mt-8 py-8 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© {new Date().getFullYear()} Jitendra Singh Nimod</span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span>Verified Digital Identity</span>
          </div>
          <span>Last updated: {lastUpdated}</span>
        </div>
      </footer>
    </main>
  );
}