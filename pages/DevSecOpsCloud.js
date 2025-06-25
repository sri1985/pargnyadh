import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Shield, Cloud, GitBranch, Server, CheckCircle, ArrowRight, Lock, Zap, Settings } from 'lucide-react';

export default function DevSecOpsCloud() {
  const features = [{ icon: GitBranch, title: 'CI/CD Automation', description: 'Complete pipeline automation using Jenkins, GitLab, and Azure DevOps for seamless deployment workflows.' }, { icon: Cloud, title: 'Cloud Migration', description: 'Expert migration services across AWS, Azure, and GCP with containerization and orchestration.' }, { icon: Lock, title: 'Security Integration', description: 'Comprehensive security posture management with automated vulnerability scanning and compliance.' }, { icon: Server, title: 'Infrastructure as Code', description: 'IaC implementation for scalable, repeatable, and version-controlled infrastructure management.' }];
  const technologies = [{ name: 'Jenkins', category: 'CI/CD', color: 'from-blue-500 to-blue-700' }, { name: 'GitLab', category: 'DevOps', color: 'from-orange-500 to-red-600' }, { name: 'Azure DevOps', category: 'Microsoft', color: 'from-blue-600 to-indigo-700' }, { name: 'AWS', category: 'Cloud', color: 'from-yellow-500 to-orange-600' }, { name: 'Docker', category: 'Container', color: 'from-blue-400 to-blue-600' }, { name: 'Kubernetes', category: 'Orchestration', color: 'from-purple-500 to-indigo-600' }, { name: 'Terraform', category: 'IaC', color: 'from-purple-600 to-blue-700' }, { name: 'Ansible', category: 'Automation', color: 'from-red-500 to-red-700' }];
  const benefits = ['Reduced deployment time by 80%', 'Automated security scanning and compliance', 'Zero-downtime deployments and rollbacks', 'Scalable infrastructure management', 'Cost optimization through cloud efficiency', 'Enhanced collaboration and productivity', 'Continuous monitoring and alerting', 'Disaster recovery and backup automation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-6 py-4">
        <Link to={createPageUrl('Services')} className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20"></div>
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                DevSecOps & <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Cloud Modernization</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Accelerate your development lifecycle with our comprehensive DevSecOps solutions. From CI/CD automation to cloud migration and security integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={createPageUrl('Home') + '#contact'} className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Get Started
                </a>
                <a href="#technologies" className="border border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center">
                  View Technologies
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Fast Deploy</h3>
                    <p className="text-sm text-gray-600">80% faster deployments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Secure</h3>
                    <p className="text-sm text-gray-600">Automated security scanning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Cloud className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Cloud Native</h3>
                    <p className="text-sm text-gray-600">Multi-cloud expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Automated</h3>
                    <p className="text-sm text-gray-600">Infrastructure as Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="technologies" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Our Technology <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and platforms to deliver robust DevSecOps solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-white font-bold text-sm">{tech.name.charAt(0)}</span>
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm mb-1">{tech.name}</h3>
                <p className="text-center text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              DevSecOps <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that integrate development, security, and operations for faster, safer deployments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                Measurable <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our DevSecOps implementations deliver significant improvements in deployment speed, security, and operational efficiency.
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h3>
                <div className="space-y-6">
                  {[{ phase: 'Assessment', duration: '1-2 weeks', description: 'Current infrastructure and security audit' }, { phase: 'Strategy', duration: '2-3 weeks', description: 'DevSecOps roadmap and tool selection' }, { phase: 'Implementation', duration: '6-12 weeks', description: 'Pipeline setup and automation' }, { phase: 'Optimization', duration: 'Ongoing', description: 'Continuous improvement and monitoring' }].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{step.phase}</h4>
                        <p className="text-sm text-red-600 font-medium">{step.duration}</p>
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
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Modernize Your DevOps?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Transform your development lifecycle with our proven DevSecOps methodologies and cloud expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={createPageUrl('Home') + '#contact'} className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Your DevSecOps Journey
            </a>
            <Link to={createPageUrl('Services')} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}