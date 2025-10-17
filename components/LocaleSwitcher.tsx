// "use client";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// // import { Globe } from "lucide-react";
// import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "@/i18n/navigation";
// import { useParams } from "next/navigation";
// import { routing } from "@/i18n/routing";
// import { Locale } from "next-intl";

// export default function LocaleSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const params = useParams();
//   const locale = useLocale();

//   const handleLocaleChange = (nextLocale: string) => {
//     router.replace(
//       // @ts-expect-error — safe since current route params and pathname always match
//       { pathname, params },
//       { locale: nextLocale as Locale }
//     );
//   };

//   return (
//     <div className="flex items-center gap-2">
//       {/* <Globe className="h-4 w-4 text-muted-foreground" /> */}
//       <Select defaultValue={locale} onValueChange={handleLocaleChange}>
//         <SelectTrigger
//           className="w-[80px] h-8 border-none bg-secondary focus:ring-0 focus:ring-offset-0"
//           aria-label="Select a locale"
//         >
//           <SelectValue />
//         </SelectTrigger>
//         <SelectContent>
//           {routing.locales.map((cur) => (
//             <SelectItem key={cur} value={cur}>
//               {cur.toUpperCase()}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const handleLocaleChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error — safe since current route params and pathname always match
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  // Map locale codes to full names
  const localeLabels: Record<string, string> = {
    en: "English",
    ar: "Arabic",
  };

  return (
    <div className="flex items-center gap-2">
      {/* <Globe className="h-4 w-4 text-muted-foreground" /> */}
      <Select defaultValue={locale} onValueChange={handleLocaleChange}>
        <SelectTrigger
          className="w-[110px] h-8 border-none bg-secondary focus:ring-0 focus:ring-offset-0"
          aria-label="Select a locale"
        >
          <SelectValue placeholder={localeLabels[locale]} />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {localeLabels[cur] || cur.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
