import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Users, Target, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function AgileTransformation() {
  const features = [
    {
      icon: Target,
      title: 'SAFe® Implementation',
      description: 'Complete Scaled Agile Framework implementation with Release Train Engineering and PI Planning expertise.'
    },
    {
      icon: Users,
      title: 'Enterprise Coaching',
      description: 'Comprehensive coaching for SAFe 6, Scrum, and Kanban frameworks across distributed teams.'
    },
    {
      icon: TrendingUp,
      title: 'POD/Squad Design',
      description: 'Modern team structure design and agile governance for maximum efficiency and collaboration.'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our certified professionals bring deep knowledge of agile methodologies and best practices.'
    }
  ];

  const benefits = [
    'Reduced time-to-market by 40-60%',
    'Improved team collaboration and productivity',
    'Enhanced product quality and customer satisfaction',
    'Better predictability and delivery consistency',
    'Increased organizational agility and responsiveness',
    'Streamlined governance and compliance processes'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-4">
        <Link 
          to={createPageUrl('Services')}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Agile Transformation & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Coaching</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your organization with our comprehensive SAFe® Agile implementation services. We specialize in Release Train Engineering, enterprise coaching, and distributed team governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={createPageUrl('Home') + '#contact'}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Get Started
                </a>
                <a 
                  href="#features"
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {['SAFe® 6 Certified', '24+ Years Experience', '500+ Teams Coached', '95% Success Rate'].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Our Agile <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agile transformation services designed to accelerate your organization's journey to business agility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our agile transformation approach delivers measurable business outcomes and sustainable organizational change.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Journey</h3>
                <div className="space-y-6">
                  {[{ phase: 'Assessment', duration: '2-4 weeks', description: 'Current state analysis and readiness assessment' }, { phase: 'Planning', duration: '3-6 weeks', description: 'Roadmap creation and team formation' }, { phase: 'Implementation', duration: '3-6 months', description: 'Agile practices rollout and coaching' }, { phase: 'Optimization', duration: 'Ongoing', description: 'Continuous improvement and scaling' }].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{step.phase}</h4>
                        <p className="text-sm text-blue-600 font-medium">{step.duration}</p>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our certified SAFe® experts guide your agile transformation journey. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your Transformation
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}