export function classify({ status, contentType = '', bodyText = '', err = null, pick = (b) => b }) {
  // 1. Nothing answered at all
  if (err) {
    return { state: 'unreachable', reason: err.name === 'AbortError' ? 'timeout' : 'connect' };
  }
  // 2. The provider is rationing requests: the user can wait and retry
  if (status === 429) return { state: 'busy' };

  // 3. No content is an answer with nothing in it, not a failure
  if (status === 204 || bodyText.trim() === '') {
    return status >= 400 ? { state: 'refused', upstream: status } : { state: 'empty' };
  }

  // 4. A web page where data should be: the data service is not there
  const isJson = contentType.includes('json') || /^[\s]*[\[{]/.test(bodyText);
  if (!isJson) {
    return status >= 400
      ? { state: 'refused', upstream: status }          // e.g. LTA 404 text, MAS 401 XML
      : { state: 'unreachable', reason: 'not-data' };   // e.g. MAS maintenance page on a 200
  }

  // 5. Refusals carried by the status: 400 bad request, 401/403 key, 404 wrong path or missing header
  if (status >= 400 && status < 500) return { state: 'refused', upstream: status };
  if (status >= 500) return { state: 'unreachable', reason: 'upstream-' + status };

  // 6. Refusals hidden inside a 200: read the provider's own envelope
  let body;
  try {
    body = JSON.parse(bodyText);
  } catch {
    return { state: 'unreachable', reason: 'invalid-json' };
  }

  if (body?.Status === 'Error') return { state: 'refused', reason: body.Message };   // URA
  if (body?.success === false)  return { state: 'refused', reason: 'provider said no' }; // REST Countries, Web3Forms
  if (Array.isArray(body) && body[0]?.message) return { state: 'refused', reason: 'bad query' }; // World Bank
  if (typeof body?.code === 'number' && body.code !== 0) {                           // data.gov.sg v2
    return body.code === 24 ? { state: 'busy' } : { state: 'refused', reason: body.errorMsg };
  }

  // 7. Success with nothing in it: an empty list, or the list key missing entirely
  const list = pick(body);
  if (list == null || (Array.isArray(list) && list.length === 0)) return { state: 'empty', body };

  // 8. Data AND a warning in the same reply (OneMap search without a token): render, and log it
  const warning = typeof body?.error === 'string' ? body.error : undefined;
  return { state: 'ok', body, warning };
}
