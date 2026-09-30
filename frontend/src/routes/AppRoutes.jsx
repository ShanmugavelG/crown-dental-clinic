import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../components/layout/PublicLayout';
import PortalLayout from '../components/layout/PortalLayout';

// Public Pages
import HomePage from '../pages/public/Home/HomePage';
import AboutPage from '../pages/public/About/AboutPage';
import TreatmentsPage from '../pages/public/Treatments/TreatmentsPage';
import TreatmentDetailPage from '../pages/public/Treatments/TreatmentDetailPage';
import DoctorsPage from '../pages/public/Doctors/DoctorsPage';
import DoctorDetailPage from '../pages/public/Doctors/DoctorDetailPage';
import SmileGalleryPage from '../pages/public/SmileGallery/SmileGalleryPage';
import PatientStoriesPage from '../pages/public/PatientStories/PatientStoriesPage';
import TechnologyPage from '../pages/public/Technology/TechnologyPage';
import FaqsPage from '../pages/public/Faqs/FaqsPage';
import ContactPage from '../pages/public/Contact/ContactPage';
import BookAppointmentPage from '../pages/public/BookAppointment/BookAppointmentPage';
import DoctorApplicationPage from '../pages/public/DoctorApplication/DoctorApplicationPage';
import LoginPage from '../pages/public/Auth/LoginPage';

// Internal Clinical Portal Pages
import ReceptionistDashboard from '../pages/portal/receptionist/ReceptionistDashboard';
import DoctorDashboard from '../pages/portal/doctor/DoctorDashboard';
import AdminDashboard from '../pages/portal/admin/AdminDashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Experience A: Public Crown Dental Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorDetailPage />} />
        <Route path="/smile-gallery" element={<SmileGalleryPage />} />
        <Route path="/patient-stories" element={<PatientStoriesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/doctor-application" element={<DoctorApplicationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Experience B: Internal Clinic Management Portal */}
      <Route element={<PortalLayout />}>
        {/* Receptionist Portal */}
        <Route path="/receptionist" element={<Navigate to="/receptionist/dashboard" replace />} />
        <Route path="/receptionist/dashboard" element={<ReceptionistDashboard />} />
        <Route path="/receptionist/*" element={<ReceptionistDashboard />} />

        {/* Doctor Portal */}
        <Route path="/doctor" element={<Navigate to="/doctor/dashboard" replace />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />

        {/* Admin Portal */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Route>

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
