// app/location/page.js
// Hub page for all service locations – local and global

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Globe,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Compass,
  Star,
  Users,
  Building2,
  TreePine,
  Sun,
  Cloud,
} from "lucide-react";

export const metadata = {
  title: "Service Locations – Jitendra Singh Nimod | Web Developer",
  description:
    "Areas served by Jitendra Singh Nimod (JS Nimod), Full Stack Web Developer. Local coverage in Nimod, Kuchaman City, Didwana, Nagaur, Rajasthan, and worldwide online.",
  keywords: [
    "Jitendra Singh Nimod locations",
    "Web developer Nimod",
    "Web developer Kuchaman City",
    "Web developer Didwana",
    "Web developer Nagaur",
    "Web developer Rajasthan",
    "Online web developer",
    "Remote web developer India",
  ],
  alternates: { canonical: "/location" },
  openGraph: {
    title: "Service Locations – Jitendra Singh Nimod",
    description:
      "Serving clients locally in Rajasthan and globally online. Find the location nearest to you.",
    images: [{ url: "/images/og/locations-og.jpg", width: 1200, height: 630 }],
  },
};

export default function LocationsPage() {
  // List of location pages (existing)
  const localPlaces = [
    {
      name: "Nimod Village",
      path: "/location/nimod-village",
      desc: "My home village – where it all began.",
      icon: TreePine,
      color: "emerald",
    },
    {
      name: "Kuchaman City",
      path: "/location/kuchaman-city",
      desc: "Nearby town, base of operations.",
      icon: Building2,
      color: "blue",
    },
    {
      name: "Didwana",
      path: "/location/didwana-rajasthan",
      desc: "District headquarters and college town.",
      icon: MapPin,
      color: "purple",
    },
  ];

  // Additional locations (pages may be created later; for now we list them as text/links)
  const otherAreas = [
    { name: "Nagaur", desc: "District city", icon: Building2 },
    { name: "Rajasthan", desc: "Entire state", icon: Sun },
    { name: "India", desc: "Nationwide", icon: MapPin },
  ];

  const worldwide = {
    name: "Worldwide / Online",
    desc: "Available anywhere via remote work",
    icon: Globe,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-6">
          <Compass className="w-4 h-4" />
          <span>Areas We Serve</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4">
          Service Locations
        </h1>

        <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
          Whether you're in a small village, a bustling city, or anywhere in the world – 
          I'm here to help build your digital presence.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Nimod Village
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Kuchaman City
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Didwana
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Nagaur
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Rajasthan
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-purple-500/10 border border-[#2563EB]/20 rounded-full text-[#2563EB]">
            🌍 Worldwide Online
          </span>
        </div>
      </section>

      {/* ===== LOCAL AREAS (WITH PAGES) ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-[#2563EB]" />
          Local Coverage (with dedicated pages)
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {localPlaces.map((place, i) => {
            const Icon = place.icon;
            return (
              <Link
                key={place.path}
                href={place.path}
                className="group bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all"
              >
                <div className={`p-3 bg-${place.color}-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition`}>
                  <Icon className={`w-6 h-6 text-${place.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-2">{place.name}</h3>
                <p className="text-sm text-zinc-600 mb-4">{place.desc}</p>
                <div className="flex items-center text-[#2563EB] text-sm font-medium">
                  Visit page <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== OTHER AREAS IN RAJASTHAN ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
          <Sun className="w-6 h-6 text-amber-500" />
          Also Serving Across Rajasthan
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {otherAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={area.name}
                className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 text-center hover:bg-white hover:border-[#2563EB]/30 transition"
              >
                <Icon className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
                <h3 className="font-semibold text-zinc-800">{area.name}</h3>
                <p className="text-xs text-zinc-500">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== WORLDWIDE ONLINE ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-[#2563EB]/10 rounded-full">
              <Globe className="w-10 h-10 text-[#2563EB]" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">Worldwide / Online</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-6">
            No matter where you are – I can work with you remotely. I've collaborated with clients across India and beyond.
            All you need is an internet connection.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-sm">
              🌏 Asia
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-sm">
              🌍 Europe
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-sm">
              🌎 Americas
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-sm">
              🌏 Australia
            </span>
          </div>
        </div>
      </section>

      {/* ===== WHY LOCATION MATTERS ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">Why List All These Locations?</h2>
          <p className="text-zinc-600 mb-4">
            When people search for a <strong className="text-[#2563EB]">web developer near me</strong>, they often include their city or village. 
            By creating dedicated pages for each location, I help you find the right developer – whether you're in 
            Nimod, Kuchaman City, Didwana, Nagaur, or anywhere in Rajasthan.
          </p>
          <p className="text-zinc-600 mb-4">
            But I'm not limited by geography. I work with clients worldwide through online collaboration. 
            Distance is no barrier to great websites.
          </p>
          <p className="text-zinc-600">
            So if you're looking for a developer who understands local culture and also thinks globally, you've come to the right place.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Wherever you are, I'm just a message away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
            <a
              href="tel:+919549626202"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
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
        <Heart className="w-3 h-3 inline text-rose-400" /> Serving locally in Rajasthan & worldwide online
      </div>
    </main>
  );
}
