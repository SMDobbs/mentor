import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  DollarSign, 
  MapPin, 
  Building, 
  Users, 
  Calendar,
  ArrowLeft,
  Star,
  Briefcase,
  GraduationCap,
  Clock,
  Target,
  Zap,
  Award,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from "lucide-react"
import Link from "next/link"

export default function MarketIntelligence() {
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
                <Link href="/career-planning" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Planning
                </Link>
                <Link href="/resume-builder" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume Builder
                </Link>
                <Link href="/skill-paths" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skill Paths
                </Link>
                <Link href="/market-intelligence" className="text-foreground font-medium">
                  Market Intelligence
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
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
            <h1 className="text-3xl font-bold">Market Intelligence</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Real-time insights into data science job market trends, salaries, and skill demands
          </p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
            <span>Last updated: December 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Key Metrics Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Salary</p>
                      <p className="text-2xl font-bold">$127K</p>
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>+8.2%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Open Positions</p>
                      <p className="text-2xl font-bold">47.2K</p>
                      <div className="flex items-center gap-1 text-sm text-blue-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>+12.5%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Hiring Rate</p>
                      <p className="text-2xl font-bold">73%</p>
                      <div className="flex items-center gap-1 text-sm text-orange-600">
                        <Minus className="h-3 w-3" />
                        <span>-2.1%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Remote Jobs</p>
                      <p className="text-2xl font-bold">68%</p>
                      <div className="flex items-center gap-1 text-sm text-purple-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>+15.3%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salary Trends by Role */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Salary Trends by Role
                </CardTitle>
                <CardDescription>
                  Average salaries and year-over-year growth across data roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Data Scientist</h4>
                          <p className="text-sm text-muted-foreground">Machine Learning, Analytics</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$142K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+9.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Data Engineer</h4>
                          <p className="text-sm text-muted-foreground">ETL, Data Pipelines</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$138K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+11.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">ML Engineer</h4>
                          <p className="text-sm text-muted-foreground">Model Deployment, MLOps</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$155K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+13.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Data Analyst</h4>
                          <p className="text-sm text-muted-foreground">Business Intelligence, Reporting</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$89K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+6.7%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Product Analyst</h4>
                          <p className="text-sm text-muted-foreground">A/B Testing, Metrics</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$118K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+8.9%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Research Scientist</h4>
                          <p className="text-sm text-muted-foreground">AI Research, Deep Learning</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$168K</p>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="h-3 w-3" />
                            <span>+7.3%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hot Skills in Demand */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Hot Skills in Demand
                </CardTitle>
                <CardDescription>
                  Most requested skills in data science job postings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Programming Languages</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Python</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-full h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">89%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SQL</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-4/5 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">82%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">R</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-3/5 h-2 bg-purple-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">61%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Scala</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-1/3 h-2 bg-orange-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">34%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">ML/AI Frameworks</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">TensorFlow</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-4/5 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">76%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">PyTorch</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-3/4 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">71%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Scikit-learn</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-3/5 h-2 bg-purple-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">68%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Keras</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-1/2 h-2 bg-orange-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">52%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Cloud Platforms</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">AWS</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-4/5 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">79%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Azure</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-3/5 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">63%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">GCP</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-1/2 h-2 bg-purple-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">58%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Snowflake</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-2/5 h-2 bg-orange-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">41%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Hiring Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Top Hiring Companies
                </CardTitle>
                <CardDescription>
                  Companies with the most active data science hiring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Meta</h4>
                          <p className="text-sm text-muted-foreground">Social Media</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">247 jobs</p>
                        <p className="text-sm text-muted-foreground">$165K avg</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Amazon</h4>
                          <p className="text-sm text-muted-foreground">E-commerce</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">189 jobs</p>
                        <p className="text-sm text-muted-foreground">$152K avg</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Google</h4>
                          <p className="text-sm text-muted-foreground">Technology</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">156 jobs</p>
                        <p className="text-sm text-muted-foreground">$178K avg</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Netflix</h4>
                          <p className="text-sm text-muted-foreground">Entertainment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">134 jobs</p>
                        <p className="text-sm text-muted-foreground">$185K avg</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Uber</h4>
                          <p className="text-sm text-muted-foreground">Transportation</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">98 jobs</p>
                        <p className="text-sm text-muted-foreground">$158K avg</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-950/20 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Airbnb</h4>
                          <p className="text-sm text-muted-foreground">Travel</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">87 jobs</p>
                        <p className="text-sm text-muted-foreground">$172K avg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Geographic Salary Insights
                </CardTitle>
                <CardDescription>
                  Average salaries by location and cost of living adjustments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Top Paying Cities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">San Francisco, CA</p>
                          <p className="text-sm text-muted-foreground">High cost of living</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$185K</p>
                          <p className="text-xs text-green-600">+45% vs national</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">New York, NY</p>
                          <p className="text-sm text-muted-foreground">High cost of living</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$172K</p>
                          <p className="text-xs text-green-600">+35% vs national</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Seattle, WA</p>
                          <p className="text-sm text-muted-foreground">Medium cost of living</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$158K</p>
                          <p className="text-xs text-green-600">+24% vs national</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Best Value Cities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Austin, TX</p>
                          <p className="text-sm text-muted-foreground">Medium cost of living</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$135K</p>
                          <p className="text-xs text-blue-600">Best value ratio</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Denver, CO</p>
                          <p className="text-sm text-muted-foreground">Medium cost of living</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$128K</p>
                          <p className="text-xs text-blue-600">Growing market</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">Remote</p>
                          <p className="text-sm text-muted-foreground">Location independent</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">$142K</p>
                          <p className="text-xs text-purple-600">68% of jobs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Market Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">MLOps Demand Surge</p>
                      <p className="text-xs text-muted-foreground">+47% job postings this quarter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">GenAI Skills Hot</p>
                      <p className="text-xs text-muted-foreground">LLM experience in high demand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                    <TrendingUp className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Remote Opportunities</p>
                      <p className="text-xs text-muted-foreground">68% of new postings are remote</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skill Gap Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Skill Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <p className="text-sm text-muted-foreground">Skills to improve</p>
                  </div>
                  <div className="space-y-3">
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">Docker/Kubernetes</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Required in 73% of ML Engineer roles
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start Learning
                      </Button>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium">Apache Spark</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Big data processing essential
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">ML Engineer Path</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Based on your Python & ML skills
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600">+$28K potential</span>
                      <Button size="sm" variant="outline">
                        Explore
                      </Button>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Data Engineer</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      High demand, great growth
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600">+$25K potential</span>
                      <Button size="sm" variant="outline">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Salary Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Career Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Filter className="h-4 w-4 mr-2" />
                    Set Job Alerts
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Update Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 