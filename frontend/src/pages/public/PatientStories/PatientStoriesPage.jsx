import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { galleryService } from '../../../services/galleryService';
import { testimonialsData } from '../../../data/galleryAndReviews';

export const PatientStoriesPage = () => {
  const [stories, setStories] = useState(testimonialsData);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await galleryService.getReviews();
        if (data && data.length > 0) {
          setStories(data);
        }
      } catch (err) {
        console.warn('Could not fetch reviews', err);
      }
    };
    fetchStories();
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
              Patient Voices &amp; Experiences
            </div>
            <h1 className="page-hero-title font-display text-[#18202F]">
              Real Patient Stories &amp; Testimonials
            </h1>
            <p className="page-hero-description">
              Read how personalized dental care and facial aesthetics helped patients regain chewing confidence, overcome dental anxiety, and smile brightly.
            </p>
          </div>
        </Container>
      </section>

      {/* Stories Grid */}
      <Section spacing="default" className="bg-[#F7F4EE]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((item) => (
              <Card key={item.id} className="p-8 h-full flex flex-col justify-between bg-white border border-[#E7E2D8] shadow-sm hover:shadow-lg hover:border-[#C6A15B] transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C6A15B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Badge variant="gold" size="sm">{item.treatment}</Badge>
                  </div>

                  <p className="text-[#18202F] text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                  <div>
                    <h2 className="font-bold text-[#18202F] text-sm">{item.name}</h2>
                    <p className="text-[#697386]">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-[#8C6D2D] block">{item.doctor}</span>
                    <span className="text-[#697386]">{item.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/book-appointment">
              <Button variant="primary" size="lg" icon={Calendar}>
                Call to Schedule Your Visit
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PatientStoriesPage;
