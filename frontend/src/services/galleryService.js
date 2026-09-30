import apiClient from './apiClient';
import { mockGallery, getMockGalleryItemById } from '../mocks/mockGallery';
import { mockReviews, mockFaqs } from '../mocks/mockReviews';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

/**
 * Crown Dental Gallery & Public Content Service
 * Provides clinical cases, patient testimonials, and clinic FAQs.
 */
export const galleryService = {
  async getGalleryItems(category) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      if (!category || category === 'All') return mockGallery;
      return mockGallery.filter(item => item.category === category);
    }
    const response = await apiClient.get('/gallery', { params: { category } });
    return response.data;
  },

  async getGalleryItemById(id) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return getMockGalleryItemById(id);
    }
    const response = await apiClient.get(`/gallery/${id}`);
    return response.data;
  },

  async getReviews() {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return mockReviews;
    }
    const response = await apiClient.get('/reviews');
    return response.data;
  },

  async getFaqs() {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return mockFaqs;
    }
    const response = await apiClient.get('/faqs');
    return response.data;
  }
};

export default galleryService;
