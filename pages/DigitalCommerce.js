import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ShoppingCart, Monitor, Smartphone, Globe, CheckCircle, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function DigitalCommerce() {
  const features = [
    { icon: Monitor, title: 'Platform Migrations', description: 'Seamless migrations across AEM, Hybris, SAP, and Shopify with zero downtime and data integrity.' },
    { icon: Globe, title: 'Omnichannel Strategy', description: 'Unified customer experience across desktop, mobile, and tablet with responsive design.' },
    { icon: Zap, title: 'AI Personalization', description: 'Advanced AI-driven personalization engines for enhanced customer engagement and conversion.' },
    { icon: Shield, title: 'Compliance & Security', description: 'WCAG compliance, payment gateway integration, and enterprise-grade security measures.' }
  ];
  const platforms = [
    { name: 'Adobe Experience Manager', logo: 'AEM', color: 'from-red-500 to-orange-500' },
    { name: 'SAP Hybris', logo: 'SAP', color: 'from-blue-600 to-blue-800' },
    { name: 'Shopify Plus', logo: 'S+', color: 'from-green-500 to-green-700' },
    { name: 'Magento Commerce', logo: 'M', color: 'from-orange-500 to-red-600' },
    { name: 'Salesforce Commerce', logo: 'SF', color: 'from-blue-400 to-indigo-600' },
    { name: 'BigCommerce', logo: 'BC', color: 'from-purple-500 to-pink-600' }
  ];
  const capabilities = ['End-to-end e-commerce platform development', 'Mobile-first responsive design implementation', 'SEO optimization and analytics integration', 'Payment gateway and checkout optimization', 'Inventory management and order processing', 'Customer data platform integration', 'Multi-language and multi-currency support', 'Performance optimization and scalability'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-6 py-4">
        <Link to={createPageUrl('Services')} className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <ShoppingCart className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Digital Commerce & <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">E-Commerce</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your digital commerce presence with our comprehensive e-commerce solutions. From platform migrations to AI-driven personalization, we deliver exceptional online experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={createPageUrl('Home') + '#contact'} className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Get Started
                </a>
                <a href="#platforms" className="border border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center">
                  View Platforms
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Mobile-First</h3>
                    <p className="text-sm text-gray-600">Responsive design for all devices</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Performance</h3>
                    <p className="text-sm text-gray-600">Lightning-fast loading speeds</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Security</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">AI-Powered</h3>
                    <p className="text-sm text-gray-600">Smart personalization</p>
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
              Supported <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in major e-commerce platforms and provide seamless migration services between them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-white font-bold text-lg">{platform.logo}</span>
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Our Commerce <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive e-commerce services designed to maximize your online revenue and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                Complete <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From strategy to implementation, we provide end-to-end e-commerce solutions that drive business growth.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
                <div className="space-y-6">
                  {[{ metric: 'Conversion Rate', increase: '+45%', description: 'Average improvement in checkout completion' }, { metric: 'Page Load Speed', improvement: '2.5s faster', description: 'Optimized performance across all devices' }, { metric: 'Mobile Traffic', increase: '+60%', description: 'Mobile-first approach results' }, { metric: 'Customer Satisfaction', score: '4.8/5', description: 'User experience rating improvement' }].map((metric, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{metric.metric}</h4>
                        <p className="text-sm text-green-600 font-bold">{metric.increase || metric.improvement || metric.score}</p>
                        <p className="text-gray-600 text-sm">{metric.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Scale Your E-Commerce?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let us transform your digital commerce platform and drive exceptional customer experiences that convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your Commerce Journey
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}