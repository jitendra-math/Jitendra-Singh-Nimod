// src/app/jitendra-singh-shekhawat-rajput/page.js
// Ultra-premium light theme identity page

import Link from "next/link";
import Image from "next/image";
import {
  Crown,
  Code2,
  MapPin,
  Users,
  Globe,
  Sparkles,
  Fingerprint,
  Award,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
  Shield,
  BookOpen,
  Compass,
  Star,
  Hash,
  ExternalLink
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh Shekhawat Rajput | JS Shekhawat | Full Stack Developer",
  description:
    "Jitendra Singh Shekhawat Rajput, also known as Jitendra Singh Nimod, JS Shekhawat and Jitu Shekhawat, is a Full Stack Developer from Rajasthan, India. Founder of JSS Originals.",
  keywords: [
    "Jitendra Singh Shekhawat Rajput",
    "JS Shekhawat",
    "Jitu Shekhawat",
    "Jitendra Singh Nimod",
    "Shekhawat Rajput developer",
    "Rajput developer Rajasthan",
    "JSS Originals founder",
    "Full Stack Developer Shekhawat"
  ],
  alternates: { canonical: "/jitendra-singh-shekhawat-rajput" },
  openGraph: {
    title: "Jitendra Singh Shekhawat Rajput – Developer Identity",
    description:
      "Official identity page for Jitendra Singh Shekhawat Rajput, also known as JS Shekhawat and Jitendra Singh Nimod.",
    images: [{ url: "/images/og/shekhawat-rajput-og.jpg", width: 1200, height: 630 }],
  },
};

export default function ShekhawatRajputPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Shekhawat Rajput",
    alternateName: ["Jitendra Singh Nimod", "JS Shekhawat", "Jitu Shekhawat", "Jitendra Rajput"],
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Developer from Rajasthan, India, known for modern web development and digital identity websites. Founder of JSS Originals.",
    url: "https://me.jitubanna.com/jitendra-singh-shekhawat-rajput",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://instagram.com/jitendra.07_7",
      "https://linkedin.com/in/jitendra-singh07"
    ]
  };

  const knownAs = [
    { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod", icon: Crown },
    { name: "JS Shekhawat", path: "/js-shekhawat", icon: Fingerprint },
    { name: "Jitu Shekhawat", path: "/jitu-shekhawat", icon: Hash },
    { name: "Jitendra Rajput", path: "/jitendra-rajput", icon: Users },
    { name: "Jitu Singh", path: "/jitu-singh", icon: Star },
  ];

  const workAreas = [
    { name: "Full Stack Development", icon: Code2, desc: "End-to-end web applications" },
    { name: "Next.js Expert", icon: Globe, desc: "Modern React framework" },
    { name: "Personal Brand Websites", icon: Sparkles, desc: "Identity-first design" },
    { name: "SEO Optimization", icon: Award, desc: "Search engine visibility" },
    { name: "Digital Identity", icon: Fingerprint, desc: "Professional presence" },
  ];

  const locations = [
    { name: "Nimod Village", path: "/location/nimod-village", icon: MapPin },
    { name: "Kuchaman City", path: "/location/kuchaman-city", icon: MapPin },
    { name: "Didwana", path: "/location/didwana-rajasthan", icon: MapPin },
    { name: "Shekhawat Nimod", path: "/shekhawat-nimod", icon: MapPin },
    { name: "Rajput Nimod", path: "/rajput-nimod", icon: MapPin },
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
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-6">
              <Crown className="w-4 h-4" />
              <span>Shekhawat Rajput Identity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
              Jitendra Singh{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
                Shekhawat Rajput
              </span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Also known as <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong>,{' '}
              <strong>JS Shekhawat</strong> and <strong>Jitu Shekhawat</strong>. 
              A Full Stack Web Developer and student from Rajasthan, India. Founder of{' '}
              <strong className="text-[#2563EB]">JSS Originals</strong>.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
              <Link
                href="/developer-profile"
                className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
              >
                Developer Profile
              </Link>
              <Link
                href="/official-website-jitendra-singh-nimod"
                className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:bg-zinc-50 hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              >
                Official Website
              </Link>
              <a
                href="https://wa.me/919549626202"
                target="_blank"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/main/jitendra-singh-nimod.jpg"
                alt="Jitendra Singh Shekhawat Rajput"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
            <Users className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Identity</p>
            <p className="font-medium text-zinc-800 text-sm">Shekhawat Rajput</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
            <Code2 className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Work</p>
            <p className="font-medium text-zinc-800 text-sm">Full Stack Dev</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
            <MapPin className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Village</p>
            <p className="font-medium text-zinc-800 text-sm">Nimod, Rajasthan</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
            <Award className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Brand</p>
            <p className="font-medium text-zinc-800 text-sm">JSS Originals</p>
          </div>
        </div>
      </section>

      {/* ===== GRID SECTIONS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Known As Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Crown className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800">Known As</h3>
            </div>
            <ul className="space-y-3">
              {knownAs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2563EB]/5 group/item"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-zinc-400 group-hover/item:text-[#2563EB]" />
                        <span className="text-sm text-zinc-600 group-hover/item:text-zinc-900">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/item:text-[#2563EB]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Work Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Code2 className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800">Work & Expertise</h3>
            </div>
            <ul className="space-y-4">
              {workAreas.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1.5 bg-[#2563EB]/10 rounded-lg mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-800">{item.name}</p>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* From Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800">From</h3>
            </div>
            <ul className="space-y-3">
              {locations.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2563EB]/5 group/item"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-zinc-400 group-hover/item:text-[#2563EB]" />
                        <span className="text-sm text-zinc-600 group-hover/item:text-zinc-900">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/item:text-[#2563EB]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Identity Badges */}
        <section className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">
            #JitendraSinghShekhawatRajput
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
            #JSShekhawat
          </span>
          <span className="px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
            #JituShekhawat
          </span>
          <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
            #JitendraRajput
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
            #NimodRajasthan
          </span>
        </section>

        {/* Long SEO Content */}
        <section className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
            About Jitendra Singh Shekhawat Rajput
          </h2>
          
          <div className="prose prose-zinc max-w-none space-y-4">
            <p className="text-zinc-600 leading-relaxed">
              <strong className="text-[#2563EB]">Jitendra Singh Shekhawat Rajput</strong> is a developer and student from
              Rajasthan, India. He is widely known on the internet as{' '}
              <strong>Jitendra Singh Nimod</strong> and <strong>JS Shekhawat</strong>. Many users search him using names like
              Jitu Shekhawat, Jitendra Rajput and Jitu Singh.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              He is associated with <strong className="text-[#2563EB]">Nimod village, Kuchaman City and Didwana</strong>{' '}
              region. His digital identity focuses on web development, technology and modern website creation. He is also the
              founder of <strong>JSS Originals</strong> digital brand.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              This page connects search terms like{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Singh Shekhawat Rajput</span>,{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Singh Nimod</span>,{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">JS Shekhawat</span> and{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitu Shekhawat</span>{' '}
              so that search engines can understand they refer to the same person.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Me</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Have a project? Want to collaborate? Reach out anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
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

        {/* Bottom Social */}
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

      </section>
    </main>
  );
}
