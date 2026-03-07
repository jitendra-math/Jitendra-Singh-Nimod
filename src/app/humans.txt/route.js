// src/app/humans.txt/route.js

export async function GET() {
  const text = `
/* TEAM */
Name: Jitendra Singh Nimod
Role: Full Stack Web Developer
Title: Founder of JSS Originals
Location: Rajasthan, India

/* ALIASES */
Jitendra Nimod
Jitu Nimod
JS Nimod
Jitendra Singh
Jitubanna

/* WEBSITE */
Primary Identity Site: https://me.jitubanna.com
Main Domain: https://jitubanna.com
Legacy Domain: https://jitendrasingh.online

/* BRAND */
Brand Name: JSS Originals
Project: Personal Digital Identity Website

/* SOCIAL PROFILES */
GitHub: https://github.com/jitendra-math
Instagram: https://www.instagram.com/jitendra.07_7
LinkedIn: https://www.linkedin.com/in/jitendra-singh07
Twitter/X: https://x.com/jitendranimod

/* TECHNOLOGY */
Framework: Next.js
Language: JavaScript
Hosting: Vercel

/* NOTE */
This website represents the official digital identity of
Jitendra Singh Nimod across the internet.

/* UPDATED */
${new Date().toISOString()}
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store",
    },
  });
}
