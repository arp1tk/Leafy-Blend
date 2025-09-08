import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen">


      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our natural hair care products
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">Which oil is right for me?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Choose based on your primary concern: Herbal Hair Oil for hair fall and overall hair health, Castor
                  Oil for thickness and growth, and Coconut Oil for deep conditioning and dry hair repair.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Are your products suitable for all hair types?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, our oils are safe and effective for all hair types, including color-treated, chemically
                  processed, and sensitive scalps. Our natural formulations are gentle yet effective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do your products contain any synthetic chemicals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely not. All our products are 100% natural and free from parabens, sulfates, synthetic
                  fragrances, and any harmful chemicals. We believe in the power of pure, natural ingredients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How often should I use the hair oils?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  For best results, use 2-3 times a week. You can leave the oil overnight for deep conditioning or apply
                  for at least 1 hour before washing. Consistency is key to seeing results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can I mix different oils together?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, you can mix our oils to create a custom blend that addresses multiple hair concerns. Many
                  customers combine our Herbal Hair Oil with Castor Oil for comprehensive hair care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">Where do you ship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We currently ship across India. We're working on expanding our shipping to international locations.
                  Stay tuned for updates!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">What is your delivery time?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Orders are typically delivered within 3-7 business days. You'll receive a tracking number once your
                  order ships so you can monitor its progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">What is your return policy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We offer a 10-day return policy for unused and unopened products. If you're not completely satisfied
                  with your purchase, please contact our customer service team for assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
