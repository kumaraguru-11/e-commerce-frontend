"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants, Button } from "@/components/ui/button";
import { Menu, ShoppingCart, UserRound, Search } from "lucide-react";
import { MegaMenuContent } from "./MegaMenuContent";
import Profile from "./Profile";

const womensMenu = [
  { title: "Dresses", img: "/women-dress.jfif", href: "/women/dresses" },
  { title: "Makeup", img: "/women-makeup.jpg", href: "/women/makeup" },
  {
    title: "Other Items",
    img: "/women-accessories.jpg",
    href: "/women/others",
  },
];

const childrenMenu = [
  { title: "Clothes", img: "/children-dress.jpg", href: "/children/clothes" },
  { title: "Toys", img: "/children-toys.jpg", href: "/children/toys" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleDialogOpen = (): void => {
    setTrigger(true); // Open dialog
  };

  const handleDialogClose = (): void => {
    setTrigger(false); // Close dialog
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        {/* Left: Logo */}
        <Link href="/" rel="noreferrer noopener">
          <Image
            width={70}
            height={70}
            src="/bird-logo-removebg.png"
            alt="img"
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Women</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuContent menuItems={womensMenu} category="Women" />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Children</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuContent menuItems={childrenMenu} category="Children" />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#electronics"
                className={buttonVariants({ variant: "ghost" })}
              >
                Electronics
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#discounts"
                className={buttonVariants({ variant: "ghost" })}
              >
                Discounts
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full cursor-pointer hidden sm:flex"
            title="search"
          >
            <Search />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full cursor-pointer"
            title="cart"
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full cursor-pointer"
            title="profile"
            onClick={handleDialogOpen}
          >
            <UserRound />
          </Button>

          {/* Mobile Menu Icon */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex md:hidden rounded-full"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[260px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-bold text-lg">
                  Shadcn/React
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-3 mt-6">
                {["Women", "Children", "Electronics", "Discounts"].map(
                  (label) => (
                    <Link
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      {label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/**User Profile Dialog Box */}
      <Profile isOpen={trigger} onClose={handleDialogClose} />
    </header>
  );
};
