import React from 'react';
import { CheckCircle2, MapPin, Award, Heart, Phone } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { FadeUp } from '../../../components/motion/FadeUp';
import { clinicInfo } from '../../../data/clinicInfo';

export const AboutSection = () => {
  const phoneTel = `tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`;

  const facts = [
    {
      title: "Based in Erode Fort",
      description: "Conveniently situated at A Square Building, Vasuki Street with ground-floor patient accessibility."
    },
    {
      title: "Dental + Cosmetology Care",
      description: "Dual specialization harmonizing surgical oral health with natural facial aesthetics under one roof."
    },
    {
      title: "Patient-Focused Approach",
      description: "Unhurried appointments, zero intimidation, and clear itemized pricing before any procedure."
    }
  ];

  return (
    <Section variant="default" spacing="default" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Interior Photo (5 cols) */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="rounded-3xl overflow-hidden shadow-md border-4 border-white bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/clinic/clinic-interior.jpg"
                    alt="Inside Crown Dental &amp; Cosmetology Clinic treatment operatory in Erode"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                    <span className="font-semibold text-[#E8D8B5] block">Crown Dental Operatory</span>
                    <span className="text-slate-200 text-[11px]">Vasuki St, Erode Fort</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Editorial Overview & 3 Facts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider shadow-2xs">
                <span>About Crown Dental</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight">
                A clinic built around care, precision and trust.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
                Founded in Erode, Crown Dental &amp; Cosmetology Clinic brings together 16 years of clinical excellence, specialized postgraduate surgical credentials, and modern painless diagnostic technologies. Every treatment plan is discussed openly, transparently, and without pressure.
              </p>
            </FadeUp>

            {/* 3 Concise Facts */}
            <div className="space-y-3 pt-1">
              {facts.map((fact, idx) => (
                <FadeUp key={idx} delay={0.25 + 0.08 * idx}>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7E2D8]">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#172033]">
                        {fact.title}
                      </h3>
                      <p className="text-xs text-[#697386] mt-0.5 leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Call to Book Action */}
            <FadeUp delay={0.45}>
              <div className="pt-2">
                <a
                  href={phoneTel}
                  className="btn-book-nav inline-flex h-[48px] px-6 text-sm"
                >
                  <Phone className="w-4 h-4 text-[#C6A15B]" />
                  <span>Call to Book: {clinicInfo.primaryPhone}</span>
                </a>
              </div>
            </FadeUp>

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
