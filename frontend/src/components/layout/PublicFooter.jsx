import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Container } from '../ui/Container';
import { clinicInfo } from '../../data/clinicInfo';

export const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1626] text-[#AEB8C8] text-sm border-t border-[#172033] pt-14 lg:pt-16 pb-6">
      <Container>
        
        {/* Main 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-8 md:gap-10 lg:gap-14 pb-8">
          
          {/* Column 1: Brand & Concise Identity */}
          <div className="space-y-3.5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#172033] border border-white/10 flex items-center justify-center text-white shadow-sm shrink-0">
                <svg className="w-5 h-5 fill-current text-[#C6A15B]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-wide block leading-tight">
                  CROWN DENTAL
                </span>
                <span className="text-[11px] font-semibold text-[#C6A15B] tracking-wider uppercase block">
                  &amp; Cosmetology Clinic
                </span>
              </div>
            </Link>

            <p className="text-[#AEB8C8] text-xs sm:text-sm leading-relaxed max-w-xs">
              Thoughtful dental and cosmetology care in Erode.
            </p>
          </div>

          {/* Column 2: Essential Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#AEB8C8] hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-[#AEB8C8] hover:text-white transition-colors duration-200">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#AEB8C8] hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#AEB8C8] hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Essential Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em]">
              Contact
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#D8DEE8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <address className="not-italic leading-snug">
                  Vasuki Street, Erode Fort<br />
                  Erode – 638001
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a 
                  href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`} 
                  className="hover:text-white transition-colors duration-200"
                >
                  {clinicInfo.primaryPhone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Mon – Sat &bull; 9:00 AM – 8:30 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="border-t border-white/10 pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#AEB8C8]/80">
          <div>
            &copy; {currentYear} Crown Dental &amp; Cosmetology Clinic. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#AEB8C8]/60">
            <span>Privacy Policy</span>
            <span>&bull;</span>
            <span>Terms of Care</span>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default PublicFooter;
