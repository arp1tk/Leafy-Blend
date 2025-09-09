import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Minus, Plus, ShoppingCart, Zap } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

// Product data
const products = {
  "leafy-blend-herbal-hair-oil": {
    id: 1,
    name: "Leafy Blend Herbal Hair Oil",
    price: 599,
    rating: 0,
    reviews: 0,
    description: "90 Day Miracle Hair Oil - Bhringraj, Amla, Hibiscus for Hairfall Control",
    challenge: "Take the 90-Day Challenge for Thicker | Smoother | Luscious hair",
    image: "/product.png",
    benefits:
      "Blend of 26 herbs that promotes healthy scalp, smooth & silky hair and helps to strengthen the hair follicles.",
    ingredients: ["Bhringraj", "Amla", "Hibiscus", "Rosemary", "Fenugreek", "Coconut Oil"],
    howToUse:
      "Apply 2-3 times a week. Massage gently into scalp and hair. Leave overnight or for 1 hour before washing.",
    keyBenefits: [
      "Reduces hair fall by 93% in 6 weeks",
      "Strengthens hair roots and follicles",
      "Promotes natural hair growth",
      "Adds shine and smoothness",
    ],
  },
  "castor-oil": {
    id: 2,
    name: "Leafy Blend Castor Oil",
    price: 599,
    rating: 0,
    reviews: 0,
    description: "Natural wood pressed castor oil",
    challenge: "Perfect for thicker, fuller hair growth",
    image: "/natural-castor-oil-bottle-with-leafy-blend-brandin.jpg",
    benefits: "Pure castor oil that thickens hair, strengthens roots, and nourishes scalp for fuller, healthier hair.",
    ingredients: ["100% Pure Castor Oil", "Cold Pressed", "Unrefined"],
    howToUse:
      "Apply to hair and scalp 2-3 times a week. Can be used on eyebrows and eyelashes. Leave for 1-2 hours or overnight.",
    keyBenefits: [
      "Thickens hair naturally",
      "Strengthens hair roots",
      "Moisturizes dry scalp",
      "Promotes eyebrow and eyelash growth",
    ],
  },
  "coconut-oil": {
    id: 3,
    name: "Leafy Blend Coconut Oil",
    price: 599,
    rating: 4.5,
    reviews: 2,
    description: "Natural wood pressed coconut oil",
    challenge: "Deep conditioning for damaged hair",
    image: "/natural-coconut-oil-bottle-with-leafy-blend-brandi.jpg",
    benefits: "Pure coconut oil that deeply conditions, prevents protein loss, and soothes scalp with amazing aroma.",
    ingredients: ["100% Pure Coconut Oil", "Cold Pressed", "Virgin"],
    howToUse:
      "Apply to hair lengths and ends. Can be used as pre-shampoo treatment or leave-in conditioner for dry ends.",
    keyBenefits: [
      "Deep conditioning treatment",
      "Prevents protein loss",
      "Soothes dry scalp",
      "Amazing natural fragrance",
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-foreground transition-colors">
              All Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} review{product.reviews !== 1 ? "s" : ""})
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{product.description}</p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-primary font-medium">{product.challenge}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-foreground">₹ {product.price.toFixed(2)}</div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">1</span>
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to cart
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  <Zap className="w-4 h-4 mr-2" />
                  Buy now
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to wishlist
                </Button>
              </div>
            </div>

            {/* Product Benefits */}
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground leading-relaxed">{product.benefits}</p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Key Benefits:</h3>
              <ul className="space-y-2">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">How to Use:</h3>
              <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
            </div>

            {/* Ingredients */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Key Ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
