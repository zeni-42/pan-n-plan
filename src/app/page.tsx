"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    ChefHat,
    Heart,
    BookOpen,
    Search,
    Menu,
    Github,
    Twitter,
    Play,
    Sparkles,
    Users,
    Star,
    ArrowRight,
    Utensils,
    Video,
    Bookmark,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MotionProps } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleOnHover:MotionProps = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Pan 'n Plan
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/notebook"
                className="text-zinc-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                Notebook
              </Link>
              <Link
                href="/about"
                className="text-zinc-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Button onClick={()=> router.push('/home') } className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl px-6 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Launch App
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-2xl">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950 border-zinc-800">
                <div className="flex flex-col space-y-8 mt-12">
                  <Link
                    href="/explore"
                    className="text-xl text-zinc-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Explore
                  </Link>
                  <Link
                    href="/notebook"
                    className="text-xl text-zinc-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notebook
                  </Link>
                  <Link
                    href="/about"
                    className="text-xl text-zinc-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Launch App
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6 px-4 py-2 rounded-2xl">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Discover Amazing Recipes
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Next{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Favorite Meal
                </span>{" "}
                is One Click Away
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                Random recipes. Full instructions. Save them forever. Transform your cooking journey with endless
                culinary discoveries.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    asChild
                  >
                    <Link href="/home">
                      <Search className="w-5 h-5 mr-2" />
                      Start Exploring
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={fadeInRight} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl" />
                <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 space-y-6">
                  <div className="text-6xl text-center">🍜</div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white">Featured Recipe</h3>
                    <p className="text-zinc-400">Spicy Ramen Bowl</p>
                  </div>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <Button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/30 rounded-2xl">
                    View Recipe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
            >
              Everything You Need to Cook
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From discovery to cooking, we've got you covered with powerful features designed for passionate home
              cooks.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Utensils,
                title: "Discover Random Meals",
                description: "Pull from a global database of amazing recipes with just one click",
                gradient: "from-orange-500 to-red-500",
                emoji: "🍽️",
              },
              {
                icon: Bookmark,
                title: "Save to Notebook",
                description: "Save your favorite meals to revisit later and build your personal collection",
                gradient: "from-orange-500 to-amber-500",
                emoji: "📔",
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Watch YouTube cooking walkthroughs and learn from expert chefs",
                gradient: "from-orange-500 to-pink-500",
                emoji: "🎥",
              },
              {
                icon: Heart,
                title: "Simple, Fast & Free",
                description: "No complicated features, just pure cooking joy that's completely free",
                gradient: "from-orange-500 to-purple-500",
                emoji: "📊",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Card className="bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm group h-full rounded-2xl">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-4">{feature.emoji}</div>
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white mb-3">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-zinc-400 leading-relaxed text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-zinc-900/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Get started with Pan 'n Plan in just three simple steps and discover your next favorite meal
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <Tabs defaultValue="step1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50 border border-zinc-700 rounded-2xl p-2">
                <TabsTrigger
                  value="step1"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
                >
                  Step 1
                </TabsTrigger>
                <TabsTrigger
                  value="step2"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
                >
                  Step 2
                </TabsTrigger>
                <TabsTrigger
                  value="step3"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
                >
                  Step 3
                </TabsTrigger>
              </TabsList>

              <TabsContent value="step1" className="mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardHeader className="text-center pb-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                        <Search className="w-12 h-12 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white mb-4">Hit "Explore"</CardTitle>
                      <div className="text-6xl mb-4">🔍</div>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <CardDescription className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Start your culinary journey by clicking the explore button. Our algorithm will surprise you with
                        amazing meal suggestions from cuisines around the world, tailored to inspire your next cooking
                        adventure.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="step2" className="mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardHeader className="text-center pb-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                        <BookOpen className="w-12 h-12 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white mb-4">See Full Recipe + YouTube Video</CardTitle>
                      <div className="text-6xl mb-4">📖</div>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <CardDescription className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Get detailed cooking instructions, complete ingredient lists, nutritional information, and watch
                        step-by-step YouTube tutorials. Everything you need to create restaurant-quality meals at home.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="step3" className="mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardHeader className="text-center pb-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white mb-4">Save to Notebook</CardTitle>
                      <div className="text-6xl mb-4">💾</div>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <CardDescription className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Love what you discovered? Save it to your personal digital notebook for future meal planning.
                        Organize your favorites, create meal plans, and never lose a great recipe again.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Testimonials/Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
            >
              Loved by Home Cooks
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { number: "10,000+", label: "Meals Served", icon: ChefHat, emoji: "🍽️" },
              { number: "5,000+", label: "Happy Cooks", icon: Users, emoji: "👨‍🍳" },
              { number: "50,000+", label: "Recipes Saved", icon: Heart, emoji: "❤️" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Card className="bg-zinc-900/30 border-zinc-800 hover:border-orange-500/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="text-4xl mb-4">{stat.emoji}</div>
                      <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-zinc-400 text-lg">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-6 py-3 rounded-2xl text-lg">
              <Heart className="w-5 h-5 mr-2" />
              Made with ❤️ by food lovers
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-600/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-8xl mb-8">🍲</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Cook more.
              </span>{" "}
              <span className="text-white">Plan less.</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Eat better.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of home cooks who have transformed their kitchens with Pan 'n Plan. Your culinary adventure
              starts with a single click.
            </p>
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xl px-12 py-8 rounded-2xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                asChild
              >
                <Link href="/home">
                  <ChefHat className="w-6 h-6 mr-3" />
                  Start Exploring Meals
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Pan 'n Plan
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Your personal cooking assistant for discovering amazing meals and planning your culinary adventures.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/explore"
                  className="block text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                >
                  Explore Recipes
                </Link>
                <Link
                  href="/notebook"
                  className="block text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                >
                  My Notebook
                </Link>
                <Link
                  href="/about"
                  className="block text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-xl hover:bg-orange-500/10"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-xl hover:bg-orange-500/10"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-500">
              © {new Date().getFullYear()} Pan 'n Plan. All rights reserved. Made with{" "}
              <span className="text-orange-400">❤️</span> for food lovers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
