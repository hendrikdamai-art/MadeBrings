import { BlogGrid } from "@/components/blog-card";
import { getBlogPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes from MadeBrings in Abianbase: Bali holiday tips, a Bali tour guide to contact, and Arak Bali as a traditional drink. Chat first to confirm your order.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        From Abianbase
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        Blog
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
        Practical notes for a Bali holiday, who to contact for a tour guide, and
        how Balinese families use arak. Written by a small shop — not a travel
        brochure.
      </p>
      <div className="mt-10">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
