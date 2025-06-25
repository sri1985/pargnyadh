import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Palette, Mail, BarChart3, Smartphone, CheckCircle, ArrowRight, Eye, Target, TrendingUp } from 'lucide-react';

export default function DigitalMarketing() {
  const features = [{ icon: Palette, title: 'AEM Integration', description: 'Adobe Experience Manager integrations with comprehensive content strategy and management solutions.' }, { icon: Mail, title: 'Email Automation', description: 'Advanced email campaign automation using Zeta, Listrak, and other leading marketing platforms.' }, { icon: BarChart3, title: 'Analytics & Testing', description: 'Data-driven insights through advanced analytics, A/B testing, and performance optimization.' }, { icon: Eye, title: 'UX/UI Optimization', description: 'User experience design optimization, DAM integration (Tenovos), and mobile app development.' }];
  const platforms = [{ name: 'Adobe Experience Manager', logo: 'AEM', color: 'from-red-500 to-red-700', category: 'CMS' }, { name: 'Zeta Marketing', logo: 'Z', color: 'from-blue-500 to-blue-700', category: 'Email' }, { name: 'Listrak', logo: 'L', color: 'from-green-500 to-green-700', category: 'Marketing' }, { name: 'Google Analytics', logo: 'GA', color: 'from-orange-500 to-orange-700', category: 'Analytics' }, { name: 'Tenovos DAM', logo: 'T', color: 'from-purple-500 to-purple-700', category: 'DAM' }, { name: 'Adobe Creative Suite', logo: 'CC', color: 'from-pink-500 to-pink-700', category: 'Design' }];
  const services = ['Content strategy and creation', 'Marketing automation and workflows', 'Customer journey mapping and optimization', 'Social media marketing and management', 'SEO and SEM campaign management', 'Conversion rate optimization (CRO)', 'Mobile app development and optimization', 'Digital asset management (DAM) implementation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-4">
        <Link to={createPageUrl('Services')} className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Digital Marketing & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Customer Experience</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your digital presence with our comprehensive marketing solutions. From Adobe Experience Manager integrations to advanced email automation and UX optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={createPageUrl('Home') + '#contact'} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Get Started
                </a>
                <a href="#platforms" className="border border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center">
                  View Platforms
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Targeted</h3>
                    <p className="text-sm text-gray-600">Precision marketing campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Growth</h3>
                    <p className="text-sm text-gray-600">ROI-focused strategies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Mobile-First</h3>
                    <p className="text-sm text-gray-600">Optimized experiences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Data-Driven</h3>
                    <p className="text-sm text-gray-600">Analytics and insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="platforms" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Marketing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most powerful marketing and experience platforms to deliver exceptional customer journeys.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-white font-bold text-lg">{platform.logo}</span>
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm mb-1">{platform.name}</h3>
                <p className="text-center text-xs text-gray-500">{platform.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Our Marketing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed to engage customers and drive meaningful business results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Complete Marketing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From strategy to execution, we provide end-to-end digital marketing solutions that drive customer engagement and business growth.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Results</h3>
                <div className="space-y-6">
                  {[{ metric: 'Email Open Rate', improvement: '+35%', description: 'Automated campaign optimization' }, { metric: 'Conversion Rate', increase: '+45%', description: 'UX/UI improvements and A/B testing' }, { metric: 'Customer Engagement', growth: '+60%', description: 'Personalized content strategies' }, { metric: 'ROI', multiplier: '4.2x', description: 'Marketing automation efficiency' }].map((result, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{result.metric}</h4>
                        <p className="text-sm text-purple-600 font-bold">{result.improvement || result.increase || result.growth || result.multiplier}</p>
                        <p className="text-gray-600 text-sm">{result.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Elevate Your Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your digital marketing strategy with our comprehensive solutions and drive exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your Marketing Journey
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}