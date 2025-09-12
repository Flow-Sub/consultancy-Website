import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ConsultationBooking from './components/ConsultationBooking';
import WhatsAppSupport from './components/WhatsAppSupport';
import OfficeLocations from './components/OfficeLocations';
import ConsultationTestimonials from './components/ConsultationTestimonials';
import ContactFAQ from './components/ContactFAQ';

const ContactConsultation = () => {
  const handleEmergencyCall = () => {
    window.open('tel:+923009998888', '_self');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923001234567';
    const message = 'Hello BrightPath Consultancy! I would like to inquire about your immigration services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak directly with our consultants',
      action: 'Call Now',
      color: 'success',
      details: '+92 300 123 4567'
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      description: 'Instant chat support available 24/7',
      action: 'Start Chat',
      color: 'success',
      details: 'Average response: 2-5 minutes'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Send us your detailed inquiry',
      action: 'Send Email',
      color: 'primary',
      details: 'info@brightpath.com.pk'
    },
    {
      icon: 'MapPin',
      title: 'Visit Office',
      description: 'Meet us at our convenient locations',
      action: 'Get Directions',
      color: 'brand-orange',
      details: '3 locations across Pakistan'
    }
  ];

  const quickStats = [
    {
      icon: 'Users',
      value: '2,500+',
      label: 'Consultations Completed',
      color: 'primary'
    },
    {
      icon: 'Clock',
      value: '24/7',
      label: 'WhatsApp Support',
      color: 'success'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Client Satisfaction',
      color: 'brand-gold'
    },
    {
      icon: 'MapPin',
      value: '3',
      label: 'Office Locations',
      color: 'brand-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Shield" size={16} className="text-white" />
              <span className="text-white text-sm font-medium">
                Government Verified Consultancy
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-white mb-6">
              Get Expert Immigration
              <span className="block text-brand-gold">Consultation Today</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Book your free consultation with our certified immigration experts. 
              Get personalized guidance, eligibility assessment, and a clear roadmap to your dreams.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                onClick={handleWhatsAppClick}
                variant="default"
                className="bg-success hover:bg-success/90 text-white font-cta px-8 py-3"
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={18}
              >
                WhatsApp Now
              </Button>
              <Button
                onClick={handleEmergencyCall}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
              >
                Call Directly
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {quickStats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon name={stat?.icon} size={20} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us. We're here to help you 
              with all your immigration needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods?.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${method?.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={method?.icon} size={24} className={`text-${method?.color}`} />
                </div>
                <h3 className="text-lg font-headline font-bold text-gray-900 mb-2">
                  {method?.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method?.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {method?.details}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className={`border-${method?.color} text-${method?.color} hover:bg-${method?.color} hover:text-white`}
                >
                  {method?.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <ConsultationBooking />
              <ConsultationTestimonials />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <WhatsAppSupport />
              <OfficeLocations />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <ContactFAQ />
        </div>
      </section>
      {/* Emergency Support Banner */}
      <section className="py-8 bg-error/5 border-y border-error/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center">
                <Icon name="AlertTriangle" size={24} className="text-error" />
              </div>
              <div>
                <h3 className="text-lg font-headline font-bold text-error">
                  Emergency Visa Support
                </h3>
                <p className="text-gray-600">
                  Urgent visa matters? Our emergency helpline is available 24/7
                </p>
              </div>
            </div>
            <Button
              onClick={handleEmergencyCall}
              variant="default"
              className="bg-error hover:bg-error/90 text-white font-cta"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Emergency: +92 300 999 8888
            </Button>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - your dream destination is just a consultation away. 
            Book your free session today and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className="bg-white text-primary hover:bg-gray-100 font-cta px-8 py-3"
              iconName="Calendar"
              iconPosition="left"
              iconSize={18}
            >
              Book Free Consultation
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              iconName="MessageSquare"
              iconPosition="left"
              iconSize={18}
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactConsultation;