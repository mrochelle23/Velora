import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  GraduationCap, 
  PiggyBank,
  CheckCircle,
  Menu,
  X,
  Star,
  TrendingUp,
  Lock,
  Award
} from 'lucide-react';
import AboutSection from './About';
import ContactSection from './Contact';

const Navbar = ({ isSignInOpen, setIsSignInOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-velora-primary">Velora</h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <a href="#accounts" className="text-velora-gray-700 hover:text-velora-primary px-3 py-2 text-sm font-medium transition-colors">
                  Accounts
                </a>
                <a href="#features" className="text-velora-gray-700 hover:text-velora-primary px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#about" className="text-velora-gray-700 hover:text-velora-primary px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#contact" className="text-velora-gray-700 hover:text-velora-primary px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button
              onClick={() => setIsSignInOpen(true)}
              className="bg-velora-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-velora-blue-800 transition-colors"
            >
              Sign In
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-velora-gray-700 hover:text-velora-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#accounts" className="text-velora-gray-700 hover:text-velora-primary block px-3 py-2 text-base font-medium">
                Accounts
              </a>
              <a href="#features" className="text-velora-gray-700 hover:text-velora-primary block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#about" className="text-velora-gray-700 hover:text-velora-primary block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-velora-gray-700 hover:text-velora-primary block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button
                onClick={() => setIsSignInOpen(true)}
                className="w-full text-left bg-velora-primary text-white px-3 py-2 rounded-lg font-medium hover:bg-velora-blue-800 transition-colors mt-3"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-velora-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-velora-gray-900 mb-6"
          >
            Smart Banking for
            <span className="text-velora-primary block">Educational Success</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-velora-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Velora provides innovative banking solutions designed specifically for students and families 
            to save, manage, and pay for education expenses with confidence and ease.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-velora-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-velora-blue-800 transition-colors flex items-center justify-center">
              Open an Account
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-velora-primary text-velora-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-velora-primary hover:text-white transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AccountCard = ({ icon: Icon, title, description, features, targetAge, isPopular = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-lg p-8 relative ${isPopular ? 'ring-2 ring-velora-primary' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-velora-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-center w-16 h-16 bg-velora-primary bg-opacity-10 rounded-lg mb-6">
        <Icon className="text-velora-primary" size={32} />
      </div>
      
      <h3 className="text-2xl font-bold text-velora-gray-900 mb-3">{title}</h3>
      <p className="text-velora-gray-600 mb-4">{description}</p>
      <p className="text-sm text-velora-primary font-medium mb-6">{targetAge}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-velora-success mr-3 mt-0.5 flex-shrink-0" size={16} />
            <span className="text-velora-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-velora-primary text-white py-3 rounded-lg font-semibold hover:bg-velora-blue-800 transition-colors">
        Open Account
      </button>
    </motion.div>
  );
};

const AccountsSection = () => {
  const accounts = [
    {
      icon: GraduationCap,
      title: "College Student Account",
      description: "Banking designed specifically for college students with integrated tuition payment features.",
      targetAge: "Ages 17+",
      isPopular: true,
      features: [
        "Direct API integration with colleges and universities",
        "Seamless tuition payment processing",
        "Transfer funds between participating schools",
        "Digital fund transfers upon graduation or withdrawal",
        "Account remains active during temporary leave"
      ]
    },
    {
      icon: Users,
      title: "Parents College Tuition Account",
      description: "Parent-managed account for college expenses with automatic fund protection.",
      targetAge: "For College Students",
      features: [
        "Parent oversight with student access",
        "College API integration for payments",
        "Automatic fund return to parent if student withdraws",
        "Flexible transfer options",
        "Real-time spending notifications"
      ]
    },
    {
      icon: TrendingUp,
      title: "High School Tuition Account",
      description: "Co-owned savings account for teens preparing for college.",
      targetAge: "Ages 13-17",
      features: [
        "Joint parent-teen account management",
        "College savings goal tracking",
        "Educational financial literacy tools",
        "Competitive interest rates",
        "Automatic college fund transfers"
      ]
    },
    {
      icon: PiggyBank,
      title: "Parent Tuition Account",
      description: "Early college savings for younger children.",
      targetAge: "Ages 6-17",
      features: [
        "Long-term college savings strategy",
        "Compound interest optimization",
        "Tax-advantaged savings options",
        "Flexible contribution schedules",
        "Educational milestone rewards"
      ]
    },
    {
      icon: Star,
      title: "Future Parent Tuition Account",
      description: "Start saving for your future children's education today.",
      targetAge: "For Future Children",
      features: [
        "Pre-birth savings planning",
        "High-yield investment options",
        "Flexible beneficiary designation",
        "Long-term growth potential",
        "Estate planning integration"
      ]
    }
  ];

  return (
    <section id="accounts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-velora-gray-900 mb-4">
            Choose the Right Account for Your Journey
          </h2>
          <p className="text-xl text-velora-gray-600 max-w-3xl mx-auto">
            From early childhood savings to college graduation, we have specialized accounts 
            designed for every stage of the educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <AccountCard key={index} {...account} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your funds are protected with military-grade encryption and FDIC insurance up to $250,000."
    },
    {
      icon: Lock,
      title: "API Integration",
      description: "Seamless connections with over 2,000 colleges and universities for direct tuition payments."
    },
    {
      icon: Award,
      title: "Smart Fund Management",
      description: "Intelligent algorithms help optimize your savings and ensure funds are available when needed."
    }
  ];

  return (
    <section id="features" className="py-20 bg-velora-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-velora-gray-900 mb-4">
            Why Choose Velora?
          </h2>
          <p className="text-xl text-velora-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep understanding of educational finance 
            to deliver unmatched banking solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-velora-primary bg-opacity-10 rounded-lg mx-auto mb-6">
                <feature.icon className="text-velora-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-velora-gray-900 mb-4">{feature.title}</h3>
              <p className="text-velora-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignInModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-8 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-velora-gray-900">Sign In to Velora</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velora-gray-400 hover:text-velora-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-velora-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-velora-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-velora-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-velora-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-velora-primary text-white py-3 rounded-lg font-semibold hover:bg-velora-blue-800 transition-colors"
          >
            Sign In
          </button>
          
          <div className="text-center">
            <button className="text-velora-primary hover:underline text-sm bg-transparent border-none cursor-pointer">
              Forgot your password?
            </button>
          </div>
          
          <div className="text-center pt-4 border-t">
            <p className="text-velora-gray-600 text-sm mb-3">Don't have an account?</p>
            <button
              type="button"
              className="w-full border-2 border-velora-primary text-velora-primary py-3 rounded-lg font-semibold hover:bg-velora-primary hover:text-white transition-colors"
            >
              Open New Account
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-velora-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Velora</h3>
            <p className="text-velora-gray-400">
              Smart banking solutions for educational success.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-velora-gray-400">
              <li><a href="/student-accounts" className="hover:text-white">Student Accounts</a></li>
              <li><a href="/parent-accounts" className="hover:text-white">Parent Accounts</a></li>
              <li><a href="/high-school-accounts" className="hover:text-white">High School Accounts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-velora-gray-400">
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-velora-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/fdic" className="hover:text-white">FDIC Insurance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-velora-gray-800 mt-8 pt-8 text-center text-velora-gray-400">
          <p>&copy; 2025 Velora Financial Services. All rights reserved. Member FDIC.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} />
      <Hero />
      <AccountsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <SignInModal isOpen={isSignInOpen} setIsOpen={setIsSignInOpen} />
    </div>
  );
};

export default Home;
