import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Stethoscope, 
  UserCheck, 
  Pill, 
  TestTube, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  FileText,
  Activity,
  Plus,
  Trash2,
  Send,
  Heart
} from 'lucide-react';

export const ClinicalWorkflowView = () => {
  const { selectedPatient, pharmacyEdl, labTests, aiRecommendations, handleAiAction } = useApp();
  const [activePathway, setActivePathway] = useState('general');
  const [diagnosis, setDiagnosis] = useState('Essential Hypertension & Mild Anemia');
  const [clinicalNotes, setClinicalNotes] = useState('Patient presented with mild morning headache. BP 144/92 mmHg confirmed on repeat check. Advised low salt diet & compliance to Labetalol.');
  
  // Selected meds for prescription draft
  const [prescription, setPrescription] = useState([
    { code: 'EDL-003', name: 'Tab Labetalol 100mg', dose: '1 tab twice daily', duration: '14 days' },
    { code: 'EDL-004', name: 'Tab IFA (Iron + Folic Acid)', dose: '1 tab daily after lunch', duration: '30 days' }
  ]);

  // Selected lab tests
  const [selectedLabs, setSelectedLabs] = useState(['LAB-01', 'LAB-03']);

  // AI Recommendation for selected patient
  const patientAi = aiRecommendations.find(r => r.patientId === selectedPatient?.id);

  const handleAddMed = (edlCode) => {
    const med = pharmacyEdl.find(m => m.code === edlCode);
    if (med && !prescription.find(p => p.code === edlCode)) {
      setPrescription(prev => [...prev, { code: med.code, name: med.name, dose: '1 tab daily', duration: '14 days' }]);
    }
  };

  const handleRemoveMed = (code) => {
    setPrescription(prev => prev.filter(p => p.code !== code));
  };

  const handleToggleLab = (labId) => {
    if (selectedLabs.includes(labId)) {
      setSelectedLabs(prev => prev.filter(id => id !== labId));
    } else {
      setSelectedLabs(prev => [...prev, labId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Clinician Suite Header */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">Frontline OPD Clinical Consultation Suite</h2>
            <p className="text-xs text-slate-500">1-Screen OPD Workflow • E-Prescriptions • Diagnostic Orders • AI Guardrails</p>
          </div>
        </div>

        {/* Selected Patient Mini Banner */}
        {selectedPatient && (
          <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs flex items-center space-x-3">
            <div>
              <span className="font-bold">{selectedPatient.name}</span> ({selectedPatient.age}y/{selectedPatient.gender})
              <p className="text-[10px] text-emerald-400 font-mono">{selectedPatient.uhid}</p>
            </div>
            <span className="px-2 py-0.5 bg-red-500/20 text-red-300 rounded font-bold text-[10px]">
              BP: {selectedPatient.vitalsHistory[0]?.bp}
            </span>
          </div>
        )}
      </div>

      {/* Clinical Pathway Selector */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-xl border border-slate-200 text-xs">
        <span className="font-bold text-slate-700 px-2">Clinical Pathway:</span>
        {[
          { id: 'general', name: 'General OPD' },
          { id: 'anc', name: 'Maternal ANC & PNC' },
          { id: 'child', name: 'Child Immunisation & Growth' },
          { id: 'ncd', name: 'NCD (Hypertension / Diabetes)' },
          { id: 'cancer', name: 'Cancer Screening (Oral/Breast/Cervical)' },
          { id: 'tb', name: 'TB & Communicable (Nikshay)' },
          { id: 'mental', name: 'Mental Health & Counselling' }
        ].map(pw => (
          <button
            key={pw.id}
            onClick={() => setActivePathway(pw.id)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activePathway === pw.id
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pw.name}
          </button>
        ))}
      </div>

      {/* Main Grid: Left 8 cols Clinical Form & E-Rx, Right 4 cols AI & Diagnostic Ordering */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Clinical Assessment, Diagnosis & E-Prescription */}
        <div className="lg:col-span-8 space-y-5">
          {/* Assessment & Diagnosis Form */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm pb-2 border-b border-slate-100 flex items-center">
              <FileText className="w-4 h-4 text-emerald-600 mr-2" />
              Clinical Assessment &amp; Diagnosis Notes
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Primary Diagnosis / Clinical Impression</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Clinician OPD Notes &amp; Symptoms</label>
                <textarea
                  rows={3}
                  value={clinicalNotes}
                  onChange={(e) => setClinicalNotes(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* E-Prescription Builder (EDL) */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Pill className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-sm">Essential Drug List (EDL) E-Prescription</h4>
              </div>
              <span className="text-[11px] text-slate-500">FEFO Auto-Batch Selection Enabled</span>
            </div>

            {/* Drug Picker */}
            <div className="flex items-center space-x-2 text-xs">
              <select
                onChange={(e) => {
                  if (e.target.value) handleAddMed(e.target.value);
                  e.target.value = '';
                }}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-medium text-slate-800"
              >
                <option value="">+ Add Medicine from State Essential Drug List (EDL)...</option>
                {pharmacyEdl.map(m => (
                  <option key={m.code} value={m.code}>
                    {m.name} ({m.category}) - Stock: {m.stockInHand} tabs
                  </option>
                ))}
              </select>
            </div>

            {/* Prescription Table */}
            <div className="space-y-2">
              {prescription.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900">{item.name}</span>
                    <p className="text-slate-600">Dose: <strong>{item.dose}</strong> • Duration: {item.duration}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveMed(item.code)}
                    className="p-1 text-slate-400 hover:text-red-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Test Ordering */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
              <TestTube className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">On-Site Diagnostic Test Orders</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {labTests.map(test => (
                <button
                  key={test.testId}
                  onClick={() => handleToggleLab(test.testId)}
                  className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${
                    selectedLabs.includes(test.testId)
                      ? 'border-blue-500 bg-blue-50/60 font-bold text-blue-900'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <p className="font-semibold">{test.name}</p>
                    <p className="text-[10px] text-slate-500">{test.domain} • TAT: {test.tatMinutes} min</p>
                  </div>
                  {selectedLabs.includes(test.testId) && (
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold">
              Save Draft
            </button>
            <button className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-md flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Finalise Encounter &amp; Transmit Orders</span>
            </button>
          </div>
        </div>

        {/* Right Column: AI Assistant & Referral Trigger */}
        <div className="lg:col-span-4 space-y-5">
          {/* AI Decision Support Panel */}
          <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 space-y-3 shadow-lg">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4 className="font-bold text-cyan-200 text-xs uppercase tracking-wider">Accountable AI Decision Assistant</h4>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-mono">
                Clinician Governed
              </span>
            </div>

            {patientAi ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-300">{patientAi.riskCategory}</span>
                    <span className="text-[10px] bg-amber-950 text-amber-200 px-1.5 py-0.5 rounded font-mono">
                      {patientAi.confidenceScore}% Conf.
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px]">{patientAi.signalDetails}</p>
                  
                  <div className="pt-2 border-t border-slate-700 space-y-1">
                    <p className="font-bold text-slate-200 text-[11px]">Proposed Next Best Actions:</p>
                    {patientAi.recommendedActions.map((act, i) => (
                      <p key={i} className="text-[11px] text-emerald-300">• {act}</p>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-700/60 font-mono">
                    Explainability: {patientAi.explainabilityBasis}
                  </p>
                </div>

                {/* Approval Action Buttons */}
                <div className="flex items-center space-x-2 pt-1">
                  <button
                    onClick={() => handleAiAction(patientAi.id, 'accept', 'Approved during MO OPD consult')}
                    className="w-1/2 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs shadow"
                  >
                    Accept Action
                  </button>
                  <button
                    onClick={() => handleAiAction(patientAi.id, 'reject', 'Clinician judgment override')}
                    className="w-1/2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-semibold text-xs border border-slate-700"
                  >
                    Reject / Defer
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic py-4 text-center">No active high-risk AI alerts for this patient encounter.</p>
            )}
          </div>

          {/* Quick Referral Trigger */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
              <Share2 className="w-4 h-4 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-sm">Raise Higher Facility Referral</h4>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Receiving Facility</label>
                <select className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg">
                  <option>Doon Medical College Hospital, Dehradun</option>
                  <option>AIIMS Rishikesh (Super Speciality)</option>
                  <option>District Hospital Haridwar</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input type="checkbox" id="emri108" defaultChecked className="rounded text-emerald-600" />
                <label htmlFor="emri108" className="font-medium text-slate-700">Request 108 Emergency Ambulance Transport</label>
              </div>

              <button className="w-full py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg font-bold text-xs shadow-sm mt-2">
                Generate Referral Slip (Hindi &amp; English)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
