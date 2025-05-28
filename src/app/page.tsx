import React from "react"
import {
  Navigation,
  HeroSection,
  AboutSection,
  FeaturesSection,
  PricingSection,
  HowItWorksSection,
  Footer
} from "@/components/landing-page"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <Footer />
    </div>
  )
} 