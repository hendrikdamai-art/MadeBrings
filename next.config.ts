import type { NextConfig } from "next";

const llmsCache = "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800";

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
  async redirects() {
    return [
      {
        source: "/alcohol-delivery-service",
        destination: "/alcohol-delivery-bali",
        permanent: true,
      },
      {
        source: "/id/alcohol-delivery-service",
        destination: "/id/alcohol-delivery-bali",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [{ key: "Cache-Control", value: llmsCache }],
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Cache-Control", value: llmsCache }],
      },
    ];
  },
};

export default nextConfig;
