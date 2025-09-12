import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CountryDetails = ({ country }) => {
  const countryData = {
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      visaTypes: [
        { name: 'Student Visa (Tier 4)', duration: '6-8 weeks', fee: '£363' },
        { name: 'Graduate Visa', duration: '8-12 weeks', fee: '£715' },
        { name: 'Short-term Study', duration: '3-4 weeks', fee: '£97' }
      ],
      requirements: [
        'Valid passport with 6+ months validity',
        'CAS (Confirmation of Acceptance for Studies)',
        'Financial proof (£1,334/month for London)',
        'English language proficiency (IELTS 6.0+)',
        'TB test certificate',
        'Academic transcripts and certificates'
      ],
      timeline: [
        { step: 'Document Preparation', duration: '2-3 weeks' },
        { step: 'University Application', duration: '4-8 weeks' },
        { step: 'CAS Issuance', duration: '1-2 weeks' },
        { step: 'Visa Application', duration: '6-8 weeks' },
        { step: 'Pre-departure Prep', duration: '2-3 weeks' }
      ],
      costs: {
        tuition: '£15,000 - £35,000',
        living: '£12,000 - £18,000',
        visa: '£363 - £715'
      },
      highlights: [
        'Post-study work visa for 2-3 years',
        'World-renowned universities',
        'No IELTS required for some universities',
        'Part-time work allowed (20 hours/week)'
      ]
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      visaTypes: [
        { name: 'Study Permit', duration: '4-12 weeks', fee: 'CAD $150' },
        { name: 'Post-Graduation Work Permit', duration: '4-6 months', fee: 'CAD $255' },
        { name: 'Student Direct Stream', duration: '4-6 weeks', fee: 'CAD $150' }
      ],
      requirements: [
        'Valid passport',
        'Letter of acceptance from DLI',
        'Proof of financial support (CAD $10,000+)',
        'Medical exam (if required)',
        'Police clearance certificate',
        'Statement of Purpose'
      ],
      timeline: [
        { step: 'Document Collection', duration: '2-4 weeks' },
        { step: 'University Application', duration: '6-12 weeks' },
        { step: 'Study Permit Application', duration: '4-12 weeks' },
        { step: 'Biometrics & Interview', duration: '1-2 weeks' },
        { step: 'Travel Preparation', duration: '2-3 weeks' }
      ],
      costs: {
        tuition: 'CAD $15,000 - $40,000',
        living: 'CAD $12,000 - $20,000',
        visa: 'CAD $150 - $255'
      },
      highlights: [
        'Provincial Nominee Programs available',
        'Pathway to permanent residency',
        'Work while studying (20 hours/week)',
        'High-quality education system'
      ]
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      visaTypes: [
        { name: 'Student Visa (500)', duration: '4-8 weeks', fee: 'AUD $650' },
        { name: 'Temporary Graduate Visa', duration: '5-11 months', fee: 'AUD $1,680' },
        { name: 'Guardian Visa (590)', duration: '4-8 weeks', fee: 'AUD $650' }
      ],
      requirements: [
        'Valid passport',
        'Confirmation of Enrolment (CoE)',
        'Genuine Temporary Entrant (GTE) statement',
        'Financial capacity evidence',
        'English proficiency test',
        'Health insurance (OSHC)'
      ],
      timeline: [
        { step: 'Course Selection', duration: '2-3 weeks' },
        { step: 'University Application', duration: '4-8 weeks' },
        { step: 'CoE Issuance', duration: '1-2 weeks' },
        { step: 'Visa Lodgement', duration: '4-8 weeks' },
        { step: 'Pre-departure', duration: '2-4 weeks' }
      ],
      costs: {
        tuition: 'AUD $20,000 - $45,000',
        living: 'AUD $18,000 - $25,000',
        visa: 'AUD $650 - $1,680'
      },
      highlights: [
        'Work 40 hours per fortnight while studying',
        'Post-study work rights up to 4 years',
        'World-class universities',
        'Multicultural environment'
      ]
    },
    newzealand: {
      name: 'New Zealand',
      flag: '🇳🇿',
      visaTypes: [
        { name: 'Student Visa', duration: '4-6 weeks', fee: 'NZD $375' },
        { name: 'Post-Study Work Visa', duration: '4-8 weeks', fee: 'NZD $495' },
        { name: 'Pathway Student Visa', duration: '4-6 weeks', fee: 'NZD $375' }
      ],
      requirements: [
        'Valid passport',
        'Offer of place from approved institution',
        'Evidence of funds (NZD $15,000/year)',
        'Medical and chest X-ray certificates',
        'Police clearance certificate',
        'English language evidence'
      ],
      timeline: [
        { step: 'Institution Selection', duration: '2-3 weeks' },
        { step: 'Application Submission', duration: '4-8 weeks' },
        { step: 'Offer Acceptance', duration: '1-2 weeks' },
        { step: 'Visa Processing', duration: '4-6 weeks' },
        { step: 'Travel Arrangements', duration: '2-3 weeks' }
      ],
      costs: {
        tuition: 'NZD $22,000 - $35,000',
        living: 'NZD $15,000 - $20,000',
        visa: 'NZD $375 - $495'
      },
      highlights: [
        'Work up to 20 hours per week',
        'Post-study work visa available',
        'Safe and welcoming environment',
        'Pathway to residency'
      ]
    }
  };

  const data = countryData?.[country];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{data?.flag}</span>
          <div>
            <h2 className="text-3xl font-headline font-bold">{data?.name}</h2>
            <p className="text-blue-100">Study Visa Services</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{data?.costs?.tuition}</div>
            <div className="text-sm text-blue-100">Annual Tuition</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{data?.costs?.living}</div>
            <div className="text-sm text-blue-100">Living Expenses</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{data?.costs?.visa}</div>
            <div className="text-sm text-blue-100">Visa Fees</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visa Types */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
          <h3 className="text-xl font-headline font-bold text-primary mb-4 flex items-center">
            <Icon name="FileText" size={20} className="mr-2" />
            Visa Types Available
          </h3>
          <div className="space-y-4">
            {data?.visaTypes?.map((visa, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{visa?.name}</h4>
                  <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
                    {visa?.fee}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Clock" size={14} className="mr-1" />
                  Processing: {visa?.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
          <h3 className="text-xl font-headline font-bold text-primary mb-4 flex items-center">
            <Icon name="CheckSquare" size={20} className="mr-2" />
            Document Requirements
          </h3>
          <div className="space-y-3">
            {data?.requirements?.map((req, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
        <h3 className="text-xl font-headline font-bold text-primary mb-6 flex items-center">
          <Icon name="Calendar" size={20} className="mr-2" />
          Application Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            {data?.timeline?.map((step, index) => (
              <div key={index} className="relative flex items-center space-x-4">
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{step?.step}</h4>
                  <p className="text-sm text-gray-600">Duration: {step?.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
        <h3 className="text-xl font-headline font-bold text-primary mb-4 flex items-center">
          <Icon name="Star" size={20} className="mr-2" />
          Key Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.highlights?.map((highlight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg">
              <Icon name="Award" size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="bg-gradient-to-r from-brand-orange to-accent text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-headline font-bold mb-4">
          Ready to Start Your {data?.name} Journey?
        </h3>
        <p className="text-orange-100 mb-6">
          Get personalized guidance from our certified immigration experts
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-white text-brand-orange hover:bg-gray-100"
            iconName="Calendar"
            iconPosition="left"
          >
            Book Free Consultation
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand-orange"
            iconName="Download"
            iconPosition="left"
          >
            Download Checklist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;