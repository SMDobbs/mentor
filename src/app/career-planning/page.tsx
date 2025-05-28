import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Target, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Award, 
  CheckCircle,
  ArrowLeft,
  BarChart3,
  BookOpen,
  Briefcase,
  Clock,
  Star,
  Building,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  PieChart,
  LineChart,
  Globe,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

export default function CareerPlanning() {
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
                <Link href="/interview-prep" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interview Prep
                </Link>
                <Link href="/career-planning" className="text-foreground font-medium">
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
                Book Strategy Call
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
            <h1 className="text-3xl font-bold">Career Planning Hub</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Strategic career guidance and personalized roadmaps for data professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Career Assessment & Goal Setting
                </CardTitle>
                <CardDescription>
                  Discover your ideal career path and set achievable milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Current Status</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Current Role</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Select your current role</option>
                          <option>Student/Recent Graduate</option>
                          <option>Career Changer</option>
                          <option>Junior Data Analyst</option>
                          <option>Data Analyst</option>
                          <option>Senior Data Analyst</option>
                          <option>Data Scientist</option>
                          <option>Data Engineer</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Experience Level</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>0-1 years</option>
                          <option>1-3 years</option>
                          <option>3-5 years</option>
                          <option>5+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Industry</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Technology</option>
                          <option>Finance</option>
                          <option>Healthcare</option>
                          <option>Retail/E-commerce</option>
                          <option>Consulting</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Career Goals</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Target Role</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Senior Data Scientist</option>
                          <option>ML Engineer</option>
                          <option>Data Engineering Manager</option>
                          <option>Principal Data Scientist</option>
                          <option>Head of Data</option>
                          <option>Chief Data Officer</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Timeline</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>6 months</option>
                          <option>1 year</option>
                          <option>2 years</option>
                          <option>3+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Salary Target</label>
                        <select className="w-full p-2 border border-border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>$80k - $100k</option>
                          <option>$100k - $130k</option>
                          <option>$130k - $160k</option>
                          <option>$160k - $200k</option>
                          <option>$200k+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full md:w-auto">
                    Generate Personalized Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Career Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Your Personalized Career Roadmap
                </CardTitle>
                <CardDescription>
                  Step-by-step plan to reach your career goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-lg mb-2">Foundation Building (Months 1-3)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Technical Skills
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Master Python fundamentals</li>
                              <li>• Learn SQL and database concepts</li>
                              <li>• Statistics and probability</li>
                              <li>• Data visualization with Tableau</li>
                            </ul>
                          </div>
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Briefcase className="h-4 w-4" />
                              Professional Development
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Build portfolio projects</li>
                              <li>• Network with data professionals</li>
                              <li>• Join data communities</li>
                              <li>• Start personal blog</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-lg mb-2">Skill Advancement (Months 4-8)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <GraduationCap className="h-4 w-4" />
                              Advanced Learning
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Machine learning algorithms</li>
                              <li>• Deep learning frameworks</li>
                              <li>• Cloud platforms (AWS/GCP)</li>
                              <li>• MLOps and deployment</li>
                            </ul>
                          </div>
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Experience Building
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Complete 3-5 portfolio projects</li>
                              <li>• Contribute to open source</li>
                              <li>• Seek mentorship opportunities</li>
                              <li>• Apply for internships/roles</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-lg mb-2">Career Transition (Months 9-12)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4" />
                              Job Search Strategy
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Optimize LinkedIn profile</li>
                              <li>• Tailor resume for each role</li>
                              <li>• Practice interview skills</li>
                              <li>• Leverage network connections</li>
                            </ul>
                          </div>
                          <div className="border border-border rounded-lg p-4">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              Final Preparations
                            </h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Complete capstone project</li>
                              <li>• Get professional references</li>
                              <li>• Negotiate job offers</li>
                              <li>• Plan smooth transition</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Market Intelligence & Trends
                </CardTitle>
                <CardDescription>
                  Stay informed about the latest trends and opportunities in data careers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Salary Trends by Role</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Data Scientist</p>
                          <p className="text-sm text-muted-foreground">Mid-level, 3-5 years</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">$125k</p>
                          <p className="text-xs text-green-600">↑ 8% YoY</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">ML Engineer</p>
                          <p className="text-sm text-muted-foreground">Mid-level, 3-5 years</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">$140k</p>
                          <p className="text-xs text-green-600">↑ 12% YoY</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Data Engineer</p>
                          <p className="text-sm text-muted-foreground">Mid-level, 3-5 years</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">$130k</p>
                          <p className="text-xs text-green-600">↑ 15% YoY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Hot Skills in Demand</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Python</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">95%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SQL</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">90%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Machine Learning</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Cloud Platforms</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">80%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Deep Learning</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Top Companies Hiring
                </CardTitle>
                <CardDescription>
                  Discover which companies are actively hiring data professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        G
                      </div>
                      <div>
                        <h4 className="font-medium">Google</h4>
                        <p className="text-sm text-muted-foreground">45 open positions</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Scientist</span>
                        <span className="text-green-600">$150k-$200k</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ML Engineer</span>
                        <span className="text-green-600">$160k-$220k</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div>
                        <h4 className="font-medium">Meta</h4>
                        <p className="text-sm text-muted-foreground">32 open positions</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Scientist</span>
                        <span className="text-green-600">$145k-$190k</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Analytics Manager</span>
                        <span className="text-green-600">$170k-$230k</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <div>
                        <h4 className="font-medium">Amazon</h4>
                        <p className="text-sm text-muted-foreground">67 open positions</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Engineer</span>
                        <span className="text-green-600">$130k-$180k</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Applied Scientist</span>
                        <span className="text-green-600">$155k-$210k</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                        N
                      </div>
                      <div>
                        <h4 className="font-medium">Netflix</h4>
                        <p className="text-sm text-muted-foreground">18 open positions</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Senior Data Scientist</span>
                        <span className="text-green-600">$180k-$250k</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ML Platform Engineer</span>
                        <span className="text-green-600">$170k-$240k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 relative">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="65, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-green-600">65%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Overall Progress</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skills Development</span>
                      <span className="text-sm font-medium">8/12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Portfolio Projects</span>
                      <span className="text-sm font-medium">3/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Network Building</span>
                      <span className="text-sm font-medium">15/20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Interview Prep</span>
                      <span className="text-sm font-medium">6/10</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Complete Python Course</p>
                      <p className="text-xs text-muted-foreground">Due: This week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Build Portfolio Project</p>
                      <p className="text-xs text-muted-foreground">Due: Next week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <Target className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Network with 5 Professionals</p>
                      <p className="text-xs text-muted-foreground">Due: This month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentorship */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-medium">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Senior Data Scientist at Google</p>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Python for Data Analysis</p>
                      <p className="text-xs text-muted-foreground">Essential reading for beginners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Kaggle Learn</p>
                      <p className="text-xs text-muted-foreground">Free micro-courses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Data Science Community</p>
                      <p className="text-xs text-muted-foreground">Join our Slack workspace</p>
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