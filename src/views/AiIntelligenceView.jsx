import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  TrendingUp, 
  Building2, 
  User, 
  FileText,
  Activity,
  Layers,
  Lock
} from 'lucide-react';

export const AiIntelligenceView = () => {
  const { aiRecommendations, handleAiAction } = useApp();

  const patientAlerts = aiRecommendations.filter(r => r.level === 'Patient-Level Alert');
  const clusterSignals = aiRecommendations.filter(r => r.level === 'Cluster Public Health Signal');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-xl p-5 border border-cyan-800/50 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold border border-cyan-400/40">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-white">Accountable AI &amp; Intelligence Layer</h2>
              <p className="text-xs text-cyan-200/80">Clinician-Governed Predictive Signals • Explainable Models • Zero Automated Prescriptions</p>
            </div>
          </div>
        </div>

        {/* AI Guardrail Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 bg-emerald-950 text-emerald-300 rounded-lg font-semibold border border-emerald-800 flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            Clinician Governance Active
          </span>
          <span className="px-3 py-1 bg-cyan-950 text-cyan-300 rounded-lg font-semibold border border-cyan-800 flex items-center">
            <Lock className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
            DPDP Act 2023 Compliant
          </span>
        </div>
      </div>

      {/* PRD Section 7.3 Guardrails Alert Box */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2 text-xs text-slate-700">
        <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Mandatory Platform AI Guardrails &amp; Ethics Policy</span>
        </div>
        <p className="text-slate-600 leading-relaxed">
          1. <strong>Explainability Required:</strong> Every recommendation displays reason, source vitals/history, risk factors, date, and rule model version.<br />
          2. <strong>Clinician Responsibility:</strong> AI only identifies and prioritises signals. An authorised clinician must accept, modify, defer, or reject the proposed action.<br />
          3. <strong>No Automated Actions:</strong> AI is strictly prohibited from independently prescribing, diagnosing, closing referrals, or penalising staff.
        </p>
      </div>

      {/* Main Grid: 2 Sections - Patient-Level & Cluster-Level */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 7.1: Individual Patient Recommendations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Individual Patient Signals &amp; Risk Alerts</h3>
            </div>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
              {patientAlerts.length} Active
            </span>
          </div>

          <div className="space-y-4">
            {patientAlerts.map((rec) => (
              <div key={rec.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{rec.patientName}</span>
                    <span className="text-xs text-slate-500 font-mono ml-2">({rec.uhid})</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                    rec.status.includes('Approved') ? 'bg-emerald-100 text-emerald-800' :
                    rec.status.includes('Rejected') ? 'bg-slate-200 text-slate-700' :
                    'bg-amber-100 text-amber-900'
                  }`}>
                    {rec.status}
                  </span>
                </div>

                <div>
                  <p className="font-bold text-amber-800 text-xs flex items-center">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mr-1" />
                    {rec.riskCategory} ({rec.confidenceScore}% Confidence)
                  </p>
                  <p className="text-xs text-slate-700 mt-1">{rec.signalDetails}</p>
                </div>

                {/* Proposed Actions */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-800">Proposed Operational &amp; Clinical Actions:</p>
                  {rec.recommendedActions.map((act, idx) => (
                    <p key={idx} className="text-emerald-800">✓ {act}</p>
                  ))}
                </div>

                {/* Explainability Card */}
                <div className="p-2.5 rounded bg-cyan-50/60 border border-cyan-200 text-[11px] text-cyan-900 font-mono space-y-0.5">
                  <p className="font-bold">Explainability Basis:</p>
                  <p>{rec.explainabilityBasis}</p>
                  <p className="text-[10px] text-slate-500 pt-1">Model Version: {rec.version}</p>
                </div>

                {/* Interactive Review Controls */}
                {rec.status === 'Pending Review' && (
                  <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => handleAiAction(rec.id, 'accept', 'Accepted by MO during dashboard review')}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold text-xs shadow-sm flex items-center space-x-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Accept Recommendation</span>
                    </button>
                    <button
                      onClick={() => handleAiAction(rec.id, 'reject', 'Clinician override')}
                      className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-xs flex items-center space-x-1"
                    >
                      <XCircle className="w-3.5 h-3.5 text-slate-600" />
                      <span>Reject / Override</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 7.2: Cluster-Level Recommendations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-cyan-600" />
              <h3 className="font-bold text-slate-900 text-base">Cluster Public Health Signals &amp; Reallocation</h3>
            </div>
            <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2.5 py-0.5 rounded-full">
              {clusterSignals.length} Signals
            </span>
          </div>

          <div className="space-y-4">
            {clusterSignals.map((rec) => (
              <div key={rec.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-cyan-900 text-sm">{rec.riskCategory}</span>
                  <span className="text-xs bg-cyan-100 text-cyan-800 font-mono font-bold px-2 py-0.5 rounded">
                    {rec.confidenceScore}% Signal
                  </span>
                </div>

                <p className="text-xs text-slate-700">{rec.signalDetails}</p>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-800">Recommended Public Health Interventions:</p>
                  {rec.recommendedActions.map((act, idx) => (
                    <p key={idx} className="text-cyan-800">⚡ {act}</p>
                  ))}
                </div>

                <div className="p-2.5 rounded bg-slate-100 border border-slate-200 text-[11px] text-slate-700 font-mono">
                  <p className="font-bold">Surveillance Basis:</p>
                  <p>{rec.explainabilityBasis}</p>
                </div>
              </div>
            ))}

            {/* Additional Cluster Insights Card */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center">
                <TrendingUp className="w-4 h-4 text-emerald-600 mr-2" />
                Demand &amp; Supply Forecasting Engine
              </h4>
              <div className="space-y-2">
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <strong>Medicine Demand Forecast:</strong> Forecasted +35% increase in Labetalol &amp; Metformin consumption in Dehradun 1 cluster over next 30 days based on active chronic cohort additions.
                </div>
                <div className="p-2.5 rounded bg-indigo-50 border border-indigo-200 text-indigo-900">
                  <strong>Referral Leakage Detector:</strong> Identified 14% higher no-show rate for Ophthalmology specialist clinic at UHWC Majra. Recommended ASHA SMS reminders.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
