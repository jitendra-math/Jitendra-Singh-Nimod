// src/app/security.txt/route.js

export async function GET() {
  const text = `
Contact: https://me.jitubanna.com/contact
Preferred-Languages: en
Canonical: https://me.jitubanna.com/security.txt
Policy: https://jitubanna.com

# Owner
Name: Jitendra Singh Nimod
Website: https://me.jitubanna.com
Main Domain: https://jitubanna.com
Legacy Domain: https://jitendrasingh.online
Brand: JSS Originals
Location: Rajasthan, India

# Expiry
Expires: 2027-01-01T00:00:00.000Z
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store",
    },
  });
}
