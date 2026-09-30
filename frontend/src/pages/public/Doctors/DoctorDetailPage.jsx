import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall,
  GraduationCap
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { doctorService } from '../../../services/doctorService';
import { doctorsData } from '../../../data/doctorsData';

export const DoctorDetailPage = () => {
  const { id } = useParams();
  const initialDoctor = doctorsData.find((d) => d.id === id);
  const [doctor, setDoctor] = useState(initialDoctor);
  const [isLoading, setIsLoading] = useState(!initialDoctor);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const found = await doctorService.getDoctorById(id);
        if (found) {
          setDoctor(found);
        }
      } catch (err) {
        console.warn('Error fetching doctor details', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDoc();
  }, [id]);

  if (!doctor && !isLoading) {
    return <Navigate to="/doctors" replace />;
  }

  if (isLoading || !doctor) {
    return (
      <div className="w-full bg-[#F7F4EE] py-24 text-center">
        <Container>
          <div className="text-sm font-semibold text-[#697386]">Loading specialist profile...</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Header / Doctor Banner */}
      <section className="bg-[#FAF7F0] py-12 md:py-18 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <Link 
              to="/doctors" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172033] hover:text-[#C6A15B] transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Doctors</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="navy" size="md">{doctor.department}</Badge>
              <Badge variant="gold" size="md">{doctor.experience}</Badge>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#18202F] tracking-tight leading-tight">
              {doctor.name}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#8C6D2D]">
              {doctor.designation}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#697386]">
              <span className="flex items-center gap-1.5 font-medium text-[#18202F]">
                <GraduationCap className="w-4 h-4 text-[#C6A15B]" />
                {doctor.qualifications}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C6A15B]" />
                {doctor.timings}
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* Main Profile Details */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 4 Cols: Portrait & Quick Contact */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 bg-white border border-[#E7E2D8] shadow-md rounded-3xl space-y-6 sticky top-28">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#EEF1F6] border border-[#E7E2D8]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Link to={`/book-appointment?doctor=${doctor.id}`} className="block w-full">
                    <Button variant="primary" size="lg" className="w-full" icon={Calendar}>
                      Call to Book Appointment
                    </Button>
                  </Link>

                  <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E7E2D8] text-center space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#697386]">
                      Clinic Consultation Hours
                    </span>
                    <p className="text-xs font-semibold text-[#18202F]">
                      {doctor.timings}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right 8 Cols: Biography, Clinical Focus & Credentials */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Clinical Biography */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E2D8] shadow-xs space-y-4">
                <h2 className="font-display font-bold text-2xl text-[#18202F]">
                  About {doctor.name}
                </h2>
                <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {/* Specializations & Clinical Focus */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E2D8] shadow-xs space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D2D]">Specialty Areas</span>
                  <h2 className="font-display font-bold text-2xl text-[#18202F]">
                    Areas of Clinical Expertise
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.specializations.map((spec, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E7E2D8] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-sm text-[#18202F]">{spec}</h3>
                        <p className="text-xs text-[#697386] mt-0.5">Advanced hospital-grade protocol followed.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Credentials & Ethics */}
              <div className="bg-[#FAF7F0] p-8 rounded-3xl border border-[#E7E2D8] flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-[#C6A15B] shrink-0" />
                <div className="space-y-1 text-xs sm:text-sm text-[#697386]">
                  <h3 className="font-bold text-[#18202F] text-base">
                    Verified State Dental Council Registration
                  </h3>
                  <p>
                    All diagnostic evaluations, surgical implants, and cosmetic treatments are performed under strict Tamil Nadu Dental Council ethics and sterile European Class-B autoclave safety standards.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
};

export default DoctorDetailPage;
