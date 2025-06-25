import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Users, ShoppingCart, Shield, Calendar, Palette, Building } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'AgileTransformation',
      title: 'Agile Transformation & Coaching',
      description: 'SAFe® Agile implementation (Release Train Engineering, Scrum Master, PI Planning). Enterprise Agile coaching for scaled frameworks (SAFe 6, Scrum, Kanban). POD/Squad model design and Agile governance for distributed teams.',
      icon: Users,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'DigitalCommerce',
      title: 'Digital Commerce & E-Commerce Solutions',
      description: 'End-to-end e-commerce platform migrations (AEM, Hybris, SAP, Shopify). Omnichannel strategy (desktop/mobile/tablet) with SEO, analytics, and WCAG compliance. Integration of payment gateways, AI-driven personalization.',
      icon: ShoppingCart,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'DevSecOpsCloud',
      title: 'DevSecOps & Cloud Modernization',
      description: 'CI/CD pipeline automation (Jenkins, GitLab, Azure DevOps). Cloud migration (AWS, Azure, GCP) and containerization. Security posture management and AI-driven testing (TaaS). Infrastructure as Code (IaC) implementation.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'ProgramDelivery',
      title: 'Program & Delivery Management',
      description: 'End-to-end project lifecycle oversight (ideation to post-delivery). Hybrid (Agile-Waterfall) project execution for $100K–$7M initiatives. Financial tracking, risk mitigation, and stakeholder alignment.',
      icon: Calendar,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'DigitalMarketing',
      title: 'Digital Marketing & Customer Experience',
      description: 'Adobe Experience Manager (AEM) integrations and content strategy. Email campaign automation (Zeta, Listrak), analytics, and A/B testing. UX/UI optimization, DAM (Tenovos), and mobile app development.',
      icon: Palette,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'BankingFintech',
      title: 'Banking & FinTech Solutions',
      description: 'Payment processing platforms (TSYS), digital wallets, and wealth management tools. Regulatory compliance (PCI, PSD2) and real-time payment enhancements. Core banking integrations and fraud detection systems.',
      icon: Building,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming businesses through cutting-edge technology solutions, agile methodologies, and strategic digital transformation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-bl-2xl" style={{background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}></div>
                  
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={createPageUrl(service.id)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" style={{background: `linear-gradient(90deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive your digital transformation journey forward.
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