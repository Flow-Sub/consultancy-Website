import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState('karachi');

  const offices = [
    {
      id: 'karachi',
      city: 'Karachi',
      name: 'BrightPath Karachi',
      address: 'Suite 301, Business Center, Shahrah-e-Faisal, Karachi 75350',
      phone: '+92 21 3456 7890',
      email: 'karachi@brightpath.com.pk',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: { lat: 24.8607, lng: 67.0011 },
      manager: 'Ahmed Hassan',
      managerTitle: 'Senior Immigration Consultant',
      services: ['Study Visa', 'Skilled Immigration', 'Family Immigration'],
      parking: 'Free parking available',
      transport: 'Near Shahrah-e-Faisal Metro Station',
      landmarks: 'Opposite Dolmen Mall Clifton'
    },
    {
      id: 'lahore',
      city: 'Lahore',
      name: 'BrightPath Lahore',
      address: 'Floor 2, Liberty Market, Gulberg III, Lahore 54660',
      phone: '+92 42 3567 8901',
      email: 'lahore@brightpath.com.pk',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: { lat: 31.5204, lng: 74.3587 },
      manager: 'Fatima Khan',
      managerTitle: 'Immigration Specialist',
      services: ['Study Visa', 'PR Visa', 'Business Immigration'],
      parking: 'Paid parking nearby',
      transport: 'Liberty Market Bus Stop',
      landmarks: 'Near Liberty Books and McDonald\'s'
    },
    {
      id: 'islamabad',
      city: 'Islamabad',
      name: 'BrightPath Islamabad',
      address: 'Office 205, Blue Area, Jinnah Avenue, Islamabad 44000',
      phone: '+92 51 4567 8901',
      email: 'islamabad@brightpath.com.pk',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: { lat: 33.6844, lng: 73.0479 },
      manager: 'Muhammad Ali',
      managerTitle: 'Regional Manager',
      services: ['All Immigration Services', 'Document Attestation'],
      parking: 'Underground parking available',
      transport: 'Blue Area Metro Station',
      landmarks: 'Near Centaurus Mall'
    }
  ];

  const currentOffice = offices?.find(office => office?.id === selectedOffice);

  const handleDirections = (office) => {
    const { lat, lng } = office?.coordinates;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmail = (email) => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MapPin" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Office Locations
          </h3>
          <p className="text-sm text-gray-600">
            Visit us at any of our convenient locations
          </p>
        </div>
      </div>
      {/* Office Selection Tabs */}
      <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-lg">
        {offices?.map((office) => (
          <button
            key={office?.id}
            onClick={() => setSelectedOffice(office?.id)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedOffice === office?.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {office?.city}
          </button>
        ))}
      </div>
      {/* Selected Office Details */}
      {currentOffice && (
        <div className="space-y-6">
          {/* Office Header */}
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-lg font-headline font-bold text-gray-900 mb-1">
                {currentOffice?.name}
              </h4>
              <p className="text-gray-600 mb-2">{currentOffice?.address}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{currentOffice?.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={currentOffice?.name}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${currentOffice?.coordinates?.lat},${currentOffice?.coordinates?.lng}&z=15&output=embed`}
              className="border-0"
            />
          </div>

          {/* Contact Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              onClick={() => handleCall(currentOffice?.phone)}
              variant="outline"
              className="border-success text-success hover:bg-success hover:text-white"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Call Office
            </Button>
            <Button
              onClick={() => handleEmail(currentOffice?.email)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Send Email
            </Button>
            <Button
              onClick={() => handleDirections(currentOffice)}
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              iconName="Navigation"
              iconPosition="left"
              iconSize={16}
            >
              Get Directions
            </Button>
          </div>

          {/* Office Manager */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  {currentOffice?.manager}
                </h5>
                <p className="text-sm text-gray-600">
                  {currentOffice?.managerTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Services & Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Services */}
            <div>
              <h5 className="font-medium text-gray-900 mb-3">
                Available Services
              </h5>
              <div className="space-y-2">
                {currentOffice?.services?.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Information */}
            <div>
              <h5 className="font-medium text-gray-900 mb-3">
                Practical Information
              </h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="Car" size={14} className="text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {currentOffice?.parking}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Bus" size={14} className="text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {currentOffice?.transport}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={14} className="text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {currentOffice?.landmarks}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-error/5 border border-error/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" size={20} className="text-error mt-0.5" />
              <div>
                <h5 className="font-medium text-error mb-1">
                  Emergency Support
                </h5>
                <p className="text-sm text-gray-600 mb-2">
                  For urgent visa-related matters outside office hours, 
                  contact our emergency helpline.
                </p>
                <Button
                  onClick={() => handleCall('+92 300 999 8888')}
                  variant="outline"
                  size="sm"
                  className="border-error text-error hover:bg-error hover:text-white"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={14}
                >
                  Emergency: +92 300 999 8888
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeLocations;