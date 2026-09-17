// Puts a participant into a chosen state on cue, for a usability session.
// Works ONLY where ALLOW_SIMULATE is "true". In Vercel, set it for Preview and never for Production:
// a live route that fails whenever a caller asks it to is a denial of service handed to anyone who reads the URL.
const STATES = ['loading', 'empty', 'refused', 'busy', 'unreachable'];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Returns true if it has already answered, false if the real call should run.
export async function simulated(req, res) {
  if (process.env.ALLOW_SIMULATE !== 'true') return false;
  const want = String(req.query?.simulate ?? '');
  if (!STATES.includes(want)) return false;              // any other value is ignored, not an error
  res.setHeader('X-Simulated', want);
  const asOf = new Date().toISOString();
  switch (want) {
    case 'loading':
      await wait(6000);                                   // then the real call runs as normal
      return false;
    case 'empty':
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ state: 'empty', data: [], asOf });                 // same envelope as the real thing
      return true;
    case 'refused':
      res.setHeader('Cache-Control', 'no-store');
      res.status(502).json({ state: 'refused', data: [], upstream: 401, asOf });
      return true;
    case 'busy':
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Retry-After', '10');
      res.status(503).json({ state: 'busy', data: [], upstream: 429, asOf });
      return true;
    case 'unreachable':
      await wait(6000);                                   // a real outage makes the user wait first
      res.setHeader('Cache-Control', 'no-store');
      res.status(504).json({ state: 'unreachable', data: [], reason: 'timeout', asOf });
      return true;
  }
}
