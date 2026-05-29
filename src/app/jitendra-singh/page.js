// src/app/jitendra-singh/page.js
// Premium Teal & Gold – with info table, no commit stat

import Link from "next/link";
import {
  User,
  ShieldAlert,
  Terminal,
  BrainCircuit,
  Code2,
  GitBranch,
  Search,
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
    <main className="relative min-h-screen bg-[#FCF9F2] overflow-x-hidden">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Masked background blobs – Teal & Gold */}
      <div
        className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#035352]/10 blur-[130px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 40%, black 30%, transparent 80%)",
        }}
      />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C9A84C]/10 blur-[150px] rounded-full pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 60%, black 30%, transparent 80%)",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(#C9A84C_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

      {/* HERO SECTION */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F3E8BC] rounded-full text-[#035352] text-[11px] font-medium tracking-wider uppercase mb-6 mx-auto">
          <Search className="w-3.5 h-3.5" />
          <span>Entity Disambiguation Record</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E1E1E] mb-5 leading-tight tracking-tight">
          Jitendra Singh
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#035352] to-[#C9A84C] text-2xl md:text-3xl lg:text-4xl mt-1">
            The Developer Entity
          </span>
        </h1>
        <p className="text-sm md:text-base text-[#6B6B6B] max-w-2xl mx-auto font-light">
          A common name across the globe, isolated here to define a specific digital architect,
          mathematician, and full-stack engineer from Rajasthan, India.
        </p>
      </header>

      {/* INFO TABLE – mobile-first, responsive */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 mt-6 mb-12">
        <div className="bg-white/90 backdrop-blur-sm border border-[#F3E8BC] rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-[#F3E8BC]">
            {[
              { label: "Name", value: "Jitendra Singh Nimod" },
              { label: "Profession", value: "Full Stack Web Developer" },
              { label: "Organization", value: "Founder, JSS Originals" },
              { label: "Location", value: "Rajasthan, India" },
              { label: "Website", value: <a href="https://jitubanna.com" target="_blank" rel="noopener noreferrer" className="text-[#035352] hover:text-[#C9A84C] transition-colors underline-offset-2 hover:underline">jitubanna.com</a> },
              { label: "Email", value: <a href="mailto:contact@jitubanna.com" className="text-[#035352] hover:text-[#C9A84C] transition-colors">contact@jitubanna.com</a> },
              { label: "GitHub", value: <a href="https://github.com/jitendra-math" target="_blank" rel="noopener noreferrer" className="text-[#035352] hover:text-[#C9A84C] transition-colors">@jitendra-math</a> },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <div className="w-full sm:w-1/3 text-sm font-semibold text-[#035352] mb-1 sm:mb-0">
                  {item.label}
                </div>
                <div className="w-full sm:w-2/3 text-sm text-[#1E1E1E] break-words">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-16 pb-24">
        
        {/* DISAMBIGUATION */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldAlert className="w-5 h-5 text-[#C9A84C]" />
            <h2 className="text-xl md:text-2xl font-semibold text-[#035352]">The Global Name Collision</h2>
          </div>
          <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto">
            "Jitendra Singh" is a globally prevalent identifier shared by politicians,
            entrepreneurs, and public figures. This page serves as a cryptographic semantic
            anchor to explicitly isolate and define{" "}
            <strong className="text-[#035352] font-medium">Jitendra Singh Nimod</strong>{" "}
            within the context of technology, software engineering, and web infrastructure.
          </p>
        </section>

        {/* PROFILE & ARCHITECTURE (cards) */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="p-1.5 bg-[#F3E8BC] rounded-md">
              <User className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#035352]">
              Profile & Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group bg-white/90 backdrop-blur-sm border border-[#F3E8BC] rounded-xl p-6 hover:border-[#C9A84C] hover:shadow-md transition-all text-center">
              <div className="p-2.5 bg-[#F3E8BC] rounded-lg w-fit mb-4 mx-auto group-hover:bg-[#035352] transition-all">
                <BrainCircuit className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-[#1E1E1E] mb-2">Mathematical Logic Foundation</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Rooted in B.Sc Mathematics (PCM). This training provides an uncompromising logical foundation for algorithm design, state management, and scalable systems.
              </p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm border border-[#F3E8BC] rounded-xl p-6 hover:border-[#C9A84C] hover:shadow-md transition-all text-center">
              <div className="p-2.5 bg-[#F3E8BC] rounded-lg w-fit mb-4 mx-auto group-hover:bg-[#035352] transition-all">
                <Terminal className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition" />
              </div>
              <h3 className="text-md font-semibold text-[#1E1E1E] mb-2">Full Stack Engineering</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Operating out of Rajasthan, focusing on PWAs, premium UI/UX, and complex authentication architectures using modern frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK – plain section (no hover stat) */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-[#C9A84C]" />
            <h2 className="text-xl md:text-2xl font-semibold text-[#035352]">The Technical Stack</h2>
          </div>
          <p className="text-sm text-[#6B6B6B] mb-6 max-w-2xl mx-auto">
            When the name "Jitendra Singh" appears alongside these technologies, it definitively points to this specific developer profile:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Next.js", "React", "Node.js", "Tailwind CSS", "SEO", "Auth Systems"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border border-[#F3E8BC] rounded-full text-xs text-[#1E1E1E] hover:bg-[#035352] hover:text-white hover:border-[#C9A84C] transition-all cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* IDENTITY BRANCHING – plain links */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-[#C9A84C]" />
            <h2 className="text-xl md:text-2xl font-semibold text-[#035352]">Identity Branching</h2>
          </div>
          <p className="text-sm text-[#6B6B6B] mb-6 max-w-3xl mx-auto">
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
                className="text-sm text-[#6B6B6B] hover:text-[#035352] transition-colors underline-offset-2 hover:underline decoration-[#C9A84C]"
              >
                {alias.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}