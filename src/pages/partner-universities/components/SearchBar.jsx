import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onSortChange, sortBy, totalResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    // Real-time search with debouncing would be implemented here
    onSearch(value);
  };

  const sortOptions = [
    { value: 'ranking', label: 'World Ranking' },
    { value: 'name', label: 'University Name' },
    { value: 'tuition', label: 'Tuition Fees' },
    { value: 'acceptance', label: 'Acceptance Rate' },
    { value: 'students', label: 'Student Population' }
  ];

  const quickSearches = [
    'Engineering Programs',
    'Business Schools',
    'Medical Universities',
    'Computer Science',
    'Russell Group',
    'Group of Eight'
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow">
      <div className="p-6">
        {/* Main Search */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Search" size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search universities, programs, or locations..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Button
                type="submit"
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* Results and Sort */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Filter" size={16} />
            <span>{totalResults} universities found</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e?.target?.value)}
                className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              iconName={isAdvancedOpen ? 'ChevronUp' : 'ChevronDown'}
              iconPosition="right"
              iconSize={16}
            >
              Advanced
            </Button>
          </div>
        </div>

        {/* Quick Searches */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Popular Searches:</div>
          <div className="flex flex-wrap gap-2">
            {quickSearches?.map((search, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchTerm(search);
                  onSearch(search);
                }}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Search Options */}
        {isAdvancedOpen && (
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Level
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">All Levels</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="phd">PhD/Research</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Study Field
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">All Fields</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="medicine">Medicine</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="arts">Arts & Humanities</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">Any Time</option>
                  <option value="september">September 2024</option>
                  <option value="january">January 2025</option>
                  <option value="may">May 2025</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;