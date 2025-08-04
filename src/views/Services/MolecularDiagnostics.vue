<template>
  <div class="molecular-diagnostics-page">
    <!-- Banner -->
    <div class="services-banner">
      <div class="banner-bg">
        <div class="banner-overlay"></div>
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Custom Molecular Diagnostics</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">
            Tailored Molecular Diagnostic Solutions for Precision Medicine and Clinical Applications
          </p>
          <div class="banner-features">
            <div class="feature-item">
              <span class="feature-icon">🧬</span>
              <span>Assay Development</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <span>Biomarker Discovery</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✅</span>
              <span>Diagnostic Validation</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <div class="services-content">
      <div class="section-title">
        <h2>Our Molecular Diagnostic Services</h2>
        <div class="title-divider"></div>
        <p class="section-subtitle">
          From concept to clinic - comprehensive molecular diagnostic development services
        </p>
      </div>

      <!-- Service Cards -->
      <div class="services-grid">
        <div class="service-card">
          <div class="card-icon">🧬</div>
          <h3>Assay Development</h3>
          <p>
            Custom PCR, qPCR, and digital PCR assay design and optimization 
            for specific diagnostic applications and research needs.
          </p>
          <div class="card-features">
            <span class="feature-tag">PCR Design</span>
            <span class="feature-tag">Optimization</span>
            <span class="feature-tag">Validation</span>
          </div>
          <router-link to="/assay-development" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">🎯</div>
          <h3>Biomarker Discovery</h3>
          <p>
            Identification and validation of novel biomarkers for disease 
            diagnosis, prognosis, and therapeutic monitoring.
          </p>
          <div class="card-features">
            <span class="feature-tag">Multi-omics</span>
            <span class="feature-tag">Statistical Analysis</span>
            <span class="feature-tag">Clinical Correlation</span>
          </div>
          <router-link to="/biomarker-discovery" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">✅</div>
          <h3>Diagnostic Validation</h3>
          <p>
            Comprehensive analytical and clinical validation studies 
            to ensure diagnostic accuracy and regulatory compliance.
          </p>
          <div class="card-features">
            <span class="feature-tag">Clinical Trials</span>
            <span class="feature-tag">Regulatory Support</span>
            <span class="feature-tag">Quality Control</span>
          </div>
          <router-link to="/diagnostic-validation" class="card-link">Learn More →</router-link>
        </div>
      </div>

      <!-- Process Flow -->
      <div class="process-section">
        <div class="section-title">
          <h2>Development Process</h2>
          <div class="title-divider"></div>
        </div>
        <div class="process-flow">
          <div class="process-step">
            <div class="step-number">01</div>
            <h4>Consultation & Design</h4>
            <p>Understanding your specific diagnostic needs and designing optimal solutions</p>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">02</div>
            <h4>Development & Optimization</h4>
            <p>Rigorous assay development and performance optimization</p>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">03</div>
            <h4>Validation & Testing</h4>
            <p>Comprehensive validation studies and quality assurance</p>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">04</div>
            <h4>Implementation & Support</h4>
            <p>Deployment assistance and ongoing technical support</p>
          </div>
        </div>
      </div>

      <!-- Applications -->
      <div class="applications-section">
        <div class="section-title">
          <h2>Clinical Applications</h2>
          <div class="title-divider"></div>
        </div>
        <div class="applications-grid">
          <div class="application-card">
            <h4>🦠 Infectious Disease</h4>
            <p>Rapid pathogen detection and antimicrobial resistance testing</p>
          </div>
          <div class="application-card">
            <h4>🎗️ Oncology</h4>
            <p>Cancer biomarker detection and therapeutic monitoring</p>
          </div>
          <div class="application-card">
            <h4>🧬 Genetic Disorders</h4>
            <p>Hereditary disease screening and genetic counseling support</p>
          </div>
          <div class="application-card">
            <h4>💊 Pharmacogenomics</h4>
            <p>Personalized drug response and dosing optimization</p>
          </div>
          <div class="application-card">
            <h4>🫀 Cardiovascular</h4>
            <p>Cardiac biomarkers and risk assessment panels</p>
          </div>
          <div class="application-card">
            <h4>🧠 Neurological</h4>
            <p>Neurodegenerative disease markers and diagnostics</p>
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
.molecular-diagnostics-page {
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

/* Process Flow */
.process-section {
  margin: 80px 0;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  max-width: 200px;
  padding: 20px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 auto 15px auto;
}

.process-step h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.process-step p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.process-arrow {
  font-size: 1.5rem;
  color: #00bc97;
  font-weight: bold;
}

/* Applications */
.applications-section {
  margin-top: 80px;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.application-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #00bc97;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.application-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.application-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.application-card p {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
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
  
  .process-flow {
    flex-direction: column;
  }
  
  .process-arrow {
    transform: rotate(90deg);
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>
