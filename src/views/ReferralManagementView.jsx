import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Share2, 
  Building, 
  Truck, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Printer, 
  Languages,
  ArrowRight
} from 'lucide-react';

export const ReferralManagementView = () => {
  const { patients, selectedPatient } = useApp();
  const [slipLang, setSlipLang] = useState('hi'); // 'hi' or 'en'
  const [raisedReferrals, setRaisedReferrals] = useState([
    {
      id: 'REF-2026-901',
      patientName: 'Sunita Devi',
      uhid: 'UHID-UK-2026-88492',
      type: 'Specialist OBG (High Risk ANC)',
      sendingFacility: 'UHWC Gandhigram',
      receivingFacility: 'Doon Medical College Hospital',
      dateRaised: '2026-09-02',
      transportType: 'Self Arranged',
      status: 'Feedback Received',
      feedbackNote: 'Labetalol 100mg BD initiated. Follow up in 14 days at UHWC.',
      referralLeakageFlag: false
    },
    {
      id: 'REF-2026-902',
      patientName: 'Ramesh Singh Negi',
      uhid: 'UHID-UK-2026-77319',
      type: 'Routine NCD Review',
      sendingFacility: 'UHWC Jakhan',
      receivingFacility: 'AIIMS Rishikesh',
      dateRaised: '2026-08-28',
      transportType: 'Public Transport',
      status: 'Missed Appointment',
      feedbackNote: 'Patient did not arrive. ASHA follow-up task triggered.',
      referralLeakageFlag: true
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-bold">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Referral &amp; Care Continuity Network</h2>
              <p className="text-xs text-slate-500">2-Way Referral Tracking • 108 Emergency Integration • Bimodal Slips (हिंदी/English)</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
          <span className="text-slate-500">Referral Completion SLA:</span>
          <span className="font-bold text-emerald-700">86.4% Attended</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">Leakage Rate:</span>
          <span className="font-bold text-amber-700">13.6%</span>
        </div>
      </div>

      {/* Referral Workflow Stepper Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-sm overflow-x-auto">
        <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3">End-to-End Referral Continuum Workflow</p>
        <div className="flex items-center justify-between min-w-max space-x-2 text-xs">
          {['1. Clinical Decision', '2. Referral Raised', '3. Facility & Transport Selected', '4. Citizen Notified (SMS)', '5. Facility Attended', '6. Feedback Loop Received', '7. UHWC Follow-up Closed'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-[11px] flex items-center space-x-1.5">
                <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{step.replace(/^\d+\.\s*/, '')}</span>
              </div>
              {idx < 6 && <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Grid: Left Referral Slips & Raised List, Right Slip Preview Generator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Referral Tracking List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Active &amp; Historic Referrals ({raisedReferrals.length})</h3>
            <span className="text-xs text-slate-500">Doon Hospital &amp; AIIMS Rishikesh Network</span>
          </div>

          <div className="space-y-4">
            {raisedReferrals.map(ref => (
              <div key={ref.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{ref.patientName}</span>
                    <span className="text-xs text-slate-500 font-mono ml-2">({ref.uhid})</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                    ref.status === 'Feedback Received' ? 'bg-emerald-100 text-emerald-800' :
                    ref.status.includes('Missed') ? 'bg-red-100 text-red-800 border border-red-300' :
                    'bg-amber-100 text-amber-900'
                  }`}>
                    {ref.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Referral Type</span>
                    <span className="font-semibold text-indigo-900">{ref.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Receiving Hospital</span>
                    <span className="font-semibold text-slate-800">{ref.receivingFacility}</span>
                  </div>
                </div>

                {ref.feedbackNote && (
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 text-xs text-emerald-900">
                    <strong>Specialist Feedback Loop:</strong> "{ref.feedbackNote}"
                  </div>
                )}

                {ref.referralLeakageFlag && (
                  <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-xs text-red-900 font-semibold flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Referral Leakage Alert: Patient missed appointment. ASHA follow-up task auto-created.</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bimodal Referral Slip Generator (PRD Section 5.6) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-sm">Official Referral Slip Generator</h4>
              </div>

              {/* Language Switcher for Slip */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded text-xs font-semibold">
                <button
                  onClick={() => setSlipLang('hi')}
                  className={`px-2 py-0.5 rounded ${slipLang === 'hi' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600'}`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setSlipLang('en')}
                  className={`px-2 py-0.5 rounded ${slipLang === 'en' ? 'bg-indigo-700 text-white font-bold' : 'text-slate-600'}`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Printable Slip Preview */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 space-y-3 text-xs text-slate-900 font-sans">
              <div className="text-center border-b border-slate-300 pb-2">
                <h5 className="font-extrabold text-sm text-slate-900 uppercase">
                  {slipLang === 'hi' ? 'उत्तराखंड शहरी स्वास्थ्य नेटवर्क - संदर्भ पर्ची' : 'UTTARAKHAND URBAN HEALTH NETWORK - REFERRAL SLIP'}
                </h5>
                <p className="text-[10px] text-slate-500">Government of Uttarakhand × Healthspring PPP Network</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-600">{slipLang === 'hi' ? 'मरीज का नाम:' : 'Patient Name:'}</span>
                  <strong className="font-bold">{selectedPatient?.name}</strong>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-600">UHID:</span>
                  <strong className="text-emerald-700">{selectedPatient?.uhid}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{slipLang === 'hi' ? 'प्राथमिक स्वास्थ्य केंद्र:' : 'Sending UHWC:'}</span>
                  <strong>{selectedPatient?.uhwcName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{slipLang === 'hi' ? 'संदर्भित अस्पताल:' : 'Receiving Hospital:'}</span>
                  <strong className="text-indigo-800">Doon Medical College Hospital</strong>
                </div>
                <div className="flex justify-between text-red-700 font-bold">
                  <span>{slipLang === 'hi' ? 'कारण / निदान:' : 'Reason / Diagnosis:'}</span>
                  <span>{selectedPatient?.activeProblems[0]}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-600">
                <p className="font-bold mb-1">{slipLang === 'hi' ? 'निर्देश (Instructions):' : 'Instructions for Citizen:'}</p>
                <p>{slipLang === 'hi' ? '• कृपया काउंटर नंबर 4 (गेट 2) पर रिपोर्ट करें।' : '• Please report directly to Counter #4 (Gate 2).'}</p>
                <p>{slipLang === 'hi' ? '• आप आपातकालीन 108 एम्बुलेंस सेवा के पात्र हैं।' : '• Eligible for 108 Free Emergency Transport.'}</p>
              </div>

              <div className="pt-2 text-right">
                <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded font-bold text-xs flex items-center space-x-1 ml-auto shadow">
                  <Printer className="w-3.5 h-3.5" />
                  <span>{slipLang === 'hi' ? 'प्रिंट पर्ची' : 'Print Referral Slip'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
