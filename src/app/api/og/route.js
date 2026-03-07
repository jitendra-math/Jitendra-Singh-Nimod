// src/app/api/og/route.js

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          Jitendra Singh Nimod
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 30,
            marginTop: 20,
            color: "#60a5fa",
            fontWeight: 500,
          }}
        >
          Full Stack Developer • B.Sc Mathematics Student
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            opacity: 0.85,
          }}
        >
          Personal Website & Digital Identity
        </div>

        {/* Brand */}
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          me.jitubanna.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
