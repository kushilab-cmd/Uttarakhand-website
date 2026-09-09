import React from 'react';
import { useApp } from '../context/AppContext';
import { USER_ROLES, CLUSTERS, UHWCS } from '../data/mockData';
import { 
  Building2, 
  MapPin, 
  UserCheck, 
  Languages, 
  ShieldCheck, 
  Sparkles, 
  AlertTriangle,
  ChevronDown,
  Activity,
  Globe
} from 'lucide-react';

export const Header = () => {
  const { 
    currentRole, 
    activeUserRole, 
    handleRoleChange, 
    selectedClusterId, 
    setSelectedClusterId, 
    selectedUhwcId, 
    setSelectedUhwcId,
    language,
    setLanguage,
    exceptions,
    aiRecommendations
  } = useApp();

  const activeExceptionsCount = exceptions.filter(e => e.status !== 'Resolved').length;
  const pendingAiCount = aiRecommendations.filter(r => r.status === 'Pending Review').length;

  const clusterUhwcs = UHWCS.filter(u => u.clusterId === selectedClusterId);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      {/* Top Banner Bar */}
      <div className="bg-emerald-950/80 px-4 py-1 border-b border-emerald-800/40 flex items-center justify-between text-xs font-medium text-emerald-200">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-900 text-emerald-300 font-semibold text-[10px] tracking-wide uppercase border border-emerald-700/50">
            PPP Delivery Model
          </span>
          <span>Government of Uttarakhand × Healthspring Primary Health Care Network (113 UHWCs)</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ABDM Gateway: Connected</span>
          </span>
          <span className="text-slate-400">|</span>
          <span className="flex items-center space-x-1 text-cyan-300">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>AI Intelligence Layer Active</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white shadow-inner text-lg border border-emerald-400/30">
            UH
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-base tracking-tight text-white leading-none">
                Uttarakhand Urban Health Network OS
              </h1>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono border border-slate-700">
                v2.4 Live
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light mt-0.5">
              Care Delivery • Workforce • Quality • Finance • Citizen Access • Accountable AI
            </p>
          </div>
        </div>

        {/* Global Context Pickers: Role, Cluster, Facility, Language */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Cluster Picker */}
          <div className="flex items-center bg-slate-800/90 rounded-lg px-2.5 py-1 border border-slate-700 text-xs">
            <Building2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            <span className="text-slate-400 mr-1 hidden md:inline">Cluster:</span>
            <select
              value={selectedClusterId}
              onChange={(e) => {
                setSelectedClusterId(e.target.value);
                const firstInCluster = UHWCS.find(u => u.clusterId === e.target.value);
                if (firstInCluster) setSelectedUhwcId(firstInCluster.id);
              }}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-1"
            >
              {CLUSTERS.map(c => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-slate-100">
                  {c.name} ({c.totalFacilities} UHWCs)
                </option>
              ))}
            </select>
          </div>

          {/* UHWC Facility Picker */}
          <div className="flex items-center bg-slate-800/90 rounded-lg px-2.5 py-1 border border-slate-700 text-xs">
            <MapPin className="w-3.5 h-3.5 text-teal-400 mr-1.5" />
            <span className="text-slate-400 mr-1 hidden md:inline">UHWC:</span>
            <select
              value={selectedUhwcId}
              onChange={(e) => setSelectedUhwcId(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer max-w-[180px] truncate"
            >
              {clusterUhwcs.map(u => (
                <option key={u.id} value={u.id} className="bg-slate-900 text-slate-100">
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-800/90 rounded-lg px-2 py-1 border border-slate-700 text-xs">
            <Languages className="w-3.5 h-3.5 text-cyan-400 mr-1" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-cyan-200 font-medium focus:outline-none cursor-pointer"
            >
              <option value="hi" className="bg-slate-900 text-slate-100">हिंदी (Hindi)</option>
              <option value="en" className="bg-slate-900 text-slate-100">English</option>
              <option value="gar" className="bg-slate-900 text-slate-100">गढ़वाली (Garhwali)</option>
              <option value="kum" className="bg-slate-900 text-slate-100">कुमाऊंनी (Kumaoni)</option>
            </select>
          </div>

          {/* Role Switcher Dropdown */}
          <div className="relative group">
            <div className="flex items-center bg-gradient-to-r from-emerald-900/60 to-teal-900/60 hover:from-emerald-800 hover:to-teal-800 transition-all rounded-lg px-3 py-1 border border-emerald-500/50 cursor-pointer shadow-sm">
              <span className={`w-6 h-6 rounded-full ${activeUserRole.color} text-white font-bold text-[11px] flex items-center justify-center mr-2 shadow`}>
                {activeUserRole.avatar}
              </span>
              <div className="text-left pr-2">
                <p className="text-xs font-semibold text-emerald-100 leading-tight flex items-center">
                  {activeUserRole.name}
                </p>
                <p className="text-[10px] text-emerald-300/80 font-light leading-tight">
                  {activeUserRole.cadre}
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-300 ml-1" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-1.5 w-72 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 py-2 hidden group-hover:block z-50 divide-y divide-slate-800">
              <div className="px-3 py-1.5 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Switch Active User Role (12 Roles)
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto py-1">
                {USER_ROLES.map(role => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleChange(role.id)}
                    className={`w-full text-left px-3 py-2 flex items-center space-x-2.5 transition-colors ${
                      currentRole === role.id ? 'bg-emerald-950/80 text-emerald-300 font-medium' : 'hover:bg-slate-800 text-slate-200'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full ${role.color} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>
                      {role.avatar}
                    </span>
                    <div className="truncate">
                      <p className="text-xs font-medium text-slate-100">{role.name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{role.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
