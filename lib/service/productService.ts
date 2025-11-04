import { cache } from "react";

const BASE_URL = "https://fakestoreapi.com";

/**
 * Utility fetcher with timeout, revalidation, and consistent error handling.
 */
async function safeFetch(url: string, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      // ✅ Edge caching (ISR): cache data for 60 seconds
      next: { revalidate: 60 },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    clearTimeout(timeout);
    console.error("Fetch error:", err);
    throw new Error("Unable to load data. Please try again later.");
  }
}

/**
 * ✅ Cached & Revalidated fetch for all products
 * - React `cache()` prevents duplicate calls within a single SSR render
 * - ISR (`revalidate: 60`) caches responses globally for 60 seconds
 */
export const getAllProducts = cache(async () => {
  return safeFetch(`${BASE_URL}/products`);
});

/**
 * ✅ Cached & Revalidated fetch for a single product by ID
 * - Same benefits as above, but parameterized by `id`
 * - Each unique `id` gets its own cache entry
 */
export const getProductById = cache(async (id: string | number) => {
  return safeFetch(`${BASE_URL}/products/${id}`);
});
