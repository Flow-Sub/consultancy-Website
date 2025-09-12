import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Study Visa', path: '/study-visa-services', icon: 'GraduationCap' },
    { name: 'Universities', path: '/partner-universities', icon: 'Building2' },
    { name: 'Success Stories', path: '/success-stories', icon: 'Trophy' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 brand-shadow">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/homepage" className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="certification-float"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
                  <path
                    d="M12 20L18 26L28 14"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pathway-animation"
                  />
                  <circle cx="32" cy="8" r="6" fill="var(--color-accent)" className="success-pulse" />
                  <path
                    d="M29 8L31 10L35 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl text-primary">
                  BrightPath
                </span>
                <span className="font-accent text-xs text-accent font-medium">
                  Consultancy
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 border border-primary/20' :'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Government Certifications */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-brand-gold/10 rounded-full border border-brand-gold/30">
              <Icon name="Shield" size={16} className="text-brand-gold" />
              <span className="text-xs font-medium text-brand-gold">Verified</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full border border-success/30">
              <Icon name="Award" size={16} className="text-success" />
              <span className="text-xs font-medium text-success">Licensed</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact-consultation">
              <Button
                variant="default"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 bg-white border-t border-gray-200">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10 border border-primary/20' :'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Certifications */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 px-3 py-1 bg-brand-gold/10 rounded-full border border-brand-gold/30">
                <Icon name="Shield" size={14} className="text-brand-gold" />
                <span className="text-xs font-medium text-brand-gold">Verified</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full border border-success/30">
                <Icon name="Award" size={14} className="text-success" />
                <span className="text-xs font-medium text-success">Licensed</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link to="/contact-consultation" onClick={closeMobileMenu}>
                <Button
                  variant="default"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                >
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile Sticky Consultation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 brand-shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Icon name="MessageCircle" size={20} className="text-success" />
            <span className="text-sm font-medium text-gray-700">Need Help?</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-success text-success hover:bg-success hover:text-white"
              iconName="Phone"
              iconSize={14}
            >
              Call
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-success hover:bg-success/90 text-white"
              iconName="MessageSquare"
              iconSize={14}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;