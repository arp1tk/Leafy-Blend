import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { GeistSans, GeistMono } from "geist/font"  
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Leafy Blend - Natural Vegan Hair Care",
  description:
    "Rediscover your hair's natural strength with Leafy Blend's all-natural, vegan hair oils. 100% natural, eco-friendly, and results-oriented.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable} ${GeistSans.variable}`}
      >
        <Header/>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  )
}
