<template>
  <div class="big-data-services-page">
    <!-- Banner -->
    <div class="services-banner">
      <div class="banner-bg">
        <div class="banner-overlay"></div>
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Big Data & Database Services</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">
            Comprehensive Data Management and Analytics Solutions for Life Sciences Research
          </p>
          <div class="banner-features">
            <div class="feature-item">
              <span class="feature-icon">🗄️</span>
              <span>Genomic Databases</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📊</span>
              <span>Data Analytics</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">☁️</span>
              <span>Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <div class="services-content">
      <div class="section-title">
        <h2>Our Big Data Services</h2>
        <div class="title-divider"></div>
        <p class="section-subtitle">
          Scalable data infrastructure and advanced analytics for genomics and life sciences
        </p>
      </div>

      <!-- Service Cards -->
      <div class="services-grid">
        <div class="service-card">
          <div class="card-icon">🗄️</div>
          <h3>Genomic Databases</h3>
          <p>
            Comprehensive genomic data repositories with advanced search, 
            annotation, and integration capabilities for research and clinical applications.
          </p>
          <div class="card-features">
            <span class="feature-tag">Multi-omics Data</span>
            <span class="feature-tag">Annotation Tools</span>
            <span class="feature-tag">API Access</span>
          </div>
          <router-link to="/genomic-databases" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">📊</div>
          <h3>Data Analytics Platform</h3>
          <p>
            Advanced analytics and visualization tools for complex biological 
            data analysis, pattern recognition, and predictive modeling.
          </p>
          <div class="card-features">
            <span class="feature-tag">Machine Learning</span>
            <span class="feature-tag">Visualization</span>
            <span class="feature-tag">Statistical Analysis</span>
          </div>
          <router-link to="/data-analytics" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">☁️</div>
          <h3>Cloud Computing Services</h3>
          <p>
            Scalable cloud infrastructure for high-performance computing, 
            data storage, and collaborative research environments.
          </p>
          <div class="card-features">
            <span class="feature-tag">HPC Clusters</span>
            <span class="feature-tag">Secure Storage</span>
            <span class="feature-tag">Collaboration Tools</span>
          </div>
          <router-link to="/cloud-computing" class="card-link">Learn More →</router-link>
        </div>
      </div>

      <!-- Data Types -->
      <div class="data-types-section">
        <div class="section-title">
          <h2>Supported Data Types</h2>
          <div class="title-divider"></div>
        </div>
        <div class="data-types-grid">
          <div class="data-type-card">
            <div class="data-icon">🧬</div>
            <h4>Genomic Data</h4>
            <p>Whole genome sequencing, exome sequencing, targeted panels</p>
          </div>
          <div class="data-type-card">
            <div class="data-icon">🧪</div>
            <h4>Transcriptomic Data</h4>
            <p>RNA-seq, single-cell RNA-seq, spatial transcriptomics</p>
          </div>
          <div class="data-type-card">
            <div class="data-icon">🔬</div>
            <h4>Proteomic Data</h4>
            <p>Mass spectrometry, protein arrays, immunoassays</p>
          </div>
          <div class="data-type-card">
            <div class="data-icon">⚗️</div>
            <h4>Metabolomic Data</h4>
            <p>LC-MS, GC-MS, NMR metabolomics datasets</p>
          </div>
          <div class="data-type-card">
            <div class="data-icon">🖼️</div>
            <h4>Imaging Data</h4>
            <p>Medical imaging, microscopy, pathology images</p>
          </div>
          <div class="data-type-card">
            <div class="data-icon">📋</div>
            <h4>Clinical Data</h4>
            <p>Electronic health records, clinical trial data</p>
          </div>
        </div>
      </div>

      <!-- Platform Features -->
      <div class="features-section">
        <div class="section-title">
          <h2>Platform Features</h2>
          <div class="title-divider"></div>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <h4>🚀 High Performance</h4>
            <p>Optimized for large-scale data processing with distributed computing capabilities</p>
          </div>
          <div class="feature-card">
            <h4>🔒 Data Security</h4>
            <p>Enterprise-grade security with encryption, access controls, and compliance</p>
          </div>
          <div class="feature-card">
            <h4>🔄 Data Integration</h4>
            <p>Seamless integration of multi-modal data from various sources and formats</p>
          </div>
          <div class="feature-card">
            <h4>📈 Scalability</h4>
            <p>Auto-scaling infrastructure that grows with your data and computational needs</p>
          </div>
          <div class="feature-card">
            <h4>🤝 Collaboration</h4>
            <p>Shared workspaces and collaborative tools for research teams</p>
          </div>
          <div class="feature-card">
            <h4>🔧 Customization</h4>
            <p>Flexible APIs and customizable workflows for specific research requirements</p>
          </div>
        </div>
      </div>

      <!-- Use Cases -->
      <div class="use-cases-section">
        <div class="section-title">
          <h2>Use Cases</h2>
          <div class="title-divider"></div>
        </div>
        <div class="use-cases-list">
          <div class="use-case-item">
            <div class="use-case-number">01</div>
            <div class="use-case-content">
              <h4>Population Genomics Studies</h4>
              <p>Large-scale genomic analysis across diverse populations for disease association studies</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-number">02</div>
            <div class="use-case-content">
              <h4>Drug Discovery & Development</h4>
              <p>Multi-omics data integration for target identification and drug mechanism studies</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-number">03</div>
            <div class="use-case-content">
              <h4>Precision Medicine</h4>
              <p>Patient stratification and treatment optimization based on molecular profiles</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-number">04</div>
            <div class="use-case-content">
              <h4>Clinical Trial Analytics</h4>
              <p>Real-time monitoring and analysis of clinical trial data and biomarkers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
</script>

<style scoped>
/* Page Layout */
.big-data-services-page {
  min-height: 100vh;
  background: #f8fafe;
}

/* Banner Styles */
.services-banner {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
}

.banner-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  border: none;
  margin: 20px auto;
  border-radius: 2px;
}

.banner-subtitle {
  font-size: 1.3rem;
  margin-bottom: 30px;
  line-height: 1.6;
  opacity: 0.95;
}

.banner-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-icon {
  font-size: 1.5rem;
}

/* Content Styles */
.services-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  margin: 0 auto 20px auto;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Service Cards */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.service-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e6eaf0;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.service-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.feature-tag {
  background: #f0f8ff;
  color: #4e3fa5;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.card-link {
  color: #00bc97;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #4e3fa5;
}

/* Data Types */
.data-types-section {
  margin: 80px 0;
}

.data-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.data-type-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.data-type-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.data-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.data-type-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.data-type-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* Features */
.features-section {
  margin: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.feature-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #00bc97;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.feature-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* Use Cases */
.use-cases-section {
  margin-top: 80px;
}

.use-cases-list {
  display: grid;
  gap: 25px;
}

.use-case-item {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.use-case-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
}

.use-case-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.use-case-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-title {
    font-size: 2.2rem;
  }
  
  .banner-features {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .data-types-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .use-case-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
