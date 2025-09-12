import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VideoTestimonial = ({ testimonial, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial?.clientImage}
                alt={testimonial?.clientName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg text-gray-900">
                {testimonial?.clientName}
              </h3>
              <p className="text-sm text-gray-600">
                {testimonial?.serviceType} • {testimonial?.destinationCountry}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            iconSize={20}
            className="text-gray-500 hover:text-gray-700"
          />
        </div>

        {/* Video Content */}
        <div className="p-6">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6 relative">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <Image
                  src={testimonial?.videoThumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={32} className="text-primary ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {testimonial?.videoDuration}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center">
                  <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video Player Placeholder</p>
                  <p className="text-sm opacity-70 mt-2">
                    In a real implementation, this would be a video player
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Testimonial Details */}
          <div className="space-y-6">
            {/* Quote */}
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <Icon name="Quote" size={24} className="text-primary/40 mb-2" />
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial?.quote}"
              </p>
            </div>

            {/* Journey Timeline */}
            <div>
              <h4 className="font-headline font-semibold text-gray-900 mb-4">Journey Timeline</h4>
              <div className="space-y-3">
                {testimonial?.timeline?.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{milestone?.title}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {milestone?.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{milestone?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="MapPin" size={16} className="text-success" />
                <span className="font-medium text-success">Current Status</span>
              </div>
              <p className="text-gray-700">{testimonial?.currentStatus}</p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="ThumbsUp" size={16} className="text-primary" />
                  <span className="text-sm text-gray-600">{testimonial?.likes} likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <span className="text-sm text-gray-600">{testimonial?.comments} comments</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Share2" size={16} className="text-primary" />
                  <span className="text-sm text-gray-600">{testimonial?.shares} shares</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Heart"
                  iconPosition="left"
                  iconSize={14}
                >
                  Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                  iconSize={14}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;