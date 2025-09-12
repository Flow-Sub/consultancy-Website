import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SmartServiceFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      id: 'goal',
      question: 'What is your primary goal?',
      options: [
        { value: 'study', label: 'Study Abroad', icon: 'GraduationCap' },
        { value: 'work', label: 'Work & Immigration', icon: 'Briefcase' },
        { value: 'family', label: 'Family Reunification', icon: 'Heart' },
        { value: 'business', label: 'Business Immigration', icon: 'Building2' }
      ]
    },
    {
      id: 'destination',
      question: 'Which country interests you most?',
      options: [
        { value: 'uk', label: 'United Kingdom', icon: 'MapPin', flag: '🇬🇧' },
        { value: 'canada', label: 'Canada', icon: 'MapPin', flag: '🇨🇦' },
        { value: 'australia', label: 'Australia', icon: 'MapPin', flag: '🇦🇺' },
        { value: 'newzealand', label: 'New Zealand', icon: 'MapPin', flag: '🇳🇿' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you plan to start?',
      options: [
        { value: 'immediate', label: 'Within 3 months', icon: 'Zap' },
        { value: 'soon', label: '3-6 months', icon: 'Clock' },
        { value: 'planning', label: '6-12 months', icon: 'Calendar' },
        { value: 'exploring', label: 'Just exploring', icon: 'Search' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (userAnswers) => {
    const recommendations = {
      study: {
        title: 'Study Visa Services',
        description: 'Perfect for students seeking international education opportunities',
        features: ['University Selection', 'Application Support', 'Visa Processing', 'Pre-departure Guidance'],
        cta: 'Explore Study Options',
        link: '/study-visa-services',
        color: 'primary',
        icon: 'GraduationCap'
      },
      work: {
        title: 'Skilled Immigration',
        description: 'Ideal for professionals seeking permanent residency abroad',
        features: ['Skills Assessment', 'PR Application', 'Job Market Guidance', 'Settlement Support'],
        cta: 'Start Immigration Process',
        link: '/study-visa-services',
        color: 'success',
        icon: 'Briefcase'
      },
      family: {
        title: 'Family Immigration',
        description: 'Reunite with your loved ones through family sponsorship',
        features: ['Sponsorship Applications', 'Document Preparation', 'Interview Coaching', 'Legal Support'],
        cta: 'Reunite Your Family',
        link: '/study-visa-services',
        color: 'brand-orange',
        icon: 'Heart'
      },
      business: {
        title: 'Business Immigration',
        description: 'Expand your business horizons with investor visas',
        features: ['Investment Planning', 'Business Setup', 'Investor Visas', 'Market Analysis'],
        cta: 'Explore Business Options',
        link: '/study-visa-services',
        color: 'accent',
        icon: 'Building2'
      }
    };

    setRecommendation(recommendations?.[userAnswers?.goal]);
  };

  const resetFinder = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (recommendation) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Perfect Match Found!</span>
            </div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">
              Your Personalized Recommendation
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 brand-shadow-lg">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-${recommendation?.color}/10 rounded-full mb-4`}>
                <Icon name={recommendation?.icon} size={32} className={`text-${recommendation?.color}`} />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                {recommendation?.title}
              </h3>
              <p className="font-body text-gray-600 max-w-2xl mx-auto">
                {recommendation?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {recommendation?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={recommendation?.link}>
                <Button
                  variant="default"
                  size="lg"
                  className={`bg-${recommendation?.color} hover:bg-${recommendation?.color}/90 text-white font-cta w-full sm:w-auto`}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {recommendation?.cta}
                </Button>
              </Link>
              <Link to="/contact-consultation">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={resetFinder}
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Compass" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Smart Service Finder</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Find Your Perfect Pathway
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few quick questions and get personalized recommendations tailored to your goals and timeline.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 brand-shadow-lg">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentStep + 1} of {questions?.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(((currentStep + 1) / questions?.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / questions?.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Question */}
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">
              {questions?.[currentStep]?.question}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {questions?.[currentStep]?.options?.map((option) => (
              <button
                key={option?.value}
                onClick={() => handleAnswer(questions?.[currentStep]?.id, option?.value)}
                className="flex items-center space-x-4 p-6 bg-gray-50 hover:bg-primary/5 rounded-xl border-2 border-transparent hover:border-primary/20 transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-colors">
                  {option?.flag ? (
                    <span className="text-2xl">{option?.flag}</span>
                  ) : (
                    <Icon name={option?.icon} size={24} className="text-primary" />
                  )}
                </div>
                <div>
                  <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                    {option?.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={currentStep === 0}
              iconName="ArrowLeft"
              iconPosition="left"
              className="text-gray-500 hover:text-primary disabled:opacity-50"
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {questions?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-primary' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartServiceFinder;