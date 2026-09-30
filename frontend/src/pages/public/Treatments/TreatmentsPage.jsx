import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { StaggerChildren, StaggerItem } from '../../../components/motion/StaggerChildren';
import { treatmentService } from '../../../services/treatmentService';
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

export const TreatmentsPage = () => {
  const [treatments, setTreatments] = useState(treatmentsData);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const data = await treatmentService.getTreatments();
        if (data && data.length > 0) {
          setTreatments(data);
        }
      } catch (err) {
        console.warn('Could not fetch treatments from service', err);
      }
    };
    fetchTreatments();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Page Header */}
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
              Clinical Specializations
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Comprehensive Dental &amp; Cosmetology Treatments
            </h1>
            <p className="page-hero-description">
              Explore our 8 specialized dental departments. Each procedure is backed by modern 3D diagnostic technology, biological safety protocols, and personalized treatment plans.
            </p>
          </div>
        </Container>
      </section>

      {/* Treatments List */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((item) => {
              const Icon = iconMap[item.iconName] || Sparkles;
              return (
                <StaggerItem key={item.id}>
                  <Card className="p-8 h-full flex flex-col justify-between bg-white border-[#E7E2D8] hover:shadow-xl hover:border-[#C6A15B] transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#EEF1F6] text-[#172033] flex items-center justify-center">
                          <Icon className="w-7 h-7" />
                        </div>
                        <Badge variant="navy" size="sm">{item.category}</Badge>
                      </div>

                      <h2 className="font-display font-bold text-2xl text-[#18202F] mb-2">
                        {item.title}
                      </h2>

                      <p className="text-[#697386] text-sm leading-relaxed mb-6">
                        {item.shortDescription}
                      </p>

                      <div className="mb-6 space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033]/60">Key Highlights</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#18202F] font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between gap-4">
                      <Link to={`/treatments/${item.slug}`} className="flex-1">
                        <Button variant="secondary" size="md" className="w-full text-xs" icon={ArrowRight} iconPosition="right">
                          Detailed Procedure &amp; FAQs
                        </Button>
                      </Link>
                      <Link to={`/book-appointment?treatment=${item.slug}`} className="flex-1">
                        <Button variant="primary" size="md" className="w-full text-xs" icon={Calendar}>
                          Book This Care
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </Container>
      </Section>
    </div>
  );
};

export default TreatmentsPage;
