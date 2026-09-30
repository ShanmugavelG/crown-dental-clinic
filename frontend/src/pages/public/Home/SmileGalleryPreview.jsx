import React from 'react';
import { Sparkles, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { FadeUp } from '../../../components/motion/FadeUp';
import { smileGalleryData } from '../../../data/galleryAndReviews';

export const SmileGalleryPreview = () => {
  return (
    <Section variant="default" spacing="default" id="gallery">
      <Container>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Real Smiles</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
              Real Smiles
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Small changes. Meaningful confidence. Real patient journeys documented with verified clinical consent.
            </p>
          </FadeUp>
        </div>

        {/* Compact Editorial 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {smileGalleryData.map((item, idx) => (
            <FadeUp key={item.id} delay={0.1 * idx}>
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E2D8] hover:border-[#C6A15B] shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-[#8C6D2D] bg-[#FAF7F0] px-2.5 py-0.5 rounded-full border border-[#C6A15B]/30">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#16A34A] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Consent</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#172033] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#697386] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E2D8] space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-[#697386]">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span>Duration: <strong className="text-[#18202F]">{item.duration}</strong></span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#18202F] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>Outcome: {item.results}</span>
                  </div>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default SmileGalleryPreview;
