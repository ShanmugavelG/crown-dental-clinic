import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Car, 
  Accessibility, 
  Bus 
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Button } from '../../../components/ui/Button';
import { FadeUp } from '../../../components/motion/FadeUp';
import { clinicInfo } from '../../../data/clinicInfo';

export const LocationSection = () => {
  return (
    <Section variant="surface" spacing="default" id="contact">
      <Container>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] border border-[#E7E2D8] text-[#172033] text-xs font-semibold uppercase tracking-wider">
              <span>Location &amp; Hours</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#172033] tracking-tight uppercase">
              Visit Crown Dental
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#697386] text-base sm:text-lg leading-relaxed">
              Vasuki Street, Erode Fort, Erode – 638001 • Mon–Sat: 9:00 AM – 8:30 PM
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Location & Direction Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Contact Details (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#F7F4EE] border border-[#E7E2D8] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div>
                <h3 className="font-display font-bold text-xl text-[#172033] mb-1">
                  Crown Dental &amp; Cosmetology Clinic
                </h3>
                <p className="text-xs font-semibold text-[#8C6D2D] tracking-wide uppercase">
                  Central Erode Fort Operatory &amp; Facial Aesthetics
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E2D8] text-[#172033] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#697386] mb-0.5">Address</h4>
                  <p className="text-sm text-[#18202F] font-semibold leading-relaxed">
                    {clinicInfo.address}
                  </p>
                  <p className="text-xs text-[#697386] mt-1">
                    Landmark: {clinicInfo.landmark}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E2D8] text-[#172033] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Clock className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#697386] mb-0.5">Clinical Hours</h4>
                  <p className="text-sm text-[#18202F] font-semibold">
                    Monday – Saturday: 9:00 AM – 8:30 PM
                  </p>
                  <p className="text-xs text-[#697386] mt-0.5">
                    Sunday: 10:00 AM – 2:00 PM (Emergency &amp; Pre-booked)
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E2D8] text-[#172033] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Phone className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#697386] mb-0.5">Direct Helpdesk</h4>
                  <p className="text-sm font-bold text-[#172033]">
                    <a href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#C6A15B] transition-colors">
                      {clinicInfo.primaryPhone}
                    </a>
                  </p>
                  <p className="text-xs text-[#697386] mt-0.5">
                    Emergency Hotline: <span className="font-semibold text-[#8C6D2D]">{clinicInfo.emergencyPhone}</span>
                  </p>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-4 border-t border-[#E7E2D8] grid grid-cols-2 gap-3 text-xs text-[#18202F] font-medium">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#172033]" />
                  <span>Free Patient Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-[#172033]" />
                  <span>Wheelchair Ramp Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#172033]" />
                  <span>Near Erode Fort Bus Stop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#172033]" />
                  <span>Ground Floor Shop No. 2</span>
                </div>
              </div>

            </div>

            {/* Directions Action */}
            <div className="pt-6">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.name + ' ' + clinicInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="secondary" size="md" className="w-full font-semibold" icon={Navigation}>
                  Get Google Maps Directions
                </Button>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Representation (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E7E2D8] shadow-sm bg-[#FAF7F0] min-h-[380px] relative flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-2 max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#172033] bg-[#EEF1F6] px-2.5 py-1 rounded-md border border-[#E7E2D8]">
                Erode Fort Medical Cluster
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#172033]">
                Central Connectivity in Erode Fort
              </h3>
              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                Conveniently located behind Sengunthar School and opposite Ishwarya Children Hospital, easily accessible from Perundurai Road, Brough Road, and Erode Railway Junction.
              </p>
            </div>

            {/* Simulated Clean Blueprint Map Card */}
            <div className="my-6 p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#172033]">
                <span>Transit Distances to Clinic</span>
                <span className="text-[#8C6D2D]">Estimated Drive Time</span>
              </div>
              <div className="space-y-2 text-xs text-[#697386]">
                <div className="flex items-center justify-between border-b border-[#E7E2D8]/60 pb-1.5">
                  <span className="font-medium text-[#18202F]">Ishwarya Children Hospital</span>
                  <span className="font-semibold text-[#172033]">Opposite (30 sec walk)</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E7E2D8]/60 pb-1.5">
                  <span className="font-medium text-[#18202F]">Sengunthar Higher Secondary School</span>
                  <span className="font-semibold text-[#172033]">Backside (1 min walk)</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E7E2D8]/60 pb-1.5">
                  <span className="font-medium text-[#18202F]">Erode Central Bus Stand</span>
                  <span className="font-semibold text-[#172033]">~ 5 mins (1.5 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#18202F]">Erode Junction Railway Station</span>
                  <span className="font-semibold text-[#172033]">~ 7 mins (2.2 km)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#697386]">
              <span>Pincode: 638001 • Erode Fort</span>
              <span className="text-[#172033] font-bold">Crown Dental &amp; Cosmetology Clinic</span>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
};

export default LocationSection;
