<template>
  <div class="big-data-page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title">Big Data & Database Services</h1>
        <p class="hero-subtitle">
          Professional biomedical database platform providing comprehensive
          multi-omics data analysis services including single-cell, immune
          repertoire, and metabolomics/proteomics
        </p>
        <div class="hero-features">
          <div class="feature-item">
            <div class="feature-icon">🧬</div>
            <span>Multi-omics Integration</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <span>Data Analytics</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">☁️</div>
            <span>Cloud Computing</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔒</div>
            <span>Data Security</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Database Navigation -->
    <section class="database-navigation">
      <div class="container">
        <div class="nav-tabs">
          <button
            v-for="db in databases"
            :key="db.id"
            :class="['nav-tab', { active: activeDatabase === db.id }]"
            @click="setActiveDatabase(db.id)"
          >
            <span class="tab-icon">{{ db.icon }}</span>
            <span class="tab-title">{{ db.name }}</span>
            <span v-if="db.featured" class="featured-star">★</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Database Content -->
    <section class="database-content">
      <div class="container">
        <!-- Single-Cell Database Content -->
        <div v-if="activeDatabase === 'single-cell'" class="database-section">
          <div class="database-overview">
            <div class="overview-content">
              <div class="overview-text">
                <h2>World's Leading Single-Cell Database</h2>
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
                    <div class="step-icon">📊</div>
                    <h4>Data Collection</h4>
                    <p>Multi-platform Integration</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">
                    <div class="step-icon">🔍</div>
                    <h4>Quality Control</h4>
                    <p>Rigorous Data Filtering</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">
                    <div class="step-icon">🧬</div>
                    <h4>Standardization</h4>
                    <p>Unified Data Format</p>
                  </div>
                  <div class="flow-arrow">→</div>
                  <div class="flow-step">
                    <div class="step-icon">📈</div>
                    <h4>Analysis Services</h4>
                    <p>Professional Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="core-services">
            <div class="section-header">
              <h3>Core Analysis Functions</h3>
              <p>
                Comprehensive single-cell data services from storage to advanced
                analysis
              </p>
            </div>
            <div class="services-grid">
              <div class="service-item">
                <div class="service-icon sc-icon">🧬</div>
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
                <div class="service-icon sc-icon">⚡</div>
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
                <div class="service-icon sc-icon">🔗</div>
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
                <div class="service-icon sc-icon">📈</div>
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
              <h3>Technical Specifications</h3>
              <p>Industry-leading technology stack and performance metrics</p>
            </div>
            <div class="specs-grid">
              <div class="spec-category">
                <h4>🚀 Performance</h4>
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
                <h4>🔬 Algorithms</h4>
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
                <h4>📊 Quality Assurance</h4>
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
                <h2>Professional Immune Repertoire Data Platform</h2>
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
                    <div class="step-icon">🧬</div>
                    <h4>Sequence Acquisition</h4>
                    <p>High-throughput Sequencing</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">
                    <div class="step-icon">🔍</div>
                    <h4>Sequence Annotation</h4>
                    <p>V(D)J Gene Identification</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">
                    <div class="step-icon">📊</div>
                    <h4>Diversity Analysis</h4>
                    <p>Clonotype Statistics</p>
                  </div>
                  <div class="process-arrow">→</div>
                  <div class="process-step">
                    <div class="step-icon">🎯</div>
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
              <h3>Immune Repertoire Analysis Pipeline</h3>
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
                  <div class="icon-container">📥</div>
                </div>
                <h4>Data Input</h4>
                <div class="input-types">
                  <div class="input-type">
                    <span class="type-icon">🧬</span>
                    <span>FASTQ Files</span>
                  </div>
                  <div class="input-type">
                    <span class="type-icon">📊</span>
                    <span>BCR/TCR Sequences</span>
                  </div>
                  <div class="input-type">
                    <span class="type-icon">🔬</span>
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
                        <div class="stage-icon">🔧</div>
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
                        <div class="stage-icon">🎯</div>
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
                        <div class="stage-icon">📊</div>
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
                        <div class="stage-icon">🧠</div>
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
                  <div class="icon-container">📈</div>
                </div>
                <h4>Analysis Results</h4>
                <div class="output-types">
                  <div class="output-type">
                    <span class="type-icon">📊</span>
                    <span>Interactive Reports</span>
                  </div>
                  <div class="output-type">
                    <span class="type-icon">🗂️</span>
                    <span>Raw Data Files</span>
                  </div>
                  <div class="output-type">
                    <span class="type-icon">📈</span>
                    <span>Visualization Plots</span>
                  </div>
                  <div class="output-type">
                    <span class="type-icon">🔬</span>
                    <span>Biomarker Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Research Applications -->
          <div class="research-applications">
            <div class="section-header">
              <h3>Research Applications</h3>
              <p>
                Critical applications of immune repertoire data across multiple
                research domains
              </p>
            </div>
            <div class="applications-grid">
              <div class="application-item">
                <div class="app-header">
                  <h4>🦠 Infectious Disease Research</h4>
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
                  <h4>🎯 Cancer Immunotherapy</h4>
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
                  <h4>🔬 Autoimmune Diseases</h4>
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
                  <h4>💊 Antibody Drug Development</h4>
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
                <h2>Systems Biology Data Integration Platform</h2>
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
                    <div class="layer-icon">🧬</div>
                    <h4>Genomics</h4>
                    <p>DNA Sequence Information</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">
                    <div class="layer-icon">🧪</div>
                    <h4>Proteomics</h4>
                    <p>Protein Expression Profiles</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">
                    <div class="layer-icon">⚗️</div>
                    <h4>Metabolomics</h4>
                    <p>Metabolite Concentrations</p>
                  </div>
                  <div class="integration-arrow">↓</div>
                  <div class="omics-layer">
                    <div class="layer-icon">📊</div>
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
              <h3>State-of-the-Art Analytical Instrumentation</h3>
              <p>
                World-class mass spectrometry and chromatography platforms for
                comprehensive omics analysis
              </p>
            </div>
            <div class="instrument-gallery">
              <div class="instrument-category">
                <div class="category-header">
                  <h4>🔬 Mass Spectrometry Systems</h4>
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
                  <h4>🧪 Chromatography Systems</h4>
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
              <h3>Quality Control System</h3>
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
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

// Database switching state
const activeDatabase = ref("single-cell");

// Database configuration
const databases = [
  {
    id: "single-cell",
    name: "Single-Cell Database",
    icon: "🧬",
    featured: true,
  },
  {
    id: "immune-repertoire",
    name: "Immune Repertoire Database",
    icon: "🛡️",
    featured: false,
  },
  {
    id: "metabolomics-proteomics",
    name: "Metabolomics & Proteomics Database",
    icon: "🧪",
    featured: false,
  },
];

// Switch database
const setActiveDatabase = (dbId) => {
  activeDatabase.value = dbId;
};
</script>

<style lang="less" scoped>
.big-data-page {
  min-height: 100vh;
  background: #f8fafe;
}

// Hero Banner
.hero-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .hero-features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 1rem;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }

      @media (max-width: 480px) {
        padding: 0.5rem 1rem;
        width: 200px;
        justify-content: center;
      }

      .feature-icon {
        font-size: 1.5rem;

        @media (max-width: 480px) {
          font-size: 1.25rem;
        }
      }

      span {
        font-weight: 500;
        font-size: 0.95rem;

        @media (max-width: 480px) {
          font-size: 0.875rem;
        }
      }
    }
  }
}

// Container
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
}

// Database Navigation
.database-navigation {
  padding: 3rem 0;
  background: white;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  .nav-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.75rem;
      max-width: 400px;
    }

    @media (max-width: 480px) {
      gap: 0.5rem;
    }
  }

  .nav-tab {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #f8fafe;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    font-weight: 500;
    color: #64748b;
    position: relative;
    min-height: 60px;

    @media (max-width: 768px) {
      padding: 0.875rem 1.5rem;
      justify-content: center;
      text-align: center;
    }

    @media (max-width: 480px) {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      min-height: 50px;
    }

    &:hover {
      border-color: #4facfe;
      background: #f0f9ff;
      transform: translateY(-2px);
    }

    &.active {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: white;
      border-color: #4facfe;
      box-shadow: 0 8px 20px rgba(79, 172, 254, 0.3);
    }

    .tab-icon {
      font-size: 1.5rem;

      @media (max-width: 480px) {
        font-size: 1.25rem;
      }
    }

    .tab-title {
      font-weight: 600;

      @media (max-width: 480px) {
        font-size: 0.875rem;
      }
    }

    .featured-star {
      color: #fbbf24;
      font-size: 1.25rem;
      position: absolute;
      top: -5px;
      right: -5px;

      @media (max-width: 768px) {
        position: static;
        margin-left: 0.5rem;
      }
    }
  }
}

// Database Content
.database-content {
  padding: 0;
  background: #f8fafe;
}

.database-section {
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
}

// Database Overview
.database-overview {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .overview-text {
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1.5rem;
      line-height: 1.2;

      @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;
      line-height: 1.8;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        text-align: center;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .database-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }

    .stat-item {
      text-align: center;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 480px) {
        padding: 0.75rem 0.5rem;
      }

      .stat-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: #4facfe;
        margin-bottom: 0.25rem;

        @media (max-width: 480px) {
          font-size: 1.25rem;
        }
      }

      .stat-label {
        font-size: 0.875rem;
        color: #64748b;
        font-weight: 500;

        @media (max-width: 480px) {
          font-size: 0.75rem;
        }
      }
    }
  }

  .overview-visual {
    .data-flow,
    .immune-process,
    .omics-integration {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;

      @media (max-width: 768px) {
        padding: 1.5rem;
      }

      @media (max-width: 480px) {
        padding: 1rem;
        gap: 0.75rem;
      }
    }

    .flow-step,
    .process-step,
    .omics-layer {
      text-align: center;
      padding: 1rem;
      background: #f8fafe;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 480px) {
        padding: 0.75rem 0.5rem;
      }

      .step-icon,
      .layer-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;

        @media (max-width: 480px) {
          font-size: 1.5rem;
        }
      }

      h4 {
        font-size: 1rem;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 0.25rem;

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }

      p {
        font-size: 0.875rem;
        color: #64748b;
        margin: 0;

        @media (max-width: 480px) {
          font-size: 0.8rem;
        }
      }
    }

    .flow-arrow,
    .process-arrow,
    .integration-arrow {
      font-size: 1.5rem;
      color: #4facfe;
      text-align: center;
      margin: 0.5rem 0;

      @media (max-width: 768px) {
        transform: rotate(90deg);
      }

      @media (max-width: 480px) {
        font-size: 1.25rem;
      }
    }
  }
}

// Core Services
.core-services {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .service-item {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 1.25rem;
    }

    .service-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 2rem;
      transition: all 0.3s ease;

      @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        font-size: 1.75rem;
        margin-bottom: 1rem;
      }

      &.sc-icon {
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        color: white;
      }

      &.ir-icon {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
      }

      &.mp-icon {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
      }
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 480px) {
        font-size: 1.125rem;
      }
    }

    p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      text-align: left;

      @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;

      li {
        color: #475569;
        padding: 0.25rem 0;
        position: relative;
        padding-left: 1.5rem;
        font-size: 0.9rem;
        line-height: 1.4;

        &::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        @media (max-width: 480px) {
          font-size: 0.85rem;
          padding: 0.2rem 0;
        }
      }
    }
  }
}

// Technical Specifications
.tech-specs {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }

  .spec-category {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 1.25rem;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      @media (max-width: 480px) {
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }
    }

    .spec-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid #f1f5f9;
        font-size: 0.9rem;

        &:last-child {
          border-bottom: none;
        }

        @media (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 0.5rem 0;
          font-size: 0.85rem;
        }

        .spec-name {
          color: #64748b;
          font-weight: 500;
        }

        .spec-value {
          color: #1a202c;
          font-weight: 600;
          text-align: right;

          @media (max-width: 480px) {
            text-align: left;
          }
        }
      }
    }
  }
}

// Research Applications
.research-applications {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }

  .application-item {
    background: #f8fafe;
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 1.25rem;
    }

    .app-header h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 480px) {
        font-size: 1.125rem;
      }
    }

    .app-content p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;

      @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
    }

    .app-examples {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      @media (max-width: 480px) {
        gap: 0.375rem;
      }
    }

    .example-tag {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      white-space: nowrap;

      @media (max-width: 480px) {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
      }
    }
  }
}

// Quality Control System
.quality-control {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .qc-process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }

  .qc-step {
    background: #f8fafe;
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 1.25rem;
    }

    .qc-number {
      position: absolute;
      top: -15px;
      left: 20px;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #f093fb, #f5576c);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.125rem;

      @media (max-width: 480px) {
        width: 35px;
        height: 35px;
        font-size: 1rem;
        top: -12px;
        left: 15px;
      }
    }

    .qc-content {
      h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 1rem;
        margin-top: 0.5rem;

        @media (max-width: 480px) {
          font-size: 1.125rem;
        }
      }

      p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 1rem;

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }

      .qc-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          color: #475569;
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.9rem;
          line-height: 1.4;

          &::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
          }

          @media (max-width: 480px) {
            font-size: 0.85rem;
            padding: 0.2rem 0;
          }
        }
      }
    }
  }
}

// Responsive Design Enhancements
@media (max-width: 768px) {
  .database-overview .overview-content {
    text-align: center;
  }

  .database-stats {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    padding: 80px 15px 60px;
  }

  .database-section {
    padding: 2rem 0;
  }

  .overview-text h2 {
    font-size: 1.75rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    text-align: center;
  }

  .feature-list {
    text-align: left;
  }
}

// Redesigned Analysis Pipeline Styles
.analysis-pipeline-redesigned {
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #f8fafe 0%, #f0f9ff 100%);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto 2rem;
    }

    .pipeline-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        gap: 1rem;
      }

      .stat-badge {
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        border: 1px solid #e2e8f0;

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #4facfe;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }
      }
    }
  }

  .pipeline-workflow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 3rem;
    }

    .workflow-section {
      flex: 0 0 auto;
      text-align: center;

      &.input-section,
      &.output-section {
        flex: 0 0 200px;

        @media (max-width: 1024px) {
          flex: none;
        }
      }

      .section-icon {
        margin-bottom: 1rem;

        .icon-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }
      }

      h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 1rem;
      }

      .input-types,
      .output-types {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .input-type,
        .output-type {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .type-icon {
            font-size: 1.25rem;
            flex-shrink: 0;
          }

          span:last-child {
            font-size: 0.875rem;
            font-weight: 500;
            color: #475569;
          }
        }
      }
    }

    .processing-pipeline {
      flex: 1;
      position: relative;

      .pipeline-connector {
        position: absolute;
        top: 50%;
        left: -2rem;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (max-width: 1024px) {
          position: static;
          transform: none;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .connector-line {
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #4facfe, #00f2fe);

          @media (max-width: 1024px) {
            width: 60px;
          }
        }

        .connector-arrow {
          font-size: 1.5rem;
          color: #4facfe;
          font-weight: bold;

          @media (max-width: 1024px) {
            transform: rotate(90deg);
          }
        }
      }

      .processing-stages {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .stage-row {
          display: flex;
          gap: 1.5rem;

          @media (max-width: 768px) {
            flex-direction: column;
            gap: 1rem;
          }
        }

        .processing-stage {
          flex: 1;
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          border: 2px solid transparent;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }

          &.primary {
            border-color: #4facfe;
            background: linear-gradient(
              135deg,
              rgba(79, 172, 254, 0.05),
              rgba(0, 242, 254, 0.05)
            );
          }

          &.secondary {
            border-color: #667eea;
            background: linear-gradient(
              135deg,
              rgba(102, 126, 234, 0.05),
              rgba(118, 75, 162, 0.05)
            );
          }

          &.tertiary {
            border-color: #f093fb;
            background: linear-gradient(
              135deg,
              rgba(240, 147, 251, 0.05),
              rgba(245, 87, 108, 0.05)
            );
          }

          &.quaternary {
            border-color: #ffeaa7;
            background: linear-gradient(
              135deg,
              rgba(255, 234, 167, 0.3),
              rgba(255, 206, 84, 0.3)
            );
          }

          .stage-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;

            .stage-icon {
              font-size: 1.5rem;
              flex-shrink: 0;
            }

            h5 {
              font-size: 1.125rem;
              font-weight: 600;
              color: #1a202c;
              margin: 0;
            }
          }

          .stage-metrics {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .metric {
              font-size: 0.875rem;
              color: #64748b;
              padding: 0.25rem 0.5rem;
              background: rgba(255, 255, 255, 0.7);
              border-radius: 6px;
              border: 1px solid rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }
}

// Instrumentation Showcase Styles
.instrumentation-showcase {
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .instrument-gallery {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: 768px) {
      gap: 2rem;
    }
  }

  .instrument-category {
    .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #f8fafe, #f0f9ff);
      border-radius: 12px;
      border: 1px solid #e2e8f0;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
      }

      h4 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a202c;
        margin: 0;

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }
      }

      .category-count {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 600;
      }
    }

    .instrument-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }

    .instrument-card {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      }

      .instrument-badge {
        position: absolute;
        top: -8px;
        right: 1rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
      }

      .instrument-name {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 1rem;
        text-align: center;
      }

      .instrument-specs {
        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f5f9;

          &:last-child {
            border-bottom: none;
          }

          .spec-label {
            color: #64748b;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .spec-value {
            color: #1a202c;
            font-size: 0.875rem;
            font-weight: 600;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
