import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentTrackingCard = ({ payment }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return 'text-success bg-success/10 border-success/30';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/30';
      case 'overdue':
        return 'text-error bg-error/10 border-error/30';
      case 'partial':
        return 'text-accent bg-accent/10 border-accent/30';
      default:
        return 'text-gray-500 bg-gray-100 border-gray-300';
    }
  };

  const getPaymentIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'consultation':
        return 'MessageCircle';
      case 'service_fee':
        return 'Briefcase';
      case 'university_fee':
        return 'GraduationCap';
      case 'visa_fee':
        return 'Shield';
      case 'document_fee':
        return 'FileText';
      default:
        return 'CreditCard';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-gold/10 rounded-lg">
            <Icon name={getPaymentIcon(payment?.type)} size={20} className="text-brand-gold" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{payment?.description}</h4>
            <p className="text-sm text-gray-600">{payment?.type?.replace('_', ' ')}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(payment?.status)}`}>
          {payment?.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Amount</p>
          <p className="font-semibold text-lg text-gray-900">{payment?.amount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Due Date</p>
          <p className="font-medium text-gray-900">{payment?.dueDate}</p>
        </div>
      </div>
      {payment?.installments && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Payment Schedule:</p>
          <div className="space-y-2">
            {payment?.installments?.map((installment, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Installment {index + 1}: {installment?.date}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{installment?.amount}</span>
                  <Icon 
                    name={installment?.paid ? "CheckCircle" : "Clock"} 
                    size={16} 
                    className={installment?.paid ? "text-success" : "text-warning"} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Invoice: {payment?.invoiceNumber}
          </span>
          {payment?.paidDate && (
            <span className="text-sm text-gray-600">
              Paid: {payment?.paidDate}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            iconSize={14}
          >
            Receipt
          </Button>
          {payment?.status === 'pending' && (
            <Button
              variant="default"
              size="sm"
              iconName="CreditCard"
              iconSize={14}
            >
              Pay Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentTrackingCard;