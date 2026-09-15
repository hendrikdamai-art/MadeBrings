export function GET() {
  return Response.json({
    ok: true,
    service: "madebrings-seo",
    cronSecretConfigured: Boolean(process.env.CRON_SECRET),
    siteUrlConfigured: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  });
}
