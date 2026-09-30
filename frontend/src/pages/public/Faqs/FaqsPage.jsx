import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Calendar, Phone } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { faqsData } from '../../../data/galleryAndReviews';
import { clinicInfo } from '../../../data/clinicInfo';

export const FaqsPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const extendedFaqs = [
    ...faqsData,
    {
      question: "Are clear aligners suitable for all age groups?",
      answer: "Clear aligners work effectively for teens (once permanent second molars have erupted) and adults of any age. Mild to complex malocclusions including spacing, crowding, and crossbites can be corrected discreetly."
    },
    {
      question: "How long is recovery after dental implant surgery?",
      answer: "Because we use flapless 3D computer-guided keyhole surgery, tissue trauma is minimal. Most patients resume regular work within 24 to 48 hours with minimal swelling."
    },
    {
      question: "What safety precautions are taken for paediatric dental patients?",
      answer: "Our pedodontic suite employs the Tell-Show-Do method to desensitize children. We use child-sized digital sensors, lead aprons with thyroid collars, and biocompatible remineralizing agents."
    },
    {
      question: "What should I do during a dental emergency in Erode?",
      answer: "In cases of severe toothache, broken crowns, or dental trauma, call our 24/7 emergency hotline at " + clinicInfo.emergencyPhone + " immediately. Keep knocked-out teeth moist in milk or saliva and reach the clinic within 60 minutes."
    }
  ];

  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Header */}
      <section className="bg-[#FAF7F0] py-14 md:py-20 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F6] text-[#172033] border border-[#172033]/15 text-xs font-semibold uppercase tracking-wider">
              Patient Guidance &amp; Policies
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#18202F] tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Find transparent answers regarding treatment procedures, pain management, sterilization protocols, insurance coverage, and appointments.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs List */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container size="sm">
          <div className="space-y-4">
            {extendedFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <Card 
                  key={idx} 
                  className={`overflow-hidden bg-white transition-all duration-200 ${isOpen ? 'border-[#C6A15B] shadow-md ring-1 ring-[#C6A15B]/30' : 'border-[#E7E2D8]'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-[#C6A15B]' : 'text-[#697386]'}`} />
                      <h2 className="font-display font-bold text-base sm:text-lg text-[#18202F]">
                        {faq.question}
                      </h2>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-[#EEF1F6] text-[#172033]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-[#697386] leading-relaxed pl-14 border-t border-[#E7E2D8] mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-[#172033] text-white text-center space-y-4 border border-[#C6A15B]/30 shadow-xl">
            <h3 className="font-display font-bold text-xl text-white">Have a Specific Clinical Question?</h3>
            <p className="text-[#E8D8B5] text-xs sm:text-sm max-w-md mx-auto">
              Our clinical front desk and duty dentists are available to assist you with any concerns.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`}>
                <Button variant="accent" size="md" icon={Phone}>
                  Call Reception Desk
                </Button>
              </a>
              <Link to="/book-appointment">
                <Button variant="secondary" size="md" icon={Calendar} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FaqsPage;
