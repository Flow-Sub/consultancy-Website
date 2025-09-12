import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, totalResults }) => {
  const serviceTypeOptions = [
    { value: '', label: 'All Services' },
    { value: 'Study Visa', label: 'Study Visa' },
    { value: 'Skilled Immigration', label: 'Skilled Immigration' },
    { value: 'Family Immigration', label: 'Family Immigration' },
    { value: 'PR Visa', label: 'PR Visa' }
  ];

  const countryOptions = [
    { value: '', label: 'All Countries' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'USA', label: 'United States' }
  ];

  const professionOptions = [
    { value: '', label: 'All Professions' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Doctor', label: 'Doctor' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Nurse', label: 'Nurse' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Student', label: 'Student' },
    { value: 'Business Owner', label: 'Business Owner' }
  ];

  const ageRangeOptions = [
    { value: '', label: 'All Ages' },
    { value: '18-25', label: '18-25 years' },
    { value: '26-35', label: '26-35 years' },
    { value: '36-45', label: '36-45 years' },
    { value: '46+', label: '46+ years' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'processing-time', label: 'Fastest Processing' }
  ];

  const hasActiveFilters = Object.values(filters)?.some(value => value !== '');

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="font-headline font-semibold text-lg text-gray-900">
            Filter Stories
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Search" size={16} />
          <span>{totalResults} stories found</span>
        </div>
      </div>
      {/* Filter Controls */}
      <div className="space-y-4">
        {/* Service Type */}
        <Select
          label="Service Type"
          options={serviceTypeOptions}
          value={filters?.serviceType}
          onChange={(value) => onFilterChange('serviceType', value)}
          placeholder="Select service type"
        />

        {/* Destination Country */}
        <Select
          label="Destination Country"
          options={countryOptions}
          value={filters?.country}
          onChange={(value) => onFilterChange('country', value)}
          placeholder="Select country"
        />

        {/* Profession */}
        <Select
          label="Profession"
          options={professionOptions}
          value={filters?.profession}
          onChange={(value) => onFilterChange('profession', value)}
          placeholder="Select profession"
          searchable
        />

        {/* Age Range */}
        <Select
          label="Age Range"
          options={ageRangeOptions}
          value={filters?.ageRange}
          onChange={(value) => onFilterChange('ageRange', value)}
          placeholder="Select age range"
        />

        {/* Sort By */}
        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
          placeholder="Sort stories"
        />
      </div>
      {/* Filter Actions */}
      <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          iconName="X"
          iconPosition="left"
          iconSize={14}
          className="flex-1"
        >
          Clear Filters
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Search"
          iconPosition="left"
          iconSize={14}
          className="flex-1"
        >
          Apply Filters
        </Button>
      </div>
      {/* Quick Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 text-sm mb-3">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange('serviceType', 'Study Visa')}
            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
          >
            Study Visas
          </button>
          <button
            onClick={() => onFilterChange('country', 'UK')}
            className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
          >
            UK Success
          </button>
          <button
            onClick={() => onFilterChange('profession', 'Software Engineer')}
            className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
          >
            Tech Professionals
          </button>
          <button
            onClick={() => onFilterChange('ageRange', '18-25')}
            className="px-3 py-1 text-xs bg-success/10 text-success rounded-full hover:bg-success/20 transition-colors"
          >
            Young Professionals
          </button>
        </div>
      </div>
      {/* Success Metrics */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 text-sm mb-3">Success Metrics</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-success/5 rounded-lg">
            <div className="text-lg font-bold text-success">95%</div>
            <div className="text-xs text-gray-600">Approval Rate</div>
          </div>
          <div className="text-center p-3 bg-primary/5 rounded-lg">
            <div className="text-lg font-bold text-primary">4.8</div>
            <div className="text-xs text-gray-600">Avg Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;