import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentUploadCard = ({ document }) => {
  const [isUploading, setIsUploading] = useState(false);

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'uploaded':
        return { name: 'CheckCircle', color: 'text-success' };
      case 'pending':
        return { name: 'Clock', color: 'text-warning' };
      case 'required':
        return { name: 'AlertCircle', color: 'text-error' };
      case 'approved':
        return { name: 'Shield', color: 'text-success' };
      default:
        return { name: 'FileText', color: 'text-gray-500' };
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  const statusIcon = getStatusIcon(document?.status);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <Icon name={statusIcon?.name} size={20} className={statusIcon?.color} />
          <div>
            <h4 className="font-medium text-gray-900">{document?.name}</h4>
            <p className="text-sm text-gray-600">{document?.description}</p>
          </div>
        </div>
        {document?.required && (
          <span className="px-2 py-1 bg-error/10 text-error text-xs rounded-full border border-error/30">
            Required
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-medium ${statusIcon?.color}`}>
            {document?.status}
          </span>
          {document?.deadline && (
            <span className="text-sm text-gray-600">
              Due: {document?.deadline}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {document?.status === 'uploaded' || document?.status === 'approved' ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                iconName="Eye"
                iconSize={14}
              >
                View
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Download"
                iconSize={14}
              >
                Download
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              loading={isUploading}
              iconName="Upload"
              iconSize={14}
              onClick={handleUpload}
            >
              Upload
            </Button>
          )}
        </div>
      </div>
      {document?.notes && (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">{document?.notes}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentUploadCard;