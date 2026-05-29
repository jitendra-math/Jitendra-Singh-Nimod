// src/app/jitendra-singh/page.js
// Ultra-modern light theme – emerald/amber, removed Global Footprint & Verify Identity sections

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
    <main className="relative min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Masked background blobs – modern emerald/amber */}
      <div
        className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
        }}
      />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(#10b981_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none" />

      {/* HERO SECTION */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full text-emerald-700 text-[11px] font-medium tracking-wider uppercase mb-6">
          <Search className="w-3.5 h-3.5" />
          <span>Entity Disambiguation Record</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-800 mb-5 leading-tight tracking-tight">
          Jitendra Singh
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 text-2xl md:text-3xl lg:text-4xl mt-1">
            The Developer Entity
          </span>
        </h1>
        <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect,
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-16 pb-20">
        {/* DISAMBIGUATION CARD */}
        <section>
          <div className="bg-white/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-center">
            <div className="p-3 bg-emerald-100 rounded-full shrink-0">
              <ShieldAlert className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">The Global Name Collision</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                "Jitendra Singh" is a globally prevalent identifier shared by politicians,
                entrepreneurs, and public figures. This page serves as a cryptographic semantic
                anchor to explicitly isolate and define{" "}
                <strong className="text-emerald-600 font-medium">
                  Jitendra Singh Nimod
                </strong> within the context of technology, software engineering, and web
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE & ARCHITECTURE */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-1.5 bg-emerald-100 rounded-md">
              <User className="w-4 h-4 text-emerald-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">
              Profile & Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group bg-white/70 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-6 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="p-2.5 bg-emerald-100 rounded-lg w-fit mb-4 group-hover:bg-emerald-500 transition-all">
                <BrainCircuit className="w-5 h-5 text-emerald-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-zinc-800 mb-2">Mathematical Logic Foundation</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Rooted in B.Sc Mathematics (PCM). This training provides an uncompromising logical foundation for algorithm design, state management, and scalable systems.
              </p>
            </div>
            <div className="group bg-white/70 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-6 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="p-2.5 bg-amber-100 rounded-lg w-fit mb-4 group-hover:bg-amber-500 transition-all">
                <Terminal className="w-5 h-5 text-amber-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-zinc-800 mb-2">Full Stack Engineering</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Operating out of Rajasthan, focusing on PWAs, premium UI/UX, and complex authentication architectures using modern frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK with hover stat */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-amber-50 to-transparent rounded-2xl" />
          <div className="relative bg-white/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-emerald-100 rounded-md">
                <Code2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">The Technical Stack</h2>
            </div>
            <p className="text-sm text-zinc-500 mb-6 max-w-2xl">
              When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js", "React", "Node.js", "Tailwind CSS", "SEO", "Auth Systems"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs text-zinc-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Hover stat – pure CSS */}
            <div className="relative mt-4 pt-4 border-t border-neutral-200/60">
              <div className="flex items-center gap-3 text-xs text-zinc-400 group/stats cursor-pointer">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span className="group-hover/stats:text-emerald-600 transition-colors">
                  Hover to see live contribution mask →
                </span>
                <div className="relative overflow-hidden h-5 group-hover/stats:max-w-[200px] max-w-0 transition-all duration-300">
                  <span className="whitespace-nowrap text-emerald-600 font-mono text-xs">
                    27+ repos · 4.2k commits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTITY BRANCHING */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-emerald-100 rounded-md">
              <GitBranch className="w-4 h-4 text-emerald-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-800">Identity Branching</h2>
          </div>
          <p className="text-sm text-zinc-500 mb-6 max-w-3xl">
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
                className="group p-3 bg-white/70 backdrop-blur-sm border border-neutral-200/80 rounded-lg hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all text-center"
              >
                <span className="text-xs font-medium text-zinc-600 group-hover:text-emerald-600">
                  {alias.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SOCIAL LINKS (compact, at bottom) */}
        <div className="flex flex-wrap justify-center gap-5 pt-8 pb-4">
          <a href="https://github.com/jitendra-math" className="text-zinc-400 hover:text-emerald-600 transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/jitendra-singh07" className="text-zinc-400 hover:text-emerald-600 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/jitendra.07_7" className="text-zinc-400 hover:text-emerald-600 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-emerald-600 transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </article>
    </main>
  );
}