/**
 * ALTAMIRA REGENERATIVE FINANCE INTERACTIVE DASHBOARD
 * 
 * Microsoft Technology Stack:
 * - React 18 + TypeScript
 * - Fluent UI (Office Fabric) for Microsoft design language
 * - Chart.js for visualization
 * - Synthetic Colombian project data
 * 
 * ⚠️ DEMO DATA: All data, metrics, and projects are 100% synthetic.
 * See data.ts for fidelity disclosure.
 */

import React, { useState, useMemo } from 'react';
import {
  Persona,
  PersonaSize,
  Stack,
  Text,
  CommandBar,
  CommandBarButton,
  SearchBox,
  Dropdown,
  IDropdownOption,
  Pivot,
  PivotItem,
  Panel,
  PanelType,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  Rating,
  MessageBar,
  MessageBarType,
  ProgressIndicator,
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
  mergeStyles,
  mergeStyleSets,
  FontWeights,
  Shimmer,
  ShimmerElementType,
} from '@fluentui/react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colombianProjects, ColombianProject, FIDELITY_DISCLOSURE } from './data';
import './App.css';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type FilterCriteria = {
  department: string;
  projectType: string;
  stage: string;
  investmentMin: number;
  investmentMax: number;
  searchText: string;
};

// ============================================================================
// STYLING (Fluent UI + Microsoft Design Language)
// ============================================================================

const classNames = mergeStyleSets({
  container: {
    padding: '20px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  header: {
    paddingBottom: '20px',
    borderBottom: '1px solid #e0e0e0',
  },
  filterSection: {
    backgroundColor: '#f7f7f7',
    padding: '16px',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  projectCard: {
    margin: '12px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
    transition: 'box-shadow 0.2s',
    ':hover': {
      boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '12px',
  },
  dashboardChart: {
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  metricRow: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '16px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  metricCard: {
    textAlign: 'center',
    flex: 1,
  },
  impactScore: {
    fontSize: '32px',
    fontWeight: FontWeights.bold,
    color: '#0078d4',
  },
  riskTag: {
    display: 'inline-block',
    backgroundColor: '#fde7e7',
    color: '#d32f2f',
    padding: '4px 8px',
    borderRadius: '3px',
    fontSize: '12px',
    marginRight: '4px',
    marginBottom: '4px',
  },
  fidelityBanner: {
    backgroundColor: '#fff4e6',
    borderLeft: '4px solid #ff9800',
    padding: '12px 16px',
    marginBottom: '16px',
    borderRadius: '2px',
  },
});

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterCriteria>({
    department: 'all',
    projectType: 'all',
    stage: 'all',
    investmentMin: 0,
    investmentMax: 1000000,
    searchText: '',
  });

  const [selectedProject, setSelectedProject] = useState<ColombianProject | null>(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [showFidelityDisclosure, setShowFidelityDisclosure] = useState(true);
  const [activeTab, setActiveTab] = useState<'discover' | 'dashboard' | 'tracking'>('discover');

  // ========================================================================
  // FILTERING LOGIC (Deterministic)
  // ========================================================================

  const filteredProjects = useMemo(() => {
    return colombianProjects.filter(project => {
      // Department filter
      if (filters.department !== 'all' && project.department !== filters.department) {
        return false;
      }
      // Project type filter
      if (filters.projectType !== 'all' && project.projectType !== filters.projectType) {
        return false;
      }
      // Stage filter
      if (filters.stage !== 'all' && project.stage !== filters.stage) {
        return false;
      }
      // Investment size filter
      if (project.investmentSize < filters.investmentMin || project.investmentSize > filters.investmentMax) {
        return false;
      }
      // Search text filter
      if (filters.searchText.trim()) {
        const query = filters.searchText.toLowerCase();
        return (
          project.name.toLowerCase().includes(query) ||
          project.municipality.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [filters]);

  // ========================================================================
  // AGGREGATED METRICS (Deterministic Calculation)
  // ========================================================================

  const aggregatedMetrics = useMemo(() => {
    const metrics = {
      totalProjects: filteredProjects.length,
      totalHectares: 0,
      totalCarbonAvoid: 0,
      avgBiodiversity: 0,
      avgWaterQuality: 0,
      avgLivelihoods: 0,
      totalInvestment: 0,
      activeProjects: 0,
    };

    filteredProjects.forEach(p => {
      metrics.totalHectares += p.hectaresManaged;
      metrics.totalCarbonAvoid += p.carbonAvoidedTco2e;
      metrics.totalInvestment += p.investmentSize;
      if (p.stage === 'Active' || p.stage === 'Monitoring') {
        metrics.activeProjects += 1;
      }
    });

    if (filteredProjects.length > 0) {
      metrics.avgBiodiversity = Math.round(
        filteredProjects.reduce((sum, p) => sum + p.biodiversityIndex, 0) / filteredProjects.length
      );
      metrics.avgWaterQuality = Math.round(
        filteredProjects.reduce((sum, p) => sum + p.waterQualityProxy, 0) / filteredProjects.length
      );
      metrics.avgLivelihoods = Math.round(
        filteredProjects.reduce((sum, p) => sum + p.livelihoodsIndex, 0) / filteredProjects.length
      );
    }

    return metrics;
  }, [filteredProjects]);

  // ========================================================================
  // DROPDOWN OPTIONS (Unique values from data)
  // ========================================================================

  const departmentOptions: IDropdownOption[] = [
    { key: 'all', text: 'All Departments' },
    ...Array.from(new Set(colombianProjects.map(p => p.department))).map(dept => ({
      key: dept,
      text: dept,
    })),
  ];

  const projectTypeOptions: IDropdownOption[] = [
    { key: 'all', text: 'All Project Types' },
    ...Array.from(new Set(colombianProjects.map(p => p.projectType))).map(type => ({
      key: type,
      text: type,
    })),
  ];

  const stageOptions: IDropdownOption[] = [
    { key: 'all', text: 'All Stages' },
    { key: 'Discovery', text: 'Discovery' },
    { key: 'Diligence', text: 'Diligence' },
    { key: 'Active', text: 'Active' },
    { key: 'Monitoring', text: 'Monitoring' },
  ];

  // ========================================================================
  // DASHBOARD VIEW (Charts and visualizations)
  // ========================================================================

  const departmentDistribution = useMemo(() => {
    const dist = new Map<string, number>();
    filteredProjects.forEach(p => {
      dist.set(p.department, (dist.get(p.department) || 0) + 1);
    });
    return Array.from(dist).map(([dept, count]) => ({ department: dept, projects: count }));
  }, [filteredProjects]);

  const impactVsInvestment = useMemo(() => {
    return filteredProjects.map(p => ({
      name: p.name.substring(0, 20),
      investment: p.investmentSize / 1000,
      carbon: p.carbonAvoidedTco2e,
      biodiversity: p.biodiversityIndex,
    }));
  }, [filteredProjects]);

  const performanceTimeline = useMemo(() => {
    return filteredProjects
      .filter(p => p.yearsOperating)
      .slice(0, 6)
      .map(p => ({
        name: p.name.substring(0, 15),
        promised: 100,
        actual: p.actualCarbonPerformance || 95,
      }));
  }, [filteredProjects]);

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================

  const handleProjectClick = (project: ColombianProject) => {
    setSelectedProject(project);
    setShowDetailPanel(true);
  };

  const handleFilterChange = (field: keyof FilterCriteria, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  // ========================================================================
  // RENDER: DISCOVER TAB (Interactive project browser)
  // ========================================================================

  const renderDiscoverTab = () => (
    <Stack>
      {/* FIDELITY DISCLOSURE BANNER */}
      {showFidelityDisclosure && (
        <MessageBar messageBarType={MessageBarType.warning} onDismiss={() => setShowFidelityDisclosure(false)}>
          <strong>⚠️ DEMO DATA:</strong> All projects, metrics, and impact data are 100% synthetic for prototype demonstration only.
          This data is not suitable for real investment decisions. See fidelity disclosure for details.
        </MessageBar>
      )}

      {/* FILTER SECTION */}
      <Stack className={classNames.filterSection}>
        <Stack horizontal spacing={12} wrap>
          <SearchBox
            placeholder="Search projects..."
            value={filters.searchText}
            onChange={(_, value) => handleFilterChange('searchText', value || '')}
            style={{ width: '250px' }}
          />
          <Dropdown
            label="Department"
            options={departmentOptions}
            selectedKey={filters.department}
            onChange={(_, option) => handleFilterChange('department', option?.key || 'all')}
            style={{ width: '200px' }}
          />
          <Dropdown
            label="Project Type"
            options={projectTypeOptions}
            selectedKey={filters.projectType}
            onChange={(_, option) => handleFilterChange('projectType', option?.key || 'all')}
            style={{ width: '200px' }}
          />
          <Dropdown
            label="Stage"
            options={stageOptions}
            selectedKey={filters.stage}
            onChange={(_, option) => handleFilterChange('stage', option?.key || 'all')}
            style={{ width: '150px' }}
          />
        </Stack>
      </Stack>

      {/* RESULTS COUNT */}
      <Text variant="large" style={{ marginBottom: '12px' }}>
        Showing <strong>{filteredProjects.length}</strong> of {colombianProjects.length} Colombian regenerative projects
      </Text>

      {/* PROJECT GRID */}
      <Stack className={classNames.gridContainer}>
        {filteredProjects.map(project => (
          <DocumentCard
            key={project.id}
            className={classNames.projectCard}
            onClick={() => handleProjectClick(project)}
            style={{ cursor: 'pointer' }}
          >
            <DocumentCardTitle title={project.name} shouldTruncate />
            <DocumentCardDetails>
              <Stack spacing={8}>
                <Text variant="small">
                  <strong>Department:</strong> {project.department}
                </Text>
                <Text variant="small">
                  <strong>Type:</strong> {project.projectType}
                </Text>
                <Text variant="small">
                  <strong>Stage:</strong>{' '}
                  <span style={{ color: project.stage === 'Active' ? '#107c10' : '#ff8c00' }}>
                    {project.stage}
                  </span>
                </Text>
                <Stack horizontal spacing={4} style={{ marginBottom: '4px' }}>
                  <Text variant="small">
                    <strong>Carbon:</strong> {project.carbonAvoidedTco2e} tCO2e/yr
                  </Text>
                </Stack>
                <Stack horizontal spacing={4}>
                  <Text variant="small">
                    <strong>Biodiversity:</strong> {project.biodiversityIndex}/100
                  </Text>
                  <Text variant="small">
                    <strong>Livelihoods:</strong> {project.livelihoodsIndex}/100
                  </Text>
                </Stack>
                <Text variant="small">
                  <strong>Investment:</strong> ${(project.investmentSize / 1000).toFixed(0)}K
                </Text>
              </Stack>
            </DocumentCardDetails>
          </DocumentCard>
        ))}
      </Stack>

      {filteredProjects.length === 0 && (
        <MessageBar messageBarType={MessageBarType.info}>
          No projects match your filters. Try adjusting your criteria.
        </MessageBar>
      )}
    </Stack>
  );

  // ========================================================================
  // RENDER: DASHBOARD TAB (Aggregated analytics)
  // ========================================================================

  const renderDashboardTab = () => (
    <Stack spacing={20}>
      {/* KEY METRICS */}
      <Stack className={classNames.metricRow}>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Active Projects</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.activeProjects}</div>
        </Stack>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Total Hectares</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.totalHectares.toLocaleString()}</div>
        </Stack>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Carbon Avoided (tCO2e/yr)</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.totalCarbonAvoid.toLocaleString()}</div>
        </Stack>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Total Investment</Text>
          <div className={classNames.impactScore}>${(aggregatedMetrics.totalInvestment / 1000000).toFixed(1)}M</div>
        </Stack>
      </Stack>

      {/* IMPACT SCORES */}
      <Stack className={classNames.metricRow}>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Avg Biodiversity Index</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.avgBiodiversity}/100</div>
          <ProgressIndicator
            value={aggregatedMetrics.avgBiodiversity / 100}
            label="Quality of biodiversity outcomes"
          />
        </Stack>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Avg Water Quality Proxy</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.avgWaterQuality}/100</div>
          <ProgressIndicator
            value={aggregatedMetrics.avgWaterQuality / 100}
            label="Water quality improvements"
          />
        </Stack>
        <Stack className={classNames.metricCard}>
          <Text variant="small">Avg Livelihoods Index</Text>
          <div className={classNames.impactScore}>{aggregatedMetrics.avgLivelihoods}/100</div>
          <ProgressIndicator
            value={aggregatedMetrics.avgLivelihoods / 100}
            label="Social impact (livelihoods)"
          />
        </Stack>
      </Stack>

      {/* CHARTS */}
      <Stack className={classNames.dashboardChart}>
        <Text variant="large" block style={{ marginBottom: '12px' }}>
          Projects by Department
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="projects" fill="#0078d4" />
          </BarChart>
        </ResponsiveContainer>
      </Stack>

      <Stack className={classNames.dashboardChart}>
        <Text variant="large" block style={{ marginBottom: '12px' }}>
          Investment vs. Carbon Impact
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart data={impactVsInvestment}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment" name="Investment ($K)" />
            <YAxis dataKey="carbon" name="Carbon Avoided (tCO2e/yr)" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter dataKey="carbon" data={impactVsInvestment} fill="#107c10" name="Carbon Avoided" />
          </ScatterChart>
        </ResponsiveContainer>
      </Stack>

      <Stack className={classNames.dashboardChart}>
        <Text variant="large" block style={{ marginBottom: '12px' }}>
          Active Projects: Promised vs. Actual Carbon Performance
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceTimeline}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="promised" fill="#0078d4" name="Promised (%)" />
            <Bar dataKey="actual" fill="#107c10" name="Actual (%)" />
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Stack>
  );

  // ========================================================================
  // RENDER: TRACKING TAB (Post-investment monitoring)
  // ========================================================================

  const activeAndMonitoringProjects = colombianProjects.filter(
    p => p.stage === 'Active' || p.stage === 'Monitoring'
  );

  const trackingColumns: IColumn[] = [
    {
      key: 'name',
      name: 'Project Name',
      fieldName: 'name',
      minWidth: 150,
      maxWidth: 250,
    },
    {
      key: 'department',
      name: 'Department',
      fieldName: 'department',
      minWidth: 100,
      maxWidth: 150,
    },
    {
      key: 'yearsOperating',
      name: 'Years Operating',
      fieldName: 'yearsOperating',
      minWidth: 80,
      maxWidth: 120,
    },
    {
      key: 'actualCarbonPerformance',
      name: 'Carbon Performance (%)',
      fieldName: 'actualCarbonPerformance',
      minWidth: 100,
      maxWidth: 150,
      onRender: (item: ColombianProject) => (
        <span
          style={{
            color:
              (item.actualCarbonPerformance || 0) >= 100
                ? '#107c10'
                : (item.actualCarbonPerformance || 0) >= 90
                  ? '#ff8c00'
                  : '#d32f2f',
          }}
        >
          {item.actualCarbonPerformance}%
        </span>
      ),
    },
    {
      key: 'livelihoodsBeneficiaries',
      name: 'Livelihoods Beneficiaries',
      fieldName: 'livelihoodsBeneficiaries',
      minWidth: 100,
      maxWidth: 150,
    },
  ];

  const renderTrackingTab = () => (
    <Stack spacing={16}>
      <MessageBar messageBarType={MessageBarType.info}>
        <strong>Post-Investment Monitoring:</strong> Tracking performance of {activeAndMonitoringProjects.length} active projects.
        All data is synthetic. In production, this would connect to real impact verification systems.
      </MessageBar>
      <DetailsList
        items={activeAndMonitoringProjects}
        columns={trackingColumns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
      />
    </Stack>
  );

  // ========================================================================
  // RENDER: DETAIL PANEL (Project deep-dive)
  // ========================================================================

  const renderDetailPanel = () => {
    if (!selectedProject) return null;

    return (
      <Panel
        isOpen={showDetailPanel}
        onDismiss={() => setShowDetailPanel(false)}
        headerText={selectedProject.name}
        closeButtonAriaLabel="Close"
        type={PanelType.large}
      >
        <Stack spacing={16}>
          {/* FIDELITY NOTICE */}
          <MessageBar messageBarType={MessageBarType.warning}>
            ⚠️ This project data is 100% SYNTHETIC for demonstration only.
          </MessageBar>

          {/* BASIC INFO */}
          <Stack spacing={8}>
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              Project Information
            </Text>
            <Text variant="small">
              <strong>ID:</strong> {selectedProject.id}
            </Text>
            <Text variant="small">
              <strong>Department:</strong> {selectedProject.department}, {selectedProject.municipality}
            </Text>
            <Text variant="small">
              <strong>Type:</strong> {selectedProject.projectType}
            </Text>
            <Text variant="small">
              <strong>Stage:</strong> {selectedProject.stage}
            </Text>
            <Text variant="small">
              <strong>Investment Size:</strong> ${selectedProject.investmentSize.toLocaleString()}
            </Text>
            <Text variant="small">
              <strong>Hectares Managed:</strong> {selectedProject.hectaresManaged.toLocaleString()}
            </Text>
          </Stack>

          {/* NARRATIVE */}
          <Stack spacing={8}>
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              Narrative
            </Text>
            <Text variant="small">{selectedProject.shortDescription}</Text>
            <Text variant="small">
              <strong>Investor Thesis:</strong> {selectedProject.investorThesis}
            </Text>
          </Stack>

          {/* ESG & IMPACT METRICS */}
          <Stack spacing={8}>
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              ESG & Impact Metrics
            </Text>
            <Stack horizontal wrap spacing={20}>
              <Stack>
                <Text variant="small">
                  <strong>Carbon Avoided:</strong>
                </Text>
                <Text variant="large" style={{ color: '#107c10' }}>
                  {selectedProject.carbonAvoidedTco2e} tCO2e/yr
                </Text>
              </Stack>
              <Stack>
                <Text variant="small">
                  <strong>Biodiversity Index:</strong>
                </Text>
                <Text variant="large" style={{ color: '#0078d4' }}>
                  {selectedProject.biodiversityIndex}/100
                </Text>
              </Stack>
              <Stack>
                <Text variant="small">
                  <strong>Water Quality Proxy:</strong>
                </Text>
                <Text variant="large" style={{ color: '#0078d4' }}>
                  {selectedProject.waterQualityProxy}/100
                </Text>
              </Stack>
              <Stack>
                <Text variant="small">
                  <strong>Livelihoods Index:</strong>
                </Text>
                <Text variant="large" style={{ color: '#107c10' }}>
                  {selectedProject.livelihoodsIndex}/100
                </Text>
              </Stack>
            </Stack>
          </Stack>

          {/* RISKS */}
          <Stack spacing={8}>
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              Key Risks
            </Text>
            <Stack>
              {selectedProject.keyRisks.map((risk, idx) => (
                <div key={idx} className={classNames.riskTag}>
                  {risk}
                </div>
              ))}
            </Stack>
          </Stack>

          {/* INVESTMENT METRICS */}
          <Stack spacing={8}>
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              Investment Metrics
            </Text>
            <Text variant="small">
              <strong>Estimated Payback Period:</strong> {selectedProject.estimatedPayback} years
            </Text>
            {selectedProject.yearsOperating && (
              <>
                <Text variant="small">
                  <strong>Years Operating:</strong> {selectedProject.yearsOperating}
                </Text>
                <Text variant="small">
                  <strong>Actual Carbon Performance:</strong>{' '}
                  <span
                    style={{
                      color:
                        (selectedProject.actualCarbonPerformance || 0) >= 100
                          ? '#107c10'
                          : (selectedProject.actualCarbonPerformance || 0) >= 90
                            ? '#ff8c00'
                            : '#d32f2f',
                    }}
                  >
                    {selectedProject.actualCarbonPerformance}%
                  </span>
                </Text>
                <Text variant="small">
                  <strong>Livelihoods Beneficiaries:</strong> {selectedProject.livelihoodsBeneficiaries}
                </Text>
              </>
            )}
          </Stack>

          {/* THESIS MATCH (Agentic explanation placeholder) */}
          <Stack
            spacing={8}
            style={{
              backgroundColor: '#f3f2f1',
              padding: '12px',
              borderRadius: '4px',
              borderLeft: '3px solid #0078d4',
            }}
          >
            <Text variant="large" style={{ fontWeight: FontWeights.semibold }}>
              AI Thesis-Fit Analysis (Agentic)
            </Text>
            <Text variant="small">
              <strong>Match Strength:</strong> <span style={{ color: '#107c10' }}>HIGH</span>
            </Text>
            <Text variant="small">
              This project aligns well with a regenerative finance thesis focused on high-biodiversity regions
              because: (1) located in Colombian department with biodiversity hotspot designation, (2) project type
              (
              {selectedProject.projectType}) directly restores or maintains ecosystem services, (3) biodiversity index
              ({selectedProject.biodiversityIndex}/100) indicates meaningful conservation co-benefits.
            </Text>
            <Text variant="small">
              <strong>Diligence Focus Areas:</strong>
              <ul>
                <li>Confirm land tenure and community approval</li>
                <li>Validate baseline biodiversity assessment methodology</li>
                <li>Verify livelihood beneficiary count and payment mechanism</li>
                <li>Review carbon methodology against international standards</li>
              </ul>
            </Text>
          </Stack>
        </Stack>
      </Panel>
    );
  };

  // ========================================================================
  // MAIN RENDER
  // ========================================================================

  return (
    <div className={classNames.container}>
      {/* HEADER */}
      <Stack className={classNames.header} spacing={8}>
        <Text variant="xxLarge" style={{ fontWeight: FontWeights.bold, color: '#0078d4' }}>
          Altamira Regenerative Finance Interactive Dashboard
        </Text>
        <Text variant="medium">
          Discover, evaluate, and track regenerative projects in Colombia. Built with Microsoft technology stack.
        </Text>
      </Stack>

      {/* MAIN NAVIGATION TABS */}
      <Pivot
        selectedKey={activeTab}
        onLinkClick={(item) => setActiveTab(item?.props.itemKey as 'discover' | 'dashboard' | 'tracking')}
        style={{ marginBottom: '20px' }}
      >
        <PivotItem headerText="Discover Projects" itemKey="discover" />
        <PivotItem headerText="Dashboard & Analytics" itemKey="dashboard" />
        <PivotItem headerText="Post-Investment Tracking" itemKey="tracking" />
      </Pivot>

      {/* CONTENT BASED ON ACTIVE TAB */}
      {activeTab === 'discover' && renderDiscoverTab()}
      {activeTab === 'dashboard' && renderDashboardTab()}
      {activeTab === 'tracking' && renderTrackingTab()}

      {/* DETAIL PANEL (opened when a project is clicked) */}
      {renderDetailPanel()}
    </div>
  );
};

export default App;
