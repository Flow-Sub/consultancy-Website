import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppSupport = () => {
  const [selectedQuery, setSelectedQuery] = useState('');

  const quickQueries = [
    {
      id: 'visa-requirements',
      title: 'Visa Requirements',
      description: 'Get information about visa requirements for your destination country',
      icon: 'FileText'
    },
    {
      id: 'processing-time',
      title: 'Processing Time',
      description: 'Learn about typical processing times for different visa types',
      icon: 'Clock'
    },
    {
      id: 'document-checklist',
      title: 'Document Checklist',
      description: 'Get a complete list of required documents for your application',
      icon: 'CheckSquare'
    },
    {
      id: 'fees-pricing',
      title: 'Fees & Pricing',
      description: 'Information about government fees and our service charges',
      icon: 'DollarSign'
    },
    {
      id: 'urgent-assistance',
      title: 'Urgent Assistance',
      description: 'Need immediate help with your ongoing application?',
      icon: 'AlertCircle'
    },
    {
      id: 'general-inquiry',
      title: 'General Inquiry',
      description: 'Any other questions about our services',
      icon: 'MessageCircle'
    }
  ];

  const handleWhatsAppClick = (queryType = '') => {
    const phoneNumber = '+923001234567'; // Mock WhatsApp number
    let message = 'Hello BrightPath Consultancy! ';
    
    if (queryType) {
      const query = quickQueries?.find(q => q?.id === queryType);
      message += `I need help with: ${query?.title}. ${query?.description}`;
    } else {
      message += 'I would like to inquire about your immigration services.';
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-success" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-gray-900">
            WhatsApp Support
          </h3>
          <p className="text-sm text-gray-600">
            Get instant answers to your questions
          </p>
        </div>
      </div>
      {/* Quick Response Options */}
      <div className="space-y-3 mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          Quick Support Options
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {quickQueries?.map((query) => (
            <button
              key={query?.id}
              onClick={() => handleWhatsAppClick(query?.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedQuery === query?.id
                  ? 'border-success bg-success/5' :'border-gray-200 hover:border-success/50 hover:bg-success/5'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={query?.icon} size={16} className="text-success" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 mb-1">
                    {query?.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {query?.description}
                  </p>
                </div>
                <Icon name="ExternalLink" size={16} className="text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Direct WhatsApp Contact */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Clock" size={18} className="text-success" />
          <span className="font-medium text-success">Available 24/7</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Our WhatsApp support team is available round the clock to assist you with 
          urgent queries and provide immediate guidance.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="CheckCircle" size={16} className="text-success" />
          <span>Average response time: 2-5 minutes</span>
        </div>
      </div>
      {/* Main WhatsApp Button */}
      <Button
        onClick={() => handleWhatsAppClick()}
        variant="default"
        className="w-full bg-success hover:bg-success/90 text-white font-cta"
        iconName="MessageSquare"
        iconPosition="left"
        iconSize={18}
      >
        Start WhatsApp Chat
      </Button>
      {/* Contact Info */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">WhatsApp Number:</span>
          <span className="font-medium text-gray-900">+92 300 123 4567</span>
        </div>
      </div>
      {/* Features */}
      <div className="mt-6 space-y-2">
        <h5 className="font-medium text-gray-900 mb-3">
          WhatsApp Support Features
        </h5>
        {[
          'Instant document sharing',
          'Voice message support',
          'Multi-language assistance',
          'Appointment scheduling',
          'Status updates'
        ]?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppSupport;