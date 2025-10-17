// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { NavigationMenuLink } from "@/components/ui/navigation-menu";

// interface MenuItem {
//   title: string;
//   img: string;
//   href: string;
// }

// interface MegaMenuContentProps {
//   menuItems: MenuItem[];
//   category: string;
// }

// export const MegaMenuContent = ({
//   menuItems,
//   category,
// }: MegaMenuContentProps) => {
//   const [hoveredItem, setHoveredItem] = useState<MenuItem>(menuItems[0]);

//   return (
//     <ul className="flex gap-3 md:w-[400px] lg:w-[550px] h-[250px]  rounded-md overflow-hidden">
//       {/* Left: sub-menu list */}
//       <div className="flex flex-col flex-1 py-2 pl-4">
//         {menuItems.map((item) => (
//           <li key={item.title}>
//             <NavigationMenuLink asChild>
//               <Link
//                 href={item.href}
//                 className={`flex py-2 px-3 rounded-md transition ${
//                   hoveredItem.title === item.title
//                     ? "bg-muted"
//                     : "hover:bg-muted/50"
//                 }`}
//                 onMouseEnter={() => setHoveredItem(item)}
//               >
//                 <p className="font-medium text-sm">{item.title}</p>
//               </Link>
//             </NavigationMenuLink>
//           </li>
//         ))}
//       </div>

//       {/* Right: preview panel */}
//       <div className="w-[50%] flex flex-col justify-between bg-muted/20 p-2 rounded-r-md transition-all duration-300">
//         {hoveredItem && (
//           <div className="flex flex-col items-center justify-center h-full">
//             <div className="relative w-full h-full rounded-md overflow-hidden">
//               <Image
//                 src={hoveredItem.img}
//                 alt={hoveredItem.title}
//                 fill
//                 className="object-fit transition-opacity duration-300 max-h-full max-w-full"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </ul>
//   );
// };

"use client";

import Link from "next/link";
import Image from "next/image";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface MenuItem {
  title: string;
  img: string;
  href: string;
}

interface MegaMenuContentProps {
  menuItems: MenuItem[];
  category: string;
}

export const MegaMenuContent = ({
  menuItems,
  category,
}: MegaMenuContentProps) => {
  // Define a fixed image for each category
  const fixedImage =
    category === "Women"
      ? "/women-accessories.jpg" // 🩷 change to your actual image
      : category === "Children"
      ? "/children-dress.jpg"
      : "/default-banner.jpg";

  return (
    <ul className="flex gap-3 md:w-[400px] lg:w-[550px] h-[250px] rounded-md overflow-hidden">
      {/* Left: sub-menu list */}
      <div className="flex flex-col flex-1 py-2 pl-4">
        {menuItems.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="flex py-2 px-3 rounded-md transition hover:bg-secondary"
              >
                <p className="font-medium text-sm">{item.title}</p>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </div>

      {/* Right: fixed image panel */}
      <div className="w-[50%] flex items-center justify-center bg-muted/20 p-2 rounded-r-md">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <Image
            src={fixedImage}
            alt={`${category} preview`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </ul>
  );
};
