/**
 * Product photos live on an external CDN so the Vercel deployment
 * stays inside the free-plan file budget and can scale independently.
 *
 * Swap IMAGE_CDN later for Cloudinary, Uploadcare, S3 + CloudFront, or
 * another host. Keep `Product.image` as an absolute URL.
 */
const IMAGE_CDN =
  process.env.NEXT_PUBLIC_IMAGE_CDN || "https://images.unsplash.com";

export function cdnImage(id: string, extra = "auto=format&fit=crop&w=1200&q=80") {
  if (id.startsWith("http://") || id.startsWith("https://")) return id;
  return `${IMAGE_CDN}/${id}?${extra}`;
}

export const imageRemoteHosts = [
  { protocol: "https" as const, hostname: "images.unsplash.com" },
  { protocol: "https" as const, hostname: "plus.unsplash.com" },
  { protocol: "https" as const, hostname: "images.pexels.com" },
  { protocol: "https" as const, hostname: "res.cloudinary.com" },
];
