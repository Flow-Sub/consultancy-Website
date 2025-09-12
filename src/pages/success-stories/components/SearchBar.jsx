import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onVoiceSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice search
    setTimeout(() => {
      setIsListening(false);
      onVoiceSearch();
    }, 2000);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  const popularSearches = [
    'UK Study Visa',
    'Software Engineer Canada',
    'Family Immigration',
    'PR Visa Australia',
    'Medical Professional',
    'Student Success Stories'
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="Search" size={20} className="text-gray-400" />
          </div>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            placeholder="Search success stories by name, profession, country, or service type..."
            className="w-full pl-12 pr-24 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
          />
          
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            )}
            
            <button
              type="button"
              onClick={handleVoiceSearch}
              disabled={isListening}
              className={`p-2 rounded-full transition-all ${
                isListening 
                  ? 'bg-error/10 text-error animate-pulse' :'text-gray-400 hover:text-primary hover:bg-primary/10'
              }`}
            >
              <Icon name="Mic" size={16} />
            </button>
            
            <Button
              type="submit"
              variant="default"
              size="sm"
              iconName="Search"
              iconSize={16}
              className="bg-primary hover:bg-primary/90"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
      {/* Voice Search Indicator */}
      {isListening && (
        <div className="mb-4 p-3 bg-error/5 border border-error/20 rounded-lg">
          <div className="flex items-center space-x-2 text-error">
            <Icon name="Mic" size={16} className="animate-pulse" />
            <span className="text-sm font-medium">Listening... Speak now</span>
          </div>
        </div>
      )}
      {/* Popular Searches */}
      <div>
        <h4 className="font-medium text-gray-900 text-sm mb-3">Popular Searches</h4>
        <div className="flex flex-wrap gap-2">
          {popularSearches?.map((search, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(search);
                onSearch(search);
              }}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-600 rounded-full transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
      {/* Search Tips */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-primary mt-0.5" />
          <div className="text-sm text-gray-600">
            <span className="font-medium">Search Tips:</span> Try searching by profession (e.g., "Software Engineer"), 
            destination country (e.g., "Canada"), or service type (e.g., "Study Visa") to find relevant success stories.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;