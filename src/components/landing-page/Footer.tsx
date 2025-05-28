import React from "react"
import Link from "next/link"
import { BarChart3 } from "lucide-react"

export function Footer() {
  return (
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
  )
} 