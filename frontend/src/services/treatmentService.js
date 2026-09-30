import apiClient from './apiClient';
import { mockTreatments, getMockTreatmentBySlug } from '../mocks/mockTreatments';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

/**
 * Crown Dental Treatment Service
 * Provides specialized clinical treatments, procedures, pricing estimates, and FAQs.
 */
export const treatmentService = {
  async getTreatments() {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return mockTreatments;
    }
    const response = await apiClient.get('/treatments');
    return response.data;
  },

  async getTreatmentBySlug(slug) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return getMockTreatmentBySlug(slug);
    }
    const response = await apiClient.get(`/treatments/${slug}`);
    return response.data;
  }
};

export default treatmentService;
