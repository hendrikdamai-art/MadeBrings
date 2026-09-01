import { LocaleLink } from "@/components/locale-link";
import Image from "next/image";
import { getBlogPosts, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card">
      <LocaleLink href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#efe0c4]">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </LocaleLink>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-medium tracking-[0.18em] text-primary/70 uppercase">
          {post.readingMinutes} min read
        </p>
        <h2 className="font-heading text-2xl leading-tight tracking-wide text-primary">
          <LocaleLink href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </LocaleLink>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <LocaleLink
          href={`/blog/${post.slug}`}
          className="mt-auto pt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Read the guide
        </LocaleLink>
      </div>
    </article>
  );
}

export function BlogGrid({ posts }: { posts?: BlogPost[] }) {
  const list = posts ?? getBlogPosts();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
