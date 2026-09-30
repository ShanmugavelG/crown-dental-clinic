import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Microscope, 
  Calendar, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { clinicInfo } from '../../../data/clinicInfo';

import { ClinicImage } from '../../../components/ui/ClinicImage';

export const AboutPage = () => {
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
              About Crown Dental Clinic
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Compassionate, Modern Dental and Cosmetology Care
            </h1>
            <p className="page-hero-description">
              Crown Dental &amp; Cosmetology Clinic was established in Erode to provide thoughtful, evidence-based dental care and facial aesthetics with absolute patient comfort.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy & Story */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[#8C6D2D] font-bold text-xs uppercase tracking-wider">Our Clinical Ethos</span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18202F]">
                  Dentistry Reimagined Around the Patient
                </h2>
              </div>

              <p className="text-[#18202F] text-sm sm:text-base leading-relaxed">
                Traditional dental visits often carry memories of cold chairs, sharp instruments, and mysterious procedures. At Crown Dental, every element of our clinic design — from acoustic comfort and warm ivory lighting to chairside digital 3D explanations — is designed to keep you relaxed and informed.
              </p>

              <p className="text-[#697386] text-sm sm:text-base leading-relaxed">
                We believe that a natural tooth is a biological masterpiece. Our specialists prioritize conservative, tooth-preserving techniques, intervening only with evidence-based diagnostics and biocompatible restorations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E7E2D8] text-xs sm:text-sm">
                <div>
                  <div className="font-display font-extrabold text-xl text-[#172033]">Specialist Care</div>
                  <div className="text-[#697386]">Dedicated MDS Surgeons</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl text-[#172033]">Modern Suites</div>
                  <div className="text-[#697386]">Digital 3D Diagnostics</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EEF1F6] aspect-[4/3]">
                <ClinicImage
                  src="/images/clinic/treatment-room.jpg"
                  alt="Interior of Crown Dental & Cosmetology Clinic in Erode Fort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Facilities & Quality Commitments */}
      <Section variant="surface" spacing="default" className="bg-white border-t border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18202F]">
              Our Clinical Standards &amp; Facilities
            </h2>
            <p className="text-[#697386] text-sm sm:text-base">
              Accredited and equipped to deliver tertiary-level dental and aesthetic surgery safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicInfo.facilities.map((fac, idx) => (
              <Card key={idx} className="p-6 bg-[#FAF7F0] border border-[#E7E2D8] flex items-start gap-3 hover:border-[#C6A15B] transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#18202F]">{fac}</span>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/book-appointment">
              <Button variant="primary" size="lg" icon={Calendar}>
                Schedule a Visit to Our Clinic
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;
