import { revalidatePath } from "next/cache";
import { seoRevalidatePaths } from "@/lib/geo";
import { getBlogPosts } from "@/lib/blog";
import { getCategories, getProducts } from "@/lib/commerce";
import { localizedPath } from "@/lib/locale-path";

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  const bearer = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  const query = new URL(request.url).searchParams.get("secret");
  return bearer === secret || query === secret;
}

function allPaths() {
  const posts = getBlogPosts().map((post) => `/blog/${post.slug}`);
  const products = getProducts().map((product) => `/product/${product.slug}`);
  const categories = getCategories().map((category) => category.href);
  const english = [...seoRevalidatePaths, ...posts, ...products, ...categories];
  return [
    ...english,
    ...english.map((path) => (path.startsWith("/llms") || path.endsWith(".xml") ? path : localizedPath("id", path))),
  ];
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const paths = allPaths();
  for (const path of paths) {
    revalidatePath(path);
  }

  return Response.json({
    ok: true,
    revalidated: paths.length,
    at: new Date().toISOString(),
  });
}
