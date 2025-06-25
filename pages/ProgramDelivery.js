import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Calendar, Target, DollarSign, Users, CheckCircle, ArrowRight, BarChart3, FileText, AlertTriangle } from 'lucide-react';

export default function ProgramDelivery() {
  const features = [{ icon: Target, title: 'End-to-End Oversight', description: 'Complete project lifecycle management from ideation to post-delivery support and optimization.' }, { icon: BarChart3, title: 'Hybrid Execution', description: 'Expert blend of Agile and Waterfall methodologies for optimal project delivery approaches.' }, { icon: DollarSign, title: 'Financial Tracking', description: 'Comprehensive budget management and ROI optimization for initiatives ranging $100K–$7M.' }, { icon: AlertTriangle, title: 'Risk Mitigation', description: 'Proactive risk identification, assessment, and mitigation strategies throughout project lifecycle.' }];
  const methodologies = [{ name: 'Agile/Scrum', focus: 'Iterative Development', color: 'from-blue-500 to-blue-700' }, { name: 'Waterfall', focus: 'Sequential Planning', color: 'from-green-500 to-green-700' }, { name: 'Hybrid', focus: 'Best of Both', color: 'from-purple-500 to-purple-700' }, { name: 'Lean', focus: 'Value Optimization', color: 'from-orange-500 to-orange-700' }, { name: 'Prince2', focus: 'Structured Management', color: 'from-red-500 to-red-700' }, { name: 'SAFe', focus: 'Scaled Agile', color: 'from-indigo-500 to-indigo-700' }];
  const capabilities = ['Project portfolio management and prioritization', 'Resource allocation and capacity planning', 'Stakeholder alignment and communication', 'Quality assurance and delivery excellence', 'Change management and organizational adoption', 'Vendor management and third-party integration', 'Performance metrics and KPI tracking', 'Post-implementation support and optimization'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6 py-4">
        <Link to={createPageUrl('Services')} className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-10 h-10 text-orange-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Program & <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Delivery Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert program management for complex initiatives ranging from $100K to $7M. We deliver projects on time, within budget, and aligned with strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={createPageUrl('Home') + '#contact'} className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Get Started
                </a>
                <a href="#methodologies" className="border border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center">
                  View Methodologies
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Success Stats</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">98%</h4>
                      <p className="text-sm text-gray-600">On-Time Delivery</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <DollarSign className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">$7M</h4>
                      <p className="text-sm text-gray-600">Max Project Size</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">500+</h4>
                      <p className="text-sm text-gray-600">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">15%</h4>
                      <p className="text-sm text-gray-600">Avg Cost Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="methodologies" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Project <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Methodologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most effective project management frameworks tailored to your specific needs and organizational context.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {methodologies.map((method, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-white font-bold text-sm">{method.name.charAt(0)}</span>
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm mb-2">{method.name}</h3>
                <p className="text-center text-xs text-gray-500">{method.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Our Management <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive program management services that ensure successful delivery of complex, high-value initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                Complete <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From strategic planning to tactical execution, we provide comprehensive program management services that drive successful outcomes.
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Framework</h3>
                <div className="space-y-6">
                  {[{ phase: 'Initiation', duration: '1-2 weeks', description: 'Project charter and stakeholder alignment', icon: FileText }, { phase: 'Planning', duration: '2-4 weeks', description: 'Detailed roadmap and resource allocation', icon: Calendar }, { phase: 'Execution', duration: '3-18 months', description: 'Iterative delivery and progress monitoring', icon: Target }, { phase: 'Closure', duration: '2-4 weeks', description: 'Knowledge transfer and post-mortem analysis', icon: CheckCircle }].map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.phase}</h4>
                          <p className="text-sm text-orange-600 font-medium">{step.duration}</p>
                          <p className="text-gray-600 text-sm">{step.description}</p>
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
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Deliver Success?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let our experienced program managers guide your next major initiative to successful completion, on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your Program
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}