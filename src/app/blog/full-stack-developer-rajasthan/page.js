// src/app/blog/full-stack-developer-rajasthan/page.js
// Ultra-premium blog post about being a Full Stack Developer from Rajasthan

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
  BookOpen,
  Zap,
  Target,
  Award,
  Users,
  Briefcase
} from "lucide-react";

export const metadata = {
  title: "Full Stack Developer from Rajasthan – Jitendra Singh Nimod",
  description:
    "Jitendra Singh Nimod is a Full Stack Developer from Rajasthan, India. Learn about his journey, skills, and how he builds modern web applications from Kuchaman City.",
  keywords: [
    "Full Stack Developer Rajasthan",
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Web Developer Rajasthan",
    "Developer from Rajasthan",
    "Kuchaman City developer"
  ],
  alternates: { canonical: "/blog/full-stack-developer-rajasthan" },
  openGraph: {
    title: "Full Stack Developer from Rajasthan",
    description:
      "Jitendra Singh Nimod, a Full Stack Developer based in Rajasthan, shares his journey and insights.",
    images: [{ url: "/images/og/blog-rajasthan-developer-og.jpg", width: 1200, height: 630 }],
  },
};

export default function FullStackDeveloperRajasthanPage() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Full Stack Developer from Rajasthan",
    description:
      "Jitendra Singh Nimod, a Full Stack Developer based in Rajasthan, shares his journey, skills, and the tech ecosystem in Rajasthan.",
    author: {
      "@type": "Person",
      name: identity.name,
      url: "https://me.jitubanna.com/about"
    },
    datePublished: "2026-02-18",
    dateModified: "2026-03-10",
    image: "https://me.jitubanna.com/images/og/blog-rajasthan-developer-og.jpg",
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
                Full Stack Developer from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">Rajasthan</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{identity.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>February 18, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
              <div className="relative w-full max-w-2xl mx-auto h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={identity.images.developer}
                  alt="Jitendra Singh Nimod – Full Stack Developer"
                  fill
                  className="object-cover"
                />
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg prose-zinc max-w-none bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <p className="lead text-xl text-zinc-600">
                Rajasthan, known for its rich culture, historic forts, and vibrant traditions, is also home to a growing community of tech professionals. Among them is <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong>, a Full Stack Developer based in Kuchaman City, who is building modern web applications while staying rooted in his homeland.
              </p>

              <h2>Who is Jitendra Singh Nimod?</h2>
              <p>
                <strong>{identity.name}</strong> is a Full Stack Web Developer and B.Sc Mathematics student from {identity.location.state}, India. He is also known online as <strong>{identity.alternateNames.join(", ")}</strong>. Currently pursuing his degree at {identity.education.college} in Didwana, he balances academics with practical development work.
              </p>

              <h2>Why Rajasthan?</h2>
              <p>
                Being a developer from Rajasthan is a point of pride for Jitendra. He believes that talent is not confined to metropolitan cities. With the internet, anyone from a small town or village can learn, build, and contribute globally. He says:
              </p>
              <blockquote className="border-l-4 border-[#2563EB] pl-4 italic text-zinc-600">
                “From the villages of Rajasthan to the global web – I want to show that talent isn't tied to a city. It's about passion, consistency, and the will to build.”
              </blockquote>

              <h2>Technical Expertise</h2>
              <p>
                As a Full Stack Developer, Jitendra has experience across the entire web development stack:
              </p>
              <ul>
                <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS, responsive design.</li>
                <li><strong>Backend:</strong> Node.js, Express, REST APIs, authentication.</li>
                <li><strong>Databases:</strong> MongoDB, PostgreSQL.</li>
                <li><strong>DevOps & Tools:</strong> Git, GitHub, Vercel, Netlify.</li>
                <li><strong>SEO & Performance:</strong> Semantic HTML, JSON‑LD, Lighthouse optimization.</li>
              </ul>

              <h2>Projects & Brand</h2>
              <p>
                Under his brand <strong>{identity.brand}</strong>, he builds web solutions, developer tools, and digital identity platforms. His most significant project is his own <Link href="/complete-digital-identity-of-jitendra-singh-nimod" className="text-[#2563EB] underline">complete digital identity website</Link>, which unifies all his aliases and online profiles.
              </p>

              <h2>Services Offered</h2>
              <p>
                Jitendra offers freelance web development services to clients in Rajasthan and beyond:
              </p>
              <ul>
                <li><strong>Website Development:</strong> Modern, responsive websites for businesses and individuals.</li>
                <li><strong>Web Applications:</strong> Custom apps with databases, authentication, and admin panels.</li>
                <li><strong>SEO Optimization:</strong> Improve your site's ranking on Google.</li>
                <li><strong>Personal Brand Websites:</strong> Identity-first websites for professionals and creators.</li>
              </ul>

              <h2>Local Connection</h2>
              <p>
                Jitendra is deeply connected to his roots. He has created dedicated pages for the places he calls home:
              </p>
              <ul>
                <li><Link href="/location/nimod-village" className="text-[#2563EB] underline">Nimod Village</Link> – where he was born and raised.</li>
                <li><Link href="/location/kuchaman-city" className="text-[#2563EB] underline">Kuchaman City</Link> – his base of operations.</li>
                <li><Link href="/location/didwana-rajasthan" className="text-[#2563EB] underline">Didwana</Link> – where he studies.</li>
              </ul>
              <p>
                These pages help locals find a developer who understands their culture and needs.
              </p>

              <h2>Why Choose a Developer from Rajasthan?</h2>
              <p>
                Clients who work with Jitendra appreciate:
              </p>
              <ul>
                <li>Affordable rates compared to metro cities.</li>
                <li>Personalized attention and clear communication.</li>
                <li>Understanding of local business requirements.</li>
                <li>Support in Hindi, English, and Rajasthani.</li>
                <li>Same-timezone collaboration (no delays).</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                <p className="text-amber-800 flex items-start gap-3">
                  <BadgeCheck className="w-6 h-6 text-amber-600 shrink-0" />
                  <span>
                    <strong>Looking for a developer in Rajasthan?</strong> Jitendra Singh Nimod is available for freelance projects. Contact him today.
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Full Stack Developer from Rajasthan")}&url=${encodeURIComponent("https://me.jitubanna.com/blog/full-stack-developer-rajasthan")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2] hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://me.jitubanna.com/blog/full-stack-developer-rajasthan")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2] hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://me.jitubanna.com/blog/full-stack-developer-rajasthan")}`}
                  target="_blank"
                  rel="noopener"
                  className="p-3 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2] hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent("Full Stack Developer from Rajasthan")}&body=${encodeURIComponent("Check out this article: https://me.jitubanna.com/blog/full-stack-developer-rajasthan")}`}
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
