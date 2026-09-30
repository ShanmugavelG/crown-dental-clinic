import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Award,
  Sparkles
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { doctorsData } from '../../../data/doctorsData';
import { clinicInfo } from '../../../data/clinicInfo';

export const DoctorsSection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const featuredDoctors = doctorsData.slice(0, 3);
  const phoneTel = `tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`;

  return (
    <Section variant="surface" spacing="default" id="doctors">
      <Container>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider">
              <span>Clinical Faculty</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
              Our Clinical Team
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Experienced clinicians. Personalised care.
            </p>
          </FadeUp>
        </div>

        {/* 3 Featured Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {featuredDoctors.map((doc, idx) => (
            <FadeUp key={doc.id} delay={0.1 * idx}>
              <div className="h-full flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#C6A15B] shadow-xs hover:shadow-md transition-all duration-300 group">
                <div>
                  
                  {/* Doctor Portrait */}
                  <div className="relative aspect-[4/5] bg-[#EEF1F6] overflow-hidden">
                    <img
                      src={doc.image}
                      alt={`${doc.name} - ${doc.designation}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-semibold text-[#172033] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E7E2D8] shadow-xs">
                        {doc.experience}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#172033] group-hover:text-[#0E1626] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#8C6D2D] mt-0.5">
                        {doc.designation}
                      </p>
                    </div>

                    <p className="text-xs text-[#697386] leading-relaxed line-clamp-2">
                      {doc.bio}
                    </p>
                  </div>

                </div>

                {/* Card Action: View Profile Modal */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl border border-[#E7E2D8] text-xs font-semibold text-[#172033] hover:bg-[#EEF1F6] hover:border-[#C6A15B] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Doctor Profile Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E1626]/50 backdrop-blur-xs animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E7E2D8] relative overflow-hidden max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="doctor-modal-name"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[#697386] hover:text-[#172033] hover:bg-[#EEF1F6] transition-colors"
                aria-label="Close Doctor Profile"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Doctor Headshot & Overview */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#EEF1F6] border border-[#E7E2D8] shrink-0">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 id="doctor-modal-name" className="font-display font-bold text-xl text-[#172033]">
                      {selectedDoctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C6D2D] mt-0.5">
                      {selectedDoctor.designation}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-mono text-[#697386] bg-[#F7F4EE] px-2 py-0.5 rounded border border-[#E7E2D8]">
                      Reg: {selectedDoctor.regNumber}
                    </span>
                  </div>
                </div>

                {/* Qualifications & Experience */}
                <div className="space-y-3 border-t border-[#E7E2D8] pt-4 text-xs sm:text-sm text-[#18202F]">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#697386] uppercase tracking-wider block">
                      Postgraduate Qualifications
                    </span>
                    <p className="font-medium text-[#18202F]">
                      {selectedDoctor.qualifications}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <span className="text-[11px] font-bold text-[#697386] uppercase tracking-wider block">
                      Clinical Focus &amp; Biography
                    </span>
                    <p className="text-[#697386] leading-relaxed">
                      {selectedDoctor.bio}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E7E2D8] flex items-start gap-2 text-xs text-[#697386] mt-2">
                    <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>Clinic Consultation Schedule: {selectedDoctor.schedule}</span>
                  </div>
                </div>

                {/* Call to Book with Doctor */}
                <div className="pt-4 border-t border-[#E7E2D8]">
                  <a
                    href={phoneTel}
                    className="btn-book-nav w-full h-[48px] text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#C6A15B]" />
                    <span>Call to Book with {selectedDoctor.name.split(' ')[1] || 'Doctor'}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </Container>
    </Section>
  );
};

export default DoctorsSection;
