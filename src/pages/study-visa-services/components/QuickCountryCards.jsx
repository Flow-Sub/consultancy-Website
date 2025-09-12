import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickCountryCards = () => {
  const [savedCountries, setSavedCountries] = useState([]);

  const countries = [
    {
      code: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      tuitionRange: '£15,000 - £35,000',
      livingCost: '£12,000 - £18,000',
      visaFee: '£363',
      processingTime: '6-8 weeks',
      workRights: '20 hrs/week',
      postStudyWork: '2-3 years',
      popularCities: ['London', 'Manchester', 'Birmingham'],
      topUniversities: ['Oxford', 'Cambridge', 'Imperial College'],
      highlights: [
        'Post-Brexit opportunities',
        'Graduate visa route',
        'World-class education',
        'Rich cultural heritage'
      ],
      requirements: [
        'IELTS 6.0+',
        'Academic transcripts',
        'Financial proof',
        'TB certificate'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      code: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      tuitionRange: 'CAD $15,000 - $40,000',
      livingCost: 'CAD $12,000 - $20,000',
      visaFee: 'CAD $150',
      processingTime: '4-12 weeks',
      workRights: '20 hrs/week',
      postStudyWork: '1-3 years',
      popularCities: ['Toronto', 'Vancouver', 'Montreal'],
      topUniversities: ['University of Toronto', 'UBC', 'McGill'],
      highlights: [
        'Provincial Nominee Programs',
        'Pathway to PR',
        'Multicultural society',
        'High quality of life'
      ],
      requirements: [
        'IELTS 6.5+',
        'Letter of acceptance',
        'Financial support proof',
        'Medical exam'
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      code: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      tuitionRange: 'AUD $20,000 - $45,000',
      livingCost: 'AUD $18,000 - $25,000',
      visaFee: 'AUD $650',
      processingTime: '4-8 weeks',
      workRights: '40 hrs/fortnight',
      postStudyWork: '2-4 years',
      popularCities: ['Sydney', 'Melbourne', 'Brisbane'],
      topUniversities: ['University of Sydney', 'Melbourne Uni', 'ANU'],
      highlights: [
        'Work while studying',
        'Post-study work rights',
        'World-class universities',
        'Beautiful lifestyle'
      ],
      requirements: [
        'IELTS 6.5+',
        'CoE from university',
        'GTE statement',
        'Health insurance'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      code: 'newzealand',
      name: 'New Zealand',
      flag: '🇳🇿',
      tuitionRange: 'NZD $22,000 - $35,000',
      livingCost: 'NZD $15,000 - $20,000',
      visaFee: 'NZD $375',
      processingTime: '4-6 weeks',
      workRights: '20 hrs/week',
      postStudyWork: '1-3 years',
      popularCities: ['Auckland', 'Wellington', 'Christchurch'],
      topUniversities: ['University of Auckland', 'Victoria University', 'Canterbury'],
      highlights: [
        'Safe environment',
        'Post-study work visa',
        'Pathway to residency',
        'Natural beauty'
      ],
      requirements: [
        'IELTS 6.0+',
        'Offer of place',
        'Financial evidence',
        'Medical certificates'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const toggleSave = (countryCode) => {
    setSavedCountries(prev => 
      prev?.includes(countryCode)
        ? prev?.filter(code => code !== countryCode)
        : [...prev, countryCode]
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary">
          Quick Country Comparison
        </h2>
        <div className="flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/30">
          <Icon name="Bookmark" size={16} className="text-accent" />
          <span className="text-sm font-medium text-accent">
            {savedCountries?.length} Saved
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries?.map((country) => (
          <div key={country?.code} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className={`bg-gradient-to-r ${country?.color} text-white p-4`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{country?.flag}</span>
                  <div>
                    <h3 className="font-headline font-bold text-lg">{country?.name}</h3>
                  </div>
                </div>
                <button
                  onClick={() => toggleSave(country?.code)}
                  className={`p-2 rounded-full transition-colors ${
                    savedCountries?.includes(country?.code)
                      ? 'bg-white/20 text-white' :'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon 
                    name={savedCountries?.includes(country?.code) ? "Bookmark" : "BookmarkPlus"} 
                    size={16} 
                  />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Cost Overview */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tuition:</span>
                  <span className="text-sm font-semibold text-gray-800">{country?.tuitionRange}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Living:</span>
                  <span className="text-sm font-semibold text-gray-800">{country?.livingCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Visa Fee:</span>
                  <span className="text-sm font-semibold text-success">{country?.visaFee}</span>
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Processing: {country?.processingTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Work: {country?.workRights}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="GraduationCap" size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Post-study: {country?.postStudyWork}</span>
                </div>
              </div>

              {/* Popular Cities */}
              <div className="pt-2 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Cities:</h4>
                <div className="flex flex-wrap gap-1">
                  {country?.popularCities?.map((city, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                <div className="space-y-1">
                  {country?.highlights?.slice(0, 2)?.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={14}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Saved Countries Section */}
      {savedCountries?.length > 0 && (
        <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-brand-orange/10 rounded-xl border border-accent/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-headline font-bold text-gray-800">
              Your Saved Destinations ({savedCountries?.length})
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-white"
              iconName="Download"
              iconPosition="left"
              iconSize={14}
            >
              Download Comparison
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {savedCountries?.map((countryCode) => {
              const country = countries?.find(c => c?.code === countryCode);
              return (
                <div key={countryCode} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                  <span>{country?.flag}</span>
                  <span className="text-sm font-medium text-gray-800">{country?.name}</span>
                  <button
                    onClick={() => toggleSave(countryCode)}
                    className="text-gray-400 hover:text-error"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
            >
              Discuss My Options
            </Button>
            <Button
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickCountryCards;