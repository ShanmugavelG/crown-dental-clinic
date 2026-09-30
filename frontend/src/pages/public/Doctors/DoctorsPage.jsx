import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { StaggerChildren, StaggerItem } from '../../../components/motion/StaggerChildren';
import { doctorService } from '../../../services/doctorService';
import { doctorsData } from '../../../data/doctorsData';

export const DoctorsPage = () => {
  const [doctors, setDoctors] = useState(doctorsData);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await doctorService.getDoctors();
        if (data && data.length > 0) {
          setDoctors(data);
        }
      } catch (err) {
        console.warn('Could not fetch doctors from service', err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Controlled Hero Section */}
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
              Clinical Team &amp; Specialists
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Experienced Dental Surgeons &amp; Aesthetic Experts
            </h1>
            <p className="page-hero-description">
              Our clinical faculty represents top-tier dental institutions with specialized postgraduate credentials (MDS). We provide specialized, evidence-based care in Erode.
            </p>
          </div>
        </Container>
      </section>

      {/* Doctors Grid */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <StaggerItem key={doc.id}>
                <Card className="p-6 sm:p-8 h-full flex flex-col justify-between bg-white border border-[#E7E2D8] hover:shadow-xl hover:border-[#C6A15B] transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                    
                    {/* Doctor Photo */}
                    <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-[4/5] bg-[#EEF1F6] border border-[#E7E2D8]">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="sm:col-span-7 space-y-3">
                      <div className="space-y-1">
                        <Badge variant="navy" size="sm">{doc.role}</Badge>
                        <h2 className="font-display font-bold text-xl text-[#18202F] pt-1">
                          {doc.name}
                        </h2>
                        <p className="text-xs font-semibold text-[#8C6D2D]">
                          {doc.qualifications}
                        </p>
                      </div>

                      <p className="text-[#697386] text-xs leading-relaxed line-clamp-3">
                        {doc.bio}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-[#E7E2D8] text-xs">
                        <div className="flex items-center gap-2 text-[#18202F]">
                          <Award className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                          <span className="font-semibold">{doc.experience} Clinical Practice</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#697386]">
                          <Clock className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                          <span>{doc.timings}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#172033]/60 mb-1.5">
                          Specializations
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {doc.specializations.slice(0, 3).map((spec, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E7E2D8] text-[11px] text-[#18202F] font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-[#E7E2D8] flex items-center justify-between gap-4">
                    <Link to={`/doctors/${doc.id}`} className="flex-1">
                      <Button variant="secondary" size="md" className="w-full text-xs" icon={ArrowRight} iconPosition="right">
                        View Profile &amp; Bio
                      </Button>
                    </Link>
                    <Link to={`/book-appointment?doctor=${doc.id}`} className="flex-1">
                      <Button variant="primary" size="md" className="w-full text-xs" icon={Calendar}>
                        Call to Book
                      </Button>
                    </Link>
                  </div>

                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </div>
  );
};

export default DoctorsPage;
