import { getMockUserByEmail, getMockUserByRole } from './mockUsers';

/**
 * Mock Authentication Helper for Crown Dental Demo Mode
 * Simulates JWT session creation and validation without requiring a live backend.
 */
export const mockLogin = async (email, password, role) => {
  // Simulate network latency (250-400ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  let matchedUser = null;

  if (email) {
    matchedUser = getMockUserByEmail(email);
  }
  if (!matchedUser && role) {
    matchedUser = getMockUserByRole(role);
  }

  // If still not matched, construct a demo fallback based on role
  if (!matchedUser) {
    const fallbackRole = role || 'RECEPTIONIST';
    matchedUser = {
      id: `usr-demo-${Date.now()}`,
      email: email || `${fallbackRole.toLowerCase()}@crowndental.in`,
      name: fallbackRole === 'DOCTOR' ? 'Dr. K. Arun Kumar, MDS' : fallbackRole === 'ADMIN' ? 'Clinic Administrator' : 'Front Desk Receptionist',
      role: fallbackRole,
      department: fallbackRole === 'DOCTOR' ? 'Clinical Dental Surgery' : fallbackRole === 'ADMIN' ? 'Administration' : 'Front Desk',
      targetRoute: `/${fallbackRole.toLowerCase()}/dashboard`
    };
  }

  const simulatedToken = `mock-jwt-${matchedUser.role.toLowerCase()}-${btoa(
    JSON.stringify({
      sub: matchedUser.email,
      role: matchedUser.role,
      name: matchedUser.name,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600 * 8
    })
  )}`;

  const authSession = {
    user: matchedUser,
    token: simulatedToken,
    expiresAt: new Date(Date.now() + 8 * 3600 * 1000).toISOString()
  };

  return authSession;
};

export const getMockCurrentSession = () => {
  try {
    const token = sessionStorage.getItem('crown_auth_token');
    const userStr = sessionStorage.getItem('crown_auth_user');
    if (token && userStr) {
      return {
        token,
        user: JSON.parse(userStr)
      };
    }
  } catch (e) {
    console.warn('Could not read mock session from sessionStorage', e);
  }
  return null;
};
