// src/components/Footer.jsx

import identity from "../data/identity";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32 bg-[#0b0b0f] text-zinc-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* ABOUT */}
          <div>
            <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {identity.name}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {identity.name} is a Full Stack Web Developer and B.Sc Mathematics
              student from {identity.location.state}, {identity.location.country}.
              Also known online as {identity.alternateNames.join(", ")}.
            </p>

            <p className="mt-4 text-xs text-zinc-500">
              Founder of {identity.brand}. Building modern web applications,
              digital identity platforms and developer tools.
            </p>
          </div>

          {/* CORE PAGES */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Core Pages</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/" className="hover:text-purple-400 transition">Home</a>
              <a href="/about" className="hover:text-purple-400 transition">About</a>
              <a href="/developer-profile" className="hover:text-purple-400 transition">Developer Profile</a>
              <a href="/student-profile" className="hover:text-purple-400 transition">Student Profile</a>
              <a href="/photos-jitendra-singh-nimod" className="hover:text-purple-400 transition">Photo Gallery</a>
              <a href="/contact" className="hover:text-purple-400 transition">Contact</a>

            </div>
          </div>

          {/* IDENTITY LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Identity Pages</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/identity/jitendra-nimod">Jitendra Nimod</a>
              <a href="/identity/jitendra-singh">Jitendra Singh</a>
              <a href="/identity/jitendra-singh-nimod">Jitendra Singh Nimod</a>
              <a href="/identity/jitu-nimod">Jitu Nimod</a>
              <a href="/identity/js-nimod">JS Nimod</a>
              <a href="/identity/nimod-jitu">Nimod Jitu</a>
              <a href="/identity/nimod-js">Nimod JS</a>

            </div>
          </div>

          {/* LOCATION / SEO */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Regional Presence</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/location/nimod-village">Nimod Village</a>
              <a href="/location/kuchaman-city">Kuchaman City</a>
              <a href="/location/didwana-rajasthan">Didwana Rajasthan</a>

              <a href="/nimod-rajasthan">Nimod Rajasthan</a>
              <a href="/kuchaman-web-developer">Kuchaman Web Developer</a>
              <a href="/didwana-developer">Didwana Developer</a>

            </div>
          </div>

        </div>


        {/* SECOND GRID */}
        <div className="grid md:grid-cols-4 gap-14 mt-16">

          {/* COMMUNITY */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Community</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/jss-originals">JSS Originals</a>
              <a href="/jss-rajput">JSS Rajput</a>
              <a href="/rajput-nimod">Rajput Nimod</a>
              <a href="/rajputo-ka-nimod">Rajputo Ka Nimod</a>
              <a href="/shekhawat-nimod">Shekhawat Nimod</a>

            </div>
          </div>

          {/* BLOG */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Blog</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/blog">Blog Home</a>
              <a href="/blog/who-is-jitendra-nimod">Who is Jitendra Nimod</a>
              <a href="/blog/my-journey-as-developer">Developer Journey</a>
              <a href="/blog/full-stack-developer-rajasthan">Full Stack Rajasthan</a>

            </div>
          </div>

          {/* META */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Meta</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href="/robots.txt">Robots.txt</a>
              <a href="/sitemap.xml">Sitemap</a>
              <a href="/rss.xml">RSS Feed</a>
              <a href="/security.txt">Security.txt</a>
              <a href="/humans.txt">Humans.txt</a>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Official Profiles</h3>

            <div className="flex flex-col gap-2 text-sm">

              <a href={identity.social.github} target="_blank">GitHub</a>
              <a href={identity.social.instagram} target="_blank">Instagram</a>
              <a href={identity.social.linkedin} target="_blank">LinkedIn</a>

              <a href="https://x.com/jitendranimod" target="_blank">X / Twitter</a>
              <a href="https://dev.to/jitendrasingh" target="_blank">Dev.to</a>
              <a href="https://medium.com/@i.jitendra.singh0" target="_blank">Medium</a>
              <a href="https://jitendrasinghnimod.hashnode.dev" target="_blank">Hashnode</a>
              <a href="https://youtube.com/@jitendranimod" target="_blank">YouTube</a>

            </div>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">

          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            Digital identity archive for Jitendra Singh Nimod — Full Stack Developer from Rajasthan.
          </p>

        </div>

      </div>

    </footer>
  );
}
