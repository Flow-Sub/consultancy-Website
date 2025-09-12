import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStory = ({ story, onViewVideo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === story?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? story?.images?.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20 overflow-hidden brand-shadow-lg">
      {/* Featured Badge */}
      <div className="bg-gradient-to-r from-primary to-secondary p-1">
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Star" size={16} className="text-accent" />
            <span className="font-headline font-semibold text-primary text-sm">
              Featured Success Story
            </span>
            <Icon name="Star" size={16} className="text-accent" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={story?.images?.[currentImageIndex]}
                alt={`${story?.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {story?.images?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <Icon name="ChevronLeft" size={16} className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <Icon name="ChevronRight" size={16} className="text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {story?.images?.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {story?.images?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white' :'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Video Play Button */}
              {story?.hasVideo && (
                <button
                  onClick={() => onViewVideo(story)}
                  className="absolute top-4 right-4 bg-primary/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all group"
                >
                  <Icon name="Play" size={20} className="ml-0.5" />
                </button>
              )}
            </div>

            {/* Image Thumbnails */}
            {story?.images?.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {story?.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-primary' :'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            {/* Client Header */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src={story?.clientPhoto}
                  alt={story?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-headline font-bold text-2xl text-gray-900 mb-1">
                  {story?.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  {story?.profession} • {story?.age} years • {story?.originCity}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 bg-success/10 px-3 py-1 rounded-full">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-sm font-medium text-success">
                      {story?.serviceType}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-lg">{story?.countryFlag}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {story?.destinationCountry}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Quote */}
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <Icon name="Quote" size={24} className="text-primary/40 mb-2" />
              <p className="text-gray-700 italic leading-relaxed mb-3">
                "{story?.featuredQuote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex text-accent">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 rating</span>
                </div>
                <span className="text-sm text-gray-500">{story?.completionDate}</span>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="font-headline font-semibold text-lg text-gray-900 mb-3">
                Key Achievements
              </h3>
              <div className="space-y-2">
                {story?.keyAchievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Processing Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {story?.processingTime}
                </div>
                <div className="text-sm text-gray-600">Processing Time</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {story?.successRate}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="default"
                onClick={() => onViewVideo(story)}
                iconName="Play"
                iconPosition="left"
                iconSize={16}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Watch Full Story
              </Button>
              <Button
                variant="outline"
                iconName="Share2"
                iconSize={16}
                className="px-4"
              />
              <Button
                variant="outline"
                iconName="Heart"
                iconSize={16}
                className="px-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;