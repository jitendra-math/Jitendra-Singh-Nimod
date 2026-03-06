// app/layout.js

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://me.jitubanna.com"),

  title: {
    default:
      "Jitendra Singh Nimod — Full Stack Developer | JSS Originals",
    template: "%s | Jitendra Singh Nimod",
  },

  description:
    "Official identity archive of Jitendra Singh Nimod (JS Nimod), Full Stack Developer from Rajasthan, India and founder of JSS Originals.",

  keywords: [
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Jitendra Nimod",
    "Full Stack Developer Rajasthan",
    "JSS Originals",
    "Jitubanna",
    "Developer Nimod Rajasthan",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Jitendra Singh Nimod — Official Website",
    description:
      "Full Stack Web Developer from Rajasthan, India.",
    url: "https://me.jitubanna.com",
    siteName: "Jitendra Singh Nimod",
    images: [
      {
        url: "/images/og/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Jitendra Singh Nimod",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod",
    description:
      "Full Stack Web Developer from Rajasthan",
    images: ["/images/og/og-main.jpg"],
  },

  robots: {
    index: true,
    follow: true,
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
      "Jitubanna"
    ],
    url: "https://jitubanna.com",
    image:
      "https://me.jitubanna.com/images/main/jitendra-singh-nimod.jpg",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Rajasthan, India and founder of JSS Originals.",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://www.instagram.com/jitendra.07_7",
      "https://www.linkedin.com/in/jitendra-singh07",
      "https://x.com/jitendranimod",
      "https://medium.com/@i.jitendra.singh0",
      "https://dev.to/jitendrasingh",
      "https://www.youtube.com/@jitendranimod"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Govt. Bangur PG College, Didwana",
    },
    worksFor: {
      "@type": "Organization",
      name: "JSS Originals",
    },
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://me.jitubanna.com/#website",
    url: "https://me.jitubanna.com",
    name: "Jitendra Singh Nimod Identity Archive",
    publisher: {
      "@type": "Person",
      name: "Jitendra Singh Nimod",
    },
  };

  return (
    <html lang="en">

      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

      </head>

      <body className="bg-[#0b0b0f] text-zinc-200 antialiased">

        {/* GLOBAL BACKGROUND BLOBS */}
        <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600 opacity-30 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="min-h-screen flex flex-col relative z-10">

          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>

    </html>
  );
}
