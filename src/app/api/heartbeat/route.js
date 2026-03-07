// src/app/api/heartbeat/route.js

export async function GET() {
  const data = {
    site: "https://me.jitubanna.com",
    domain: "jitubanna.com",
    status: "active",
    owner: "Jitendra Singh Nimod",
    project: "Personal Digital Identity",
    version: "2.0",
    uptime: "operational",
    environment: "production",
    updated: new Date().toISOString(),
    message: "Site is active, maintained, and running on Next.js infrastructure",
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
