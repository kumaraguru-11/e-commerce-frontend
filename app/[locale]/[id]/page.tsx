"use server";
import { getProductById } from "@/lib/service/productService";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: ProductPageProps) {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return (
      <div className="container mx-auto p-4">
        {/* You can either pass it to ProductCard or display directly */}
        <p>Description</p>
        <p>{product.description}</p>
      </div>
    );
  } catch {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Failed to load product details. Please try again later.
      </div>
    );
  }
}
