import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentPath, setCurrentPath] = useState(0);
  
  const pathways = [
    { from: 'Karachi', to: 'London', flag: '🇬🇧' },
    { from: 'Lahore', to: 'Toronto', flag: '🇨🇦' },
    { from: 'Islamabad', to: 'Sydney', flag: '🇦🇺' },
    { from: 'Faisalabad', to: 'Auckland', flag: '🇳🇿' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % pathways?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      {/* Animated Background Pathways */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>
          {pathways?.map((pathway, index) => (
            <g key={index}>
              <path
                d={`M${100 + index * 50} 400 Q${600} ${200 + index * 100} ${1100 - index * 30} ${300 + index * 80}`}
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                className={`pathway-animation ${currentPath === index ? 'opacity-100' : 'opacity-30'}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              />
              <circle
                cx={100 + index * 50}
                cy="400"
                r="6"
                fill="var(--color-primary)"
                className={`${currentPath === index ? 'success-pulse' : ''}`}
              />
              <circle
                cx={1100 - index * 30}
                cy={300 + index * 80}
                r="8"
                fill="var(--color-accent)"
                className={`${currentPath === index ? 'success-pulse' : ''}`}
              />
            </g>
          ))}
        </svg>
      </div>
      {/* Government Certifications Bar */}
      <div className="absolute top-20 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8 overflow-x-auto">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Icon name="Shield" size={20} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-gold">Ministry of Education Verified</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Icon name="Award" size={20} className="text-success" />
              <span className="text-sm font-medium text-success">ICCRC Licensed</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Government Authorized</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Icon name="TrendingUp" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">98% Visa Success Rate</span>
            </div>
            
            <h1 className="font-headline text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Your Verified Pathway to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-orange">
                Global Success
              </span>
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your international dreams into documented reality with Pakistan's most trusted immigration consultancy. Government-verified expertise, proven university partnerships, and personalized guidance every step of the way.
            </p>

            {/* Dynamic Pathway Display */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 border border-gray-200 brand-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-medium text-gray-700">{pathways?.[currentPath]?.from}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  <Icon name="Plane" size={20} className="text-accent" />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-success"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700">{pathways?.[currentPath]?.to}</span>
                  <span className="text-2xl">{pathways?.[currentPath]?.flag}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact-consultation">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-cta w-full sm:w-auto"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                >
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/study-visa-services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={20}
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={16} />
                <span>5000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Globe" size={16} />
                <span>50+ Countries</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 brand-shadow-lg">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center certification-float">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  Start Your Journey Today
                </h3>
                <p className="text-gray-600">
                  Join thousands who've achieved their international dreams
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span className="text-sm font-medium">Free Initial Assessment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                  <Icon name="FileText" size={20} className="text-primary" />
                  <span className="text-sm font-medium">Document Preparation</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                  <Icon name="Plane" size={20} className="text-accent" />
                  <span className="text-sm font-medium">Visa Application Support</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-orange/10 rounded-lg">
                  <Icon name="GraduationCap" size={20} className="text-brand-orange" />
                  <span className="text-sm font-medium">University Placement</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Next Available Slot:</span>
                  <span className="font-medium text-primary">Today 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="bg-white rounded-full p-4 brand-shadow certification-float">
          <Icon name="MessageCircle" size={24} className="text-success" />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 hidden lg:block">
        <div className="bg-white rounded-full p-3 brand-shadow certification-float" style={{ animationDelay: '1s' }}>
          <Icon name="Star" size={20} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;