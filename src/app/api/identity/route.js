// src/app/api/identity/route.js

export async function GET() {
  const identity = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Jitendra Singh Nimod",

    alternateNames: [
      "Jitendra Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitendra Singh",
      "Jitubanna"
    ],

    title:
      "Full Stack Web Developer | B.Sc Mathematics Student | Founder of JSS Originals",

    birthDate: "2009-05-14",

    profession: "Full Stack Web Developer",

    education: {
      degree: "B.Sc Mathematics",
      college: "Govt. Bangur PG College, Didwana"
    },

    location: {
      village: "Nimod",
      city: "Kuchaman City",
      state: "Rajasthan",
      country: "India"
    },

    brand: {
      name: "JSS Originals",
      founder: "Jitendra Singh Nimod"
    },

    domains: {
      primary: "https://jitubanna.com",
      identity: "https://me.jitubanna.com",
      legacy: "https://jitendrasingh.online"
    },

    website: "https://me.jitubanna.com",

    profiles: {
      github: "https://github.com/jitendra-math",
      instagram: "https://www.instagram.com/jitendra.07_7",
      linkedin: "https://www.linkedin.com/in/jitendra-singh07"
    },

    identityKeywords: [
      "Jitendra Singh Nimod",
      "Jitendra Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitubanna",
      "Full Stack Developer Rajasthan"
    ],

    verified: true,

    project: "Personal Digital Identity Website",

    lastUpdated: new Date().toISOString()
  };

  return new Response(JSON.stringify(identity, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    },
  });
}
