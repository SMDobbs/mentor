import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, ArrowRight, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-card-foreground">Senior Data Scientist</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for Mentoring</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-foreground mb-2">Launch Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Analytics Career
            </span>
            <span className="block text-foreground text-3xl md:text-4xl mt-4 font-normal">
              with Professional Tools & Expert Guidance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Get everything you need to break into analytics and data science. Professional learning content, 
            templates, tools, and personalized mentorship from a senior practitioner with 10+ years experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/auth/signup">
              <Button size="lg" className="group relative px-10 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Start Learning - $19.99/mo</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="lg" className="group px-10 py-4 text-lg border-2 hover:bg-accent/50 transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Add 1-on-1 Sessions
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">SQL Practice Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Video Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 