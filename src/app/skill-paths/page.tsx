import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BookOpen, 
  Code, 
  Database, 
  Brain, 
  BarChart3, 
  Cloud, 
  Award, 
  CheckCircle,
  ArrowLeft,
  Play,
  Lock,
  Star,
  Clock,
  Users,
  TrendingUp,
  Target,
  Zap,
  Trophy,
  Calendar,
  FileText,
  Video,
  Headphones,
  Download
} from "lucide-react"
import Link from "next/link"

export default function SkillPaths() {
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
                <Link href="/skill-paths" className="text-foreground font-medium">
                  Skill Paths
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Trophy className="h-4 w-4 mr-2" />
                My Progress
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
            <h1 className="text-3xl font-bold">Skill Development Paths</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Structured learning paths to master data science skills and advance your career
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Skill Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Skill Assessment & Recommendations
                </CardTitle>
                <CardDescription>
                  Take our assessment to get personalized learning recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium mb-2">Programming Skills</h4>
                    <p className="text-sm text-muted-foreground mb-3">Python, R, SQL proficiency</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Take Assessment
                    </Button>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-medium mb-2">ML & Statistics</h4>
                    <p className="text-sm text-muted-foreground mb-3">Machine learning concepts</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Take Assessment
                    </Button>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium mb-2">Data Visualization</h4>
                    <p className="text-sm text-muted-foreground mb-3">Tableau, Power BI, Python viz</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Take Assessment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Paths */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Choose Your Learning Path</h2>
              
              {/* Beginner Path */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        Data Science Fundamentals
                      </CardTitle>
                      <CardDescription>
                        Perfect for beginners starting their data science journey
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-100 dark:bg-green-950/20 text-green-600 px-2 py-1 rounded">Beginner</span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-950/20 text-blue-600 px-2 py-1 rounded">12 weeks</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Python Basics</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Variables, functions, data types</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Statistics 101</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Descriptive & inferential stats</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Play className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Data Manipulation</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Pandas, NumPy essentials</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">Data Visualization</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Matplotlib, Seaborn basics</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>3-4 hours/week</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>2,847 enrolled</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.8 rating</span>
                      </div>
                    </div>
                    <Button>
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Intermediate Path */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        Machine Learning Mastery
                      </CardTitle>
                      <CardDescription>
                        Advanced ML techniques and real-world applications
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-950/20 text-blue-600 px-2 py-1 rounded">Intermediate</span>
                      <span className="text-xs bg-purple-100 dark:bg-purple-950/20 text-purple-600 px-2 py-1 rounded">16 weeks</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Supervised Learning</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Regression, classification</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Play className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Unsupervised Learning</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Clustering, dimensionality</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">Deep Learning</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Neural networks, TensorFlow</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">MLOps</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Model deployment, monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>5-6 hours/week</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>1,523 enrolled</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.9 rating</span>
                      </div>
                    </div>
                    <Button>
                      Continue Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Path */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        Data Engineering & Scale
                      </CardTitle>
                      <CardDescription>
                        Big data processing, cloud platforms, and production systems
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-purple-100 dark:bg-purple-950/20 text-purple-600 px-2 py-1 rounded">Advanced</span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-950/20 text-orange-600 px-2 py-1 rounded">20 weeks</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">Big Data Tools</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Spark, Hadoop, Kafka</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">Cloud Platforms</span>
                      </div>
                      <p className="text-xs text-muted-foreground">AWS, GCP, Azure</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">Data Pipelines</span>
                      </div>
                      <p className="text-xs text-muted-foreground">ETL, orchestration</p>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-muted-foreground">System Design</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Scalable architectures</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>6-8 hours/week</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>892 enrolled</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.7 rating</span>
                      </div>
                    </div>
                    <Button variant="outline" disabled>
                      <Lock className="h-4 w-4 mr-2" />
                      Unlock with Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Specialized Tracks */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Specialized Tracks</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Database className="h-5 w-5" />
                        SQL Mastery
                      </CardTitle>
                      <CardDescription>
                        From basics to advanced database optimization
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-medium">7/12 modules</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>8 weeks</span>
                          </div>
                          <Button size="sm">
                            Continue
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Cloud className="h-5 w-5" />
                        Cloud Data Platforms
                      </CardTitle>
                      <CardDescription>
                        AWS, GCP, and Azure for data professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-medium">0/15 modules</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>12 weeks</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Start Track
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Current Course Detail */}
            <Card>
              <CardHeader>
                <CardTitle>Currently Learning: Data Manipulation with Pandas</CardTitle>
                <CardDescription>
                  Master data cleaning, transformation, and analysis techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Course Progress</h4>
                        <span className="text-sm text-muted-foreground">3 of 8 lessons completed</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Introduction to Pandas</p>
                            <p className="text-xs text-muted-foreground">DataFrames and Series basics</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">15 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Data Loading & Inspection</p>
                            <p className="text-xs text-muted-foreground">Reading CSV, Excel, JSON files</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">22 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Data Cleaning Techniques</p>
                            <p className="text-xs text-muted-foreground">Handling missing values, duplicates</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">28 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border border-blue-500 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                          <Play className="h-5 w-5 text-blue-500" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Data Transformation</p>
                            <p className="text-xs text-muted-foreground">Filtering, grouping, aggregation</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">35 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg opacity-60">
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Advanced Indexing</p>
                            <p className="text-xs text-muted-foreground">MultiIndex, time series</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">30 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <h5 className="font-medium mb-3">Course Resources</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span>Course Notes PDF</span>
                          <Download className="h-3 w-3 text-muted-foreground ml-auto" />
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Code className="h-4 w-4 text-green-500" />
                          <span>Practice Exercises</span>
                          <Download className="h-3 w-3 text-muted-foreground ml-auto" />
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Database className="h-4 w-4 text-purple-500" />
                          <span>Sample Datasets</span>
                          <Download className="h-3 w-3 text-muted-foreground ml-auto" />
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Lesson
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Study Time
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">47</div>
                    <p className="text-sm text-muted-foreground">Hours learned</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Courses completed</span>
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Current streak</span>
                      <span className="text-sm font-medium">12 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Certificates earned</span>
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skill level</span>
                      <span className="text-sm font-medium">Intermediate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-950/20 rounded-lg flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Python Fundamentals</p>
                      <p className="text-xs text-muted-foreground">Completed course</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">7-Day Streak</p>
                      <p className="text-xs text-muted-foreground">Consistent learning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">First Project</p>
                      <p className="text-xs text-muted-foreground">Portfolio milestone</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Study Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 border border-border rounded">
                    <span className="text-sm">Today</span>
                    <span className="text-sm font-medium text-green-600">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-blue-500 rounded bg-blue-50 dark:bg-blue-950/20">
                    <span className="text-sm">Tomorrow</span>
                    <span className="text-sm font-medium text-blue-600">Pandas Lesson 4</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-border rounded">
                    <span className="text-sm">Wednesday</span>
                    <span className="text-sm text-muted-foreground">Practice exercises</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-border rounded">
                    <span className="text-sm">Thursday</span>
                    <span className="text-sm text-muted-foreground">Project work</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended Next</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Machine Learning Basics</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Build on your Python skills with ML fundamentals
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Preview Course
                    </Button>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Data Visualization</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Create compelling charts and dashboards
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Preview Course
                    </Button>
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