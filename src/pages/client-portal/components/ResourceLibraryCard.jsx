import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibraryCard = ({ resource }) => {
  const getResourceIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'guide':
        return { name: 'BookOpen', color: 'text-primary' };
      case 'checklist':
        return { name: 'CheckSquare', color: 'text-success' };
      case 'video':
        return { name: 'Play', color: 'text-error' };
      case 'document':
        return { name: 'FileText', color: 'text-accent' };
      case 'webinar':
        return { name: 'Monitor', color: 'text-secondary' };
      default:
        return { name: 'File', color: 'text-gray-500' };
    }
  };

  const resourceIcon = getResourceIcon(resource?.type);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/30 transition-all duration-200 group">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-gray-50 group-hover:${resourceIcon?.color?.replace('text-', 'bg-')}/10 transition-colors`}>
          <Icon name={resourceIcon?.name} size={24} className={resourceIcon?.color} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {resource?.title}
            </h4>
            {resource?.isNew && (
              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full border border-success/30">
                New
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{resource?.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className={`text-xs font-medium ${resourceIcon?.color}`}>
                {resource?.type?.toUpperCase()}
              </span>
              <span className="text-xs text-gray-500">
                {resource?.duration || resource?.pages}
              </span>
              {resource?.downloadCount && (
                <span className="text-xs text-gray-500">
                  {resource?.downloadCount} downloads
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {resource?.type === 'video' || resource?.type === 'webinar' ? (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Play"
                  iconSize={14}
                >
                  Watch
                </Button>
              ) : (
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
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconSize={14}
                  >
                    Download
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {resource?.tags && (
            <div className="mt-3 flex flex-wrap gap-1">
              {resource?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibraryCard;