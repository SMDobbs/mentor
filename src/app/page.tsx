import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  MessageCircle,
  Database,
  User,
  Clock,
  Target,
  BookOpen,
  Code,
  TrendingUp,
  Award,
  Coffee,
  Headphones,
  ExternalLink,
  Download,
  Zap,
  Shield,
  Globe,
  Sparkles,
  Server,
  Play,
  Eye,
  Star,
  ChevronRight,
  DollarSign,
  Video,
  MapPin,
  Linkedin,
  GraduationCap,
  Lightbulb,
  Bot,
  UserCheck,
  Crown
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">DataMentor Pro</span>
                <div className="text-xs text-muted-foreground">Analytics Career Platform</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                About
              </Link>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                Features
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                Pricing
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Advanced Background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-indigo-950/20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200/50 dark:border-blue-800/50 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-foreground">Senior Data Scientist</span>
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

      {/* About Section with Modern Design */}
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
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      Python & SQL
                    </span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      Analytics Leadership
                    </span>
                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      Career Development
                    </span>
                    <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                      Business Strategy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section - Before Pricing */}
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl px-8 py-4 mb-6">
                <Crown className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-foreground">Included in Your $19.99/month Subscription</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to learn, practice, and develop your analytics career independently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Learning Content */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-blue-600 transition-colors">
                    50+ Learning Videos & Guides
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional video content covering Python, SQL, analytics fundamentals, and career development strategies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Step-by-step tutorials</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Real-world case studies</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Industry best practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Templates & Tools */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-green-50/30 dark:to-green-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-green-600 transition-colors">
                    Professional Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    ATS-optimized resume templates, LinkedIn optimization guides, and portfolio templates ready to use.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Multiple resume formats</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>LinkedIn optimization guide</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Portfolio templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* SQL Practice */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-teal-50/30 dark:to-teal-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-teal-600 transition-colors">
                    SQLPractice.io Full Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Practice SQL with live databases. 500+ real interview questions from actual companies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Live database environments</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Real company questions</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Progressive difficulty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Automated Tools */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-purple-600 transition-colors">
                    Automated Resume Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI-powered resume analysis and optimization suggestions. Get instant feedback on your resume's effectiveness.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>ATS compatibility check</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Keyword optimization</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Instant improvement tips</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Learning Paths */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-indigo-50/30 dark:to-indigo-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-indigo-600 transition-colors">
                    Structured Learning Paths
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Follow proven career paths from beginner to advanced analytics roles. No more wondering what to learn next.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Beginner to advanced tracks</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Skill assessments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="group relative border-0 bg-gradient-to-br from-background to-orange-50/30 dark:to-orange-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-orange-600 transition-colors">
                    Discord Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join a supportive community of analytics professionals. Ask questions, share wins, and network with peers.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>24/7 community support</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Peer networking</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl px-8 py-4 mb-6">
                <UserCheck className="h-6 w-6 text-purple-600" />
                <span className="text-xl font-bold text-foreground">Add Personal Sessions - $49.99 per 30 minutes</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get direct, personalized feedback and guidance for specific challenges. These are add-ons to your subscription.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Live Resume Review */}
              <Card className="group relative border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-purple-600 transition-colors">
                    Live Resume Review
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Get detailed, personalized feedback on your resume in a live session with actionable improvement suggestions.
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">Session Add-on</div>
                </CardContent>
              </Card>

              {/* LinkedIn Profile Review */}
              <Card className="group relative border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-purple-600 transition-colors">
                    LinkedIn Profile Review
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Live optimization of your LinkedIn profile with specific strategies to attract recruiters and opportunities.
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">Session Add-on</div>
                </CardContent>
              </Card>

              {/* Mock Interview */}
              <Card className="group relative border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-purple-600 transition-colors">
                    Mock Interview
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Practice real interview scenarios with immediate feedback to build confidence and improve performance.
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">Session Add-on</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
            <Card className="group relative border-0 bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-950/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-foreground mb-2">Analytics Career Platform</CardTitle>
                <div className="text-5xl font-bold text-blue-600 mb-2">$19.99</div>
                <div className="text-muted-foreground">per month</div>
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold mt-4">
                  <Star className="h-4 w-4" />
                  <span>Everything Included</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>50+ Learning Videos & Articles</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Professional Resume Templates</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>LinkedIn Optimization Guides</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>SQLPractice.io Full Access (500+ problems)</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Automated Resume Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Structured Learning Paths</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
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
            <Card className="group relative border-0 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-foreground mb-2">Personal Sessions</CardTitle>
                <div className="text-5xl font-bold text-purple-600 mb-2">$49.99</div>
                <div className="text-muted-foreground">per 30 minutes</div>
                <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-semibold mt-4">
                  <Zap className="h-4 w-4" />
                  <span>Add to Subscription</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Live Resume Reviews & Feedback</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>LinkedIn Profile Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Mock Interview Practice</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Career Strategy Planning</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Portfolio Project Reviews</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Direct Mentor Access</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4 p-4 bg-muted/30 rounded-lg">
                    <strong>Requires active subscription.</strong> Book sessions as needed for personalized guidance.
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 text-lg py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl px-8 py-4">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-foreground font-semibold">30-day money-back guarantee • Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with Modern Timeline */}
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
              <Button size="lg" className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Crown className="mr-3 h-6 w-6" />
                Start Platform - $19.99/mo
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-2 hover:bg-accent/50 transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-3 h-6 w-6" />
                Add Personal Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Modern Design */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">DataMentor Pro</span>
                <div className="text-sm text-gray-400">Analytics Career Platform</div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Comprehensive tools and content to launch your analytics career, with optional personalized sessions 
              for direct feedback when you need it most.
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-8">
              <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Contact</Link>
            </div>
            
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>&copy; 2024 DataMentor Pro. Built to accelerate analytics careers.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 