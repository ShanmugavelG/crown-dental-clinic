import React from 'react';
import { HeroSection } from './HeroSection';
import { QuickBookingStrip } from './QuickBookingStrip';
import { TreatmentCategoriesSection } from './TreatmentCategoriesSection';
import { WhyCrownDentalSection } from './WhyCrownDentalSection';
import { DoctorsSection } from './DoctorsSection';
import { SmileGalleryPreview } from './SmileGalleryPreview';
import { TechnologySection } from './TechnologySection';
import { AboutSection } from './AboutSection';
import { LocationSection } from './LocationSection';
import { StaffAccessSection } from './StaffAccessSection';

export const HomePage = () => {
  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Call to Book Quick Strip */}
      <QuickBookingStrip />

      {/* 3. Treatment Categories */}
      <TreatmentCategoriesSection />

      {/* 4. Why Crown Dental */}
      <WhyCrownDentalSection />

      {/* 5. Clinical Team */}
      <DoctorsSection />

      {/* 6. Real Smiles (Smile Gallery) */}
      <SmileGalleryPreview />

      {/* 7. Modern Dentistry (Technology) */}
      <TechnologySection />

      {/* 8. About Crown Dental */}
      <AboutSection />

      {/* 9. Location + Contact */}
      <LocationSection />

      {/* 10. Staff Access (immediately above footer) */}
      <StaffAccessSection />
    </div>
  );
};

export default HomePage;
