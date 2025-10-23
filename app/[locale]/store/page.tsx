import Image from "next/image";

// ✅ This component is Server-Side Rendered by default in App Router
export default async function ProductsPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    // Optional: cache strategy (no-store ensures fresh data every time)
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition"
        >
          <div className="w-full h-56 flex items-center justify-center mb-4">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain h-48 w-auto"
            />
          </div>
          <h2 className="font-semibold text-lg mb-2 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
