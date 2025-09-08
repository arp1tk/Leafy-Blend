import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Shield, Recycle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              About <span className="text-[#394931]">Leafy</span>
            </h1>
            <p className="text-lg md:text-xl text-[#90997F] leading-relaxed">
              At Leafy, we believe great hair starts from the root, both on your scalp and in your story.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24 bg-[#D4D0B9]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#394931]">Our Story</h2>
              <div className="space-y-6 text-lg text-[#90997F] leading-relaxed">
                <p>
                  Our founder Anitha's family had a secret to healthy hair: a powerful herbal oil passed down by her
                  grandmother. Made with rare Ayurvedic ingredients like Keshavardhini, the blend worked so well that
                  friends kept asking for more, and so, Leafy was born.
                </p>
                <p>
                  What started in a kitchen is now a clean, chemical-free haircare brand rooted in tradition and powered
                  by nature.
                </p>
                <p className="font-medium text-[#394931]">No toxins. No shortcuts. Just real results, naturally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#394931]">Our Values</h2>
            <p className="text-lg text-[#90997F] max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#394931]/10 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-[#394931]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#394931]">Purity</h3>
                <p className="text-[#90997F] text-sm">
                  We use only the finest natural ingredients, free from harmful chemicals and synthetic additives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#90997F]/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#90997F]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#394931]">Transparency</h3>
                <p className="text-[#90997F] text-sm">
                  We believe in complete transparency about our ingredients, processes, and sourcing practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#AFB59D]/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-[#AFB59D]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#394931]">Efficacy</h3>
                <p className="text-[#90997F] text-sm">
                  Our products are formulated to deliver real, visible results that you can see and feel.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#9EA99C]/10 rounded-full flex items-center justify-center">
                  <Recycle className="h-8 w-8 text-[#9EA99C]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#394931]">Sustainability</h3>
                <p className="text-[#90997F] text-sm">
                  We're committed to sustainable practices and eco-friendly packaging to protect our planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  )
}
