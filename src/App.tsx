import React, { useState } from 'react';
import { 
  Play, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  Check,
  Star,
  ChevronDown,
  ChevronUp,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Content",
      description: "Generate viral-worthy content tailored to your brand voice and audience preferences using advanced AI algorithms."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Viral Analytics",
      description: "Track engagement metrics and discover what makes content go viral with our comprehensive analytics dashboard."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Platform Support",
      description: "Seamlessly post across Instagram, TikTok, Twitter, LinkedIn, and more with platform-optimized content."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 10+ Hours Weekly",
      description: "Automate your content creation workflow and focus on growing your business while we handle the creative work."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "GoViral transformed our social media strategy. Our engagement increased by 300% in just 2 months!"
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      company: "@MikeTechReviews",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The AI content suggestions are spot-on. I've had 5 posts go viral since using GoViral. Game-changer!"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Fashion Forward",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Finally, a tool that understands our brand voice. Our follower growth has been exponential."
    },
    {
      name: "David Park",
      role: "Entrepreneur",
      company: "StartupLife",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "GoViral's analytics helped me understand my audience better. My content now consistently performs 5x better."
    }
  ];

  const faqs = [
    {
      question: "Which social media platforms does GoViral support?",
      answer: "GoViral supports all major platforms including Instagram, TikTok, Twitter, LinkedIn, Facebook, YouTube, and Pinterest. We continuously add support for emerging platforms."
    },
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your brand voice, audience preferences, trending topics, and successful content patterns to generate personalized, viral-worthy content suggestions tailored to each platform."
    },
    {
      question: "Can I customize the generated content?",
      answer: "Absolutely! All AI-generated content serves as a starting point. You can edit, customize, and refine everything to match your exact brand voice and preferences."
    },
    {
      question: "What type of content can GoViral create?",
      answer: "GoViral can generate captions, hashtags, post ideas, video scripts, story content, carousel posts, and even suggest visual concepts for your content."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "How much time can I expect to save?",
      answer: "Most users save 10-15 hours per week on content creation and planning. The time saved varies based on your current workflow and content volume."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Link your social media accounts securely",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Generate",
      description: "AI creates viral content for your brand",
      icon: <Zap className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Customize",
      description: "Edit and personalize your content",
      icon: <Check className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Go Viral",
      description: "Post and watch your engagement soar",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GoViral</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
            </nav>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Content Into
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Viral Gold</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect your social media accounts and let our AI create viral-worthy content that drives engagement, grows your following, and builds your brand.
            </p>
            
            {/* Video Section */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                {!isVideoPlaying ? (
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-80">See GoViral in Action</p>
                      <p className="text-lg font-semibold">2 min demo</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <p className="text-white text-lg">Video Player (Demo)</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose GoViral?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI-driven features designed to supercharge your social media presence and create content that actually goes viral.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from zero to viral in four simple steps. Our streamlined process makes content creation effortless.
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of content creators, marketers, and businesses who've transformed their social media presence with GoViral.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers. If you don't see your question here, feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GoViral</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transform your social media presence with AI-powered viral content creation.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@goviral.ai
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GoViral. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;