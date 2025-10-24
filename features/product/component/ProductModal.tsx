"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

type Product = {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
};

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modal container */}
      <motion.div
        layoutId={`card-${product.id}`}
        className="
          bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl 
          w-[90%] max-w-3xl  /* wider modal */
          max-h-[85vh]       /* reduce height to fit screen */
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Image section */}
        <motion.div
          layoutId={`image-${product.id}`}
          className="flex-1 bg-gray-100 flex items-center justify-center p-4"
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[40vh] object-contain w-auto"
          />
        </motion.div>

        {/* Content section */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <button
              onClick={onClose}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {product.description && (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>
          )}

          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-primary">
              ₹{product.price}
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
