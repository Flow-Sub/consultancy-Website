import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UniversityModal = ({ university, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !university) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'programs', label: 'Programs', icon: 'BookOpen' },
    { id: 'admissions', label: 'Admissions', icon: 'FileText' },
    { id: 'scholarships', label: 'Scholarships', icon: 'Award' },
    { id: 'campus', label: 'Campus Life', icon: 'Users' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">About the University</h4>
              <p className="text-gray-600 leading-relaxed">
                {university?.description || `${university?.name} is a prestigious institution known for its academic excellence and research contributions. With a rich history of educating global leaders, the university offers world-class facilities and innovative programs designed to prepare students for successful careers in their chosen fields.`}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="font-medium text-gray-900">Established</span>
                </div>
                <span className="text-gray-600">{university?.established || '1850'}</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="font-medium text-gray-900">Students</span>
                </div>
                <span className="text-gray-600">{university?.students?.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Globe" size={16} className="text-primary" />
                  <span className="font-medium text-gray-900">International Students</span>
                </div>
                <span className="text-gray-600">{university?.internationalStudents || '25%'}</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span className="font-medium text-gray-900">Student Satisfaction</span>
                </div>
                <span className="text-gray-600">{university?.satisfaction || '92%'}</span>
              </div>
            </div>
          </div>
        );
        
      case 'programs':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Popular Programs</h4>
              <div className="grid gap-4">
                {university?.popularPrograms?.map((program, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900">{program}</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          Duration: {program?.includes('PhD') ? '3-4 years' : program?.includes('Master') ? '1-2 years' : '3-4 years'}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'admissions':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Admission Requirements for Pakistani Students</h4>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Academic Requirements</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Intermediate/A-Levels with minimum 70% marks</li>
                    <li>• Bachelor's degree for postgraduate programs</li>
                    <li>• Official transcripts and certificates</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">English Language Requirements</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• IELTS: Overall 6.5 (no band below 6.0)</li>
                    <li>• TOEFL: 90+ (internet-based)</li>
                    <li>• PTE Academic: 62+</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Application Documents</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Completed application form</li>
                    <li>• Personal statement</li>
                    <li>• Letters of recommendation</li>
                    <li>• Passport copy</li>
                    <li>• Financial statements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'scholarships':
        return (
          <div className="space-y-6">
            {university?.scholarships ? (
              <>
                <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" size={20} className="text-brand-gold" />
                    <h4 className="font-medium text-gray-900">Scholarships Available</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Up to {university?.scholarshipAmount} available for Pakistani students
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Merit-Based Scholarships</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      For students with exceptional academic performance
                    </p>
                    <span className="text-sm font-medium text-success">Up to 50% tuition coverage</span>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Need-Based Financial Aid</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      For students demonstrating financial need
                    </p>
                    <span className="text-sm font-medium text-success">Up to 30% tuition coverage</span>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">International Student Bursary</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      Available for all international students
                    </p>
                    <span className="text-sm font-medium text-success">£2,000 - £5,000</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Icon name="Award" size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No specific scholarship information available</p>
              </div>
            )}
          </div>
        );
        
      case 'campus':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Campus Facilities</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Book" size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">Modern Library</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Dumbbell" size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">Sports Complex</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Home" size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">Student Housing</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Utensils" size={16} className="text-primary" />
                  <span className="text-sm text-gray-700">Dining Halls</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Virtual Campus Tour</h4>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Icon name="Play" size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Take a virtual tour of our campus</p>
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Start Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <Image
              src={university?.image}
              alt={`${university?.name} campus`}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
            <h2 className="font-headline font-bold text-xl text-gray-900 mb-1">
              {university?.name}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>{university?.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Trophy" size={14} />
                <span>#{university?.ranking} Global</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-warning fill-current" />
                <span>{university?.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab?.id
                    ? 'border-primary text-primary' :'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
                <Icon name="Shield" size={14} className="text-success" />
                <span className="text-sm font-medium text-success">Verified Partner</span>
              </div>
              {university?.scholarships && (
                <div className="flex items-center space-x-2 px-3 py-1 bg-brand-gold/10 rounded-full">
                  <Icon name="Award" size={14} className="text-brand-gold" />
                  <span className="text-sm font-medium text-brand-gold">Scholarships Available</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Brochure
              </Button>
              <Button
                variant="default"
                className="bg-brand-orange hover:bg-brand-orange/90"
                iconName="Send"
                iconPosition="left"
                iconSize={16}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityModal;