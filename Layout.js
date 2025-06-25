import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'Services', path: createPageUrl('Services') },
    { name: 'Industries', path: createPageUrl('Industries') }
  ];

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/' || location.pathname === createPageUrl('Home');

  // Handle about/contact navigation
  const handleAboutClick = () => {
    if (isHomePage) {
      // If on homepage, scroll to section
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other page, navigate to homepage with hash
      window.location.href = createPageUrl('Home') + '#about';
    }
  };

  const handleContactClick = () => {
    if (isHomePage) {
      // If on homepage, scroll to section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other page, navigate to homepage with hash
      window.location.href = createPageUrl('Home') + '#contact';
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Pragnyadh</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                handleAboutClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Pragnyadh</h1>
                <p className="text-xs text-gray-500">Consultancy Services</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    location.pathname === item.path ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={handleAboutClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold">Pragnyadh</span>
              </div>
              <p className="text-gray-400 text-sm">
                24+ years of expertise in delivering cutting-edge technology solutions across banking, telecom, retail, and insurance sectors.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('AgileTransformation')} className="hover:text-white transition-colors">Agile Transformation</Link></li>
                <li><Link to={createPageUrl('DigitalCommerce')} className="hover:text-white transition-colors">Digital Commerce</Link></li>
                <li><Link to={createPageUrl('DevSecOpsCloud')} className="hover:text-white transition-colors">DevSecOps & Cloud</Link></li>
                <li><Link to={createPageUrl('ProgramDelivery')} className="hover:text-white transition-colors">Program Management</Link></li>
                <li><Link to={createPageUrl('DigitalMarketing')} className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to={createPageUrl('BankingFintech')} className="hover:text-white transition-colors">Banking & FinTech</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('BankingFinance')} className="hover:text-white transition-colors">Banking & Finance</Link></li>
                <li><Link to={createPageUrl('RetailEcommerce')} className="hover:text-white transition-colors">Retail & E-commerce</Link></li>
                <li><Link to={createPageUrl('Telecommunications')} className="hover:text-white transition-colors">Telecommunications</Link></li>
                <li><Link to={createPageUrl('Insurance')} className="hover:text-white transition-colors">Insurance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>contact@pragnyadh.com</li>
                <li>+1 (555) 123-4567</li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Pragnyadh Consultancy Services Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}