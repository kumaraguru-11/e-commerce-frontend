"use server";
import { ProductCard } from "@/features/product/component/ProductCard";
import { getAllProducts } from "@/lib/service/productService";

export default async function Page() {
  let products = [];
  let error: string | null = null;

  try {
    products = await getAllProducts();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error message:", err.message);
      error = err.message; // ✅ now error is reassigned
    } else {
      console.error("Unknown error:", err);
      error = "Unknown error occurred";
    }
  }

  return (
    <>
      {error ? (
        <p className="text-red-500 text-center col-span-full">{error}</p>
      ) : (
        <ProductCard products={products} />
      )}
    </>
  );
}
