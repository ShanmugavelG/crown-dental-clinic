import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clinicInfo } from '../../data/clinicInfo';

const coreDepartments = [
  { title: 'General Dentistry', slug: 'general-dentistry', subtitle: 'Cleanings, fillings, root canals' },
  { title: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry', subtitle: 'Veneers, whitening, aesthetics' },
  { title: 'Dental Implants', slug: 'dental-implants', subtitle: 'Permanent titanium & zirconia' },
  { title: 'Orthodontics', slug: 'orthodontics', subtitle: 'Ceramic brackets, bite alignment' },
  { title: 'Clear Aligners', slug: 'clear-aligners', subtitle: 'Invisible, custom 3D aligners' },
  { title: 'Paediatric Dentistry', slug: 'paediatric-dentistry', subtitle: 'Gentle child dental care' },
  { title: 'Oral Surgery', slug: 'oral-surgery', subtitle: 'Wisdom teeth & jaw procedures' },
  { title: 'Cosmetology', slug: 'cosmetology', subtitle: 'Skin rejuvenation & facial aesthetics' },
];

export const PublicNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false);
  const [isMobileTreatmentsExpanded, setIsMobileTreatmentsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for compacting navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTreatmentsDropdownOpen(false);
    setIsMobileTreatmentsExpanded(false);
  }, [location.pathname, location.hash]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsTreatmentsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const phoneTel = `tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner px-4 sm:px-6">
        
        {/* Brand Logo & Clinic Name */}
        <Link 
          to="/" 
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-xl shrink-0"
          aria-label="Crown Dental & Cosmetology Clinic Erode - Home"
        >
          {/* 48x48 dark navy square, 14px radius, champagne gold crown */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[14px] bg-[#0E1626] flex items-center justify-center shadow-xs group-hover:scale-[1.02] transition-transform duration-300 shrink-0 border border-[#172033]/60">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C6A15B]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-display font-extrabold text-[19px] sm:text-[23px] text-[#172033] tracking-[-0.04em] leading-none">
              CROWN DENTAL
            </span>
            <span className="text-[9.5px] sm:text-[11px] font-semibold text-[#697386] tracking-[0.08em] uppercase leading-none mt-1 sm:mt-1.5 truncate">
              &amp; Cosmetology Clinic • Erode Fort
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (> 900px): Home | Treatments | About | Contact */}
        <div className="nav-desktop-group">
          <nav className="nav-links" aria-label="Main Navigation">
            {/* Home */}
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
            >
              Home
            </Link>

            {/* Treatments with Compact Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setIsTreatmentsDropdownOpen(false)}
            >
              <a
                href="/#treatments"
                onClick={() => setIsTreatmentsDropdownOpen(false)}
                className={`nav-link ${location.pathname.startsWith('/treatments') || location.hash === '#treatments' ? 'active' : ''}`}
                aria-expanded={isTreatmentsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Treatments</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isTreatmentsDropdownOpen ? 'rotate-180 text-[#C6A15B]' : 'text-[#697386]'}`} />
              </a>

              {/* Compact Dropdown Menu */}
              <AnimatePresence>
                {isTreatmentsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-1.5 z-50 w-[440px]"
                  >
                    <div className="bg-white rounded-2xl border border-[#E7E2D8] p-4 shadow-[0_20px_50px_rgba(14,22,38,0.10)]">
                      <div className="pb-2.5 mb-2 border-b border-[#E7E2D8] flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#697386] tracking-wider uppercase">
                          Clinical Specializations
                        </span>
                        <a
                          href="/#treatments"
                          onClick={() => setIsTreatmentsDropdownOpen(false)}
                          className="text-xs font-semibold text-[#172033] hover:text-[#C6A15B] flex items-center gap-1 transition-colors"
                        >
                          View All Categories <ArrowRight className="w-3 h-3 text-[#C6A15B]" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {coreDepartments.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/treatments/${item.slug}`}
                            onClick={() => setIsTreatmentsDropdownOpen(false)}
                            className="p-2.5 rounded-xl hover:bg-[#EEF1F6] transition-colors flex flex-col group text-left"
                          >
                            <span className="text-[13px] font-semibold text-[#18202F] group-hover:text-[#172033] transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-[#697386] mt-0.5 line-clamp-1">
                              {item.subtitle}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <a
              href="/#about"
              className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}
            >
              About
            </a>

            {/* Contact */}
            <a
              href="/#contact"
              className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTA: Call to Book */}
          <div className="flex items-center ml-2 xl:ml-4">
            <a 
              href={phoneTel} 
              className="btn-book-nav" 
              aria-label={`Call Crown Dental reception to book an appointment at ${clinicInfo.primaryPhone}`}
            >
              <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>Call to Book</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Controls (<= 900px) */}
        <div className="nav-mobile-group items-center gap-2">
          <a
            href={phoneTel}
            className="h-10 px-3.5 rounded-xl bg-[#172033] hover:bg-[#0E1626] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
            aria-label={`Call reception at ${clinicInfo.primaryPhone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Call</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#18202F] hover:bg-[#EEF1F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors shrink-0"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#172033]" /> : <Menu className="w-6 h-6 text-[#172033]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (<= 900px) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[70px] z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[70px] bg-[#0E1626]/40 backdrop-blur-xs"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[400px] bg-[#F7F4EE] border-l border-[#E7E2D8] h-[calc(100vh-70px)] overflow-y-auto px-5 py-6 flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-4">
                
                {/* Main Navigation links */}
                <div className="space-y-1">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      location.pathname === '/' && !location.hash ? 'bg-[#EEF1F6] text-[#172033]' : 'text-[#18202F] hover:bg-white'
                    }`}
                  >
                    Home
                  </Link>

                  {/* Treatments Accordion in Mobile Drawer */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setIsMobileTreatmentsExpanded(!isMobileTreatmentsExpanded)}
                      className={`w-full flex items-center justify-between min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                        location.pathname.startsWith('/treatments') || location.hash === '#treatments' ? 'bg-[#EEF1F6] text-[#172033]' : 'text-[#18202F] hover:bg-white'
                      }`}
                    >
                      <span>Treatments</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileTreatmentsExpanded ? 'rotate-180 text-[#C6A15B]' : 'text-[#697386]'}`} />
                    </button>

                    {isMobileTreatmentsExpanded && (
                      <div className="pt-1.5 pb-2 pl-3 pr-1 space-y-1 bg-white/60 rounded-xl my-1 border border-[#E7E2D8]">
                        <a
                          href="/#treatments"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-bold text-[#172033] hover:text-[#C6A15B] uppercase tracking-wider"
                        >
                          All Categories (Overview) →
                        </a>
                        {coreDepartments.map((dept) => (
                          <Link
                            key={dept.slug}
                            to={`/treatments/${dept.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm rounded-lg text-[#697386] hover:text-[#172033] hover:bg-[#EEF1F6]"
                          >
                            {dept.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="/#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-[#18202F] hover:bg-white transition-colors"
                  >
                    About
                  </a>

                  <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-[#18202F] hover:bg-white transition-colors"
                  >
                    Contact
                  </a>

                  <Link
                    to="/doctor-application"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#8C6D2D] hover:bg-white transition-colors"
                  >
                    Join as Doctor (Careers)
                  </Link>
                </div>

              </div>

              {/* Bottom Drawer Action: Call to Book */}
              <div className="pt-5 border-t border-[#E7E2D8] mt-6 space-y-3">
                <a
                  href={phoneTel}
                  className="btn-book-nav w-full shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#C6A15B]" />
                  <span>Call to Book: {clinicInfo.primaryPhone}</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PublicNavbar;
