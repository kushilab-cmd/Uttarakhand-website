import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  Activity, 
  UserCheck, 
  ShieldAlert, 
  Pill, 
  TestTube, 
  ChevronRight,
  FileCheck,
  Zap,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

export const ClinicBoardView = () => {
  const { clinicQueue, handleUpdateQueueStage, activeUhwc, opsPanel, setSelectedPatientId, setActiveTab } = useApp();
  const [filterStage, setFilterStage] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  const filteredQueue = clinicQueue.filter(item => {
    if (filterStage !== 'All' && item.stage !== filterStage) return false;
    if (filterPriority !== 'All' && item.priorityLevel !== filterPriority) return false;
    return true;
  });

  const countsByStage = {
    All: clinicQueue.length,
    Triaged: clinicQueue.filter(q => q.stage === 'Triaged').length,
    Consulting: clinicQueue.filter(q => q.stage === 'Consulting').length,
    'Diagnostics Pending': clinicQueue.filter(q => q.stage === 'Diagnostics Pending').length,
    'Pharmacy Pending': clinicQueue.filter(q => q.stage === 'Pharmacy Pending').length,
    Referred: clinicQueue.filter(q => q.stage === 'Referred').length
  };

  return (
    <div className="space-y-6">
      {/* Clinic Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-300">
              Facility ID: {activeUhwc.id}
            </span>
            <h2 className="text-xl font-bold text-slate-900">{activeUhwc.name}</h2>
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              NQAS {activeUhwc.nqasStatus}
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            {activeUhwc.address} • Ward: <strong className="text-slate-800">{activeUhwc.ward}</strong> • Catchment Pop: <strong className="text-slate-800">{activeUhwc.population.toLocaleString()}</strong> ({activeUhwc.vulnerablePop.toLocaleString()} Vulnerable)
          </p>
        </div>

        {/* Quick OPD Summary Badge */}
        <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="text-center px-3 border-r border-slate-300">
            <p className="text-xs text-slate-500 font-medium">OPD Today</p>
            <p className="text-xl font-bold text-emerald-700">{activeUhwc.opdToday}</p>
            <p className="text-[10px] text-slate-400">Target &gt;90/day</p>
          </div>
          <div className="text-center px-3 border-r border-slate-300">
            <p className="text-xs text-slate-500 font-medium">Avg Wait Time</p>
            <p className="text-xl font-bold text-blue-700">14 min</p>
            <p className="text-[10px] text-slate-400">SLA &lt;20 min</p>
          </div>
          <div className="text-center px-3">
            <p className="text-xs text-slate-500 font-medium">Readiness Score</p>
            <p className="text-xl font-bold text-indigo-700">{activeUhwc.readinessScore}%</p>
            <p className="text-[10px] text-slate-400">Operational</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Left 8 cols Daily Patient Board, Right 4 cols Operations Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 100+ Daily Patient Board */}
        <div className="lg:col-span-8 space-y-4">
          {/* Section Header & Filters */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">Daily Patient OPD Flow Board</h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2.5 py-1 rounded text-slate-600 border border-slate-200">
                Live Queue: {clinicQueue.length} Patients Active
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1" /> Stage:
              </span>
              {Object.keys(countsByStage).map(stage => (
                <button
                  key={stage}
                  onClick={() => setFilterStage(stage)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    filterStage === stage
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {stage} ({countsByStage[stage]})
                </button>
              ))}
            </div>
          </div>

          {/* Patient Cards List */}
          <div className="space-y-3">
            {filteredQueue.map(patient => (
              <div
                key={patient.id}
                className={`bg-white rounded-xl p-4 border transition-all hover:shadow-md ${
                  patient.priorityLevel === 'Emergency'
                    ? 'border-red-400 bg-red-50/20'
                    : patient.priorityLevel === 'Urgent'
                    ? 'border-amber-400 bg-amber-50/20'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono font-bold text-sm shadow-sm">
                      {patient.token}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedPatientId(patient.patientId);
                            setActiveTab('patient_record');
                          }}
                          className="font-bold text-slate-900 hover:text-emerald-700 text-base underline decoration-emerald-400 decoration-2 text-left"
                        >
                          {patient.patientName}
                        </button>
                        <span className="text-xs text-slate-500 font-medium">
                          ({patient.age} yrs • {patient.gender})
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Assigned MO: <strong className="text-slate-700">{patient.assignedDoctor}</strong> • Reg: {patient.registeredTime} (Wait: {patient.waitTime})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      patient.priorityLevel === 'Emergency' ? 'bg-red-100 text-red-800 border-red-300' :
                      patient.priorityLevel === 'Urgent' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                      patient.priorityLevel === 'High' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                      'bg-blue-100 text-blue-800 border-blue-200'
                    }`}>
                      {patient.priority}
                    </span>
                  </div>
                </div>

                {/* Vitals & Clinical Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 text-xs bg-slate-50/80 px-3 rounded-lg my-3 border border-slate-100">
                  <div>
                    <span className="text-slate-400 font-medium block">Blood Pressure</span>
                    <span className={`font-bold ${patient.bp?.startsWith('15') || patient.bp?.startsWith('16') ? 'text-red-600 font-mono' : 'text-slate-800 font-mono'}`}>
                      {patient.bp || 'Not Measured'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Blood Glucose</span>
                    <span className={`font-bold ${patient.bloodGlucose > 180 ? 'text-red-600 font-mono' : 'text-slate-800 font-mono'}`}>
                      {patient.bloodGlucose ? `${patient.bloodGlucose} mg/dL` : 'Not Measured'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Lab Status</span>
                    <span className="font-semibold text-slate-700 flex items-center mt-0.5">
                      <TestTube className="w-3.5 h-3.5 text-blue-500 mr-1" />
                      {patient.labStatus}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Pharmacy Status</span>
                    <span className="font-semibold text-slate-700 flex items-center mt-0.5">
                      <Pill className="w-3.5 h-3.5 text-emerald-500 mr-1" />
                      {patient.pharmacyStatus}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic bg-white p-2 rounded border border-slate-200/60 mb-3">
                  "{patient.notes}"
                </p>

                {/* Interactive Stage Transition Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center space-x-1">
                    <span className="text-slate-500 font-medium">Current Stage:</span>
                    <span className="font-bold text-emerald-700 px-2 py-0.5 bg-emerald-50 rounded border border-emerald-200">
                      {patient.stage}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {patient.stage === 'Triaged' && (
                      <button
                        onClick={() => handleUpdateQueueStage(patient.id, 'Consulting')}
                        className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md font-semibold text-xs flex items-center space-x-1 shadow-sm"
                      >
                        <span>Start Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {patient.stage === 'Consulting' && (
                      <>
                        <button
                          onClick={() => handleUpdateQueueStage(patient.id, 'Diagnostics Pending')}
                          className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-xs flex items-center space-x-1"
                        >
                          <TestTube className="w-3.5 h-3.5" />
                          <span>Order Lab Test</span>
                        </button>
                        <button
                          onClick={() => handleUpdateQueueStage(patient.id, 'Pharmacy Pending', 'Ready for Dispensing')}
                          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium text-xs flex items-center space-x-1"
                        >
                          <Pill className="w-3.5 h-3.5" />
                          <span>Send Rx to Pharmacy</span>
                        </button>
                      </>
                    )}
                    {patient.stage === 'Diagnostics Pending' && (
                      <button
                        onClick={() => handleUpdateQueueStage(patient.id, 'Pharmacy Pending', 'Ready for Dispensing')}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold text-xs flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Lab Results Complete → Pharmacy</span>
                      </button>
                    )}
                    {patient.stage === 'Pharmacy Pending' && (
                      <button
                        onClick={() => handleUpdateQueueStage(patient.id, 'Closed', 'Dispensed')}
                        className="px-3 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded-md font-semibold text-xs flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Dispense & Close Encounter</span>
                      </button>
                    )}
                    {patient.stage === 'Closed' && (
                      <span className="text-slate-400 font-medium flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1" /> Encounter Complete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 4 cols Clinic Operations Panel */}
        <div className="lg:col-span-4 space-y-5">
          {/* Workforce Roster Panel */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-sm">Staff Attendance Roster</h4>
              </div>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-semibold border border-indigo-200">
                Aadhaar Biometric Logged
              </span>
            </div>

            <div className="space-y-2">
              {opsPanel.staffRoster.map((staff, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs border border-slate-100">
                  <div>
                    <p className="font-semibold text-slate-800">{staff.role}</p>
                    <p className="text-[11px] text-slate-500">{staff.staffName}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      staff.present === staff.planned ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {staff.present}/{staff.planned} Present
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{staff.biometricStatus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Readiness Panel */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
              <Zap className="w-4 h-4 text-amber-500" />
              <h4 className="font-bold text-slate-900 text-sm">Facility Readiness Checklist</h4>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded bg-slate-50">
                <span className="text-slate-600 font-medium">Power &amp; Backup:</span>
                <span className="font-semibold text-emerald-700">{opsPanel.readinessChecklist.powerSupply}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-slate-50">
                <span className="text-slate-600 font-medium">Internet Sync:</span>
                <span className="font-semibold text-emerald-700">{opsPanel.readinessChecklist.internetConnectivity}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-slate-50">
                <span className="text-slate-600 font-medium">Cold-Chain ILR:</span>
                <span className="font-semibold text-emerald-700">{opsPanel.readinessChecklist.coldChainILR}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-slate-50">
                <span className="text-slate-600 font-medium">EDL Drug Availability:</span>
                <span className="font-semibold text-emerald-700">{opsPanel.readinessChecklist.essentialMedicinesStock}</span>
              </div>
            </div>
          </div>

          {/* Open Issues Logger */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <h4 className="font-bold text-slate-900 text-sm">Open Facility Issues ({opsPanel.openIssues.length})</h4>
              </div>
              <button className="text-[11px] text-emerald-700 hover:underline font-semibold">
                + Log New Issue
              </button>
            </div>

            <div className="space-y-2">
              {opsPanel.openIssues.map((issue) => (
                <div key={issue.id} className="p-2.5 rounded-lg border border-amber-200 bg-amber-50/40 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">{issue.issue}</span>
                    <span className="px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded font-bold text-[10px]">
                      {issue.priority}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Owner: <strong>{issue.owner}</strong> • Due: {issue.dueDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
