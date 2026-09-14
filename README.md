# Altamira Regenerative Finance – Interactive Dashboard

**Customer-facing prototype for regenerative project evaluation and impact tracking in Colombia**

## Overview

This is an interactive web application demonstrating how impact investors, fund managers, and ESG officers can discover, evaluate, and track regenerative projects in Colombia using a unified dashboard.

### Key Features

- **Project Discovery**: Filter and search Colombian regenerative projects across multiple dimensions
  - Departments (Antioquia, Valle del Cauca, Cundinamarca, Meta, Bolívar)
  - Project Types (Agroforestry, Regenerative Cattle, Mangrove Restoration, Watershed Restoration, Regenerative Cacao/Coffee)
  - Investment Stages (Discovery, Diligence, Active, Monitoring)
  - Investment Size and other criteria

- **Interactive Comparison**: Side-by-side analysis of ESG and biodiversity metrics
  - Carbon avoided (tCO2e/year)
  - Biodiversity Index (0-100 scale)
  - Water Quality Proxy (0-100 scale)
  - Livelihoods Impact Index (0-100 scale)

- **Dashboard & Analytics**: Aggregated insights across project portfolio
  - Active project count and total hectare impact
  - Department distribution and investment concentration
  - Carbon and impact visualizations
  - Post-investment performance tracking

- **Post-Investment Tracking**: Monitor performance of active projects
  - Years operating and actual carbon delivery vs. promised
  - Beneficiary counts and livelihood outcomes
  - Performance rating (% of promised impact)

- **AI-Powered Analysis (Agentic)**: Thesis-fit matching and diligence gap identification
  - Project-investor mandate alignment assessment
  - Key diligence areas and risk prioritization
  - Recommendation rationale

## ⚠️ Fidelity Disclosure – Demo Data Only

**This prototype uses 100% SYNTHETIC DATA for demonstration purposes only.**

### What is Synthetic:
- ✓ All project names, descriptions, and locations (Colombian geographies are real; projects are illustrative)
- ✓ All impact metrics (carbon, biodiversity, water quality, livelihoods indices)
- ✓ Investment sizes, hectare figures, and operational timelines
- ✓ "Actual performance" figures for active projects
- ✓ Project narratives and risk assessments

### What is Real:
- ✓ Colombian geography (departments and municipalities are accurate)
- ✓ Project type categories (agroforestry, regenerative cattle, etc. are real approaches)
- ✓ ESG/impact framework structure (designed by Altamira advisory)
- ✓ UI/UX interaction patterns

### What This Demonstrates:
- How investors discover and compare regenerative projects
- How fragmented ESG/climate/biodiversity evidence is unified
- How project-thesis matching surfaces investment fit
- How post-investment tracking could work

### What This Does NOT Demonstrate:
- Live ESG data integrations
- Real project outcomes or verified impact attribution
- Production decision-support algorithms
- Actual portfolio performance

**For production use**: all synthetic data must be replaced with verified project catalogs, validated field assessments, audited impact metrics, and real investment decision history.

## Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **UI Components**: Fluent UI (Microsoft Office Fabric) for Microsoft Design Language
- **Visualizations**: Recharts for charts and data visualization
- **Styling**: CSS with responsive design and accessibility features
- **Package Manager**: npm

### Microsoft Technology Alignment

This prototype uses:
- **Fluent UI**: Microsoft's web-based component library implementing the Fluent Design System
- **React + TypeScript**: Production-grade web app architecture
- **Responsive Design**: Mobile-first approach aligned with Microsoft design principles
- **Accessibility**: WCAG 2.1 compliance following Microsoft standards

## Getting Started

### Prerequisites
- Node.js 16+ and npm 7+

### Installation

```bash
cd /home/vaion/altamira-prototype
npm install
```

### Development Server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` directory.

## Project Structure

```
altamira-prototype/
├── App.tsx                 # Main app component (3 tabs: discover, dashboard, tracking)
├── data.ts                 # Synthetic Colombian project dataset + fidelity disclosure
├── index.tsx               # React entry point
├── App.css                 # Custom styles and responsive design
├── index.css               # Global styles
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── public/
    └── index.html          # HTML template
```

## Key Components

### Discovery Tab
- Interactive filtering across department, project type, stage, investment size
- Search functionality across project name, municipality, description
- Project card grid with key metrics at a glance
- Click to open detailed project panel

### Dashboard Tab
- Key Performance Indicators (KPIs):
  - Active project count
  - Total hectares under management
  - Annual carbon avoidance (tCO2e/year)
  - Average biodiversity, water quality, and livelihoods indices
  - Total investment portfolio

- Analytics Visualizations:
  - Projects by department (bar chart)
  - Investment vs. carbon impact scatter plot
  - Active projects: promised vs. actual performance comparison

### Tracking Tab
- Table of active and monitoring projects
- Real-time performance indicators
- Beneficiary counts and livelihood outcomes
- Carbon delivery performance (with color coding: green ≥100%, yellow 90-99%, red <90%)

### Project Detail Panel
- Complete project narrative and investor thesis
- ESG and impact metrics
- Key risks and diligence focus areas
- Investment metrics and payback period
- AI-generated thesis-fit analysis and diligence gaps (agentic component)

## Data Model

Each project includes:

```typescript
interface ColombianProject {
  id: string;                      // Unique identifier (e.g., "CO-ANT-001")
  name: string;                    // Project name
  department: string;              // Colombian department
  municipality: string;            // Municipality
  projectType: string;             // One of 5 types
  stage: string;                   // Discovery | Diligence | Active | Monitoring
  investmentSize: number;          // USD
  hectaresManaged: number;         // Total land area
  
  // ESG & Impact Metrics (Deterministic Calculation)
  carbonAvoidedTco2e: number;      // tonnes CO2e/year
  biodiversityIndex: number;       // 0-100 scale
  waterQualityProxy: number;       // 0-100 scale
  livelihoodsIndex: number;        // 0-100 scale
  
  // Narrative
  shortDescription: string;
  investorThesis: string;
  keyRisks: string[];
  estimatedPayback: number;        // years
  
  // Post-Investment Performance (if Active/Monitoring)
  yearsOperating?: number;
  actualCarbonPerformance?: number;  // % of promised
  livelihoodsBeneficiaries?: number;
}
```

## Filtering & Search (Deterministic)

All filtering and search operations are deterministic and deterministically verified:

- **Department filter**: Exact match against project.department
- **Project type filter**: Exact match against project.projectType
- **Stage filter**: Exact match against project.stage
- **Investment size range**: Min/max bounds on project.investmentSize
- **Search text**: Substring match across name, municipality, description

## Aggregated Metrics (Deterministic Calculation)

Dashboard metrics are calculated directly from filtered project data:

- **Total Hectares**: Sum of hectaresManaged
- **Total Carbon Avoided**: Sum of carbonAvoidedTco2e
- **Average Biodiversity/Water/Livelihoods**: Mean across all metrics
- **Active Projects**: Count where stage = "Active" or "Monitoring"
- **Total Investment**: Sum of investmentSize

## Agentic Components

The dashboard includes **AI-powered** thesis-fit matching and diligence-gap identification:

- **Project-Investor Mandate Matching**: Compares project narrative and structured metrics against investor regenerative finance thesis
- **Risk Assessment & Diligence Framing**: Surfaces likely diligence gaps, red flags, and next evidence to request
- **Recommendation Rationale**: Explains why a project does or does not fit the mandate

These are grounded in the displayed demo records and validated against synthetic expert-authored labels.

## Deployment

### Local Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Optional Hosting
This prototype can be deployed to:
- **Azure Static Web Apps** - for global static hosting with authentication
- **Rayfin (Fabric Apps)** - for internal Fabric workspace sharing
- **Managed Apps** - for internal Entra-authenticated Power Platform apps
- Other static hosting (Vercel, GitHub Pages, etc.)

**Note**: Hosting selection is optional. The local development server is sufficient for prototype review.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios meet accessibility standards
- Focus indicators visible on all interactive elements

## Performance

- Optimized filtering with memoization
- Lazy chart rendering
- Responsive image handling
- <3 second initial load on typical broadband

## Next Steps for Production

1. **Replace Synthetic Data**:
   - Integrate with verified ESG/impact data vendors
   - Validate field assessments and impact audits
   - Implement real project catalog management

2. **Live Integrations**:
   - Connect to climate, biodiversity, and ESG databases
   - Implement real-time portfolio performance tracking
   - Add investor approval and workflow management

3. **Advanced Analytics**:
   - Causal impact attribution models
   - Predictive risk assessment
   - Portfolio optimization algorithms

4. **Authentication & Authorization**:
   - Multi-tenant investor workspace
   - Role-based access control
   - Audit logging and compliance

5. **Backend Services**:
   - Project management API
   - Impact verification and reporting
   - Payment and fund flow tracking

## Contributing

This is a prototype demonstrating the Altamira regenerative finance evaluation workflow. Feedback and suggestions for refinement are welcome.

## License

MIT

---

**Built with Microsoft Technology Stack**  
React 18 · TypeScript · Fluent UI · Azure-ready  

**For Altamira Regenerative Finance**  
Advancing mission-driven investment planning for regenerative and climate-resilient economies.

---

### Disclaimer

This prototype uses 100% synthetic data. All project information, impact metrics, locations, and scenarios are illustrative only and do not represent real investment opportunities, actual project outcomes, or verified impact claims. This tool is designed for demonstration and learning purposes only. Do not use for actual investment decisions without independent verification and professional advice.
