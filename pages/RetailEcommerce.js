import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ShoppingBag, Smartphone, BarChart3, Users, CheckCircle, ArrowRight, Globe, Zap, Target } from 'lucide-react';

export default function RetailEcommerce() {
  const solutions = [
    {
      icon: Globe,
      title: 'Omnichannel Commerce Platform',
      description: 'Unified shopping experiences across web, mobile, social, and in-store channels with consistent branding and seamless customer journeys.',
      benefits: ['Consistent brand experience', 'Cross-channel inventory', 'Unified customer profiles', 'Seamless channel switching']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First E-commerce',
      description: 'Progressive web apps and native mobile applications optimized for mobile commerce with fast loading and intuitive interfaces.',
      benefits: ['Mobile-optimized checkout', 'Push notifications', 'Offline browsing capability', 'App store optimization']
    },
    {
      icon: Target,
      title: 'Personalization & AI',
      description: 'AI-driven product recommendations, dynamic pricing, and personalized marketing campaigns based on customer behavior and preferences.',
      benefits: ['Increased conversion rates', 'Higher average order value', 'Improved customer retention', 'Dynamic pricing optimization']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Business Intelligence',
      description: 'Advanced analytics dashboards providing insights into customer behavior, sales performance, and inventory optimization.',
      benefits: ['Real-time sales tracking', 'Customer behavior insights', 'Inventory optimization', 'Performance metrics']
    }
  ];

  const platforms = [
    { name: 'Shopify Plus', category: 'E-commerce Platform' },
    { name: 'Magento Commerce', category: 'E-commerce Platform' },
    { name: 'Salesforce Commerce', category: 'Enterprise Commerce' },
    { name: 'BigCommerce', category: 'E-commerce Platform' },
    { name: 'WooCommerce', category: 'WordPress Commerce' },
    { name: 'Adobe Commerce', category: 'Enterprise Platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-6 py-4">
        <Link 
          to={createPageUrl('Industries')}
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Industries
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Retail & <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">E-commerce</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your retail business with comprehensive digital commerce solutions. From omnichannel experiences to AI-powered personalization and mobile-first platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={createPageUrl('Home') + '#contact'}
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Get Started
                </a>
                <Link 
                  to={createPageUrl('Services')}
                  className="border border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Zap, label: '65% Increase', desc: 'Conversion Rate' },
                    { icon: Users, label: '80% Growth', desc: 'Customer Retention' },
                    { icon: BarChart3, label: '45% Higher', desc: 'Average Order Value' },
                    { icon: Smartphone, label: '90% Mobile', desc: 'Traffic Optimization' }
                  ].map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">{metric.label}</h4>
                        <p className="text-sm text-gray-600">{metric.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              E-commerce <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive retail technology solutions designed to maximize your online and offline sales performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">E-commerce Platforms</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{platform.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-gray-500">{platform.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">What We Deliver</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Responsive web design and development',
              'Mobile app development (iOS/Android)',
              'Payment gateway integration',
              'Inventory management systems',
              'Customer relationship management',
              'Marketing automation tools',
              'Analytics and reporting dashboards',
              'Search engine optimization',
              'Social media integration'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Scale Your Retail Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your retail operations with our comprehensive e-commerce and digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createPageUrl('Home') + '#contact'}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Start Your E-commerce Journey
            </a>
            <Link 
              to={createPageUrl('Industries')}
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}