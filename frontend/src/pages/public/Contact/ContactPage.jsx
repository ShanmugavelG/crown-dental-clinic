import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  CheckCircle2, 
  Send,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { clinicInfo } from '../../../data/clinicInfo';

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
              Get in Touch
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Contact Crown Dental &amp; Cosmetology Clinic
            </h1>
            <p className="page-hero-description">
              We are located at A Square Building, Vasuki Street, Erode Fort (Opposite Ishwarya Children Hospital). Reach out to schedule a consultation, request medical records, or enquire about specialized treatments.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <Card className="p-6 sm:p-8 bg-white border border-[#E7E2D8] shadow-sm space-y-6">
                <div>
                  <h2 className="font-display font-bold text-xl text-[#18202F]">
                    Clinic Address &amp; Landmarks
                  </h2>
                  <p className="text-xs text-[#8C6D2D] font-medium mt-0.5">
                    Erode Fort Advanced Dental &amp; Laser Operatory
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#18202F]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#18202F]">{clinicInfo.address}</p>
                      <p className="text-xs text-[#697386] mt-1">{clinicInfo.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#697386]">Reception &amp; Enquiries</p>
                      <a href={`tel:${clinicInfo.primaryPhone.replace(/\s+/g, '')}`} className="font-semibold text-[#18202F] hover:text-[#C6A15B]">
                        {clinicInfo.primaryPhone}
                      </a>
                      <p className="text-xs text-[#8C6D2D] font-medium mt-0.5">
                        Emergency: {clinicInfo.emergencyPhone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#697386]">Email Enquiries</p>
                      <a href={`mailto:${clinicInfo.email}`} className="font-semibold text-[#18202F] hover:text-[#C6A15B]">
                        {clinicInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#697386]">Operating Hours</p>
                      <p className="font-semibold text-[#18202F]">Monday – Saturday: 9:00 AM – 8:30 PM</p>
                      <p className="text-xs text-[#697386] mt-0.5">Sunday: 10:00 AM – 2:00 PM (Emergency)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.name + ' ' + clinicInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="secondary" size="md" className="w-full" icon={Navigation}>
                      Open Google Maps
                    </Button>
                  </a>
                </div>
              </Card>

            </div>

            {/* Right 7 Cols: Direct Message Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 bg-white border border-[#E7E2D8] shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#EEF1F6] text-[#172033] flex items-center justify-center mx-auto border border-[#172033]/15">
                      <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#18202F]">Message Received!</h3>
                    <p className="text-sm text-[#697386] max-w-md mx-auto">
                      Thank you for contacting Crown Dental. A member of our clinical team will get back to you shortly.
                    </p>
                    <Button variant="primary" size="md" onClick={() => setFormSubmitted(false)}>
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-[#18202F]">
                        Send an Enquiry to Our Front Desk
                      </h2>
                      <p className="text-xs sm:text-sm text-[#697386] mt-1">
                        Have a question regarding treatment plans, consultations, or second opinions? Fill out the form below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. S. Murugan"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98420 12345"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. murugan@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Message / Question *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your query or requirement..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-xs text-[#697386] flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                        <span>Confidential healthcare communication</span>
                      </div>
                      <Button type="submit" variant="primary" size="lg" icon={Send} className="shadow-lg shadow-[#172033]/20">
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;
