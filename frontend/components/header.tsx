"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
        <Link href="/" className="flex items-center">
     <div className="h-12 w-40 overflow-hidden flex items-center justify-center">
        <Image
          src="/logo.png"  // ✅ Path to your logo
          alt="Leafy Blend Logo"
          width={160}      // ✅ Matches w-40 (40 * 4 = 160px)
          height={48}      // ✅ Matches h-12 (12 * 4 = 48px)
          className="object-contain"
          priority
        />
      </div>
    </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Our Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium hover:text-primary transition-colors">
                  Our Products
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/faq" className="text-lg font-medium hover:text-primary transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative max-w-md mx-auto">
              <Input type="search" placeholder="Search products..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
