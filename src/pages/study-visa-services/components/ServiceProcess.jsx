import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: 'Initial Assessment',
      duration: '1-2 Days',
      description: 'Comprehensive evaluation of your academic background, career goals, and financial capacity to determine the best pathway.',
      details: [
        'Academic transcript review',
        'Career goal assessment',
        'Financial capacity evaluation',
        'Country preference analysis',
        'Timeline planning'
      ],
      icon: 'UserCheck',
      color: 'bg-blue-500'
    },
    {
      title: 'University Selection',
      duration: '1-2 Weeks',
      description: 'Strategic selection of universities based on your profile, preferences, and admission requirements.',
      details: [
        'University ranking analysis',
        'Course curriculum matching',
        'Admission requirement check',
        'Scholarship opportunity identification',
        'Application deadline planning'
      ],
      icon: 'Building2',
      color: 'bg-green-500'
    },
    {
      title: 'Application Preparation',
      duration: '3-4 Weeks',
      description: 'Meticulous preparation of all application documents including essays, recommendations, and supporting materials.',
      details: [
        'Document collection and verification',
        'Personal statement writing',
        'Recommendation letter coordination',
        'Portfolio preparation (if required)',
        'Application form completion'
      ],
      icon: 'FileText',
      color: 'bg-purple-500'
    },
    {
      title: 'Visa Filing',
      duration: '6-12 Weeks',
      description: 'Complete visa application process including document preparation, form filling, and interview preparation.',
      details: [
        'Visa form completion',
        'Financial document preparation',
        'Interview scheduling and preparation',
        'Biometric appointment booking',
        'Application tracking and follow-up'
      ],
      icon: 'Shield',
      color: 'bg-orange-500'
    },
    {
      title: 'Pre-Departure Guidance',
      duration: '2-3 Weeks',
      description: 'Comprehensive preparation for your journey including accommodation, travel, and cultural orientation.',
      details: [
        'Accommodation arrangement assistance',
        'Flight booking guidance',
        'Travel insurance setup',
        'Cultural orientation sessions',
        'Banking and financial setup'
      ],
      icon: 'Plane',
      color: 'bg-red-500'
    },
    {
      title: 'Post-Arrival Support',
      duration: 'Ongoing',
      description: 'Continued support after arrival including academic guidance, visa extensions, and career counseling.',
      details: [
        'Airport pickup coordination',
        'University enrollment assistance',
        'Local orientation support',
        'Visa extension guidance',
        'Career counseling services'
      ],
      icon: 'Heart',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-headline font-bold text-primary mb-4">
          Our 6-Step Success Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From initial consultation to post-arrival support, we guide you through every step of your study abroad journey with personalized attention and expert guidance.
        </p>
      </div>
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="flex justify-between relative z-10">
            {processSteps?.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index
                    ? `${step?.color} text-white scale-110 shadow-lg`
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                <Icon name={step?.icon} size={24} />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${processSteps?.[activeStep]?.color} text-white`}>
                <Icon name={processSteps?.[activeStep]?.icon} size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold text-primary">
                  {processSteps?.[activeStep]?.title}
                </h3>
                <p className="text-gray-600">Duration: {processSteps?.[activeStep]?.duration}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Step {activeStep + 1} of {processSteps?.length}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 text-lg">
            {processSteps?.[activeStep]?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps?.[activeStep]?.details?.map((detail, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Accordion */}
      <div className="lg:hidden space-y-4">
        {processSteps?.map((step, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step?.color} text-white`}>
                  <Icon name={step?.icon} size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{step?.title}</h3>
                  <p className="text-sm text-gray-600">{step?.duration}</p>
                </div>
              </div>
              <Icon 
                name={activeStep === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-gray-400" 
              />
            </button>
            
            {activeStep === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-700 mb-4">{step?.description}</p>
                <div className="space-y-2">
                  {step?.details?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Success Metrics */}
      <div className="mt-8 bg-gradient-to-r from-success to-green-600 text-white rounded-xl p-6">
        <h3 className="text-xl font-headline font-bold mb-4 text-center">
          Our Track Record Speaks for Itself
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm text-green-100">Visa Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2,500+</div>
            <div className="text-sm text-green-100">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">45</div>
            <div className="text-sm text-green-100">Days Average Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-green-100">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;