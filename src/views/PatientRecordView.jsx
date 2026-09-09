import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { 
  FileText, 
  Search, 
  User, 
  ShieldCheck, 
  Activity, 
  Heart, 
  Pill, 
  Baby, 
  Calendar, 
  Share2, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export const PatientRecordView = () => {
  const { patients, selectedPatient, setSelectedPatientId, aiRecommendations, handleAiAction } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('summary'); // 'summary', 'vitals', 'meds', 'anc', 'timeline'

  // Filter patients by search
  const searchResults = patients.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.uhid.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.phone.includes(searchQuery) ||
    p.abhaId.includes(searchQuery)
  );

  // Patient AI alert if any
  const patientAiAlert = aiRecommendations.find(r => r.patientId === selectedPatient?.id);

  // Chart data for vitals
  const vitalsChartData = (selectedPatient?.vitalsHistory || []).map(v => {
    const bpParts = (v.bp || '120/80').split('/');
    return {
      date: v.date,
      Systolic: parseInt(bpParts[0], 10),
      Diastolic: parseInt(bpParts[1], 10),
      Glucose: v.glucose,
      Weight: v.weight,
      Hb: v.hb
    };
  }).reverse();

  return (
    <div className="space-y-6">
      {/* Patient Search & Lookup Header */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">Patient Longitudinal Health Record (360° View)</h2>
            <p className="text-xs text-slate-500">Consent-Aware Cross-Facility Electronic Medical Record • ABHA Enabled</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by Patient Name, UHID, ABHA # or Phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {searchQuery && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto divide-y divide-slate-100">
              {searchResults.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPatientId(p.id);
                    setSearchQuery('');
                  }}
                  className="w-full text-left p-2.5 hover:bg-emerald-50 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-slate-900">{p.name}</span>
                    <span className="text-slate-500 text-[11px] ml-2">({p.age} yrs • {p.gender})</span>
                    <p className="text-[10px] text-slate-400 font-mono">{p.uhid}</p>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                    {p.uhwcName}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Patient Banner */}
      {selectedPatient && (
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-xl p-5 shadow-md border border-slate-700 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Identity Info */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-bold text-xl flex items-center justify-center shadow-lg border border-emerald-300/30 shrink-0">
                {selectedPatient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{selectedPatient.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {selectedPatient.age} Yrs • {selectedPatient.gender} • Blood Group: {selectedPatient.bloodGroup}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
                  <span>UHID: <strong className="text-emerald-300">{selectedPatient.uhid}</strong></span>
                  <span>|</span>
                  <span>ABHA: <strong className="text-cyan-300">{selectedPatient.abhaId}</strong></span>
                  <span>|</span>
                  <span className="flex items-center text-slate-200">
                    <Phone className="w-3 h-3 text-slate-400 mr-1" />
                    {selectedPatient.phone}
                  </span>
                </div>
                <p className="text-xs text-slate-300 flex items-center pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 mr-1 shrink-0" />
                  {selectedPatient.address}
                </p>
              </div>
            </div>

            {/* Vulnerability Markers & Consent Badges */}
            <div className="flex flex-col items-start lg:items-end space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {selectedPatient.vulnerabilityFlags.map((flag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                    ⚠️ {flag}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                  {selectedPatient.bplCard}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                Consent Captured: ABDM Data Sharing &amp; Follow-up Communications
              </p>
            </div>
          </div>

          {/* AI Risk Alert Banner if present */}
          {patientAiAlert && (
            <div className="bg-amber-950/80 border border-amber-500/50 rounded-xl p-3.5 flex items-start justify-between gap-3 text-xs text-amber-200 shadow-inner">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <p className="font-bold text-amber-300 text-sm flex items-center">
                    AI Decision Recommendation: {patientAiAlert.riskCategory}
                    <span className="ml-2 text-[10px] bg-amber-900 text-amber-200 px-2 py-0.5 rounded font-mono">
                      Confidence {patientAiAlert.confidenceScore}%
                    </span>
                  </p>
                  <p className="text-slate-200 mt-0.5">{patientAiAlert.signalDetails}</p>
                  <p className="text-[11px] text-amber-400/80 mt-1 font-mono italic">
                    Basis: {patientAiAlert.explainabilityBasis}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => handleAiAction(patientAiAlert.id, 'accept', 'Approved during patient deep-dive review')}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs shadow"
                >
                  Accept Action
                </button>
                <button
                  onClick={() => handleAiAction(patientAiAlert.id, 'reject', 'Clinician deferral')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs"
                >
                  Override
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Deep-Dive Sub-Tabs Navigation */}
      <div className="flex items-center space-x-2 border-b border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveSubTab('summary')}
          className={`pb-2.5 px-3 border-b-2 transition-all ${activeSubTab === 'summary' ? 'border-emerald-600 text-emerald-800 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          Clinical Summary &amp; Active Problems
        </button>
        <button
          onClick={() => setActiveSubTab('vitals')}
          className={`pb-2.5 px-3 border-b-2 transition-all ${activeSubTab === 'vitals' ? 'border-emerald-600 text-emerald-800 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          Vitals Trend Charts (BP/Glucose/BMI)
        </button>
        <button
          onClick={() => setActiveSubTab('meds')}
          className={`pb-2.5 px-3 border-b-2 transition-all ${activeSubTab === 'meds' ? 'border-emerald-600 text-emerald-800 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          Medication History &amp; Refills
        </button>
        {selectedPatient?.ancCard && (
          <button
            onClick={() => setActiveSubTab('anc')}
            className={`pb-2.5 px-3 border-b-2 transition-all ${activeSubTab === 'anc' ? 'border-emerald-600 text-emerald-800 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            Maternal ANC / PNC Card
          </button>
        )}
        <button
          onClick={() => setActiveSubTab('timeline')}
          className={`pb-2.5 px-3 border-b-2 transition-all ${activeSubTab === 'timeline' ? 'border-emerald-600 text-emerald-800 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          Cross-Facility Care Timeline
        </button>
      </div>

      {/* Sub-Tab Content Rendering */}
      {selectedPatient && activeSubTab === 'summary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Problem List */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
              <Activity className="w-5 h-5 text-red-500" />
              <h4 className="font-bold text-slate-900 text-base">Active Clinical Problem List</h4>
            </div>
            <div className="space-y-2">
              {selectedPatient.activeProblems.map((prob, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-red-50/50 border border-red-200 text-xs font-semibold text-red-900 flex items-center justify-between">
                  <span>• {prob}</span>
                  <span className="text-[10px] bg-red-200 px-2 py-0.5 rounded text-red-900 font-mono">Enrolled</span>
                </div>
              ))}
            </div>

            {/* NCD & Chronic Disease Enrolment Card */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h5 className="font-bold text-xs text-slate-700 uppercase tracking-wider">NCD Registry Status</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Hypertension Registry</span>
                  <span className={`font-bold ${selectedPatient.ncdStatus.htEnrolled ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {selectedPatient.ncdStatus.htEnrolled ? 'Enrolled & Tracked' : 'Not Enrolled'}
                  </span>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Diabetes Registry</span>
                  <span className={`font-bold ${selectedPatient.ncdStatus.dmEnrolled ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {selectedPatient.ncdStatus.dmEnrolled ? 'Enrolled & Tracked' : 'Not Enrolled'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Continuum Status */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
              <Share2 className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-base">Referral &amp; Higher Facility Continuum</h4>
            </div>

            {selectedPatient.referrals.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 italic text-center">No active or historic higher-facility referrals raised.</p>
            ) : (
              selectedPatient.referrals.map((ref) => (
                <div key={ref.id} className="p-3.5 rounded-lg bg-indigo-50/50 border border-indigo-200 text-xs space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-900">{ref.type} Referral ({ref.id})</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-semibold text-[10px]">
                      {ref.status}
                    </span>
                  </div>
                  <p className="text-slate-700">Receiving Facility: <strong>{ref.facility}</strong></p>
                  <p className="text-slate-600">Reason: {ref.reason}</p>
                  {ref.outcomeNote && (
                    <p className="text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200 font-medium mt-1">
                      Feedback Note from Specialist: "{ref.outcomeNote}"
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {selectedPatient && activeSubTab === 'vitals' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-base">Longitudinal Vitals Trends Over Time</h4>
            </div>
            <span className="text-xs font-mono text-slate-500">Last 3 Visits Captured</span>
          </div>

          {/* Line Chart */}
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Systolic" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Diastolic" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Glucose" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Vitals Log Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-2 border">Visit Date</th>
                  <th className="p-2 border">Blood Pressure</th>
                  <th className="p-2 border">Blood Glucose</th>
                  <th className="p-2 border">Weight (kg)</th>
                  <th className="p-2 border">Hemoglobin (g/dL)</th>
                  <th className="p-2 border">SpO2 / HR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {selectedPatient.vitalsHistory.map((v, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-2 border font-mono font-medium text-slate-900">{v.date}</td>
                    <td className="p-2 border font-mono font-bold text-red-600">{v.bp} mmHg</td>
                    <td className="p-2 border font-mono font-bold text-amber-600">{v.glucose} mg/dL</td>
                    <td className="p-2 border font-mono">{v.weight} kg</td>
                    <td className="p-2 border font-mono">{v.hb} g/dL</td>
                    <td className="p-2 border font-mono">{v.spo2}% / {v.hr} bpm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedPatient && activeSubTab === 'meds' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Pill className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-base">Medication History &amp; Refill Adherence</h4>
            </div>
            <button className="px-3 py-1 bg-emerald-700 text-white rounded text-xs font-semibold shadow-sm">
              + Issue New E-Prescription
            </button>
          </div>

          <div className="space-y-3">
            {selectedPatient.medications.map((med, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{med.name}</span>
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      med.status.includes('Overdue') ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {med.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">Dosage: <strong>{med.dose}</strong> • Prescribed By: {med.prescribedBy}</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[11px]">Refill Due Date</span>
                  <span className="font-mono font-bold text-slate-900 text-xs">{med.refillDue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedPatient && activeSubTab === 'anc' && selectedPatient.ancCard && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <Baby className="w-5 h-5 text-pink-600" />
            <h4 className="font-bold text-slate-900 text-base">Antenatal Care (ANC) &amp; Maternal Health Card</h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
              <span className="text-slate-500 block">LMP Date</span>
              <span className="font-bold font-mono text-pink-900 text-sm">{selectedPatient.ancCard.lmp}</span>
            </div>
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
              <span className="text-slate-500 block">EDD (Expected Delivery)</span>
              <span className="font-bold font-mono text-pink-900 text-sm">{selectedPatient.ancCard.edd}</span>
            </div>
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
              <span className="text-slate-500 block">Obstetric History</span>
              <span className="font-bold text-slate-800">Gravida {selectedPatient.ancCard.gravida} • Para {selectedPatient.ancCard.para}</span>
            </div>
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
              <span className="text-slate-500 block">PMSMA Registered</span>
              <span className="font-bold text-emerald-800">Yes (9th of Month Clinic)</span>
            </div>
          </div>
        </div>
      )}

      {selectedPatient && activeSubTab === 'timeline' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <Clock className="w-5 h-5 text-teal-600" />
            <h4 className="font-bold text-slate-900 text-base">Cross-Facility Clinical Timeline</h4>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 space-y-6 py-2">
            {selectedPatient.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-sm" />
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-sm">{item.event}</span>
                    <span className="font-mono text-slate-500 text-[11px]">{item.date}</span>
                  </div>
                  <p className="text-slate-700 font-medium">Provider: {item.provider}</p>
                  <p className="text-slate-600">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
