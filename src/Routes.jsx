import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PartnerUniversities from './pages/partner-universities';
import ContactConsultation from './pages/contact-consultation';
import SuccessStories from './pages/success-stories';
import StudyVisaServices from './pages/study-visa-services';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/partner-universities" element={<PartnerUniversities />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/study-visa-services" element={<StudyVisaServices />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;