/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import TurnkeySection from './components/TurnkeySection';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Shared so a service card's "Enquire" can preselect the project type in the contact form.
  const [projectType, setProjectType] = useState('');

  return (
    <div className="min-h-screen bg-cream text-ink [overflow-x:clip]">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <ServicesSection onPickType={setProjectType} />
        <TurnkeySection onPickType={setProjectType} />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection projectType={projectType} onProjectTypeChange={setProjectType} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
