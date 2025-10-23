import { Navbar } from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { useLocale } from "next-intl";
import { ProductCard } from "@/features/product/component/ProductCard";
import { ProductCardTwo } from "@/features/product/component/ProductCard2";
import { ProductCardThree } from "@/features/product/component/ProductCard3";

export default function Page() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <>
      <Navbar />
      <section
        // dir={isRTL ? "rtl" : "ltr"}
        className={`p-5 grid gap-5 auto-rows-fr`}
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(clamp(200px, 20%, 300px), 1fr))",
        }}
      >
        <ProductCard />
      </section>
      <Footer />
    </>
  );
}
