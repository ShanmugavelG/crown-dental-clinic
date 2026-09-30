import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  AlertCircle, 
  UserCheck, 
  Stethoscope, 
  Shield, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { authService } from '../../../services/authService';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('reception@crowndental.in');
  const [password, setPassword] = useState('••••••••••••');
  const [selectedRole, setSelectedRole] = useState('RECEPTIONIST');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Discreet demo role selector for client evaluation
  const demoRoles = [
    {
      role: 'RECEPTIONIST',
      label: 'Receptionist',
      email: 'reception@crowndental.in',
      icon: UserCheck,
      description: 'Front desk, check-ins & schedule'
    },
    {
      role: 'DOCTOR',
      label: 'Doctor',
      email: 'dr.arun@crowndental.in',
      icon: Stethoscope,
      description: 'Clinical dental chart & consultations'
    },
    {
      role: 'ADMIN',
      label: 'Admin',
      email: 'admin@crowndental.in',
      icon: Shield,
      description: 'Clinic governance & applications'
    }
  ];

  const handleRoleSelect = (item) => {
    setSelectedRole(item.role);
    setEmail(item.email);
    setPassword('CrownDemo2026!');
    setErrorMsg('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const session = await authService.login({
        email,
        password,
        role: selectedRole
      });

      const userRole = session.user?.role || selectedRole;

      if (userRole === 'RECEPTIONIST') {
        navigate('/receptionist/dashboard');
      } else if (userRole === 'DOCTOR') {
        navigate('/doctor/dashboard');
      } else if (userRole === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setErrorMsg(err?.response?.data?.message || 'Login failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F7F4EE] py-12 px-4">
      <Container size="sm">
        
        <div className="max-w-md mx-auto space-y-6">
          
          {/* Header Branding */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-flex items-center gap-2 group mb-1">
              <div className="w-10 h-10 rounded-xl bg-[#0E1626] border border-[#C6A15B]/40 flex items-center justify-center text-white shadow-sm">
                <svg className="w-5 h-5 fill-current text-[#C6A15B]" viewBox="0 0 24 24">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-[#18202F] tracking-wide">
                CROWN DENTAL
              </span>
            </Link>
            
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C6D2D] block">
                Internal Team Portal
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#18202F] tracking-tight">
                STAFF PORTAL
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#697386]">
              Authorized clinical and administrative access only.
            </p>
          </div>

          {/* Discreet Demo Role Selector Bar */}
          <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#E7E2D8] shadow-xs">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#697386] px-1 pb-2">
              <span className="flex items-center gap-1.5 text-[#18202F]">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Demo Role Quick-Select</span>
              </span>
              <span className="text-[#8C6D2D] font-medium text-[10px]">Click to auto-fill</span>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5">
              {demoRoles.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedRole === item.role;
                return (
                  <button
                    key={item.role}
                    type="button"
                    onClick={() => handleRoleSelect(item)}
                    className={`py-2 px-2 rounded-xl text-center border transition-all text-xs cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'border-[#172033] bg-[#EEF1F6] text-[#172033] font-bold shadow-xs'
                        : 'border-[#E7E2D8] bg-[#FAF7F0] text-[#697386] hover:bg-[#EEF1F6] hover:text-[#18202F]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#8C6D2D]' : 'text-[#697386]'}`} />
                    <span className="text-[11px] truncate w-full">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Sign In Card */}
          <Card className="p-6 sm:p-8 bg-white border border-[#E7E2D8] shadow-lg rounded-2xl">
            <div className="mb-5 pb-3 border-b border-[#E7E2D8] flex items-center justify-between">
              <div>
                <h2 className="font-display font-bold text-lg text-[#18202F]">Sign In</h2>
                <p className="text-xs text-[#697386]">Authenticate with your assigned staff profile</p>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#FAF7F0] border border-[#E7E2D8] text-[#8C6D2D] font-semibold">
                {selectedRole}
              </span>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label 
                  htmlFor="portal-email" 
                  className="block text-xs font-bold uppercase tracking-wider text-[#18202F] mb-1.5"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="portal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@crowndental.in"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E7E2D8] text-sm text-[#18202F] bg-white focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  />
                  <Mail className="w-4 h-4 text-[#697386] absolute left-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="portal-password" 
                    className="block text-xs font-bold uppercase tracking-wider text-[#18202F]"
                  >
                    Password
                  </label>
                  <span className="text-[11px] text-[#697386]">Demo protected</span>
                </div>
                <div className="relative">
                  <input
                    id="portal-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E7E2D8] text-sm text-[#18202F] bg-white focus:outline-none focus:ring-2 focus:ring-[#172033] min-h-[44px]"
                  />
                  <Lock className="w-4 h-4 text-[#697386] absolute left-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full shadow-md bg-[#172033] hover:bg-[#0E1626] text-white min-h-[48px]"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Sign In &rarr;
                </Button>
              </div>

              <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between text-xs text-[#697386]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Frontend Demo Mode Active</span>
                </span>
                <Link to="/" className="text-[#172033] font-semibold hover:text-[#C6A15B] transition-colors">
                  &larr; Public Home
                </Link>
              </div>

            </form>
          </Card>

        </div>

      </Container>
    </div>
  );
};

export default LoginPage;
