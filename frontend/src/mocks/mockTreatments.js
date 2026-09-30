import { treatmentsData } from '../data/treatmentsData';

export const mockTreatments = [...treatmentsData];

export const getMockTreatmentBySlug = (slug) => {
  return mockTreatments.find((t) => t.slug === slug) || null;
};
