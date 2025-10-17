// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { useTranslations, useLocale } from "next-intl";
// import { Heart } from "lucide-react";

// type Products = {
//   id: number;
//   title: string;
//   discription: string;
//   price: number;
//   image: string;
// };

// export function ProductCardThree() {
//   const t = useTranslations("Products");
//   const locale = useLocale(); // Get current locale
//   const isRTL = locale === "ar"; // Arabic is RTL

//   const products = t.raw("list");

//   return (
//     <div className="flex gap-2 flex-wrap justify-between">
//       {products.slice(0, 4)?.map((item: Products) => (
//         <Card className="w-[300px] p-0" key={item.id}>
//           <CardHeader className="p-0 relative">
//             <Heart className="absolute left-5 top-5 cursor-pointer text-slate-400" />
//             <div className="rounded-b-2xl rounded-t-xl aspect-square bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//               <img src={item.image} alt={item.title} width={160} height={100} />
//             </div>
//           </CardHeader>
//           <CardContent
//             className={`flex flex-1 flex-col gap-2  ${
//               isRTL ? "items-end text-right" : "items-start text-left"
//             }`}
//           >
//             <p className="flex-1">{item.title}</p>
//             <p className="font-bold text-primary">Rs.{item.price}</p>
//           </CardContent>

//           <CardFooter className="mt-auto pb-3">
//             <Button variant="outline" className="w-full">{t("addToCart")}</Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import { Heart } from "lucide-react";

type Products = {
  id: number;
  title: string;
  discription: string;
  price: number;
  image: string;
};

export function ProductCardThree() {
  const t = useTranslations("Products");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const products = t.raw("list");

  return (
    <div className="flex gap-2 flex-wrap justify-between">
      {products.slice(0, 4)?.map((item: Products) => (
        <Card
          className="w-[300px] p-0 overflow-hidden relative group"
          key={item.id}
        >
          {/* === Header Image with Inverted Corner === */}
          <CardHeader className="p-0 gap-0 relative border-b-[1px] border-card-5">
            <div className="relative w-full aspect-square bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                width={160}
                height={100}
                className="object-contain z-10"
              />

              {/* Inverted top-left corner */}
              <div
                className="absolute top-0 left-0 w-[100px] h-[100px] bg-card dark:bg-card
                [clip-path:polygon(0_0,100%_0,0_100%)] z-0"
              />
              <div
                className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-card dark:bg-card
              [clip-path:polygon(100%_100%,0_100%,100%_0)] z-0"
              />

              {/* Heart icon positioned over the inverted corner */}
              <Heart
                className="absolute top-2 left-2 text-slate-400 cursor-pointer
                hover:text-red-500 transition-colors duration-200 z-10"
                size={22}
              />
            </div>
          </CardHeader>

          {/* === Product Info === */}
          <CardContent
            className={`flex flex-1 flex-col gap-2 mt-2 ${
              isRTL ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <p className="flex-1 font-medium">{item.title}</p>
            <p className="font-bold text-primary">Rs.{item.price}</p>
          </CardContent>

          {/* === Footer === */}
          <CardFooter className="mt-auto pb-3">
            <Button variant="outline" className="w-full">
              {t("addToCart")}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
