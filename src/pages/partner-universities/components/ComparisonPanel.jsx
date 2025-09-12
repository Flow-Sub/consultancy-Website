import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonPanel = ({ universities, onRemove, onClear, isOpen, onToggle }) => {
  if (universities?.length === 0) return null;

  const ComparisonRow = ({ label, getValue, icon }) => (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-2 mb-2">
        {icon && <Icon name={icon} size={16} className="text-gray-500" />}
        <span className="font-medium text-gray-700 text-sm">{label}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {universities?.map((uni, index) => (
          <div key={index} className="text-sm text-gray-900">
            {getValue(uni)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <Button
          variant="default"
          onClick={onToggle}
          className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg"
          iconName="GitCompare"
          iconSize={20}
        >
          Compare ({universities?.length})
        </Button>
      </div>
      {/* Comparison Panel */}
      <div className={`fixed inset-0 z-50 bg-black/50 ${isOpen ? 'block' : 'hidden'} lg:relative lg:inset-auto lg:bg-transparent lg:z-auto lg:block`}>
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] overflow-hidden lg:relative lg:rounded-xl lg:max-h-none lg:border lg:border-gray-200 lg:brand-shadow">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-2">
              <Icon name="GitCompare" size={20} className="text-primary" />
              <h3 className="font-headline font-bold text-lg text-gray-900">
                Compare Universities ({universities?.length}/3)
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClear}
                iconName="Trash2"
                iconSize={14}
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                iconName="X"
                iconSize={16}
                className="lg:hidden"
              />
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(80vh-80px)] lg:max-h-96">
            <div className="p-4">
              {/* University Headers */}
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {universities?.map((uni, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <button
                          onClick={() => onRemove(uni)}
                          className="absolute -top-2 -right-2 bg-error text-white rounded-full p-1 hover:bg-error/90 transition-colors"
                        >
                          <Icon name="X" size={12} />
                        </button>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden">
                            <Image
                              src={uni?.logo || uni?.image}
                              alt={`${uni?.name} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                              {uni?.name}
                            </h4>
                            <p className="text-xs text-gray-500">{uni?.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                            #{uni?.ranking}
                          </span>
                          <span className="text-gray-600">
                            {uni?.rating} ★
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Details */}
              <div className="space-y-1">
                <ComparisonRow
                  label="World Ranking"
                  icon="Trophy"
                  getValue={(uni) => `#${uni?.ranking}`}
                />
                
                <ComparisonRow
                  label="Tuition Range"
                  icon="DollarSign"
                  getValue={(uni) => uni?.tuitionRange}
                />
                
                <ComparisonRow
                  label="Acceptance Rate"
                  icon="Users"
                  getValue={(uni) => `${uni?.acceptanceRate}%`}
                />
                
                <ComparisonRow
                  label="Student Population"
                  icon="GraduationCap"
                  getValue={(uni) => uni?.students?.toLocaleString()}
                />
                
                <ComparisonRow
                  label="Popular Programs"
                  icon="BookOpen"
                  getValue={(uni) => uni?.popularPrograms?.slice(0, 3)?.join(', ')}
                />
                
                <ComparisonRow
                  label="Scholarships"
                  icon="Award"
                  getValue={(uni) => uni?.scholarships ? uni?.scholarshipAmount : 'Not Available'}
                />
                
                <ComparisonRow
                  label="Application Deadline"
                  icon="Calendar"
                  getValue={(uni) => uni?.applicationDeadline || 'Rolling Admissions'}
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {universities?.map((uni, index) => (
                    <Button
                      key={index}
                      variant="default"
                      size="sm"
                      className="bg-brand-orange hover:bg-brand-orange/90"
                      iconName="Send"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Apply to {uni?.name?.split(' ')?.[0]}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonPanel;