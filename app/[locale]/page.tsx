import { Navbar } from "@/components/layout/navbar/Navbar";
import { ProductCard } from "@/features/product/component/ProductCard";
import { ProductCardTwo } from "@/features/product/component/ProductCard2";
import { ProductCardThree } from "@/features/product/component/ProductCard3";


export default function Page() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-3 p-4">
         <ProductCard />
      <ProductCardTwo />
      <ProductCardThree />
      </section>
    </>
  );
}
