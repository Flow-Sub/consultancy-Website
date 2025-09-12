import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AppointmentCard = ({ appointment }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'text-success bg-success/10 border-success/30';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/30';
      case 'completed':
        return 'text-gray-600 bg-gray-100 border-gray-300';
      case 'cancelled':
        return 'text-error bg-error/10 border-error/30';
      default:
        return 'text-gray-500 bg-gray-100 border-gray-300';
    }
  };

  const getTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'consultation':
        return 'MessageCircle';
      case 'document_review':
        return 'FileCheck';
      case 'interview_prep':
        return 'Users';
      case 'follow_up':
        return 'Phone';
      default:
        return 'Calendar';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name={getTypeIcon(appointment?.type)} size={20} className="text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{appointment?.title}</h4>
            <p className="text-sm text-gray-600">{appointment?.type?.replace('_', ' ')}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment?.status)}`}>
          {appointment?.status}
        </span>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Calendar" size={16} />
          <span>{appointment?.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Clock" size={16} />
          <span>{appointment?.time} ({appointment?.duration})</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="User" size={16} />
          <span>With {appointment?.consultant}</span>
        </div>
        {appointment?.location && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="MapPin" size={16} />
            <span>{appointment?.location}</span>
          </div>
        )}
      </div>
      {appointment?.agenda && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-1">Agenda:</p>
          <p className="text-sm text-gray-600">{appointment?.agenda}</p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {appointment?.meetingLink && (
            <Button
              variant="outline"
              size="sm"
              iconName="Video"
              iconSize={14}
            >
              Join Meeting
            </Button>
          )}
          {appointment?.status === 'confirmed' && (
            <Button
              variant="ghost"
              size="sm"
              iconName="Calendar"
              iconSize={14}
            >
              Add to Calendar
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {appointment?.status === 'pending' && (
            <>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                iconSize={14}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Edit"
                iconSize={14}
              >
                Reschedule
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;