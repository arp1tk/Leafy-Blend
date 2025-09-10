
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star ,ChevronDown} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CountUp from "@/components/countUp"
import { Badge } from "@/components/ui/badge"
export default function HomePage() {
  return (
    <div className="min-h-screen">
  

  <section className="relative py-28 lg:py-36 xl:py-44">
  {/* Background Image */}
  <Image
    src="/hero1.png"
    alt="Natural herbal hair oil background"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Subtle dark overlay */}
  <div className="absolute inset-0 bg-black/15" />

  {/* Content */}
  <div className="relative container mx-auto px-6 lg:px-8 xl:px-12">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      {/* Tagline */}
      <span className="text-sm md:text-base tracking-wide uppercase text-[#394931] font-medium">
        Pure · Herbal · Natural
      </span>

      {/* Title */}
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a1f16]">
        Nature’s Secret for<br />Beautiful Hair
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-black max-w-xl mx-auto leading-relaxed">
        Premium herbal oils crafted from 100% natural ingredients.
      </p>

      {/* CTA Button */}
      <Button
        size="lg"
        className="text-lg px-10 py-5 rounded-full font-medium bg-[#394931] hover:bg-[#394931]/90 transition-all"
        asChild
      >
        <Link href="/products">Shop Now</Link>
      </Button>
    </div>
  </div>
</section>





      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Product 1 - Herbal Hair Oil */}
            <div className="group">
              <div className="relative mb-6">
              
                <div className="aspect-square bg-gradient-to-br from-[#AFB59D]/5 to-[#AFB59D]/10 rounded-lg overflow-hidden">
                  <img
                    src="/herbal-hair-oil-bottle-natural-green-packaging.jpg"
                    alt="Leafy Blend Herbal Hair Oil"
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl font-semibold text-[#394931] leading-tight">
                  Leafy Blend Herbal Hair Oil
                </h3>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-[#90997F] ml-2">4.6</span>
                </div>

                <p className="text-[#394931] font-semibold">From ₹ 599.00</p>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#394931] text-[#394931] hover:bg-[#394931] hover:text-white transition-colors bg-transparent"
                  asChild
                >
                  <Link href="/products/leafy-blend-herbal-hair-oil">QUICKSHOP</Link>
                </Button>
              </div>
            </div>

            {/* Product 2 - Castor Oil */}
            <div className="group">
              <div className="relative mb-6">
              
                <div className="aspect-square bg-gradient-to-br from-[#9EA99C]/5 to-[#9EA99C]/10 rounded-lg overflow-hidden">
                  <img
                    src="/natural-castor-oil-bottle-with-leafy-blend-brandin.jpg"
                    alt="Leafy Blend Castor Oil"
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl font-semibold text-[#394931] leading-tight">
                  Leafy Blend Castor Oil
                </h3>

                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 fill-yellow-400/30 text-yellow-400" />
                  <span className="text-sm text-[#90997F] ml-2">4.5</span>
                </div>

                <p className="text-[#394931] font-semibold">₹ 599.00</p>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#394931] text-[#394931] hover:bg-[#394931] hover:text-white transition-colors bg-transparent"
                  asChild
                >
                  <Link href="/products/leafy-blend-castor-oil">QUICKSHOP</Link>
                </Button>
              </div>
            </div>

            {/* Product 3 - Coconut Oil */}
            <div className="group">
              <div className="relative mb-6">
                <div className="aspect-square bg-gradient-to-br from-[#D4D0B9]/5 to-[#D4D0B9]/10 rounded-lg overflow-hidden">
                  <img
                    src="/natural-coconut-oil-bottle-with-leafy-blend-brandi.jpg"
                    alt="Leafy Blend Coconut Oil"
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl font-semibold text-[#394931] leading-tight">
                  Leafy Blend Coconut Oil
                </h3>

                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 fill-yellow-400/30 text-yellow-400" />
                  <span className="text-sm text-[#90997F] ml-2">4.6</span>
                </div>

                <p className="text-[#394931] font-semibold">₹ 599.00</p>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#394931] text-[#394931] hover:bg-[#394931] hover:text-white transition-colors bg-transparent"
                  asChild
                >
                  <Link href="/products/leafy-blend-coconut-oil">QUICKSHOP</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-[#394931] mb-4">
              Fix for the problem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                <img
                  src="/healthy-long-hair-from-behind-woman.jpg"
                  alt="How We Fix Weak Hair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">How We Fix Weak Hair</h3>
                <p className="text-[#90997F] leading-relaxed max-w-sm mx-auto">
                  Leafy strengthens your hair from the root with Ayurvedic herbs like Keshavardhini, Amla, and
                  Bhringraj. Our oil nourishes the scalp, improves blood flow, and reduces breakage for visibly
                  stronger, healthier hair over time.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                <img
                  src="/hair-brush-with-fallen-hair-strands-hair-loss.jpg"
                  alt="Say bye to Hair Fall"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">Say bye to Hair Fall</h3>
                <p className="text-[#90997F] leading-relaxed max-w-sm mx-auto">
                  Reduces hair fall from the root using powerful Ayurvedic herbs. Strengthens follicles and restores
                  natural hair growth.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                <img
                  src="/natural-green-plant-leaves-botanical.jpg"
                  alt="Natural Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">Natural & Pure</h3>
                <p className="text-[#90997F] leading-relaxed max-w-sm mx-auto">
                  Calms your senses with a soothing aroma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#9EA99C]/10">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-[#394931]">Ingredients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src="/purple-lark-daisy-flowers-botanical.jpg"
                  alt="Lark Daisy"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Lark Daisy</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Lary Daisy promoting hair growth, preventing hair loss, and improving scalp health
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src="/pink-hibiscus-flower-tropical-botanical.jpg"
                  alt="Hibiscus"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Hibiscus</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Adds volume and bounce while conditioning every strand. Prevents premature graying and adds a youthful
                  glow to your hair.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img src="/green-amla-fruit-indian-gooseberry.jpg" alt="Amla" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Amla</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Nature's powerhouse that reduces hair fall and keeps your scalp healthy for thicker growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src="/rosemary-herb-green-leaves-botanical.jpg"
                  alt="Rosemary"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Rosemary</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Antioxidant-rich and proven to reduce hair loss and promote regrowth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src="/bhringraj-green-leaves-ayurvedic-herb.jpg"
                  alt="Bhringraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Bhringraj</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Bhringraj promotes hair growth by improving blood circulation to the scalp.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src="/fenugreek-seeds-brown-spice-bowl.jpg"
                  alt="Fenugreek seeds"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-semibold text-[#394931]">Fenugreek seeds</h4>
                <p className="text-[#90997F] text-sm leading-relaxed">
                  Fenugreek seeds promoting hair growth and reducing hair fall.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#90997F]/20">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side */}
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#394931]">Results from the customers</h2>
              <p className="text-[#394931]/80 text-lg leading-relaxed">
                At Leafy, we believe results speak louder than promises. From stronger roots to thicker strands, our
                customers have experienced real transformations with consistent use of our herbal hair oil. Every
                review is a story of restored confidence and natural beauty, proof that nature truly works when
                blended with care and tradition.
              </p>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 gap-8">
              {/* First Stat */}
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-[#394931] font-serif">
                  <CountUp end={93} />%
                </div>
                <p className="text-[#394931]/70 text-lg">People have seen hair growth within 90 days</p>
              </div>

              {/* Second Stat */}
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-[#394931] font-serif">
                  <CountUp end={95} />%
                </div>
                <p className="text-[#394931]/70 text-lg">People said it smoothens the hair</p>
              </div>

              {/* Third Stat */}
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-[#394931] font-serif">
                  <CountUp end={4.86} isDecimal />
                </div>
                <p className="text-[#394931]/70 text-lg">out of 5 Average rating</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  )
}
