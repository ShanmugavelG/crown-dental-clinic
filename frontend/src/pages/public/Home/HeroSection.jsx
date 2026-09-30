import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Phone, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Container } from '../../../components/ui/Container';
import { ClinicImage } from '../../../components/ui/ClinicImage';
import { clinicInfo } from '../../../data/clinicInfo';

// Smooth Apple-style cubic bezier easing
const smoothEase = [0.22, 1, 0.36, 1];

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] py-12 sm:py-16 lg:py-20 border-b border-[#E7E2D8] min-h-[600px] lg:min-h-[640px] flex items-center">
      
      {/* Subtle soft architectural background depth */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#EEF1F6]/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#E8D8B5]/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 100ms: Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: smoothEase }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold tracking-wider uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>CROWN DENTAL &amp; COSMETOLOGY CLINIC • ERODE FORT</span>
              </div>
            </motion.div>

            {/* 200ms: Large Headline */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
            >
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#172033] tracking-tight leading-[1.1]">
                Confident smiles. <br />
                <span className="text-[#18202F] font-bold">Thoughtful dental care.</span>
              </h1>
            </motion.div>

            {/* 350ms: Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
            >
              <p className="text-base sm:text-lg text-[#697386] max-w-xl leading-relaxed">
                Personalised dental and cosmetology care in Erode, designed around your comfort, individual needs and long-term oral health.
              </p>
            </motion.div>

            {/* Clinical Trust Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42, ease: smoothEase }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-[#18202F] font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Sub-Millimeter 3D Guided Implants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Computerized Zero-Pain Anesthesia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>European Class-B 100% Sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Transparent Itemized Care Plans</span>
              </div>
            </motion.div>

            {/* 500ms: CTA Buttons: Call to Book & Explore Treatments */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: smoothEase }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`}
                className="btn-book-nav px-7 text-sm sm:text-base font-semibold shadow-md"
                aria-label={`Call Crown Dental reception to book at ${clinicInfo.primaryPhone}`}
              >
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Call to Book</span>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer bg-white hover:bg-[#F7F4EE] text-[#18202F] border border-[#E7E2D8] hover:border-[#C6A15B] shadow-2xs rounded-xl px-6 min-h-[50px] text-sm sm:text-base gap-2"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </a>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55, ease: smoothEase }}
              className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#E7E2D8]"
            >
              <div className="flex items-center gap-1 text-[#C6A15B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-[#697386]">
                <strong className="text-[#18202F]">{clinicInfo.googleRating}★</strong> rated clinic across{' '}
                <strong className="text-[#18202F]">{clinicInfo.totalReviews}+</strong> verified Google patient reviews in Erode
              </div>
            </motion.div>

          </div>

          {/* Right Column: Real Crown Dental Photography & Restrained Metadata Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* 600ms: Image Reveals with subtle scale transition */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.6, ease: smoothEase }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <ClinicImage
                  src="/images/clinic/clinic-hero.jpg"
                  alt="Inside Crown Dental &amp; Cosmetology Clinic reception lounge in Erode Fort"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/12]"
                  priority={true}
                  showWatermark={true}
                  fallbackText="Crown Dental &amp; Cosmetology Clinic • Erode Fort Reception"
                />
              </div>

              {/* 800ms: Small Metadata Card Enters */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.8, ease: smoothEase }}
                className="absolute -bottom-5 -left-4 sm:-left-6 p-4 rounded-2xl bg-white shadow-xl border border-[#E7E2D8] flex items-center gap-3.5 max-w-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#172033] text-[#C6A15B] flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172033] leading-tight">
                    Specialist-Led Dental Care
                  </div>
                  <div className="text-[11px] text-[#697386] mt-0.5">
                    MDS Surgeons • Erode Fort
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Badge Right */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.85, ease: smoothEase }}
                className="absolute -top-4 -right-4 sm:-right-5 p-3.5 rounded-2xl bg-white shadow-lg border border-[#E7E2D8] hidden sm:flex items-center gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-xs font-bold text-[#172033]">
                  18,000+ Happy Patients
                </span>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
