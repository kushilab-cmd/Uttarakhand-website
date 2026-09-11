# Uttarakhand Unified UPHC Platform — Stakeholder Buy-In Site

**One patient, one record, across all 113 Urban Primary Health Centres.**

An executive-ready, interactive single-page pitch and briefing platform engineered for senior health decision-makers in Uttarakhand:
- **State Health Secretary**
- **Mission Director, National Health Mission (NHM) Uttarakhand**
- **District Magistrates** (Dehradun, Haridwar, Nainital)
- **Chief Medical Officers (CMOs)** & State Nodal Officers

---

## 🚀 How to Open & Run

This prototype is built as a **self-contained, zero-dependency web application** (HTML5, responsive CSS3, vanilla ES6 JavaScript). It requires no Node.js build steps, database installations, or active servers.

### Instant Local Launch
1. Navigate to the project directory:
   ```
   C:\Users\kushi\.gemini\antigravity-ide\scratch\uttarakhand-uphc-platform\
   ```
2. Double-click `index.html` or open it directly in any modern browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. **Conference Room / Projector Mode**: Use browser full-screen (`F11`) for presentations.
4. **Physical Briefing / PDF Export**: Click the **"Print Brief"** button in the navigation bar or press `Ctrl + P` / `Cmd + P` to trigger the built-in, ink-saving executive print layout.

---

## 🏛 The 3 Pillars Leadership Cares About

Senior leadership is not buying technology; they are approving governance, funding, and risk control:

1. **Funding Leverage**:
   - Central NHM conditionalities determine up to **20% of central NHM funding pools**.
   - This platform directly moves state conditionality scores (Ayushman Arogya Mandir operationalization, NCD screening coverage, clinical post recruitment, and state health spending share) through an automated, verifiable audit trail.
2. **Risk-Controlled Sequencing**:
   - No high-risk statewide big bang.
   - **Phase 1**: Single-district pilot in **Dehradun (34 UPHCs)** with an explicit **Go / No-Go review gate**.
   - **Phase 2**: Expansion to **Haridwar (21 UPHCs)** and **Nainital (18 UPHCs)** to validate multi-terrain connectivity.
   - **Phase 3**: Statewide rollout across remaining 10 districts (~40 UPHCs).
   - **Phase 4**: Continuous optimization and ML predictive supply chain.
3. **National Alignment (Federated Mesh)**:
   - Not a bespoke silo fighting national architecture; built strictly on Government of India (GoI) Swasth Bharat and ABDM standards (M1 → M2 → M3).
   - **19 National & State Portals** remain intact: HMIS, ABDM, PM-JAY/TMS, RCH, U-WIN, AB-HWC, eSanjeevani, IHIP/IDSP, Ni-kshay, NCD, DVDMS (e-Aushadhi), e-PIP, FMR/PFMS, HRIS, ASHA MIS, NQAS, Kayakalp, Mera Aspataal, and IPHS. Program data stays in native databases while the API gateway aggregates telemetry.

---

## 🗺 Interactive Command Centre Mockup (§3.4)

The Command Centre features a live two-pane executive view:
- **Left 62%**: GIS map of Uttarakhand's 13 districts with color-coded readiness markers across 113 UPHCs.
  - **Color-Blind Accessible Dual Coding**: Colors (Green, Yellow, Red, Grey) are paired with distinct geometric symbols (`✓`, `⚠`, `✕`, `○`) ensuring WCAG 2.1 AA compliance on projector screens.
  - **Multi-Level Drill Down**: Click any district boundary or name to view district statistics and facility list; click any facility to open the full 5-module inspection modal.
- **Right 38%**: 5 Dedicated KPI Modules matching the official PRD specifications:
  1. *Epidemiological Surveillance* (IHIP / IDSP): Outbreak heatmap (Dengue/Typhoid velocity), S-P-L classification turnaround.
  2. *Service Delivery & OPD* (HMIS, eSanjeevani): Daily footfall per facility, ABHA verification rate, NCD 30+ screening completion.
  3. *Maternal & Child Health* (RCH, U-WIN): High-Risk Pregnancy (HRP) identification rate, Fully Immunized Child (FIC) coverage.
  4. *Supply Chain & Logistics* (DVDMS e-Aushadhi): Top 50 Essential Drugs inventory, diagnostic equipment uptime.
  5. *Workforce & Governance* (AEBAS, HRIS, PFMS): Biometric attendance, sanctioned vs. vacant posts, FMR burn rate.

> **Data Transparency Note**:  
> All dashboard values are clearly flagged with the required disclaimer badge:  
> `"[ILLUSTRATIVE MOCKUP] Values shown are illustrative placeholders for demonstration purposes and will be replaced by live SDC/national-portal feeds during the pilot phase."`

---

## 💡 Executive Presentation Talking Points

When presenting this site to the Health Secretary:

1. **Lead with the Central Funding Pool (Hero & Notification Ribbon)**:
   *"Sir/Ma'am, up to 20% of our central NHM funding depends on verified conditionality performance. Currently, our Nodal Officers spend the last week of every month manually reconciling Excel sheets from month-old data. We are leaving money on the table."*
2. **Show the Cost of Inaction (Section 2 - Toggle to Spaghetti View)**:
   *"Our ASHAs and ANMs enter the same pregnant woman into RCH, U-WIN, and HMIS repeatedly. In peri-urban Dehradun and Haridwar where 3G drops, web forms crash. Our offline-first PWA with local SQLite guarantees zero work is lost."*
3. **Walk Through the Command Centre (Section 4 - Click Dehradun & UPHC Jakhan)**:
   *"This gives you immediate visibility into all 113 facilities. We know medicine stockouts 14 days before they happen, we know doctor attendance at 9:15 AM, and we catch Dengue clusters before they become epidemics."*
4. **Close with the Phased Ask (Section 10 - Decision Memo)**:
   *"We are not asking for a ₹50-crore statewide commitment today. We are asking for administrative approval to run a single-district pilot in Dehradun across 34 UPHCs, with a strict go/no-go gate before Haridwar or Nainital are touched."*
