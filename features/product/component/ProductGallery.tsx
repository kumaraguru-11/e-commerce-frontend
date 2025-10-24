"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ProductCard } from "./ProductCard"; // your existing component
import { ProductModal } from "./ProductModal";

type Product = {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
};

type ProductGalleryProps = {
  products: Product[];
};

export function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProduct = products.find((p) => p.id === selectedId);

  return (
    <LayoutGroup>
      <div
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ perspective: 1000 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={`card-${product.id}`}
            onClick={() => setSelectedId(product.id)}
            className="cursor-pointer"
          >
            <ProductCard products={[product]} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
