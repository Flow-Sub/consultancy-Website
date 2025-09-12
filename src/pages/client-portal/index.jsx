import React, { useState, useEffect } from 'react';

import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ApplicationStatusCard from './components/ApplicationStatusCard';
import DocumentUploadCard from './components/DocumentUploadCard';
import MilestoneCard from './components/MilestoneCard';
import ConsultantMessageCard from './components/ConsultantMessageCard';
import ResourceLibraryCard from './components/ResourceLibraryCard';
import AppointmentCard from './components/AppointmentCard';
import PaymentTrackingCard from './components/PaymentTrackingCard';
import FamilyApplicationCard from './components/FamilyApplicationCard';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);

  // Mock client data
  const clientData = {
    name: "Sarah Ahmed",
    email: "sarah.ahmed@email.com",
    clientId: "BP2024-001",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    memberSince: "January 2024",
    totalApplications: 3,
    completedSteps: 12,
    upcomingDeadlines: 2
  };

  // Mock applications data
  const applications = [
    {
      id: "BP-UK-2024-001",
      type: "Study Visa - UK",
      destination: "University of Manchester",
      status: "In Progress",
      currentStage: "visa_filing",
      submittedDate: "15 Jan 2024",
      nextUpdate: "25 Jan 2024",
      consultant: "Dr. Michael Roberts"
    },
    {
      id: "BP-CA-2024-002",
      type: "Study Visa - Canada",
      destination: "University of Toronto",
      status: "Under Review",
      currentStage: "university_application",
      submittedDate: "20 Jan 2024",
      nextUpdate: "30 Jan 2024",
      consultant: "Ms. Jennifer Wilson"
    }
  ];

  // Mock documents data
  const documents = [
    {
      id: 1,
      name: "Passport Copy",
      description: "Clear scan of passport bio page",
      status: "uploaded",
      required: true,
      deadline: "30 Jan 2024",
      notes: "Document verified and approved by our team"
    },
    {
      id: 2,
      name: "Academic Transcripts",
      description: "Official university transcripts",
      status: "approved",
      required: true,
      deadline: "25 Jan 2024"
    },
    {
      id: 3,
      name: "English Language Test",
      description: "IELTS/TOEFL test results",
      status: "required",
      required: true,
      deadline: "28 Jan 2024",
      notes: "Please upload your official test results. Minimum IELTS score: 6.5"
    },
    {
      id: 4,
      name: "Statement of Purpose",
      description: "Personal statement for university application",
      status: "pending",
      required: true,
      deadline: "02 Feb 2024"
    }
  ];

  // Mock milestones data
  const milestones = [
    {
      id: 1,
      type: "university_acceptance",
      title: "University Acceptance Letter Received!",
      description: "Congratulations! You\'ve been accepted to University of Manchester for MSc Computer Science program.",
      date: "22 Jan 2024",
      celebratory: true,
      isNew: true,
      nextStep: "Proceed with visa application and document submission"
    },
    {
      id: 2,
      type: "document_verification",
      title: "Documents Verified",
      description: "All submitted documents have been verified and approved by our expert team.",
      date: "18 Jan 2024",
      celebratory: false,
      isNew: false
    },
    {
      id: 3,
      type: "payment_received",
      title: "Service Fee Payment Confirmed",
      description: "Thank you for your payment. Your application process is now active.",
      date: "15 Jan 2024",
      celebratory: false,
      isNew: false
    }
  ];

  // Mock consultant and messages data
  const consultant = {
    name: "Dr. Michael Roberts",
    role: "Senior Immigration Consultant",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    isOnline: true
  };

  const [messages, setMessages] = useState([
    {
      sender: "Dr. Michael Roberts",
      content: "Hi Sarah! I have great news about your University of Manchester application. The acceptance letter has arrived!",
      timestamp: "10:30 AM"
    },
    {
      sender: "You",
      content: "That\'s amazing! Thank you so much for your help. What are the next steps?",
      timestamp: "10:32 AM"
    },
    {
      sender: "Dr. Michael Roberts",
      content: "Now we need to proceed with your visa application. I'll send you the checklist of required documents shortly.",
      timestamp: "10:35 AM"
    }
  ]);

  // Mock resources data
  const resources = [
    {
      id: 1,
      type: "guide",
      title: "UK Student Visa Application Guide",
      description: "Complete step-by-step guide for UK Tier 4 student visa application process",
      duration: "15 min read",
      isNew: true,
      tags: ["UK", "Student Visa", "Guide"]
    },
    {
      id: 2,
      type: "checklist",
      title: "Pre-Departure Checklist",
      description: "Essential items and tasks to complete before traveling to the UK",
      pages: "3 pages",
      isNew: false,
      tags: ["UK", "Pre-departure", "Checklist"]
    },
    {
      id: 3,
      type: "video",
      title: "University Accommodation Guide",
      description: "Video guide on finding and securing student accommodation in Manchester",
      duration: "12 minutes",
      isNew: true,
      downloadCount: 45,
      tags: ["UK", "Accommodation", "Manchester"]
    },
    {
      id: 4,
      type: "webinar",
      title: "Life in UK: Cultural Adaptation",
      description: "Live webinar on adapting to British culture and academic environment",
      duration: "45 minutes",
      isNew: false,
      tags: ["UK", "Culture", "Webinar"]
    }
  ];

  // Mock appointments data
  const appointments = [
    {
      id: 1,
      title: "Visa Interview Preparation",
      type: "interview_prep",
      date: "28 Jan 2024",
      time: "2:00 PM",
      duration: "1 hour",
      consultant: "Dr. Michael Roberts",
      status: "confirmed",
      location: "Online Meeting",
      meetingLink: "https://meet.brightpath.com/room/123",
      agenda: "Practice common visa interview questions and review your application documents"
    },
    {
      id: 2,
      title: "Document Review Session",
      type: "document_review",
      date: "30 Jan 2024",
      time: "11:00 AM",
      duration: "30 minutes",
      consultant: "Ms. Jennifer Wilson",
      status: "pending",
      location: "BrightPath Office, Lahore",
      agenda: "Review and finalize remaining documents for visa application"
    }
  ];

  // Mock payments data
  const payments = [
    {
      id: 1,
      description: "UK Study Visa Service Package",
      type: "service_fee",
      amount: "PKR 150,000",
      status: "paid",
      dueDate: "15 Jan 2024",
      paidDate: "14 Jan 2024",
      invoiceNumber: "BP-INV-2024-001"
    },
    {
      id: 2,
      description: "University Application Fee",
      type: "university_fee",
      amount: "£50",
      status: "pending",
      dueDate: "30 Jan 2024",
      invoiceNumber: "BP-INV-2024-002",
      installments: [
        { date: "30 Jan 2024", amount: "£50", paid: false }
      ]
    },
    {
      id: 3,
      description: "Visa Application Fee",
      type: "visa_fee",
      amount: "£363",
      status: "pending",
      dueDate: "05 Feb 2024",
      invoiceNumber: "BP-INV-2024-003"
    }
  ];

  // Mock family applications data
  const familyApplications = [
    {
      id: 1,
      name: "Ahmed Hassan",
      relationship: "spouse",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      applicationType: "Dependent Visa - UK",
      applicationId: "BP-UK-DEP-2024-001",
      status: "in progress",
      progress: 65,
      submittedDate: "20 Jan 2024",
      consultant: "Dr. Michael Roberts",
      nextSteps: [
        "Submit marriage certificate",
        "Complete biometric appointment",
        "Attend visa interview"
      ]
    },
    {
      id: 2,
      name: "Zara Ahmed",
      relationship: "child",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      applicationType: "Child Dependent Visa - UK",
      applicationId: "BP-UK-CHILD-2024-001",
      status: "not started",
      progress: 0,
      consultant: "Dr. Michael Roberts",
      nextSteps: [
        "Gather required documents",
        "Schedule initial consultation",
        "Begin application process"
      ]
    }
  ];

  const handleSendMessage = (message) => {
    const newMessage = {
      sender: "You",
      content: message,
      timestamp: new Date()?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    
    // Simulate consultant response
    setTimeout(() => {
      const consultantResponse = {
        sender: "Dr. Michael Roberts",
        content: "Thank you for your message. I\'ll review this and get back to you shortly.",
        timestamp: new Date()?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, consultantResponse]);
    }, 2000);
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'applications', name: 'Applications', icon: 'FileText' },
    { id: 'documents', name: 'Documents', icon: 'Upload' },
    { id: 'milestones', name: 'Milestones', icon: 'Trophy' },
    { id: 'messages', name: 'Messages', icon: 'MessageCircle' },
    { id: 'resources', name: 'Resources', icon: 'BookOpen' },
    { id: 'appointments', name: 'Appointments', icon: 'Calendar' },
    { id: 'payments', name: 'Payments', icon: 'CreditCard' },
    { id: 'family', name: 'Family', icon: 'Users' }
  ];

  useEffect(() => {
    // Mock notifications
    setNotifications([
      {
        id: 1,
        type: 'success',
        title: 'University Acceptance!',
        message: 'You have been accepted to University of Manchester',
        time: '2 hours ago',
        isNew: true
      },
      {
        id: 2,
        type: 'warning',
        title: 'Document Required',
        message: 'Please upload your English language test results',
        time: '1 day ago',
        isNew: true
      }
    ]);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {clientData?.name}!</h2>
                  <p className="text-primary-foreground/80">
                    Track your immigration journey and stay updated on your applications
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary-foreground/80">Client ID</p>
                  <p className="font-semibold">{clientData?.clientId}</p>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">{clientData?.totalApplications}</h3>
                <p className="text-sm text-gray-600">Active Applications</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="p-3 bg-success/10 rounded-full w-fit mx-auto mb-3">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                </div>
                <h3 className="font-semibold text-gray-900">{clientData?.completedSteps}</h3>
                <p className="text-sm text-gray-600">Completed Steps</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="p-3 bg-warning/10 rounded-full w-fit mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-warning" />
                </div>
                <h3 className="font-semibold text-gray-900">{clientData?.upcomingDeadlines}</h3>
                <p className="text-sm text-gray-600">Upcoming Deadlines</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-3">
                  <Icon name="Calendar" size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900">Jan 2024</h3>
                <p className="text-sm text-gray-600">Member Since</p>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h3>
                <div className="space-y-4">
                  {applications?.slice(0, 2)?.map((application) => (
                    <ApplicationStatusCard key={application?.id} application={application} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Milestones</h3>
                <div className="space-y-4">
                  {milestones?.slice(0, 2)?.map((milestone) => (
                    <MilestoneCard key={milestone?.id} milestone={milestone} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
              <Button variant="default" iconName="Plus" iconPosition="left">
                New Application
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {applications?.map((application) => (
                <ApplicationStatusCard key={application?.id} application={application} />
              ))}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Document Management</h2>
              <Button variant="default" iconName="Upload" iconPosition="left">
                Upload Document
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {documents?.map((document) => (
                <DocumentUploadCard key={document?.id} document={document} />
              ))}
            </div>
          </div>
        );

      case 'milestones':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Achievement Milestones</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {milestones?.map((milestone) => (
                <MilestoneCard key={milestone?.id} milestone={milestone} />
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <ConsultantMessageCard
              consultant={consultant}
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Resource Library</h2>
              <Button variant="outline" iconName="Search" iconPosition="left">
                Search Resources
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resources?.map((resource) => (
                <ResourceLibraryCard key={resource?.id} resource={resource} />
              ))}
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <Button variant="default" iconName="Calendar" iconPosition="left">
                Schedule Meeting
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {appointments?.map((appointment) => (
                <AppointmentCard key={appointment?.id} appointment={appointment} />
              ))}
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Payment Tracking</h2>
              <Button variant="outline" iconName="Download" iconPosition="left">
                Download Statement
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {payments?.map((payment) => (
                <PaymentTrackingCard key={payment?.id} payment={payment} />
              ))}
            </div>
          </div>
        );

      case 'family':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Family Applications</h2>
              <Button variant="default" iconName="UserPlus" iconPosition="left">
                Add Family Member
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {familyApplications?.map((familyMember) => (
                <FamilyApplicationCard key={familyMember?.id} familyMember={familyMember} />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Client Portal Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center space-x-4">
                <img
                  src={clientData?.avatar}
                  alt={clientData?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Client Portal</h1>
                  <p className="text-sm text-gray-600">
                    Welcome back, {clientData?.name} • {clientData?.clientId}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 text-gray-500 hover:text-primary transition-colors relative">
                    <Icon name="Bell" size={20} />
                    {notifications?.filter(n => n?.isNew)?.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
                    )}
                  </button>
                </div>
                
                {/* Profile Menu */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" iconName="Settings" iconSize={16} />
                  <Button variant="outline" iconName="LogOut" iconSize={16}>
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 gap-1">
          {tabs?.slice(0, 4)?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex flex-col items-center py-2 px-1 text-xs transition-colors ${
                activeTab === tab?.id
                  ? 'text-primary' :'text-gray-500'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span className="mt-1">{tab?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Spacing */}
      <div className="lg:hidden h-16"></div>
    </div>
  );
};

export default ClientPortal;