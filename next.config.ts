import type { NextConfig } from "next";

const llmsCache = [
  {
    key: "Cache-Control",
    value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
  },
  {
    key: "Content-Type",
    value: "text/plain; charset=utf-8",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  allowedDevOrigins: ["127.0.0.1"],
  async headers() {
    return [
      { source: "/llms.txt", headers: llmsCache },
      { source: "/llms-full.txt", headers: llmsCache },
    ];
  },
};

export default nextConfig;
