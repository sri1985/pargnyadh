import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Building, ShoppingBag, Smartphone, Shield } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      id: 'BankingFinance',
      title: 'Banking & Finance',
      description: 'Digital transformation solutions for banks, credit unions, and financial institutions. From core banking modernization to fintech innovation, regulatory compliance, and customer experience enhancement.',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      features: ['Core Banking Systems', 'Digital Wallets', 'Regulatory Compliance', 'Fraud Detection']
    },
    {
      id: 'RetailEcommerce',
      title: 'Retail & E-commerce',
      description: 'Comprehensive digital commerce solutions for retailers. From omnichannel experiences to inventory management, customer personalization, and mobile-first shopping platforms.',
      icon: ShoppingBag,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      features: ['E-commerce Platforms', 'Omnichannel Strategy', 'Inventory Management', 'Customer Analytics']
    },
    {
      id: 'Telecommunications',
      title: 'Telecommunications',
      description: 'Next-generation telecom solutions including network modernization, customer experience platforms, billing systems, and 5G infrastructure implementation.',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      features: ['Network Modernization', '5G Infrastructure', 'Customer Portals', 'Billing Systems']
    },
    {
      id: 'Insurance',
      title: 'Insurance',
      description: 'Insurance technology solutions covering policy management, claims processing, risk assessment, and digital customer experiences for insurance providers.',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      features: ['Policy Management', 'Claims Processing', 'Risk Assessment', 'Digital Experiences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              With 24+ years of expertise, we deliver specialized solutions across key industry sectors, understanding unique challenges and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={industry.id}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-bl-3xl" style={{background: `linear-gradient(135deg, ${industry.color.split(' ')[1]}, ${industry.color.split(' ')[3]})`}}></div>
                  
                  <div className={`w-16 h-16 ${industry.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${industry.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={createPageUrl(industry.id)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" style={{background: `linear-gradient(90deg, ${industry.color.split(' ')[1]}, ${industry.color.split(' ')[3]})`}}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Track Record</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered', industry: 'Across All Industries' },
              { number: '24+', label: 'Years Experience', industry: 'Industry Expertise' },
              { number: '15+', label: 'Countries', industry: 'Global Reach' },
              { number: '98%', label: 'Client Satisfaction', industry: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-blue-600">{stat.number}</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific expertise can drive your digital transformation forward.
          </p>
          <a 
            href={createPageUrl('Home') + '#contact'}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}