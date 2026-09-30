import React from 'react';
import { Sparkles, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Badge } from '../../../components/ui/Badge';
import { ClinicImage } from '../../../components/ui/ClinicImage';
import { FadeUp } from '../../../components/motion/FadeUp';

export const InsideClinicSection = () => {
  return (
    <Section variant="default" spacing="default" id="inside-clinic">
      <Container>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Tour Our Erode Facility</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight">
              Inside Crown Dental &amp; Cosmetology Clinic
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
              Step into a calming, pristine clinical environment at Erode Fort. Every operatory, consultation room, and sterilization station is designed for patient comfort and surgical precision.
            </p>
          </FadeUp>
        </div>

        {/* Asymmetric Editorial Grid (Desktop) / Single-Column Sequence (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Featured Photo (7 cols) */}
          <div className="md:col-span-7 group rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/images/clinic/clinic-reception.jpg"
                alt="Reception &amp; Waiting Lounge at Crown Dental &amp; Cosmetology Clinic in Erode Fort"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D8B5] block mb-1">
                  Patient Reception Lounge
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  A Welcoming, Calm Atmosphere Built for Comfort
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  A Square Building, Vasuki Street, Erode Fort
                </p>
              </div>
            </div>
          </div>

          {/* Right Supporting Photo: Treatment Operatory (5 cols) */}
          <div className="md:col-span-5 group rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/images/clinic/treatment-room.jpg"
                alt="Modern dental operatory treatment suite at Crown Dental Erode"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D8B5] block mb-1">
                  Clinical Operatory
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Ergonomic Treatment Suite &amp; 3D Imaging
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Supporting Cards (4 cols each) */}
          <div className="md:col-span-4 group rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/images/clinic/clinic-exterior.jpg"
                alt="Crown Dental &amp; Cosmetology Clinic exterior storefront in Erode Fort"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8D8B5] block">
                  Ground Floor Facility
                </span>
                <h4 className="font-display font-bold text-sm text-white">
                  Ramp &amp; Wheelchair Accessible
                </h4>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/images/clinic/equipment.jpg"
                alt="European Class-B vacuum autoclave and 3D digital scanner equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8D8B5] block">
                  Safety Protocol
                </span>
                <h4 className="font-display font-bold text-sm text-white">
                  100% Class-B Sterilization &amp; 3D Scan
                </h4>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/images/clinic/clinic-interior.jpg"
                alt="Private doctor consultation room at Crown Dental Erode Fort"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8D8B5] block">
                  Private Consultation
                </span>
                <h4 className="font-display font-bold text-sm text-white">
                  Unhurried One-on-One Care Planning
                </h4>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
};

export default InsideClinicSection;
