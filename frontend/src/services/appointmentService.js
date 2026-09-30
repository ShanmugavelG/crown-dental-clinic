import apiClient from './apiClient';
import { 
  getStoredDemoAppointments, 
  saveStoredDemoAppointments 
} from '../mocks/mockAppointments';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

/**
 * Crown Dental Appointment Service
 * Handles clinic reception schedule, waiting lounge queue, and booking demo flow.
 */
export const appointmentService = {
  async getAppointments() {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 60));
      return getStoredDemoAppointments();
    }
    const response = await apiClient.get('/appointments');
    return response.data;
  },

  async createAppointment(appointmentData) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 150));
      const current = getStoredDemoAppointments();
      const newAppointment = {
        id: `APT-2026-${Math.floor(100 + Math.random() * 900)}`,
        token: `TK-${String(current.length + 1).padStart(2, '0')}`,
        status: 'SCHEDULED',
        date: new Date().toISOString().split('T')[0],
        ...appointmentData
      };
      const updated = [newAppointment, ...current];
      saveStoredDemoAppointments(updated);
      return newAppointment;
    }
    const response = await apiClient.post('/appointments', appointmentData);
    return response.data;
  },

  async updateAppointmentStatus(id, newStatus) {
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 80));
      const current = getStoredDemoAppointments();
      const updated = current.map(item => 
        item.id === id ? { ...item, status: newStatus } : item
      );
      saveStoredDemoAppointments(updated);
      return updated.find(item => item.id === id);
    }
    const response = await apiClient.patch(`/appointments/${id}/status`, { status: newStatus });
    return response.data;
  }
};

export default appointmentService;
