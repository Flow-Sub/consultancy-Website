import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UniversityCard = ({ university, onCompare, onViewDetails, isCompared = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getRankingBadgeColor = (ranking) => {
    if (ranking <= 50) return 'bg-brand-gold text-white';
    if (ranking <= 100) return 'bg-secondary text-white';
    return 'bg-gray-500 text-white';
  };

  const getTuitionRangeColor = (range) => {
    if (range === 'Low') return 'text-success';
    if (range === 'Medium') return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow hover:brand-shadow-lg transition-all duration-300 overflow-hidden group">
      {/* University Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={university?.image}
          alt={`${university?.name} campus`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <Icon name="Building2" size={48} className="text-gray-400" />
          </div>
        )}
        
        {/* Ranking Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getRankingBadgeColor(university?.ranking)}`}>
          #{university?.ranking} Global
        </div>

        {/* Partnership Badge */}
        <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <Icon name="Shield" size={14} />
          <span>Verified Partner</span>
        </div>

        {/* Compare Button */}
        <button
          onClick={() => onCompare(university)}
          className={`absolute bottom-4 right-4 p-2 rounded-full transition-all duration-200 ${
            isCompared
              ? 'bg-primary text-white' :'bg-white/90 text-gray-700 hover:bg-white'
          }`}
          title={isCompared ? 'Remove from comparison' : 'Add to comparison'}
        >
          <Icon name={isCompared ? 'Check' : 'Plus'} size={16} />
        </button>
      </div>
      {/* University Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-headline font-bold text-xl text-gray-900 mb-2 line-clamp-2">
            {university?.name}
          </h3>
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <Icon name="MapPin" size={16} />
            <span className="text-sm">{university?.location}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} className="text-warning fill-current" />
              <span className="text-sm font-medium">{university?.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">{university?.students?.toLocaleString()} students</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Tuition Range</div>
            <div className={`text-sm font-medium ${getTuitionRangeColor(university?.tuitionRange)}`}>
              {university?.tuitionRange}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Acceptance Rate</div>
            <div className="text-sm font-medium text-gray-900">
              {university?.acceptanceRate}%
            </div>
          </div>
        </div>

        {/* Popular Programs */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Popular Programs</div>
          <div className="flex flex-wrap gap-2">
            {university?.popularPrograms?.slice(0, 3)?.map((program, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {program}
              </span>
            ))}
            {university?.popularPrograms?.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{university?.popularPrograms?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Scholarships Available */}
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
            onClick={() => onViewDetails(university)}
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
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;