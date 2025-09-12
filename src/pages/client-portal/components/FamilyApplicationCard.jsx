import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FamilyApplicationCard = ({ familyMember }) => {
  const getRelationshipIcon = (relationship) => {
    switch (relationship?.toLowerCase()) {
      case 'spouse':
        return 'Heart';
      case 'child':
        return 'Baby';
      case 'parent':
        return 'Users';
      case 'sibling':
        return 'User';
      default:
        return 'Users';
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'text-success bg-success/10 border-success/30';
      case 'in progress':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/30';
      case 'not started':
        return 'text-gray-500 bg-gray-100 border-gray-300';
      default:
        return 'text-gray-500 bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={familyMember?.avatar}
              alt={familyMember?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full border border-gray-200">
              <Icon name={getRelationshipIcon(familyMember?.relationship)} size={12} className="text-primary" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{familyMember?.name}</h4>
            <p className="text-sm text-gray-600">{familyMember?.relationship}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(familyMember?.status)}`}>
          {familyMember?.status}
        </span>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Application Type:</span>
          <span className="font-medium text-gray-900">{familyMember?.applicationType}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Application ID:</span>
          <span className="font-medium text-gray-900">{familyMember?.applicationId}</span>
        </div>
        {familyMember?.submittedDate && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Submitted:</span>
            <span className="font-medium text-gray-900">{familyMember?.submittedDate}</span>
          </div>
        )}
      </div>
      {familyMember?.progress && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{familyMember?.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-500"
              style={{ width: `${familyMember?.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      {familyMember?.nextSteps && (
        <div className="mb-4 p-3 bg-primary/5 rounded-lg">
          <p className="text-sm font-medium text-primary mb-1">Next Steps:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            {familyMember?.nextSteps?.map((step, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="ArrowRight" size={12} className="text-primary mt-1 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="User" size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">
            Consultant: {familyMember?.consultant}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Eye"
            iconSize={14}
          >
            View Details
          </Button>
          {familyMember?.status === 'not started' && (
            <Button
              variant="outline"
              size="sm"
              iconName="Play"
              iconSize={14}
            >
              Start Application
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyApplicationCard;