import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Mic, 
  Video, 
  Brain, 
  Target, 
  Clock, 
  Award, 
  CheckCircle,
  ArrowLeft,
  BarChart3,
  BookOpen,
  Users,
  Calendar,
  Star,
  TrendingUp,
  MessageSquare,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function InterviewPrep() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-foreground">DataMentor Pro</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <Link href="/interview-prep" className="text-foreground font-medium">
                  Interview Prep
                </Link>
                <Link href="/career-planning" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Planning
                </Link>
                <Link href="/resume-builder" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume Builder
                </Link>
                <Link href="/skill-paths" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skill Paths
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Session
              </Button>
              <Button size="sm">
                Get Premium
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold">Interview Preparation Center</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master data science interviews with AI-powered mock sessions and expert feedback
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Start */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Quick Start Interview Practice
                </CardTitle>
                <CardDescription>
                  Jump into a practice session tailored to your target role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/20 rounded-lg flex items-center justify-center">
                        <Brain className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Technical Interview</h4>
                        <p className="text-sm text-muted-foreground">SQL, Python, ML concepts</p>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Start Technical Round
                    </Button>
                  </div>
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Behavioral Interview</h4>
                        <p className="text-sm text-muted-foreground">STAR method, leadership</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Start Behavioral Round
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mock Interview Simulator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  AI Mock Interview Simulator
                </CardTitle>
                <CardDescription>
                  Practice with our AI interviewer that adapts to your responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                    <div className="text-center">
                      <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Click start to begin your mock interview</p>
                      <div className="flex gap-3 justify-center">
                        <Button>
                          <Play className="h-4 w-4 mr-2" />
                          Start Interview
                        </Button>
                        <Button variant="outline">
                          <Mic className="h-4 w-4 mr-2" />
                          Audio Only
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Session Duration: 45 minutes</span>
                  <span>Questions: 8-12</span>
                  <span>Difficulty: Adaptive</span>
                </div>
              </CardContent>
            </Card>

            {/* Question Bank */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Question Bank & Practice
                </CardTitle>
                <CardDescription>
                  Browse and practice with our curated collection of interview questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <Button variant="outline" size="sm">All Categories</Button>
                    <Button variant="outline" size="sm">Technical</Button>
                    <Button variant="outline" size="sm">Behavioral</Button>
                    <Button variant="outline" size="sm">Case Study</Button>
                    <Button variant="outline" size="sm">System Design</Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Explain the difference between supervised and unsupervised learning</h4>
                        <span className="text-xs bg-blue-100 dark:bg-blue-950/20 text-blue-600 px-2 py-1 rounded">Technical</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        A fundamental machine learning question that tests your understanding of core concepts.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Practice
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>4.8 difficulty</span>
                        </div>
                        <span className="text-sm text-muted-foreground">2-3 min answer</span>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Tell me about a time you had to work with incomplete data</h4>
                        <span className="text-xs bg-green-100 dark:bg-green-950/20 text-green-600 px-2 py-1 rounded">Behavioral</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Tests your problem-solving skills and experience with real-world data challenges.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Practice
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>3.5 difficulty</span>
                        </div>
                        <span className="text-sm text-muted-foreground">3-5 min answer</span>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Design a recommendation system for an e-commerce platform</h4>
                        <span className="text-xs bg-purple-100 dark:bg-purple-950/20 text-purple-600 px-2 py-1 rounded">Case Study</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        System design question that evaluates your ability to architect ML solutions.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Practice
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>4.2 difficulty</span>
                        </div>
                        <span className="text-sm text-muted-foreground">15-20 min answer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company-Specific Prep */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Company-Specific Preparation
                </CardTitle>
                <CardDescription>
                  Tailored prep for top tech companies and data-driven organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        G
                      </div>
                      <div>
                        <h4 className="font-medium">Google</h4>
                        <p className="text-sm text-muted-foreground">Data Scientist, ML Engineer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Focus on ML fundamentals, coding, and system design
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Prep Guide
                    </Button>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        M
                      </div>
                      <div>
                        <h4 className="font-medium">Meta</h4>
                        <p className="text-sm text-muted-foreground">Data Scientist, Analytics</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Product sense, experimentation, and metrics
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Prep Guide
                    </Button>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        A
                      </div>
                      <div>
                        <h4 className="font-medium">Amazon</h4>
                        <p className="text-sm text-muted-foreground">Data Engineer, Scientist</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Leadership principles and technical depth
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Prep Guide
                    </Button>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        N
                      </div>
                      <div>
                        <h4 className="font-medium">Netflix</h4>
                        <p className="text-sm text-muted-foreground">Senior Data Roles</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Culture fit and high-performance standards
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Prep Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Technical Questions</span>
                      <span>24/50</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Behavioral Questions</span>
                      <span>12/20</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Mock Interviews</span>
                      <span>3/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Average Score</span>
                    </div>
                    <span className="font-medium">8.2/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Avg Response Time</span>
                    </div>
                    <span className="font-medium">2.3 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Streak</span>
                    </div>
                    <span className="font-medium">7 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Completion Rate</span>
                    </div>
                    <span className="font-medium">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-sm">1-on-1 Mock Interview</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      With Senior Data Scientist from Google
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Tomorrow, 2:00 PM</span>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-sm">Group Study Session</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      System Design for Data Engineers
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Friday, 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips & Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interview Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Practice the STAR method</p>
                      <p className="text-xs text-muted-foreground">Structure behavioral answers effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Think out loud</p>
                      <p className="text-xs text-muted-foreground">Show your problem-solving process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Ask clarifying questions</p>
                      <p className="text-xs text-muted-foreground">Understand the problem fully</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 