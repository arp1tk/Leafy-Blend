export interface Product {
  id: number
  name: string
  slug: string
  price: number
  rating: number
  reviews: number
  description: string
  challenge: string
  image: string
  benefits: string
  ingredients: string[]
  howToUse: string
  keyBenefits: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Leafy Blend Herbal Hair Oil",
    slug: "herbal-hair-oil",
    price: 599,
    rating: 0,
    reviews: 0,
    description: "90 Day Miracle Hair Oil - Bhringraj, Amla, Hibiscus for Hairfall Control",
    challenge: "Take the 90-Day Challenge for Thicker | Smoother | Luscious hair",
    image: "/product",
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
  {
    id: 2,
    name: "Leafy Blend Castor Oil",
    slug: "castor-oil",
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
  {
    id: 3,
    name: "Leafy Blend Coconut Oil",
    slug: "coconut-oil",
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
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getAllProducts(): Product[] {
  return products
}
