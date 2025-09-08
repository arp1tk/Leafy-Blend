import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold">Leafy Blend</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Rooted in nature, crafted with care. We bring you 100% natural and vegan hair oils to solve your biggest
              hair concerns and unlock the secret to healthy, beautiful hair.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:opacity-80 transition-opacity">
                About Us
              </Link>
              <Link href="/products" className="block hover:opacity-80 transition-opacity">
                Our Products
              </Link>
              <Link href="/contact" className="block hover:opacity-80 transition-opacity">
                Contact Us
              </Link>
              <Link href="/faq" className="block hover:opacity-80 transition-opacity">
                FAQ
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-medium">Policies</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block hover:opacity-80 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="block hover:opacity-80 transition-opacity">
                Shipping Policy
              </Link>
              <Link href="/refund" className="block hover:opacity-80 transition-opacity">
                Refund Policy
              </Link>
              <Link href="/terms" className="block hover:opacity-80 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          © 2025, Leafy Blend. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
