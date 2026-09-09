import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  FileText, 
  Stethoscope, 
  Sparkles, 
  Building2, 
  CalendarDays, 
  Share2, 
  Pill, 
  IndianRupee, 
  Network, 
  Award, 
  Smartphone,
  AlertCircle
} from 'lucide-react';

export const Navigation = () => {
  const { activeTab, setActiveTab, currentRole, exceptions, aiRecommendations } = useApp();

  const openExceptionsCount = exceptions.filter(e => e.status !== 'Resolved').length;
  const pendingAiCount = aiRecommendations.filter(r => r.status === 'Pending Review').length;

  const NAV_ITEMS = [
    { id: 'clinic_board', label: 'Clinic Patient Board', icon: Users, badge: null, roles: ['doctor', 'anm', 'clinic_mgr', 'sysadmin', 'central_ops'] },
    { id: 'patient_record', label: 'Patient Record (UHID)', icon: FileText, badge: null, roles: ['doctor', 'anm', 'asha', 'specialist', 'clinic_mgr'] },
    { id: 'clinical_workflow', label: 'Clinical OPD Suite', icon: Stethoscope, badge: null, roles: ['doctor', 'anm', 'specialist'] },
    { id: 'ai_intelligence', label: 'AI Intelligence & Guardrails', icon: Sparkles, badge: pendingAiCount > 0 ? pendingAiCount : null, badgeColor: 'bg-cyan-500', roles: ['doctor', 'cluster_mgr', 'govt_reviewer', 'central_ops'] },
    { id: 'cluster_command', label: 'Cluster Command Cockpit', icon: Building2, badge: openExceptionsCount > 0 ? openExceptionsCount : null, badgeColor: 'bg-amber-500', roles: ['cluster_mgr', 'govt_reviewer', 'central_ops', 'sysadmin'] },
    { id: 'allied_services', label: 'Specialist & Outreach Calendar', icon: CalendarDays, badge: null, roles: ['specialist', 'anm', 'asha', 'cluster_mgr'] },
    { id: 'referral_care', label: 'Referrals & Continuity', icon: Share2, badge: null, roles: ['doctor', 'anm', 'asha', 'specialist', 'cluster_mgr'] },
    { id: 'pharmacy_logistics', label: 'Pharmacy, Lab & Logistics', icon: Pill, badge: null, roles: ['pharmacist', 'labtech', 'clinic_mgr', 'central_ops'] },
    { id: 'finance_cost', label: 'Finance & Cost Heads', icon: IndianRupee, badge: null, roles: ['central_ops', 'cluster_mgr', 'govt_reviewer'] },
    { id: 'govt_integrations', label: 'Govt Integrations (ABDM/HMIS)', icon: Network, badge: '8 APIs', badgeColor: 'bg-emerald-600', roles: ['sysadmin', 'govt_reviewer', 'central_ops'] },
    { id: 'quality_compliance', label: 'Quality & NQAS Repository', icon: Award, badge: '94%', badgeColor: 'bg-indigo-600', roles: ['central_ops', 'clinic_mgr', 'govt_reviewer'] },
    { id: 'citizen_portal', label: 'Citizen Application (हिंदी)', icon: Smartphone, badge: 'User', badgeColor: 'bg-rose-500', roles: ['citizen', 'asha', 'anm'] }
  ];

  return (
    <nav className="bg-slate-800 text-slate-200 border-b border-slate-700 shadow-sm sticky top-[57px] z-40 overflow-x-auto scrollbar-none">
      <div className="px-4 flex items-center space-x-1 min-w-max">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isRoleRelevant = item.roles.includes(currentRole);

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 px-3 py-2.5 text-xs font-medium border-b-2 transition-all relative ${
                isActive
                  ? 'border-emerald-400 text-emerald-300 bg-slate-900/60 font-semibold'
                  : isRoleRelevant
                  ? 'border-transparent text-slate-200 hover:text-white hover:bg-slate-700/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{item.label}</span>
              {item.badge && (
                <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full text-white ${item.badgeColor || 'bg-emerald-600'} shadow-sm`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
