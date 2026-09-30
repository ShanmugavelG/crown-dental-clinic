import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { TopUtilityBar } from './TopUtilityBar';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { clinicInfo } from '../../data/clinicInfo';

export const PublicLayout = () => {
  const location = useLocation();
  const isBookingPage = location.pathname === '/book-appointment';

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#18202F] relative selection:bg-[#E8D8B5] selection:text-[#172033]">
      <TopUtilityBar />
      <PublicNavbar />
      
      <main className="flex-1 w-full pb-16 md:pb-0">
        <Outlet />
      </main>

      <PublicFooter />

      {/* Mobile Sticky Single Call to Book Bar */}
      {!isBookingPage && (
        <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E7E2D8] px-4 py-2.5 shadow-lg flex items-center">
          <a
            href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#172033] hover:bg-[#0E1626] text-white text-xs font-semibold shadow-sm transition-colors min-h-[44px]"
            aria-label={`Call Crown Dental reception to book at ${clinicInfo.primaryPhone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Call to Book: {clinicInfo.primaryPhone}</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default PublicLayout;
