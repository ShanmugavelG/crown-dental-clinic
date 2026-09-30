import apiClient from './apiClient';
import { mockLogin } from '../mocks/mockAuth';

const isMockMode = import.meta.env.VITE_USE_MOCK_API !== 'false';

/**
 * Crown Dental Authentication Service
 * Handles staff sign-in, token storage in sessionStorage, and role routing.
 */
export const authService = {
  /**
   * Authenticate staff user
   */
  async login(credentials) {
    const { email, password, role } = credentials;

    if (isMockMode) {
      const session = await mockLogin(email, password, role);
      sessionStorage.setItem('crown_auth_token', session.token);
      sessionStorage.setItem('crown_auth_user', JSON.stringify(session.user));
      return session;
    }

    const response = await apiClient.post('/auth/login', { email, password });
    const data = response.data;
    if (data.token) {
      sessionStorage.setItem('crown_auth_token', data.token);
      sessionStorage.setItem('crown_auth_user', JSON.stringify(data.user));
    }
    return data;
  },

  /**
   * Log out staff user and clear sessionStorage
   */
  logout() {
    try {
      sessionStorage.removeItem('crown_auth_token');
      sessionStorage.removeItem('crown_auth_user');
    } catch (e) {
      console.warn('Error clearing session', e);
    }
  },

  /**
   * Retrieve current authenticated user profile
   */
  getCurrentUser() {
    try {
      const userStr = sessionStorage.getItem('crown_auth_user');
      if (userStr) {
        return JSON.parse(userStr);
      }
    } catch (e) {
      console.warn('Error parsing current user from session', e);
    }
    return null;
  },

  /**
   * Check if a valid session token exists
   */
  isAuthenticated() {
    try {
      return Boolean(sessionStorage.getItem('crown_auth_token'));
    } catch {
      return false;
    }
  }
};

export default authService;
