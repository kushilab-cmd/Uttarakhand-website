import React, { createContext, useContext, useState } from 'react';
import { 
  USER_ROLES, 
  CLUSTERS, 
  UHWCS, 
  PATIENTS, 
  TODAY_CLINIC_QUEUE, 
  CLINIC_OPS_PANEL, 
  CLUSTER_EXCEPTIONS, 
  PHARMACY_EDL, 
  LAB_TESTS_CATALOG, 
  ALLIED_SERVICES_CALENDAR, 
  FINANCIAL_METRICS, 
  GOVT_INTEGRATIONS, 
  AI_RECOMMENDATIONS, 
  QUALITY_NQAS_KAYAKALP 
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & Role State
  const [currentRole, setCurrentRole] = useState('doctor'); // default to Medical Officer
  const [activeTab, setActiveTab] = useState('clinic_board'); // active view tab
  const [selectedClusterId, setSelectedClusterId] = useState('CL-01');
  const [selectedUhwcId, setSelectedUhwcId] = useState('UHWC-104');
  const [language, setLanguage] = useState('hi'); // 'hi', 'en', 'gar', 'kum'

  // Application Data States (Interactive)
  const [clinicQueue, setClinicQueue] = useState(TODAY_CLINIC_QUEUE);
  const [patients, setPatients] = useState(PATIENTS);
  const [selectedPatientId, setSelectedPatientId] = useState('P-104928');
  const [exceptions, setExceptions] = useState(CLUSTER_EXCEPTIONS);
  const [aiRecommendations, setAiRecommendations] = useState(AI_RECOMMENDATIONS);
  const [pharmacyEdl, setPharmacyEdl] = useState(PHARMACY_EDL);
  const [alliedCalendar, setAlliedCalendar] = useState(ALLIED_SERVICES_CALENDAR);
  const [govtIntegrations, setGovtIntegrations] = useState(GOVT_INTEGRATIONS);
  const [opsPanel, setOpsPanel] = useState(CLINIC_OPS_PANEL);

  // Active UHWC object
  const activeUhwc = UHWCS.find(u => u.id === selectedUhwcId) || UHWCS[0];
  const activeCluster = CLUSTERS.find(c => c.id === selectedClusterId) || CLUSTERS[0];
  const activeUserRole = USER_ROLES.find(r => r.id === currentRole) || USER_ROLES[0];
  const selectedPatient = patients.find(p => p.id === selectedPatientId) || patients[0];

  // Handler Actions
  const handleRoleChange = (roleId) => {
    setCurrentRole(roleId);
    // Auto switch active tab to best default for role
    if (roleId === 'citizen') setActiveTab('citizen_portal');
    else if (roleId === 'cluster_mgr') setActiveTab('cluster_command');
    else if (roleId === 'govt_reviewer') setActiveTab('cluster_command');
    else if (roleId === 'pharmacist') setActiveTab('pharmacy_logistics');
    else if (roleId === 'labtech') setActiveTab('pharmacy_logistics');
    else if (roleId === 'specialist') setActiveTab('allied_services');
    else if (roleId === 'sysadmin') setActiveTab('govt_integrations');
    else if (roleId === 'central_ops') setActiveTab('finance_cost');
    else setActiveTab('clinic_board');
  };

  const handleUpdateQueueStage = (queueId, newStage, newPharmacyStatus = null) => {
    setClinicQueue(prev => prev.map(item => {
      if (item.id === queueId) {
        return {
          ...item,
          stage: newStage,
          pharmacyStatus: newPharmacyStatus || item.pharmacyStatus
        };
      }
      return item;
    }));
  };

  const handleAiAction = (recId, actionType, notes = '') => {
    setAiRecommendations(prev => prev.map(rec => {
      if (rec.id === recId) {
        return {
          ...rec,
          status: actionType === 'accept' ? 'Approved & Executed' : actionType === 'modify' ? 'Modified by Clinician' : 'Rejected / Overridden',
          clinicianAction: {
            actionType,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            clinicianName: activeUserRole.name,
            notes
          }
        };
      }
      return rec;
    }));
  };

  const handleResolveException = (exceptionId, actionTakenNote) => {
    setExceptions(prev => prev.map(ex => {
      if (ex.id === exceptionId) {
        return {
          ...ex,
          status: 'Resolved',
          actionTaken: actionTakenNote,
          verificationStatus: 'Verified (Evidence Uploaded)'
        };
      }
      return ex;
    }));
  };

  const handleDispenseMedicine = (edlCode, quantity) => {
    setPharmacyEdl(prev => prev.map(item => {
      if (item.code === edlCode) {
        const newStock = Math.max(0, item.stockInHand - quantity);
        return {
          ...item,
          stockInHand: newStock,
          bufferMonths: +(newStock / (item.dailyConsumption * 30)).toFixed(1)
        };
      }
      return item;
    }));
  };

  const handleBookService = (serviceId) => {
    setAlliedCalendar(prev => prev.map(item => {
      if (item.id === serviceId) {
        return {
          ...item,
          booked: item.booked + 1
        };
      }
      return item;
    }));
  };

  return (
    <AppContext.Provider value={{
      currentRole,
      activeUserRole,
      handleRoleChange,
      activeTab,
      setActiveTab,
      selectedClusterId,
      setSelectedClusterId,
      activeCluster,
      selectedUhwcId,
      setSelectedUhwcId,
      activeUhwc,
      language,
      setLanguage,
      clinicQueue,
      handleUpdateQueueStage,
      patients,
      selectedPatientId,
      setSelectedPatientId,
      selectedPatient,
      exceptions,
      handleResolveException,
      aiRecommendations,
      handleAiAction,
      pharmacyEdl,
      handleDispenseMedicine,
      labTests: LAB_TESTS_CATALOG,
      alliedCalendar,
      handleBookService,
      financialMetrics: FINANCIAL_METRICS,
      govtIntegrations,
      opsPanel,
      qualityCompliance: QUALITY_NQAS_KAYAKALP
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
