export const mockPatients = [
  {
    id: "CRN-P-0842",
    name: "Meenakshi Sundaram",
    age: 48,
    gender: "Female",
    phone: "+91 98421 11200",
    email: "meenakshi.s@gmail.com",
    city: "Erode (Perundurai Road)",
    lastVisit: "2026-09-15",
    totalVisits: 4,
    bloodGroup: "O+",
    allergies: "Penicillin allergy (reported)",
    primaryDoctor: "Dr. K. Arun Kumar, MDS",
    activeCondition: "Molar Implant Healing (Tooth 36)"
  },
  {
    id: "CRN-P-0843",
    name: "Karthik Subramaniam",
    age: 26,
    gender: "Male",
    phone: "+91 94433 22311",
    email: "karthik.sub@yahoo.com",
    city: "Erode (Thindal)",
    lastVisit: "2026-08-28",
    totalVisits: 7,
    bloodGroup: "B+",
    allergies: "None",
    primaryDoctor: "Dr. Meera Arun, MDS",
    activeCondition: "Clear Aligner Stage 14/28"
  },
  {
    id: "CRN-P-0844",
    name: "Deepa Selvaraj",
    age: 31,
    gender: "Female",
    phone: "+91 98428 55443",
    email: "deepa.selva@outlook.com",
    city: "Erode Fort",
    lastVisit: "2026-09-20",
    totalVisits: 2,
    bloodGroup: "A+",
    allergies: "None",
    primaryDoctor: "Dr. Meera Arun, MDS",
    activeCondition: "Smile Design Mockup Trial"
  },
  {
    id: "CRN-P-0845",
    name: "Senthil Nathan",
    age: 39,
    gender: "Male",
    phone: "+91 97890 33441",
    email: "senthil.nathan@gmail.com",
    city: "Erode (Kollampalayam)",
    lastVisit: "2026-09-22",
    totalVisits: 3,
    bloodGroup: "O-",
    allergies: "Hypertension (controlled)",
    primaryDoctor: "Dr. K. Arun Kumar, MDS",
    activeCondition: "Post-op Wisdom Tooth Extraction"
  }
];

export const getMockPatientById = (id) => {
  return mockPatients.find((p) => p.id === id) || null;
};
