import React from 'react';
import { 
  ScanFace, 
  Layers, 
  ShieldCheck, 
  Heart,
  Cpu
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { FadeUp } from '../../../components/motion/FadeUp';

export const TechnologySection = () => {
  const techItems = [
    {
      icon: ScanFace,
      title: "Digital Diagnostics",
      description: "Clearer 3D imaging for better-informed, precise treatment planning."
    },
    {
      icon: Layers,
      title: "Modern Treatment Planning",
      description: "Thoughtful planning tailored specifically to each patient's anatomical needs."
    },
    {
      icon: ShieldCheck,
      title: "Clinical Hygiene",
      description: "European class-B autoclave sterilization and rigorous infection-control protocols."
    },
    {
      icon: Heart,
      title: "Patient Comfort",
      description: "Computerized painless anesthesia and a calmer experience from consultation to treatment."
    }
  ];

  return (
    <Section variant="surface" spacing="compact" id="technology" className="py-12 sm:py-16">
      <Container>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider">
              <span>Clinical Infrastructure</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
              Modern Dentistry
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
              Technology that supports precise, comfortable care.
            </p>
          </FadeUp>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={idx} delay={0.08 * idx}>
                <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] hover:border-[#C6A15B] shadow-2xs hover:shadow-xs transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] text-[#172033] flex items-center justify-center mb-4 shrink-0">
                    <Icon className="w-6 h-6 text-[#C6A15B]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#172033] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#697386] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </Container>
    </Section>
  );
};

export default TechnologySection;
