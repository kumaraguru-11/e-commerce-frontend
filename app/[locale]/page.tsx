"use server";
import { ProductCard } from "@/features/product/component/ProductCard";
import { getAllProducts } from "@/lib/service/productService";

export default async function Page() {
  let products = [];
  let error: string | null = null;

  try {
    products = await getAllProducts();
  } catch (err: any) {
    error = err.message;
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
