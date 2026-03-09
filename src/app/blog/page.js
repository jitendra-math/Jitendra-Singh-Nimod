// src/app/blog/page.js
// Complete, premium blog homepage with categories, featured posts, and engaging design

import Link from "next/link";
import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  Newspaper,
  ArrowRight,
  Clock,
  User,
  Tag,
  BookOpen,
  Heart,
  Sparkles,
  Eye,
  MessageCircle,
  Calendar,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Code2,
  GraduationCap,
  MapPin,
  Fingerprint,
  Hash,
  Globe,
  Filter,
  Search,
  Instagram,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Blog — Insights from Jitendra Singh Nimod",
  description:
    "Read articles, stories, and insights by Jitendra Singh Nimod (JS Nimod). Full Stack Development, Mathematics, life in Rajasthan, and digital identity.",
  keywords: [
    "Jitendra Singh Nimod blog",
    "JS Nimod articles",
    "Jitu Nimod blog",
    "Full Stack Developer blog Rajasthan",
    "Web development insights",
    "Mathematics student blog",
    "Rajasthan developer stories",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Jitendra Singh Nimod",
    description:
      "Thoughts on web development, mathematics, and life from a developer in Rajasthan.",
    images: [{ url: "/images/og/blog-og.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogHomePage() {
  const featuredPosts = [
    {
      title: "Who is Jitendra Nimod?",
      description: "The complete story behind the name, the aliases, and the person.",
      link: "/blog/who-is-jitendra-nimod",
      date: "Jan 15, 2026",
      readTime: "5 min",
      category: "Identity",
      icon: Fingerprint,
      color: "blue",
      featured: true,
    },
    {
      title: "My Journey as a Full Stack Developer",
      description: "From Nimod village to building web apps – the path, struggles, and learnings.",
      link: "/blog/my-journey-as-developer",
      date: "Feb 2, 2026",
      readTime: "7 min",
      category: "Career",
      icon: Code2,
      color: "purple",
      featured: true,
    },
    {
      title: "Full Stack Developer from Rajasthan",
      description: "What it means to build a tech career from a small town in India.",
      link: "/blog/full-stack-developer-rajasthan",
      date: "Feb 18, 2026",
      readTime: "6 min",
      category: "Perspective",
      icon: MapPin,
      color: "amber",
      featured: true,
    },
  ];

  const latestPosts = [
    {
      title: "The Best Friend of Jitendra Singh Nimod",
      description: "A tribute to the bond with Nikhil Sambhariya – a friendship that defines loyalty.",
      link: "/blog/best-friend-of-jitendra-singh-nimod",
      date: "Mar 1, 2026",
      readTime: "8 min",
      category: "Personal",
      icon: Heart,
      color: "rose",
    },
    {
      title: "Why Personal Websites Matter in the AI Era",
      description: "An architectural deep-dive into owning your digital identity.",
      link: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era",
      date: "Mar 5, 2026",
      readTime: "10 min",
      category: "Tech",
      icon: Globe,
      color: "indigo",
    },
  ];

  const categories = [
    { name: "All Posts", count: 6, icon: Newspaper, active: true },
    { name: "Identity", count: 2, icon: Fingerprint },
    { name: "Career", count: 2, icon: Code2 },
    { name: "Personal", count: 1, icon: Heart },
    { name: "Tech", count: 1, icon: Globe },
  ];

  const popularTags = [
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Rajasthan",
    "Full Stack",
    "Mathematics",
    "Freelancing",
    "Next.js",
    "Friendship",
    "Digital Identity",
    "Small Town Developer",
  ];

  return (
    <>
      <StructuredData />
      <main className="bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden">
        
        {/* Premium background blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Thoughts & Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">Blog</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Insights on web development, mathematics, identity, and life from{" "}
              <span className="font-semibold text-zinc-800">{identity.name}</span>.
            </p>
          </div>

          {/* Categories quick filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-1 mr-2">
              <Filter className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-500">Filter:</span>
            </div>
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={i}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat.active
                      ? "bg-[#2563EB] text-white shadow-md"
                      : "bg-white/70 border border-zinc-200 text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    cat.active ? "bg-white/20" : "bg-zinc-200 text-zinc-600"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured posts section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Featured Posts</h2>
              </div>
              <Link href="/blog/archive" className="text-sm text-[#2563EB] hover:underline flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={i}
                    href={post.link}
                    className="group bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-${post.color}-500/5 rounded-bl-full`}></div>
                    
                    <div className={`p-3 bg-${post.color}-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition`}>
                      <Icon className={`w-6 h-6 text-${post.color}-600`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover:text-[#2563EB] transition">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 bg-${post.color}-100 text-${post.color}-700 rounded-full`}>
                        {post.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Latest posts + sidebar */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content – latest posts */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-800">Latest Articles</h2>
              </div>

              <div className="space-y-6">
                {latestPosts.map((post, i) => {
                  const Icon = post.icon;
                  return (
                    <Link
                      key={i}
                      href={post.link}
                      className="flex flex-col md:flex-row gap-6 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group"
                    >
                      <div className={`p-4 bg-${post.color}-100 rounded-xl w-fit md:w-auto group-hover:scale-110 transition`}>
                        <Icon className={`w-8 h-8 text-${post.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover:text-[#2563EB] transition">
                          {post.title}
                        </h3>
                        <p className="text-zinc-600 mb-3 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className={`px-2 py-1 bg-${post.color}-100 text-${post.color}-700 rounded-full`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] self-center" />
                    </Link>
                  );
                })}

                {/* Older posts placeholder (you can expand later) */}
                <div className="text-center pt-4">
                  <Link
                    href="/blog/archive"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 border border-zinc-200 rounded-full text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all"
                  >
                    Load more articles
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* About the blog */}
              <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                    <BookOpen className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-zinc-800">About this blog</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Thoughts, stories, and ideas from {identity.name}. Exploring the intersection of 
                  mathematics, code, and life in Rajasthan.
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Posts</span>
                    <span className="font-medium text-zinc-800">6 articles</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-zinc-500">Last updated</span>
                    <span className="font-medium text-zinc-800">Mar 2026</span>
                  </div>
                </div>
              </div>

              {/* Popular tags */}
              <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Hash className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-zinc-800">Popular tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-zinc-100 text-zinc-600 text-xs rounded-full hover:bg-[#2563EB] hover:text-white transition cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect section */}
              <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-bold text-zinc-800 mb-3">Let's connect</h3>
                <p className="text-sm text-zinc-600 mb-4">
                  Follow along on social media for updates and more.
                </p>
                <div className="flex gap-3">
                  <a
                    href={identity.social.instagram}
                    target="_blank"
                    rel="noopener"
                    className="p-2 bg-white rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={identity.social.github}
                    target="_blank"
                    rel="noopener"
                    className="p-2 bg-white rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:contact@jitubanna.com"
                    className="p-2 bg-white rounded-lg border border-zinc-200 hover:border-[#2563EB] hover:text-[#2563EB] transition"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <section className="mt-20 bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay updated</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get notified when I publish new articles. No spam, just good content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
