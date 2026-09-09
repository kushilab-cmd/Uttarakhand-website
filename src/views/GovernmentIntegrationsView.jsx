import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Network, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck, 
  FileText,
  Server,
  Lock,
  ArrowRight
} from 'lucide-react';

export const GovernmentIntegrationsView = () => {
  const { govtIntegrations } = useApp();

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Government &amp; External Digital Health Integrations Register</h2>
            <p className="text-xs text-slate-500">API-First Architecture • Controlled Fallback Modes • Data-Sharing Register</p>
          </div>
        </div>

        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold border border-emerald-300">
          8 Core Government Systems Connected
        </span>
      </div>

      {/* PRD Section 6 Integration Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th className="p-3">Integration Domain</th>
              <th className="p-3">System Name</th>
              <th className="p-3">API &amp; Gateway Status</th>
              <th className="p-3">Sync Frequency</th>
              <th className="p-3">Fields Exchanged</th>
              <th className="p-3">Downtime Fallback Mode</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {govtIntegrations.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-900">{item.domain}</td>
                <td className="p-3 font-semibold text-indigo-900">{item.systemName}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {item.apiStatus}
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-700">{item.syncFrequency}</td>
                <td className="p-3 text-slate-600 font-mono text-[11px]">{item.fieldsExchanged}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold text-[11px] border border-slate-200">
                    {item.fallbackMode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
