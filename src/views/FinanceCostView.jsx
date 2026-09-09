import React from 'react';
import { useApp } from '../context/AppContext';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Cell } from 'recharts';
import { 
  IndianRupee, 
  TrendingUp, 
  PieChart as PieIcon, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  DollarSign
} from 'lucide-react';

export const FinanceCostView = () => {
  const { financialMetrics, activeCluster } = useApp();

  const COLORS = ['#10b981', '#6366f1', '#f59e0b', '#3b82f6', '#ec4899', '#8b5cf6'];

  const pieData = financialMetrics.costHeads.map(item => ({
    name: item.head.split(' (')[0],
    value: item.actual
  }));

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
            <IndianRupee className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Financial Control &amp; Cost Management Dashboard</h2>
            <p className="text-xs text-slate-500">Budget vs Actuals • Cost Head Variance • Unit Cost Metrics • Vendor Approvals</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
          <span className="text-slate-500">Monthly Cluster Budget:</span>
          <span className="font-bold text-slate-900">₹ {financialMetrics.budgetAllocated} Lakhs</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">Actual:</span>
          <span className="font-bold text-emerald-700">₹ {financialMetrics.actualExpenditure} Lakhs</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Cost Per OPD Visit</span>
          <p className="text-2xl font-extrabold text-emerald-700">{financialMetrics.unitCosts.costPerOpdVisit}</p>
          <span className="text-[10px] text-slate-400">Target &lt; ₹ 160</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Cost Per Unique Patient</span>
          <p className="text-2xl font-extrabold text-indigo-700">{financialMetrics.unitCosts.costPerUniquePatient}</p>
          <span className="text-[10px] text-slate-400">Longitudinal Care</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Cost Per NCD Retained Patient</span>
          <p className="text-2xl font-extrabold text-purple-700">{financialMetrics.unitCosts.costPerActiveNcdPatientRetained}</p>
          <span className="text-[10px] text-slate-400">30-Day Continuity</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Medicine Wastage Rate</span>
          <p className="text-2xl font-extrabold text-blue-700">{financialMetrics.unitCosts.medicineWastagePercentage}</p>
          <span className="text-[10px] text-slate-400">SLA &lt; 0.5%</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Budget vs Actuals Bar Chart */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Budget vs Actual Expenditure by Cost Head (Lakhs)</h3>
            <span className="text-xs font-mono text-slate-500">{financialMetrics.period}</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialMetrics.costHeads} margin={{ top: 10, right: 10, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="head" stroke="#64748b" fontSize={9} interval={0} angle={-20} textAnchor="end" />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#94a3b8" name="Budgeted (Lakhs)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actual" fill="#10b981" name="Actual Spent (Lakhs)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column: Cost Head Breakdown Pie Chart */}
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">Cost Head Distribution</h3>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
