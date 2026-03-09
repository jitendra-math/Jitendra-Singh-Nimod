// src/app/contact/page.js

import Link from "next/link";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Contact Jitendra Singh Nimod – Let's Connect",
  description:
    "Reach out to Jitendra Singh Nimod (JS Nimod) for collaborations, web development projects, or just to say hello. Official contact details and social profiles.",
};

export default function ContactPage() {
  const primaryEmail = "contact@jitubanna.com";
  const secondaryEmail = "me@jitubanna.com";
  const whatsappNumber = "+91 9549626202";
  const whatsappLink = `https://wa.me/919549626202`; // without +

  return (
    <>
      <StructuredData />

      <main className="bg-gradient-to-br from-white via-zinc-50 to-zinc-100 text-zinc-800 min-h-screen font-sans selection:bg-blue-600/30 selection:text-white relative overflow-hidden pb-20">
        {/* Background decoration blobs */}
        <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              I'm always open to conversations.
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Email Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-premium hover:shadow-strong transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-zinc-800">Email</h2>
              </div>
              <div className="space-y-4 ml-2">
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Primary</p>
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 break-all inline-flex items-center gap-1"
                  >
                    {primaryEmail}
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Personal</p>
                  <a
                    href={`mailto:${secondaryEmail}`}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 break-all inline-flex items-center gap-1"
                  >
                    {secondaryEmail}
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-500 mt-4 border-t border-zinc-200 pt-4">
                I usually reply within 24 hours.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-premium hover:shadow-strong transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl text-green-600 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-zinc-800">WhatsApp</h2>
              </div>
              <div className="space-y-4 ml-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-green-600 hover:text-green-800 group/link"
                >
                  <Phone className="w-5 h-5" />
                  {whatsappNumber}
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover/link:opacity-100" />
                </a>
                <p className="text-sm text-zinc-500 flex items-center gap-1">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">Only WhatsApp</span>
                  <span>– No calls, please.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Row (Location, Education, etc.) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            <div className="bg-white/50 backdrop-blur-sm border border-white/70 rounded-xl p-4 text-center">
              <MapPin className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">Based in</p>
              <p className="font-medium text-zinc-800">{identity.location.city}, Rajasthan</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-white/70 rounded-xl p-4 text-center">
              <GraduationCap className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">Education</p>
              <p className="font-medium text-zinc-800">B.Sc Mathematics</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-white/70 rounded-xl p-4 text-center">
              <Briefcase className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">Experience</p>
              <p className="font-medium text-zinc-800">Full Stack Dev</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-white/70 rounded-xl p-4 text-center">
              <Calendar className="w-5 h-5 text-amber-500 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">Response</p>
              <p className="font-medium text-zinc-800">Within 24h</p>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-premium mb-16">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-500" />
              Connect on Social Media
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "GitHub", href: identity.social.github, icon: Github, color: "hover:text-gray-900" },
                { name: "LinkedIn", href: identity.social.linkedin, icon: Linkedin, color: "hover:text-blue-700" },
                { name: "Instagram", href: identity.social.instagram, icon: Instagram, color: "hover:text-pink-600" },
                { name: "Twitter/X", href: identity.social.twitter, icon: Twitter, color: "hover:text-sky-500" },
                { name: "YouTube", href: "https://youtube.com/@jitendranimod", icon: Youtube, color: "hover:text-red-600" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/80 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <social.icon className={`w-6 h-6 mb-2 text-zinc-600 group-hover:scale-110 transition-transform ${social.color}`} />
                  <span className="text-sm font-medium text-zinc-700">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* SEO Text & Additional Info */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-6 md:p-8 text-zinc-700 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">About {identity.name}</h3>
            <div className="prose prose-zinc max-w-none space-y-4">
              <p>
                I'm <strong>{identity.name}</strong> – you might know me as{" "}
                <strong>{identity.alternateNames.slice(0, 3).join(", ")}</strong> and more.
                I'm a Full Stack Web Developer and B.Sc Mathematics student based in{" "}
                {identity.location.city}, {identity.location.state}, India.
              </p>
              <p>
                I build modern, fast, and SEO‑optimized websites for businesses, startups, and
                individuals. Whether you need a developer for a project, have a collaboration idea,
                or just want to discuss tech, feel free to reach out via email or WhatsApp.
              </p>
              <p className="text-sm text-zinc-500 border-l-4 border-blue-200 pl-4">
                📍 Official contact page for Jitendra Singh Nimod (JS Nimod). All profiles above are verified.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
