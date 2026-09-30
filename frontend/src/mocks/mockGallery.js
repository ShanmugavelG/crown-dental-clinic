import { smileGalleryData } from '../data/galleryAndReviews';

/**
 * Mock Smile Gallery Data for Crown Dental Demo
 * Realistic clinical cases for demonstration purposes.
 */
export const mockGallery = [...smileGalleryData];

export const getMockGalleryByCategory = (category) => {
  if (!category || category === 'All') return mockGallery;
  return mockGallery.filter(item => item.category === category);
};

export const getMockGalleryItemById = (id) => {
  return mockGallery.find(item => item.id === id) || null;
};
