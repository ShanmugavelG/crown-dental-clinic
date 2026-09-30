export const initialMockAppointments = [
  {
    id: "APT-2026-101",
    token: "TK-01",
    patientId: "CRN-P-0842",
    patientName: "Meenakshi Sundaram",
    patientPhone: "+91 98421 11200",
    doctorId: "dr-arun-kumar",
    doctorName: "Dr. K. Arun Kumar, MDS",
    department: "Dental Implants",
    timeSlot: "10:00 AM",
    date: new Date().toISOString().split('T')[0],
    status: "WAITING",
    room: "Operatory 1 (Implant Suite)",
    notes: "Upper right molar implant review & torque testing."
  },
  {
    id: "APT-2026-102",
    token: "TK-02",
    patientId: "CRN-P-0843",
    patientName: "Karthik Subramaniam",
    patientPhone: "+91 94433 22311",
    doctorId: "dr-meera-arun",
    doctorName: "Dr. Meera Arun, MDS",
    department: "Clear Aligners",
    timeSlot: "11:00 AM",
    date: new Date().toISOString().split('T')[0],
    status: "SCHEDULED",
    room: "Operatory 2 (Orthodontics)",
    notes: "Tray #14 delivery and tracking assessment."
  },
  {
    id: "APT-2026-103",
    token: "TK-03",
    patientId: "CRN-P-0844",
    patientName: "Deepa Selvaraj",
    patientPhone: "+91 98428 55443",
    doctorId: "dr-meera-arun",
    doctorName: "Dr. Meera Arun, MDS",
    department: "Cosmetic Dentistry",
    timeSlot: "12:00 PM",
    date: new Date().toISOString().split('T')[0],
    status: "SCHEDULED",
    room: "Operatory 2 (Aesthetic Suite)",
    notes: "Porcelain veneer diagnostic mock-up evaluation."
  },
  {
    id: "APT-2026-104",
    token: "TK-04",
    patientId: "CRN-P-0845",
    patientName: "Senthil Nathan",
    patientPhone: "+91 97890 33441",
    doctorId: "dr-arun-kumar",
    doctorName: "Dr. K. Arun Kumar, MDS",
    department: "Oral Surgery",
    timeSlot: "04:30 PM",
    date: new Date().toISOString().split('T')[0],
    status: "SCHEDULED",
    room: "Operatory 1 (Surgical Suite)",
    notes: "Suture removal post-wisdom tooth impaction surgery."
  }
];

// Helper to fetch current demo appointments from session storage or fallback to initial
export const getStoredDemoAppointments = () => {
  try {
    const stored = sessionStorage.getItem('crown_demo_appointments');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Could not read demo appointments from session', e);
  }
  return initialMockAppointments;
};

export const saveStoredDemoAppointments = (appointments) => {
  try {
    sessionStorage.setItem('crown_demo_appointments', JSON.stringify(appointments));
  } catch (e) {
    console.warn('Could not save demo appointments to session', e);
  }
};
