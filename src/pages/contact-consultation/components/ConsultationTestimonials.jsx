import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ConsultationTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      location: 'Toronto, Canada',
      service: 'Study Visa Consultation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: `The consultation was incredibly detailed and professional. They explained every step of the study visa process and helped me understand exactly what documents I needed. Within 3 months, I was accepted to University of Toronto!`,
      consultationType: 'Video Call',
      timeframe: '3 months to visa approval'
    },
    {
      id: 2,
      name: 'Muhammad Hassan',
      location: 'Melbourne, Australia',
      service: 'Skilled Immigration',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: `I was confused about the skilled migration process until I had my consultation with BrightPath. Their expert guidance and step-by-step approach made everything clear. Now I'm permanently settled in Australia with my family.`,consultationType: 'In-Person',timeframe: '8 months to PR approval'
    },
    {
      id: 3,
      name: 'Ayesha Khan',location: 'London, UK',service: 'Family Immigration',rating: 5,image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: `The team at BrightPath made our family reunification dream come true. Their consultation was thorough, and they handled all the complex paperwork. We're now happily reunited in London.`,
      consultationType: 'Phone Call',
      timeframe: '6 months to approval'
    },
    {
      id: 4,
      name: 'Ali Raza',
      location: 'Auckland, New Zealand',
      service: 'PR Visa Consultation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: `Outstanding consultation experience! They assessed my profile accurately and recommended the best pathway for New Zealand PR. Their expertise saved me time and money. Highly recommended!`,
      consultationType: 'Video Call',
      timeframe: '5 months to PR'
    }
  ];

  const consultationBenefits = [
    {
      icon: 'UserCheck',
      title: 'Expert Assessment',
      description: 'Comprehensive evaluation of your profile and eligibility'
    },
    {
      icon: 'Route',
      title: 'Personalized Roadmap',
      description: 'Custom pathway designed for your specific goals'
    },
    {
      icon: 'FileText',
      title: 'Document Guidance',
      description: 'Complete checklist and preparation assistance'
    },
    {
      icon: 'Clock',
      title: 'Timeline Planning',
      description: 'Realistic timelines and milestone tracking'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-brand-gold" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Consultation Success Stories
          </h3>
          <p className="text-sm text-gray-600">
            Real experiences from our consultation clients
          </p>
        </div>
      </div>
      {/* What to Expect */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-primary mb-3">
          What to Expect in Your Free Consultation
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consultationBenefits?.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={benefit?.icon} size={16} className="text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900 text-sm">
                  {benefit?.title}
                </h5>
                <p className="text-xs text-gray-600">
                  {benefit?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="space-y-6">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h5 className="font-medium text-gray-900">
                      {testimonial?.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {testimonial?.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial?.rating)}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Icon name="Briefcase" size={12} />
                    <span>{testimonial?.service}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Video" size={12} />
                    <span>{testimonial?.consultationType}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{testimonial?.timeframe}</span>
                  </div>
                </div>

                <blockquote className="text-sm text-gray-700 italic">
                  "{testimonial?.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Consultation Stats */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-3 text-center">
          Consultation Success Metrics
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-xs text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success">2,500+</div>
            <div className="text-xs text-gray-600">Consultations Done</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand-orange">85%</div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationTestimonials;