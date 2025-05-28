import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Crown, 
  UserCheck, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Star, 
  Zap, 
  Shield 
} from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Simple, Clear Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with the subscription for all tools and content. Add personalized sessions when you need direct feedback.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Base Subscription */}
          <Card className="group relative border-0 bg-card shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-card-foreground mb-2">Analytics Career Platform</CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">$19.99</div>
              <div className="text-muted-foreground">per month</div>
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold mt-4">
                <Star className="h-4 w-4" />
                <span>Everything Included</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>50+ Learning Videos & Articles</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional Resume Templates</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>LinkedIn Optimization Guides</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>SQLPractice.io Full Access (500+ problems)</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Automated Resume Analysis</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Structured Learning Paths</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Discord Community Access</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg group-hover:shadow-xl transition-all duration-300 text-lg py-3">
                Start Learning Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Session Add-ons */}
          <Card className="group relative border-0 bg-card shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-card-foreground mb-2">Personal Sessions</CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">$49.99</div>
              <div className="text-muted-foreground">per 30 minutes</div>
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold mt-4">
                <Zap className="h-4 w-4" />
                <span>Add to Subscription</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Live Resume Reviews & Feedback</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>LinkedIn Profile Optimization</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Mock Interview Practice</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Career Strategy Planning</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Portfolio Project Reviews</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Direct Mentor Access</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4 p-4 bg-muted/30 rounded-lg">
                  <strong>Requires active subscription.</strong> Book sessions as needed for personalized guidance.
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-accent transition-all duration-300 text-lg py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-card-foreground font-semibold">30-day money-back guarantee • Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
} 