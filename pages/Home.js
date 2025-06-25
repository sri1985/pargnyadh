
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Users, ShoppingCart, Shield, Calendar, Palette, Building, CheckCircle, Star, Globe } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Agile Transformation & Coaching',
      description: 'SAFe® Agile implementation and enterprise coaching for scaled frameworks.',
      link: 'AgileTransformation',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'Digital Commerce Solutions',
      description: 'End-to-end e-commerce platform migrations and omnichannel strategies.',
      link: 'DigitalCommerce',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'DevSecOps & Cloud',
      description: 'CI/CD automation, cloud migration, and security integration.',
      link: 'DevSecOpsCloud',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Program Management',
      description: 'End-to-end project lifecycle oversight for $100K–$7M initiatives.',
      link: 'ProgramDelivery',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Palette,
      title: 'Digital Marketing',
      description: 'AEM integrations, email automation, and customer experience optimization.',
      link: 'DigitalMarketing',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Building,
      title: 'Banking & FinTech',
      description: 'Payment platforms, digital wallets, and regulatory compliance.',
      link: 'BankingFintech',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { number: '24+', label: 'Years Experience', icon: Star },
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '15+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-serif leading-tight">
              Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business</span> with Expert Consulting
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              24+ years of expertise in Agile transformation, digital commerce, and cutting-edge technology solutions. 
              We deliver results across banking, telecom, retail, and insurance sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to={createPageUrl('Services')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-bl-3xl" style={{background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={createPageUrl(service.link)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" style={{background: `linear-gradient(90deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pragnyadh</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience, we've helped organizations across industries achieve their digital transformation goals through expert consulting and innovative solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  'Proven track record with 500+ successful projects',
                  'Deep expertise across multiple industry verticals',
                  'Certified professionals in leading frameworks',
                  'End-to-end project lifecycle management',
                  'Focus on measurable business outcomes'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Banking & Finance', 'Retail & E-commerce', 'Telecommunications', 'Insurance', 'Healthcare', 'Manufacturing'].map((industry, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
                      <div className="font-semibold text-gray-900">{industry}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your digital transformation journey and drive exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:contact@pragnyadh.com"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
            </a>
            <a 
              href="tel:+15551234567"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center justify-center"
            >
              Call Us Today
            </a>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <p className="text-blue-100">contact@pragnyadh.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Phone</h4>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Location</h4>
              <p className="text-blue-100">Global Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
