export function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function speakableStats(blocks: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(blocks).map(([key, text]) => {
      const words = wordCount(text);
      return [
        key,
        {
          words,
          ok: words >= 130 && words <= 170,
        },
      ];
    }),
  );
}
