import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Crown, 
  Video, 
  FileText, 
  Server, 
  Bot, 
  MapPin, 
  Users, 
  UserCheck, 
  CheckCircle,
  Linkedin,
  MessageSquare
} from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-muted/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What You Get</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional tools and content in your subscription, plus optional personalized sessions for direct feedback
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Subscription Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-4 mb-6">
              <Crown className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-card-foreground">Included in Your $19.99/month Subscription</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to learn, practice, and develop your analytics career independently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Learning Content */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  50+ Learning Videos & Guides
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional video content covering Python, SQL, analytics fundamentals, and career development strategies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Step-by-step tutorials</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Real-world case studies</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Industry best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Templates & Tools */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  Professional Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  ATS-optimized resume templates, LinkedIn optimization guides, and portfolio templates ready to use.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Multiple resume formats</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>LinkedIn optimization guide</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Portfolio templates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SQL Practice */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  SQLPractice.io Full Access
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Practice SQL with live databases. 500+ real interview questions from actual companies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Live database environments</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Real company questions</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Progressive difficulty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Automated Tools */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  Automated Resume Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  AI-powered resume analysis and optimization suggestions. Get instant feedback on your resume's effectiveness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>ATS compatibility check</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Instant improvement tips</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Learning Paths */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  Structured Learning Paths
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Follow proven career paths from beginner to advanced analytics roles. No more wondering what to learn next.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Beginner to advanced tracks</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Skill assessments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="group relative border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  Discord Community
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join a supportive community of analytics professionals. Ask questions, share wins, and network with peers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>24/7 community support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Peer networking</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Monthly Q&A sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 1-on-1 Session Add-ons */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-4 mb-6">
              <UserCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-card-foreground">Add Personal Sessions - $49.99 per 30 minutes</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get direct, personalized feedback and guidance for specific challenges. These are add-ons to your subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Live Resume Review */}
            <Card className="group relative border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                  Live Resume Review
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Get detailed, personalized feedback on your resume in a live session with actionable improvement suggestions.
                </p>
                <div className="text-sm text-primary font-semibold">Session Add-on</div>
              </CardContent>
            </Card>

            {/* LinkedIn Profile Review */}
            <Card className="group relative border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                  LinkedIn Profile Review
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Live optimization of your LinkedIn profile with specific strategies to attract recruiters and opportunities.
                </p>
                <div className="text-sm text-primary font-semibold">Session Add-on</div>
              </CardContent>
            </Card>

            {/* Mock Interview */}
            <Card className="group relative border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                  Mock Interview
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Practice real interview scenarios with immediate feedback to build confidence and improve performance.
                </p>
                <div className="text-sm text-primary font-semibold">Session Add-on</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 