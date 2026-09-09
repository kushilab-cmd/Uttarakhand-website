import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  Video, 
  Stethoscope, 
  Heart, 
  CheckCircle2, 
  Plus,
  Filter,
  Map,
  List
} from 'lucide-react';

export const AlliedServicesView = () => {
  const { alliedCalendar, handleBookService, activeCluster } = useApp();
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [filterType, setFilterType] = useState('All');

  const filteredServices = alliedCalendar.filter(s => {
    if (filterType !== 'All' && s.type !== filterType) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Allied Services &amp; Specialist Capacity Calendar</h2>
              <p className="text-xs text-slate-500">Rotational Specialist Clinics • Teleconsultations • Outreach Camps • Mobile Medical Units</p>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
              viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Calendar View</span>
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
              viewMode === 'map' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Cluster Map View</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs">
        <span className="font-bold text-slate-700 flex items-center">
          <Filter className="w-3.5 h-3.5 mr-1" /> Service Type:
        </span>
        {['All', 'Specialist Clinic', 'Teleconsultation', 'Outreach Camp'].map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1 rounded font-semibold transition-all ${
              filterType === type
                ? 'bg-purple-800 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Content View */}
      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-900 border border-purple-200">
                    {service.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {service.status}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base">{service.title}</h3>
                <p className="text-xs text-slate-600 font-semibold">{service.doctor}</p>

                <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <p className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                    Location: <strong className="text-slate-800 ml-1">{service.location}</strong>
                  </p>
                  <p className="flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                    Date &amp; Time: <strong className="text-slate-800 ml-1">{service.date} ({service.time})</strong>
                  </p>
                </div>
              </div>

              {/* Capacity Progress & Booking Action */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-600">Capacity Booked:</span>
                    <span className="font-bold text-slate-900">{service.booked} / {service.capacity}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${(service.booked / service.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleBookService(service.id)}
                  disabled={service.booked >= service.capacity}
                  className={`w-full py-2 rounded-lg font-bold text-xs shadow-sm transition-all ${
                    service.booked >= service.capacity
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-purple-700 hover:bg-purple-800 text-white'
                  }`}
                >
                  {service.booked >= service.capacity ? 'Fully Booked' : '+ Book Patient Slot'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Cluster Map View Simulation */
        <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4 min-h-[400px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-100">Interactive Service Point Map ({activeCluster.name})</h3>
            <span className="text-xs text-emerald-400 font-mono">113 UHWCs &amp; Specialist Hubs Mapped</span>
          </div>

          {/* Interactive Map Visual Mock */}
          <div className="relative w-full h-80 bg-slate-950 rounded-xl border border-slate-800 p-4 flex items-center justify-center overflow-hidden">
            {/* Topographic Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Geo Markers for UHWCs */}
            <div className="relative w-full h-full">
              <div className="absolute top-1/4 left-1/3 flex items-center space-x-2 bg-emerald-950/90 border border-emerald-500 text-emerald-200 px-3 py-1.5 rounded-lg text-xs shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>UHWC Gandhigram (Specialist Gynaec)</span>
              </div>

              <div className="absolute top-1/2 left-2/3 flex items-center space-x-2 bg-purple-950/90 border border-purple-500 text-purple-200 px-3 py-1.5 rounded-lg text-xs shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span>UHWC Jakhan (eSanjeevani Teleconsult Hub)</span>
              </div>

              <div className="absolute bottom-1/4 left-1/2 flex items-center space-x-2 bg-amber-950/90 border border-amber-500 text-amber-200 px-3 py-1.5 rounded-lg text-xs shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Bakaralwala Slum (Mobile Medical Unit)</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center">
            Click markers to inspect specialist clinic availability, teleconsultation slots, or dispatch outreach units.
          </p>
        </div>
      )}
    </div>
  );
};
