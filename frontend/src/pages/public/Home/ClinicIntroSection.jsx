import React from 'react';
import { HeartHandshake, ShieldCheck, Microscope, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { FadeUp } from '../../../components/motion/FadeUp';
import { StaggerChildren, StaggerItem } from '../../../components/motion/StaggerChildren';

export const ClinicIntroSection = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Patient-Centered Comfort",
      text: "We replace clinical apprehension with warmth, transparent communication, and empathetic gentle care designed around your comfort."
    },
    {
      icon: Microscope,
      title: "Microscopic Dental Precision",
      text: "Employing high-magnification dental microscopy and 3D digital imaging to preserve natural tooth structure conservatively."
    },
    {
      icon: ShieldCheck,
      title: "Zero Compromise Sterilization",
      text: "Rigorous European Class-B multi-cycle vacuum autoclaves and bio-sealed individual patient kits for absolute infection prevention."
    },
    {
      icon: Sparkles,
      title: "Integrated Facial Harmony",
      text: "Harmonizing dental aesthetics with facial cosmetology so your smile, lips, and facial contours complement each other naturally."
    }
  ];

  return (
    <Section variant="surface" spacing="default" id="intro">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider">
              About Crown Dental Clinic
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight">
              A New Standard in Thoughtful Dentistry &amp; Facial Aesthetics in Erode
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Founded on the belief that dental care should be calm, transparent, and restorative, Crown Dental brings together specialist dental surgeons and facial aesthetic cosmetologists under one roof at Erode Fort. We take time to understand your goals and deliver predictable, lifelong outcomes.
            </p>
          </FadeUp>
        </div>

        {/* 4 Pillars Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="h-full p-6 bg-[#F7F4EE] rounded-2xl border border-[#E7E2D8] hover:border-[#C6A15B] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#172033] border border-[#E7E2D8] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-6 h-6 text-[#172033]" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#172033] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#697386] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
};

export default ClinicIntroSection;
