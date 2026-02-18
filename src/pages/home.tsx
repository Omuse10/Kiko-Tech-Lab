import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import { ArrowRight, Code2, CircuitBoard, Cuboid as Cube, Bot, Gamepad2, Brain, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Tech Background */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80")',
            opacity: '0.5'
          }}
        />
        <div className="relative mx-auto max-w-7xl py-12 sm:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-vi-green via-vi-gold to-vi-coral">
              Kiko Tech Lab
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Access cutting-edge technology and learn from anywhere. From coding to robotics,
              bring your ideas to life in our laboratory.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                to="/login"
                className="w-full sm:w-auto rounded-md bg-vi-green px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-vi-green-dark transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/tutorials"
                className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-gray-900 flex items-center justify-center group"
              >
                View Tutorials <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Link
            to="/lab-select/coding"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-green-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-green bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <Code2 className="h-8 w-8 text-vi-green" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Coding Lab</h3>
            <p className="mt-2 text-gray-600">
              Learn programming with interactive tutorials and real-time collaboration.
            </p>
          </Link>

          <Link
            to="/lab-select/electronics"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-gold-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-gold bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <CircuitBoard className="h-8 w-8 text-vi-gold" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Electronics Lab</h3>
            <p className="mt-2 text-gray-600">
              Design and simulate electronic circuits with virtual components.
            </p>
          </Link>

          <Link
            to="/lab-select/modeling"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-coral-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-coral bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <Cube className="h-8 w-8 text-vi-coral" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">3D Modeling</h3>
            <p className="mt-2 text-gray-600">
              Create and visualize 3D models for printing and prototyping.
            </p>
          </Link>

          <Link
            to="/lab-select/robotics"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-green-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-green bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <Bot className="h-8 w-8 text-vi-green" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Robotics</h3>
            <p className="mt-2 text-gray-600">
              Program and simulate robots in a virtual environment.
            </p>
          </Link>

          <Link
            to="/lab-select/game"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-gold-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-gold bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <Gamepad2 className="h-8 w-8 text-vi-gold" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Game Development</h3>
            <p className="mt-2 text-gray-600">
              Build games using industry-standard tools and frameworks.
            </p>
          </Link>

          <Link
            to="/lab-select/ai"
            className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-coral-light transition-colors bg-white group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vi-coral bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
              <Brain className="h-8 w-8 text-vi-coral" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
            <p className="mt-2 text-gray-600">
              Experiment with AI models and machine learning algorithms.
            </p>
          </Link>
        </div>

        {/* Collaboration Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Collaborate & Learn Together</h2>
            <p className="mt-2 text-gray-600">Join live sessions, work on shared projects, and learn from experts</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to="/collaborate"
              className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-green-light transition-colors bg-white group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vi-green bg-opacity-10">
                  <Users className="h-6 w-6 text-vi-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Collaboration</h3>
                  <p className="text-sm text-gray-600">Work together in real-time on shared projects</p>
                </div>
              </div>
            </Link>

            <Link
              to="/tutorials"
              className="relative overflow-hidden rounded-lg border p-6 hover:border-vi-gold-light transition-colors bg-white group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vi-gold bg-opacity-10">
                  <Code2 className="h-6 w-6 text-vi-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Tutorials</h3>
                  <p className="text-sm text-gray-600">Learn with step-by-step guided tutorials</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}