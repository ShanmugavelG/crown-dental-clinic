import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Clock, 
  FileText, 
  Activity, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Menu, 
  X, 
  ShieldAlert, 
  Sparkles,
  Stethoscope,
  Layers,
  Search,
  Bell
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const PortalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Read session state from sessionStorage (strict requirement)
    try {
      const stored = sessionStorage.getItem('crown_auth_user');
      if (stored) {
        setCurrentUser(JSON.parse(stored));
      } else {
        // Fallback default for direct link viewing
        const fallback = {
          name: 'Clinical Staff (Authorized)',
          email: 'staff@crowndental.in',
          role: location.pathname.startsWith('/doctor') ? 'DOCTOR' : location.pathname.startsWith('/admin') ? 'ADMIN' : 'RECEPTIONIST'
        };
        sessionStorage.setItem('crown_auth_user', JSON.stringify(fallback));
        setCurrentUser(fallback);
      }
    } catch (e) {
      console.warn('Session read error', e);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    sessionStorage.removeItem('crown_auth_token');
    sessionStorage.removeItem('crown_auth_user');
    navigate('/login');
  };

  const role = currentUser?.role || (location.pathname.startsWith('/doctor') ? 'DOCTOR' : location.pathname.startsWith('/admin') ? 'ADMIN' : 'RECEPTIONIST');

  // Navigation items per role
  const getNavLinks = () => {
    if (role === 'DOCTOR') {
      return [
        { name: 'Doctor Dashboard', path: '/doctor/dashboard', icon: Activity },
        { name: 'Appointments & Queue', path: '/doctor/appointments', icon: Calendar },
        { name: 'Patient 360 Workspace', path: '/doctor/patients', icon: Users },
        { name: 'FDI Dental Chart', path: '/doctor/dental-chart', icon: Sparkles },
        { name: 'Treatment Plans', path: '/doctor/treatment-plans', icon: Layers },
        { name: 'Prescriptions & Notes', path: '/doctor/prescriptions', icon: FileText }
      ];
    } else if (role === 'ADMIN') {
      return [
        { name: 'Admin Dashboard', path: '/admin/dashboard', icon: Activity },
        { name: 'Doctor Applications', path: '/admin/doctor-applications', icon: Stethoscope },
        { name: 'Doctors & Faculty', path: '/admin/doctors', icon: Users },
        { name: 'Reception Staff', path: '/admin/receptionists', icon: Users },
        { name: 'Departments & Treatments', path: '/admin/departments', icon: Layers },
        { name: 'Clinical Audit Logs', path: '/admin/audit-logs', icon: ShieldAlert },
        { name: 'System Settings', path: '/admin/settings', icon: Settings }
      ];
    } else {
      // RECEPTIONIST default
      return [
        { name: 'Reception Dashboard', path: '/receptionist/dashboard', icon: Activity },
        { name: 'Patient Directory', path: '/receptionist/patients', icon: Users },
        { name: 'Appointments & Booking', path: '/receptionist/appointments', icon: Calendar },
        { name: 'Doctor Schedules', path: '/receptionist/availability', icon: Clock },
        { name: 'Waiting Room Queue', path: '/receptionist/queue', icon: Users },
        { name: 'Patient Documents', path: '/receptionist/documents', icon: FileText }
      ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col md:flex-row text-[#18202F] antialiased font-sans">
      
      {/* Top Mobile Bar */}
      <header className="md:hidden bg-[#0E1626] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#172033] border border-[#C6A15B]/30 flex items-center justify-center text-white">
            <svg className="w-5 h-5 fill-current text-[#C6A15B]" viewBox="0 0 24 24">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
          </div>
          <span className="font-display font-bold text-sm text-white">CROWN CLINIC</span>
          <Badge variant="gold" size="sm">{role}</Badge>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#172033] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Clinical Portal Navigation"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Desktop Sidebar / Mobile Sliding Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#172033] text-slate-300 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Clinic Brand */}
          <div className="p-5 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0E1626] border border-[#C6A15B]/30 flex items-center justify-center text-white shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-current text-[#C6A15B]" viewBox="0 0 24 24">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
              </svg>
            </div>
            <div className="truncate">
              <span className="font-display font-bold text-white text-sm block">CROWN DENTAL</span>
              <span className="text-[11px] text-[#C6A15B] font-medium tracking-wide uppercase">
                {role} PORTAL
              </span>
            </div>
          </div>

          {/* User Profile Mini Bar */}
          <div className="px-5 py-3.5 bg-[#0E1626]/80 border-b border-white/5 text-xs">
            <p className="font-semibold text-white truncate">{currentUser?.name || 'Staff User'}</p>
            <p className="text-slate-400 truncate text-[11px]">{currentUser?.email || 'staff@crowndental.in'}</p>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-[#0E1626] text-white border-l-2 border-[#C6A15B] shadow-xs'
                      : 'text-slate-300 hover:bg-[#0E1626]/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#C6A15B]' : 'text-slate-400'}`} />
                  <span className="truncate">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 hover:text-[#C6A15B] transition-colors"
          >
            <span>&larr; Public Website</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-950/40 transition-colors min-h-[44px] cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-400" />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Clinical Bar */}
        <div className="hidden md:flex items-center justify-between bg-white border-b border-[#E7E2D8] px-6 py-3 sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#697386]">Active Station:</span>
            <Badge variant="navy" size="sm">
              Erode Fort Main Operatory
            </Badge>
            <span className="text-xs text-[#E7E2D8]">|</span>
            <span className="text-xs font-medium text-[#697386]">
              Role: <strong className="text-[#172033]">{role}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#697386] font-mono">
              {new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-xs text-[#18202F] hover:text-[#C6A15B]">
                View Public Site
              </Button>
            </Link>
          </div>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-20 md:pb-8">
          <Outlet />
        </main>

        {/* Mobile Bottom Quick Bar for high frequency clinical actions */}
        <div className="md:hidden fixed bottom-0 inset-x-0 bg-[#0E1626] border-t border-white/10 z-40 px-3 py-2 flex items-center justify-around text-slate-300 text-[11px]">
          {navLinks.slice(0, 4).map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
                  isActive ? 'text-[#C6A15B] font-bold' : 'text-slate-400'
                }`}
              >
                <Icon className="w-5 h-5 mb-0.5" />
                <span className="truncate max-w-[70px]">{link.name.split(' ')[0]}</span>
              </Link>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default PortalLayout;
