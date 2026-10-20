import { collectSeoHealth } from "../src/lib/seo-health";

const health = collectSeoHealth();
if (!health.ok) {
  console.error(JSON.stringify(health, null, 2));
  process.exit(1);
}
console.log(
  JSON.stringify(
    {
      ok: true,
      pageCount: health.pageCount,
      speakableBlocks: health.speakableBlocks,
      llmsBytes: health.llmsBytes,
    },
    null,
    2,
  ),
);
