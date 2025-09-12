import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveSuccessCounter = () => {
  const [counters, setCounters] = useState({
    visasApproved: 4850,
    studentsPlaced: 3200,
    familiesReunited: 1450,
    countriesServed: 52
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('success-counter');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCounters(prev => ({
        visasApproved: prev?.visasApproved + Math.floor(Math.random() * 3),
        studentsPlaced: prev?.studentsPlaced + Math.floor(Math.random() * 2),
        familiesReunited: prev?.familiesReunited + Math.floor(Math.random() * 2),
        countriesServed: Math.min(prev?.countriesServed + (Math.random() > 0.95 ? 1 : 0), 60)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    {
      icon: 'FileCheck',
      label: 'Visas Approved',
      value: counters?.visasApproved,
      color: 'text-success',
      bgColor: 'bg-success/10',
      suffix: '+'
    },
    {
      icon: 'GraduationCap',
      label: 'Students Placed',
      value: counters?.studentsPlaced,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      suffix: '+'
    },
    {
      icon: 'Heart',
      label: 'Families Reunited',
      value: counters?.familiesReunited,
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
      suffix: '+'
    },
    {
      icon: 'Globe',
      label: 'Countries Served',
      value: counters?.countriesServed,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      suffix: ''
    }
  ];

  return (
    <section id="success-counter" className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Live Success Metrics</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Real Results, Real Impact
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Our success is measured by the dreams we help achieve. These numbers update in real-time as we continue to transform lives across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div
              key={stat?.label}
              className="bg-white rounded-xl p-6 text-center brand-shadow hover:brand-shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat?.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={stat?.icon} size={28} className={stat?.color} />
              </div>
              
              <div className="mb-2">
                <span className={`font-headline text-3xl lg:text-4xl font-bold ${stat?.color} block`}>
                  {isVisible ? stat?.value?.toLocaleString() : '0'}{stat?.suffix}
                </span>
              </div>
              
              <p className="font-body text-sm text-gray-600 font-medium">
                {stat?.label}
              </p>
              
              {index === 0 && (
                <div className="mt-3 flex items-center justify-center space-x-1">
                  <div className="w-1 h-1 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs text-success font-medium">+3 this hour</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-16 bg-white rounded-2xl p-8 brand-shadow">
          <h3 className="font-headline text-2xl font-bold text-primary text-center mb-8">
            Our Journey of Excellence
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <h4 className="font-headline text-lg font-bold text-primary mb-2">2008</h4>
              <p className="font-body text-sm text-gray-600">
                Founded with a vision to bridge Pakistan and global opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h4 className="font-headline text-lg font-bold text-primary mb-2">2015</h4>
              <p className="font-body text-sm text-gray-600">
                Achieved government certification and international recognition
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-white" />
              </div>
              <h4 className="font-headline text-lg font-bold text-primary mb-2">2024</h4>
              <p className="font-body text-sm text-gray-600">
                Celebrating 15+ years of transforming dreams into reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSuccessCounter;