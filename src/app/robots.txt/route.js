export async function GET() {
  const text = `
User-agent: *
Allow: /

Sitemap: https://me.jitubanna.com/sitemap.xml
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
