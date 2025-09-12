import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveSuccessCounter from './components/LiveSuccessCounter';
import SmartServiceFinder from './components/SmartServiceFinder';
import FeaturedSuccessStories from './components/FeaturedSuccessStories';
import PartnerUniversities from './components/PartnerUniversities';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <LiveSuccessCounter />
        <SmartServiceFinder />
        <FeaturedSuccessStories />
        <PartnerUniversities />
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default Homepage;