import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: 'Government Verification',
      brightpath: true,
      competitor1: false,
      competitor2: false,
      description: 'Official verification from Pakistani government authorities'
    },
    {
      feature: 'University Partnerships',
      brightpath: '150+ Official Partners',
      competitor1: '50+ Partners',
      competitor2: '30+ Partners',
      description: 'Direct partnerships with top-ranked universities'
    },
    {
      feature: 'Success Rate',
      brightpath: '98%',
      competitor1: '85%',
      competitor2: '78%',
      description: 'Visa approval success rate for Pakistani students'
    },
    {
      feature: 'Processing Time',
      brightpath: '45 days average',
      competitor1: '60-90 days',
      competitor2: '90+ days',
      description: 'Average time from application to visa approval'
    },
    {
      feature: 'Post-Arrival Support',
      brightpath: true,
      competitor1: false,
      competitor2: true,
      description: 'Continued support after reaching destination country'
    },
    {
      feature: 'Scholarship Assistance',
      brightpath: true,
      competitor1: true,
      competitor2: false,
      description: 'Help in securing scholarships and financial aid'
    },
    {
      feature: '24/7 Support',
      brightpath: true,
      competitor1: false,
      competitor2: false,
      description: 'Round-the-clock assistance via WhatsApp and phone'
    },
    {
      feature: 'Document Verification',
      brightpath: 'Free',
      competitor1: 'PKR 5,000',
      competitor2: 'PKR 8,000',
      description: 'Professional document verification service'
    },
    {
      feature: 'Mock Interview Training',
      brightpath: true,
      competitor1: true,
      competitor2: false,
      description: 'Comprehensive visa interview preparation'
    },
    {
      feature: 'Refund Policy',
      brightpath: '100% if visa rejected',
      competitor1: '50% refund',
      competitor2: 'No refund',
      description: 'Money-back guarantee policy'
    }
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={20} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={20} className="text-error mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-800">{value}</span>;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-headline font-bold text-primary mb-4">
          Why Choose BrightPath Over Others?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compare our services with other consultancies and see why thousands of Pakistani students trust BrightPath for their study abroad journey
        </p>
      </div>
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-headline font-bold text-gray-800">
                Features
              </th>
              <th className="text-center py-4 px-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-headline font-bold text-primary">BrightPath</div>
                    <div className="text-xs text-gray-500">Consultancy</div>
                  </div>
                </div>
              </th>
              <th className="text-center py-4 px-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <Icon name="Building" size={24} className="text-gray-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-600">Competitor A</div>
                    <div className="text-xs text-gray-400">Generic Service</div>
                  </div>
                </div>
              </th>
              <th className="text-center py-4 px-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <Icon name="Building" size={24} className="text-gray-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-600">Competitor B</div>
                    <div className="text-xs text-gray-400">Basic Service</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData?.map((row, index) => (
              <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-semibold text-gray-800">{row?.feature}</div>
                    <div className="text-xs text-gray-500 mt-1">{row?.description}</div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center bg-primary/5">
                  {renderValue(row?.brightpath)}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderValue(row?.competitor1)}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderValue(row?.competitor2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Award" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg">BrightPath Consultancy</h3>
              <p className="text-blue-100 text-sm">Premium Service</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-xs text-blue-100">Universities</div>
            </div>
          </div>
        </div>

        {comparisonData?.map((row, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">{row?.feature}</h4>
            <p className="text-sm text-gray-600 mb-3">{row?.description}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-primary/5 rounded">
                <div className="text-xs text-gray-500 mb-1">BrightPath</div>
                {renderValue(row?.brightpath)}
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Competitor A</div>
                {renderValue(row?.competitor1)}
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Competitor B</div>
                {renderValue(row?.competitor2)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="mt-8 bg-gradient-to-r from-brand-orange to-accent text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-headline font-bold mb-4">
          Experience the BrightPath Difference
        </h3>
        <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
          Join thousands of successful students who chose BrightPath for their study abroad journey. Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-white text-brand-orange hover:bg-gray-100"
            iconName="Calendar"
            iconPosition="left"
          >
            Book Free Consultation
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand-orange"
            iconName="Phone"
            iconPosition="left"
          >
            Call Now: +92-321-6935574
          </Button>
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="mt-6 flex flex-wrap justify-center items-center gap-6 py-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Shield" size={16} className="text-success" />
          <span>Government Verified</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Award" size={16} className="text-brand-gold" />
          <span>ISO Certified</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Users" size={16} className="text-primary" />
          <span>2,500+ Happy Students</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="Clock" size={16} className="text-accent" />
          <span>15 Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;