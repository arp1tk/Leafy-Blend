import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CountUp from "@/components/countUp"
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



      <section className="py-20 lg:py-24 bg-[#D4D0B9]/20">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <div className="aspect-square bg-gradient-to-br from-[#AFB59D]/10 to-[#AFB59D]/20 p-8 flex items-center justify-center">
                <img
                  src="/product.png"
                  alt="Leafy Blend Herbal Hair Oil"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">Leafy Blend Herbal Hair Oil</h3>
                <p className="text-[#90997F] leading-relaxed">
                  A blend of 26 herbs that would help to strengthen the hair follicle and provide smooth & silky hair
                </p>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-[#90997F] ml-2">(0)</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-bold text-2xl text-[#394931]">₹ 599.00</span>
                  <Button className="rounded-full px-6 bg-[#394931] hover:bg-[#394931]/90" asChild>
                    <Link href="/products/herbal-hair-oil">View product</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <div className="aspect-square bg-gradient-to-br from-[#9EA99C]/10 to-[#9EA99C]/20 p-8 flex items-center justify-center">
                <div className="w-full h-full bg-[#AFB59D]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🌿</div>
                    <div className="text-[#394931] font-serif text-lg">LeafyBlend</div>
                    <div className="text-xs text-[#90997F]">CONCEPTS</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">LeafyBlend castor oil</h3>
                <p className="text-[#90997F] leading-relaxed">Natural wood pressed castor oil</p>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                  <span className="text-sm text-[#90997F] ml-2">(0)</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-bold text-2xl text-[#394931]">₹ 599.00</span>
                  <Button className="rounded-full px-6 bg-[#394931] hover:bg-[#394931]/90" asChild>
                    <Link href="/products/castor-oil">View product</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <div className="aspect-square bg-gradient-to-br from-[#D4D0B9]/10 to-[#D4D0B9]/20 p-8 flex items-center justify-center">
                <div className="w-full h-full bg-[#AFB59D]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🌿</div>
                    <div className="text-[#394931] font-serif text-lg">LeafyBlend</div>
                    <div className="text-xs text-[#90997F]">CONCEPTS</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#394931]">Leafy Blend Coconut Oil</h3>
                <p className="text-[#90997F] leading-relaxed">Natural wood pressed coconut oil</p>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
                  <span className="text-sm text-[#90997F] ml-2">(2)</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-bold text-2xl text-[#394931]">₹ 599.00</span>
                  <Button className="rounded-full px-6 bg-[#394931] hover:bg-[#394931]/90" asChild>
                    <Link href="/products/coconut-oil">View product</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
