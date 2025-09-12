import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  totalResults 
}) => {
  const countryOptions = [
    { value: '', label: 'All Countries' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Canada', label: 'Canada' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'USA', label: 'United States' }
  ];

  const programTypeOptions = [
    { value: '', label: 'All Programs' },
    { value: 'Undergraduate', label: 'Undergraduate' },
    { value: 'Postgraduate', label: 'Postgraduate' },
    { value: 'PhD', label: 'PhD/Research' },
    { value: 'Foundation', label: 'Foundation Courses' },
    { value: 'Pathway', label: 'Pathway Programs' }
  ];

  const tuitionRangeOptions = [
    { value: '', label: 'All Ranges' },
    { value: 'Low', label: 'Low (Under £15,000)' },
    { value: 'Medium', label: 'Medium (£15,000 - £30,000)' },
    { value: 'High', label: 'High (Above £30,000)' }
  ];

  const rankingOptions = [
    { value: '', label: 'All Rankings' },
    { value: '1-50', label: 'Top 50' },
    { value: '51-100', label: 'Top 100' },
    { value: '101-200', label: 'Top 200' },
    { value: '201+', label: '200+' }
  ];

  const specialFeatures = [
    { id: 'scholarships', label: 'Scholarships Available' },
    { id: 'pathwayPrograms', label: 'Pathway Programs' },
    { id: 'foundationCourses', label: 'Foundation Courses' },
    { id: 'internshipOpportunities', label: 'Internship Opportunities' },
    { id: 'researchOpportunities', label: 'Research Opportunities' },
    { id: 'onCampusAccommodation', label: 'On-Campus Housing' }
  ];

  const handleFeatureChange = (featureId, checked) => {
    const updatedFeatures = checked
      ? [...(filters?.features || []), featureId]
      : (filters?.features || [])?.filter(f => f !== featureId);
    
    onFilterChange('features', updatedFeatures);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          iconSize={16}
          className="w-full"
        >
          Filters ({totalResults} universities)
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-white rounded-xl border border-gray-200 brand-shadow ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-bold text-lg text-gray-900">
              Filter Universities
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconSize={14}
            >
              Clear All
            </Button>
          </div>

          {/* Country Filter */}
          <div className="mb-6">
            <Select
              label="Country"
              options={countryOptions}
              value={filters?.country || ''}
              onChange={(value) => onFilterChange('country', value)}
              className="mb-4"
            />
          </div>

          {/* Program Type Filter */}
          <div className="mb-6">
            <Select
              label="Program Type"
              options={programTypeOptions}
              value={filters?.programType || ''}
              onChange={(value) => onFilterChange('programType', value)}
              className="mb-4"
            />
          </div>

          {/* Tuition Range Filter */}
          <div className="mb-6">
            <Select
              label="Tuition Range"
              options={tuitionRangeOptions}
              value={filters?.tuitionRange || ''}
              onChange={(value) => onFilterChange('tuitionRange', value)}
              className="mb-4"
            />
          </div>

          {/* Ranking Filter */}
          <div className="mb-6">
            <Select
              label="World Ranking"
              options={rankingOptions}
              value={filters?.ranking || ''}
              onChange={(value) => onFilterChange('ranking', value)}
              className="mb-4"
            />
          </div>

          {/* Special Features */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Special Features</h4>
            <div className="space-y-3">
              {specialFeatures?.map((feature) => (
                <Checkbox
                  key={feature?.id}
                  label={feature?.label}
                  checked={(filters?.features || [])?.includes(feature?.id)}
                  onChange={(e) => handleFeatureChange(feature?.id, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Search" size={16} />
              <span>{totalResults} universities match your criteria</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;