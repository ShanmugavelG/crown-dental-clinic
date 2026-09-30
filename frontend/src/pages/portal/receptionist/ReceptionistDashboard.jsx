import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  Search, 
  Plus, 
  CheckCircle, 
  UserCheck, 
  UserPlus, 
  CalendarPlus, 
  Filter, 
  X,
  Stethoscope,
  Phone,
  FileText
} from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { appointmentService } from '../../../services/appointmentService';
import { patientService } from '../../../services/patientService';
import { doctorService } from '../../../services/doctorService';

export const ReceptionistDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [activeTab, setActiveTab] = useState('TODAY'); // TODAY, WAITING, UPCOMING
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals for Quick Actions
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  // Form states for new patient
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: 'Female',
    phone: '',
    city: 'Erode',
    activeCondition: 'Dental Consultation'
  });

  // Form states for new appointment
  const [newAppt, setNewAppt] = useState({
    patientName: '',
    doctorName: 'Dr. K. Arun Kumar, MDS',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:30 AM',
    department: 'Dental Implants',
    notes: 'Consultation and evaluation'
  });

  const loadData = async () => {
    try {
      const [apptsData, patientsData, doctorsData] = await Promise.all([
        appointmentService.getAppointments(),
        patientService.getPatients(),
        doctorService.getDoctors()
      ]);
      setAppointments(apptsData || []);
      setPatients(patientsData || []);
      setDoctors(doctorsData || []);
    } catch (err) {
      console.error('Failed to load receptionist data', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await appointmentService.updateAppointmentStatus(id, newStatus);
      setAppointments((prev) =>
        prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
      );
      showFlashMessage(`Appointment ${id} updated to ${newStatus}`);
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const showFlashMessage = (msg) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(''), 3500);
  };

  const handleRegisterPatientSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await patientService.createPatient({
        name: newPatient.name,
        age: Number(newPatient.age) || 30,
        gender: newPatient.gender,
        phone: newPatient.phone,
        city: newPatient.city,
        activeCondition: newPatient.activeCondition
      });
      setPatients(prev => [created, ...prev]);
      setIsRegisterModalOpen(false);
      setNewPatient({ name: '', age: '', gender: 'Female', phone: '', city: 'Erode', activeCondition: 'Dental Consultation' });
      showFlashMessage(`Registered patient ${created.name} (${created.id})`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateAppointmentSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await appointmentService.createAppointment({
        patientName: newAppt.patientName,
        doctorName: newAppt.doctorName,
        date: newAppt.date,
        timeSlot: newAppt.timeSlot,
        department: newAppt.department,
        notes: newAppt.notes,
        patientPhone: '+91 98421 00000',
        status: 'SCHEDULED'
      });
      setAppointments(prev => [created, ...prev]);
      setIsAppointmentModalOpen(false);
      setNewAppt({
        patientName: '',
        doctorName: 'Dr. K. Arun Kumar, MDS',
        date: new Date().toISOString().split('T')[0],
        timeSlot: '11:30 AM',
        department: 'Dental Implants',
        notes: 'Consultation and evaluation'
      });
      showFlashMessage(`Appointment created for ${created.patientName} (${created.timeSlot})`);
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered by active tab & search
  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch = 
      (apt.patientName || apt.patient || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.patientPhone || apt.phone || '').includes(searchTerm) ||
      (apt.department || apt.treatment || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.doctorName || apt.doctor || '').toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === 'WAITING') {
      return apt.status === 'WAITING';
    }
    if (activeTab === 'UPCOMING') {
      return apt.status === 'SCHEDULED';
    }
    return true; // 'TODAY' shows all
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D2D]">
              Reception Desk &bull; Front Office
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl text-[#18202F] mt-0.5">
            Receptionist Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#697386]">
            Patient check-ins, waiting lounge queue, and appointments.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            icon={UserPlus}
            onClick={() => setIsRegisterModalOpen(true)}
            className="text-xs bg-white"
          >
            Register Patient
          </Button>

          <Button 
            variant="primary" 
            size="sm" 
            icon={CalendarPlus}
            onClick={() => setIsAppointmentModalOpen(true)}
            className="text-xs shadow-sm bg-[#172033] hover:bg-[#0E1626]"
          >
            Create Appointment
          </Button>
        </div>
      </div>

      {/* Action Flash Alert */}
      {actionSuccessMsg && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-between animate-fadeIn">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            {actionSuccessMsg}
          </span>
          <button onClick={() => setActionSuccessMsg('')} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card 
          onClick={() => setActiveTab('TODAY')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'TODAY' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8] hover:border-[#172033]/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#697386] uppercase">Today's Total</span>
            <Calendar className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#18202F] mt-2">
            {appointments.length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Total appointments</p>
        </Card>

        <Card 
          onClick={() => setActiveTab('WAITING')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'WAITING' ? 'border-[#C6A15B] ring-2 ring-[#C6A15B]/20 shadow-xs' : 'border-[#E7E2D8] hover:border-[#C6A15B]/50'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#8C6D2D] uppercase">Waiting Lounge</span>
            <Clock className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#8C6D2D] mt-2">
            {appointments.filter((a) => a.status === 'WAITING').length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Checked in &amp; ready</p>
        </Card>

        <Card 
          onClick={() => setActiveTab('UPCOMING')}
          className={`p-4 bg-white border cursor-pointer transition-all ${
            activeTab === 'UPCOMING' ? 'border-[#172033] ring-2 ring-[#172033]/10 shadow-xs' : 'border-[#E7E2D8] hover:border-[#172033]/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#172033] uppercase">Upcoming</span>
            <Users className="w-4 h-4 text-[#172033]" />
          </div>
          <div className="font-display font-extrabold text-2xl text-[#172033] mt-2">
            {appointments.filter((a) => a.status === 'SCHEDULED').length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">Scheduled arrivals</p>
        </Card>

        <Card className="p-4 bg-white border border-[#E7E2D8]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700 uppercase">Registered Patients</span>
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-display font-extrabold text-2xl text-emerald-800 mt-2">
            {patients.length}
          </div>
          <p className="text-[11px] text-[#697386] mt-1">In clinic registry</p>
        </Card>
      </div>

      {/* Main Content Area */}
      <Card className="bg-white border border-[#E7E2D8] overflow-hidden shadow-xs">
        
        {/* Filter Tabs & Search Header */}
        <div className="p-4 border-b border-[#E7E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF7F0]/60">
          
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab('TODAY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'TODAY'
                  ? 'bg-[#172033] text-white shadow-xs'
                  : 'text-[#697386] hover:bg-white hover:text-[#18202F]'
              }`}
            >
              Today's Appointments ({appointments.length})
            </button>
            <button
              onClick={() => setActiveTab('WAITING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'WAITING'
                  ? 'bg-[#172033] text-white shadow-xs'
                  : 'text-[#697386] hover:bg-white hover:text-[#18202F]'
              }`}
            >
              Waiting Patients ({appointments.filter(a => a.status === 'WAITING').length})
            </button>
            <button
              onClick={() => setActiveTab('UPCOMING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'UPCOMING'
                  ? 'bg-[#172033] text-white shadow-xs'
                  : 'text-[#697386] hover:bg-white hover:text-[#18202F]'
              }`}
            >
              Upcoming ({appointments.filter(a => a.status === 'SCHEDULED').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search patient, phone, doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#E7E2D8] text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[36px]"
            />
            <Search className="w-4 h-4 text-[#697386] absolute left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs text-[#18202F]">
            <thead className="bg-[#FAF7F0] text-[#697386] uppercase tracking-wider font-semibold border-b border-[#E7E2D8]">
              <tr>
                <th className="py-3 px-4">Token / ID</th>
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Department / Treatment</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Time Slot</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E2D8] font-medium">
              {filteredAppointments.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-[#697386] text-xs">
                    No matching appointments found.
                  </td>
                </tr>
              ) : (
                filteredAppointments.map((apt) => {
                  const patientName = apt.patientName || apt.patient || 'Patient';
                  const phone = apt.patientPhone || apt.phone || '—';
                  const treatment = apt.department || apt.treatment || 'Consultation';
                  const doctor = apt.doctorName || apt.doctor || 'Staff Doctor';
                  const time = apt.timeSlot || apt.time || '10:00 AM';

                  return (
                    <tr key={apt.id} className="hover:bg-[#EEF1F6]/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-[#172033]">
                        {apt.token || apt.id}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#18202F]">
                        {patientName}
                      </td>
                      <td className="py-3 px-4 text-[#697386]">
                        {phone}
                      </td>
                      <td className="py-3 px-4">
                        {treatment}
                      </td>
                      <td className="py-3 px-4 text-[#697386]">
                        {doctor}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#18202F]">
                        {time}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          apt.status === 'WAITING'
                            ? 'bg-[#FAF7F0] text-[#8C6D2D] border border-[#C6A15B]/40'
                            : apt.status === 'IN_CONSULTATION'
                              ? 'bg-[#EEF1F6] text-[#172033] border border-[#172033]/20'
                              : 'bg-slate-100 text-[#697386]'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {apt.status === 'SCHEDULED' && (
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={() => handleStatusChange(apt.id, 'WAITING')}
                            className="text-xs"
                          >
                            Check-in
                          </Button>
                        )}
                        {apt.status === 'WAITING' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleStatusChange(apt.id, 'IN_CONSULTATION')}
                            className="text-xs text-[#8C6D2D] border-[#C6A15B]/40 bg-[#FAF7F0]"
                          >
                            Send to Chair &rarr;
                          </Button>
                        )}
                        {apt.status === 'IN_CONSULTATION' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleStatusChange(apt.id, 'COMPLETED')}
                            className="text-xs text-emerald-700 border-emerald-300"
                          >
                            Mark Done
                          </Button>
                        )}
                        {apt.status === 'COMPLETED' && (
                          <span className="text-[11px] text-emerald-700 font-semibold">Completed</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-[#E7E2D8] p-3 space-y-3">
          {filteredAppointments.map((apt) => {
            const patientName = apt.patientName || apt.patient || 'Patient';
            const phone = apt.patientPhone || apt.phone || '—';
            const treatment = apt.department || apt.treatment || 'Consultation';
            const doctor = apt.doctorName || apt.doctor || 'Staff Doctor';
            const time = apt.timeSlot || apt.time || '10:00 AM';

            return (
              <div key={apt.id} className="p-3.5 bg-[#FAF7F0] rounded-xl space-y-2 border border-[#E7E2D8]">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[#172033] text-xs">{apt.token || apt.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    apt.status === 'WAITING' ? 'bg-[#EEF1F6] text-[#8C6D2D]' : 'bg-[#EEF1F6] text-[#697386]'
                  }`}>
                    {apt.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#18202F] text-sm">{patientName}</h3>
                  <p className="text-xs text-[#697386]">{phone} &bull; {treatment}</p>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E7E2D8]">
                  <span className="text-[#697386]">{doctor}</span>
                  <span className="font-bold text-[#18202F]">{time}</span>
                </div>
                {apt.status === 'SCHEDULED' && (
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => handleStatusChange(apt.id, 'WAITING')}
                    className="w-full mt-2 text-xs"
                  >
                    Check In Patient
                  </Button>
                )}
              </div>
            );
          })}
        </div>

      </Card>

      {/* MODAL 1: Register Patient */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#E7E2D8] shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E2D8]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#18202F]">Register New Patient</h3>
                <p className="text-xs text-[#697386]">Add patient to clinic reception registry</p>
              </div>
              <button onClick={() => setIsRegisterModalOpen(false)} className="text-[#697386] hover:text-[#18202F]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterPatientSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                  placeholder="e.g. Ramesh Krishnan"
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#18202F] mb-1">Age *</label>
                  <input
                    type="number"
                    required
                    value={newPatient.age}
                    onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                    placeholder="35"
                    className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#18202F] mb-1">Gender *</label>
                  <select
                    value={newPatient.gender}
                    onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={newPatient.phone}
                  onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                  placeholder="+91 98421 00000"
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Presenting Dental Concern</label>
                <input
                  type="text"
                  value={newPatient.activeCondition}
                  onChange={(e) => setNewPatient({ ...newPatient, activeCondition: e.target.value })}
                  placeholder="e.g. Tooth ache, Molar restoration, Checkup"
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-[#E7E2D8]">
                <Button variant="ghost" size="sm" type="button" onClick={() => setIsRegisterModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Save Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Create Appointment */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#E7E2D8] shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E2D8]">
              <div>
                <h3 className="font-display font-bold text-lg text-[#18202F]">Schedule Appointment</h3>
                <p className="text-xs text-[#697386]">Assign doctor, date and time slot</p>
              </div>
              <button onClick={() => setIsAppointmentModalOpen(false)} className="text-[#697386] hover:text-[#18202F]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAppointmentSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Patient Name *</label>
                <input
                  type="text"
                  required
                  value={newAppt.patientName}
                  onChange={(e) => setNewAppt({ ...newAppt, patientName: e.target.value })}
                  placeholder="Select or enter patient name"
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Assigned Doctor *</label>
                <select
                  value={newAppt.doctorName}
                  onChange={(e) => setNewAppt({ ...newAppt, doctorName: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                >
                  {doctors.length > 0 ? (
                    doctors.map((doc) => (
                      <option key={doc.id} value={`${doc.name}, ${doc.qualifications}`}>
                        {doc.name}, {doc.qualifications} ({doc.role})
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="Dr. K. Arun Kumar, MDS">Dr. K. Arun Kumar, MDS (Oral Surgery &amp; Implants)</option>
                      <option value="Dr. Meera Arun, MDS">Dr. Meera Arun, MDS (Orthodontics &amp; Aligners)</option>
                    </>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#18202F] mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={newAppt.date}
                    onChange={(e) => setNewAppt({ ...newAppt, date: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#18202F] mb-1">Time Slot *</label>
                  <select
                    value={newAppt.timeSlot}
                    onChange={(e) => setNewAppt({ ...newAppt, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#18202F] mb-1">Reason / Notes</label>
                <input
                  type="text"
                  value={newAppt.notes}
                  onChange={(e) => setNewAppt({ ...newAppt, notes: e.target.value })}
                  placeholder="Reason for visit"
                  className="w-full px-3 py-2 border border-[#E7E2D8] rounded-xl text-xs focus:ring-2 focus:ring-[#172033]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-[#E7E2D8]">
                <Button variant="ghost" size="sm" type="button" onClick={() => setIsAppointmentModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Confirm Schedule
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReceptionistDashboard;
