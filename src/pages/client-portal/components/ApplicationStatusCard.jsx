import React from 'react';
import Icon from '../../../components/AppIcon';

const ApplicationStatusCard = ({ application }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'text-success bg-success/10 border-success/30';
      case 'in progress':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/30';
      case 'under review':
        return 'text-accent bg-accent/10 border-accent/30';
      default:
        return 'text-gray-500 bg-gray-100 border-gray-300';
    }
  };

  const getProgressPercentage = (stage) => {
    const stages = {
      'document_review': 25,
      'university_application': 50,
      'visa_filing': 75,
      'approved': 100
    };
    return stages?.[stage] || 0;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow hover:brand-shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="FileText" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-gray-900">
              {application?.type}
            </h3>
            <p className="text-sm text-gray-600">{application?.destination}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(application?.status)}`}>
          {application?.status}
        </span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-600">{getProgressPercentage(application?.currentStage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary rounded-full h-2 transition-all duration-500"
            style={{ width: `${getProgressPercentage(application?.currentStage)}%` }}
          ></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Application ID:</span>
          <span className="font-medium text-gray-900">{application?.id}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Submitted:</span>
          <span className="font-medium text-gray-900">{application?.submittedDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Next Update:</span>
          <span className="font-medium text-primary">{application?.nextUpdate}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="User" size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">Consultant: {application?.consultant}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-500 hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={16} />
            </button>
            <button className="p-1 text-gray-500 hover:text-primary transition-colors">
              <Icon name="Phone" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusCard;