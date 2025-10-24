// const BASE_URL = "https://fakestoreapi.com";

// export async function getAllProducts() {
//   const controller = new AbortController();
//   const timeout = setTimeout(() => controller.abort(), 5000); // optional 5s timeout

//   try {
//     const res = await fetch(`${BASE_URL}/products`, {
//       signal: controller.signal,
//       next: { revalidate: 60 },
//     });

//     clearTimeout(timeout);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch products: ${res.status}`);
//     }

//     return await res.json();
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     throw new Error("Unable to load products. Please try again later.");
//   }
// }

// export async function getSingleProduct(id: number) {
//   try {
//     const res = await fetch(`${BASE_URL}/products/${id}`, {
//       next: { revalidate: 60 },
//     });
//     if (!res.ok) throw new Error(`Failed to fetch the product with id : ${id}`);

//     return await res.json();
//   } catch (err) {
//     console.error("Error fetching product", err);
//     throw new Error("Unable to load product. Please try again later.");
//   }
// }

// lib/service/productService.ts
import { cache } from "react";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = cache(async () => {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 60 }, // optional - revalidate every 60 seconds
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
});

export const getProductById = cache(async (id: string) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
});
