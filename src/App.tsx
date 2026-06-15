/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-beige-100 text-charcoal">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

