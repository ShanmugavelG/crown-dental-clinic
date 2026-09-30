import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Flame, 
  ShieldCheck, 
  HeartHandshake, 
  Activity,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { StaggerChildren, StaggerItem } from '../../../components/motion/StaggerChildren';
import { treatmentsData } from '../../../data/treatmentsData';

const iconMap = {
  Stethoscope,
  Sparkles,
  Smile,
  Flame,
  ShieldCheck,
  HeartHandshake,
  Activity,
  Sparkle: Sparkles
};

export const TreatmentCategoriesSection = () => {
  return (
    <Section variant="default" spacing="default" id="treatments">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider shadow-2xs">
                <span>Clinical Specializations</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
                What can we help you with?
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
                Comprehensive dental and facial aesthetics care tailored to your comfort, individual needs and long-term oral health.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="shrink-0">
            <Link to="/treatments">
              <Button variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
                View All 8 Treatments
              </Button>
            </Link>
          </FadeUp>
        </div>

        {/* Premium Treatment Tiles Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatmentsData.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <StaggerItem key={item.id}>
                <Link to={`/treatments/${item.slug}`} className="block h-full group focus:outline-none">
                  <div className="h-full flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#C6A15B] shadow-xs hover:shadow-md transition-all duration-300">
                    <div>
                      {/* Top Category and Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#EEF1F6] text-[#172033] flex items-center justify-center group-hover:bg-[#172033] group-hover:text-[#C6A15B] transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold text-[#8C6D2D] bg-[#F7F4EE] px-2.5 py-0.5 rounded-full border border-[#C6A15B]/30">
                          {item.category.split(' ')[0]}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="font-display font-bold text-lg text-[#172033] group-hover:text-[#0E1626] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#697386] leading-relaxed line-clamp-3 mb-5">
                        {item.shortDescription}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-[#18202F] mb-6 border-t border-[#E7E2D8]/60 pt-3">
                        {item.highlights.slice(0, 2).map((hl, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow Action */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#172033] group-hover:text-[#C6A15B] transition-colors pt-2">
                      <span className="group-hover:translate-x-1 transition-transform">Explore Procedure</span>
                      <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

      </Container>
    </Section>
  );
};

export default TreatmentCategoriesSection;
