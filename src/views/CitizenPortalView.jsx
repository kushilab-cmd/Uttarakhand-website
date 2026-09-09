import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  Calendar, 
  FileText, 
  Pill, 
  TestTube, 
  Baby, 
  AlertCircle, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  User, 
  Volume2, 
  QrCode,
  Languages,
  ChevronRight
} from 'lucide-react';

export const CitizenPortalView = () => {
  const { language, setLanguage, selectedPatient, clinicQueue, activeUhwc } = useApp();
  const [activeTab, setActiveTab] = useState('token'); // 'token', 'records', 'services', 'grievance'
  const [grievanceText, setGrievanceText] = useState('');
  const [grievances, setGrievances] = useState([
    { id: 'GR-1049', date: '2026-09-01', subject: 'Lab Test Report Delay', status: 'Resolved', response: 'Report uploaded to ABHA record on Sept 2.' }
  ]);

  // Citizen translations dictionary
  const t = {
    hi: {
      appTitle: 'उत्तराखंड नागरिक स्वास्थ्य सेवा पोर्टल',
      findCenter: 'निकटतम शहरी स्वास्थ्य केंद्र खोजें',
      queueStatus: 'लाइव ओपीडी टोकन स्थिति',
      yourToken: 'आपका टोकन नंबर',
      currentServing: 'वर्तमान में देखा जा रहा टोकन',
      estWait: 'अनुमानित प्रतीक्षा समय',
      records: 'मेरी पर्ची एवं लैब रिपोर्ट',
      grievance: 'शिकायत एवं सुझाव दर्ज करें',
      family: 'परिवार के सदस्य'
    },
    en: {
      appTitle: 'Uttarakhand Citizen Health Access Portal',
      findCenter: 'Find Nearest Urban Health Center',
      queueStatus: 'Live OPD Queue Token Status',
      yourToken: 'Your Token Number',
      currentServing: 'Currently Serving Token',
      estWait: 'Estimated Wait Time',
      records: 'My Prescriptions & Lab Reports',
      grievance: 'Lodge Grievance or Feedback',
      family: 'Family Members'
    },
    gar: {
      appTitle: 'उत्तराखंड नागरिक स्वास्थ्य सेवा (गढ़वाली)',
      findCenter: 'नजीक का स्वास्थ्य केंद्र ढूँढा',
      queueStatus: 'लाइव टोकन स्थिति',
      yourToken: 'तुम्हारा टोकन',
      currentServing: 'अबी का टोकन',
      estWait: 'सबूर समय',
      records: 'दवाई एवं लैब रिपोर्ट',
      grievance: 'शिकायत दर्ज करा',
      family: 'परिवार'
    },
    kum: {
      appTitle: 'उत्तराखंड नागरिक स्वास्थ्य पोर्टल (कुमाऊंनी)',
      findCenter: 'पासक स्वास्थ्य केंद्र खोजा',
      queueStatus: 'लाइव टोकन हाल',
      yourToken: 'तुमार टोकन',
      currentServing: 'चलणो टोकन',
      estWait: 'प्रतीक्षा समय',
      records: 'दवाई व रिपोर्ट',
      grievance: 'शिकायत लिखा',
      family: 'कुटुंब'
    }
  };

  const currentT = t[language] || t.hi;

  const patientQueueItem = clinicQueue.find(q => q.patientId === selectedPatient?.id) || clinicQueue[0];

  const handleSendGrievance = () => {
    if (!grievanceText.trim()) return;
    setGrievances(prev => [
      {
        id: `GR-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().split('T')[0],
        subject: grievanceText,
        status: 'Under Review',
        response: 'Assigned to Clinic Manager for resolution.'
      },
      ...prev
    ]);
    setGrievanceText('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Mobile App Frame / Kiosk Header */}
      <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-rose-700/40 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Smartphone className="w-6 h-6 text-rose-300" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">{currentT.appTitle}</h2>
              <p className="text-xs text-rose-200/80">Government of Uttarakhand × Healthspring PPP Model</p>
            </div>
          </div>

          {/* Audio Prompt & Language Toggle */}
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold flex items-center space-x-1 border border-white/20">
              <Volume2 className="w-4 h-4 text-rose-300" />
              <span>Audio Prompt (आवाज़)</span>
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-900 text-white border border-rose-500/50 rounded-lg px-2.5 py-1 text-xs font-bold cursor-pointer"
            >
              <option value="hi">हिंदी (Hindi)</option>
              <option value="en">English</option>
              <option value="gar">गढ़वाली (Garhwali)</option>
              <option value="kum">कुमाऊंनी (Kumaoni)</option>
            </select>
          </div>
        </div>

        {/* Selected Citizen Card */}
        {selectedPatient && (
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <p className="font-bold text-base text-white">{selectedPatient.name}</p>
              <p className="text-rose-200">UHID: {selectedPatient.uhid} • ABHA: {selectedPatient.abhaId}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded font-bold border border-emerald-400/40">
                {selectedPatient.bplCard}
              </span>
              <QrCode className="w-7 h-7 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Sub Navigation Bar */}
      <div className="grid grid-cols-4 gap-2 text-xs font-bold">
        {[
          { id: 'token', label: currentT.queueStatus, icon: Clock },
          { id: 'records', label: currentT.records, icon: FileText },
          { id: 'services', label: currentT.findCenter, icon: MapPin },
          { id: 'grievance', label: currentT.grievance, icon: MessageSquare }
        ].map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                activeTab === item.id
                  ? 'bg-rose-700 text-white border-rose-800 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-center">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Live Queue Token */}
      {activeTab === 'token' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-center">
          <h3 className="font-bold text-slate-900 text-lg">{activeUhwc.name} - OPD Token</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
              <span className="text-xs text-slate-400 font-medium block">{currentT.yourToken}</span>
              <p className="text-3xl font-extrabold text-emerald-400 font-mono">{patientQueueItem.token}</p>
              <span className="text-[10px] text-emerald-300 font-semibold">{patientQueueItem.priority}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
              <span className="text-xs text-slate-500 font-medium block">{currentT.currentServing}</span>
              <p className="text-3xl font-extrabold text-blue-700 font-mono">T-002</p>
              <span className="text-[10px] text-slate-500">Dr. Vivek Bhatt</span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
              <span className="text-xs text-slate-500 font-medium block">{currentT.estWait}</span>
              <p className="text-3xl font-extrabold text-emerald-800">12 min</p>
              <span className="text-[10px] text-emerald-700 font-semibold">2 Patients Ahead</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
            <p className="font-bold text-slate-900">आपकी वर्तमान ओपीडी स्थिति (Current OPD Status):</p>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-semibold text-slate-800">वर्तमान चरण: {patientQueueItem.stage}</span>
            </div>
            <p className="text-slate-600">टिप्पणी: {patientQueueItem.notes}</p>
          </div>
        </div>
      )}

      {/* Tab 2: Records & Prescriptions */}
      {activeTab === 'records' && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-base border-b pb-2">आपकी ई-पर्ची एवं जांच रिपोर्ट (E-Prescriptions &amp; Reports)</h3>

          <div className="space-y-3">
            {selectedPatient?.medications.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{m.name}</p>
                  <p className="text-slate-600">खुराक: {m.dose} • रिफिल देय तिथि: {m.refillDue}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded font-bold">
                  रिफिल उपलब्ध
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Grievance Submission */}
      {activeTab === 'grievance' && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-base border-b pb-2">शिकायत एवं सुझाव दर्ज करें (Lodge Grievance)</h3>

          <div className="space-y-2">
            <label className="font-semibold text-slate-700 block">अपनी शिकायत या सुझाव लिखें (Enter Feedback in Hindi/English):</label>
            <textarea
              rows={3}
              value={grievanceText}
              onChange={(e) => setGrievanceText(e.target.value)}
              placeholder="उदा. लैब रिपोर्ट प्राप्त करने में देरी या सुविधा से संबंधित अनुभव..."
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-rose-500"
            />
            <button
              onClick={handleSendGrievance}
              className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl shadow flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>शिकायत भेजें (Submit Grievance)</span>
            </button>
          </div>

          {/* Previous Grievances */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">आपकी दर्ज शिकायतें (Submitted Grievances)</h4>
            {grievances.map(g => (
              <div key={g.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900">{g.subject} ({g.id})</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px]">
                    {g.status}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px]">उत्तर / कार्रवाई: "{g.response}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
