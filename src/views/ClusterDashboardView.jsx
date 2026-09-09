import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UHWCS } from '../data/mockData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  Activity, 
  ShieldAlert, 
  UserCheck, 
  TrendingUp, 
  FileCheck, 
  Clock, 
  ChevronRight,
  Filter,
  Plus
} from 'lucide-react';

export const ClusterDashboardView = () => {
  const { activeCluster, exceptions, handleResolveException, selectedClusterId } = useApp();
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [selectedException, setSelectedException] = useState(null);
  const [resolutionNote, setResolutionNote] = useState('');

  const clusterFacilities = UHWCS.filter(u => u.clusterId === selectedClusterId);

  const filteredExceptions = exceptions.filter(e => {
    if (filterSeverity !== 'All' && e.severity !== filterSeverity) return false;
    return true;
  });

  // Chart data comparing UHWCs in cluster
  const facilityChartData = clusterFacilities.map(f => ({
    name: f.name.replace('UHWC ', ''),
    OPD: f.opdToday,
    Readiness: f.readinessScore,
    EDL: f.edlAvailability
  }));

  return (
    <div className="space-y-6">
      {/* Cluster Command Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded border border-amber-300">
              Cluster ID: {activeCluster.id}
            </span>
            <h2 className="text-xl font-bold text-slate-900">{activeCluster.name} Cluster Command Cockpit</h2>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            District: <strong className="text-slate-800">{activeCluster.district}</strong> • Manager: <strong className="text-slate-800">{activeCluster.clusterManager}</strong> • Total UHWCs: <strong className="text-slate-800">{activeCluster.totalFacilities}</strong> • Catchment Pop: {activeCluster.population.toLocaleString()}
          </p>
        </div>

        {/* Cluster Summary Metrics */}
        <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="text-center px-3 border-r border-slate-300">
            <p className="text-xs text-slate-500 font-medium">Daily Cluster OPD</p>
            <p className="text-xl font-bold text-amber-700">{activeCluster.opdAvgDaily}</p>
            <p className="text-[10px] text-slate-400">12 Facilities</p>
          </div>
          <div className="text-center px-3 border-r border-slate-300">
            <p className="text-xs text-slate-500 font-medium">NQAS Certified</p>
            <p className="text-xl font-bold text-emerald-700">{activeCluster.nqasCertified} / {activeCluster.totalFacilities}</p>
            <p className="text-[10px] text-slate-400">83% Certified</p>
          </div>
          <div className="text-center px-3">
            <p className="text-xs text-slate-500 font-medium">Open Exceptions</p>
            <p className="text-xl font-bold text-red-600">{exceptions.filter(e => e.status !== 'Resolved').length}</p>
            <p className="text-[10px] text-slate-400">Action Required</p>
          </div>
        </div>
      </div>

      {/* Facility Performance Comparison Chart */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-base">UHWC Performance Comparison ({activeCluster.name})</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">OPD Volume &amp; Readiness Score</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={facilityChartData} margin={{ top: 10, right: 10, left: 0, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} interval={0} angle={-15} textAnchor="end" />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip />
              <Legend />
              <Bar dataKey="OPD" fill="#10b981" radius={[4, 4, 0, 0]} name="Today OPD Load" />
              <Bar dataKey="Readiness" fill="#6366f1" radius={[4, 4, 0, 0]} name="Readiness Score (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Live Exception Management Cockpit (PRD Section 5.4.3) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="font-bold text-slate-900 text-base">Cluster Exception Management Cockpit</h3>
              <p className="text-xs text-slate-500">Owner Assignment • SLA Escalation • Verification Evidence Closure</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-500 font-medium">Severity Filter:</span>
            {['All', 'Critical', 'High', 'Medium'].map(sev => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-2.5 py-1 rounded font-semibold transition-all ${
                  filterSeverity === sev
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>

        {/* Exceptions Grid */}
        <div className="space-y-4">
          {filteredExceptions.map(ex => (
            <div
              key={ex.id}
              className={`rounded-xl p-4 border transition-all ${
                ex.status === 'Resolved' ? 'bg-emerald-50/40 border-emerald-300' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2.5 py-0.5 rounded font-bold text-xs ${
                      ex.severity === 'Critical' ? 'bg-red-100 text-red-800 border border-red-300' :
                      ex.severity === 'High' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {ex.severity} Severity
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{ex.category}</span>
                    <span className="text-xs text-slate-500 font-mono">({ex.id})</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Facility: <strong className="text-slate-800">{ex.facilityName}</strong> ({ex.clusterName}) • Identified: {ex.dateIdentified}
                  </p>
                </div>

                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full font-bold text-xs ${
                    ex.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                  }`}>
                    {ex.status}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1">{ex.verificationStatus}</p>
                </div>
              </div>

              {/* Exception Details Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 text-xs">
                <div className="space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-slate-500 font-medium">Service &amp; Patient Impact:</p>
                  <p className="font-semibold text-slate-800">{ex.impact}</p>
                  <p className="text-slate-500 pt-1 font-mono text-[11px]">Escalation Path: {ex.escalationPath}</p>
                </div>
                <div className="space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-slate-500 font-medium">Accountable Owner &amp; Timeline:</p>
                  <p className="font-semibold text-slate-900">Owner: {ex.assignedOwner}</p>
                  <p className="text-amber-800 font-mono text-[11px]">Due Date: {ex.dueDate}</p>
                  <p className="text-slate-700 pt-1"><strong>Action Taken:</strong> "{ex.actionTaken}"</p>
                </div>
              </div>

              {/* Action Trigger for Exception Resolution */}
              {ex.status !== 'Resolved' && (
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Enter resolution action note / evidence link..."
                    value={selectedException === ex.id ? resolutionNote : ''}
                    onChange={(e) => {
                      setSelectedException(ex.id);
                      setResolutionNote(e.target.value);
                    }}
                    className="w-full sm:w-2/3 p-2 bg-slate-50 border border-slate-300 rounded text-xs"
                  />
                  <button
                    onClick={() => {
                      handleResolveException(ex.id, resolutionNote || 'Action completed & evidence verified.');
                      setResolutionNote('');
                      setSelectedException(null);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold text-xs shadow-sm flex items-center justify-center space-x-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Attach Evidence &amp; Resolve Exception</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
