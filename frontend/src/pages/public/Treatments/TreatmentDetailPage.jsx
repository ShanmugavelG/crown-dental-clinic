import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { treatmentService } from '../../../services/treatmentService';
import { treatmentsData } from '../../../data/treatmentsData';
import { clinicInfo } from '../../../data/clinicInfo';

export const TreatmentDetailPage = () => {
  const { slug } = useParams();
  const initialTreatment = treatmentsData.find((t) => t.slug === slug);
  const [treatment, setTreatment] = useState(initialTreatment);
  const [isLoading, setIsLoading] = useState(!initialTreatment);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const found = await treatmentService.getTreatmentBySlug(slug);
        if (found) {
          setTreatment(found);
        }
      } catch (err) {
        console.warn('Error fetching treatment detail', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  if (!treatment && !isLoading) {
    return <Navigate to="/treatments" replace />;
  }

  if (isLoading || !treatment) {
    return (
      <div className="w-full bg-[#F7F4EE] py-24 text-center">
        <Container>
          <div className="text-sm font-semibold text-[#697386]">Loading treatment details...</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      
      {/* Detail Hero */}
      <section className="bg-[#FAF7F0] py-12 md:py-18 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-4xl space-y-4">
            
            <Link 
              to="/treatments" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172033] hover:text-[#C6A15B] transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Treatments</span>
            </Link>

            <div className="flex items-center gap-3">
              <Badge variant="navy" size="md">{treatment.category}</Badge>
              <Badge variant="gold" size="md">Clinical Protocol Verified</Badge>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#18202F] tracking-tight leading-tight">
              {treatment.title}
            </h1>

            <p className="text-base sm:text-lg text-[#697386] leading-relaxed max-w-3xl">
              {treatment.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to={`/book-appointment?treatment=${treatment.slug}`}>
                <Button variant="primary" size="lg" icon={Calendar}>
                  Call Clinic to Schedule
                </Button>
              </Link>
              <a 
                href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`} 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#E7E2D8] bg-white text-[#18202F] text-sm font-semibold hover:border-[#172033] transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#C6A15B]" />
                <span>Call {clinicInfo.primaryPhone}</span>
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* Main Details Grid */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Overview, Clinical Steps, Tech & Recovery */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview & Clinical Candidacy */}
              <div className="space-y-4 bg-white p-8 rounded-3xl border border-[#E7E2D8]">
                <h2 className="font-display font-bold text-2xl text-[#18202F]">
                  Clinical Overview &amp; Candidacy
                </h2>
                <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
                  {treatment.fullDescription}
                </p>
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033] mb-3">
                    Who Is an Ideal Candidate?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {treatment.candidacy.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#18202F]">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Clinical Procedure */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#8C6D2D] uppercase tracking-wider">Step-by-Step Journey</span>
                  <h2 className="font-display font-bold text-2xl text-[#18202F]">
                    Treatment Protocol
                  </h2>
                </div>

                <div className="space-y-4">
                  {treatment.procedureSteps.map((step, idx) => (
                    <Card key={idx} className="p-6 bg-white border border-[#E7E2D8] flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF1F6] text-[#172033] flex items-center justify-center font-display font-bold text-base shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-base text-[#18202F]">
                          {step.stepTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recovery & Post-Op Guidelines */}
              <div className="bg-white p-8 rounded-3xl border border-[#E7E2D8] space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C6A15B]" />
                  <h2 className="font-display font-bold text-xl text-[#18202F]">
                    Recovery Timeline &amp; Post-Op Care
                  </h2>
                </div>
                <p className="text-sm text-[#697386] leading-relaxed">
                  {treatment.recovery}
                </p>
              </div>

              {/* FAQ Accordion / Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#172033]" />
                  <h2 className="font-display font-bold text-2xl text-[#18202F]">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 bg-white rounded-2xl border border-[#E7E2D8] space-y-2">
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#18202F]">
                        {faq.q}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Quick Specs & Consultation Card */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Summary Card */}
              <Card className="p-6 bg-white border border-[#E7E2D8] space-y-6 sticky top-28 shadow-sm">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#18202F]">Treatment Fast Facts</h3>
                  <p className="text-xs text-[#697386]">Clinical guideline metrics</p>
                </div>

                <div className="space-y-4 text-xs divide-y divide-[#E7E2D8]">
                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[#697386]">Estimated Duration:</span>
                    <span className="font-bold text-[#18202F]">{treatment.duration}</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#697386]">Sedation / Anesthesia:</span>
                    <span className="font-bold text-[#18202F]">{treatment.anesthesia}</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#697386]">Specialized Equipment:</span>
                    <span className="font-bold text-[#18202F] text-right max-w-[180px]">{treatment.equipment}</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-[#697386]">Price Guidance:</span>
                    <span className="font-bold text-[#8C6D2D]">{treatment.pricingIndicator}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E2D8] space-y-3">
                  <Link to={`/book-appointment?treatment=${treatment.slug}`} className="block w-full">
                    <Button variant="primary" size="md" className="w-full text-xs" icon={Calendar}>
                      Schedule Consultation
                    </Button>
                  </Link>

                  <p className="text-[11px] text-center text-[#697386] leading-tight">
                    Personalized smile evaluation &bull; Digital 3D scans conducted in clinic
                  </p>
                </div>

              </Card>

            </div>

          </div>
        </Container>
      </Section>

    </div>
  );
};

export default TreatmentDetailPage;
