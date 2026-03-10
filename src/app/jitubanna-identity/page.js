// src/app/jitubanna-identity/page.js
// Ultra-premium light theme page explaining the Jitubanna brand and its origins

import Link from "next/link";
import Image from "next/image";
import {
  Fingerprint,
  Crown,
  UserCircle,
  Globe2,
  Code2,
  ShieldCheck,
  Link2,
  ArrowRight,
  ExternalLink,
  MapPin,
  Sparkles,
  Heart,
  AtSign,
  Hash,
  Users,
  ChevronRight,
  BadgeCheck,
  Home,
  Compass,
  Star,
  Github, Linkedin, Instagram, Mail
} from "lucide-react";

export const metadata = {
  title: "The Identity Behind Jitubanna – Origin & Meaning | Jitendra Singh Nimod",
  description:
    "Explore the origin, cultural significance, and digital architecture of the 'Jitubanna' identity, the primary developer alias of Jitendra Singh Nimod (JS Nimod) from Rajasthan.",
  keywords: [
    "Jitubanna",
    "Jitubanna identity",
    "Jitu Banna meaning",
    "Jitu Banna developer",
    "Jitendra Singh Nimod alias",
    "Jitubanna domain",
    "Rajasthan developer alias"
  ],
  alternates: { canonical: "/jitubanna-identity" },
  openGraph: {
    title: "The Identity Behind Jitubanna",
    description:
      "Discover the cultural roots and digital significance of Jitubanna, the primary alias of developer Jitendra Singh Nimod.",
    images: [{ url: "/images/og/jitubanna-identity-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JitubannaIdentityPage() {
  // JSON‑LD tying the alias to the main person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh Nimod",
      "alternateName": ["Jitubanna", "Jitu Banna", "JS Nimod", "Jitu Nimod"],
      "description": "Jitubanna is the primary digital alias and personal brand of full stack developer Jitendra Singh Nimod from Rajasthan.",
      "url": "https://jitubanna.com",
      "sameAs": [
        "https://me.jitubanna.com",
        "https://github.com/jitendra-math",
        "https://instagram.com/jitendra.07_7"
      ]
    }
  };

  // Names linked to Jitubanna
  const linkedNames = [
    "Jitendra Singh Nimod",
    "Jitendra Nimod",
    "Jitu Nimod",
    "JS Nimod",
    "Jitu Banna"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium tracking-widest uppercase mb-8">
          <Fingerprint className="w-4 h-4" />
          <span>Nomenclature & Brand Identity</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6 leading-tight">
          The Anatomy of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-purple-500 to-amber-500">
            Jitubanna
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto font-light">
          A convergence of cultural heritage and modern digital architecture. Discover the origin of the primary alias used by{' '}
          <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> across the global web.
        </p>
      </header>

      {/* ===== INTRODUCTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light">
            Across the internet, developers curate aliases that represent their digital footprint.{' '}
            <strong className="text-[#2563EB]">Jitubanna</strong> is not just a username; it is the definitive personal brand and foundational identity 
            connected with full‑stack developer <strong className="text-zinc-800">Jitendra Singh Nimod</strong>.
          </p>
        </div>
      </section>

      {/* ===== ETYMOLOGY / ORIGIN ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="p-2 bg-[#2563EB]/10 rounded-lg">
            <Crown className="w-5 h-5 text-[#2563EB]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">The Etymology</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Jitu */}
          <div className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 text-center hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all">
            <span className="block text-5xl md:text-6xl font-bold text-zinc-800 mb-4">Jitu</span>
            <p className="text-sm text-zinc-500 max-w-xs mx-auto">
              A globally recognized, approachable shorthand for the given name <strong className="text-[#2563EB]">Jitendra</strong>. It serves as the primary hook for social and digital recall.
            </p>
          </div>

          {/* Plus */}
          <div className="text-center text-4xl font-light text-zinc-400">+</div>

          {/* Banna */}
          <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 text-center hover:bg-white hover:border-amber-300 hover:shadow-xl transition-all">
            <span className="block text-5xl md:text-6xl font-bold text-amber-500 mb-4">Banna</span>
            <p className="text-sm text-zinc-500 max-w-xs mx-auto">
              A cultural honorific from Rajasthan, conveying respect within Rajput communities. It anchors the digital identity to a specific geographic and cultural reality.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-block bg-gradient-to-br from-[#2563EB]/10 via-purple-500/10 to-amber-500/10 p-6 rounded-3xl border border-zinc-200">
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-amber-500 mb-2">
              Jitu + Banna = Jitubanna
            </p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Digital Identity</p>
          </div>
        </div>

        <p className="mt-8 text-zinc-600 text-center max-w-2xl mx-auto leading-relaxed">
          When fused, these elements forge a unique digital identity that seamlessly honors regional roots while establishing a modern, memorable brand on the internet.
        </p>
      </section>

      {/* ===== WHY JITUBANNA? ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 via-purple-500/5 to-amber-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#2563EB]" />
            Why "Jitubanna"?
          </h2>
          <p className="text-zinc-600 mb-4">
            The name <strong className="text-[#2563EB]">Jitubanna</strong> was chosen deliberately. "Jitu" makes the developer approachable and easy to remember, while "Banna" pays homage to his Rajasthani heritage. It's a name that travels well – familiar enough for global tech communities, yet deeply rooted in local culture.
          </p>
          <p className="text-zinc-600">
            In a digital world where authenticity matters, Jitubanna stands out as a brand that is both personal and professional. It's the name you'll find on GitHub commits, Medium articles, and the domain that hosts his portfolio.
          </p>
        </div>
      </section>

      {/* ===== ALIAS RESOLUTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-800">Entity Resolution</h2>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Search algorithms and users querying "Jitubanna" are frequently routed to the same core entity. This alias acts as an umbrella for a cluster of interconnected names.
            </p>
            <div className="flex flex-wrap gap-2">
              {linkedNames.map((name, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm rounded-full">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <Globe2 className="w-12 h-12 text-white/80 mb-4" />
            <h3 className="text-sm font-medium text-white/70 uppercase tracking-widest mb-2">The Flagship Domain</h3>
            <p className="text-3xl font-bold mb-4">jitubanna.com</p>
            <p className="text-white/80 leading-relaxed mb-6">
              Secured as the primary digital real estate, this domain serves as the definitive portfolio and future nexus for all ventures under the Jitubanna brand.
            </p>
            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all"
            >
              Visit Flagship Domain <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== THE ARCHITECT ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#2563EB]/10 rounded-lg">
            <Code2 className="w-5 h-5 text-[#2563EB]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">The Architect Behind the Alias</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8">
            <p className="text-zinc-600 leading-relaxed mb-4">
              <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> architects modern web platforms, utilizing advanced frameworks to build progressive web apps and high-performance digital systems.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              His portfolio encompasses everything from authentication ecosystems to complex UI/UX engineering, driven by a foundational background in B.Sc Mathematics logic. He operates from Nimod Village, Rajasthan, bringing a unique perspective to every project.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <MapPin className="w-8 h-8 text-[#2563EB] mb-4" />
            <h3 className="text-zinc-800 font-medium mb-2">Operating Base</h3>
            <p className="text-sm text-zinc-500">Nimod Village, Kuchaman City, Rajasthan, India</p>
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM PRESENCE ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#2563EB]/10 rounded-lg">
            <Link2 className="w-5 h-5 text-[#2563EB]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Ecosystem Presence</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "GitHub", url: "https://github.com/jitendra-math" },
            { name: "Medium", url: "https://medium.com/@i.jitendra.singh0" },
            { name: "Dev.to", url: "https://dev.to/jitendrasingh" },
            { name: "X (Twitter)", url: "https://x.com/jitendranimod" },
            { name: "Instagram", url: "https://instagram.com/jitendra.07_7" }
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-2"
            >
              <span className="text-sm font-medium text-zinc-700 group-hover:text-[#2563EB]">{link.name}</span>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
            </a>
          ))}
        </div>
      </section>

      {/* ===== CONNECTED ALIASES ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <AtSign className="w-5 h-5 text-[#2563EB]" />
            Connected Aliases
          </h2>
          <p className="text-zinc-600 mb-6">
            All these names are cryptographically linked to the same human entity, ensuring unified search engine indexing.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
              { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
              { name: "Jitu Banna", path: "/identity/jitu-banna" },
              { name: "Jitubanna", path: "/jitubanna" }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm hover:bg-[#2563EB] hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PURPOSE ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">Why This Document Exists</h2>
          <p className="text-zinc-600 leading-relaxed">
            In modern web architecture, identity fragmentation harms discoverability. This specific page is a programmatic and semantic anchor. It explicitly instructs search engines (via JSON‑LD and structured content) that the query <em className="text-[#2563EB] font-medium">"Jitubanna"</em> and <em className="text-[#2563EB] font-medium">"Jitendra Singh Nimod"</em> resolve to the exact same human entity, unifying the digital footprint into a single, unbreakable authoritative source.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM SOCIAL ===== */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8">
        <a href="https://jitubanna.com" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Globe2 className="w-6 h-6" />
        </a>
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

      {/* ===== FOOTER NOTE ===== */}
      <div className="relative z-10 text-center text-xs text-zinc-400 mt-16">
        <Heart className="w-3 h-3 inline text-rose-400" /> Jitubanna – Where culture meets code
      </div>
    </main>
  );
}
