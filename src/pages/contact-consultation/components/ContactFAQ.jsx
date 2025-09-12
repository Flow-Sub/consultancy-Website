import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Consultation',
      question: 'Is the initial consultation really free?',
      answer: `Yes, absolutely! Our initial consultation is completely free with no hidden charges. During this 30-45 minute session, we'll assess your profile, discuss your goals, explain the process, and provide you with a personalized roadmap. You only pay if you decide to proceed with our services.`
    },
    {
      id: 2,
      category: 'Consultation',question: 'How long does a consultation take?',
      answer: `Initial consultations typically last 30-45 minutes. This gives us enough time to understand your background, assess your eligibility, discuss your options, and answer all your questions. Follow-up consultations may be shorter, usually 15-30 minutes.`
    },
    {
      id: 3,
      category: 'Documentation',question: 'What documents should I bring to the consultation?',
      answer: `For the initial consultation, bring your passport, educational certificates, work experience letters, IELTS/language test scores (if available), and any previous visa applications. Don't worry if you don't have everything - we'll provide a complete checklist during the consultation.`
    },
    {
      id: 4,
      category: 'Fees',
      question: 'What are your service fees?',
      answer: `Our fees vary depending on the service type and complexity. Study visa services start from PKR 50,000, skilled immigration from PKR 75,000, and family immigration from PKR 60,000. All fees are discussed transparently during consultation with no hidden charges.`
    },
    {
      id: 5,
      category: 'Process',
      question: 'How long does the visa process take?',
      answer: `Processing times vary by country and visa type. Study visas typically take 2-4 months, skilled immigration 6-12 months, and family visas 4-8 months. We provide realistic timelines during consultation and keep you updated throughout the process.`
    },
    {
      id: 6,
      category: 'Support',
      question: 'Do you provide support after visa approval?',
      answer: `Yes! We provide comprehensive post-approval support including pre-departure briefings, airport assistance coordination, initial settlement guidance, and ongoing support for the first 6 months after arrival in your destination country.`
    },
    {
      id: 7,
      category: 'Emergency',
      question: 'What if I have an urgent visa matter?',
      answer: `For urgent matters, contact our emergency helpline at +92 300 999 8888. We also offer expedited services for time-sensitive applications with additional fast-track processing fees. WhatsApp support is available 24/7 for immediate assistance.`
    },
    {
      id: 8,
      category: 'Success Rate',
      question: 'What is your visa approval success rate?',
      answer: `We maintain an 85% overall success rate across all visa categories. Our success rates are: Study visas 92%, Skilled immigration 78%, Family visas 88%. We only take cases we're confident about and provide honest assessments during consultation.`
    },
    {
      id: 9,
      category: 'Consultation',question: 'Can I have a consultation in Urdu?',answer: `Absolutely! All our consultants are fluent in both English and Urdu. We can conduct consultations in whichever language you're more comfortable with. Our documents and explanations can also be provided in Urdu when needed.`
    },
    {
      id: 10,
      category: 'Refund',
      question: 'Do you offer refunds if visa is rejected?',
      answer: `We offer partial refunds based on the stage of application when rejection occurs. If rejection happens due to our error, we provide full refund. Our refund policy is clearly explained during consultation and included in our service agreement.`
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Consultation': 'MessageCircle',
      'Documentation': 'FileText',
      'Fees': 'DollarSign',
      'Process': 'Clock',
      'Support': 'HeadphonesIcon',
      'Emergency': 'AlertTriangle',
      'Success Rate': 'TrendingUp',
      'Refund': 'RefreshCw'
    };
    return icons?.[category] || 'HelpCircle';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Consultation': 'text-primary',
      'Documentation': 'text-blue-600',
      'Fees': 'text-green-600',
      'Process': 'text-orange-600',
      'Support': 'text-purple-600',
      'Emergency': 'text-red-600',
      'Success Rate': 'text-emerald-600',
      'Refund': 'text-indigo-600'
    };
    return colors?.[category] || 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="HelpCircle" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-gray-600">
            Common questions about our consultation and services
          </p>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <div
            key={category}
            className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-xs"
          >
            <Icon 
              name={getCategoryIcon(category)} 
              size={12} 
              className={getCategoryColor(category)} 
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* FAQ List */}
      <div className="space-y-3">
        {faqs?.map((faq) => (
          <div
            key={faq?.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-3 flex-1">
                <Icon 
                  name={getCategoryIcon(faq?.category)} 
                  size={16} 
                  className={`${getCategoryColor(faq?.category)} mt-0.5 flex-shrink-0`} 
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">
                    {faq?.question}
                  </h4>
                  <span className="text-xs text-gray-500 mt-1">
                    {faq?.category}
                  </span>
                </div>
              </div>
              <Icon
                name={openFAQ === faq?.id ? 'ChevronUp' : 'ChevronDown'}
                size={16}
                className="text-gray-400 flex-shrink-0"
              />
            </button>
            
            {openFAQ === faq?.id && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="pl-7 pt-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Still Have Questions */}
      <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="MessageSquare" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-primary mb-1">
              Still Have Questions?
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Can't find the answer you're looking for? Our consultation team is here to help.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center space-x-1 text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-primary/90 transition-colors">
                <Icon name="Calendar" size={12} />
                <span>Book Consultation</span>
              </button>
              <button className="inline-flex items-center space-x-1 text-xs bg-success text-white px-3 py-1 rounded-full hover:bg-success/90 transition-colors">
                <Icon name="MessageSquare" size={12} />
                <span>WhatsApp Us</span>
              </button>
              <button className="inline-flex items-center space-x-1 text-xs bg-brand-orange text-white px-3 py-1 rounded-full hover:bg-brand-orange/90 transition-colors">
                <Icon name="Phone" size={12} />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Hours */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Clock" size={14} />
          <span>Support Hours: Mon-Sat 9:00 AM - 6:00 PM (PKT)</span>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;