// Master Dataset for Uttarakhand Urban Health Network OS (UHNO)

export const USER_ROLES = [
  { id: 'doctor', name: 'Medical Officer', title: 'Medical Officer (Full Time)', cadre: 'Clinical', avatar: 'MO', color: 'bg-emerald-600' },
  { id: 'anm', name: 'ANM / Nurse / MLHP', title: 'Auxiliary Nurse Midwife', cadre: 'Nursing & Triage', avatar: 'ANM', color: 'bg-teal-600' },
  { id: 'asha', name: 'ASHA / Outreach Worker', title: 'Accredited Social Health Activist', cadre: 'Community Outreach', avatar: 'ASHA', color: 'bg-pink-600' },
  { id: 'pharmacist', name: 'Pharmacist', title: 'Chief Pharmacist', cadre: 'Pharmacy & EDL', avatar: 'PH', color: 'bg-indigo-600' },
  { id: 'labtech', name: 'Lab Technician', title: 'Medical Lab Technologist', cadre: 'Diagnostics', avatar: 'LT', color: 'bg-blue-600' },
  { id: 'clinic_mgr', name: 'Clinic Manager', title: 'UHWC Clinic Operations Manager', cadre: 'Facility Ops', avatar: 'CM', color: 'bg-violet-600' },
  { id: 'cluster_mgr', name: 'Cluster Manager', title: 'Cluster Operational Lead', cadre: 'Cluster Command', avatar: 'CLM', color: 'bg-amber-600' },
  { id: 'specialist', name: 'Specialist / Teleconsult', title: 'Consultant Gynaecologist / Paediatrician', cadre: 'Specialist Care', avatar: 'SP', color: 'bg-purple-600' },
  { id: 'govt_reviewer', name: 'Government Reviewer', title: 'State Nodal Officer / Mission Director NHM', cadre: 'State Oversight', avatar: 'GOV', color: 'bg-slate-700' },
  { id: 'central_ops', name: 'Healthspring Central Ops', title: 'Network Governance & Quality Lead', cadre: 'PPP Governance', avatar: 'HS', color: 'bg-cyan-700' },
  { id: 'sysadmin', name: 'System Administrator', title: 'Platform Admin & Integration Lead', cadre: 'IT & Security', avatar: 'ADM', color: 'bg-gray-800' },
  { id: 'citizen', name: 'Citizen / Patient', title: 'Registered Beneficiary', cadre: 'Citizen Portal', avatar: 'CZ', color: 'bg-rose-600' }
];

export const CLUSTERS = [
  { id: 'CL-01', name: 'Dehradun 1', district: 'Dehradun', totalFacilities: 12, population: 600000, clusterManager: 'Dr. Ramesh Bhandari', budgetLakhs: 480, opdAvgDaily: 1140, nqasCertified: 10 },
  { id: 'CL-02', name: 'Dehradun 2', district: 'Dehradun', totalFacilities: 12, population: 580000, clusterManager: 'Dr. Sunita Rawat', budgetLakhs: 460, opdAvgDaily: 1080, nqasCertified: 9 },
  { id: 'CL-03', name: 'Haridwar 1', district: 'Haridwar', totalFacilities: 12, population: 610000, clusterManager: 'Vikram Joshi', budgetLakhs: 490, opdAvgDaily: 1210, nqasCertified: 8 },
  { id: 'CL-04', name: 'Haridwar 2', district: 'Haridwar', totalFacilities: 11, population: 550000, clusterManager: 'Anita Sharma', budgetLakhs: 440, opdAvgDaily: 990, nqasCertified: 7 },
  { id: 'CL-05', name: 'Roorkee', district: 'Haridwar', totalFacilities: 12, population: 590000, clusterManager: 'Rajesh Kumar', budgetLakhs: 470, opdAvgDaily: 1120, nqasCertified: 11 },
  { id: 'CL-06', name: 'Haldwani', district: 'Nainital', totalFacilities: 11, population: 540000, clusterManager: 'Dr. Meenakshi Pant', budgetLakhs: 430, opdAvgDaily: 980, nqasCertified: 9 },
  { id: 'CL-07', name: 'Nainital & Ramnagar', district: 'Nainital', totalFacilities: 11, population: 520000, clusterManager: 'Suresh Chandra', budgetLakhs: 420, opdAvgDaily: 920, nqasCertified: 8 },
  { id: 'CL-08', name: 'Rishikesh', district: 'Dehradun', totalFacilities: 8, population: 400000, clusterManager: 'Deepak Negi', budgetLakhs: 320, opdAvgDaily: 760, nqasCertified: 7 },
  { id: 'CL-09', name: 'Kashipur', district: 'Udham Singh Nagar', totalFacilities: 12, population: 580000, clusterManager: 'Pooja Agarwal', budgetLakhs: 450, opdAvgDaily: 1050, nqasCertified: 10 },
  { id: 'CL-10', name: 'Rudrapur', district: 'Udham Singh Nagar', totalFacilities: 12, population: 600000, clusterManager: 'Harish Verma', budgetLakhs: 470, opdAvgDaily: 1100, nqasCertified: 9 }
];

export const UHWCS = [
  // Dehradun 1 Cluster (12 facilities)
  { id: 'UHWC-101', name: 'UHWC Jakhan / Katbangla', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 4', address: 'Near Rajpur Road, Jakhan', population: 48500, vulnerablePop: 14200, nqasStatus: 'Certified', readinessScore: 94, doctor: 'Dr. Ananya Ray', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 98, opdToday: 104, avgDailyOpd: 98, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-102', name: 'UHWC Seemadwar', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 12', address: 'ITBP Road, Seemadwar', population: 51200, vulnerablePop: 18500, nqasStatus: 'Certified', readinessScore: 91, doctor: 'Dr. Manoj Chauhan', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 95, opdToday: 112, avgDailyOpd: 102, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-103', name: 'UHWC Reeta Mandi', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 18', address: 'Old Subhash Nagar, Reeta Mandi', population: 49000, vulnerablePop: 22000, nqasStatus: 'Certified', readinessScore: 88, doctor: 'Dr. Priya Sharma', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 92, opdToday: 98, avgDailyOpd: 94, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-104', name: 'UHWC Gandhigram', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 22', address: 'Near Patel Nagar, Gandhigram', population: 53000, vulnerablePop: 24500, nqasStatus: 'Certified', readinessScore: 96, doctor: 'Dr. Vivek Bhatt', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 99, opdToday: 120, avgDailyOpd: 110, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-105', name: 'UHWC Majra', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 31', address: 'Delhi Bypass Road, Majra', population: 54000, vulnerablePop: 19800, nqasStatus: 'In Process', readinessScore: 84, doctor: 'Dr. Kavita Joshi', doctorPresent: false, nurseCount: 2, anmCount: 4, pharmacistCount: 1, labTechCount: 1, edlAvailability: 88, opdToday: 86, avgDailyOpd: 92, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-106', name: 'UHWC Kargi', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 35', address: 'Kargi Chowk, Haridwar Bypass', population: 52500, vulnerablePop: 21000, nqasStatus: 'Certified', readinessScore: 92, doctor: 'Dr. Saurabh Bisht', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 96, opdToday: 108, avgDailyOpd: 99, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-107', name: 'UHWC Adoiwala / D.L Road', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 8', address: 'DL Road, Adoiwala', population: 47800, vulnerablePop: 16200, nqasStatus: 'Certified', readinessScore: 90, doctor: 'Dr. Ruchi Verma', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 94, opdToday: 95, avgDailyOpd: 91, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-108', name: 'UHWC Chunna Bhatt', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 14', address: 'Chunna Bhatt, Raipur Road', population: 46200, vulnerablePop: 17900, nqasStatus: 'In Process', readinessScore: 82, doctor: 'Dr. Amit Kandari', doctorPresent: true, nurseCount: 1, anmCount: 4, pharmacistCount: 1, labTechCount: 0, edlAvailability: 85, opdToday: 78, avgDailyOpd: 88, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-109', name: 'UHWC Bhagat Singh Colony', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 42', address: 'Adhoiwala, Bhagat Singh Colony', population: 51000, vulnerablePop: 23100, nqasStatus: 'Certified', readinessScore: 89, doctor: 'Dr. Neha Rana', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 91, opdToday: 102, avgDailyOpd: 96, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-110', name: 'UHWC Deep Nagar', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 29', address: 'Ajabpur Kalan, Deep Nagar', population: 49500, vulnerablePop: 15400, nqasStatus: 'Certified', readinessScore: 93, doctor: 'Dr. Alok Thapliyal', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 97, opdToday: 100, avgDailyOpd: 95, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-111', name: 'UHWC Khurbura', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 16', address: 'Khurbura Mohalla', population: 48000, vulnerablePop: 13800, nqasStatus: 'Certified', readinessScore: 95, doctor: 'Dr. Sangeeta Semwal', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 98, opdToday: 106, avgDailyOpd: 97, linkedHospital: 'Doon Medical College Hospital' },
  { id: 'UHWC-112', name: 'UHWC Bakaralwala', clusterId: 'CL-01', clusterName: 'Dehradun 1', city: 'Dehradun', ward: 'Ward 25', address: 'Bakaralwala Basti', population: 47200, vulnerablePop: 20500, nqasStatus: 'In Process', readinessScore: 86, doctor: 'Dr. Pankaj Tripathi', doctorPresent: true, nurseCount: 2, anmCount: 4, pharmacistCount: 1, labTechCount: 1, edlAvailability: 90, opdToday: 91, avgDailyOpd: 90, linkedHospital: 'Doon Medical College Hospital' },

  // Haridwar 1 Cluster Sample
  { id: 'UHWC-201', name: 'UHWC Kankhal', clusterId: 'CL-03', clusterName: 'Haridwar 1', city: 'Haridwar', ward: 'Ward 5', address: 'Main Bazar, Kankhal', population: 52000, vulnerablePop: 18000, nqasStatus: 'Certified', readinessScore: 93, doctor: 'Dr. Rashmi Tyagi', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 96, opdToday: 115, avgDailyOpd: 105, linkedHospital: 'District Hospital Haridwar' },
  { id: 'UHWC-202', name: 'UHWC Tibdi', clusterId: 'CL-03', clusterName: 'Haridwar 1', city: 'Haridwar', ward: 'Ward 11', address: 'BHEL Boundary, Tibdi', population: 49000, vulnerablePop: 16500, nqasStatus: 'Certified', readinessScore: 90, doctor: 'Dr. Rahul Saini', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 94, opdToday: 98, avgDailyOpd: 96, linkedHospital: 'District Hospital Haridwar' },
  { id: 'UHWC-203', name: 'UHWC Jwalapur 1', clusterId: 'CL-03', clusterName: 'Haridwar 1', city: 'Haridwar', ward: 'Ward 20', address: 'Mohalla Kassaban, Jwalapur', population: 55000, vulnerablePop: 28000, nqasStatus: 'Certified', readinessScore: 95, doctor: 'Dr. Imran Khan', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 97, opdToday: 130, avgDailyOpd: 118, linkedHospital: 'District Hospital Haridwar' },

  // Roorkee Cluster Sample
  { id: 'UHWC-301', name: 'UHWC Purani Tehsil', clusterId: 'CL-05', clusterName: 'Roorkee', city: 'Roorkee', ward: 'Ward 3', address: 'Purani Tehsil Complex', population: 51000, vulnerablePop: 19000, nqasStatus: 'Certified', readinessScore: 96, doctor: 'Dr. Archana Malhotra', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 99, opdToday: 110, avgDailyOpd: 104, linkedHospital: 'Civil Hospital Roorkee' },
  { id: 'UHWC-302', name: 'UHWC Ganeshpur', clusterId: 'CL-05', clusterName: 'Roorkee', city: 'Roorkee', ward: 'Ward 9', address: 'Ganeshpur Main Road', population: 48500, vulnerablePop: 17200, nqasStatus: 'Certified', readinessScore: 91, doctor: 'Dr. Sanjeev Kumar', doctorPresent: true, nurseCount: 2, anmCount: 5, pharmacistCount: 1, labTechCount: 1, edlAvailability: 95, opdToday: 99, avgDailyOpd: 95, linkedHospital: 'Civil Hospital Roorkee' }
];

export const PATIENTS = [
  {
    id: 'P-104928',
    uhid: 'UHID-UK-2026-88492',
    abhaId: '88-4920-1192-4821',
    name: 'Sunita Devi',
    age: 34,
    gender: 'Female',
    phone: '+91 98371 42091',
    address: 'H.No. 42, Slum Basti, Gandhigram, Ward 22, Dehradun',
    uhwcId: 'UHWC-104',
    uhwcName: 'UHWC Gandhigram',
    bplCard: 'BPL-UK-44921',
    vulnerabilityFlags: ['High Risk Pregnancy', 'Mild Anemia', 'BPL Household'],
    bloodGroup: 'B+',
    activeProblems: ['Gestational Hypertension', 'Iron Deficiency Anemia (Hb 9.4 g/dL)', 'Trimester 2 ANC (Week 24)'],
    vitalsHistory: [
      { date: '2026-09-02', bp: '144/92', glucose: 132, weight: 58.5, hb: 9.4, spo2: 98, hr: 82 },
      { date: '2026-08-15', bp: '138/88', glucose: 126, weight: 57.0, hb: 9.6, spo2: 99, hr: 80 },
      { date: '2026-07-20', bp: '130/84', glucose: 118, weight: 55.2, hb: 10.1, spo2: 98, hr: 78 }
    ],
    medications: [
      { name: 'Tab Labetalol 100mg', dose: '1 tab twice daily', status: 'Active', prescribedBy: 'Dr. Vivek Bhatt', refillDue: '2026-09-15' },
      { name: 'Tab IFA (Iron + Folic Acid)', dose: '1 tab daily after lunch', status: 'Active', prescribedBy: 'Dr. Vivek Bhatt', refillDue: '2026-09-20' },
      { name: 'Tab Calcium Carbonate 500mg', dose: '1 tab daily after dinner', status: 'Active', prescribedBy: 'Dr. Vivek Bhatt', refillDue: '2026-09-20' }
    ],
    ancCard: {
      lmp: '2026-03-18',
      edd: '2026-12-25',
      gravida: 3,
      para: 2,
      ttDoses: 2,
      pmsmaReg: true,
      highRiskCategory: 'Pregnancy Induced Hypertension'
    },
    ncdStatus: { screened: true, htEnrolled: true, dmEnrolled: false, lastBp: '144/92', bpControlStatus: 'Watch / High' },
    referrals: [
      { id: 'REF-8821', type: 'Specialist (OBG)', facility: 'Doon Medical College Hospital', status: 'Feedback Received', reason: 'High Risk ANC evaluation for BP monitoring', outcomeNote: 'Advised Labetalol 100mg BD & fortnightly BP check at UHWC.' }
    ],
    timeline: [
      { date: '2026-09-02', event: 'ANC Checkup & Triage', provider: 'ANM Rekha Sharma', details: 'BP 144/92 mmHg, Hb 9.4 g/dL. AI Flagged High Risk ANC.' },
      { date: '2026-08-15', event: 'PMSMA Clinic Visit', provider: 'Dr. Vivek Bhatt', details: 'Obstetric ultrasound normal. Labetalol started.' },
      { date: '2026-07-20', event: 'Household Registration', provider: 'ASHA Meena Devi', details: 'ABHA Linkage complete. BPL verification done.' }
    ]
  },
  {
    id: 'P-104929',
    uhid: 'UHID-UK-2026-77319',
    abhaId: '77-3190-8842-1092',
    name: 'Ramesh Singh Negi',
    age: 58,
    gender: 'Male',
    phone: '+91 94120 55192',
    address: 'Plot 18, Jakhan Basti, Ward 4, Dehradun',
    uhwcId: 'UHWC-101',
    uhwcName: 'UHWC Jakhan / Katbangla',
    bplCard: 'APL',
    vulnerabilityFlags: ['Elderly / Frail', 'Uncontrolled Diabetes & HTN'],
    bloodGroup: 'O+',
    activeProblems: ['Type 2 Diabetes Mellitus', 'Essential Hypertension', 'Missed Refill (28 Days)'],
    vitalsHistory: [
      { date: '2026-09-05', bp: '154/98', glucose: 218, weight: 74.0, hb: 13.5, spo2: 97, hr: 88 },
      { date: '2026-07-10', bp: '142/90', glucose: 175, weight: 74.8, hb: 13.8, spo2: 98, hr: 84 },
      { date: '2026-05-18', bp: '136/86', glucose: 140, weight: 75.2, hb: 14.0, spo2: 98, hr: 78 }
    ],
    medications: [
      { name: 'Tab Metformin 500mg SR', dose: '1 tab twice daily before meals', status: 'Active (Refill Overdue)', prescribedBy: 'Dr. Ananya Ray', refillDue: '2026-08-10' },
      { name: 'Tab Telmisartan 40mg', dose: '1 tab daily morning', status: 'Active (Refill Overdue)', prescribedBy: 'Dr. Ananya Ray', refillDue: '2026-08-10' }
    ],
    ancCard: null,
    ncdStatus: { screened: true, htEnrolled: true, dmEnrolled: true, lastBp: '154/98', bpControlStatus: 'Uncontrolled' },
    referrals: [],
    timeline: [
      { date: '2026-09-05', event: 'OPD Consultation', provider: 'Dr. Ananya Ray', details: 'Complained of headache & polyuria. BP 154/98. AI system triggered refill overdue alert & counsellor referral.' },
      { date: '2026-07-10', event: 'NCD Follow-up', provider: 'ANM Sarita Rawat', details: 'BP 142/90. Dispensed 30-day supply.' }
    ]
  },
  {
    id: 'P-104930',
    uhid: 'UHID-UK-2026-66120',
    abhaId: '66-1209-4431-8891',
    name: 'Aarav Kumar',
    age: 2,
    gender: 'Male',
    phone: '+91 97190 33810',
    address: 'Bakaralwala Basti, Ward 25, Dehradun',
    uhwcId: 'UHWC-112',
    uhwcName: 'UHWC Bakaralwala',
    bplCard: 'BPL-UK-99120',
    vulnerabilityFlags: ['Delayed Immunisation (DPT Booster Overdue)', 'Mild Stunting'],
    bloodGroup: 'A+',
    activeProblems: ['DPT Booster 1 Due', 'Vitamin A Drops Pending', 'Acute Upper Respiratory Tract Infection'],
    vitalsHistory: [
      { date: '2026-09-08', bp: '90/60', glucose: 95, weight: 10.8, hb: 11.0, spo2: 99, hr: 110 }
    ],
    medications: [
      { name: 'Syrup Paracetamol 125mg/5ml', dose: '4 ml thrice daily for fever', status: 'Active', prescribedBy: 'Dr. Pankaj Tripathi', refillDue: '2026-09-12' }
    ],
    ancCard: null,
    ncdStatus: { screened: false, htEnrolled: false, dmEnrolled: false },
    referrals: [],
    timeline: [
      { date: '2026-09-08', event: 'Child Health Triage', provider: 'ANM Geeta Rani', details: 'Fever 100.2°F, mild cough. Growth chart plotted (underweight percentile 15%). AI flagged DPT dropout risk.' }
    ]
  }
];

export const TODAY_CLINIC_QUEUE = [
  { id: 'Q-01', token: 'T-001', patientId: 'P-104928', patientName: 'Sunita Devi', age: 34, gender: 'Female', stage: 'Triaged', priority: 'High Risk ANC', priorityLevel: 'Urgent', registeredTime: '09:12 AM', waitTime: '18 min', assignedDoctor: 'Dr. Vivek Bhatt', bp: '144/92', bloodGlucose: 132, labStatus: 'Completed', pharmacyStatus: 'Pending', notes: 'High BP in 2nd Trimester. Needs MO consultation & Labetalol dispensing.' },
  { id: 'Q-02', token: 'T-002', patientId: 'P-104929', patientName: 'Ramesh Singh Negi', age: 58, gender: 'Male', stage: 'Consulting', priority: 'High BP / Uncontrolled Diabetes', priorityLevel: 'High', registeredTime: '09:20 AM', waitTime: '25 min', assignedDoctor: 'Dr. Ananya Ray', bp: '154/98', bloodGlucose: 218, labStatus: 'Completed', pharmacyStatus: 'Pending', notes: 'Missed medication refill by 28 days. AI trigger for adherence counselling.' },
  { id: 'Q-03', token: 'T-003', patientId: 'P-104930', patientName: 'Aarav Kumar', age: 2, gender: 'Male', stage: 'Diagnostics Pending', priority: 'Child Danger Signs / Fever', priorityLevel: 'Moderate', registeredTime: '09:35 AM', waitTime: '12 min', assignedDoctor: 'Dr. Pankaj Tripathi', bp: '90/60', bloodGlucose: 95, labStatus: 'In Process (Hemogram)', pharmacyStatus: 'Not Started', notes: 'Fever 100.2°F. DPT vaccine due list alert.' },
  { id: 'Q-04', token: 'T-004', patientId: 'P-104931', patientName: 'Fatima Begum', age: 46, gender: 'Female', stage: 'Waiting', priority: 'TB Symptoms (Cough > 2 wks)', priorityLevel: 'High', registeredTime: '09:42 AM', waitTime: '8 min', assignedDoctor: 'Dr. Vivek Bhatt', bp: '128/82', bloodGlucose: 145, labStatus: 'Sputum Ordered', pharmacyStatus: 'Not Started', notes: 'Night sweats & persistent fever. Nikshay screening workflow initialized.' },
  { id: 'Q-05', token: 'T-005', patientId: 'P-104932', patientName: 'Harish Chandra Pant', age: 67, gender: 'Male', stage: 'Pharmacy Pending', priority: 'Elderly / Frail', priorityLevel: 'Normal', registeredTime: '09:05 AM', waitTime: '40 min', assignedDoctor: 'Dr. Vivek Bhatt', bp: '136/84', bloodGlucose: 120, labStatus: 'Not Required', pharmacyStatus: 'Dispensing (Metformin/Amlodipine)', notes: 'Routine OPD consultation completed. Prescriptions sent to pharmacy.' },
  { id: 'Q-06', token: 'T-006', patientId: 'P-104933', patientName: 'Priyanka Rawat', age: 26, gender: 'Female', stage: 'Referred', priority: 'Maternal Emergency', priorityLevel: 'Emergency', registeredTime: '08:50 AM', waitTime: '5 min', assignedDoctor: 'Dr. Ananya Ray', bp: '162/104', bloodGlucose: 110, labStatus: 'Urgent Urine Protein (+++)', pharmacyStatus: 'N/A', notes: 'Severe Preeclampsia suspected. 108 Ambulance dispatched to Doon Hospital.' }
];

export const CLINIC_OPS_PANEL = {
  facilityId: 'UHWC-104',
  facilityName: 'UHWC Gandhigram',
  staffRoster: [
    { role: 'Medical Doctor', planned: 1, present: 1, staffName: 'Dr. Vivek Bhatt', biometricStatus: 'Punched In (08:55 AM)' },
    { role: 'Staff Nurse (GNM)', planned: 2, present: 2, staffName: 'Sunita & Priya', biometricStatus: 'Punched In (08:50 AM)' },
    { role: 'ANM (Female)', planned: 5, present: 5, staffName: 'Meena, Rekha, Anita, Geeta, Asha', biometricStatus: 'Punched In (08:45 AM)' },
    { role: 'Pharmacist', planned: 1, present: 1, staffName: 'Sanjay Thapliyal', biometricStatus: 'Punched In (08:52 AM)' },
    { role: 'Lab Technician', planned: 1, present: 1, staffName: 'Rajesh Dobhal', biometricStatus: 'Punched In (08:58 AM)' },
    { role: 'Data Entry Operator', planned: 1, present: 1, staffName: 'Amit Kumar', biometricStatus: 'Punched In (08:40 AM)' },
    { role: 'MPHW / Housekeeping', planned: 1, present: 1, staffName: 'Ram Lal', biometricStatus: 'Punched In (08:30 AM)' }
  ],
  readinessChecklist: {
    powerSupply: 'Functional (Grid + Solar 5kW Hybrid Inverter Active)',
    internetConnectivity: 'Active (Primary FTTH 50Mbps + 4G Backup)',
    coldChainILR: 'Normal (+3.8°C - Temp Logged)',
    diagnosticSemiAnalyzer: 'Calibrated & Operational',
    essentialMedicinesStock: '99% Available (1 Stock-out risk flagged)',
    biomedicalWasteStatus: 'Segregated & Color Binned (Collection scheduled 04:30 PM)'
  },
  openIssues: [
    { id: 'ISS-401', issue: 'Semi-auto Bioanalyzer reagent low (Glucose Reagent kit)', priority: 'Medium', owner: 'Lab Tech Rajesh', dueDate: '2026-09-10', status: 'Indent Raised' },
    { id: 'ISS-402', issue: 'Waiting room fan #2 motor noise', priority: 'Low', owner: 'Clinic Mgr Amit', dueDate: '2026-09-12', status: 'Work Order Issued' }
  ]
};

export const CLUSTER_EXCEPTIONS = [
  { id: 'EX-901', category: 'Workforce Vacancy / Prolonged Absence', facilityId: 'UHWC-105', facilityName: 'UHWC Majra', clusterName: 'Dehradun 1', severity: 'High', dateIdentified: '2026-09-04', impact: 'Medical Officer on 10-day sick leave; patient wait time exceeded 45 mins.', assignedOwner: 'Cluster Manager (Dr. Ramesh Bhandari)', dueDate: '2026-09-07', escalationPath: 'Healthspring Central HR -> State Nodal Officer', actionTaken: 'Locum Doctor Dr. Sneha Semwal deployed for 5 days.', status: 'In Resolution', verificationStatus: 'Pending Verification' },
  { id: 'EX-902', category: 'Stock-Out Alert (Essential Medicine)', facilityId: 'UHWC-108', facilityName: 'UHWC Chunna Bhatt', clusterName: 'Dehradun 1', severity: 'Critical', dateIdentified: '2026-09-06', impact: 'Tab Labetalol 100mg stock at 0 days buffer. High risk ANC patients affected.', assignedOwner: 'Logistics Lead (Rajiv Sharma)', dueDate: '2026-09-08', escalationPath: 'CMSD Depot -> Healthspring Supply Manager', actionTaken: 'Inter-UHWC stock transfer of 200 tabs from UHWC Gandhigram initiated.', status: 'Resolved', verificationStatus: 'Verified (Proof Uploaded)' },
  { id: 'EX-903', category: 'Referral Leakage Spike', facilityId: 'UHWC-103', facilityName: 'UHWC Reeta Mandi', clusterName: 'Dehradun 1', severity: 'Medium', dateIdentified: '2026-09-01', impact: '18% of raised referrals for NCD specialist clinic did not arrive at receiving hospital.', assignedOwner: 'Outreach Lead (Meena Devi)', dueDate: '2026-09-10', escalationPath: 'Cluster Manager', actionTaken: 'ASHA home visit drive assigned for 12 missed referral patients.', status: 'Open', verificationStatus: 'Under Review' }
];

export const PHARMACY_EDL = [
  { code: 'EDL-001', name: 'Tab Metformin 500mg SR', category: 'NCD / Diabetes', unit: 'Tablets', stockInHand: 4200, bufferMonths: 2.1, minReorder: 1500, batchNo: 'MF-2026-092', expiryDate: '2027-08-31', fefoStatus: 'Normal', dailyConsumption: 70 },
  { code: 'EDL-002', name: 'Tab Amlodipine 5mg', category: 'NCD / Hypertension', unit: 'Tablets', stockInHand: 3800, bufferMonths: 1.9, minReorder: 1200, batchNo: 'AM-2026-114', expiryDate: '2027-11-30', fefoStatus: 'Normal', dailyConsumption: 65 },
  { code: 'EDL-003', name: 'Tab Labetalol 100mg', category: 'Maternal Health / ANC', unit: 'Tablets', stockInHand: 450, bufferMonths: 0.4, minReorder: 500, batchNo: 'LB-2026-041', expiryDate: '2026-12-31', fefoStatus: 'Near Expiry / Stock Alert', dailyConsumption: 25 },
  { code: 'EDL-004', name: 'Tab IFA (Iron 100mg + Folic Acid 500mcg)', category: 'RMNCH+A', unit: 'Tablets', stockInHand: 8500, bufferMonths: 3.2, minReorder: 2000, batchNo: 'IFA-2026-302', expiryDate: '2028-03-31', fefoStatus: 'Normal', dailyConsumption: 90 },
  { code: 'EDL-005', name: 'Syrup Paracetamol 125mg/5ml', category: 'Pediatrics / OPD', unit: 'Bottles 60ml', stockInHand: 320, bufferMonths: 1.8, minReorder: 100, batchNo: 'PCM-2026-088', expiryDate: '2027-05-31', fefoStatus: 'Normal', dailyConsumption: 6 }
];

export const LAB_TESTS_CATALOG = [
  { testId: 'LAB-01', name: 'Hemoglobin (Hb)', domain: 'Hematology', sampleType: 'Venous / Capillary Blood', tatMinutes: 15, cost: 0, barcodeRequired: true },
  { testId: 'LAB-02', name: 'Random Blood Glucose (RBG)', domain: 'Biochemistry', sampleType: 'Capillary Blood', tatMinutes: 5, cost: 0, barcodeRequired: false },
  { testId: 'LAB-03', name: 'Urine Dipstick (Protein & Sugar)', domain: 'Urinalysis', sampleType: 'Urine', tatMinutes: 10, cost: 0, barcodeRequired: true },
  { testId: 'LAB-04', name: 'Sputum for AFB (TB Screening)', domain: 'Microbiology', sampleType: 'Sputum', tatMinutes: 120, cost: 0, barcodeRequired: true },
  { testId: 'LAB-05', name: 'Rapid Malaria Antigen (Pf/Pv)', domain: 'Communicable', sampleType: 'Whole Blood', tatMinutes: 15, cost: 0, barcodeRequired: true }
];

export const ALLIED_SERVICES_CALENDAR = [
  { id: 'AS-101', title: 'Specialist Gynaecology Clinic', type: 'Specialist Clinic', doctor: 'Dr. Meenakshi Sundaram (MD OBG)', location: 'UHWC Gandhigram', date: '2026-09-11', time: '10:00 AM - 02:00 PM', capacity: 25, booked: 18, waitlist: 2, status: 'Scheduled' },
  { id: 'AS-102', title: 'Pediatric Teleconsultation Session', type: 'Teleconsultation', doctor: 'Dr. Alok Verma (MD Pediatrics - AIIMS Rishikesh)', location: 'eSanjeevani Hub / UHWC Jakhan', date: '2026-09-12', time: '11:00 AM - 01:00 PM', capacity: 15, booked: 12, waitlist: 0, status: 'Scheduled' },
  { id: 'AS-103', title: 'Slum Health & NCD Screening Camp', type: 'Outreach Camp', doctor: 'Dr. Vivek Bhatt & ANM Team', location: 'Bakaralwala Slum Cluster', date: '2026-09-14', time: '09:00 AM - 01:00 PM', capacity: 100, booked: 78, waitlist: 0, status: 'Confirmed' }
];

export const FINANCIAL_METRICS = {
  clusterId: 'CL-01',
  clusterName: 'Dehradun 1',
  period: 'August 2026',
  budgetAllocated: 40.0, // Lakhs per month
  actualExpenditure: 38.4, // Lakhs
  costHeads: [
    { head: 'Human Resources (Doctors, Nurses, ANMs, Staff)', budget: 22.0, actual: 21.8, variance: -0.2 },
    { head: 'Medicines & Medical Consumables', budget: 8.5, actual: 8.2, variance: -0.3 },
    { head: 'Diagnostics & Reagents', budget: 3.5, actual: 3.6, variance: +0.1 },
    { head: 'IT Hardware, Software & Connectivity', budget: 2.0, actual: 1.9, variance: -0.1 },
    { head: 'Facility Operations, Utilities & BMW', budget: 2.5, actual: 2.4, variance: -0.1 },
    { head: 'Outreach, Camps & Specialist Sessions', budget: 1.5, actual: 1.5, variance: 0.0 }
  ],
  unitCosts: {
    costPerOpdVisit: '₹ 142.50',
    costPerUniquePatient: '₹ 285.00',
    costPerActiveNcdPatientRetained: '₹ 410.00',
    costPerCompletedReferral: '₹ 180.00',
    medicineWastagePercentage: '0.12%'
  }
};

export const GOVT_INTEGRATIONS = [
  { domain: 'ABDM', systemName: 'Ayushman Bharat Digital Mission', apiStatus: 'Active / Connected', syncFrequency: 'Real-time', fieldsExchanged: 'ABHA ID, Consent Token, FHIR Health Records', errorCount: 0, fallbackMode: 'Offline Cache & Sync' },
  { domain: 'eSanjeevani', systemName: 'National Teleconsultation Portal', apiStatus: 'Active', syncFrequency: 'Real-time API', fieldsExchanged: 'Encounter Details, Prescription, Specialist Notes', errorCount: 1, fallbackMode: 'Assisted Teleconsult Queue' },
  { domain: 'HMIS', systemName: 'National Health Mission HMIS Portal', apiStatus: 'Active', syncFrequency: 'Daily Auto Batch', fieldsExchanged: 'OPD Counts, Immunisation, Maternal Indicators', errorCount: 0, fallbackMode: 'Monthly CSV Upload' },
  { domain: 'RCH Portal', systemName: 'Reproductive & Child Health Portal', apiStatus: 'Active', syncFrequency: 'Daily Sync', fieldsExchanged: 'ANC Registration, High Risk Flag, Birth Outcome', errorCount: 2, fallbackMode: 'Manual Recheck Queue' },
  { domain: 'Nikshay', systemName: 'National TB Elimination System', apiStatus: 'Active', syncFrequency: 'Event Driven', fieldsExchanged: 'Sputum Test Order, Presumptive TB Case, Outcome', errorCount: 0, fallbackMode: 'Web Portal Entry' },
  { domain: 'IDSP', systemName: 'Integrated Disease Surveillance Project', apiStatus: 'Active', syncFrequency: 'Weekly / Immediate Alert', fieldsExchanged: 'Syndromic Line Lists (Fever, Diarrhoea, Dengue)', errorCount: 0, fallbackMode: 'Email Alert Fallback' },
  { domain: '108 Emergency', systemName: 'EMRI 108 Emergency Services', apiStatus: 'Active', syncFrequency: 'Real-time Dispatch API', fieldsExchanged: 'Emergency Location, Patient Vitals, Destination Hospital', errorCount: 0, fallbackMode: 'Direct Hotline Call' },
  { domain: 'Aadhaar Biometric', systemName: 'State Staff Attendance Portal', apiStatus: 'Active', syncFrequency: 'Real-time Punch', fieldsExchanged: 'Staff ID, Punch Timestamp, Geo-tag', errorCount: 0, fallbackMode: 'Manual Register Approval' }
];

export const AI_RECOMMENDATIONS = [
  {
    id: 'AI-REC-01',
    patientId: 'P-104928',
    patientName: 'Sunita Devi',
    uhid: 'UHID-UK-2026-88492',
    level: 'Patient-Level Alert',
    riskCategory: 'High Risk ANC Deterioration',
    confidenceScore: 94,
    signalDetails: '3 consecutive elevated blood pressure readings (Latest: 144/92 mmHg) in Week 24 pregnancy + mild anemia (Hb 9.4 g/dL).',
    recommendedActions: [
      'Perform immediate BP recheck in quiet triage room.',
      'Schedule Obstetrician review for Labetalol dose optimization.',
      'Check medicine adherence & issue 14-day refill.',
      'Assign ASHA Meena Devi for weekly home BP monitoring.'
    ],
    explainabilityBasis: 'Clinical Rule ANC-HTN-v3.2: SBP >140 or DBP >90 after 20 weeks gestation requires immediate MO review and high-risk pathway enrolment.',
    status: 'Pending Review',
    version: 'AlphaGenome-CareEngine v2.4'
  },
  {
    id: 'AI-REC-02',
    patientId: 'P-104929',
    patientName: 'Ramesh Singh Negi',
    uhid: 'UHID-UK-2026-77319',
    level: 'Patient-Level Alert',
    riskCategory: 'NCD Care Continuity Dropout',
    confidenceScore: 89,
    signalDetails: 'Metformin & Telmisartan refill overdue by 28 days. Latest OPD BP 154/98 mmHg & Blood Glucose 218 mg/dL.',
    recommendedActions: [
      'Add patient to High-Risk Chronic Care Review list.',
      'Send IVR/SMS reminder in Hindi for immediate clinic visit.',
      'Provide lifestyle & adherence counselling.',
      'Re-issue 30-day chronic care EDL supply.'
    ],
    explainabilityBasis: 'Predictive Adherence Model NCD-DROP-v1.8: >21 days refill gap correlates with 3.4x higher risk of hypertensive crisis.',
    status: 'Pending Review',
    version: 'AlphaGenome-CareEngine v2.4'
  },
  {
    id: 'AI-REC-03',
    patientId: null,
    patientName: null,
    level: 'Cluster Public Health Signal',
    riskCategory: 'Dengue & Acute Fever Outbreak Signal',
    confidenceScore: 91,
    signalDetails: 'Cluster Dehradun 1 (Wards 14 & 22) recorded a 3.8x spike in fever OPD cases with thrombocytopenia over the last 7 days.',
    recommendedActions: [
      'Alert Municipal Corporation for vector control & fogging in Ward 14 & 22.',
      'Increase Rapid Dengue NS1 / IgM testing kit buffer by 150 units at UHWC Chunna Bhatt.',
      'Deploy ASHA fever surveillance teams for door-to-door screening.'
    ],
    explainabilityBasis: 'Surveillance Engine IDSP-SIGNAL-v4.0: Cluster threshold of >15 syndromic fever cases in 48 hours crossed.',
    status: 'Pending Review',
    version: 'AlphaGenome-Epidemix v1.2'
  }
];

export const QUALITY_NQAS_KAYAKALP = {
  facilityId: 'UHWC-104',
  facilityName: 'UHWC Gandhigram',
  overallNqasScore: 94.2,
  kayakalpScore: 96.0,
  domains: [
    { name: 'Service Provision', score: 96, status: 'Compliant' },
    { name: 'Patient Rights & Consent', score: 98, status: 'Compliant' },
    { name: 'Inputs & Infrastructure', score: 92, status: 'Compliant' },
    { name: 'Support Services (Power/Water)', score: 95, status: 'Compliant' },
    { name: 'Clinical Care & SOP Adherence', score: 94, status: 'Compliant' },
    { name: 'Infection Control & BMW', score: 96, status: 'Compliant' },
    { name: 'Quality Management & Audits', score: 90, status: 'Compliant' },
    { name: 'Outcomes & Patient Experience', score: 93, status: 'Compliant' }
  ],
  correctiveActions: [
    { id: 'CAPA-101', finding: 'Biomedical waste bin liners in lab needed color-code replacement', owner: 'Lab Tech Rajesh', dueDate: '2026-09-05', status: 'Closed (Evidence Uploaded)' },
    { id: 'CAPA-102', finding: 'Fire exit route signage illumination bulb broken', owner: 'Clinic Mgr Amit', dueDate: '2026-09-10', status: 'In Progress' }
  ]
};
