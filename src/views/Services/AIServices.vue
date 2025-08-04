<template>
  <div class="ai-services-page">
    <!-- Banner -->
    <div class="services-banner">
      <div class="banner-bg">
        <div class="banner-overlay"></div>
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">AI Medical Multimodal Intelligence</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">
            Revolutionizing Healthcare with Advanced Artificial Intelligence and Multimodal Data Analysis
          </p>
          <div class="banner-features">
            <div class="feature-item">
              <span class="feature-icon">🧠</span>
              <span>Medical AI</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔬</span>
              <span>Multimodal Analysis</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <span>AI Diagnostics</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <div class="services-content">
      <div class="section-title">
        <h2>Our AI Services</h2>
        <div class="title-divider"></div>
        <p class="section-subtitle">
          Leveraging cutting-edge artificial intelligence to transform medical diagnostics and healthcare delivery
        </p>
      </div>

      <!-- Service Cards -->
      <div class="services-grid">
        <div class="service-card">
          <div class="card-icon">🧠</div>
          <h3>Medical AI Solutions</h3>
          <p>
            Advanced machine learning algorithms for medical image analysis, 
            disease prediction, and clinical decision support systems.
          </p>
          <div class="card-features">
            <span class="feature-tag">Deep Learning</span>
            <span class="feature-tag">Computer Vision</span>
            <span class="feature-tag">NLP</span>
          </div>
          <router-link to="/medical-ai" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">🔬</div>
          <h3>Multimodal Data Analysis</h3>
          <p>
            Comprehensive analysis combining genomic, proteomic, imaging, 
            and clinical data for holistic patient insights.
          </p>
          <div class="card-features">
            <span class="feature-tag">Multi-omics</span>
            <span class="feature-tag">Data Fusion</span>
            <span class="feature-tag">Pattern Recognition</span>
          </div>
          <router-link to="/multimodal-analysis" class="card-link">Learn More →</router-link>
        </div>

        <div class="service-card">
          <div class="card-icon">⚡</div>
          <h3>AI-Powered Diagnostics</h3>
          <p>
            Rapid, accurate diagnostic tools powered by artificial intelligence 
            for early disease detection and personalized treatment.
          </p>
          <div class="card-features">
            <span class="feature-tag">Real-time Analysis</span>
            <span class="feature-tag">Precision Medicine</span>
            <span class="feature-tag">Automated Reporting</span>
          </div>
          <router-link to="/ai-diagnostics" class="card-link">Learn More →</router-link>
        </div>
      </div>

      <!-- Technology Highlights -->
      <div class="tech-highlights">
        <div class="section-title">
          <h2>Technology Highlights</h2>
          <div class="title-divider"></div>
        </div>
        <div class="highlights-grid">
          <div class="highlight-item">
            <h4>Advanced Neural Networks</h4>
            <p>State-of-the-art deep learning architectures optimized for medical applications</p>
          </div>
          <div class="highlight-item">
            <h4>Federated Learning</h4>
            <p>Privacy-preserving AI training across multiple healthcare institutions</p>
          </div>
          <div class="highlight-item">
            <h4>Explainable AI</h4>
            <p>Transparent AI models providing interpretable results for clinical decision-making</p>
          </div>
          <div class="highlight-item">
            <h4>Real-time Processing</h4>
            <p>High-performance computing infrastructure for instant analysis and results</p>
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
.ai-services-page {
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

/* Technology Highlights */
.tech-highlights {
  margin-top: 80px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.highlight-item {
  background: white;
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #00bc97;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.highlight-item h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.highlight-item p {
  font-size: 0.95rem;
  line-height: 1.5;
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
  
  .service-card {
    padding: 30px;
  }
}
</style>
