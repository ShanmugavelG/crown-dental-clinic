import React from 'react';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { clinicInfo } from '../../../data/clinicInfo';

export const QuickBookingStrip = () => {
  const phoneTel = `tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`;

  return (
    <section className="bg-white border-b border-[#E7E2D8] py-6 sm:py-7 relative z-20">
      <Container>
        <div className="bg-[#FAF7F0] border border-[#E7E2D8] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          
          {/* Left Text */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#172033]">
                Need an appointment?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#697386]">
              Call our reception team and we'll help you find an available doctor and suitable slot.
            </p>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#697386] mr-2">
              <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Mon–Sat: 9 AM – 8:30 PM</span>
            </div>

            <a
              href={phoneTel}
              className="btn-book-nav w-full sm:w-auto h-[48px] px-6 text-sm shadow-sm"
              aria-label={`Call reception to book at ${clinicInfo.primaryPhone}`}
            >
              <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>Call {clinicInfo.primaryPhone}</span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default QuickBookingStrip;
