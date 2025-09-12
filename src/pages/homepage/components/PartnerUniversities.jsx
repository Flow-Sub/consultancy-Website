import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnerUniversities = () => {
  const [currentBatch, setCurrentBatch] = useState(0);

  const universities = [
    {
      name: "University of Manchester",
      country: "United Kingdom",
      ranking: "#28 Global",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop",
      flag: "🇬🇧",
      programs: ["Engineering", "Computer Science", "Business"],
      scholarships: "Up to £15,000",
      partnership: "Premium Partner"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#21 Global",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
      flag: "🇨🇦",
      programs: ["Medicine", "Engineering", "Arts"],
      scholarships: "Up to CAD $20,000",
      partnership: "Preferred Partner"
    },
    {
      name: "University of Sydney",
      country: "Australia",
      ranking: "#41 Global",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop",
      flag: "🇦🇺",
      programs: ["Medicine", "Law", "Business"],
      scholarships: "Up to AUD $25,000",
      partnership: "Premium Partner"
    },
    {
      name: "University of Auckland",
      country: "New Zealand",
      ranking: "#68 Global",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop",
      flag: "🇳🇿",
      programs: ["Engineering", "Sciences", "Arts"],
      scholarships: "Up to NZD $18,000",
      partnership: "Preferred Partner"
    },
    {
      name: "Imperial College London",
      country: "United Kingdom",
      ranking: "#6 Global",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop",
      flag: "🇬🇧",
      programs: ["Engineering", "Medicine", "Sciences"],
      scholarships: "Up to £20,000",
      partnership: "Premium Partner"
    },
    {
      name: "McGill University",
      country: "Canada",
      ranking: "#31 Global",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
      flag: "🇨🇦",
      programs: ["Medicine", "Law", "Engineering"],
      scholarships: "Up to CAD $15,000",
      partnership: "Preferred Partner"
    },
    {
      name: "Australian National University",
      country: "Australia",
      ranking: "#30 Global",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop",
      flag: "🇦🇺",
      programs: ["Politics", "Sciences", "Arts"],
      scholarships: "Up to AUD $22,000",
      partnership: "Premium Partner"
    },
    {
      name: "Victoria University",
      country: "New Zealand",
      ranking: "#236 Global",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop",
      flag: "🇳🇿",
      programs: ["Business", "Law", "Sciences"],
      scholarships: "Up to NZD $12,000",
      partnership: "Preferred Partner"
    }
  ];

  const batchSize = 4;
  const totalBatches = Math.ceil(universities?.length / batchSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % totalBatches);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalBatches]);

  const getCurrentBatch = () => {
    const start = currentBatch * batchSize;
    return universities?.slice(start, start + batchSize);
  };

  const partnershipStats = [
    { label: "Partner Universities", value: "150+", icon: "Building2" },
    { label: "Countries", value: "25+", icon: "Globe" },
    { label: "Scholarship Value", value: "$50M+", icon: "DollarSign" },
    { label: "Success Rate", value: "96%", icon: "TrendingUp" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Verified Partners</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            World-Class University Partners
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            We've established direct partnerships with top-ranked universities worldwide, ensuring you get the best opportunities and exclusive scholarship access.
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnershipStats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center brand-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="font-headline text-2xl font-bold text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* University Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {getCurrentBatch()?.map((university, index) => (
              <div
                key={`${currentBatch}-${index}`}
                className="bg-white rounded-xl p-6 brand-shadow hover:brand-shadow-lg transition-all duration-300 group slide-up active"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <Image
                      src={university?.logo}
                      alt={university?.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="absolute -top-1 -right-1 text-lg">
                      {university?.flag}
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    university?.partnership === 'Premium Partner' ?'bg-accent/10 text-accent' :'bg-primary/10 text-primary'
                  }`}>
                    {university?.partnership}
                  </div>
                </div>

                <h3 className="font-headline text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {university?.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="MapPin" size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{university?.country}</span>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    {university?.ranking}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="GraduationCap" size={14} className="text-primary" />
                    <span className="text-xs text-gray-600">
                      {university?.programs?.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={14} className="text-success" />
                    <span className="text-xs text-success font-medium">
                      {university?.scholarships}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span className="text-xs text-gray-600">Direct Admission</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Indicators */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {Array.from({ length: totalBatches })?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBatch(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBatch 
                    ? 'bg-primary scale-125' :'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Partnership Highlight */}
        <div className="bg-white rounded-2xl p-8 brand-shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Award" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Exclusive Partnership Benefits
                  </h3>
                  <p className="text-gray-600">Available only to BrightPath clients</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Direct Admission Process</h4>
                    <p className="text-sm text-gray-600">Skip lengthy application queues with our direct university partnerships</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="DollarSign" size={20} className="text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Exclusive Scholarships</h4>
                    <p className="text-sm text-gray-600">Access to scholarships reserved specifically for our partner students</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={20} className="text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Dedicated Support</h4>
                    <p className="text-sm text-gray-600">Personal liaison officers at each partner university</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
              <div className="text-center mb-6">
                <h4 className="font-headline text-xl font-bold text-primary mb-2">
                  Ready to Apply?
                </h4>
                <p className="text-gray-600">
                  Explore our complete university network and find your perfect match
                </p>
              </div>

              <div className="space-y-4">
                <Link to="/partner-universities">
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-cta"
                    iconName="Search"
                    iconPosition="left"
                  >
                    Browse All Universities
                  </Button>
                </Link>
                
                <Link to="/contact-consultation">
                  <Button
                    variant="outline"
                    className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Book University Consultation
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>Free Service</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={14} />
                    <span>Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;