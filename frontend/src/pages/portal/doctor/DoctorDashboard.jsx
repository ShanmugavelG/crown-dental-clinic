import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Sparkles, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Stethoscope,
  ChevronRight,
  Pill,
  CalendarCheck,
  Check,
  ClipboardList
} from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { appointmentService } from '../../../services/appointmentService';

export const DoctorDashboard = () => {
  const [selectedTooth, setSelectedTooth] = useState('36');
  const [toothCondition, setToothCondition] = useState('CARIES');
  const [clinicalNote, setClinicalNote] = useState('Deep occlusal caries approaching pulp chamber. Cold test positive with lingering sensitivity. Recommended RCT.');
  const [activeTab, setActiveTab] = useState('CHART'); // CHART, PLAN, PRESCRIPTIONS, FOLLOWUPS
  const [flashMsg, setFlashMsg] = useState('');

  // Active patient context
  const [activePatient, setActivePatient] = useState({
    code: 'CRN-P-0842',
    name: 'Meenakshi Sundaram',
    age: 48,
    gender: 'F',
    condition: 'Molar Sensitivity (Tooth 36)',
    time: '10:00 AM',
    status: 'IN_CHAIR',
    phone: '+91 98421 11200',
    allergies: 'Penicillin allergy (reported)'
  });

  const [queue, setQueue] = useState([]);

  const loadDoctorData = async () => {
    try {
      const appts = await appointmentService.getAppointments();
      setQueue(appts.slice(0, 5));
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    loadDoctorData();
  }, []);

  const showNotification = (msg) => {
    setFlashMsg(msg);
    setTimeout(() => setFlashMsg(''), 3000);
  };

  // FDI 32-tooth notation quadrants
  const upperRight = [18, 17, 16, 15, 14, 13, 12, 11];
  const upperLeft = [21, 22, 23, 24, 25, 26, 27, 28];
  const lowerRight = [48, 47, 46, 45, 44, 43, 42, 41];
  const lowerLeft = [31, 32, 33, 34, 35, 36, 37, 38];

  const handleSelectPatient = (patient) => {
    setActivePatient({
      code: patient.patientId || patient.id || 'CRN-P-DEMO',
      name: patient.patientName || patient.patient || 'Patient',
      age: 45,
      gender: 'F',
      condition: patient.department || patient.treatment || 'Consultation',
      time: patient.timeSlot || patient.time || '10:00 AM',
      status: 'IN_CHAIR',
      phone: patient.patientPhone || patient.phone || '+91 98421 00000',
      allergies: 'None recorded'
    });
    showNotification(`Active record switched to ${patient.patientName || patient.patient}`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D2D]">
              Clinical Doctor Workspace &bull; Operatory 1
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl text-[#18202F] mt-0.5">
            Dr. K. Arun Kumar, MDS
          </h1>
          <p className="text-xs sm:text-sm text-[#697386]">
            FDI dental chart diagnostics, treatment planning, and prescription management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="navy" size="md">
            Chief Dental Surgeon &bull; Erode
          </Badge>
        </div>
      </div>

      {/* Notification Banner */}
      {flashMsg && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{flashMsg}</span>
        </div>
      )}

      {/* Active Patient Summary Banner */}
      <div className="p-4 bg-white rounded-2xl border border-[#E7E2D8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#172033] text-white flex items-center justify-center font-display font-bold text-lg">
            {activePatient.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-base text-[#18202F]">{activePatient.name}</h2>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E7E2D8] text-[#8C6D2D] font-bold">
                {activePatient.code}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Chairside
              </span>
            </div>
            <p className="text-xs text-[#697386] mt-0.5">
              {activePatient.phone} &bull; Chief Complaint: <strong className="text-[#18202F]">{activePatient.condition}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
            <strong>Allergy Note:</strong> {activePatient.allergies}
          </div>
        </div>
      </div>

      {/* Main Grid: Left Patient Queue, Right Clinical Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Today's Appointments & Queue (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="p-4 bg-white border border-[#E7E2D8] shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-3">
              <h2 className="font-display font-bold text-sm text-[#18202F] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#172033]" />
                <span>Today's Patient Queue</span>
              </h2>
              <Badge variant="gold" size="sm">{queue.length} Scheduled</Badge>
            </div>

            <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
              {queue.map((p) => {
                const pName = p.patientName || p.patient || 'Patient';
                const pId = p.patientId || p.id;
                const isCurrent = activePatient.name === pName;
                return (
                  <div 
                    key={p.id}
                    onClick={() => handleSelectPatient(p)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer space-y-1 ${
                      isCurrent
                        ? 'border-[#172033] bg-[#EEF1F6] ring-1 ring-[#172033]/20 shadow-xs'
                        : 'border-[#E7E2D8] bg-[#FAF7F0] hover:bg-white hover:border-[#172033]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#172033]">{pId}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#E7E2D8] text-[#8C6D2D]">
                        {p.timeSlot || p.time || '10:00 AM'}
                      </span>
                    </div>

                    <h3 className="font-bold text-[#18202F] text-xs sm:text-sm">{pName}</h3>
                    <p className="text-[11px] text-[#697386] truncate">
                      {p.department || p.treatment || 'Consultation'}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Column: Clinical Tabs (Chart, Plan, Prescriptions, Follow-ups) (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <Card className="p-5 sm:p-6 bg-white border border-[#E7E2D8] shadow-xs space-y-5">
            
            {/* Clinical Tabs Bar */}
            <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-3">
              <div className="flex items-center gap-1 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('CHART')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'CHART'
                      ? 'bg-[#172033] text-white shadow-xs'
                      : 'text-[#697386] hover:bg-[#FAF7F0] hover:text-[#18202F]'
                  }`}
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Dental Chart (FDI)</span>
                </button>
                <button
                  onClick={() => setActiveTab('PLAN')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'PLAN'
                      ? 'bg-[#172033] text-white shadow-xs'
                      : 'text-[#697386] hover:bg-[#FAF7F0] hover:text-[#18202F]'
                  }`}
                >
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>Treatment Plan</span>
                </button>
                <button
                  onClick={() => setActiveTab('PRESCRIPTIONS')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'PRESCRIPTIONS'
                      ? 'bg-[#172033] text-white shadow-xs'
                      : 'text-[#697386] hover:bg-[#FAF7F0] hover:text-[#18202F]'
                  }`}
                >
                  <Pill className="w-3.5 h-3.5" />
                  <span>Prescriptions</span>
                </button>
                <button
                  onClick={() => setActiveTab('FOLLOWUPS')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'FOLLOWUPS'
                      ? 'bg-[#172033] text-white shadow-xs'
                      : 'text-[#697386] hover:bg-[#FAF7F0] hover:text-[#18202F]'
                  }`}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Follow-ups</span>
                </button>
              </div>

              <span className="text-xs font-bold text-[#8C6D2D] hidden sm:block">
                Tooth #{selectedTooth}
              </span>
            </div>

            {/* TAB 1: FDI DENTAL CHART */}
            {activeTab === 'CHART' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-sm text-[#18202F]">
                    Interactive ISO/FDI 32-Tooth Chart
                  </h3>
                  <Badge variant="gold" size="sm">Permanent Dentition</Badge>
                </div>

                {/* Tooth Chart Grid */}
                <div className="p-4 bg-[#F7F4EE] rounded-2xl border border-[#E7E2D8] space-y-4">
                  {/* Maxillary (Upper Arch) */}
                  <div className="space-y-1 text-center">
                    <span className="text-[11px] font-bold text-[#697386] uppercase tracking-widest block">
                      Maxilla (Upper Jaw)
                    </span>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto py-1">
                      {/* Quadrant 1 */}
                      <div className="flex gap-1">
                        {upperRight.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTooth(String(t))}
                            className={`w-7 h-8 sm:w-9 sm:h-10 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer flex flex-col items-center justify-center ${
                              selectedTooth === String(t)
                                ? 'bg-[#172033] text-white border-[#172033] shadow-md ring-2 ring-[#C6A15B] scale-105'
                                : 'bg-white text-[#18202F] border-[#E7E2D8] hover:border-[#172033] hover:bg-[#EEF1F6]'
                            }`}
                          >
                            <span>{t}</span>
                          </button>
                        ))}
                      </div>

                      <div className="w-px h-7 bg-[#E7E2D8] mx-1 shrink-0" />

                      {/* Quadrant 2 */}
                      <div className="flex gap-1">
                        {upperLeft.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTooth(String(t))}
                            className={`w-7 h-8 sm:w-9 sm:h-10 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer flex flex-col items-center justify-center ${
                              selectedTooth === String(t)
                                ? 'bg-[#172033] text-white border-[#172033] shadow-md ring-2 ring-[#C6A15B] scale-105'
                                : 'bg-white text-[#18202F] border-[#E7E2D8] hover:border-[#172033] hover:bg-[#EEF1F6]'
                            }`}
                          >
                            <span>{t}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mandibular (Lower Arch) */}
                  <div className="space-y-1 text-center pt-2 border-t border-[#E7E2D8]">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto py-1">
                      {/* Quadrant 4 */}
                      <div className="flex gap-1">
                        {lowerRight.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTooth(String(t))}
                            className={`w-7 h-8 sm:w-9 sm:h-10 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer flex flex-col items-center justify-center ${
                              selectedTooth === String(t)
                                ? 'bg-[#172033] text-white border-[#172033] shadow-md ring-2 ring-[#C6A15B] scale-105'
                                : 'bg-white text-[#18202F] border-[#E7E2D8] hover:border-[#172033] hover:bg-[#EEF1F6]'
                            }`}
                          >
                            <span>{t}</span>
                          </button>
                        ))}
                      </div>

                      <div className="w-px h-7 bg-[#E7E2D8] mx-1 shrink-0" />

                      {/* Quadrant 3 */}
                      <div className="flex gap-1">
                        {lowerLeft.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTooth(String(t))}
                            className={`w-7 h-8 sm:w-9 sm:h-10 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer flex flex-col items-center justify-center ${
                              selectedTooth === String(t)
                                ? 'bg-[#172033] text-white border-[#172033] shadow-md ring-2 ring-[#C6A15B] scale-105'
                                : String(t) === '36'
                                  ? 'bg-[#FAF7F0] text-[#8C6D2D] border-2 border-[#C6A15B] font-extrabold'
                                  : 'bg-white text-[#18202F] border-[#E7E2D8] hover:border-[#172033] hover:bg-[#EEF1F6]'
                            }`}
                          >
                            <span>{t}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#697386] uppercase tracking-widest block mt-1">
                      Mandible (Lower Jaw)
                    </span>
                  </div>
                </div>

                {/* Condition Picker & Note */}
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Finding (Tooth #{selectedTooth})
                      </label>
                      <select
                        value={toothCondition}
                        onChange={(e) => setToothCondition(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E2D8] bg-white text-xs focus:ring-2 focus:ring-[#172033]"
                      >
                        <option value="HEALTHY">Sound / Healthy</option>
                        <option value="CARIES">Dental Caries (Decay)</option>
                        <option value="ROOT_CANAL">Requires Root Canal Therapy</option>
                        <option value="CROWN">Crown / Restoration Planned</option>
                        <option value="IMPLANT">Implant Site</option>
                        <option value="MISSING">Missing Tooth</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                        Planned Procedure
                      </label>
                      <input
                        type="text"
                        defaultValue="Single-Visit Endodontic Therapy + Zirconia Crown"
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E2D8] text-xs focus:ring-2 focus:ring-[#172033]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1">
                      Clinical Diagnostic Notes
                    </label>
                    <textarea
                      rows={2}
                      value={clinicalNote}
                      onChange={(e) => setClinicalNote(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#E7E2D8] text-xs focus:ring-2 focus:ring-[#172033]"
                    />
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={() => showNotification(`Tooth #${selectedTooth} record updated in treatment plan`)}
                    >
                      Save Chart Finding
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TREATMENT PLAN */}
            {activeTab === 'PLAN' && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-[#18202F]">
                  Active Multi-Stage Treatment Plan
                </h3>
                
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl border border-[#E7E2D8] bg-[#FAF7F0] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#18202F]">Step 1: Rotary Endodontic Shaping &amp; Obturation</div>
                      <div className="text-[11px] text-[#697386]">Tooth #36 &bull; Single-sitting protocol with apex locator</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">In Progress</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#E7E2D8] bg-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#18202F]">Step 2: Core Build-up &amp; 3D Digital Scan</div>
                      <div className="text-[11px] text-[#697386]">Tooth #36 &bull; Intraoral 3D scanner for CAD/CAM crown</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-[#697386]">Planned</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#E7E2D8] bg-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#18202F]">Step 3: Monolithic Zirconia Crown Cementation</div>
                      <div className="text-[11px] text-[#697386]">Permanent resin cementation &amp; occlusion check</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-[#697386]">Planned</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button variant="secondary" size="sm" onClick={() => showNotification('Treatment plan exported to patient file')}>
                    Update Treatment Plan
                  </Button>
                </div>
              </div>
            )}

            {/* TAB 3: PRESCRIPTIONS */}
            {activeTab === 'PRESCRIPTIONS' && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-[#18202F]">
                  Chairside Digital Prescription
                </h3>

                <div className="p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF7F0] space-y-3">
                  <div className="text-xs font-semibold text-[#8C6D2D]">
                    Note: Patient has a recorded Penicillin allergy. Safe cephalosporin or macrolide alternates selected.
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-[#E7E2D8] flex items-center justify-between">
                      <div>
                        <strong>Tab. Clindamycin 300mg</strong>
                        <div className="text-[11px] text-[#697386]">1 capsule TDS (Every 8 hours) after food &bull; 5 Days</div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700">Antibiotic</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-[#E7E2D8] flex items-center justify-between">
                      <div>
                        <strong>Tab. Aceclofenac + Paracetamol 100/325mg</strong>
                        <div className="text-[11px] text-[#697386]">1 tablet BD (Twice daily) as needed for pain &bull; 3 Days</div>
                      </div>
                      <span className="text-[11px] font-bold text-blue-700">Analgesic</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-[#E7E2D8] flex items-center justify-between">
                      <div>
                        <strong>Chlorhexidine Gluconate 0.2% Oral Rinse</strong>
                        <div className="text-[11px] text-[#697386]">10ml rinse for 30s twice daily &bull; 7 Days</div>
                      </div>
                      <span className="text-[11px] font-bold text-purple-700">Antiseptic</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button variant="primary" size="sm" onClick={() => showNotification('Prescription sent to front-desk printer')}>
                    Issue Prescription &rarr;
                  </Button>
                </div>
              </div>
            )}

            {/* TAB 4: FOLLOW-UPS */}
            {activeTab === 'FOLLOWUPS' && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-[#18202F]">
                  Follow-up Scheduling &amp; Clinical Recall
                </h3>

                <div className="p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF7F0] space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-[#18202F] mb-1">Recommended Recall Date</label>
                      <input 
                        type="date" 
                        defaultValue="2026-10-06"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-[#E7E2D8]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#18202F] mb-1">Recall Purpose</label>
                      <input 
                        type="text" 
                        defaultValue="Crown Preparation &amp; Tissue Healing Check"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-[#E7E2D8]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button variant="primary" size="sm" onClick={() => showNotification('Follow-up recall queued for receptionist reminder')}>
                    Schedule Follow-up
                  </Button>
                </div>
              </div>
            )}

          </Card>
        </div>

      </div>

    </div>
  );
};

export default DoctorDashboard;
