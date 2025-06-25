import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Building, CreditCard, Shield, TrendingUp, CheckCircle, ArrowRight, Lock, Smartphone, BarChart3 } from 'lucide-react';

export default function BankingFinance() {
  const solutions = [
    {
      icon: Building,
      title: 'Core Banking Modernization',
      description: 'Legacy system modernization with cloud-native architectures, API-first approaches, and microservices for scalable banking operations.',
      benefits: ['Reduced operational costs', 'Improved system reliability', 'Enhanced scalability', 'Better integration capabilities']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing & Digital Wallets',
      description: 'Advanced payment solutions including TSYS integration, real-time payments, and secure digital wallet implementations.',
      benefits: ['Faster transaction processing', 'Enhanced security', 'Multiple payment options', 'Global payment support']
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance & Risk Management',
      description: 'Comprehensive compliance solutions for PCI DSS, PSD2, Basel III, and other financial regulations with automated monitoring.',
      benefits: ['Automated compliance reporting', 'Risk assessment tools', 'Audit trail management', 'Regulatory update tracking']
    },
    {
      icon: Smartphone,
      title: 'Digital Banking Platforms',
      description: 'Mobile-first banking applications with seamless user experiences, biometric authentication, and personalized financial services.',
      benefits: ['Enhanced customer experience', 'Multi-channel integration', 'Personalized services', 'Real-time notifications']
    }
  ];

  const technologies = [
    { name: 'TSYS', category: 'Payment Processing' },
    { name: 'Temenos', category: 'Core Banking' },
    { name: 'Finastra', category: 'Banking Software' },
    { name: 'Jack Henry', category: 'Banking Solutions' },
    { name: 'AWS Financial Services', category: 'Cloud Platform' },
    { name: 'Blockchain', category: 'Distributed Ledger' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-4">
        <Link 
          to={createPageUrl('Industries')}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
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
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Banking & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Finance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your financial institution with cutting-edge technology solutions. From core banking modernization to digital wallets, regulatory compliance, and customer experience enhancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={createPageUrl('Home') + '#contact'}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Get Started
                </a>
                <Link 
                  to={createPageUrl('Services')}
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: TrendingUp, label: '40% Faster', desc: 'Transaction Processing' },
                    { icon: Shield, label: '99.9%', desc: 'Security Compliance' },
                    { icon: BarChart3, label: '60% Reduction', desc: 'Operational Costs' },
                    { icon: Lock, label: '100%', desc: 'Regulatory Adherence' }
                  ].map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-blue-600" />
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
              Banking <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial technology solutions designed for modern banking institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Technologies Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Technologies We Work With</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{tech.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Modernize Your Bank?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your banking operations with our proven financial technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createPageUrl('Home') + '#contact'}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Start Your Transformation
            </a>
            <Link 
              to={createPageUrl('Industries')}
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
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