import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Building, CreditCard, Shield, Smartphone, CheckCircle, ArrowRight, Lock, TrendingUp, AlertTriangle } from 'lucide-react';

export default function BankingFintech() {
  const features = [{ icon: CreditCard, title: 'Payment Processing', description: 'Advanced payment processing platforms including TSYS integration, digital wallets, and real-time payment systems.' }, { icon: Building, title: 'Core Banking', description: 'Comprehensive core banking system integrations and wealth management tool development.' }, { icon: Shield, title: 'Regulatory Compliance', description: 'Expert compliance solutions for PCI, PSD2, and other financial regulations with automated monitoring.' }, { icon: Lock, title: 'Fraud Detection', description: 'AI-powered fraud detection systems and real-time transaction monitoring for enhanced security.' }];
  const solutions = [{ name: 'TSYS Processing', category: 'Payment Gateway', color: 'from-blue-500 to-blue-700' }, { name: 'Digital Wallets', category: 'Mobile Payments', color: 'from-green-500 to-green-700' }, { name: 'Wealth Management', category: 'Investment Tools', color: 'from-purple-500 to-purple-700' }, { name: 'Core Banking', category: 'System Integration', color: 'from-orange-500 to-orange-700' }, { name: 'Real-time Payments', category: 'Instant Transfer', color: 'from-red-500 to-red-700' }, { name: 'Compliance Monitoring', category: 'Regulatory', color: 'from-indigo-500 to-indigo-700' }];
  const capabilities = ['Payment gateway integration and optimization', 'Digital banking platform development', 'Mobile banking app creation and enhancement', 'Blockchain and cryptocurrency solutions', 'Risk management and compliance automation', 'Customer onboarding and KYC processes', 'Financial data analytics and reporting', 'Open banking API development and integration'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-6 py-4">
        <Link to={createPageUrl('Services')} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-10 h-10 text-indigo-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Banking & <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">FinTech Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive financial technology solutions including payment processing platforms, digital wallets, regulatory compliance, and fraud detection systems for the modern banking ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={createPageUrl('Home') + '#contact'} className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Get Started
                </a>
                <a href="#solutions" className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center">
                  View Solutions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Secure</h3>
                    <p className="text-sm text-gray-600">Bank-grade security</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Scalable</h3>
                    <p className="text-sm text-gray-600">Enterprise-ready solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Compliant</h3>
                    <p className="text-sm text-gray-600">Regulatory standards</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Mobile-First</h3>
                    <p className="text-sm text-gray-600">Digital banking apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              FinTech <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge financial technology solutions designed for modern banking and payment processing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-white font-bold text-sm">{solution.name.charAt(0)}</span>
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm mb-1">{solution.name}</h3>
                <p className="text-center text-xs text-gray-500">{solution.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Banking <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial services technology solutions with deep industry expertise and regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                Complete Banking <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From traditional banking systems to cutting-edge fintech innovations, we deliver comprehensive solutions for the financial services industry.
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Success</h3>
                <div className="space-y-6">
                  {[{ metric: 'Transaction Speed', improvement: '10x faster', description: 'Real-time payment processing optimization', icon: TrendingUp }, { metric: 'Security Score', rating: '99.9%', description: 'Advanced fraud detection and prevention', icon: Shield }, { metric: 'Compliance Rate', achievement: '100%', description: 'Full PCI and PSD2 compliance adherence', icon: CheckCircle }, { metric: 'Risk Reduction', decrease: '-85%', description: 'AI-powered risk assessment and monitoring', icon: AlertTriangle }].map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{result.metric}</h4>
                          <p className="text-sm text-indigo-600 font-bold">{result.improvement || result.rating || result.achievement || result.decrease}</p>
                          <p className="text-gray-600 text-sm">{result.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Innovate Banking?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Transform your financial services with our cutting-edge banking and fintech solutions designed for the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your FinTech Journey
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}