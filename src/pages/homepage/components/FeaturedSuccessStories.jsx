import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedSuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const successStories = [
    {
      id: 1,
      name: "Sarah Ahmed",
      age: 24,
      from: "Karachi, Pakistan",
      to: "University of Manchester, UK",
      course: "MSc Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      video: "https://example.com/video1.mp4",
      quote: `BrightPath made my dream of studying at Manchester University a reality. Their guidance through the visa process was exceptional, and I'm now pursuing my Master's in Computer Science with a full scholarship.`,
      achievement: "Full Scholarship Recipient",
      timeline: "Application to Visa: 4 months",
      flag: "🇬🇧",
      status: "Currently Studying"
    },
    {
      id: 2,
      name: "Muhammad Hassan",
      age: 29,
      from: "Lahore, Pakistan",
      to: "Toronto, Canada",
      course: "Software Engineer at Shopify",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      video: "https://example.com/video2.mp4",
      quote: `The skilled immigration process seemed overwhelming until I found BrightPath. They handled everything from skills assessment to PR application. Now I'm working at Shopify and my family has joined me in Toronto.`,
      achievement: "Permanent Resident",
      timeline: "PR Process: 18 months",
      flag: "🇨🇦",
      status: "Settled & Working"
    },
    {
      id: 3,
      name: "Fatima Khan",
      age: 26,
      from: "Islamabad, Pakistan",
      to: "University of Sydney, Australia",
      course: "PhD in Biomedical Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      video: "https://example.com/video3.mp4",
      quote: `BrightPath's expertise in Australian education system was invaluable. They not only helped with my PhD application but also guided me through research supervisor connections. I'm now conducting groundbreaking research in Sydney.`,
      achievement: "PhD Research Scholar",
      timeline: "Application to Enrollment: 6 months",
      flag: "🇦🇺",
      status: "Research Scholar"
    },
    {
      id: 4,
      name: "Ali Raza",
      age: 31,
      from: "Faisalabad, Pakistan",
      to: "Auckland, New Zealand",
      course: "Business Owner & Resident",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      video: "https://example.com/video4.mp4",
      quote: `Through BrightPath's business immigration program, I successfully established my tech startup in Auckland. Their guidance on investor visa requirements and business setup was comprehensive and professional.`,
      achievement: "Successful Entrepreneur",
      timeline: "Business Setup: 12 months",
      flag: "🇳🇿",
      status: "Business Owner"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentStory((prev) => (prev + 1) % successStories?.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, successStories?.length]);

  const handleStoryChange = (index) => {
    setCurrentStory(index);
    setIsPlaying(false);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Star" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Real Success Stories</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Dreams Turned Into Reality
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our successful clients who've achieved their international dreams with BrightPath's expert guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 brand-shadow-lg">
              <div className="relative">
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  <Image
                    src={successStories?.[currentStory]?.image}
                    alt={successStories?.[currentStory]?.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={handlePlayVideo}
                        className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Icon name="Play" size={32} className="text-primary ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Success Badge */}
                <div className="absolute -top-4 -right-4 bg-success rounded-full p-3 brand-shadow success-pulse">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
              </div>

              {/* Story Navigation Dots */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                {successStories?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStoryChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStory 
                        ? 'bg-primary scale-125' :'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src={successStories?.[currentStory]?.image}
                  alt={successStories?.[currentStory]?.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white brand-shadow"
                />
                <div className="absolute -bottom-1 -right-1 text-lg">
                  {successStories?.[currentStory]?.flag}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-primary">
                  {successStories?.[currentStory]?.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Age {successStories?.[currentStory]?.age} • {successStories?.[currentStory]?.from}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-body text-gray-700 italic leading-relaxed">
                  {successStories?.[currentStory]?.quote}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-gray-600">Current Location</span>
                </div>
                <p className="font-medium text-primary">{successStories?.[currentStory]?.to}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-sm font-medium text-gray-600">Achievement</span>
                </div>
                <p className="font-medium text-primary">{successStories?.[currentStory]?.achievement}</p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Journey Timeline</span>
                <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  {successStories?.[currentStory]?.status}
                </span>
              </div>
              <p className="font-medium text-primary">{successStories?.[currentStory]?.timeline}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/success-stories" className="flex-1">
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-cta"
                  iconName="Users"
                  iconPosition="left"
                >
                  View All Stories
                </Button>
              </Link>
              <Link to="/contact-consultation" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Share Your Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="GraduationCap" size={24} className="text-success" />
            </div>
            <div className="font-headline text-2xl font-bold text-primary mb-1">85%</div>
            <div className="text-sm text-gray-600">Scholarship Recipients</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <div className="font-headline text-2xl font-bold text-primary mb-1">4.2</div>
            <div className="text-sm text-gray-600">Avg. Months to Visa</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Star" size={24} className="text-accent" />
            </div>
            <div className="font-headline text-2xl font-bold text-primary mb-1">4.9</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={24} className="text-brand-orange" />
            </div>
            <div className="font-headline text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-gray-600">Visa Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccessStories;