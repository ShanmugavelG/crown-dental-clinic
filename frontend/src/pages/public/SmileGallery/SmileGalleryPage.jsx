import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { galleryService } from '../../../services/galleryService';
import { smileGalleryData } from '../../../data/galleryAndReviews';

export const SmileGalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState(smileGalleryData);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await galleryService.getGalleryItems();
        if (data && data.length > 0) {
          setGalleryItems(data);
        }
      } catch (err) {
        console.warn('Could not fetch gallery items', err);
      }
    };
    fetchGallery();
  }, []);

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
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Aesthetic &amp; Restorative Showcase</span>
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Crown Dental Smile Gallery
            </h1>
            <p className="page-hero-description">
              Every smile is crafted individually. Browse real patient transformations achieved through digital smile design, ceramic veneers, clear aligners, and dental implants.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Cards */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="space-y-12">
            {galleryItems.map((item) => (
              <Card key={item.id} className="p-6 sm:p-10 bg-white border border-[#E7E2D8] shadow-md hover:border-[#C6A15B] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Before & After Split */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      
                      {/* Before Box */}
                      <div className="rounded-2xl overflow-hidden border border-[#E7E2D8] bg-[#F7F4EE] flex flex-col">
                        <div className="bg-[#EEF1F6] px-3 py-2 text-xs font-semibold text-[#18202F] flex items-center justify-between border-b border-[#E7E2D8]">
                          <span>BEFORE</span>
                          <span className="text-[11px] text-[#697386]">Pre-Op Case</span>
                        </div>
                        <div className="aspect-[4/3] p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#EEF1F6] to-[#FAF7F0]">
                          <span className="text-xs font-bold text-[#18202F] mb-1">Pre-Treatment</span>
                          <span className="text-[11px] text-[#697386]">Initial Diagnostic Condition</span>
                        </div>
                      </div>

                      {/* After Box */}
                      <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-[#FAF7F0] flex flex-col">
                        <div className="bg-[#172033] px-3 py-2 text-xs font-semibold text-[#C6A15B] flex items-center justify-between border-b border-[#172033]">
                          <span>AFTER</span>
                          <span className="text-[11px] text-white/80">Completed Result</span>
                        </div>
                        <div className="aspect-[4/3] p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#FAF7F0] to-[#EEF1F6]">
                          <span className="text-xs font-bold text-[#18202F] mb-1">Final Aesthetic Outcome</span>
                          <span className="text-[11px] text-[#8C6D2D]">Restored Harmony &amp; Function</span>
                        </div>
                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#697386]">
                      <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                      <span>Verified patient consent on record &bull; Untouched clinical outcome</span>
                    </div>
                  </div>

                  {/* Right Column: Case Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="navy" size="sm">{item.category}</Badge>
                      <Badge variant="gold" size="sm">Case #{item.id}</Badge>
                    </div>

                    <h2 className="font-display font-bold text-2xl text-[#18202F]">
                      {item.title}
                    </h2>

                    <p className="text-[#697386] text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E7E2D8] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#697386]">Treatment Timeline:</span>
                        <span className="font-bold text-[#18202F] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C6A15B]" /> {item.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#697386]">Clinical Outcome:</span>
                        <span className="font-bold text-[#18202F] flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> {item.results}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link to="/book-appointment">
                        <Button variant="primary" size="md" icon={Calendar}>
                          Consult for Similar Smile Transformation
                        </Button>
                      </Link>
                    </div>

                  </div>

                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SmileGalleryPage;
