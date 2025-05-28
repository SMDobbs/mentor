import React from "react"
import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Your Mentor</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-background via-background to-muted/20 rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <User className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Active
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  10 Years Building Analytics Teams & Careers
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    I've spent a decade working across analytics and data science roles - from startups to Fortune 500 companies. 
                    I've been in your shoes: breaking into the field, learning on the job, advancing to senior roles, and now helping others do the same.
                  </p>
                  <p>
                    My platform combines <span className="text-foreground font-semibold">practical tools with personalized guidance</span>. 
                    The subscription gives you everything to learn and practice independently. The 1-on-1 sessions provide direct, 
                    personalized feedback when you need that extra push.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Python & SQL
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Analytics Leadership
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Career Development
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Business Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 