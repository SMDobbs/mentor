"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  Upload, 
  Download, 
  Target, 
  Zap, 
  Award, 
  CheckCircle,
  ArrowLeft,
  BarChart3,
  Eye,
  Edit,
  Plus,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default function ResumeBuilder() {
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
                <Link href="/resume-builder" className="text-foreground font-medium">
                  Resume Builder
                </Link>
                <Link href="/skill-paths" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skill Paths
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Save Progress
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
            <h1 className="text-3xl font-bold">AI-Powered Resume Builder</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Create ATS-optimized resumes with intelligent job description analysis and real-time feedback
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Resume Builder */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description Analyzer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Job Description Analyzer
                </CardTitle>
                <CardDescription>
                  Paste a job description to get personalized optimization suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    className="w-full h-32 p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Paste the job description here to analyze required skills and keywords..."
                  />
                  <div className="flex gap-3">
                    <Button className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Analyze Description
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Template</CardTitle>
                <CardDescription>
                  Professional templates optimized for different data roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg h-32 mb-3 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-medium mb-1">Data Scientist</h4>
                    <p className="text-sm text-muted-foreground">Perfect for ML and analytics roles</p>
                  </div>
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg h-32 mb-3 flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-medium mb-1">Data Analyst</h4>
                    <p className="text-sm text-muted-foreground">Ideal for business intelligence</p>
                  </div>
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg h-32 mb-3 flex items-center justify-center">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-medium mb-1">Data Engineer</h4>
                    <p className="text-sm text-muted-foreground">Optimized for engineering roles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Editor */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Edit className="h-5 w-5" />
                    Resume Editor
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Personal Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-4">Professional Summary</h4>
                    <textarea
                      className="w-full h-24 p-2 border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Write a compelling summary that highlights your data expertise and career goals..."
                    />
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4" />
                      AI suggestions will appear here based on your job description analysis
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Work Experience</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="border border-border rounded p-3">
                        <div className="grid md:grid-cols-2 gap-3 mb-3">
                          <input
                            type="text"
                            placeholder="Job Title"
                            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <textarea
                          className="w-full h-20 p-2 border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Describe your achievements and responsibilities..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium mb-4">Technical Skills</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium">Programming Languages</label>
                        <input
                          type="text"
                          placeholder="Python, R, SQL..."
                          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Tools & Frameworks</label>
                        <input
                          type="text"
                          placeholder="Pandas, Scikit-learn..."
                          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Databases</label>
                        <input
                          type="text"
                          placeholder="PostgreSQL, MongoDB..."
                          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* ATS Score */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ATS Optimization Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
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
                        strokeDasharray="87, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">87%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Excellent ATS compatibility</p>
                </div>
              </CardContent>
            </Card>

            {/* Optimization Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Optimization Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Keywords Matched</p>
                      <p className="text-xs text-muted-foreground">15/18 required keywords found</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-yellow-500 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">!</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Add Missing Skills</p>
                      <p className="text-xs text-muted-foreground">Include: TensorFlow, Kubernetes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">i</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Quantify Achievements</p>
                      <p className="text-xs text-muted-foreground">Add metrics to work experience</p>
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
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Load Sample Resume
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Import from LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Schedule Review
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