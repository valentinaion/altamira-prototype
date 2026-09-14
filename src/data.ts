/**
 * SYNTHETIC COLOMBIAN REGENERATIVE PROJECT DATASET
 * 
 * ⚠️ DEMO DATA: All projects, metrics, locations, and impact data are synthetic
 * and illustrative only. This data is created for prototype demonstration purposes
 * and does not represent real projects, verified impact, or actual investment opportunities.
 * 
 * Generated for: Altamira Regenerative Finance – Interactive Project Dashboard
 * Geography: Colombia (illustrative departments)
 * Project Types: Agroforestry, Regenerative Cattle, Mangrove Restoration, Watershed Restoration, Regenerative Cacao/Coffee
 */

export interface ColombianProject {
  id: string;
  name: string;
  department: string; // Colombian department
  municipality: string;
  projectType: 'Agroforestry' | 'Regenerative Cattle' | 'Mangrove Restoration' | 'Watershed Restoration' | 'Regenerative Cacao/Coffee';
  stage: 'Discovery' | 'Diligence' | 'Active' | 'Monitoring';
  investmentSize: number; // USD
  hectaresManaged: number;
  
  // ESG & Impact Metrics (ALL SYNTHETIC)
  carbonAvoidedTco2e: number; // tonnes CO2e/year avoided or sequestered
  biodiversityIndex: number; // 0-100 scale
  waterQualityProxy: number; // 0-100 scale (proxy measure)
  livelihoodsIndex: number; // 0-100 scale
  
  // Narrative & Risk
  shortDescription: string;
  investorThesis: string; // Why this project aligns with regenerative finance
  keyRisks: string[];
  estimatedPayback: number; // years
  
  // Post-Investment (if Active/Monitoring)
  yearsOperating?: number;
  actualCarbonPerformance?: number; // % of promised
  livelihoodsBeneficiaries?: number;
}

export const colombianProjects: ColombianProject[] = [
  // ANTIOQUIA Department
  {
    id: 'CO-ANT-001',
    name: 'Cauca Valley Agroforestry Cooperative',
    department: 'Antioquia',
    municipality: 'Yarumal',
    projectType: 'Agroforestry',
    stage: 'Active',
    investmentSize: 450000,
    hectaresManaged: 280,
    carbonAvoidedTco2e: 890,
    biodiversityIndex: 78,
    waterQualityProxy: 72,
    livelihoodsIndex: 81,
    shortDescription: 'Small-holder agroforestry integrating shade-grown cacao with native timber species and nitrogen-fixing trees.',
    investorThesis: 'Combines agricultural productivity with carbon sequestration and native forest recovery; supports 120+ farmer livelihoods in biodiversity hotspot.',
    keyRisks: ['Farmer adoption variability', 'Climate drought cycles', 'Market access for premium cacao'],
    estimatedPayback: 6,
    yearsOperating: 2,
    actualCarbonPerformance: 95,
    livelihoodsBeneficiaries: 118,
  },
  {
    id: 'CO-ANT-002',
    name: 'Medellín Metro Restoration Initiative',
    department: 'Antioquia',
    municipality: 'Envigado',
    projectType: 'Watershed Restoration',
    stage: 'Diligence',
    investmentSize: 680000,
    hectaresManaged: 210,
    carbonAvoidedTco2e: 520,
    biodiversityIndex: 65,
    waterQualityProxy: 68,
    livelihoodsIndex: 58,
    shortDescription: 'Restoration of urban/peri-urban watersheds serving Medellín metropolitan area; reforestation with native species.',
    investorThesis: 'Addresses water security for 3M+ urban residents; biodiversity recovery in high-pressure zone; carbon and livelihood co-benefits.',
    keyRisks: ['Urban encroachment', 'Land tenure disputes', 'Maintenance funding after initial grant'],
    estimatedPayback: 8,
  },

  // VALLE DEL CAUCA Department
  {
    id: 'CO-VDC-001',
    name: 'Regenerative Cattle Systems – Cauca Valley',
    department: 'Valle del Cauca',
    municipality: 'Cali',
    projectType: 'Regenerative Cattle',
    stage: 'Active',
    investmentSize: 520000,
    hectaresManaged: 850,
    carbonAvoidedTco2e: 1240,
    biodiversityIndex: 72,
    waterQualityProxy: 75,
    livelihoodsIndex: 79,
    shortDescription: 'Conversion of conventional cattle ranching to rotational grazing with forage diversity, native tree integration, and soil restoration.',
    investorThesis: 'Largest-area potential for carbon sequestration in cattle landscapes; soil health recovery; maintains ranching income; biodiversity upside.',
    keyRisks: ['Rancher behavior change adoption', 'Initial forage establishment', 'Price volatility in cattle markets'],
    estimatedPayback: 5,
    yearsOperating: 3,
    actualCarbonPerformance: 88,
    livelihoodsBeneficiaries: 24,
  },
  {
    id: 'CO-VDC-002',
    name: 'Mangrove Restoration – Buenaventura Estuary',
    department: 'Valle del Cauca',
    municipality: 'Buenaventura',
    projectType: 'Mangrove Restoration',
    stage: 'Discovery',
    investmentSize: 750000,
    hectaresManaged: 340,
    carbonAvoidedTco2e: 2100,
    biodiversityIndex: 84,
    waterQualityProxy: 81,
    livelihoodsIndex: 62,
    shortDescription: 'Restoration of degraded mangrove forests in Colombia\'s Pacific estuary; fishery recovery and carbon sequestration.',
    investorThesis: 'Highest carbon sequestration per hectare in Colombian portfolio; critical nursery for commercial fish species; climate resilience for coastal communities.',
    keyRisks: ['Tenure complexity (fishing communities)', 'Tidal dynamics unpredictability', 'Long payback window'],
    estimatedPayback: 10,
  },

  // CUNDINAMARCA Department
  {
    id: 'CO-CUN-001',
    name: 'Bogotá Savanna Biodiversity Reserve',
    department: 'Cundinamarca',
    municipality: 'Soacha',
    projectType: 'Watershed Restoration',
    stage: 'Diligence',
    investmentSize: 420000,
    hectaresManaged: 195,
    carbonAvoidedTco2e: 380,
    biodiversityIndex: 88,
    waterQualityProxy: 71,
    livelihoodsIndex: 52,
    shortDescription: 'Protection and restoration of high-altitude páramo and cloud forest in Andes foothills; water catchment for Bogotá region.',
    investorThesis: 'Critical water security for 10M+ people; irreplaceable endemic biodiversity; carbon storage in mountain soils; co-investment with environmental ministry.',
    keyRisks: ['Complex multi-stakeholder governance', 'Legal designation variability', 'Enforcement at altitude'],
    estimatedPayback: 7,
  },
  {
    id: 'CO-CUN-002',
    name: 'High-Altitude Coffee Regeneration Network',
    department: 'Cundinamarca',
    municipality: 'Zipaquirá',
    projectType: 'Regenerative Cacao/Coffee',
    stage: 'Active',
    investmentSize: 380000,
    hectaresManaged: 420,
    carbonAvoidedTco2e: 650,
    biodiversityIndex: 76,
    waterQualityProxy: 79,
    livelihoodsIndex: 84,
    shortDescription: 'Support for smallholder coffee farmers to adopt regenerative practices: shade-grown, reduced chemical inputs, soil carbon building.',
    investorThesis: 'Premium coffee market willingness to pay; soil health recovery improves resilience to climate shocks; farmer income stability.',
    keyRisks: ['Market price volatility', 'Certification timeline', 'Out-migration from rural areas'],
    estimatedPayback: 4,
    yearsOperating: 1,
    actualCarbonPerformance: 105,
    livelihoodsBeneficiaries: 310,
  },

  // META Department
  {
    id: 'CO-META-001',
    name: 'Llanos Grassland Restoration – Eastern Plains',
    department: 'Meta',
    municipality: 'Villavicencio',
    projectType: 'Regenerative Cattle',
    stage: 'Discovery',
    investmentSize: 890000,
    hectaresManaged: 2100,
    carbonAvoidedTco2e: 3200,
    biodiversityIndex: 68,
    waterQualityProxy: 65,
    livelihoodsIndex: 71,
    shortDescription: 'Large-scale ranching landscape conversion to regenerative grazing; carbon credit aggregation across multiple ranches.',
    investorThesis: 'Highest total hectare potential; grassland carbon-sequestration upside; regional ranching economy transformation.',
    keyRisks: ['Scale coordination complexity', 'Land access variability', 'Commodity cattle price exposure'],
    estimatedPayback: 6,
  },
  {
    id: 'CO-META-002',
    name: 'Orinoco Tributary Reforestation Initiative',
    department: 'Meta',
    municipality: 'Puerto López',
    projectType: 'Watershed Restoration',
    stage: 'Active',
    investmentSize: 620000,
    hectaresManaged: 530,
    carbonAvoidedTco2e: 1650,
    biodiversityIndex: 79,
    waterQualityProxy: 74,
    livelihoodsIndex: 65,
    shortDescription: 'Reforestation of degraded gallery forests along Orinoco tributaries; fish habitat recovery and carbon sequestration.',
    investorThesis: 'Regional connectivity for Amazon transition zone; fishery restoration supporting indigenous communities; carbon and biodiversity co-benefits.',
    keyRisks: ['Remote area management', 'Flooding variability', 'Indigenous land-rights clarity'],
    estimatedPayback: 8,
    yearsOperating: 2,
    actualCarbonPerformance: 92,
    livelihoodsBeneficiaries: 67,
  },

  // BOLÍVAR Department
  {
    id: 'CO-BOL-001',
    name: 'Caribbean Mangrove & Seagrass Protection',
    department: 'Bolívar',
    municipality: 'Cartagena',
    projectType: 'Mangrove Restoration',
    stage: 'Diligence',
    investmentSize: 850000,
    hectaresManaged: 420,
    carbonAvoidedTco2e: 2650,
    biodiversityIndex: 87,
    waterQualityProxy: 83,
    livelihoodsIndex: 75,
    shortDescription: 'Protection and restoration of mangrove-seagrass ecosystems in Caribbean; fishery support and climate resilience for coastal communities.',
    investorThesis: 'Blue carbon at scale; biodiversity hotspot; fishery livelihoods for 200+ families; tourism revenue upside.',
    keyRisks: ['Oil and gas industry proximity', 'Coastal development pressure', 'Seagrass recovery timescale'],
    estimatedPayback: 9,
  },
  {
    id: 'CO-BOL-002',
    name: 'Cartagena Urban Forest Expansion',
    department: 'Bolívar',
    municipality: 'Cartagena',
    projectType: 'Watershed Restoration',
    stage: 'Active',
    investmentSize: 310000,
    hectaresManaged: 85,
    carbonAvoidedTco2e: 220,
    biodiversityIndex: 61,
    waterQualityProxy: 64,
    livelihoodsIndex: 68,
    shortDescription: 'Urban and peri-urban tree-planting and green infrastructure in Cartagena; heat island reduction and stormwater management.',
    investorThesis: 'Climate adaptation for Caribbean coastal city; job creation for urban poor; health co-benefits (air quality, recreation).',
    keyRisks: ['Urban tenure complexity', 'Maintenance sustainability', 'Slow urban adoption cycles'],
    estimatedPayback: 5,
    yearsOperating: 1,
    actualCarbonPerformance: 98,
    livelihoodsBeneficiaries: 156,
  },
];

/**
 * FIDELITY DISCLOSURE
 * 
 * ⚠️ This dataset is 100% SYNTHETIC and created for DEMONSTRATION ONLY.
 * 
 * - All project names, locations, and organizations are illustrative.
 * - All numeric metrics (carbon, biodiversity, water quality, livelihoods) are synthetic
 *   and generated for UI/UX demonstration, not validated against real projects.
 * - Colombian departments and municipalities are real, but project placements are fictional.
 * - Any resemblance to actual regenerative projects is coincidental.
 * - This data is not suitable for investment decisions or impact claims.
 * 
 * For production use: replace with verified project data from ESG/impact databases,
 * validated field assessments, and audited impact metrics.
 */

export const FIDELITY_DISCLOSURE = `
PROTOTYPE FIDELITY DISCLOSURE

This Altamira Regenerative Finance interactive dashboard uses 100% SYNTHETIC DATA
for demonstration purposes only.

What is synthetic:
✓ All project names, descriptions, and locations (Colombian geographies are real; projects are illustrative)
✓ All impact metrics (carbon, biodiversity, water quality, livelihoods indices)
✓ Investment sizes, hectare figures, and operational timelines
✓ "Actual performance" figures for tracking scenarios
✓ Project narratives and risk assessments

What is real:
✓ Colombian geography (departments and municipalities are accurate)
✓ Project type categories (agroforestry, regenerative cattle, etc. are real approaches)
✓ ESG/impact framework structure (designed by Altamira, validated against industry standards)
✓ UI/UX interaction patterns (filtering, comparison, tracking flows)

This prototype demonstrates:
- How investors discover and compare regenerative projects
- How fragmented ESG/climate/biodiversity evidence is unified on one dashboard
- How project-thesis matching and diligence gaps are surfaced
- How post-investment tracking could work

This prototype does NOT demonstrate:
- Live ESG data integrations
- Real project outcomes or verified impact attribution
- Production decision-support algorithms
- Actual investment portfolio performance

For production use, all synthetic data must be replaced with:
- Verified project catalogs from ESG/impact vendors
- Validated field assessments and impact audits
- Real investment decision history and outcomes
- Customer-agreed attribution methodologies
`;
