import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CountryTabs = ({ activeCountry, onCountryChange }) => {
  const countries = [
    {
      code: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      highlight: 'Post-Brexit Opportunities',
      color: 'border-red-500 text-red-600 bg-red-50'
    },
    {
      code: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      highlight: 'Provincial Nominee Programs',
      color: 'border-red-600 text-red-700 bg-red-50'
    },
    {
      code: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      highlight: 'Work While Study',
      color: 'border-blue-500 text-blue-600 bg-blue-50'
    },
    {
      code: 'newzealand',
      name: 'New Zealand',
      flag: '🇳🇿',
      highlight: 'Post-Study Work Rights',
      color: 'border-green-500 text-green-600 bg-green-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary">
          Choose Your Destination
        </h2>
        <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full border border-success/30">
          <Icon name="Shield" size={16} className="text-success" />
          <span className="text-sm font-medium text-success">Verified Pathways</span>
        </div>
      </div>
      {/* Desktop Tabs */}
      <div className="hidden md:flex space-x-2 mb-6">
        {countries?.map((country) => (
          <button
            key={country?.code}
            onClick={() => onCountryChange(country?.code)}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-300 ${
              activeCountry === country?.code
                ? country?.color
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl">{country?.flag}</span>
              <span className="font-semibold text-sm">{country?.name}</span>
              <span className="text-xs opacity-80">{country?.highlight}</span>
            </div>
          </button>
        ))}
      </div>
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <select
          value={activeCountry}
          onChange={(e) => onCountryChange(e?.target?.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
        >
          {countries?.map((country) => (
            <option key={country?.code} value={country?.code}>
              {country?.flag} {country?.name} - {country?.highlight}
            </option>
          ))}
        </select>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-primary/5 rounded-lg">
          <div className="text-2xl font-bold text-primary">98%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="text-center p-3 bg-success/5 rounded-lg">
          <div className="text-2xl font-bold text-success">2,500+</div>
          <div className="text-sm text-gray-600">Students Placed</div>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded-lg">
          <div className="text-2xl font-bold text-accent">150+</div>
          <div className="text-sm text-gray-600">Partner Universities</div>
        </div>
        <div className="text-center p-3 bg-brand-orange/5 rounded-lg">
          <div className="text-2xl font-bold text-brand-orange">15</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default CountryTabs;