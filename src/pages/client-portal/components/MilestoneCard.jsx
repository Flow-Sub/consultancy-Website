import React from 'react';
import Icon from '../../../components/AppIcon';

const MilestoneCard = ({ milestone }) => {
  const getMilestoneIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'university_acceptance':
        return { name: 'GraduationCap', color: 'text-success' };
      case 'visa_approval':
        return { name: 'Shield', color: 'text-primary' };
      case 'document_verification':
        return { name: 'FileCheck', color: 'text-accent' };
      case 'interview_scheduled':
        return { name: 'Calendar', color: 'text-secondary' };
      case 'payment_received':
        return { name: 'CreditCard', color: 'text-brand-gold' };
      default:
        return { name: 'Star', color: 'text-warning' };
    }
  };

  const milestoneIcon = getMilestoneIcon(milestone?.type);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 relative overflow-hidden">
      {milestone?.isNew && (
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-success">
          <div className="absolute -top-8 -right-1 text-white text-xs font-bold transform rotate-45">
            NEW
          </div>
        </div>
      )}
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full bg-gray-50 ${milestoneIcon?.color?.replace('text-', 'bg-')}/10`}>
          <Icon name={milestoneIcon?.name} size={24} className={milestoneIcon?.color} />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{milestone?.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{milestone?.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{milestone?.date}</span>
            {milestone?.celebratory && (
              <div className="flex items-center space-x-1">
                <Icon name="Sparkles" size={16} className="text-warning" />
                <span className="text-xs font-medium text-warning">Celebration!</span>
              </div>
            )}
          </div>
          
          {milestone?.nextStep && (
            <div className="mt-3 p-2 bg-primary/5 rounded-lg">
              <p className="text-xs text-primary font-medium">Next Step:</p>
              <p className="text-xs text-gray-700">{milestone?.nextStep}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;