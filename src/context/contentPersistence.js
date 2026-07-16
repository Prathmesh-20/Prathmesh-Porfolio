const CONTENT_QUERY_PARAM = "content";

export function encodeContentForUrl(content) {
  if (!content) {
    return "";
  }

  return encodeURIComponent(JSON.stringify(content));
}

export function decodeContentFromUrl(value) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}

export function getContentFromSearch(search = "") {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(search || window.location.search);
  const encoded = params.get(CONTENT_QUERY_PARAM);
  return decodeContentFromUrl(encoded);
}

export function syncContentToUrl(content) {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.set(CONTENT_QUERY_PARAM, encodeContentForUrl(content));

  const queryString = params.toString();
  const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

  window.history.replaceState({}, "", nextUrl);
}

export function clearContentFromUrl() {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.delete(CONTENT_QUERY_PARAM);

  const queryString = params.toString();
  const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

  window.history.replaceState({}, "", nextUrl);
}

export { CONTENT_QUERY_PARAM };
