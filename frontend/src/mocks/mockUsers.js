/**
 * Mock Users & Auth State for Crown Dental Demo
 * Note: These are simulated accounts for client demonstration only.
 * No production credentials or database connections are used.
 */

export const mockUsers = [
  {
    id: "usr-doc-01",
    email: "dr.arun@crowndental.in",
    name: "Dr. K. Arun Kumar, MDS",
    role: "DOCTOR",
    department: "Oral & Maxillofacial Surgery / Implantology",
    designation: "Chief Dental Surgeon & Managing Director",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
    phone: "+91 94432 10987",
    targetRoute: "/doctor/dashboard"
  },
  {
    id: "usr-rec-01",
    email: "reception@crowndental.in",
    name: "Kavitha R.",
    role: "RECEPTIONIST",
    department: "Front Desk & Patient Relations",
    designation: "Head Receptionist & Patient Care Coordinator",
    avatar: "https://images.unsplash.com/photo-1594824813586-7a71e847c20d?auto=format&fit=crop&q=80&w=300",
    phone: "+91 98421 00223",
    targetRoute: "/receptionist/dashboard"
  },
  {
    id: "usr-adm-01",
    email: "admin@crowndental.in",
    name: "Clinic Administrator",
    role: "ADMIN",
    department: "Clinic Operations & Governance",
    designation: "Operations & Compliance Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    phone: "+91 98420 55678",
    targetRoute: "/admin/dashboard"
  }
];

export const getMockUserByEmail = (email) => {
  return mockUsers.find(u => u.email.toLowerCase() === (email || '').toLowerCase()) || null;
};

export const getMockUserByRole = (role) => {
  return mockUsers.find(u => u.role.toUpperCase() === (role || '').toUpperCase()) || null;
};
