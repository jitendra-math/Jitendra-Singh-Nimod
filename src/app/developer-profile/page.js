// src/app/developer-profile/page.js
// Ultra‑premium light theme developer profile with freelancing info, skills, and contact options

import Link from "next/link";
import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  Code2,
  Palette,
  Server,
  Smartphone,
  Rocket,
  Zap,
  Shield,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Briefcase,
  Users,
  Award,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink,
  Sparkles,
  CheckCircle,
  Star,
  Heart,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh Nimod – Full Stack Developer & Freelancer from Rajasthan",
  description:
    "Jitendra Singh Nimod (JS Nimod) is a Full Stack Web Developer and freelancer from Rajasthan, India. Specializing in modern web apps, SEO, and digital identity. Available for work.",
  keywords: [
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Full Stack Developer Rajasthan",
    "Freelance Web Developer India",
    "Jitendra Nimod freelancer",
    "Web developer Kuchaman City",
    "Hire web developer India",
  ],
  alternates: { canonical: "/developer-profile" },
  openGraph: {
    title: "Jitendra Singh Nimod – Full Stack Developer & Freelancer",
    description:
      "Full Stack Developer from Rajasthan, India. Available for freelance projects. Next.js, React, Node.js expert.",
    images: [{ url: "/images/og/developer-og.jpg", width: 1200, height: 630 }],
  },
};

export default function DeveloperProfilePage() {
  const skills = [
    { name: "Next.js / React", icon: Cpu, level: 90, color: "blue" },
    { name: "Tailwind CSS", icon: Palette, level: 95, color: "indigo" },
    { name: "Node.js / APIs", icon: Server, level: 85, color: "green" },
    { name: "JavaScript / ES6", icon: Code2, level: 90, color: "yellow" },
    { name: "Responsive Design", icon: Smartphone, level: 95, color: "purple" },
    { name: "SEO / Performance", icon: Zap, level: 88, color: "orange" },
    { name: "MongoDB / Firebase", icon: Layers, level: 80, color: "emerald" },
    { name: "Git / GitHub", icon: Github, level: 85, color: "gray" },
  ];

  const projects = [
    {
      title: "JSS Originals – Identity Suite",
      desc: "A personal branding ecosystem connecting multiple domains and identity pages. Built with Next.js and Tailwind.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      link: "https://jssoriginals.com",
      status: "Live",
    },
    {
      title: "Rajasthan Dev Directory",
      desc: "A curated directory of developers from Rajasthan (coming soon). Will help local talent get discovered.",
      tech: ["Next.js", "Supabase", "Mapbox"],
      link: "#",
      status: "In Progress",
    },
    {
      title: "Portfolio Builder Tool",
      desc: "An open‑source tool for developers to quickly generate beautiful portfolio sites (planned).",
      tech: ["React", "Node.js", "Tailwind"],
      link: "#",
      status: "Planning",
    },
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

          {/* Hero section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-rose-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={identity.images.developer}
                  alt={identity.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Available for freelance work</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-3">
                {identity.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#2563EB] font-medium mb-4">
                Full Stack Web Developer & Freelancer
              </p>
              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                From <span className="font-semibold text-zinc-800">{identity.location.city}, Rajasthan</span>, 
                building modern, high‑performance web apps. I help businesses and individuals 
                turn ideas into digital reality.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <a
                  href="https://wa.me/919549626202"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/jitendra.07_7"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="mailto:contact@jitubanna.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-200 text-zinc-800 text-sm font-semibold rounded-full hover:bg-[#2563EB] hover:text-white hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Quick contact / availability */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <Briefcase className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Availability</p>
              <p className="font-medium text-zinc-800 text-sm">Freelance / Contract</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <Clock className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Response time</p>
              <p className="font-medium text-zinc-800 text-sm">&lt; 24 hours</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <Users className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Projects</p>
              <p className="font-medium text-zinc-800 text-sm">10+ delivered</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <MapPin className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Location</p>
              <p className="font-medium text-zinc-800 text-sm">Rajasthan, India</p>
            </div>
          </div>

          {/* Skills section */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Cpu className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-xl p-5 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-${skill.color}-100 rounded-lg text-${skill.color}-600 group-hover:scale-110 transition`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-zinc-800 text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${skill.color}-500 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Freelancing / Services */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Rocket className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Freelance Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Full Stack Web Development",
                  desc: "End‑to‑end development using Next.js, React, Node.js, and modern databases.",
                  icon: Code2,
                  price: "Starting ₹15,000",
                },
                {
                  title: "Custom Website Design",
                  desc: "Responsive, pixel‑perfect UI with Tailwind CSS and Framer Motion animations.",
                  icon: Palette,
                  price: "Starting ₹10,000",
                },
                {
                  title: "SEO & Performance Optimization",
                  desc: "Improve search rankings and load times. Lighthouse scores 90+ guaranteed.",
                  icon: Zap,
                  price: "Starting ₹8,000",
                },
                {
                  title: "API Development & Integration",
                  desc: "RESTful APIs, third‑party integrations, and backend services.",
                  icon: Server,
                  price: "Starting ₹12,000",
                },
                {
                  title: "E‑commerce Solutions",
                  desc: "Online stores with payment gateways, product management, and secure checkout.",
                  icon: Shield,
                  price: "Custom quote",
                },
                {
                  title: "Personal Brand Websites",
                  desc: "Identity‑first websites like this one – perfect for professionals and creators.",
                  icon: Globe,
                  price: "Starting ₹20,000",
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all group"
                  >
                    <div className="p-3 bg-[#2563EB]/10 rounded-xl w-fit mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition">
                      <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-zinc-600 mb-4">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#2563EB]">{service.price}</span>
                      <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Projects (placeholder / real) */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Layers className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Recent & Upcoming Projects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-zinc-800">{project.title}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.status === "Live" ? "bg-green-100 text-green-700" :
                      project.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-zinc-100 px-2 py-1 rounded-full text-zinc-600">{t}</span>
                    ))}
                  </div>
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-sm text-[#2563EB] font-medium hover:gap-2 transition-all"
                    >
                      View project <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-400">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials / Trust */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Star className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">What Clients Say</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Startup Founder, Jaipur",
                  text: "Jitendra built our entire web platform from scratch. Communication was smooth and the final product exceeded expectations.",
                },
                {
                  name: "Priya Mehta",
                  role: "Photographer, Kuchaman",
                  text: "He designed my portfolio site – it's beautiful and ranks on Google! Highly recommend.",
                },
                {
                  name: "Amit Kumar",
                  role: "Local Business Owner",
                  text: "Very professional and quick. He understood exactly what I needed for my shop's website.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-1 text-[#2563EB] mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-zinc-600 italic mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-medium text-zinc-800">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's build something great together</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you need a new website, a web app, or help with an existing project – I'm just a message away.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/919549626202"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </a>
              <a
                href="mailto:contact@jitubanna.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </section>

          {/* Bottom links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
            <a href={identity.social.github} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Github className="w-6 h-6" />
            </a>
            <a href={identity.social.linkedin} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={identity.social.instagram} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
