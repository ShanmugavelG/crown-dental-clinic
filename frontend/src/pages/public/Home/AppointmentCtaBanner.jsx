import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { treatmentsData } from '../../../data/treatmentsData';
import { doctorsData } from '../../../data/doctorsData';
import { clinicInfo } from '../../../data/clinicInfo';

export const AppointmentCtaBanner = () => {
  const navigate = useNavigate();
  const [treatment, setTreatment] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      treatment,
      doctor: doctorId,
      date,
      name: patientName,
      phone: patientPhone
    }).toString();
    navigate(`/book-appointment?${query}`);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-[#0E1626] text-white overflow-hidden border-y border-slate-800">
      
      {/* Background subtle champagne depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172033] border border-white/10 text-[#E8D8B5] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Instant Appointment Scheduling</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready for a Healthier, Confident Smile?
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Reserve your consultation with our specialist dental surgeons and aesthetic team at Erode Fort.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 sm:p-8 text-[#18202F] shadow-2xl border border-[#E7E2D8]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                
                {/* Treatment Select */}
                <div>
                  <label htmlFor="home-treatment-select" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5">
                    1. Treatment Category
                  </label>
                  <select
                    id="home-treatment-select"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] bg-[#F7F4EE] text-sm text-[#18202F] focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  >
                    <option value="">Select Treatment...</option>
                    {treatmentsData.map((t) => (
                      <option key={t.id} value={t.slug}>{t.title}</option>
                    ))}
                  </select>
                </div>

                {/* Doctor Select */}
                <div>
                  <label htmlFor="home-doctor-select" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5">
                    2. Preferred Specialist
                  </label>
                  <select
                    id="home-doctor-select"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] bg-[#F7F4EE] text-sm text-[#18202F] focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  >
                    <option value="">Any Available Specialist</option>
                    {doctorsData.map((d) => (
                      <option key={d.id} value={d.id}>{d.name} ({d.designation.split('&')[0]})</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="home-date-select" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5">
                    3. Preferred Date
                  </label>
                  <input
                    id="home-date-select"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] bg-[#F7F4EE] text-sm text-[#18202F] focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  />
                </div>

                {/* Patient Name */}
                <div>
                  <label htmlFor="home-patient-name" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    id="home-patient-name"
                    type="text"
                    placeholder="e.g. Ramesh S."
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="home-patient-phone" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5">
                    Mobile Phone Number
                  </label>
                  <input
                    id="home-patient-phone"
                    type="tel"
                    placeholder="e.g. 98420 12345"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-end">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full bg-[#172033] hover:bg-[#0E1626] text-white shadow-md"
                    icon={Calendar}
                  >
                    Confirm &amp; Proceed
                  </Button>
                </div>

              </div>

              {/* Notice under form */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E7E2D8] text-xs text-[#697386]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Zero upfront payment required for online appointment request.</span>
                </div>
                <div>
                  Urgent pain? Call reception directly at{' '}
                  <a href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`} className="font-bold text-[#172033] hover:text-[#C6A15B] underline">
                    {clinicInfo.primaryPhone}
                  </a>
                </div>
              </div>

            </form>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
};

export default AppointmentCtaBanner;
