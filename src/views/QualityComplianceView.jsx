import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Download, 
  TrendingUp,
  Layers,
  Lock
} from 'lucide-react';

export const QualityComplianceView = () => {
  const { qualityCompliance, activeUhwc } = useApp();

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Quality, Compliance &amp; NQAS Evidence Repository</h2>
            <p className="text-xs text-slate-500">National Quality Assurance Standards (NQAS) • Kayakalp • Corrective Action Tracker (CAPA)</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="text-center px-3 border-r border-slate-300">
            <p className="text-xs text-slate-500 font-medium">NQAS Score</p>
            <p className="text-xl font-bold text-indigo-700">{qualityCompliance.overallNqasScore}%</p>
            <p className="text-[10px] text-slate-400">Certified</p>
          </div>
          <div className="text-center px-3">
            <p className="text-xs text-slate-500 font-medium">Kayakalp Score</p>
            <p className="text-xl font-bold text-emerald-700">{qualityCompliance.kayakalpScore}%</p>
            <p className="text-[10px] text-slate-400">High Quality</p>
          </div>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {qualityCompliance.domains.map((dom, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900">{dom.name}</span>
              <span className="font-mono font-bold text-indigo-700">{dom.score}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${dom.score}%` }}
              />
            </div>
            <p className="text-[10px] text-emerald-700 font-semibold text-right">✓ {dom.status}</p>
          </div>
        ))}
      </div>

      {/* CAPA Corrective Action Tracker */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-sm">Corrective Action &amp; Audit Incident Tracker (CAPA)</h3>
          </div>
          <button className="px-3 py-1.5 bg-indigo-700 text-white rounded text-xs font-bold shadow-sm">
            + Log Audit Finding
          </button>
        </div>

        <div className="space-y-3 text-xs">
          {qualityCompliance.correctiveActions.map(capa => (
            <div key={capa.id} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="font-bold text-slate-900">{capa.finding} ({capa.id})</p>
                <p className="text-slate-600">Owner: <strong>{capa.owner}</strong> • Due: {capa.dueDate}</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded font-bold text-xs">
                {capa.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
