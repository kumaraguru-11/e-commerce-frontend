"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";

type Product = {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  products: Product[];
};

export function ProductCard({ products }: ProductCardProps) {
  const router = useRouter();
  const t = useTranslations("Products");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const handleProductClick = (item: Product) => {
    router.push(`/${item.id}`); // ✅ navigate to product details page
  };

  // const products = t.raw("list");

  return (
    <>
      {products?.map((item) => (
        <Card
          key={item.id}
          className="flex flex-col w-full px-0" //max-w-[300px]
          style={{
            fontSize: "clamp(0.8rem, 1.5vw, 1rem)", // smooth font scaling
          }}
          onClick={() => handleProductClick(item)}
        >
          <CardHeader>
            <div
              className="rounded bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
              style={{
                aspectRatio: "1 / 1",
                padding: "0.5rem", // optional, small padding around image
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "80%", // fill more of container
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </div>
          </CardHeader>

          <CardContent
            className={`flex flex-1 flex-col gap-1`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <p
              className="flex-1"
              title={item.title}
              style={{
                fontSize: "clamp(1rem, 4vw, 1rem)", // bigger min font
              }}
            >
              {item.title}
            </p>
            <p
              className="font-bold text-primary"
              style={{
                fontSize: "clamp(1rem, 4vw, 1rem)", // bigger min font
              }}
            >
              Rs.{item.price}
            </p>
          </CardContent>

          <CardFooter className="mt-auto flex justify-between gap-2">
            <Button
              variant="outline"
              style={{
                fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
                padding:
                  "clamp(0.3rem, 0.7vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              <ShoppingBag
                style={{
                  width: "clamp(16px, 3vw, 22px)",
                  height: "clamp(16px, 3vw, 22px)",
                  marginRight: "0.3em",
                }}
              />
              {t("addToCart")}
            </Button>
            <Button
              variant="outline"
              style={{
                padding: "clamp(0.3rem, 0.7vw, 0.5rem)",
              }}
            >
              <Heart
                className="text-slate-400"
                style={{
                  width: "clamp(14px, 2vw, 20px)",
                  height: "clamp(14px, 2vw, 20px)",
                }}
              />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
