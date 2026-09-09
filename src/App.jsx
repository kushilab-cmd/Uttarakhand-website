import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

// View Imports
import { ClinicBoardView } from './views/ClinicBoardView';
import { PatientRecordView } from './views/PatientRecordView';
import { ClinicalWorkflowView } from './views/ClinicalWorkflowView';
import { AiIntelligenceView } from './views/AiIntelligenceView';
import { ClusterDashboardView } from './views/ClusterDashboardView';
import { AlliedServicesView } from './views/AlliedServicesView';
import { ReferralManagementView } from './views/ReferralManagementView';
import { PharmacyDiagnosticsView } from './views/PharmacyDiagnosticsView';
import { FinanceCostView } from './views/FinanceCostView';
import { GovernmentIntegrationsView } from './views/GovernmentIntegrationsView';
import { QualityComplianceView } from './views/QualityComplianceView';
import { CitizenPortalView } from './views/CitizenPortalView';

const MainContent = () => {
  const { activeTab } = useApp();

  return (
    <main className="max-w-7xl mx-auto p-4 sm:p-6 pb-20">
      {activeTab === 'clinic_board' && <ClinicBoardView />}
      {activeTab === 'patient_record' && <PatientRecordView />}
      {activeTab === 'clinical_workflow' && <ClinicalWorkflowView />}
      {activeTab === 'ai_intelligence' && <AiIntelligenceView />}
      {activeTab === 'cluster_command' && <ClusterDashboardView />}
      {activeTab === 'allied_services' && <AlliedServicesView />}
      {activeTab === 'referral_care' && <ReferralManagementView />}
      {activeTab === 'pharmacy_logistics' && <PharmacyDiagnosticsView />}
      {activeTab === 'finance_cost' && <FinanceCostView />}
      {activeTab === 'govt_integrations' && <GovernmentIntegrationsView />}
      {activeTab === 'quality_compliance' && <QualityComplianceView />}
      {activeTab === 'citizen_portal' && <CitizenPortalView />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
        <Header />
        <Navigation />
        <div className="flex-1">
          <MainContent />
        </div>

        {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 py-4 border-t border-slate-800 text-xs mt-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © 2026 <strong>Uttarakhand Urban Health Network OS (UHNO)</strong> • Government of Uttarakhand × Healthspring PPP
            </p>
            <div className="flex items-center space-x-4">
              <span>113 UHWCs • 10 Clusters</span>
              <span>•</span>
              <span>NQAS &amp; Kayakalp Certified</span>
              <span>•</span>
              <span className="text-emerald-400">DPDP Act 2023 Compliant</span>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
