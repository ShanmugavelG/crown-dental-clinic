import { doctorsData } from '../data/doctorsData';

export const mockDoctors = [...doctorsData];

export const getMockDoctorById = (id) => {
  return mockDoctors.find((d) => d.id === id) || null;
};
