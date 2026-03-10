// src/app/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era/page.js
// Ultra-premium blog post about personal websites in the AI era

import Link from "next/link";
import Image from "next/image";
import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";
import {
  BrainCircuit,
  Fingerprint,
  Globe2,
  Code2,
  BookOpen,
  ArrowRight,
  UserCircle,
  Cpu,
  Share2,
  Calendar,
  User,
  Clock,
  Heart,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  ChevronRight,
  ArrowLeft,
  BadgeCheck,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Why Personal Websites Still Matter for Developers in the AI Era",
  description:
    "An in-depth architectural explanation of why developers must maintain personal websites as central identity hubs in the age of AI, LLMs, and fragmented social media.",
  keywords: [
    "Personal website for developers",
    "Developer portfolio in AI era",
    "Digital identity for software engineers",
    "Jitendra Singh Nimod blog",
    "AI web indexing"
  ],
  alternates: { canonical: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era" },
  openGraph: {
    title: "Why Personal Websites Still Matter for Developers in the AI Era",
    description:
      "An in‑depth explanation of why developers should maintain personal websites even in the age of AI platforms and social media.",
    images: [{ url: "/images/og/blog-personal-websites-og.jpg", width: 1200, height: 630 }],
  },
};

export default function WhyPersonalWebsitesPage() {
  // Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Personal Websites Still Matter for Developers in the AI Era",
    description:
      "An in‑depth explanation of why developers should maintain personal websites even in the age of AI platforms and social media.",
    author: {
      "@type": "Person",
      name: identity.name,
      url: "https://me.jitubanna.com"
    },
    datePublished: "2024-03-01",
    dateModified: "2026-03-10",
    publisher: {
      "@type": "Organization",
      name: identity.brand,
      logo: {
        "@type": "ImageObject",
        url: "https://me.jitubanna.com/logo.png"
      }
    }
  };

  const relatedPosts = [
    { title: "Who is Jitendra Nimod?", path: "/blog/who-is-jitendra-nimod" },
    { title: "My Journey as a Full Stack Developer", path: "/blog/my-journey-as-developer" },
    { title: "Full Stack Developer from Rajasthan", path: "/blog/full-stack-developer-rajasthan" }
  ];

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

        {/* Premium Background Blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-[#2563EB] transition group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
              Back to Blog
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4">
                Why Personal Websites Still Matter for Developers in the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">AI Era</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{identity.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>March 1, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
              </div>
              <div className="relative w-full max-w-2xl mx-auto h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2563EB]/20 to-purple-500/20 flex items-center justify-center">
                <BrainCircuit className="w-32 h-32 text-[#2563EB]/40" />
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg prose-zinc max-w-none bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <p className="lead text-xl text-zinc-600">
                In a time when artificial intelligence tools, social platforms, developer communities, and code hosting services dominate the internet, some assume that personal websites are no longer necessary. <strong className="text-[#2563EB]">However, the reality is very different.</strong>
              </p>

              <p>
                Personal websites remain one of the most powerful tools for developers who want to establish a long‑term digital identity, build authority, and strictly control how they are perceived by both humans and machines across the internet.
              </p>

              <p>
                This article explores the architectural necessity of personal websites today, using the official digital identity of <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> as a structural case study.
              </p>

              <h2>The Internet Identity Problem</h2>
              <p>
                One of the most complex challenges on the modern web is identity fragmentation. A single developer often exists as a scattered array of usernames, handles, and isolated profiles.
              </p>

              <div className="my-8 p-6 rounded-2xl border border-zinc-200 bg-white/80">
                <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4 font-medium">The Fragmented Developer Ecosystem</p>
                <div className="flex flex-wrap gap-3">
                  {["GitHub Username", "Medium Author", "Dev.to Profile", "LinkedIn Identity", "X / Twitter Handle"].map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-600 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p>
                Without a central website, these identities remain disconnected. A personal website acts as the <strong className="text-[#2563EB]">cryptographic central hub</strong> that forces these scattered profiles to resolve to a single, verifiable human being.
              </p>

              <h2>The Role of Websites in the AI Era</h2>
              <p>
                Artificial intelligence systems (like LLMs and Search Generative Experiences) constantly ingest vast amounts of web content to understand entities, organizations, and concepts.
              </p>

              <p>
                When a developer owns a structured personal website, they provide a "ground truth" for these AI models. A well‑architected site serves explicit, structured data that algorithms can easily digest:
              </p>

              <ul className="grid grid-cols-2 gap-4 my-8">
                {["Verifiable Biography", "Project Portfolios", "Technical Articles", "Verified Social Links", "Professional Roles", "Geographic Anchors"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 bg-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
                    <span className="text-zinc-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <h2>Architecting a Structured Identity</h2>
              <p>
                A practical manifestation of this philosophy is the official platform created by <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong>. It operates not just as a portfolio, but as an interconnected routing system for a complete digital identity.
              </p>

              <Link href="/" className="group block my-8 p-6 rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/5 hover:bg-[#2563EB]/10 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2563EB] font-medium mb-1">Central Identity Hub</p>
                    <p className="text-zinc-800 text-xl font-semibold">me.jitubanna.com</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <p>From this apex node, the architecture branches into highly specialized sectors:</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-2xl border border-zinc-200 bg-white/80">
                  <Code2 className="w-6 h-6 text-[#2563EB] mb-4" />
                  <h3 className="text-zinc-800 font-medium text-lg mb-2">Developer Profiles</h3>
                  <p className="text-sm text-zinc-600 mb-4">Dedicated pages explaining technical stacks, Next.js expertise, and engineering paradigms.</p>
                  <div className="space-y-2">
                    <Link href="/developer-profile" className="text-sm text-[#2563EB] hover:underline block">/developer-profile →</Link>
                    <Link href="/jitendra-singh-developer" className="text-sm text-[#2563EB] hover:underline block">/jitendra-singh-developer →</Link>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-zinc-200 bg-white/80">
                  <Fingerprint className="w-6 h-6 text-[#2563EB] mb-4" />
                  <h3 className="text-zinc-800 font-medium text-lg mb-2">Identity Nodes</h3>
                  <p className="text-sm text-zinc-600 mb-4">Resolving aliases like Jitu Nimod, JS Nimod, and Jitubanna back to the primary human entity.</p>
                  <div className="space-y-2">
                    <Link href="/identity/jitendra-singh-nimod" className="text-sm text-[#2563EB] hover:underline block">/identity/jitendra-singh-nimod →</Link>
                    <Link href="/identity/js-nimod" className="text-sm text-[#2563EB] hover:underline block">/identity/js-nimod →</Link>
                  </div>
                </div>
              </div>

              <h2>The Knowledge Footprint</h2>
              <p>
                Publishing long‑form technical writing on a personal domain secures the developer's knowledge footprint. It ensures that traffic, authority, and SEO value accrue to the creator, not just to a third‑party platform.
              </p>

              <div className="flex flex-col gap-3 my-8">
                {relatedPosts.map((post, i) => (
                  <Link key={i} href={post.path} className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white/80 hover:bg-white hover:border-[#2563EB]/30 transition group">
                    <span className="text-zinc-700 group-hover:text-[#2563EB]">{post.title}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
                  </Link>
                ))}
              </div>

              <h2>External Platforms as Extensions</h2>
              <p>
                This does not render external platforms obsolete. Developers must still engage with global communities on GitHub, Medium, and Dev.to. However, the paradigm shifts: these platforms become <strong className="text-[#2563EB]">spokes connected to the central hub</strong>, rather than the hub itself.
              </p>

              <h2>Conclusion</h2>
              <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 p-8 rounded-2xl border border-[#2563EB]/20">
                <p className="mb-4 text-zinc-700">
                  In the AI era, developers have an unprecedented array of platforms at their disposal. Yet, none of these supersede the foundational value of digital sovereignty.
                </p>
                <p className="text-zinc-700">
                  A personal website is the only permanent, un‑censorable identity hub that weaves isolated projects, scattered aliases, and external platforms into a single, authoritative digital matrix. For engineers architecting a legacy, owning the domain is the most critical deployment they will ever make.
                </p>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-12">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src={identity.images.main}
                  alt={identity.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-zinc-800 mb-1">Written by {identity.name}</h3>
                <p className="text-sm text-zinc-500 mb-3">{identity.profession} & Founder of {identity.brand}</p>
                <p className="text-sm text-zinc-600">
                  Jitendra shares insights on web development, mathematics, and his journey as a developer from rural Rajasthan.
                </p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-col items-center mb-12">
              <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Share this article</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Why Personal Websites Still Matter for Developers in the AI Era")}&url=${encodeURIComponent("https://me.jitubanna.com/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2] hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://me.jitubanna.com/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2] hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://me.jitubanna.com/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2] hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent("Why Personal Websites Still Matter for Developers in the AI Era")}&body=${encodeURIComponent("Check out this article: https://me.jitubanna.com/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era")}`}
                  className="p-3 bg-zinc-200/50 text-zinc-600 rounded-full hover:bg-[#2563EB] hover:text-white transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6 text-center">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((post, i) => (
                  <Link
                    key={i}
                    href={post.path}
                    className="group p-4 bg-white/70 rounded-xl border border-zinc-200 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition"
                  >
                    <h4 className="font-semibold text-zinc-800 group-hover:text-[#2563EB] mb-2">{post.title}</h4>
                    <span className="text-xs text-zinc-500 inline-flex items-center gap-1">
                      Read more <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
