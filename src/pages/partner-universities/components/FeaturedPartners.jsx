import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedPartners = ({ onUniversityClick }) => {
  const featuredUniversities = [
    {
      id: 'oxford',
      name: 'University of Oxford',
      location: 'Oxford, UK',
      ranking: 2,
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop',
      type: 'Russell Group',
      specialties: ['Medicine', 'Law', 'Philosophy', 'Engineering'],
      scholarships: true,
      scholarshipAmount: '£25,000',
      partnership: 'Premium Partner',
      description: 'One of the world\'s oldest and most prestigious universities'
    },
    {
      id: 'cambridge',
      name: 'University of Cambridge',
      location: 'Cambridge, UK',
      ranking: 3,
      image: 'data:image/jpeg;base64,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',
      logo: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=100&h=100&fit=crop',
      type: 'Russell Group',
      specialties: ['Computer Science', 'Mathematics', 'Natural Sciences', 'Engineering'],
      scholarships: true,
      scholarshipAmount: '£30,000',
      partnership: 'Premium Partner',
      description: 'Leading the world in research and academic excellence'
    },
    {
      id: 'melbourne',
      name: 'University of Melbourne',
      location: 'Melbourne, Australia',
      ranking: 14,
      image: 'data:image/jpeg;base64,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',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=100&h=100&fit=crop',
      type: 'Group of Eight',
      specialties: ['Business', 'Medicine', 'Engineering', 'Arts'],
      scholarships: true,
      scholarshipAmount: 'AUD 15,000',
      partnership: 'Gold Partner',
      description: 'Australia\'s leading comprehensive research university'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Star" size={24} className="text-brand-gold fill-current" />
          <h2 className="font-headline font-bold text-2xl text-gray-900">
            Featured University Partners
          </h2>
          <Icon name="Star" size={24} className="text-brand-gold fill-current" />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our premium partnerships with world-renowned institutions offering exclusive benefits for Pakistani students
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredUniversities?.map((university) => (
          <div
            key={university?.id}
            className="bg-white rounded-xl border border-gray-200 brand-shadow hover:brand-shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => onUniversityClick(university)}
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={university?.image}
                alt={`${university?.name} campus`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Partnership Badge */}
              <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Icon name="Crown" size={14} />
                <span>{university?.partnership}</span>
              </div>

              {/* Ranking Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                #{university?.ranking} Global
              </div>

              {/* University Logo */}
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-lg p-2 brand-shadow">
                <Image
                  src={university?.logo}
                  alt={`${university?.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-headline font-bold text-lg text-gray-900 mb-2">
                  {university?.name}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">{university?.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {university?.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {university?.description}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Popular Programs</div>
                <div className="flex flex-wrap gap-1">
                  {university?.specialties?.slice(0, 3)?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                  {university?.specialties?.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{university?.specialties?.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Scholarship Info */}
              {university?.scholarships && (
                <div className="mb-4 p-3 bg-brand-gold/10 rounded-lg border border-brand-gold/20">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-brand-gold" />
                    <span className="text-sm font-medium text-brand-gold">
                      Scholarships Available
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Up to {university?.scholarshipAmount} for Pakistani students
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  iconName="Eye"
                  iconPosition="left"
                  iconSize={14}
                  onClick={(e) => {
                    e?.stopPropagation();
                    onUniversityClick(university);
                  }}
                >
                  View Details
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 bg-brand-orange hover:bg-brand-orange/90"
                  iconName="Send"
                  iconPosition="left"
                  iconSize={14}
                  onClick={(e) => {
                    e?.stopPropagation();
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center mt-8">
        <Button
          variant="default"
          className="bg-primary hover:bg-primary/90"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View All Partner Universities
        </Button>
      </div>
    </div>
  );
};

export default FeaturedPartners;