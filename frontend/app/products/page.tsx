"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { toast } from "sonner"

const products = [
  {
    id: 1,
    name: "Leafy Blend Herbal Hair Oil",
    price: 599,
    
    image: "/product.png",
    description: "Combats hair fall, stimulates growth, adds shine.",
    benefits: ["Reduces hair fall by 93%", "Stimulates natural growth", "Adds natural shine", "Strengthens hair roots"],
    ingredients: ["Amla", "Bhringraj", "Fenugreek", "Coconut Oil", "Lavender"],
    rating: 4.8,
    
  },
  {
    id: 2,
    name: "Leafy Blend Castor Oil",
    price: 599,
    image: "/",
    description: "Thickens hair, strengthens roots, nourishes scalp.",
    benefits: ["Thickens hair naturally", "Strengthens from roots", "Nourishes dry scalp", "Promotes eyebrow growth"],
    ingredients: ["Pure Castor Oil", "Rosemary", "Peppermint", "Vitamin E"],
    rating: 4.9,

  },
  {
    id: 3,
    name: "Leafy Blend Coconut Oil",
    price: 599,
   
    image: "/",
    description: "Deeply conditions, prevents protein loss, soothes scalp.",
    benefits: ["Deep conditioning", "Prevents protein loss", "Soothes irritated scalp", "Natural UV protection"],
    ingredients: ["Virgin Coconut Oil", "Curry Leaves", "Hibiscus", "Aloe Vera"],
    rating: 4.7,

  },
]

export default function ProductsPage() {
  const [cart, setCart] = useState<number[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
    toast(
 "Added to cart!"
    
    )
  }

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
      toast(
         "Removed from wishlist",
        
      )
    } else {
      setWishlist([...wishlist, productId])
      toast(
         "Added to wishlist!"
       
    )
    }
  }

  return (
    <div className="min-h-screen">
     

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Our <span className="text-primary">Natural Products</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover our range of premium natural hair oils, crafted with the finest ingredients for healthy,
              beautiful hair.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                      Save ₹{product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold line-clamp-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Benefits:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" onClick={() => addToCart(product.id)} className="flex items-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Why Choose Leafy Blend?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and natural ingredients sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Natural & Vegan</h3>
              <p className="text-muted-foreground">No synthetic chemicals, parabens, or animal-derived ingredients</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">10K+</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Happy Customers</h3>
              <p className="text-muted-foreground">Thousands of satisfied customers with visible results</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">4.8★</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Excellent Reviews</h3>
              <p className="text-muted-foreground">Consistently high ratings across all our products</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
