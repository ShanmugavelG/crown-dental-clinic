import apiClient from './apiClient';
import { mockDoctors, getMockDoctorById } from '../mocks/mockDoctors';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

/**
 * Crown Dental Doctor Service
 * Provides clinical team profiles and specialist details.
 */
export const doctorService = {
  async getDoctors() {
    if (isMockMode) {
      // Simulate brief network delay
      await new Promise(resolve => setTimeout(resolve, 50));
      return mockDoctors;
    }
    const response = await apiClient.get('/doctors');
    return response.data;
  },

  async getDoctorById(id) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return getMockDoctorById(id);
    }
    const response = await apiClient.get(`/doctors/${id}`);
    return response.data;
  }
};

export default doctorService;
