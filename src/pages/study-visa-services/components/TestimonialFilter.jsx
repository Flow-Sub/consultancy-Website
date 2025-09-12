import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      country: 'uk',
      university: 'University of Manchester',
      course: 'MSc Computer Science',
      year: '2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `BrightPath made my UK study visa journey incredibly smooth. Their team guided me through every step, from university selection to visa approval. I'm now pursuing my Master's at University of Manchester, and I couldn't be happier with their professional service.`,achievement: 'Received £5,000 scholarship',location: 'Manchester, UK'
    },
    {
      id: 2,
      name: 'Fatima Khan',country: 'canada',university: 'University of Toronto',course: 'MBA',year: '2024',rating: 5,image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',content: `The expertise of BrightPath's team is unmatched. They helped me secure admission to University of Toronto's MBA program and guided me through the complex Canadian visa process. Their post-arrival support was exceptional too.`,achievement: 'Secured graduate assistantship',location: 'Toronto, Canada'
    },
    {
      id: 3,
      name: 'Muhammad Ali',country: 'australia',university: 'University of Sydney',course: 'Bachelor of Engineering',year: '2023',rating: 5,image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',content: `From the initial consultation to landing in Sydney, BrightPath was with me every step of the way. Their detailed guidance on Australian visa requirements and university applications made the entire process stress-free.`,achievement: 'Dean\'s List recognition',
      location: 'Sydney, Australia'
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      country: 'newzealand',
      university: 'University of Auckland',
      course: 'Master of Public Health',
      year: '2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `BrightPath's personalized approach impressed me the most. They understood my career goals and helped me choose the perfect program in New Zealand. The visa process was handled professionally, and I received my approval within 6 weeks.`,achievement: 'Research assistant position',location: 'Auckland, New Zealand'
    },
    {
      id: 5,
      name: 'Hassan Ahmed',country: 'uk',university: 'Imperial College London',course: 'PhD in Mechanical Engineering',year: '2023',rating: 5,image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',content: `Pursuing a PhD at Imperial College was my dream, and BrightPath made it a reality. Their expertise in handling complex visa cases and their connections with top universities are truly remarkable. Highly recommended!`,achievement: 'Full funding secured',location: 'London, UK'
    },
    {
      id: 6,
      name: 'Zara Sheikh',country: 'canada',university: 'McGill University',course: 'Master of Architecture',year: '2024',rating: 5,image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content: `The team at BrightPath is incredibly knowledgeable about Canadian immigration policies. They helped me navigate the complex requirements for my architecture program and provided excellent support throughout my journey.`,
      achievement: 'Portfolio award winner',location: 'Montreal, Canada'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Countries', icon: 'Globe' },
    { key: 'uk', label: 'United Kingdom', icon: 'MapPin', flag: '🇬🇧' },
    { key: 'canada', label: 'Canada', icon: 'MapPin', flag: '🇨🇦' },
    { key: 'australia', label: 'Australia', icon: 'MapPin', flag: '🇦🇺' },
    { key: 'newzealand', label: 'New Zealand', icon: 'MapPin', flag: '🇳🇿' }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials?.filter(t => t?.country === activeFilter);

  const getCountryName = (country) => {
    const countryNames = {
      uk: 'United Kingdom',
      canada: 'Canada',
      australia: 'Australia',
      newzealand: 'New Zealand'
    };
    return countryNames?.[country];
  };

  const getCountryFlag = (country) => {
    const flags = {
      uk: '🇬🇧',
      canada: '🇨🇦',
      australia: '🇦🇺',
      newzealand: '🇳🇿'
    };
    return flags?.[country];
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-headline font-bold text-primary mb-4">
          Success Stories from Our Students
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real experiences from Pakistani students who achieved their study abroad dreams with BrightPath Consultancy
        </p>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters?.map((filter) => (
          <button
            key={filter?.key}
            onClick={() => setActiveFilter(filter?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
              activeFilter === filter?.key
                ? 'bg-primary text-white border-primary' :'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {filter?.flag && <span>{filter?.flag}</span>}
            <Icon name={filter?.icon} size={16} />
            <span className="text-sm font-medium">{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials?.map((testimonial) => (
          <div key={testimonial?.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                    <span className="text-xs">{getCountryFlag(testimonial?.country)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial?.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial?.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* University Info */}
            <div className="bg-white rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="GraduationCap" size={16} className="text-primary" />
                <span className="font-medium text-sm text-gray-800">{testimonial?.university}</span>
              </div>
              <p className="text-sm text-gray-600">{testimonial?.course}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">Class of {testimonial?.year}</span>
                <div className="flex items-center space-x-1 text-xs text-success bg-success/10 px-2 py-1 rounded">
                  <Icon name="Award" size={12} />
                  <span>{testimonial?.achievement}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-sm text-gray-700 italic mb-4">
              "{testimonial?.content}"
            </blockquote>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">{getCountryName(testimonial?.country)}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-primary">
                <Icon name="CheckCircle" size={14} />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="mt-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-headline font-bold">Join Our Success Community</h3>
          <p className="text-blue-100">Over 2,500 students have achieved their dreams with us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm text-blue-100">Visa Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">150+</div>
            <div className="text-sm text-blue-100">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">₹50L+</div>
            <div className="text-sm text-blue-100">Scholarships Secured</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm text-blue-100">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFilter;