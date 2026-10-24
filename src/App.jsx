import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TaxTools from './components/TaxTools';
import CaseStudies from './components/CaseStudies';
import Credentials from './components/Credentials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');

  // Sync theme to root element for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenConsultation = (serviceName = '') => {
    setModalService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Dynamic Ambient Background with Glass Orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb orb-top-left" />
        <div className="ambient-orb orb-center-right" />
        <div className="ambient-orb orb-bottom-left" />
        <div className="grid-overlay" />
      </div>

      {/* Main App Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenConsultation={handleOpenConsultation} 
      />

      {/* Main Sections - Streamlined for Demo */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenConsultation={handleOpenConsultation} />
        <Services onSelectService={handleOpenConsultation} />
        <TaxTools onOpenConsultation={handleOpenConsultation} />
        <CaseStudies onOpenConsultation={handleOpenConsultation} />
        <Credentials />
        <ContactSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Glass Modal */}
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
}
