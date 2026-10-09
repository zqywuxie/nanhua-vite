<template>
  <div class="molecular-diagnostics-page legacy-service business-surface">
    <!-- Hero Banner -->
    <ServiceHero title="Custom Molecular Diagnostics Development" :parent="{ label: 'Services', to: '/services' }" />
<div class="legacy-layout business-container"><ServiceDirectory :sections="directorySections" /><div class="legacy-body"><section class="service-introduction" id="legacy-overview" tabindex="-1"><h2 class="service-section-title">Overview</h2><p>Providing comprehensive molecular diagnostic solutions from concept to product, including assay development, validation optimization, and industrialization support</p><div class="service-capabilities"><span>Assay Development</span><span>Method Validation</span><span>Industrialization Support</span><span>Quality Control</span></div></section>

    <!-- Service Process -->
    <section id="legacy-section-1" tabindex="-1" class="service-process">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">End-to-End Development Process</h2>
          <p>
            Comprehensive molecular diagnostics development following FDA/CE-IVD
            guidelines with rigorous quality control at every stage
          </p>
          <div class="process-overview">
            <div class="overview-stats">
              <div class="stat-item">
                <span class="stat-number">6-18</span>
                <span class="stat-label">Months Timeline</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">95%+</span>
                <span class="stat-label">Success Rate</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">200+</span>
                <span class="stat-label">Completed Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-number">01</div>
            <div class="timeline-content">
              <div class="phase-header">
                <h3>Discovery & Requirements Analysis</h3>
                <div class="phase-duration">2-4 weeks</div>
              </div>
              <p>
                Comprehensive assessment of clinical needs, target analytes, and
                regulatory pathway to establish project feasibility and
                development strategy
              </p>
              <div class="deliverables">
                <h4>Key Deliverables:</h4>
                <ul>
                  <li>Clinical utility assessment & literature review</li>
                  <li>Target product profile (TPP) definition</li>
                  <li>Regulatory pathway analysis (FDA 510(k)/PMA, CE-IVD)</li>
                  <li>Competitive landscape analysis</li>
                  <li>Technical feasibility study</li>
                  <li>Project timeline & budget estimation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-number">02</div>
            <div class="timeline-content">
              <div class="phase-header">
                <h3>Assay Design & Development</h3>
                <div class="phase-duration">4-8 weeks</div>
              </div>
              <p>
                Design and develop molecular assay components including primers,
                probes, and reaction conditions optimized for clinical
                performance
              </p>
              <div class="deliverables">
                <h4>Key Deliverables:</h4>
                <ul>
                  <li>Primer/probe design & in-silico validation</li>
                  <li>Assay chemistry optimization (PCR/qPCR/dPCR)</li>
                  <li>
                    Reaction condition optimization (temperature, buffer,
                    cycling)
                  </li>
                  <li>Multiplexing strategy development</li>
                  <li>Internal control design & validation</li>
                  <li>Preliminary performance characterization</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-number">03</div>
            <div class="timeline-content">
              <div class="phase-header">
                <h3>Analytical Validation</h3>
                <div class="phase-duration">8-12 weeks</div>
              </div>
              <p>
                Comprehensive analytical validation following CLSI guidelines to
                establish assay performance characteristics for regulatory
                submission
              </p>
              <div class="deliverables">
                <h4>Key Deliverables:</h4>
                <ul>
                  <li>Analytical sensitivity (LoD) determination</li>
                  <li>Analytical specificity & cross-reactivity testing</li>
                  <li>Precision studies (repeatability & reproducibility)</li>
                  <li>Accuracy & linearity assessment</li>
                  <li>Stability studies (reagent & sample)</li>
                  <li>Interference testing (hemolysis, lipemia, icterus)</li>
                  <li>Reference range establishment</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-number">04</div>
            <div class="timeline-content">
              <div class="phase-header">
                <h3>Clinical Validation & Regulatory Submission</h3>
                <div class="phase-duration">12-24 weeks</div>
              </div>
              <p>
                Clinical validation studies and comprehensive regulatory
                submission package preparation for FDA 510(k), PMA, or CE-IVD
                approval
              </p>
              <div class="deliverables">
                <h4>Key Deliverables:</h4>
                <ul>
                  <li>Clinical validation protocol design</li>
                  <li>Clinical study execution & data analysis</li>
                  <li>510(k)/PMA submission package preparation</li>
                  <li>Quality management system documentation</li>
                  <li>Risk management file (ISO 14971)</li>
                  <li>Regulatory communication & response management</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-number">05</div>
            <div class="timeline-content">
              <div class="phase-header">
                <h3>Manufacturing & Commercialization</h3>
                <div class="phase-duration">8-16 weeks</div>
              </div>
              <p>
                Technology transfer, manufacturing scale-up, and commercial
                launch support with full quality assurance and supply chain
                management
              </p>
              <div class="deliverables">
                <h4>Key Deliverables:</h4>
                <ul>
                  <li>Manufacturing process validation</li>
                  <li>Technology transfer documentation</li>
                  <li>Supply chain qualification & management</li>
                  <li>Commercial manufacturing setup</li>
                  <li>Post-market surveillance plan</li>
                  <li>Training & technical support programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section id="legacy-section-2" tabindex="-1" class="core-services">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Core Service Portfolio</h2>
          <p>
            Comprehensive molecular diagnostic development services from concept
            validation to commercial production
          </p>
        </div>
        <div class="services-grid">
          <div class="service-item">

            <h3>Assay Development</h3>
            <p>
              Based on customer requirements, develop innovative molecular
              diagnostic assays including PCR, qPCR, digital PCR, NGS, and other
              technology platforms
            </p>
            <ul class="feature-list">
              <li>Primer and probe design</li>
              <li>Reaction system optimization</li>
              <li>Detection workflow establishment</li>
              <li>Performance parameter evaluation</li>
              <li>Multiplexing capability development</li>
              <li>Automation compatibility testing</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Method Validation & Optimization</h3>
            <p>
              Rigorous method validation according to international standards,
              ensuring accuracy, precision, and stability of test results
            </p>
            <ul class="feature-list">
              <li>Precision validation</li>
              <li>Accuracy assessment</li>
              <li>Specificity testing</li>
              <li>Stability studies</li>
              <li>Limit of detection determination</li>
              <li>Cross-reactivity evaluation</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Regulatory Support</h3>
            <p>
              Assist customers in completing product registration applications,
              providing complete technical documentation and regulatory support
            </p>
            <ul class="feature-list">
              <li>Registration documentation preparation</li>
              <li>Clinical trial design</li>
              <li>Regulatory consulting services</li>
              <li>Review communication coordination</li>
              <li>Quality management system setup</li>
              <li>Post-market surveillance support</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Industrial Production</h3>
            <p>
              Provide full-process support from pilot scale to large-scale
              production, ensuring product quality and production efficiency
            </p>
            <ul class="feature-list">
              <li>Process scale-up optimization</li>
              <li>Quality system establishment</li>
              <li>Production line design</li>
              <li>Technology transfer services</li>
              <li>Supply chain management</li>
              <li>Cost optimization strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Platforms -->
    <section id="legacy-section-3" tabindex="-1" class="technology-platforms">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Technology Platforms</h2>
          <p>
            Covering multiple molecular diagnostic technologies to meet diverse
            application requirements
          </p>
        </div>
        <div class="platforms-grid">
          <div class="platform-item">

            <h3>PCR Technology Platform</h3>
            <p>
              Including conventional PCR, real-time fluorescent PCR, multiplex
              PCR, and other technologies
            </p>
            <div class="platform-tags">
              <span class="tag">RT-PCR</span>
              <span class="tag">qPCR</span>
              <span class="tag">Multiplex PCR</span>
              <span class="tag">Nested PCR</span>
            </div>
          </div>

          <div class="platform-item">

            <h3>Digital PCR Platform</h3>
            <p>
              High-precision quantitative detection, suitable for low-abundance
              target detection
            </p>
            <div class="platform-tags">
              <span class="tag">ddPCR</span>
              <span class="tag">dPCR</span>
              <span class="tag">Absolute Quantification</span>
              <span class="tag">Rare Variant Detection</span>
            </div>
          </div>

          <div class="platform-item">

            <h3>NGS Sequencing Platform</h3>
            <p>
              High-throughput sequencing technology suitable for genomics
              research
            </p>
            <div class="platform-tags">
              <span class="tag">WGS</span>
              <span class="tag">WES</span>
              <span class="tag">Panel Sequencing</span>
              <span class="tag">RNA-seq</span>
            </div>
          </div>

          <div class="platform-item">

            <h3>POCT Rapid Testing Platform</h3>
            <p>
              Point-of-care testing technology suitable for on-site rapid
              detection
            </p>
            <div class="platform-tags">
              <span class="tag">Lateral Flow</span>
              <span class="tag">Immunofluorescence</span>
              <span class="tag">Molecular POCT</span>
              <span class="tag">Biosensors</span>
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
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";


const directorySections = [{"id": "legacy-overview", "label": "Overview"}, {"id": "legacy-section-1", "label": "End-to-End Development Process"}, {"id": "legacy-section-2", "label": "Core Service Portfolio"}, {"id": "legacy-section-3", "label": "Technology Platforms"}];
</script>
