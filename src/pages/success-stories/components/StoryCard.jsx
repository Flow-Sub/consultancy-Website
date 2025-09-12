import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getServiceIcon = (serviceType) => {
    const icons = {
      'Study Visa': 'GraduationCap',
      'Skilled Immigration': 'Briefcase',
      'Family Immigration': 'Users',
      'PR Visa': 'MapPin'
    };
    return icons?.[serviceType] || 'FileText';
  };

  const getCountryFlag = (country) => {
    const flags = {
      'UK': '🇬🇧',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'New Zealand': '🇳🇿',
      'USA': '🇺🇸'
    };
    return flags?.[country] || '🌍';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden brand-shadow hover:shadow-lg transition-all duration-300">
      {/* Story Header */}
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          {story?.image ? (
            <Image
              src={story?.image}
              alt={`${story?.name}'s success story`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <Icon name="User" size={48} className="text-primary/40 mx-auto mb-2" />
              <span className="text-sm text-gray-500">Success Story</span>
            </div>
          )}
        </div>
        
        {/* Service Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
          <Icon name={getServiceIcon(story?.serviceType)} size={14} className="text-primary" />
          <span className="text-xs font-medium text-primary">{story?.serviceType}</span>
        </div>

        {/* Country Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
          <span className="text-sm">{getCountryFlag(story?.destinationCountry)}</span>
          <span className="text-xs font-medium text-gray-700">{story?.destinationCountry}</span>
        </div>

        {/* Video Play Button */}
        {story?.hasVideo && (
          <button
            onClick={() => onViewDetails(story)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
              <Icon name="Play" size={24} className="text-primary ml-1" />
            </div>
          </button>
        )}
      </div>
      {/* Story Content */}
      <div className="p-6">
        {/* Client Info */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-headline font-semibold text-lg text-gray-900 mb-1">
              {story?.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{story?.profession} • {story?.age} years</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Icon name="MapPin" size={12} />
                <span>From {story?.originCity}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="Calendar" size={12} />
                <span>{story?.completionDate}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1 bg-success/10 px-2 py-1 rounded-full">
            <Icon name="CheckCircle" size={14} className="text-success" />
            <span className="text-xs font-medium text-success">Approved</span>
          </div>
        </div>

        {/* Story Preview */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {isExpanded ? story?.fullStory : story?.preview}
          </p>
          {story?.fullStory && story?.fullStory?.length > story?.preview?.length && (
            <button
              onClick={toggleExpanded}
              className="text-primary text-sm font-medium hover:underline mt-2"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Key Achievements */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 text-sm mb-2">Key Achievements:</h4>
          <div className="space-y-1">
            {story?.achievements?.slice(0, 2)?.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Star" size={12} className="text-accent" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Timeline */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Processing Time:</span>
            <span className="font-medium text-gray-900">{story?.processingTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-600">Success Rate:</span>
            <span className="font-medium text-success">{story?.successRate}%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(story)}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Share2"
            iconSize={14}
            className="px-3"
          />
          <Button
            variant="ghost"
            size="sm"
            iconName="Heart"
            iconSize={14}
            className="px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;