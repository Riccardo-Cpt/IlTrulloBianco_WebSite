import type { NextConfig } from "next";

// EXPORT=1 genera un sito statico in `out/` (per Cloudflare Pages).
// In quel caso il redirect "/" -> "/it" è gestito da public/_redirects.
const isExport = process.env.EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? { output: "export", images: { unoptimized: true } }
  : {
      async redirects() {
        return [{ source: "/", destination: "/it", permanent: false }];
      },
    };

export default nextConfig;
