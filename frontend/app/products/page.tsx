"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

// Define a type for our product for better type-safety
type Product = {
  _id: string
  name: string
  slug: string
  price: number
  images: string[]
  description: string
  rating: {
    average: number
    totalReviews: number
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/")
        if (!response.ok) {
          throw new Error("Failed to fetch products. Please try again later.")
        }
        const data = await response.json()
        setProducts(data)
      } catch (err: any) {
        setError(err.message)
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const addToBag = (productName: string) => {
    toast.success(`${productName} added to bag!`)
  }

  const showProduct = (slug: string) => {
    router.push(`/products/${slug}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <main className="py-20 px-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <section className="pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">
                  Our <span className="text-primary">Natural Products</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Discover our range of natural hair oils, crafted with the finest ingredients for healthy,
                  beautiful hair.
                </p>
              </div>
            </div>
          </section>

          {/* Products Grid */}
        {/* Products Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
  {products.map((product) => (
    <div
      key={product._id}
      className="group flex flex-col bg-background border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative h-64 flex items-center justify-center bg-white overflow-hidden">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {product.rating.average >= 4.8 && (
          <Badge
            variant="outline"
            className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full"
          >
            TOP RATED
          </Badge>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-grow p-4 border-t border-gray-200 text-center">
        <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      </div>

      {/* Action Section */}
      <div className="p-4 border-t border-gray-200 flex flex-col items-center gap-3">
        <span className="font-semibold text-lg text-gray-900">₹{product.price}</span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => addToBag(product.name)}
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-lg px-4"
          >
            ADD TO BAG
          </Button>
          <Button
            size="sm"
            onClick={() => showProduct(product.slug)}
            className="bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg px-4"
          >
            SHOW PRODUCT
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>


        
        </div>
      </main>

      <Footer />
    </div>
  )
}
