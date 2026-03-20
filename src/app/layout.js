// app/layout.js – Ultra-premium SEO + Structured Data

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://me.jitubanna.com"),

  title: {
    default: "Jitendra Singh Nimod — Full Stack Developer | JSS Originals",
    template: "%s | Jitendra Singh Nimod",
  },

  description:
    "Official identity archive of Jitendra Singh Nimod (JS Nimod), Full Stack Developer from Rajasthan, India and founder of JSS Originals. Discover his aliases, projects, and digital presence.",

  keywords: [
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Jitendra Nimod",
    "Jitubanna",
    "Jitu Banna",
    "Full Stack Developer Rajasthan",
    "Web Developer Kuchaman City",
    "JSS Originals",
    "Nimod Rajasthan",
    "Developer from Rajasthan",
    "Kuchaman City developer",
    "Didwana developer",
    "Freelance web developer India",
    "Next.js developer India",
    "React developer Rajasthan",
  ],

  authors: [{ name: "Jitendra Singh Nimod", url: "https://jitubanna.com" }],

  creator: "Jitendra Singh Nimod",

  publisher: "JSS Originals",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Jitendra Singh Nimod — Official Website",
    description:
      "Full Stack Web Developer from Rajasthan, India. Founder of JSS Originals.",
    url: "https://me.jitubanna.com",
    siteName: "Jitendra Singh Nimod",
    images: [
      {
        url: "/images/og/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Jitendra Singh Nimod – Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "profile",
    profile: {
      firstName: "Jitendra",
      lastName: "Nimod",
      username: "jsnimod",
      gender: "male",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod",
    description: "Full Stack Web Developer from Rajasthan",
    images: ["/images/og/og-main.jpg"],
    creator: "@jitendranimod",
    site: "@jitendranimod",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://me.jitubanna.com",
  },

  category: "technology",

  other: {
    "theme-color": "#2563EB",
    "color-scheme": "light dark",
    "apple-mobile-web-app-title": "Jitendra Nimod",
    "application-name": "Jitendra Nimod Identity",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://me.jitubanna.com/#person",
    name: "Jitendra Singh Nimod",
    alternateName: [
      "JS Nimod",
      "Jitu Nimod",
      "Jitendra Nimod",
      "Jitubanna",
      "Jitu Banna",
    ],
    url: "https://jitubanna.com",
    image: "https://me.jitubanna.com/images/main/jitendra-singh-nimod.jpg",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Rajasthan, India and founder of JSS Originals.",
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "SEO",
      "Web Performance",
    ],
    sameAs: [
      "https://github.com/jitendra-math",
      "https://www.instagram.com/jitendra.07_7",
      "https://www.linkedin.com/in/jitendra-singh07",
      "https://x.com/jitendranimod",
      "https://medium.com/@i.jitendra.singh0",
      "https://dev.to/jitendrasingh",
      "https://www.youtube.com/@jitendranimod",
      "https://jitubanna.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    birthPlace: {
      "@type": "Place",
      name: "Nimod village",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nimod",
        addressRegion: "Rajasthan",
        addressCountry: "India",
      },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Govt. Bangur PG College, Didwana",
    },
    worksFor: {
      "@type": "Organization",
      name: "JSS Originals",
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    birthDate: "2009-05-14",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://me.jitubanna.com/#organization",
    name: "JSS Originals",
    url: "https://jitubanna.com",
    logo: "https://me.jitubanna.com/android-chrome-512x512.png",
    founder: {
      "@type": "Person",
      name: "Jitendra Singh Nimod",
    },
    description:
      "Digital development brand by Jitendra Singh Nimod, creating modern web applications and digital identity platforms.",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://www.instagram.com/jitendra.07_7",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://me.jitubanna.com/#website",
    url: "https://me.jitubanna.com",
    name: "Jitendra Singh Nimod Identity Archive",
    description:
      "Official identity archive of Jitendra Singh Nimod, Full Stack Developer from Rajasthan.",
    publisher: {
      "@type": "Person",
      name: "Jitendra Singh Nimod",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://me.jitubanna.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Adsterra / Popunder */}
        <script
          async
          src="https://pl28945867.profitablecpmratenetwork.com/98/21/b6/9821b6d61ed08dcbe09221148783d85a.js"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://medium.com" />
      </head>

      <body className="bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-800 antialiased selection:bg-[#2563EB]/30 selection:text-white">
        <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#2563EB]/5 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/5 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}