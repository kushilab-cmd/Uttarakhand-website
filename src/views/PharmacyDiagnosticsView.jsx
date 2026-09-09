import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Pill, 
  TestTube, 
  Package, 
  Barcode, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  Search,
  Truck,
  FileSpreadsheet
} from 'lucide-react';

export const PharmacyDiagnosticsView = () => {
  const { pharmacyEdl, handleDispenseMedicine, labTests, activeUhwc } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('pharmacy'); // 'pharmacy', 'lab', 'logistics'
  const [dispenseQty, setDispenseQty] = useState(30);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-bold">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Pharmacy, Diagnostics &amp; Logistics Module</h2>
            <p className="text-xs text-slate-500">FEFO Stock Management • 2-Month Buffer Stock • Barcode Lab Samples • Inter-UHWC Transfers</p>
          </div>
        </div>

        {/* Sub-Tab Navigation */}
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('pharmacy')}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
              activeSubTab === 'pharmacy' ? 'bg-white text-indigo-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Pill className="w-3.5 h-3.5" />
            <span>Pharmacy &amp; FEFO</span>
          </button>
          <button
            onClick={() => setActiveSubTab('lab')}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
              activeSubTab === 'lab' ? 'bg-white text-blue-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TestTube className="w-3.5 h-3.5" />
            <span>Diagnostics &amp; Barcodes</span>
          </button>
          <button
            onClick={() => setActiveSubTab('logistics')}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
              activeSubTab === 'logistics' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Logistics &amp; Indents</span>
          </button>
        </div>
      </div>

      {/* Sub-Tab 1: Pharmacy & FEFO Dispensing */}
      {activeSubTab === 'pharmacy' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Essential Drug List (EDL) Inventory &amp; FEFO Dispensing</h3>
            <span className="text-xs text-slate-500 font-mono">2-Month Buffer Target: Met (98%)</span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">EDL Code</th>
                  <th className="p-3">Medicine Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stock in Hand</th>
                  <th className="p-3">Buffer Months</th>
                  <th className="p-3">Batch &amp; Expiry (FEFO)</th>
                  <th className="p-3 text-right">Quick Dispense Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {pharmacyEdl.map(item => (
                  <tr key={item.code} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-indigo-900">{item.code}</td>
                    <td className="p-3 font-semibold text-slate-900">{item.name}</td>
                    <td className="p-3 text-slate-600">{item.category}</td>
                    <td className="p-3 font-mono font-bold text-slate-900">{item.stockInHand} {item.unit}</td>
                    <td className="p-3 font-mono">
                      <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                        item.bufferMonths < 1.0 ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.bufferMonths} mos
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[11px] text-slate-700">
                      Batch: {item.batchNo} <br />
                      <span className={item.fefoStatus.includes('Alert') ? 'text-red-600 font-bold' : 'text-slate-500'}>
                        Exp: {item.expiryDate}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDispenseMedicine(item.code, 30)}
                        className="px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded font-bold text-xs shadow-sm"
                      >
                        Dispense 30 Tabs
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Diagnostics & Barcode Test Tracking */}
      {activeSubTab === 'lab' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Laboratory Sample Workflow &amp; Barcoding</h3>
            <span className="text-xs text-slate-500">Single-Prick Policy Enforced</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labTests.map(test => (
              <div key={test.testId} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-blue-900 text-sm">{test.name}</span>
                  <span className="text-xs bg-blue-50 text-blue-800 font-mono px-2 py-0.5 rounded border border-blue-200">
                    {test.domain}
                  </span>
                </div>

                <div className="text-xs space-y-1 text-slate-600">
                  <p>Sample Type: <strong>{test.sampleType}</strong></p>
                  <p>Turnaround Time (TAT): <strong>{test.tatMinutes} minutes</strong></p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Barcode className="w-6 h-6 text-slate-800" />
                    <span className="font-mono text-xs font-bold text-slate-900">BC-{test.testId}-2026</span>
                  </div>
                  <button className="px-2.5 py-1 bg-blue-700 text-white rounded text-xs font-semibold">
                    Print Sample Label
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Logistics & Indenting */}
      {activeSubTab === 'logistics' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm">Supply Chain Indent &amp; Inter-UHWC Transfer Pipeline</h3>
            <button className="px-3 py-1.5 bg-emerald-700 text-white rounded font-bold">
              + Raise New Central Indent
            </button>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 text-sm">Inter-UHWC Stock Transfer (Order #TR-881)</p>
                <p className="text-slate-600">Transferring 200 Tabs Labetalol 100mg from UHWC Gandhigram → UHWC Chunna Bhatt</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded font-bold">
                In Transit (Dispatch Confirmed)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
