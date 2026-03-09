// src/app/complete-digital-identity-of-jitendra-singh-nimod/page.js
// Ultra-premium light theme complete digital identity overview

import Link from "next/link";
import Image from "next/image";
import {
  Network,
  UserCircle,
  Code2,
  GraduationCap,
  Fingerprint,
  MapPin,
  Library,
  Link as LinkIcon,
  ChevronRight,
  Globe,
  Sparkles,
  Award,
  Users,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Star,
  Hash,
  Compass,
  Briefcase,
  School,
  Home,
  Heart
} from "lucide-react";

export const metadata = {
  title: "The Complete Digital Identity of Jitendra Singh Nimod | Architecture",
  description:
    "An exhaustive overview of the digital ecosystem, developer presence, and identity nodes of Jitendra Singh Nimod (JS Nimod). Full Stack Developer from Rajasthan.",
  keywords: [
    "Jitendra Singh Nimod Digital Identity",
    "JS Nimod Ecosystem",
    "Jitubanna Portfolio",
    "Full Stack Developer Presence",
    "Rajasthan Developer Identity"
  ],
  alternates: { canonical: "/complete-digital-identity-of-jitendra-singh-nimod" },
  openGraph: {
    title: "Complete Digital Identity – Jitendra Singh Nimod",
    description:
      "A centralized mapping of the digital ecosystem of Jitendra Singh Nimod (JS Nimod), connecting personal information, regional anchors, and developer frameworks.",
    images: [{ url: "/images/og/complete-identity-og.jpg", width: 1200, height: 630 }],
  },
};

export default function CompleteIdentityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh Nimod",
      "alternateName": ["Jitu Nimod", "JS Nimod", "Jitubanna", "Jitendra Singh"],
      "jobTitle": "Full Stack Developer",
      "url": "https://me.jitubanna.com",
      "sameAs": [
        "https://github.com/jitendra-math",
        "https://linkedin.com/in/jitendra-singh07",
        "https://instagram.com/jitendra.07_7"
      ]
    }
  };

  const corePlatforms = [
    {
      title: "Developer Profile",
      desc: "Technical architecture, expertise in Next.js, React, Node.js, and modern web frameworks.",
      icon: Code2,
      link: "/developer-profile",
      color: "blue"
    },
    {
      title: "Student Profile",
      desc: "B.Sc Mathematics (PCM) foundation, analytical logic applied to programming.",
      icon: GraduationCap,
      link: "/student-profile",
      color: "purple"
    },
    {
      title: "About Page",
      desc: "Personal story, journey from Nimod village to web development.",
      icon: UserCircle,
      link: "/about",
      color: "amber",
      fullWidth: true
    }
  ];

  const identityNodes = [
    { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
    { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
    { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
    { name: "JS Nimod", path: "/identity/js-nimod" },
    { name: "Nimod Jitu", path: "/identity/nimod-jitu" },
    { name: "Nimod JS", path: "/identity/nimod-js" },
  ];

  const regionalAnchors = [
    { name: "Nimod Village", path: "/location/nimod-village", icon: Home },
    { name: "Kuchaman City", path: "/location/kuchaman-city", icon: MapPin },
    { name: "Didwana Rajasthan", path: "/location/didwana-rajasthan", icon: MapPin },
    { name: "Jitendra Singh Kuchaman City", path: "/jitendra-singh-kuchaman-city", icon: MapPin },
    { name: "Jitendra Singh Didwana", path: "/jitendra-singh-didwana", icon: MapPin },
    { name: "Kuchaman Web Developer", path: "/kuchaman-web-developer", icon: Code2 },
    { name: "Didwana Developer", path: "/didwana-developer", icon: Code2 },
  ];

  const blogPosts = [
    { name: "Who is Jitendra Nimod?", path: "/blog/who-is-jitendra-nimod" },
    { name: "My Journey as a Developer", path: "/blog/my-journey-as-developer" },
    { name: "Full Stack Developer Rajasthan", path: "/blog/full-stack-developer-rajasthan" },
    { name: "Best Friend Story", path: "/blog/best-friend-of-jitendra-singh-nimod" },
    { name: "Why Personal Websites Matter", path: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era" },
  ];

  const externalLinks = [
    { name: "GitHub", url: "https://github.com/jitendra-math", icon: Github },
    { name: "Dev.to", url: "https://dev.to/jitendrasingh", icon: Code2 },
    { name: "Medium", url: "https://medium.com/@i.jitendra.singh0", icon: BookOpen },
    { name: "LinkedIn", url: "https://linkedin.com/in/jitendra-singh07", icon: Linkedin },
    { name: "Instagram", url: "https://instagram.com/jitendra.07_7", icon: Instagram },
  ];

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
          <Network className="w-4 h-4" />
          <span>Platform Architecture</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6 leading-tight">
          The Complete Digital Identity of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
            Jitendra Singh Nimod
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto font-light">
          A centralized mapping of the digital ecosystem, connecting personal information, regional anchors, 
          and developer frameworks across the internet.
        </p>
      </header>

      {/* ===== INTRODUCTION LEAD ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="text-lg md:text-xl text-zinc-600 border-l-4 border-[#2563EB] pl-6">
            <p className="mb-4">
              The official website of <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> serves as the nexus 
              of a broader digital footprint. It is meticulously designed to provide a structured overview of the developer 
              behind aliases like <strong>Jitu Nimod</strong>, <strong>JS Nimod</strong>, and <strong>Jitubanna</strong>.
            </p>
            <p className="text-zinc-500">
              By architecting this platform, the goal is to create seamless contextual mapping for search engines and 
              developer communities, bridging the gap between isolated projects and a unified online identity.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CORE PLATFORM SEGMENTS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#2563EB]/10 rounded-lg">
            <UserCircle className="w-5 h-5 text-[#2563EB]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Core Platform Segments</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {corePlatforms.map((platform, i) => {
            const Icon = platform.icon;
            const isFullWidth = platform.fullWidth;
            return (
              <div
                key={i}
                className={`${isFullWidth ? 'md:col-span-2' : ''} bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group`}
              >
                <div className={`p-3 bg-${platform.color}-100 rounded-xl w-fit mb-6 group-hover:scale-110 transition`}>
                  <Icon className={`w-6 h-6 text-${platform.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-3">{platform.title}</h3>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">{platform.desc}</p>
                <Link
                  href={platform.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:gap-2 transition-all"
                >
                  Explore {platform.title} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== IDENTITY NODES ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 via-purple-500/5 to-transparent rounded-3xl p-8 md:p-10 border border-zinc-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Fingerprint className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-800">Identity Nodes</h2>
          </div>

          <p className="text-zinc-600 mb-8 max-w-2xl leading-relaxed">
            These dedicated pages resolve alias fragmentation. They programmatically instruct search engines that 
            multiple variations of the name resolve to a single authoritative entity.
          </p>

          <div className="flex flex-wrap gap-3">
            {identityNodes.map((node) => (
              <Link
                key={node.path}
                href={node.path}
                className="px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full text-sm text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-sm"
              >
                {node.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO COLUMN: REGIONAL + BLOG ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 mb-20">
        
        {/* Regional Anchors */}
        <section className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-100 rounded-lg">
              <MapPin className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800">Regional Anchors</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            Establishing geographical relevance within Rajasthan, embedding local roots into the global digital identity.
          </p>
          <ul className="space-y-2">
            {regionalAnchors.slice(0, 5).map((loc, i) => {
              const Icon = loc.icon;
              return (
                <li key={i}>
                  <Link
                    href={loc.path}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#2563EB]/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                      <span className="text-sm text-zinc-600 group-hover:text-zinc-900">{loc.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/location"
            className="inline-flex items-center gap-1 text-sm text-[#2563EB] mt-4 hover:gap-2 transition-all"
          >
            View all locations <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Thought Leadership */}
        <section className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Library className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800">Thought Leadership</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            Articles documenting the evolutionary journey from mathematics to full-stack engineering.
          </p>
          <ul className="space-y-2">
            {blogPosts.map((post, i) => (
              <li key={i}>
                <Link
                  href={post.path}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#2563EB]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                    <span className="text-sm text-zinc-600 group-hover:text-zinc-900">{post.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[#2563EB] mt-4 hover:gap-2 transition-all"
          >
            Read all articles <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      </div>

      {/* ===== EXTERNAL ECOSYSTEM ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-white/80" />
            <h2 className="text-2xl md:text-3xl font-bold">The External Ecosystem</h2>
          </div>
          <p className="text-white/80 max-w-2xl mb-8">
            Verifiable accounts and repositories that validate the technical contributions across the internet.
          </p>

          <div className="flex flex-wrap gap-4">
            {externalLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white hover:text-[#2563EB] transition-all group"
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONNECT CTA ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">Explore the Complete Identity</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-8">
            From Nimod village to global digital presence – discover every facet of this developer's journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/developer-profile"
              className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
            >
              View Developer Profile
            </Link>
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM SOCIAL ===== */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8">
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
        <a href="https://x.com/jitendranimod" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* ===== FOOTER NOTE ===== */}
      <div className="relative z-10 text-center text-xs text-zinc-400 mt-16">
        <Heart className="w-3 h-3 inline text-rose-400" /> Built with precision in Rajasthan
      </div>
    </main>
  );
}
