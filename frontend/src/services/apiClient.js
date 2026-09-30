import axios from 'axios';

/**
 * Crown Dental Axios API Client
 * Central HTTP client with configurable base URL, timeout, and request/response interceptors.
 * Ready for seamless Spring Boot REST API integration.
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor: Attach JWT token from sessionStorage if present
apiClient.interceptors.request.use(
  (config) => {
    try {
      const token = sessionStorage.getItem('crown_auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.warn('Session token could not be read for request header', e);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Uniform error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // If 401 Unauthorized in production, could handle session expiry
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized request - session may have expired.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
