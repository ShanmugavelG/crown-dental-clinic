import React, { useState } from 'react';
import { 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  GraduationCap, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Clock, 
  Building,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

export const DoctorApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    qualification: '',
    registrationNumber: '',
    experienceYears: '',
    department: 'Dental Implants & Prosthodontics',
    availableDays: ['Monday', 'Tuesday', 'Wednesday'],
    availableHours: '9:00 AM – 2:00 PM',
    bio: '',
    resumeFileName: '',
    certificateFileName: '',
    photoFileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleDayToggle = (day) => {
    setFormData((prev) => {
      const exists = prev.availableDays.includes(day);
      if (exists) {
        return { ...prev, availableDays: prev.availableDays.filter((d) => d !== day) };
      } else {
        return { ...prev, availableDays: [...prev.availableDays, day] };
      }
    });
  };

  const handleFileSimulate = (field, e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [field]: e.target.files[0].name
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `DOC-APP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApplication = {
      id: generatedId,
      ...formData,
      status: 'PENDING',
      submittedAt: new Date().toISOString()
    };

    // Store in sessionStorage so Admin portal can view and review applications
    try {
      const existing = JSON.parse(sessionStorage.getItem('crown_doctor_applications') || '[]');
      existing.unshift(newApplication);
      sessionStorage.setItem('crown_doctor_applications', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage error', err);
    }

    setApplicationId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F7F4EE] py-12 md:py-20">
      <Container size="sm">
        
        {submitted ? (
          <div className="rounded-3xl bg-white border border-[#E7E2D8] shadow-xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#EEF1F6] text-[#172033] flex items-center justify-center mx-auto shadow-sm border border-[#172033]/15">
              <CheckCircle2 className="w-10 h-10 text-[#C6A15B]" />
            </div>

            <div className="space-y-2">
              <Badge variant="gold" size="md">Application Status: PENDING ADMIN REVIEW</Badge>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#18202F]">
                Application Successfully Submitted!
              </h1>
              <p className="text-[#697386] text-sm max-w-lg mx-auto">
                Thank you for applying to Crown Dental &amp; Cosmetology Clinic. Your credentials and registration number have been queued for Clinical Administrative Committee verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-[#E7E2D8] max-w-sm mx-auto text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-[#697386]">Application Reference:</span>
                <span className="font-mono font-bold text-[#8C6D2D]">{applicationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#697386]">Doctor Name:</span>
                <span className="font-semibold text-[#18202F]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#697386]">Registration No:</span>
                <span className="font-mono text-[#18202F]">{formData.registrationNumber}</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="/">
                <Button variant="primary" size="md">Return to Clinic Website</Button>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F6] text-[#172033] border border-[#172033]/15 text-xs font-semibold uppercase tracking-wider">
                Clinical Careers &amp; Faculty
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#18202F]">
                Doctor &amp; Specialist Application
              </h1>
              <p className="text-[#697386] text-sm max-w-lg mx-auto">
                Join our multidisciplinary team of dental surgeons and facial aesthetic specialists in Erode. All applications undergo credentialing and background verification.
              </p>
            </div>

            <Card className="p-6 sm:p-10 bg-white shadow-xl border border-[#E7E2D8]">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Identity & Registration */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#172033] border-b border-[#E7E2D8] pb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C6A15B]" /> 1. Professional Identity &amp; State Dental Council
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="app-fullname" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Full Legal Name (with prefix) *
                      </label>
                      <input
                        id="app-fullname"
                        type="text"
                        placeholder="Dr. Rajesh N., MDS"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-email" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Professional Email *
                      </label>
                      <input
                        id="app-email"
                        type="email"
                        placeholder="dr.rajesh@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-phone" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        id="app-phone"
                        type="tel"
                        placeholder="+91 98420 12345"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-reg-num" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        State Dental Council Reg. Number *
                      </label>
                      <input
                        id="app-reg-num"
                        type="text"
                        placeholder="e.g. TNDC #19482"
                        required
                        value={formData.registrationNumber}
                        onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Specialization & Clinical Qualifications */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#172033] border-b border-[#E7E2D8] pb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#C6A15B]" /> 2. Clinical Credentials &amp; Department
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="app-qualification" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Qualifications (Degrees &amp; Fellowships) *
                      </label>
                      <input
                        id="app-qualification"
                        type="text"
                        placeholder="e.g. BDS, MDS (Orthodontics), FAM"
                        required
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-specialization" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Primary Specialization *
                      </label>
                      <input
                        id="app-specialization"
                        type="text"
                        placeholder="e.g. Endodontics, Dental Implants, Clear Aligners"
                        required
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-experience" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Clinical Experience (Years) *
                      </label>
                      <input
                        id="app-experience"
                        type="number"
                        placeholder="e.g. 8"
                        required
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-department-select" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Department Preference *
                      </label>
                      <select
                        id="app-department-select"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                      >
                        <option>Dental Implants &amp; Prosthodontics</option>
                        <option>Orthodontics &amp; Clear Aligners</option>
                        <option>Conservative Dentistry &amp; Endodontics</option>
                        <option>Paediatric Dentistry</option>
                        <option>Oral &amp; Maxillofacial Surgery</option>
                        <option>Cosmetology &amp; Facial Aesthetics</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Availability & Hours */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#172033] border-b border-[#E7E2D8] pb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C6A15B]" /> 3. Available Days &amp; Consultation Hours
                  </h2>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-2">
                      Available Consultation Days
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {daysList.map((day) => {
                        const isSelected = formData.availableDays.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => handleDayToggle(day)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
                              isSelected
                                ? 'bg-[#172033] text-white shadow-xs'
                                : 'bg-[#EEF1F6] text-[#18202F] hover:bg-[#E7E2D8] border border-[#E7E2D8]'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="app-hours" className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                      Preferred Hours / Shift
                    </label>
                    <input
                      id="app-hours"
                      type="text"
                      placeholder="e.g. 9:30 AM – 1:30 PM (Morning OPD) or Evening OPD"
                      value={formData.availableHours}
                      onChange={(e) => setFormData({ ...formData, availableHours: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                    />
                  </div>
                </div>

                {/* 4. Document Attachments */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#172033] border-b border-[#E7E2D8] pb-2 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#C6A15B]" /> 4. Curriculum Vitae &amp; Certificates
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border-2 border-dashed border-[#E7E2D8] rounded-2xl p-4 text-center hover:border-[#C6A15B] transition-colors">
                      <FileText className="w-6 h-6 text-[#C6A15B] mx-auto mb-1.5" />
                      <span className="block text-xs font-bold text-[#18202F]">Resume / CV (PDF)</span>
                      <span className="text-[11px] text-[#697386] block truncate">
                        {formData.resumeFileName || 'Select document...'}
                      </span>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileSimulate('resumeFileName', e)}
                        className="mt-2 text-[11px] text-[#697386] w-full" 
                      />
                    </div>

                    <div className="border-2 border-dashed border-[#E7E2D8] rounded-2xl p-4 text-center hover:border-[#C6A15B] transition-colors">
                      <GraduationCap className="w-6 h-6 text-[#C6A15B] mx-auto mb-1.5" />
                      <span className="block text-xs font-bold text-[#18202F]">Degree Certificate</span>
                      <span className="text-[11px] text-[#697386] block truncate">
                        {formData.certificateFileName || 'Select certificate...'}
                      </span>
                      <input 
                        type="file" 
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => handleFileSimulate('certificateFileName', e)}
                        className="mt-2 text-[11px] text-[#697386] w-full" 
                      />
                    </div>

                    <div className="border-2 border-dashed border-[#E7E2D8] rounded-2xl p-4 text-center hover:border-[#C6A15B] transition-colors">
                      <User className="w-6 h-6 text-[#C6A15B] mx-auto mb-1.5" />
                      <span className="block text-xs font-bold text-[#18202F]">Formal Photo</span>
                      <span className="text-[11px] text-[#697386] block truncate">
                        {formData.photoFileName || 'Select portrait...'}
                      </span>
                      <input 
                        type="file" 
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleFileSimulate('photoFileName', e)}
                        className="mt-2 text-[11px] text-[#697386] w-full" 
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between">
                  <div className="text-xs text-[#697386] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                    <span>Submitted applications are audited and encrypted.</span>
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="shadow-lg shadow-[#172033]/20">
                    Submit Doctor Application
                  </Button>
                </div>

              </form>
            </Card>

          </div>
        )}

      </Container>
    </div>
  );
};

export default DoctorApplicationPage;
