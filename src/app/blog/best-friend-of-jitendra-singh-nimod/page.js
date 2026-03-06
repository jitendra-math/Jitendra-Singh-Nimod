// src/app/blog/best-friend-of-jitendra-singh-nimod/page.js

import { 
  Infinity, 
  CameraOff, 
  MapPin, 
  GraduationCap, 
  Compass, 
  Heart, 
  Sparkles,
  Route,
  Clock,
  Instagram,
  Quote
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "Who Is the Best Friend of Jitendra Singh Nimod?",
  description:
    "A digital tribute to the lifelong friendship between Jitendra Singh Nimod and Nikhil Sambhariya. A bond that started in Nimod and transcends time.",
  keywords: [
    "Jitendra Singh Nimod best friend",
    "Nikhil Sambhariya",
    "Friendship story",
    "Nimod village friends"
  ],
  alternates: { canonical: "/blog/best-friend-of-jitendra-singh-nimod" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#000000] text-zinc-400 font-sans selection:bg-rose-500/30 pb-32 overflow-x-hidden">
      
      {/* ===== HERO SECTION (EMOTIONAL & CINEMATIC) ===== */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Deep cinematic glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-rose-500/20 via-fuchsia-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-300 text-xs font-medium tracking-widest uppercase mb-10 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span>Brotherhood Archive</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Who Is the Best Friend of <br className="hidden md:block" />
            <span className="text-zinc-500 text-3xl md:text-4xl">Jitendra Singh Nimod?</span>
          </h1>

          {/* THE BIG NAME REVEAL */}
          <div className="my-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 blur-2xl opacity-20 scale-y-50"></div>
            <h2 className="relative text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-300 to-purple-400 tracking-tighter drop-shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              Nikhil Sambhariya
            </h2>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            While the internet knows the developer, the code, and the projects, behind the screen exists a personal story of a friendship that has stood the ultimate test of time. 
          </p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 space-y-24">

        {/* ===== THE MASTERPIECE VAULT: 0 PHOTOS, INFINITE MEMORIES ===== */}
        <section className="relative group perspective-1000">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 rounded-[3rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
          
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-zinc-900/90 to-black border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center text-center transform transition-transform duration-700 hover:scale-[1.02]">
            
            {/* Glassy Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <div className="flex items-center justify-center gap-6 md:gap-16 mb-12 relative z-10">
              
              {/* 0 Photos */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  <CameraOff className="w-6 h-6 text-zinc-500" />
                </div>
                <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 tracking-tighter">0</span>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-4 font-semibold">Photos</span>
              </div>

              {/* Divider */}
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-rose-500/30 to-transparent"></div>

              {/* Infinite Memories */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                  <Infinity className="w-8 h-8 text-rose-400" />
                </div>
                <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-300 to-rose-700 tracking-tighter">∞</span>
                <span className="text-xs uppercase tracking-[0.3em] text-rose-400 mt-4 font-semibold drop-shadow-md">Memories</span>
              </div>

            </div>

            {/* Premium Quote */}
            <div className="relative z-10 max-w-lg mt-4">
              <Quote className="w-8 h-8 text-rose-500/20 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed italic">
                "We didn't capture moments in pixels, we etched them into our souls. True brotherhood doesn't need a gallery to prove it exists."
              </p>
            </div>
            
          </div>
        </section>

        {/* ===== THE TIMELINE (MOBILE-FIRST SCROLLYTELLING) ===== */}
        <section className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-white/10 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16 relative z-10">
            
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 md:text-right pl-20 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-[26px] top-0 w-14 h-14 rounded-full bg-black border border-rose-500/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  <MapPin className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">The Genesis in Nimod</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  It started at <strong>N.B.N. Secondary School</strong>. Around the 3rd or 4th grade, a childhood bond was forged. Sharing benches, routines, and the simple joys of village school life created a foundation stronger than concrete.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 pl-20 md:pl-12 relative">
                <div className="absolute left-0 md:-left-[26px] top-0 w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Clock className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Together Until Class 10</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  For years, they walked the same academic path. Exam preparations, classroom jokes, and growing up together. These formative years turned a regular friendship into an unbreakable brotherhood.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 md:text-right pl-20 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-[26px] top-0 w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Route className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">The Divergence</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  After 10th grade, paths physically split. Nikhil went to <strong>Tagore High School</strong> for Arts, while Jitendra pursued Mathematics at <strong>Kota Career School</strong> in Kuchaman City.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

          </div>
        </section>

        {/* ===== THE SPLIT BUT CONNECTED CARD ===== */}
        <section className="pt-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-white/[0.05] border border-white/10">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">Different Paths, Same Destination</h2>
            </div>
            
            <p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light">
              Choosing different academic streams reflects individual passions. Nikhil chose the creative canvas of Arts, while Jitendra dove into the logical architecture of Mathematics. Yet, the friendship never required them to be in the same classroom to remain in the same chapter of life.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-6 md:p-8 rounded-3xl bg-black border border-white/5 flex flex-col items-center text-center shadow-lg">
                <GraduationCap className="w-10 h-10 text-amber-400 mb-4" />
                <span className="text-white font-medium text-lg">Nikhil</span>
                <span className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-semibold">Arts Stream</span>
              </div>
              <div className="p-6 md:p-8 rounded-3xl bg-black border border-white/5 flex flex-col items-center text-center shadow-lg">
                <Sparkles className="w-10 h-10 text-cyan-400 mb-4" />
                <span className="text-white font-medium text-lg">Jitendra</span>
                <span className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-semibold">Mathematics</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== THE FINAL TRIBUTE (INSTAGRAM INTEGRATION) ===== */}
        <section className="text-center pt-20 pb-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12">
            While life takes people in different directions, <strong className="text-white font-semibold">true friendships remain constant</strong>. 
          </p>
          
          {/* THE "LOVE YOU BRUH" BUTTON */}
          <div className="inline-block relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <a 
              href="https://instagram.com/_nikhil0518" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 px-8 py-5 bg-black border border-rose-500/30 rounded-full hover:bg-zinc-900 transition-all duration-300 transform group-hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-rose-400 font-bold text-lg tracking-wide uppercase">Love you bruh ❤️</p>
                <p className="text-zinc-400 text-sm font-medium tracking-wider">@_nikhil0518</p>
              </div>
            </a>
          </div>

        </section>

      </article>
    </main>
  );
}
