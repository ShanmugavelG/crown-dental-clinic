import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

export const StaffAccessSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E1626] border-t border-[#172033] py-12 px-5 lg:py-9 lg:px-0 text-white min-h-[160px] lg:min-h-[180px] lg:max-h-[210px] flex items-center">
      {/* Subtle radial champagne background depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-0"
        style={{
          background: 'radial-gradient(circle at 85% 50%, rgba(198, 161, 91, 0.12) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C6A15B]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
          
          {/* Left Column: Eyebrow, Heading & Short Description */}
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#C6A15B]">
                Staff Access
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-tight">
              Clinic team portal
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Secure clinical workspace and front-desk management for the Crown Dental team.
            </p>
          </div>

          {/* Right Column: Role Indicators & Primary Portal CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-3.5 sm:gap-5 shrink-0">
            
            {/* Role Indicator Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-medium text-[#D8DEE8] tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                Doctor
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-medium text-[#D8DEE8] tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                Receptionist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-medium text-[#D8DEE8] tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                Admin
              </span>
            </div>

            {/* Portal Login CTA */}
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-[#F7F4EE] text-[#172033] font-semibold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all duration-200 group w-full sm:w-auto min-h-[44px]"
              aria-label="Access Crown Dental Staff Portal Login"
            >
              <Lock className="w-4 h-4 text-[#172033]" />
              <span>Staff Portal Login</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default StaffAccessSection;
