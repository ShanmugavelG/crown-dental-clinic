import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText, 
  Activity,
  Layers,
  Settings,
  Calendar,
  AlertTriangle,
  Info
} from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { doctorService } from '../../../services/doctorService';
import { patientService } from '../../../services/patientService';
import { appointmentService } from '../../../services/appointmentService';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('APPLICATIONS'); // APPLICATIONS, DOCTORS, RECEPTIONISTS, PATIENTS, SCHEDULES, AUDIT
  const [doctorsList, setDoctorsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [demoNotice, setDemoNotice] = useState('');

  const [doctorApplications, setDoctorApplications] = useState([
    {
      id: 'DOC-APP-4091',
      name: 'Dr. Vignesh Sundaram, MDS',
      email: 'dr.vignesh@dentalmail.com',
      phone: '+91 98421 99011',
      specialization: 'Oral & Maxillofacial Surgery',
      qualification: 'BDS, MDS (Oral & Maxillofacial Surgery)',
      registrationNumber: 'TNDC #18921',
      experienceYears: '7 Years',
      status: 'PENDING',
      submittedAt: 'Today, 11:20 AM'
    },
    {
      id: 'DOC-APP-3882',
      name: 'Dr. Lavanya Krishnan, MDS',
      email: 'dr.lavanya@aesthetics.com',
      phone: '+91 94431 22334',
      specialization: 'Periodontics & Aesthetic Implants',
      qualification: 'BDS, MDS, Fellow in Implantology',
      registrationNumber: 'TNDC #17540',
      experienceYears: '9 Years',
      status: 'PENDING',
      submittedAt: 'Yesterday'
    }
  ]);

  const receptionistsList = [
    { id: 'REC-01', name: 'Kavitha R.', shift: 'Morning (08:30 AM - 04:30 PM)', status: 'Active', contact: '+91 98421 00223' },
    { id: 'REC-02', name: 'Saranya M.', shift: 'Evening (01:00 PM - 08:30 PM)', status: 'Active', contact: '+91 94432 77881' }
  ];

  const auditLogs = [
    { time: '12:04 PM', actor: 'Dr. K. Arun Kumar', action: 'Updated Tooth #36 finding to CARIES', entity: 'Patient #CRN-P-0842' },
    { time: '11:45 AM', actor: 'Kavitha R. (Reception)', action: 'Checked in Patient to Waiting Room', entity: 'Apt #CRN-APT-101' },
    { time: '10:30 AM', actor: 'Admin (System)', action: 'Authorized European Autoclave Biological Spore Log', entity: 'Autoclave Unit #2' }
  ];

  const loadData = async () => {
    try {
      const [docs, pts, apts] = await Promise.all([
        doctorService.getDoctors(),
        patientService.getPatients(),
        appointmentService.getAppointments()
      ]);
      setDoctorsList(docs || []);
      setPatientsList(pts || []);
      setAppointmentsList(apts || []);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApprove = (id) => {
    setDoctorApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'APPROVED' } : app))
    );
    showNotice(`Application ${id} approved (Demo state updated)`);
  };

  const handleReject = (id) => {
    setDoctorApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'REJECTED' } : app))
    );
    showNotice(`Application ${id} rejected (Demo state updated)`);
  };

  const showNotice = (msg) => {
    setDemoNotice(msg);
    setTimeout(() => setDemoNotice(''), 3500);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D2D]">
              Governance &amp; Clinic Administration
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl text-[#18202F] mt-0.5">
            Admin Management Console
          </h1>
          <p className="text-xs sm:text-sm text-[#697386]">
            Review applications, staff rosters, patient records, and clinic audits.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="gold" size="md">
            Frontend Prototype Mode
          </Badge>
        </div>
      </div>

      {/* Demo Action Banner */}
      {demoNotice && (
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{demoNotice}</span>
        </div>
      )}

      {/* Admin KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card 
          onClick={() => setActiveTab('APPLICATIONS')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'APPLICATIONS' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#8C6D2D] uppercase">Applications</span>
            <FileText className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#18202F] mt-2">
            {doctorApplications.filter(a => a.status === 'PENDING').length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Pending review</p>
        </Card>

        <Card 
          onClick={() => setActiveTab('DOCTORS')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'DOCTORS' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#172033] uppercase">Specialists</span>
            <Stethoscope className="w-4 h-4 text-[#172033]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#18202F] mt-2">
            {doctorsList.length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Active doctors</p>
        </Card>

        <Card 
          onClick={() => setActiveTab('PATIENTS')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'PATIENTS' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#697386] uppercase">Patients</span>
            <Users className="w-4 h-4 text-[#697386]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#18202F] mt-2">
            {patientsList.length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Total registered</p>
        </Card>

        <Card 
          onClick={() => setActiveTab('SCHEDULES')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'SCHEDULES' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700 uppercase">Appointments</span>
            <Calendar className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-display font-extrabold text-2xl text-emerald-800 mt-2">
            {appointmentsList.length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Today scheduled</p>
        </Card>
      </div>

      {/* Tab Navigation */}
      <Card className="bg-white border border-[#E7E2D8] overflow-hidden shadow-xs">
        <div className="p-3 border-b border-[#E7E2D8] bg-[#FAF7F0]/60 flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'APPLICATIONS', label: 'Doctor Applications' },
            { id: 'DOCTORS', label: 'Doctors Roster' },
            { id: 'RECEPTIONISTS', label: 'Front Desk' },
            { id: 'PATIENTS', label: 'Patients' },
            { id: 'SCHEDULES', label: 'Schedules' },
            { id: 'AUDIT', label: 'Audit Trail' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#172033] text-white shadow-xs'
                  : 'text-[#697386] hover:bg-white hover:text-[#18202F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Doctor Applications */}
        {activeTab === 'APPLICATIONS' && (
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-sm text-[#18202F]">
                Pending Doctor Credentials &amp; Applications
              </h2>
              <span className="text-xs text-[#697386]">Review medical credentials &amp; license</span>
            </div>

            <div className="divide-y divide-[#E7E2D8] border border-[#E7E2D8] rounded-xl overflow-hidden">
              {doctorApplications.map((app) => (
                <div key={app.id} className="p-4 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#18202F]">{app.name}</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E7E2D8] text-[#8C6D2D]">
                        {app.registrationNumber}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        app.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' :
                        app.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>

                    <p className="text-xs text-[#697386]">
                      {app.qualification} &bull; Experience: <strong>{app.experienceYears}</strong> &bull; {app.specialization}
                    </p>
                    <p className="text-[11px] text-[#697386]">
                      Email: {app.email} &bull; Contact: {app.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {app.status === 'PENDING' ? (
                      <>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          icon={CheckCircle}
                          onClick={() => handleApprove(app.id)}
                          className="text-xs text-emerald-700 hover:bg-emerald-50"
                        >
                          Approve
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          icon={XCircle}
                          onClick={() => handleReject(app.id)}
                          className="text-xs text-red-700 hover:bg-red-50"
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <span className="text-xs font-semibold text-[#697386]">
                        Status: {app.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Doctors Roster */}
        {activeTab === 'DOCTORS' && (
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-sm text-[#18202F]">Active Clinical Specialists</h2>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FAF7F0] border border-[#E7E2D8] text-[#8C6D2D]">
                Demo Functionality &bull; Connected to doctorService
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctorsList.map((doc) => (
                <div key={doc.id} className="p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF7F0] space-y-2">
                  <div className="flex items-center gap-3">
                    <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-xl object-cover border border-[#E7E2D8]" />
                    <div>
                      <h3 className="font-bold text-sm text-[#18202F]">{doc.name}</h3>
                      <p className="text-xs text-[#8C6D2D] font-semibold">{doc.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#697386]">{doc.qualification} &bull; {doc.experienceYears} Experience</p>
                  <div className="pt-2 border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                    <span className="text-[#697386]">{doc.timings}</span>
                    <button 
                      onClick={() => showNotice(`Configuring schedule for ${doc.name} (Demo mode)`)}
                      className="text-[#172033] font-bold hover:underline"
                    >
                      Manage Roster &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Front Desk Receptionists */}
        {activeTab === 'RECEPTIONISTS' && (
          <div className="p-5 space-y-4">
            <h2 className="font-display font-bold text-sm text-[#18202F]">Front Desk Team</h2>
            <div className="divide-y divide-[#E7E2D8] border border-[#E7E2D8] rounded-xl overflow-hidden">
              {receptionistsList.map((rec) => (
                <div key={rec.id} className="p-4 bg-white flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#18202F]">{rec.name}</div>
                    <div className="text-xs text-[#697386]">{rec.shift} &bull; {rec.contact}</div>
                  </div>
                  <Badge variant="gold" size="sm">Active Shift</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Patients Registry */}
        {activeTab === 'PATIENTS' && (
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-sm text-[#18202F]">Patients Registry ({patientsList.length})</h2>
              <span className="text-xs text-[#697386]">Connected to patientService</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F0] text-[#697386] uppercase font-bold border-b border-[#E7E2D8]">
                  <tr>
                    <th className="py-2.5 px-3">Patient ID</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Contact</th>
                    <th className="py-2.5 px-3">City</th>
                    <th className="py-2.5 px-3">Primary Doctor</th>
                    <th className="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E2D8]">
                  {patientsList.map((pt) => (
                    <tr key={pt.id} className="hover:bg-[#FAF7F0]">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#172033]">{pt.id}</td>
                      <td className="py-2.5 px-3 font-bold text-[#18202F]">{pt.name} ({pt.age}y)</td>
                      <td className="py-2.5 px-3 text-[#697386]">{pt.phone}</td>
                      <td className="py-2.5 px-3 text-[#697386]">{pt.city || 'Erode'}</td>
                      <td className="py-2.5 px-3 text-[#697386]">{pt.primaryDoctor || 'Clinic Specialist'}</td>
                      <td className="py-2.5 px-3">
                        <button 
                          onClick={() => showNotice(`Opened patient dossier for ${pt.name} (Demo mode)`)}
                          className="text-[#172033] font-bold hover:underline"
                        >
                          View Dossier
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: Schedules */}
        {activeTab === 'SCHEDULES' && (
          <div className="p-5 space-y-4">
            <h2 className="font-display font-bold text-sm text-[#18202F]">Daily Operatory Schedule &amp; Slots</h2>
            <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#E7E2D8] text-xs text-[#697386] space-y-2">
              <div className="flex items-center justify-between font-bold text-[#18202F]">
                <span>Operatory 1: Implant &amp; Oral Surgery Suite</span>
                <span className="text-emerald-700">Running On Schedule</span>
              </div>
              <p>Assigned: Dr. K. Arun Kumar, MDS &bull; Next slot: 04:30 PM (Wisdom Tooth Review)</p>
            </div>
            <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#E7E2D8] text-xs text-[#697386] space-y-2">
              <div className="flex items-center justify-between font-bold text-[#18202F]">
                <span>Operatory 2: Orthodontics &amp; Aesthetic Studio</span>
                <span className="text-emerald-700">Running On Schedule</span>
              </div>
              <p>Assigned: Dr. Meera Arun, MDS &bull; Next slot: 05:00 PM (Aligner Stage Delivery)</p>
            </div>
          </div>
        )}

        {/* TAB 6: Audit Logs */}
        {activeTab === 'AUDIT' && (
          <div className="p-5 space-y-4">
            <h2 className="font-display font-bold text-sm text-[#18202F]">Security Audit Trail &amp; Electronic Signature Log</h2>
            <div className="space-y-2">
              {auditLogs.map((log, idx) => (
                <div key={idx} className="p-3 bg-[#FAF7F0] rounded-lg border border-[#E7E2D8] text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#18202F]">{log.actor}</span>: {log.action}
                    <div className="text-[11px] text-[#697386]">{log.entity}</div>
                  </div>
                  <span className="font-mono text-[11px] text-[#697386]">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </Card>

    </div>
  );
};

export default AdminDashboard;
