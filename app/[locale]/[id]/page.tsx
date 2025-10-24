"use server";
import { getProductById } from "@/lib/service/productService";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: ProductPageProps) {
  try {
    const product = await getProductById(params.id);
    return (
      <div className="container mx-auto p-4">
        {/* You can either pass it to ProductCard or display directly */}
        <p>Description</p>
        <p>{product.description}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Failed to load product details. Please try again later.
      </div>
    );
  }
}
