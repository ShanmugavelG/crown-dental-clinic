import React from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ShieldAlert, 
  UserCheck 
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { clinicInfo } from '../../../data/clinicInfo';

export const BookAppointmentPage = () => {
  const phoneTel = `tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`;
  const emergencyTel = `tel:${clinicInfo.emergencyPhone.replace(/\s+/g, '')}`;

  return (
    <div className="w-full bg-[#F7F4EE] min-h-[calc(100vh-140px)] flex flex-col justify-center py-12 md:py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>Book Your Visit</span>
          </div>

          {/* Headline & Description */}
          <div className="space-y-4">
            <h1 className="page-hero-title font-display text-[#18202F] mx-auto">
              Ready to take the next step towards a healthier smile?
            </h1>
            <p className="page-hero-description mx-auto">
              For appointments, simply call our clinic. Our receptionist will help you find an available doctor and suitable appointment time.
            </p>
          </div>

          {/* Primary Centered Call Card */}
          <Card className="p-8 sm:p-10 bg-white border border-[#E7E2D8] shadow-md rounded-3xl max-w-lg mx-auto space-y-6">
            
            {/* Phone Emblem */}
            <div className="w-16 h-16 rounded-2xl bg-[#0E1626] text-[#C6A15B] flex items-center justify-center mx-auto shadow-sm border border-[#172033]">
              <Phone className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#697386]">
                Call Crown Dental
              </span>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#172033] tracking-tight">
                {clinicInfo.primaryPhone}
              </div>
            </div>

            {/* Direct Call Button */}
            <a 
              href={phoneTel}
              className="btn-book-nav w-full h-[52px] text-base shadow-md"
              aria-label={`Call Crown Dental at ${clinicInfo.primaryPhone}`}
            >
              <Phone className="w-4 h-4 text-[#C6A15B]" />
              <span>Call Now</span>
            </a>

            {/* Receptionist-assisted reassurance */}
            <div className="pt-4 border-t border-[#E7E2D8] text-xs text-[#697386] space-y-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Appointments are arranged directly through our reception team.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>No advance online payment required for clinic scheduling.</span>
              </div>
            </div>

          </Card>

          {/* Clinic Hours & Address Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            
            {/* Working Hours */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E7E2D8] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#172033] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Clinic Hours</span>
              </div>
              <p className="text-sm font-semibold text-[#18202F]">
                Monday – Saturday
              </p>
              <p className="text-xs text-[#697386]">
                {clinicInfo.workingHours.weekdays}
              </p>
            </div>

            {/* Emergency Hotline */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E7E2D8] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#172033] uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Dental Emergency</span>
              </div>
              <a 
                href={emergencyTel}
                className="text-sm font-semibold text-[#172033] hover:text-[#C6A15B] block"
              >
                {clinicInfo.emergencyPhone}
              </a>
              <p className="text-xs text-[#697386]">
                Severe pain &amp; trauma hotline
              </p>
            </div>

          </div>

          {/* Address notice */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#697386] max-w-md mx-auto">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span>Vasuki Street, Erode Fort, Erode – 638001</span>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BookAppointmentPage;
