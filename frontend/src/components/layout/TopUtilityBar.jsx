import React from 'react';
import { Phone, MapPin, Clock, ShieldAlert } from 'lucide-react';
import { clinicInfo } from '../../data/clinicInfo';

export const TopUtilityBar = () => {
  return (
    <div className="bg-[#0E1626] text-[#D8DEE8] border-b border-[#172033] select-none text-[11px] sm:text-xs tracking-[0.01em] font-medium z-30 relative h-[36px] flex items-center">
      <div className="nav-utility-inner px-4 sm:px-6">
        
        {/* Left: Location & Hours (Hidden on small mobile to avoid crowding) */}
        <div className="hidden sm:flex items-center gap-x-4">
          <div className="flex items-center gap-1.5 text-[#D8DEE8] hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span className="truncate max-w-[280px] lg:max-w-none">
              Vasuki St, Erode Fort, Erode - 638001
            </span>
          </div>
          <span className="hidden lg:inline text-[#2A364F]">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-[#A5B0C2]">
            <Clock className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span>Mon–Sat: 9:00 AM – 8:30 PM</span>
          </div>
        </div>

        {/* Mobile Left: Open Hours indicator */}
        <div className="sm:hidden flex items-center gap-1.5 text-[#A5B0C2]">
          <Clock className="w-3 h-3 text-[#C6A15B] shrink-0" />
          <span>Open Today: 9 AM – 8:30 PM</span>
        </div>

        {/* Right: Phone Numbers & Emergency */}
        <div className="flex items-center gap-x-3.5 sm:gap-x-4 ml-auto sm:ml-0">
          <a
            href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-[#D8DEE8] hover:text-[#C6A15B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B] rounded py-0.5"
            aria-label={`Call reception at ${clinicInfo.primaryPhone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span className="font-semibold text-white tracking-wide">{clinicInfo.primaryPhone}</span>
          </a>
          <span className="hidden md:inline-block text-[#2A364F]">|</span>
          <a
            href={`tel:${clinicInfo.emergencyPhone.replace(/\s+/g, '')}`}
            className="hidden md:flex items-center gap-1.5 text-[#E8D8B5] hover:text-[#C6A15B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B] rounded py-0.5"
            title="24/7 Dental Trauma & Severe Pain Emergency in Erode"
            aria-label={`Emergency hotline at ${clinicInfo.emergencyPhone}`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span>Emergency: <strong className="font-semibold text-white">{clinicInfo.emergencyPhone}</strong></span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopUtilityBar;
