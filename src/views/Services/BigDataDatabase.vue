<template>
  <div class="big-data-page legacy-service business-surface">
    <!-- Hero Banner -->
    <ServiceHero title="Big Data & Database Services" :parent="{ label: 'Services', to: '/services' }" />
<div class="legacy-layout business-container"><ServiceDirectory :sections="directorySections" /><div class="legacy-body"><section class="service-introduction" id="legacy-overview" tabindex="-1"><h2 class="service-section-title">Overview</h2><p>Professional biomedical database platform providing comprehensive multi-omics data analysis services including single-cell, immune repertoire, and metabolomics/proteomics</p><div class="service-capabilities"><span>Multi-omics Integration</span><span>Data Analytics</span><span>Cloud Computing</span><span>Data Security</span></div></section>

    <!-- Database Navigation -->
    <section class="database-navigation">
      <div class="container">
        <div class="nav-tabs">
          <button
            v-for="db in databases"
            :key="db.id"
            :class="['nav-tab', { active: activeDatabase === db.id }]"
            :aria-pressed="activeDatabase === db.id"
            @click="setActiveDatabase(db.id)"
          >

            <span class="tab-title">{{ db.name }}</span>
            <span v-if="db.featured" class="featured-star"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- Database Content -->
    <section id="legacy-section-1" tabindex="-1" class="database-content">
      <div class="container">
        <!-- Single-Cell Database Content -->
        <div v-if="activeDatabase === 'single-cell'" class="database-section">
          <div class="database-overview">
            <div class="overview-content">
              <div class="overview-text">
                <h2 class="service-section-title">World's Leading Single-Cell Database</h2>
                <p>
                  Vivolution Biosciences' Single-Cell Database is the most
                  comprehensive single-cell omics data resource platform,
                  featuring high-quality datasets from 300+ global research
                  institutions. Our database covers 80+ tissue types across
                  multiple species including human and mouse, providing
                  comprehensive data support and analysis services for
                  cutting-edge single-cell research.
                </p>
                <div class="database-stats">
                  <div class="stat-item">
                    <span class="stat-number">15M+</span>
                    <span class="stat-label">Cell Profiles</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">3,500+</span>
                    <span class="stat-label">Datasets</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">80+</span>
                    <span class="stat-label">Tissue Types</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">300+</span>
                    <span class="stat-label">Research Institutions</span>
                  </div>
                </div>
              </div>
              <div class="overview-visual">
                <div class="data-flow">
                  <div class="flow-step">

                    <h4>Data Collection</h4>
                    <p>Multi-platform Integration</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">

                    <h4>Quality Control</h4>
                    <p>Rigorous Data Filtering</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">

                    <h4>Standardization</h4>
                    <p>Unified Data Format</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">

                    <h4>Analysis Services</h4>
                    <p>Professional Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="core-services">
            <div class="section-header">
              <h3 class="service-subsection-title">Core Analysis Functions</h3>
              <p>
                Comprehensive single-cell data services from storage to advanced
                analysis
              </p>
            </div>
            <div class="services-grid">
              <div class="service-item">

                <h4>scRNA-seq Analysis</h4>
                <p>
                  Complete single-cell RNA sequencing analysis pipeline
                  including quality control, dimensionality reduction,
                  clustering, and differential expression analysis
                </p>
                <ul class="feature-list">
                  <li>Quality control & filtering</li>
                  <li>Normalization & scaling</li>
                  <li>Dimensionality reduction (PCA, UMAP, t-SNE)</li>
                  <li>Cell clustering & annotation</li>
                  <li>Differential expression analysis</li>
                  <li>Gene set enrichment analysis</li>
                </ul>
              </div>
              <div class="service-item">

                <h4>scATAC-seq Analysis</h4>
                <p>
                  Single-cell chromatin accessibility sequencing analysis
                  revealing cell type-specific regulatory elements and
                  transcription factor binding sites
                </p>
                <ul class="feature-list">
                  <li>Peak calling & annotation</li>
                  <li>Chromatin accessibility profiling</li>
                  <li>Transcription factor motif analysis</li>
                  <li>Regulatory network inference</li>
                  <li>Epigenomic landscape mapping</li>
                  <li>Integration with gene expression</li>
                </ul>
              </div>
              <div class="service-item">

                <h4>Multi-omics Integration</h4>
                <p>
                  Integration of multiple single-cell omics data types providing
                  comprehensive cellular state and functional analysis
                </p>
                <ul class="feature-list">
                  <li>Cross-modal data integration</li>
                  <li>Joint dimensionality reduction</li>
                  <li>Multi-modal clustering</li>
                  <li>Regulatory network analysis</li>
                  <li>Cell state prediction</li>
                  <li>Functional annotation</li>
                </ul>
              </div>
              <div class="service-item">

                <h4>Cell Trajectory Analysis</h4>
                <p>
                  Track cellular developmental trajectories and state
                  transitions, revealing dynamic processes of cell
                  differentiation
                </p>
                <ul class="feature-list">
                  <li>Pseudotime inference</li>
                  <li>Trajectory reconstruction</li>
                  <li>Branch point identification</li>
                  <li>Dynamic gene expression</li>
                  <li>Lineage tracing</li>
                  <li>Developmental pathway analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Technical Specifications -->
          <div class="tech-specs">
            <div class="section-header">
              <h3 class="service-subsection-title">Technical Specifications</h3>
              <p>Industry-leading technology stack and performance metrics</p>
            </div>
            <div class="specs-grid">
              <div class="spec-category">
                <h4> Performance</h4>
                <ul class="spec-list">
                  <li>
                    <span class="spec-name">Processing Speed:</span>
                    <span class="spec-value">10,000+ cells/minute</span>
                  </li>
                  <li>
                    <span class="spec-name">Memory Efficiency:</span>
                    <span class="spec-value">Optimized for large datasets</span>
                  </li>
                  <li>
                    <span class="spec-name">Scalability:</span>
                    <span class="spec-value">Up to 1M+ cells per analysis</span>
                  </li>
                  <li>
                    <span class="spec-name">Parallel Processing:</span>
                    <span class="spec-value"
                      >Multi-core & GPU acceleration</span
                    >
                  </li>
                </ul>
              </div>
              <div class="spec-category">
                <h4> Algorithms</h4>
                <ul class="spec-list">
                  <li>
                    <span class="spec-name">Clustering:</span>
                    <span class="spec-value">Leiden, Louvain, K-means</span>
                  </li>
                  <li>
                    <span class="spec-name">Dimensionality Reduction:</span>
                    <span class="spec-value">UMAP, t-SNE, PCA, PHATE</span>
                  </li>
                  <li>
                    <span class="spec-name">Trajectory Inference:</span>
                    <span class="spec-value">Monocle, PAGA, Slingshot</span>
                  </li>
                  <li>
                    <span class="spec-name">Differential Expression:</span>
                    <span class="spec-value">DESeq2, EdgeR, Wilcoxon</span>
                  </li>
                </ul>
              </div>
              <div class="spec-category">
                <h4> Quality Assurance</h4>
                <ul class="spec-list">
                  <li>
                    <span class="spec-name">Data Accuracy:</span>
                    <span class="spec-value">99.5%+ validation rate</span>
                  </li>
                  <li>
                    <span class="spec-name">Reproducibility:</span>
                    <span class="spec-value">CV &lt; 5% across runs</span>
                  </li>
                  <li>
                    <span class="spec-name">Uptime:</span>
                    <span class="spec-value">99.9% service availability</span>
                  </li>
                  <li>
                    <span class="spec-name">Support:</span>
                    <span class="spec-value">24/7 technical assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Immune Repertoire Database Content -->
        <div
          v-if="activeDatabase === 'immune-repertoire'"
          class="database-section"
        >
          <div class="database-overview">
            <div class="overview-content">
              <div class="overview-text">
                <h2 class="service-section-title">Professional Immune Repertoire Data Platform</h2>
                <p>
                  Vivolution Biosciences' Immune Repertoire Database is the
                  leading immune receptor sequence data resource platform,
                  featuring over 20 billion TCR/BCR sequence records covering
                  healthy populations and various disease states. Our
                  comprehensive immune repertoire information provides robust
                  data support for immunology research, vaccine development, and
                  immunotherapy.
                </p>
                <div class="database-stats">
                  <div class="stat-item">
                    <span class="stat-number">20B+</span>
                    <span class="stat-label">Sequence Records</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">2,500+</span>
                    <span class="stat-label">Sample Libraries</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Disease Types</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">150+</span>
                    <span class="stat-label">Research Institutions</span>
                  </div>
                </div>
              </div>
              <div class="overview-visual">
                <div class="immune-process">
                  <div class="process-step">

                    <h4>Sequence Acquisition</h4>
                    <p>High-throughput Sequencing</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">

                    <h4>Sequence Annotation</h4>
                    <p>V(D)J Gene Identification</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">

                    <h4>Diversity Analysis</h4>
                    <p>Clonotype Statistics</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">

                    <h4>Function Prediction</h4>
                    <p>Antigen Specificity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Analysis Pipeline -->
          <div class="analysis-pipeline-redesigned">
            <div class="section-header">
              <h3 class="service-subsection-title">Immune Repertoire Analysis Pipeline</h3>
              <p>
                Advanced computational workflow transforming raw sequencing data
                into actionable biological insights
              </p>
              <div class="pipeline-stats">
                <div class="stat-badge">
                  <span class="stat-number">10M+</span>
                  <span class="stat-label">Sequences Processed</span>
                </div>
                <div class="stat-badge">
                  <span class="stat-number">99.5%</span>
                  <span class="stat-label">Accuracy Rate</span>
                </div>
                <div class="stat-badge">
                  <span class="stat-number">24h</span>
                  <span class="stat-label">Turnaround Time</span>
                </div>
              </div>
            </div>

            <div class="pipeline-workflow">
              <!-- Input Section -->
              <div class="workflow-section input-section">
                <div class="section-icon">
                  <div class="icon-container"></div>
                </div>
                <h4>Data Input</h4>
                <div class="input-types">
                  <div class="input-type">

                    <span>FASTQ Files</span>
                  </div>
                  <div class="input-type">

                    <span>BCR/TCR Sequences</span>
                  </div>
                  <div class="input-type">

                    <span>Single-cell Data</span>
                  </div>
                </div>
              </div>

              <!-- Processing Pipeline -->
              <div class="processing-pipeline">
                <div class="pipeline-connector">
                  <div class="connector-line"></div>
                  <div class="connector-arrow">→</div>
                </div>

                <div class="processing-stages">
                  <div class="stage-row">
                    <div class="processing-stage primary">
                      <div class="stage-header">

                        <h5>Quality Control & Preprocessing</h5>
                      </div>
                      <div class="stage-metrics">
                        <span class="metric">FastQC Analysis</span>
                        <span class="metric">Adapter Trimming</span>
                        <span class="metric">Error Correction</span>
                      </div>
                    </div>

                    <div class="processing-stage secondary">
                      <div class="stage-header">

                        <h5>V(D)J Gene Assignment</h5>
                      </div>
                      <div class="stage-metrics">
                        <span class="metric">IMGT Database</span>
                        <span class="metric">CDR3 Identification</span>
                        <span class="metric">Junction Analysis</span>
                      </div>
                    </div>
                  </div>

                  <div class="stage-row">
                    <div class="processing-stage tertiary">
                      <div class="stage-header">

                        <h5>Clonotype Analysis</h5>
                      </div>
                      <div class="stage-metrics">
                        <span class="metric">Diversity Metrics</span>
                        <span class="metric">Clonal Expansion</span>
                        <span class="metric">Network Analysis</span>
                      </div>
                    </div>

                    <div class="processing-stage quaternary">
                      <div class="stage-header">

                        <h5>Functional Prediction</h5>
                      </div>
                      <div class="stage-metrics">
                        <span class="metric">Antigen Specificity</span>
                        <span class="metric">Binding Affinity</span>
                        <span class="metric">Clinical Correlation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Output Section -->
              <div class="workflow-section output-section">
                <div class="pipeline-connector">
                  <div class="connector-line"></div>
                  <div class="connector-arrow">→</div>
                </div>

                <div class="section-icon">
                  <div class="icon-container"></div>
                </div>
                <h4>Analysis Results</h4>
                <div class="output-types">
                  <div class="output-type">

                    <span>Interactive Reports</span>
                  </div>
                  <div class="output-type">

                    <span>Raw Data Files</span>
                  </div>
                  <div class="output-type">

                    <span>Visualization Plots</span>
                  </div>
                  <div class="output-type">

                    <span>Biomarker Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Research Applications -->
          <div class="research-applications">
            <div class="section-header">
              <h3 class="service-subsection-title">Research Applications</h3>
              <p>
                Critical applications of immune repertoire data across multiple
                research domains
              </p>
            </div>
            <div class="applications-grid">
              <div class="application-item">
                <div class="app-header">
                  <h4> Infectious Disease Research</h4>
                </div>
                <div class="app-content">
                  <p>
                    Analyze immune repertoire dynamics during infection
                    processes and identify pathogen-specific immune responses
                  </p>
                  <div class="app-examples">
                    <span class="example-tag">COVID-19</span>
                    <span class="example-tag">Influenza</span>
                    <span class="example-tag">Tuberculosis</span>
                    <span class="example-tag">HIV</span>
                    <span class="example-tag">Malaria</span>
                  </div>
                </div>
              </div>
              <div class="application-item">
                <div class="app-header">
                  <h4> Cancer Immunotherapy</h4>
                </div>
                <div class="app-content">
                  <p>
                    Evaluate immune repertoire characteristics of
                    tumor-infiltrating lymphocytes to guide personalized
                    immunotherapy strategies
                  </p>
                  <div class="app-examples">
                    <span class="example-tag">CAR-T Therapy</span>
                    <span class="example-tag">Checkpoint Inhibitors</span>
                    <span class="example-tag">Cancer Vaccines</span>
                    <span class="example-tag">Adoptive Cell Therapy</span>
                  </div>
                </div>
              </div>
              <div class="application-item">
                <div class="app-header">
                  <h4> Autoimmune Diseases</h4>
                </div>
                <div class="app-content">
                  <p>
                    Study abnormal immune repertoire patterns in autoimmune
                    diseases to identify diagnostic and therapeutic targets
                  </p>
                  <div class="app-examples">
                    <span class="example-tag">Rheumatoid Arthritis</span>
                    <span class="example-tag">Systemic Lupus</span>
                    <span class="example-tag">Multiple Sclerosis</span>
                    <span class="example-tag">Type 1 Diabetes</span>
                  </div>
                </div>
              </div>
              <div class="application-item">
                <div class="app-header">
                  <h4> Antibody Drug Development</h4>
                </div>
                <div class="app-content">
                  <p>
                    Discover and optimize therapeutic antibodies from immune
                    repertoires, accelerating drug development processes
                  </p>
                  <div class="app-examples">
                    <span class="example-tag">Monoclonal Antibodies</span>
                    <span class="example-tag">Bispecific Antibodies</span>
                    <span class="example-tag">Antibody-Drug Conjugates</span>
                    <span class="example-tag">Nanobodies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Metabolomics & Proteomics Database Content -->
        <div
          v-if="activeDatabase === 'metabolomics-proteomics'"
          class="database-section"
        >
          <div class="database-overview">
            <div class="overview-content">
              <div class="overview-text">
                <h2 class="service-section-title">Systems Biology Data Integration Platform</h2>
                <p>
                  Vivolution Biosciences' Metabolomics & Proteomics Database is
                  the leading systems biology data integration platform,
                  featuring over 100,000 metabolites and 50,000 protein
                  quantitative data covering various disease states and
                  physiological conditions. Our comprehensive data provides full
                  support for systems biology research, biomarker discovery, and
                  drug development.
                </p>
                <div class="database-stats">
                  <div class="stat-item">
                    <span class="stat-number">150K+</span>
                    <span class="stat-label">Metabolites</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">75K+</span>
                    <span class="stat-label">Proteins</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">2,000+</span>
                    <span class="stat-label">Pathways</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">1,200+</span>
                    <span class="stat-label">Datasets</span>
                  </div>
                </div>
              </div>
              <div class="overview-visual">
                <div class="omics-integration">
                  <div class="omics-layer">

                    <h4>Genomics</h4>
                    <p>DNA Sequence Information</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">

                    <h4>Proteomics</h4>
                    <p>Protein Expression Profiles</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">

                    <h4>Metabolomics</h4>
                    <p>Metabolite Concentrations</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">

                    <h4>Phenomics</h4>
                    <p>Biological Functions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Instrumentation Showcase -->
          <div class="instrumentation-showcase">
            <div class="section-header">
              <h3 class="service-subsection-title">State-of-the-Art Analytical Instrumentation</h3>
              <p>
                World-class mass spectrometry and chromatography platforms for
                comprehensive omics analysis
              </p>
            </div>
            <div class="instrument-gallery">
              <div class="instrument-category">
                <div class="category-header">
                  <h4> Mass Spectrometry Systems</h4>
                  <span class="category-count">12 Instruments</span>
                </div>
                <div class="instrument-grid">
                  <div class="instrument-card">
                    <div class="instrument-badge">Flagship</div>
                    <div class="instrument-name">Orbitrap Exploris 480</div>
                    <div class="instrument-specs">
                      <div class="spec-row">
                        <span class="spec-label">Resolution:</span>
                        <span class="spec-value">480,000 FWHM</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Mass Accuracy:</span>
                        <span class="spec-value">&lt; 1 ppm</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Scan Rate:</span>
                        <span class="spec-value">40 Hz</span>
                      </div>
                    </div>
                  </div>
                  <div class="instrument-card">
                    <div class="instrument-name">Q Exactive HF-X</div>
                    <div class="instrument-specs">
                      <div class="spec-row">
                        <span class="spec-label">Resolution:</span>
                        <span class="spec-value">240,000 FWHM</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Dynamic Range:</span>
                        <span class="spec-value">5 orders</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Sensitivity:</span>
                        <span class="spec-value">pg/mL level</span>
                      </div>
                    </div>
                  </div>
                  <div class="instrument-card">
                    <div class="instrument-name">Triple Quad 6500+</div>
                    <div class="instrument-specs">
                      <div class="spec-row">
                        <span class="spec-label">MRM Transitions:</span>
                        <span class="spec-value">1000+</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Dwell Time:</span>
                        <span class="spec-value">1 ms</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">LLOQ:</span>
                        <span class="spec-value">fg/mL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="instrument-category">
                <div class="category-header">
                  <h4> Chromatography Systems</h4>
                  <span class="category-count">8 Instruments</span>
                </div>
                <div class="instrument-grid">
                  <div class="instrument-card">
                    <div class="instrument-badge">Ultra-High Performance</div>
                    <div class="instrument-name">Vanquish Horizon UHPLC</div>
                    <div class="instrument-specs">
                      <div class="spec-row">
                        <span class="spec-label">Pressure:</span>
                        <span class="spec-value">1500 bar</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Flow Rate:</span>
                        <span class="spec-value">0.001-8 mL/min</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Injection Volume:</span>
                        <span class="spec-value">0.1-100 μL</span>
                      </div>
                    </div>
                  </div>
                  <div class="instrument-card">
                    <div class="instrument-name">Agilent 1290 Infinity II</div>
                    <div class="instrument-specs">
                      <div class="spec-row">
                        <span class="spec-label">Pressure:</span>
                        <span class="spec-value">1200 bar</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Temperature:</span>
                        <span class="spec-value">5-80°C</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Precision:</span>
                        <span class="spec-value">&lt; 0.1% RSD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quality Control System -->
          <div class="quality-control">
            <div class="section-header">
              <h3 class="service-subsection-title">Quality Control System</h3>
              <p>
                Rigorous quality management ensuring data accuracy and
                reproducibility
              </p>
            </div>
            <div class="qc-process">
              <div class="qc-step">
                <div class="qc-number">01</div>
                <div class="qc-content">
                  <h4>Sample Quality Control</h4>
                  <p>
                    Strict sample collection, storage, and preprocessing
                    standard operating procedures
                  </p>
                  <ul class="qc-list">
                    <li>Standardized sampling protocols</li>
                    <li>-80°C ultra-low temperature storage</li>
                    <li>Sample integrity testing</li>
                    <li>Chain of custody documentation</li>
                  </ul>
                </div>
              </div>
              <div class="qc-step">
                <div class="qc-number">02</div>
                <div class="qc-content">
                  <h4>Instrument Quality Control</h4>
                  <p>
                    Regular instrument calibration and performance verification
                    ensuring detection accuracy
                  </p>
                  <ul class="qc-list">
                    <li>Daily instrument calibration</li>
                    <li>Quality control sample testing</li>
                    <li>System suitability testing</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>
              </div>
              <div class="qc-step">
                <div class="qc-number">03</div>
                <div class="qc-content">
                  <h4>Data Quality Control</h4>
                  <p>
                    Multi-level data quality inspection and standardized
                    processing workflows
                  </p>
                  <ul class="qc-list">
                    <li>Outlier detection</li>
                    <li>Batch effect correction</li>
                    <li>Data normalization</li>
                    <li>Statistical validation</li>
                  </ul>
                </div>
              </div>
              <div class="qc-step">
                <div class="qc-number">04</div>
                <div class="qc-content">
                  <h4>Result Validation</h4>
                  <p>
                    Independent validation and cross-validation ensuring result
                    reliability
                  </p>
                  <ul class="qc-list">
                    <li>Technical replicate validation</li>
                    <li>Biological replicate confirmation</li>
                    <li>External standard validation</li>
                    <li>Cross-platform verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
</div></div>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import '@/styles/business-layout.css';
import '@/styles/legacy-services.css';
import ServiceHero from '@/components/Business/ServiceHero.vue';
import ServiceDirectory from '@/components/Business/ServiceDirectory.vue';
import { ref } from "vue";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

// Database switching state
const activeDatabase = ref("single-cell");

// Database configuration
const databases = [
  {
    id: "single-cell",
    name: "Single-Cell Database",
    icon: "",
    featured: true,
  },
  {
    id: "immune-repertoire",
    name: "Immune Repertoire Database",
    icon: "",
    featured: false,
  },
  {
    id: "metabolomics-proteomics",
    name: "Metabolomics & Proteomics Database",
    icon: "",
    featured: false,
  },
];

// Switch database
const setActiveDatabase = (dbId) => {
  activeDatabase.value = dbId;
};
const directorySections = [{"id": "legacy-overview", "label": "Overview"}, {"id": "legacy-section-1", "label": "Database services"}];
</script>
