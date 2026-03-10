// src/app/blog/who-is-jitendra-nimod/page.js
// Ultra-premium blog post about Jitendra Nimod

import Link from "next/link";
import Image from "next/image";
import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";
import {
  User,
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  ArrowLeft,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Code2,
  GraduationCap,
  MapPin,
  Globe,
  BookOpen
} from "lucide-react";

export const metadata = {
  title: "Who is Jitendra Nimod? | JS Nimod Biography",
  description:
    "Discover who Jitendra Nimod (Jitendra Singh Nimod) is – Full Stack Developer, B.Sc Mathematics student, and founder of JSS Originals from Rajasthan, India.",
  keywords: [
    "Who is Jitendra Nimod",
    "Jitendra Nimod biography",
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Jitubanna"
  ],
  alternates: { canonical: "/blog/who-is-jitendra-nimod" },
  openGraph: {
    title: "Who is Jitendra Nimod?",
    description:
      "Full biography of Jitendra Nimod, also known as JS Nimod and Jitu Nimod, Full Stack Developer from Rajasthan.",
    images: [{ url: "/images/og/blog-who-is-jitendra-nimod-og.jpg", width: 1200, height: 630 }],
  },
};

export default function WhoIsJitendraNimodPage() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Who is Jitendra Nimod?",
    description:
      "Learn about Jitendra Nimod, also known as Jitendra Singh Nimod, JS Nimod, and Jitu Nimod – Full Stack Developer from Rajasthan.",
    author: {
      "@type": "Person",
      name: identity.name,
      url: "https://me.jitubanna.com/about"
    },
    datePublished: "2026-01-15",
    dateModified: "2026-03-10",
    image: "https://me.jitubanna.com/images/og/blog-who-is-jitendra-nimod-og.jpg",
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
    { title: "My Journey as a Full Stack Developer", path: "/blog/my-journey-as-developer" },
    { title: "Full Stack Developer from Rajasthan", path: "/blog/full-stack-developer-rajasthan" },
    { title: "Why Personal Websites Matter", path: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era" }
  ];

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">Jitendra Nimod</span>?
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{identity.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>
              <div className="relative w-full max-w-2xl mx-auto h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={identity.images.main}
                  alt="Jitendra Nimod"
                  fill
                  className="object-cover"
                />
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg prose-zinc max-w-none bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <p className="lead text-xl text-zinc-600">
                <strong className="text-[#2563EB]">Jitendra Nimod</strong> is a name you might have come across if you're searching for a talented web developer from Rajasthan. But who exactly is he? Let's dive deep into the identity, background, and work of this rising developer.
              </p>

              <h2>The Full Name</h2>
              <p>
                <strong>Jitendra Nimod</strong> is actually the commonly used short name of <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong>. He is also known by several other aliases across the internet:
              </p>
              <ul>
                <li><strong>JS Nimod</strong> – The initials of his full name, often used on developer platforms like GitHub and Dev.to.</li>
                <li><strong>Jitu Nimod</strong> – A friendly, informal version combining his nickname with his village name.</li>
                <li><strong>Jitubanna</strong> / <strong>Jitu Banna</strong> – His primary online brand, combining "Jitu" with the Rajasthani honorific "Banna".</li>
              </ul>
              <p>
                All these names refer to the same person – a passionate Full Stack Developer from Rajasthan, India.
              </p>

              <h2>Background & Education</h2>
              <p>
                Jitendra was born on <strong>{identity.dob}</strong> in <strong>{identity.location.village} village</strong>, near Kuchaman City in the Didwana district of Rajasthan. He completed his early education at N.B.N. Secondary School in Nimod and later attended Kota Career School in Kuchaman City for his Class 12 (PCM).
              </p>
              <p>
                Currently, he is pursuing a <strong>Bachelor of Science in Mathematics (PCM)</strong> at <strong>{identity.education.college}</strong> in Didwana. His mathematical training gives him a strong logical foundation, which he applies to coding and problem-solving.
              </p>

              <h2>Developer Journey</h2>
              <p>
                Jitendra's interest in web development started during his school days. He began with HTML, CSS, and JavaScript, and quickly moved on to modern frameworks like <strong>React</strong> and <strong>Next.js</strong>. Today, he is a <strong>Full Stack Developer</strong> with expertise in:
              </p>
              <ul>
                <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
                <li><strong>Backend:</strong> Node.js, Express, REST APIs</li>
                <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
                <li><strong>DevOps:</strong> Git, GitHub, Vercel</li>
                <li><strong>SEO:</strong> Semantic HTML, JSON‑LD, performance optimization</li>
              </ul>

              <h2>JSS Originals</h2>
              <p>
                Under his brand <strong>{identity.brand}</strong>, Jitendra creates digital projects, identity websites, and developer tools. The brand reflects his commitment to original, high‑quality work. The most prominent project under this umbrella is his own <Link href="/complete-digital-identity-of-jitendra-singh-nimod" className="text-[#2563EB] underline">complete digital identity website</Link>, which connects all his aliases and online profiles.
              </p>

              <h2>Online Presence</h2>
              <p>
                Jitendra maintains an active presence on several platforms:
              </p>
              <ul>
                <li><strong>GitHub:</strong> <a href={identity.social.github} target="_blank" rel="noopener" className="text-[#2563EB] underline">github.com/jitendra-math</a> – open-source contributions and personal projects.</li>
                <li><strong>Medium:</strong> <a href="https://medium.com/@i.jitendra.singh0" target="_blank" rel="noopener" className="text-[#2563EB] underline">@i.jitendra.singh0</a> – articles on development and life.</li>
                <li><strong>Dev.to:</strong> <a href="https://dev.to/jitendrasingh" target="_blank" rel="noopener" className="text-[#2563EB] underline">@jitendrasingh</a> – technical tutorials.</li>
                <li><strong>LinkedIn:</strong> <a href={identity.social.linkedin} target="_blank" rel="noopener" className="text-[#2563EB] underline">jitendra-singh07</a> – professional network.</li>
                <li><strong>Instagram:</strong> <a href={identity.social.instagram} target="_blank" rel="noopener" className="text-[#2563EB] underline">@jitendra.07_7</a> – personal glimpses.</li>
                <li><strong>X:</strong> <a href={identity.social.twitter} target="_blank" rel="noopener" className="text-[#2563EB] underline">@jitendranimod</a> – thoughts and updates.</li>
              </ul>

              <h2>Why the Name "Jitendra Nimod" Matters</h2>
              <p>
                Many people search for <strong>"Jitendra Nimod"</strong> because they've seen his work or heard of him through the developer community. This page serves to clarify that Jitendra Nimod is the same person as Jitendra Singh Nimod, JS Nimod, Jitu Nimod, and Jitubanna. It's all one individual working passionately from Rajasthan.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                <p className="text-amber-800 flex items-start gap-3">
                  <BadgeCheck className="w-6 h-6 text-amber-600 shrink-0" />
                  <span>
                    <strong>Key takeaway:</strong> Whether you search for Jitendra Nimod, JS Nimod, Jitu Nimod, or Jitubanna – you'll find the same dedicated developer.
                  </span>
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Who is Jitendra Nimod?")}&url=${encodeURIComponent("https://me.jitubanna.com/blog/who-is-jitendra-nimod")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2] hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://me.jitubanna.com/blog/who-is-jitendra-nimod")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2] hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://me.jitubanna.com/blog/who-is-jitendra-nimod")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2] hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent("Who is Jitendra Nimod?")}&body=${encodeURIComponent("Check out this article: https://me.jitubanna.com/blog/who-is-jitendra-nimod")}`}
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

          </article>
        </div>
      </main>
    </>
  );
}
