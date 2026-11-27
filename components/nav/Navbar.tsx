"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Package,
  Layers,
  Info,
  Mail,
  Search,
  ShoppingCart,
  User,
  LogOut,
  Users,
  CreditCard,
} from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "../theme/ThemeToggle";
import { auth } from "@/lib/auth";
import { logout } from "@/lib/actions/auth";
type Session = typeof auth.$Infer.Session;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

const mainNavItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
    items: components,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Layers,
    items: [
      {
        title: "Electronics",
        href: "/categories/electronics",
        description: "Phones, laptops, gadgets and more",
      },
      {
        title: "Fashion",
        href: "/categories/fashion",
        description: "Clothing, shoes, accessories",
      },
      {
        title: "Home & Garden",
        href: "/categories/home",
        description: "Furniture, decor, kitchen items",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export function AppNav({ session }: { session: Session | null }) {
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = React.useState(false);

  // Desktop Navigation Component
  const DesktopNav = () => (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-2">
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  // Mobile Navigation Component
  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {/* Mobile Search */}
          <div className="px-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-9" />
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="space-y-2">
            {mainNavItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <>
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-4 py-2 text-sm hover:bg-accent rounded-lg transition-colors"
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile User Actions */}
          <div className="border-t pt-6 space-y-4">
            <div className="px-4">
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
            <div className="px-4">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center gap-4">
            <MobileNav />

            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">B</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">
                BrandName
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 w-50 lg:w-75"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              {/* Cart with Badge */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
                <span className="sr-only">Cart</span>
              </Button>

              {/* User Profile */}

              {/* Desktop CTA */}
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer hover:scale-105 transition-transform">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback>
                        {session.user?.name?.charAt(0)?.toUpperCase() || "GU"}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    // className="translate-y-2" // 8px gap
                    align="center"
                    sideOffset={20} // Additional offset from trigger
                  >
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session.user?.name || "Guest User"}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session.user?.email || "guest@example.com"}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Users className="mr-2 h-4 w-4" />
                      Team
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-destructive focus:text-destructive"
                      onClick={async () => await logout()}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "secondary",
                    className: "hidden md:inline-flex ml-2",
                  })}
                >
                  Sign In
                </Link>
              )}
              <div className=" px-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ListItem Component (reused from your code)
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
