// Simple sliding-window rate limiter kept in server memory.
// On Vercel each server instance has its own memory, so this is a best-effort
// guard against bursts and bots. For a strict global limit, swap in Upstash Redis.

type Hit = number[];
const buckets = new Map<string, Hit>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    const retryAfter = Math.ceil((windowMs - (now - hits[0])) / 1000);
    return { ok: false as const, retryAfter };
  }
  hits.push(now);
  buckets.set(key, hits);

  // keep memory bounded
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (!v.some((t) => now - t < windowMs)) buckets.delete(k);
  }
  return { ok: true as const, retryAfter: 0 };
}
