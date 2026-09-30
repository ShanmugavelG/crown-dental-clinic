import apiClient from './apiClient';
import { mockPatients, getMockPatientById } from '../mocks/mockPatients';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

// Store in-memory/session cache for newly registered patients in mock mode
const getSessionPatients = () => {
  try {
    const stored = sessionStorage.getItem('crown_demo_patients');
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.warn('Could not read demo patients from session', e);
  }
  return mockPatients;
};

const saveSessionPatients = (patients) => {
  try {
    sessionStorage.setItem('crown_demo_patients', JSON.stringify(patients));
  } catch (e) {
    console.warn('Could not save demo patients to session', e);
  }
};

/**
 * Crown Dental Patient Service
 * Handles patient profile lookups, registration, and dental history records.
 */
export const patientService = {
  async getPatients() {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      return getSessionPatients();
    }
    const response = await apiClient.get('/patients');
    return response.data;
  },

  async getPatientById(id) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 50));
      const all = getSessionPatients();
      return all.find(p => p.id === id) || getMockPatientById(id);
    }
    const response = await apiClient.get(`/patients/${id}`);
    return response.data;
  },

  async searchPatients(query) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 40));
      const all = getSessionPatients();
      const lower = (query || '').toLowerCase();
      return all.filter(p => 
        p.name.toLowerCase().includes(lower) || 
        p.phone.includes(lower) || 
        p.id.toLowerCase().includes(lower)
      );
    }
    const response = await apiClient.get('/patients/search', { params: { q: query } });
    return response.data;
  },

  async createPatient(patientData) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const all = getSessionPatients();
      const newPatient = {
        id: `CRN-P-${Math.floor(1000 + Math.random() * 9000)}`,
        totalVisits: 1,
        lastVisit: new Date().toISOString().split('T')[0],
        ...patientData
      };
      const updated = [newPatient, ...all];
      saveSessionPatients(updated);
      return newPatient;
    }
    const response = await apiClient.post('/patients', patientData);
    return response.data;
  }
};

export default patientService;
