import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ScanFace, 
  Layers, 
  Microscope, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

export const TechnologyPage = () => {
  const technologies = [
    {
      title: "3D Intraoral Optical Scanning (No Putty)",
      category: "Digital Impression",
      description: "Captures thousands of precision 3D optical measurements per second to model teeth in true color. Eliminates vomiting reflex and gooey impression materials entirely, speeding up aligner and crown fabrication.",
      benefits: ["5-minute instantaneous digital capture", "Sub-millimeter margin accuracy", "Immediate 3D simulation on chairside monitor"],
      icon: ScanFace
    },
    {
      title: "Full-Arch 3D CBCT (Cone Beam Computed Tomography)",
      category: "Volumetric Radiology",
      description: "Provides true 1:1 scale three-dimensional volumetric slices of the maxilla, mandible, and dental roots. Essential for nerve-sparing implant placement and impacted wisdom tooth removal.",
      benefits: ["Ultra-low radiation dosage", "Precise bone density measurements", "Surgical stent export capability"],
      icon: Layers
    },
    {
      title: "Dental Operating Microscope (25x Magnification)",
      category: "Micro-Endodontics",
      description: "Powerful Carl Zeiss optics provide intense coaxial illumination into pulp chambers. Enables doctors to treat curved roots, locate calcified canals, and remove separated instruments.",
      benefits: ["Preserves healthy tooth structure", "Minimally invasive micro-access", "Over 98% long-term tooth retention"],
      icon: Microscope
    },
    {
      title: "Computerized Local Anesthesia (The Wand / STA)",
      category: "Pain-Free Anesthesia",
      description: "A microprocessor continuously monitors tissue resistance to deliver anesthetic at a steady, painless rate below human neurological pain thresholds. Eliminates syringe fear for both children and adults.",
      benefits: ["Virtually zero injection sensation", "Targeted single-tooth numbness", "No drooping lip or slurred speech post-op"],
      icon: Cpu
    },
    {
      title: "Biolase Dental Diode Lasers",
      category: "Laser Surgery",
      description: "Harnesses targeted wavelengths to vaporize inflamed tissue and eradicate periodontal bacteria while cauterizing blood vessels instantly.",
      benefits: ["No scalpels or stitches required", "Immediate coagulation with zero bleeding", "Accelerated tissue regeneration"],
      icon: Sparkles
    },
    {
      title: "European Class-B Multi-Pulse Vacuum Autoclave",
      category: "Hospital Sterilization",
      description: "Fractionated vacuum cycles evacuate air from the chamber so saturated steam penetrates hollow instruments, handpieces, and surgical cassettes at 134°C under high pressure.",
      benefits: ["100% microbiological spore elimination", "Individually sealed surgical pouches", "Weekly independent spore test validation"],
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Header */}
      <section 
        className="bg-[#FAF7F0] border-b border-[#E7E2D8]"
        style={{
          paddingTop: 'clamp(56px, 7vw, 96px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)'
        }}
      >
        <Container>
          <div className="max-w-[1000px] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1F6] text-[#172033] border border-[#172033]/15 text-xs font-semibold uppercase tracking-wider">
              Clinical Infrastructure
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              State-of-the-Art Dental &amp; Laser Technology
            </h1>
            <p className="page-hero-description">
              We leverage digital diagnostic workflows, computerized pain-free anesthesia, and class-B hospital sterilization to deliver exceptional clinical accuracy.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 h-full flex flex-col justify-between bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg hover:border-[#C6A15B] transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#EEF1F6] text-[#172033] flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <Badge variant="navy" size="sm">{item.category}</Badge>
                    </div>

                    <h2 className="font-display font-bold text-xl sm:text-2xl text-[#18202F] mb-2">
                      {item.title}
                    </h2>

                    <p className="text-[#697386] text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 border-t border-[#E7E2D8] pt-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033]/60">Clinical Patient Advantages</h3>
                      <div className="space-y-1.5">
                        {item.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#18202F] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7E2D8] flex items-center justify-between">
                    <span className="text-xs text-[#172033] font-semibold">Active In-Operatory Standard</span>
                    <Link to="/book-appointment">
                      <Button variant="secondary" size="sm" icon={Calendar}>
                        Schedule Visit
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default TechnologyPage;
