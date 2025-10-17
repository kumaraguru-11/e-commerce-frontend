import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import { Heart, ShoppingBag } from "lucide-react";

type Products = {
  id: number;
  title: string;
  discription: string;
  price: number;
  image: string;
};

export function ProductCard() {
  const t = useTranslations("Products");
  const locale = useLocale(); // Get current locale
  const isRTL = locale === "ar"; // Arabic is RTL

  const products = t.raw("list");

  return (
    <div className="flex gap-2 flex-wrap justify-between">
      {products.slice(0, 4)?.map((item: Products) => (
        <Card className="w-[300px]" key={item.id}>
          {/* <Heart className="absolute left-5 top-5 cursor-pointer text-slate-400" /> */}
          <CardHeader>
            <div className="rounded aspect-square bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img src={item.image} alt={item.title} width={150} height={100} />
            </div>
          </CardHeader>
          <CardContent
            className={`flex flex-1 flex-col gap-2 ${
              isRTL ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <p className="flex-1">{item.title}</p>
            <p className="font-bold text-primary">Rs.{item.price}</p>
          </CardContent>

          <CardFooter className="mt-auto flex justify-between">
            <Button variant="outline">
              <ShoppingBag />
              {t("addToCart")}
            </Button>
            <Button variant="outline">
              {" "}
              <Heart className="text-slate-400" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
