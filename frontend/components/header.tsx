"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-44 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Leafy Blend Logo"
                width={176}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Our Products" },
              { href: "/about", label: "About Us" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 transition-colors hover:text-[#394931] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#394931] hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#394931] text-white text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[340px] p-6 flex flex-col justify-between"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <Image src="/logo.png" alt="Leafy Blend" width={120} height={40} className="object-contain" />
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/products", label: "Our Products" },
                  { href: "/about", label: "About Us" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-[#394931] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom Icons */}
              <div className="flex items-center space-x-4 pt-6 border-t mt-6">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#394931] text-white text-xs flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:ring-2 focus:ring-[#394931]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
