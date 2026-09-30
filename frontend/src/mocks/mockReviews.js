import { testimonialsData, faqsData } from '../data/galleryAndReviews';

/**
 * Mock Reviews & FAQs Data for Crown Dental Demo
 * Realistic demo testimonials and patient inquiries for demonstration purposes.
 */
export const mockReviews = [...testimonialsData];
export const mockFaqs = [...faqsData];

export const getMockReviewById = (id) => {
  return mockReviews.find(r => r.id === id) || null;
};
