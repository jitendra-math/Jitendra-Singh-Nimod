// src/app/who-is-jitendra-singh-nimod/page.js
// Ultra-premium "Who is" page with strongest SEO

import Link from "next/link";
import Image from "next/image";
import {
  Crown,
  Code2,
  GraduationCap,
  Sparkles,
  MapPin,
  User,
  Hash,
  BadgeCheck,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Globe,
  Award,
  CheckCircle,
  Star,
  BookOpen,
  Briefcase,
  Users,
  Fingerprint
} from "lucide-react";

export const metadata = {
  title: "Who is Jitendra Singh Nimod? | Full Stack Developer from Rajasthan",
  description:
    "Complete information about Jitendra Singh Nimod (JS Nimod), Full Stack Developer, B.Sc Mathematics student, and founder of JSS Originals from Rajasthan, India.",
  keywords: [
    "Who is Jitendra Singh Nimod",
    "Jitendra Singh Nimod biography",
    "JS Nimod developer",
    "Jitendra Nimod",
    "Jitu Nimod",
    "Jitubanna",
    "Full Stack Developer Rajasthan",
    "JSS Originals founder"
  ],
  alternates: { canonical: "/who-is-jitendra-singh-nimod" },
  openGraph: {
    title: "Who is Jitendra Singh Nimod?",
    description:
      "Full information about Jitendra Singh Nimod, Full Stack Developer and B.Sc Mathematics student from Rajasthan.",
    images: [{ url: "/images/og/who-is-og.jpg", width: 1200, height: 630 }],
  },
};

export default function WhoIsPage() {
  // JSON-LD for Person schema (rich results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Nimod",
    alternateName: ["JS Nimod", "Jitu Nimod", "Jitendra Nimod", "Jitubanna"],
    description: "Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India. Founder of JSS Originals.",
    url: "https://me.jitubanna.com/who-is-jitendra-singh-nimod",
    image: "https://me.jitubanna.com/images/main/jitendra-singh-nimod.jpg",
    jobTitle: "Full Stack Web Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Govt. Bangur PG College, Didwana"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India"
    },
    sameAs: [
      "https://github.com/jitendra-math",
      "https://linkedin.com/in/jitendra-singh07",
      "https://instagram.com/jitendra.07_7",
      "https://x.com/jitendranimod"
    ]
  };

  const quickStats = [
    { label: "Full Name", value: "Jitendra Singh Nimod", icon: User },
    { label: "Also Known As", value: "JS Nimod, Jitu Nimod, Jitubanna", icon: Hash },
    { label: "Location", value: "Kuchaman City, Rajasthan", icon: MapPin },
    { label: "Profession", value: "Full Stack Developer", icon: Code2 },
    { label: "Education", value: "B.Sc Mathematics", icon: GraduationCap },
    { label: "Brand", value: "JSS Originals", icon: Sparkles }
  ];

  const otherNames = [
    { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
    { name: "JS Nimod", path: "/identity/js-nimod" },
    { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
    { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
    { name: "Jitubanna", path: "/jitubanna-identity" },
    { name: "Jitu Banna", path: "/identity/jitu-banna" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-6">
              <Crown className="w-4 h-4" />
              <span>Official Identity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 leading-tight mb-4">
              Who is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
                Jitendra Singh Nimod?
              </span>
            </h1>

            <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-4">
              Jitendra Singh Nimod (also known as <strong className="text-[#2563EB]">JS Nimod</strong>) is a Full Stack
              Web Developer and B.Sc Mathematics student from Rajasthan, India.
              He is the founder of <strong>JSS Originals</strong> and known for creating
              modern web experiences and digital identity based websites.
            </p>

            <p className="text-sm text-zinc-500 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
              You may also know him as <strong>Jitu Nimod, Jitendra Nimod, or Jitubanna</strong> – all refer to the same developer.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="/developer-profile"
                className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
              >
                Developer Profile
              </Link>
              <Link
                href="/photos-jitendra-singh-nimod"
                className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              >
                View Photos
              </Link>
              <a
                href="https://wa.me/919549626202"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md"
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
                alt="Jitendra Singh Nimod"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#2563EB] text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <BadgeCheck className="w-3 h-3" />
              Full Stack Developer
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition group">
                <Icon className="w-5 h-5 text-[#2563EB] mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="text-xs text-zinc-500">{stat.label}</p>
                <p className="text-sm font-medium text-zinc-800">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== INFO SECTION (CARDS) ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg w-fit mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition">
              <Code2 className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2">👨‍💻 Profession</h3>
            <p className="text-sm text-zinc-600">
              Full Stack Web Developer building modern websites, tools and
              digital identity systems using Next.js and modern web tech.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4 group-hover:bg-purple-500 group-hover:text-white transition">
              <GraduationCap className="w-5 h-5 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2">🎓 Education</h3>
            <p className="text-sm text-zinc-600">
              B.Sc Mathematics student with strong interest in programming,
              technology and digital branding at Govt. Bangur College, Didwana.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
            <div className="p-2 bg-amber-100 rounded-lg w-fit mb-4 group-hover:bg-amber-500 group-hover:text-white transition">
              <Sparkles className="w-5 h-5 text-amber-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2">🚀 Brand</h3>
            <p className="text-sm text-zinc-600">
              Founder of JSS Originals focusing on creative digital projects,
              tools and personal brand websites.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OTHER NAMES YOU MIGHT SEARCH ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#2563EB]" />
            Other Names You Might Search
          </h2>
          <p className="text-zinc-600 mb-6">
            All these names refer to the same person – Jitendra Singh Nimod.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {otherNames.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="flex items-center justify-between p-3 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition group"
              >
                <span className="text-sm text-zinc-600 group-hover:text-[#2563EB]">{item.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LONG SEO CONTENT ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
            Full Information About Jitendra Singh Nimod
          </h2>
          
          <div className="prose prose-zinc max-w-none space-y-4">
            <p className="text-zinc-600 leading-relaxed">
              <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> is an Indian web developer and student known
              for his modern web projects and personal branding websites. He is from Rajasthan and currently pursuing a 
              Bachelor of Science in Mathematics while working as a Full Stack Developer.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              He is also known by names like <strong>JS Nimod</strong>, <strong>Jitu Nimod</strong>, <strong>Jitendra Nimod</strong>, 
              and <strong>Jitubanna</strong>. His work focuses on creating fast, SEO optimized and modern user interface
              based websites using technologies like Next.js, Tailwind CSS and modern JavaScript frameworks.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              Jitendra Singh Nimod is building his digital identity across search engines and social platforms through consistent branding, web
              development projects and content creation. His official website serves as the central hub for his work, projects and online
              presence.
            </p>

            <h3 className="text-xl font-bold text-zinc-800 mt-6 mb-3">Education & Background</h3>
            <p className="text-zinc-600 leading-relaxed">
              He is currently pursuing B.Sc Mathematics (PCM) at <strong>Govt. Bangur PG College, Didwana</strong>. Originally from 
              <strong> Nimod village</strong> near Kuchaman City, he combines his mathematical training with practical development skills.
            </p>

            <h3 className="text-xl font-bold text-zinc-800 mt-6 mb-3">JSS Originals</h3>
            <p className="text-zinc-600 leading-relaxed">
              As the founder of <strong>JSS Originals</strong>, he creates digital tools, identity platforms, and experimental projects 
              that showcase his skills and help others establish their online presence.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
              <p className="text-amber-800 text-sm flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Whether you search for <strong>Jitendra Singh Nimod</strong>, <strong>JS Nimod</strong>, <strong>Jitu Nimod</strong>, or 
                  <strong> Jitubanna</strong>, you'll find the same dedicated developer from Rajasthan.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED IDENTITY PAGES ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6 text-center">Related Identity Pages</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
            { name: "JS Nimod", path: "/identity/js-nimod" },
            { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
            { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
            { name: "Jitubanna", path: "/jitubanna-identity" },
            { name: "Jitu Banna", path: "/identity/jitu-banna" }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 text-center hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition group"
            >
              <Fingerprint className="w-5 h-5 text-[#2563EB] mx-auto mb-2 group-hover:scale-110 transition" />
              <p className="text-sm font-medium text-zinc-700 group-hover:text-[#2563EB]">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Connect with Jitendra Singh Nimod for collaborations, projects, or just to say hello.
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
        <Heart className="w-3 h-3 inline text-rose-400" /> Jitendra Singh Nimod – Developer from Rajasthan
      </div>
    </main>
  );
}
