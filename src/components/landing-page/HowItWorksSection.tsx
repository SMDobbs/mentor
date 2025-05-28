import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Crown, Calendar } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground mb-16">
            Start learning immediately, add personal sessions when you need direct feedback
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-16"></div>
          
          <div className="space-y-12">
            <div className="flex items-start gap-8 text-left">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="absolute top-16 left-1/2 w-px h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Subscription</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get immediate access to all learning content, templates, tools, and the SQLPractice.io platform. 
                  Everything you need to start developing your analytics career.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8 text-left">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="absolute top-16 left-1/2 w-px h-12 bg-gradient-to-b from-purple-600 to-transparent"></div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Learn & Practice Independently</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Follow structured learning paths, practice SQL with real databases, use professional templates, 
                  and get automated feedback on your progress.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8 text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Add Personal Sessions When Needed</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you need direct feedback on your resume, LinkedIn profile, or want to practice interviews, 
                  book a personal session for targeted, actionable guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Crown className="mr-3 h-6 w-6" />
                Start Platform - $19.99/mo
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-2 hover:bg-accent/50 transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-3 h-6 w-6" />
                Add Personal Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 