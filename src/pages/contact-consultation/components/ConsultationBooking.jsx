import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    message: ''
  });

  const serviceOptions = [
    { value: 'study-visa', label: 'Study Visa Consultation' },
    { value: 'skilled-immigration', label: 'Skilled Immigration' },
    { value: 'family-immigration', label: 'Family Immigration' },
    { value: 'pr-visa', label: 'PR Visa Consultation' },
    { value: 'general', label: 'General Consultation' }
  ];

  const consultationTypes = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Call' },
    { value: 'in-person', label: 'In-Person Meeting' }
  ];

  const officeLocations = [
    { value: 'karachi', label: 'Karachi Office' },
    { value: 'lahore', label: 'Lahore Office' },
    { value: 'islamabad', label: 'Islamabad Office' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' }
  ];

  const availableDates = [
    { value: '2025-01-06', label: 'Monday, Jan 6, 2025' },
    { value: '2025-01-07', label: 'Tuesday, Jan 7, 2025' },
    { value: '2025-01-08', label: 'Wednesday, Jan 8, 2025' },
    { value: '2025-01-09', label: 'Thursday, Jan 9, 2025' },
    { value: '2025-01-10', label: 'Friday, Jan 10, 2025' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Consultation booking:', {
      ...formData,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      type: selectedType,
      office: selectedOffice
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Book Free Consultation
          </h3>
          <p className="text-sm text-gray-600">
            Schedule your personalized immigration consultation
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+92 300 1234567"
          value={formData?.phone}
          onChange={handleInputChange}
          required
        />

        {/* Service Selection */}
        <Select
          label="Service Type"
          placeholder="Select consultation type"
          options={serviceOptions}
          value={selectedService}
          onChange={setSelectedService}
          required
        />

        <Select
          label="Timeline"
          placeholder="When do you plan to proceed?"
          options={timelineOptions}
          value={formData?.timeline}
          onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
          required
        />

        {/* Consultation Preferences */}
        <Select
          label="Consultation Method"
          placeholder="Choose your preferred method"
          options={consultationTypes}
          value={selectedType}
          onChange={setSelectedType}
          required
        />

        {selectedType === 'in-person' && (
          <Select
            label="Office Location"
            placeholder="Select office location"
            options={officeLocations}
            value={selectedOffice}
            onChange={setSelectedOffice}
            required
          />
        )}

        {/* Date & Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Preferred Date"
            placeholder="Select date"
            options={availableDates}
            value={selectedDate}
            onChange={setSelectedDate}
            required
          />
          <Select
            label="Preferred Time"
            placeholder="Select time"
            options={availableTimes}
            value={selectedTime}
            onChange={setSelectedTime}
            required
          />
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your specific requirements, questions, or any documents you have ready..."
            value={formData?.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        {/* Free Consultation Highlight */}
        <div className="bg-success/5 border border-success/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
            <div>
              <h4 className="font-medium text-success mb-1">
                100% Free Initial Consultation
              </h4>
              <p className="text-sm text-gray-600">
                No hidden charges. Get expert advice on your immigration options, 
                eligibility assessment, and personalized roadmap to your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
          iconName="Calendar"
          iconPosition="left"
          iconSize={18}
        >
          Book Free Consultation
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By booking a consultation, you agree to our Terms of Service and Privacy Policy. 
          We'll confirm your appointment within 2 hours.
        </p>
      </form>
    </div>
  );
};

export default ConsultationBooking;