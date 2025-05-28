import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar } from "lucide-react"

export function Navigation() {
  return (
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
  )
} 