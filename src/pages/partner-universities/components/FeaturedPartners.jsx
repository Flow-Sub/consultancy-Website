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
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=400&fit=crop',
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