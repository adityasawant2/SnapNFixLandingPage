"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Users,
  Building2,
  CheckCircle,
  Smartphone,
  Brain,
  DollarSign,
  Eye,
  ArrowRight,
  Globe,
  Target,
  Wrench,
  FileText,
  BarChart3,
  MapPin,
  Clock,
  AlertTriangle,
  Layers,
  Construction,
  Zap,
  Menu,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CivicTechLanding() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Construction className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">SnapNFix</span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#process" className="text-gray-700 hover:text-gray-900 transition-colors">
              Process
            </Link>
            <Link href="#technology" className="text-gray-700 hover:text-gray-900 transition-colors">
              Technology
            </Link>
            <Link href="#impact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Impact
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100"
            >
              Login
            </Button>
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        {/* Mobile nav dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
            <Link href="#process" className="block text-gray-900 font-medium">Process</Link>
            <Link href="#technology" className="block text-gray-900 font-medium">Technology</Link>
            <Link href="#impact" className="block text-gray-900 font-medium">Impact</Link>
            <Button className="w-full border border-gray-300 text-white bg-blue-600 hover:bg-blue-700 py-2 rounded mt-2">Login</Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-800 via-emerald-800 to-gray-800 border-b-2 border-white shadow-sm overflow-hidden">
        {/* Blurred dark blob backgrounds */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Deep emerald blob top left */}
          <svg className="absolute top-[-80px] left-[-80px] w-96 h-96 opacity-40 blur-2xl" viewBox="0 0 200 200" fill="none">
            <path fill="#059669" d="M43.2,-75.2C56.7,-67.2,67.2,-56.7,75.2,-43.2C83.2,-29.7,88.7,-13.2,86.7,2.7C84.7,18.7,75.2,34,64.2,47.2C53.2,60.3,40.7,71.3,26.3,77.7C11.9,84.1,-4.4,85.9,-20.2,82.1C-36,78.3,-51.3,68.9,-62.2,55.2C-73.1,41.5,-79.7,23.5,-80.2,5.7C-80.7,-12.1,-75.1,-29.7,-65.2,-43.2C-55.3,-56.7,-41.2,-66.1,-26.1,-73.1C-11,-80.1,4.9,-84.7,20.7,-83.2C36.5,-81.7,51.7,-74.2,43.2,-75.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        {/* Main hero content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="mb-6">
                    <Badge className="bg-emerald-700 text-white border-emerald-400 mb-4 transition-colors hover:bg-emerald-600 hover:text-white">
                      <AlertTriangle className="w-3 h-3 mr-1 text-white" />
                      Infrastructure Challenge
                    </Badge>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                    Connecting Citizens to
                    <span className="text-emerald-300"> Infrastructure Solutions</span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed drop-shadow">
                    A comprehensive platform that bridges the gap between pothole reporting, AI-powered assessment, and
                    contractor coordination for more responsive infrastructure maintenance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 drop-shadow">
                      <Camera className="w-5 h-5 mr-2" />
                      Report Pothole
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-200 text-blue-100 hover:bg-blue-900 hover:border-blue-100 hover:text-white px-8 py-3 bg-transparent"
                    >
                      <Building2 className="w-5 h-5 mr-2" />
                      Contractor Portal
                    </Button>
                  </div>

                  {/* Problem Statement */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">The Infrastructure Challenge</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <p className="text-gray-700">Delayed reporting of road damage</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Wrench className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-gray-700">Inefficient contractor coordination</p>
                      </div>
                      <div className="text-center col-span-2 md:col-span-1">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock className="w-5 h-5 text-yellow-500" />
                        </div>
                        <p className="text-gray-700">Slow assessment and prioritization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Pothole Illustration */}
                <div className="relative">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Pothole Detection</h3>
                      <p className="text-sm text-gray-500">Real-time analysis and severity assessment</p>
                    </div>

                    {/* Pothole Illustration */}
                    <div className="relative bg-gray-100 rounded-xl p-6 mb-4">
                      <img
                        src="/pothole.png"
                        alt="Pothole on a road, used for AI-powered detection demo"
                        className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-200"
                      />

                      {/* Analysis Overlay */}
                      <div className="absolute top-8 right-8 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                        AI Analyzing...
                      </div>

                      {/* Detection Points */}
                      <div className="absolute top-20 left-12 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                      <div className="absolute top-32 left-20 w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-300"></div>
                      <div className="absolute top-28 right-16 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-700"></div>
                    </div>

                    {/* Analysis Results */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Severe damage detected</span>
                        </div>
                        <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">High Priority</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Location verified</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">GPS Confirmed</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Contractors notified</span>
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Active</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-16 bg-white border-b-2 border-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="group bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 transition-colors hover:text-white hover:bg-emerald-500">
              <Layers className="w-3 h-3 mr-1 text-emerald-500 group-hover:text-white transition-colors" />
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How SnapNFix Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A streamlined approach to infrastructure reporting and repair coordination
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">Report</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-700">
                    Citizens photograph potholes using mobile app with location data
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">Analyze</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-700">
                    AI models verify and assess damage severity for prioritization
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">Coordinate</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-700">
                    Contractors receive notifications and submit repair proposals
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">Verify</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-700">
                    Completed repairs are documented and verified through the platform
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 bg-gradient-to-br from-blue-800 via-emerald-800 to-gray-800 border-b-2 border-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="group bg-purple-100 text-purple-700 border-purple-200 mb-4 transition-colors hover:text-white hover:bg-purple-500">
              <Zap className="w-3 h-3 mr-1 text-purple-500 group-hover:text-white transition-colors" />
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Advanced Technology</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              AI-powered solutions for infrastructure assessment and coordination
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Image Recognition</CardTitle>
                <CardDescription className="text-gray-700">
                  Computer vision models for pothole detection and validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    YOLO object detection
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Image classification
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Damage assessment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Location Intelligence</CardTitle>
                <CardDescription className="text-gray-700">
                  Geospatial analysis for severity assessment and prioritization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    GPS integration
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Traffic impact analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Priority mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Coordination System</CardTitle>
                <CardDescription className="text-gray-700">
                  Platform for contractor management and quality tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Contractor matching
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Progress tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Quality verification
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Sections */}
      <section className="py-16 bg-white border-b-2 border-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Built for Infrastructure Stakeholders</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Connecting the key players in infrastructure maintenance and repair
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-8 max-w-5xl mx-auto">
            {/* Citizens */}
            <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Citizens</CardTitle>
                <CardDescription className="text-gray-700">
                  Report infrastructure issues and track repair progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Simple photo reporting</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Status notifications</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Community dashboard</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Contractors */}
            <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Contractors</CardTitle>
                <CardDescription className="text-gray-700">
                  Access verified repair opportunities and manage projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Verified job listings</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Project management tools</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-700">Performance tracking</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Building2 className="w-4 h-4 mr-2" />
                  Join Platform
                </Button>
              </CardContent>
            </Card>

            {/* Government (centered, spans 2 columns) */}
            <div className="col-span-2 flex justify-center">
              <div className="w-full max-w-md">
                <Card className="border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Government</CardTitle>
                    <CardDescription className="text-gray-700">
                      Monitor infrastructure health and coordinate maintenance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-gray-700">Infrastructure analytics</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-gray-700">Resource allocation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-gray-700">Progress oversight</span>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDG Section */}
      <section id="impact" className="py-16 bg-gradient-to-br from-blue-800 via-emerald-800 to-gray-800 border-b-2 border-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="group bg-orange-100 text-orange-700 border-orange-200 mb-4 transition-colors hover:text-white hover:bg-orange-500">
              <Globe className="w-3 h-3 mr-1 text-orange-500 group-hover:text-white transition-colors" />
              Global Alignment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Supporting Sustainable Development</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              SnapNFix aligns with UN Sustainable Development Goals for infrastructure and sustainable cities
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <img src="/sdg9.png" alt="UN SDG 9: Industry, Innovation & Infrastructure" className="w-40 h-auto md:w-60 rounded shadow opacity-80" />
            <img src="/sdg11.png" alt="UN SDG 11: Sustainable Cities & Communities" className="w-40 h-auto md:w-60 rounded shadow opacity-80" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-b-2 border-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Improve Your Community?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join citizens, contractors, and government partners building better infrastructure through technology and
            transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3">
              <Camera className="w-5 h-5 mr-2" />
              Start Reporting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Construction className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">SnapNFix</span>
            </div>

            <div className="flex items-center gap-6 text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Technology
              </Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>UN SDG 9 & 11 Aligned</span>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; 2024 SnapNFix. Building sustainable cities through technology and community engagement.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
