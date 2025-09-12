import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      id: 1,
      title: "Visa Approvals",
      value: "2,847",
      change: "+12%",
      changeType: "increase",
      icon: "CheckCircle",
      color: "success",
      description: "Total successful visa applications"
    },
    {
      id: 2,
      title: "Success Rate",
      value: "95.2%",
      change: "+2.1%",
      changeType: "increase",
      icon: "TrendingUp",
      color: "primary",
      description: "Overall approval success rate"
    },
    {
      id: 3,
      title: "Avg Processing Time",
      value: "4.2 months",
      change: "-0.8 months",
      changeType: "decrease",
      icon: "Clock",
      color: "accent",
      description: "Average time from application to approval"
    },
    {
      id: 4,
      title: "Client Satisfaction",
      value: "4.9/5",
      change: "+0.2",
      changeType: "increase",
      icon: "Star",
      color: "warning",
      description: "Average client rating"
    },
    {
      id: 5,
      title: "Countries Served",
      value: "15+",
      change: "+3",
      changeType: "increase",
      icon: "Globe",
      color: "secondary",
      description: "Destination countries we serve"
    },
    {
      id: 6,
      title: "Active Clients",
      value: "1,234",
      change: "+156",
      changeType: "increase",
      icon: "Users",
      color: "primary",
      description: "Currently processing applications"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/20'
      },
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/20'
      },
      warning: {
        bg: 'bg-warning/10',
        text: 'text-warning',
        border: 'border-warning/20'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/20'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-headline font-bold text-xl text-gray-900 mb-1">
            Success Metrics
          </h2>
          <p className="text-gray-600 text-sm">
            Real-time statistics from our client success stories
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Icon name="RefreshCw" size={16} />
          <span>Updated 2 hours ago</span>
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats?.map((stat) => {
          const colors = getColorClasses(stat?.color);
          return (
            <div
              key={stat?.id}
              className={`p-4 rounded-lg border ${colors?.border} ${colors?.bg} hover:shadow-md transition-all duration-200`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${colors?.bg} border ${colors?.border}`}>
                  <Icon name={stat?.icon} size={20} className={colors?.text} />
                </div>
                <div className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                  stat?.changeType === 'increase' ?'bg-success/10 text-success' :'bg-primary/10 text-primary'
                }`}>
                  <Icon 
                    name={stat?.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                    size={12} 
                  />
                  <span>{stat?.change}</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {stat?.title}
                </div>
                <div className="text-xs text-gray-500">
                  {stat?.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Additional Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-primary mb-1">🇬🇧 UK</div>
            <div className="text-sm text-gray-600">Most Popular Destination</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-secondary mb-1">👨‍💻 IT</div>
            <div className="text-sm text-gray-600">Top Profession Category</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-accent mb-1">25-30</div>
            <div className="text-sm text-gray-600">Most Common Age Range</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;