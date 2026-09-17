import { classify } from './classify.js';

// One call to a provider, decided into a state. It never throws.
export async function fetchState(url, { headers = {}, pick, timeoutMs = 6000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const started = Date.now();
  try {
    const r = await fetch(url, { headers, signal: controller.signal });
    const verdict = classify({
      status: r.status,
      contentType: r.headers.get('content-type') ?? '',
      bodyText: await r.text(), // text first: an empty or HTML body must not throw here
      pick,
    });
    return {
      ...verdict,
      upstream: verdict.upstream ?? r.status,
      retryAfter: r.headers.get('retry-after'),
      ms: Date.now() - started,
    };
  } catch (err) {
    return { ...classify({ err }), ms: Date.now() - started };
  } finally {
    clearTimeout(timer);
  }
}

// The status YOUR route answers with. The screen reads state; the status must never contradict it.
export const STATUS = { ok: 200, empty: 200, refused: 502, busy: 503, unreachable: 504 };
