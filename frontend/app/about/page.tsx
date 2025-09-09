import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf } from "lucide-react"
import Image from "next/image"
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
     <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#394931]">Our Claims</h2>
          <p className="text-lg text-[#90997F] max-w-xl mx-auto">
            What makes our products pure and natural
          </p>
        </div>

        {/* Claims Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {/* Claim 1 */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
              <Image
                src="/organic.webp" 
                alt="100% organic"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#394931]">100% organic</h3>
              <p className="text-[#90997F] text-sm">All Natural</p>
            </div>
          </div>

          {/* Claim 2 */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
              <Image
                src="/nofragrance.webp"
                alt="No artificial fragrance"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#394931]">No artificial</h3>
              <p className="text-[#90997F] text-sm">Fragrance</p>
            </div>
          </div>

          {/* Claim 3 */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
              <Image
                src="/noChemical.webp"
                alt="No chemicals"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#394931]">No chemicals</h3>
              <p className="text-[#90997F] text-sm">Pure & Safe</p>
            </div>
          </div>

          {/* Claim 4 */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
              <Image
                src="/mineral.webp"
                alt="No mineral oils"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#394931]">No mineral</h3>
              <p className="text-[#90997F] text-sm">Oils</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     

      <Footer />
    </div>
  )
}
