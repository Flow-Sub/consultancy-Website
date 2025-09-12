import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CountryTabs from './components/CountryTabs';
import CountryDetails from './components/CountryDetails';
import CostCalculator from './components/CostCalculator';
import ServiceProcess from './components/ServiceProcess';
import TestimonialFilter from './components/TestimonialFilter';
import ComparisonTable from './components/ComparisonTable';
import QuickCountryCards from './components/QuickCountryCards';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const StudyVisaServices = () => {
  const [activeCountry, setActiveCountry] = useState('uk');

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Study Visa Services - BrightPath Consultancy | UK, Canada, Australia, New Zealand</title>
        <meta name="description" content="Expert study visa services for Pakistani students. 98% success rate for UK, Canada, Australia & New Zealand. Government verified consultancy with 150+ university partnerships." />
        <meta name="keywords" content="study visa, student visa, UK visa, Canada visa, Australia visa, New Zealand visa, Pakistani students, education consultancy" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <Icon name="Shield" size={20} className="text-white" />
                  <span className="text-sm font-medium">Government Verified</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <Icon name="Award" size={20} className="text-white" />
                  <span className="text-sm font-medium">98% Success Rate</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6">
                Your Gateway to
                <span className="block text-accent">Global Education</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Expert study visa services for UK, Canada, Australia & New Zealand. 
                Join 2,500+ Pakistani students who achieved their dreams with BrightPath.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  variant="default"
                  className="bg-white text-primary hover:bg-gray-100 font-cta text-lg px-8 py-4"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                >
                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-cta text-lg px-8 py-4"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                >
                  Watch Success Stories
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">2,500+</div>
                  <div className="text-sm lg:text-base text-blue-100">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm lg:text-base text-blue-100">Partner Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm lg:text-base text-blue-100">Visa Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm lg:text-base text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Country Selection */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <CountryTabs 
              activeCountry={activeCountry} 
              onCountryChange={setActiveCountry} 
            />
          </div>
        </section>

        {/* Country Details */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <CountryDetails country={activeCountry} />
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <CostCalculator />
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <ServiceProcess />
          </div>
        </section>

        {/* Quick Country Cards - Mobile Optimized */}
        <section className="py-16 lg:py-24 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <QuickCountryCards />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <TestimonialFilter />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <ComparisonTable />
          </div>
        </section>

        {/* Emergency Support Banner */}
        <section className="py-12 bg-gradient-to-r from-brand-orange to-accent">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Phone" size={24} />
                <h2 className="text-2xl font-headline font-bold">24/7 Emergency Support</h2>
              </div>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Need urgent assistance with your visa application? Our expert team is available round the clock to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  className="bg-white text-brand-orange hover:bg-gray-100"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call: +92-321-6935574
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-orange"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  WhatsApp Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful Pakistani students who trusted BrightPath with their dreams. 
              Get personalized guidance from our certified experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-white font-cta text-lg px-8 py-4"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-cta text-lg px-8 py-4"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Service Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-headline font-bold text-lg">BrightPath</div>
                  <div className="text-sm text-gray-400">Consultancy</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for study abroad success. Government verified and student approved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>UK Study Visa</li>
                <li>Canada Study Visa</li>
                <li>Australia Study Visa</li>
                <li>New Zealand Study Visa</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>24/7 Help Center</li>
                <li>WhatsApp Support</li>
                <li>Document Verification</li>
                <li>Post-Arrival Assistance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>+92-321-6935574</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>Info@brightpathsconsultancy.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} BrightPath Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyVisaServices;