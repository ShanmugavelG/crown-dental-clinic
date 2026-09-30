import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { StaggerChildren, StaggerItem } from '../../../components/motion/StaggerChildren';
import { testimonialsData } from '../../../data/galleryAndReviews';

export const PatientStoriesSection = () => {
  return (
    <Section variant="default" spacing="default" id="testimonials">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider">
                Patient Experiences
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight">
                Trusted by Thousands Across Erode and Western Tamil Nadu
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
                Read authentic feedback from patients who entrusted their smiles, dental health, and family dental care to Crown Dental.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="shrink-0">
            <Link to="/patient-stories">
              <Button variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
                Read All Patient Stories
              </Button>
            </Link>
          </FadeUp>
        </div>

        {/* Testimonials Cards Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <StaggerItem key={item.id}>
              <div className="h-full flex flex-col justify-between p-7 bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#C6A15B] shadow-xs hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  
                  {/* Rating Stars & Treatment Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C6A15B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#172033] bg-[#EEF1F6] px-2.5 py-0.5 rounded-full border border-[#172033]/15">
                      {item.treatment}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-[#18202F] text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Patient Signature */}
                <div className="pt-6 mt-6 border-t border-[#E7E2D8]/70 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-[#172033] text-sm">{item.name}</h3>
                    <p className="text-[#697386]">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-[#8C6D2D] bg-[#F7F4EE] px-2 py-0.5 rounded-md border border-[#C6A15B]/30 block">
                      {item.doctor}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">{item.date}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Container>
    </Section>
  );
};

export default PatientStoriesSection;
