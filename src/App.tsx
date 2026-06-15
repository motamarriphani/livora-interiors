/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-beige-100 text-charcoal">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
