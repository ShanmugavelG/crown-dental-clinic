import React from 'react';
import { 
  Scan, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Heart,
  Award
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { FadeUp } from '../../../components/motion/FadeUp';

export const WhyCrownDentalSection = () => {
  const differentiators = [
    {
      number: "01",
      icon: Award,
      title: "Experienced Clinical Team",
      description: "Postgraduate dental surgeons (MDS) offering specialized, evidence-based clinical care.",
      tag: "Specialist Faculty"
    },
    {
      number: "02",
      icon: FileText,
      title: "Personalised Treatment Planning",
      description: "Clear diagnostic options and itemized treatment breakdowns tailored specifically to your clinical needs.",
      tag: "Transparent Care"
    },
    {
      number: "03",
      icon: Scan,
      title: "Modern Dental Technology",
      description: "Sub-millimeter 3D intraoral scans, computerized pain-free anesthesia, and European class-B sterilization.",
      tag: "Advanced Clinical Tech"
    },
    {
      number: "04",
      icon: Heart,
      title: "Patient-Centred Experience",
      description: "Unhurried, gentle consultations designed around your comfort, schedule, and peace of mind.",
      tag: "Unhurried Comfort"
    }
  ];

  return (
    <Section variant="surface" spacing="default" id="why-crown-dental">
      <Container>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] text-[#172033] border border-[#E7E2D8] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Why Erode Chooses Crown Dental</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
              Why Crown Dental
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Thoughtful care at every step.
            </p>
          </FadeUp>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={idx} delay={0.12 * idx}>
                <div className="p-8 rounded-3xl bg-[#F7F4EE] border border-[#E7E2D8] hover:border-[#C6A15B] hover:shadow-lg transition-all duration-300 relative group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-2xs border border-[#E7E2D8] flex items-center justify-center text-[#172033] group-hover:scale-105 group-hover:bg-[#172033] group-hover:text-[#C6A15B] transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="font-display font-extrabold text-3xl text-slate-300 group-hover:text-[#C6A15B] transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block text-[11px] font-semibold text-[#8C6D2D] bg-white px-2.5 py-0.5 rounded-full border border-[#C6A15B]/30 mb-2">
                        {item.tag}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#172033] group-hover:text-[#0E1626] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#697386] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E7E2D8] flex items-center gap-2 text-xs font-medium text-[#697386]">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                    <span>Follows standard sterilization and clinical hygiene protocols</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </Container>
    </Section>
  );
};

export default WhyCrownDentalSection;
