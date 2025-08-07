<template>
  <div class="services-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Professional Service Solutions</h1>
        <p class="hero-subtitle">
          Comprehensive technical service support for life science research
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1500+</span>
            <span class="stat-label">Successful Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">80+</span>
            <span class="stat-label">Partner Institutions</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Technical Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="company-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>Leading Life Science Technology Service Provider</h2>
            <p>
              Vivolution Biosciences is a globally recognized leader in life
              science technology services, providing comprehensive solutions
              from basic research to clinical applications. Our state-of-the-art
              facilities span over 50,000 square meters, housing cutting-edge
              instrumentation and maintaining the highest industry standards
              including ISO 9001:2015, ISO 13485:2016, and CLIA certifications.
              We serve Fortune 500 pharmaceutical companies, leading academic
              institutions, and innovative biotechnology startups worldwide.
            </p>
            <div class="company-stats">
              <div class="stat-item">
                <span class="stat-number">15+</span>
                <span class="stat-label">Years of Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">500+</span>
                <span class="stat-label">Partner Clients</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">100+</span>
                <span class="stat-label">Professional Team</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Patent Technologies</span>
              </div>
            </div>
          </div>
          <div class="overview-image">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <span>🏢</span>
                <p>Corporate Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section class="core-services">
      <div class="container">
        <div class="section-header">
          <h2>Core Service Portfolio</h2>
          <p>
            Comprehensive solutions covering the entire spectrum of life science
            research and development
          </p>
        </div>
        <div class="services-grid">
          <!-- AI Medical Multimodal -->
          <div
            class="service-card featured"
            @click="navigateToService('ai-medical-multimodal')"
          >
            <div class="service-badge">Featured</div>
            <div class="service-icon ai-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  fill="currentColor"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <div class="service-content">
              <h3>AI Medical Multimodal Intelligence</h3>
              <p>
                Advanced AI solutions integrating deep learning, computer
                vision, and natural language processing for medical imaging
                analysis and clinical decision support.
              </p>
              <div class="service-features">
                <span class="feature-tag">Deep Learning</span>
                <span class="feature-tag">Medical Imaging</span>
                <span class="feature-tag">Clinical NLP</span>
                <span class="feature-tag">Predictive Analytics</span>
              </div>
              <div class="service-metrics">
                <div class="metric">
                  <span class="metric-value">97%+</span>
                  <span class="metric-label">Diagnostic Accuracy</span>
                </div>
                <div class="metric">
                  <span class="metric-value">15M+</span>
                  <span class="metric-label">Images Processed</span>
                </div>
                <div class="metric">
                  <span class="metric-value">300+</span>
                  <span class="metric-label">Partner Hospitals</span>
                </div>
              </div>
            </div>
            <div class="service-footer">
              <span class="learn-more">Explore AI Solutions →</span>
            </div>
          </div>

          <!-- Custom Molecular Diagnostics -->
          <div
            class="service-card"
            @click="navigateToService('custom-molecular-diagnostics')"
          >
            <div class="service-icon molecular-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9Z"
                  fill="currentColor"
                />
                <path
                  d="M3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9Z"
                  fill="currentColor"
                />
                <path
                  d="M12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z"
                  fill="currentColor"
                />
                <line
                  x1="12"
                  y1="6"
                  x2="12"
                  y2="18"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="5"
                  y1="11"
                  x2="19"
                  y2="11"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="service-content">
              <h3>Custom Molecular Diagnostics Development</h3>
              <p>
                End-to-end molecular diagnostic solutions from concept to
                commercialization, including assay development, validation, and
                regulatory support.
              </p>
              <div class="service-features">
                <span class="feature-tag">Assay Development</span>
                <span class="feature-tag">Method Validation</span>
                <span class="feature-tag">Regulatory Support</span>
                <span class="feature-tag">Quality Control</span>
              </div>
              <div class="service-metrics">
                <div class="metric">
                  <span class="metric-value">200+</span>
                  <span class="metric-label">Assays Developed</span>
                </div>
                <div class="metric">
                  <span class="metric-value">95%+</span>
                  <span class="metric-label">Success Rate</span>
                </div>
                <div class="metric">
                  <span class="metric-value">6-12</span>
                  <span class="metric-label">Months Timeline</span>
                </div>
              </div>
            </div>
            <div class="service-footer">
              <span class="learn-more">Explore Diagnostics →</span>
            </div>
          </div>

          <!-- Big Data & Database Services -->
          <div
            class="service-card"
            @click="navigateToService('big-data-database')"
          >
            <div class="service-icon database-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12"
                  cy="5"
                  rx="9"
                  ry="3"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M3 12V19C3 20.66 7.03 22 12 22S21 20.66 21 19V12"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="service-content">
              <h3>Big Data & Database Services</h3>
              <p>
                Comprehensive multi-omics database platform integrating
                single-cell, immune repertoire, and metabolomics/proteomics data
                with advanced analytics.
              </p>
              <div class="service-features">
                <span class="feature-tag">Single-Cell Database</span>
                <span class="feature-tag">Immune Repertoire</span>
                <span class="feature-tag">Multi-omics Integration</span>
                <span class="feature-tag">Cloud Analytics</span>
              </div>
              <div class="service-metrics">
                <div class="metric">
                  <span class="metric-value">15M+</span>
                  <span class="metric-label">Cell Profiles</span>
                </div>
                <div class="metric">
                  <span class="metric-value">20B+</span>
                  <span class="metric-label">Sequence Records</span>
                </div>
                <div class="metric">
                  <span class="metric-value">150K+</span>
                  <span class="metric-label">Metabolites</span>
                </div>
              </div>
            </div>
            <div class="service-footer">
              <span class="learn-more">Explore Database →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Excellence -->
    <section class="technology-excellence">
      <div class="container">
        <div class="section-header">
          <h2>Technology Excellence</h2>
          <p>
            Cutting-edge technologies and methodologies driving innovation in
            life sciences
          </p>
        </div>
        <div class="tech-categories">
          <div class="tech-category">
            <div class="category-icon">🧬</div>
            <h3>Genomics & Sequencing</h3>
            <div class="tech-list">
              <span class="tech-item">Next-Generation Sequencing</span>
              <span class="tech-item">Single-Cell Sequencing</span>
              <span class="tech-item">Long-Read Sequencing</span>
              <span class="tech-item">Spatial Transcriptomics</span>
            </div>
          </div>
          <div class="tech-category">
            <div class="category-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <div class="tech-list">
              <span class="tech-item">Deep Learning</span>
              <span class="tech-item">Computer Vision</span>
              <span class="tech-item">Natural Language Processing</span>
              <span class="tech-item">Predictive Modeling</span>
            </div>
          </div>
          <div class="tech-category">
            <div class="category-icon">🔬</div>
            <h3>Molecular Diagnostics</h3>
            <div class="tech-list">
              <span class="tech-item">PCR & qPCR</span>
              <span class="tech-item">Digital PCR</span>
              <span class="tech-item">CRISPR-based Detection</span>
              <span class="tech-item">Isothermal Amplification</span>
            </div>
          </div>
          <div class="tech-category">
            <div class="category-icon">☁️</div>
            <h3>Cloud Computing</h3>
            <div class="tech-list">
              <span class="tech-item">High-Performance Computing</span>
              <span class="tech-item">Distributed Processing</span>
              <span class="tech-item">Data Security</span>
              <span class="tech-item">Scalable Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="quality-assurance">
      <div class="container">
        <div class="section-header">
          <h2>Quality Assurance & Compliance</h2>
          <p>
            Rigorous quality standards ensuring reliable and reproducible
            results
          </p>
        </div>
        <div class="qa-grid">
          <div class="qa-item">
            <div class="qa-icon">🏆</div>
            <h3>ISO Certifications</h3>
            <p>
              ISO 9001:2015 Quality Management System and ISO 13485:2016 Medical
              Devices certification ensuring consistent quality delivery.
            </p>
          </div>
          <div class="qa-item">
            <div class="qa-icon">✅</div>
            <h3>Regulatory Compliance</h3>
            <p>
              Full compliance with FDA, CE-IVD, and NMPA regulations for medical
              device development and clinical diagnostics.
            </p>
          </div>
          <div class="qa-item">
            <div class="qa-icon">🔒</div>
            <h3>Data Security</h3>
            <p>
              HIPAA-compliant data handling with advanced encryption, secure
              cloud infrastructure, and comprehensive audit trails.
            </p>
          </div>
          <div class="qa-item">
            <div class="qa-icon">📊</div>
            <h3>Performance Metrics</h3>
            <p>
              Continuous monitoring of key performance indicators with real-time
              quality control and automated validation processes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

const router = useRouter();

const navigateToService = (serviceType) => {
  switch (serviceType) {
    case "ai-medical-multimodal":
      router.push("/ai-medical-multimodal");
      break;
    case "custom-molecular-diagnostics":
      router.push("/custom-molecular-diagnostics");
      break;
    case "big-data-database":
      router.push("/big-data-database");
      break;
  }
};
</script>

<style lang="less" scoped>
.services-container {
  min-height: 100vh;
  background: #f8fafe;
}

// Hero Section
.hero-section {
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

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 2rem;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .stat-item {
      text-align: center;

      .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
          font-size: 2rem;
        }

        @media (max-width: 480px) {
          font-size: 1.75rem;
        }
      }

      .stat-label {
        font-size: 1rem;
        opacity: 0.9;

        @media (max-width: 480px) {
          font-size: 0.9rem;
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

// Company Overview
.company-overview {
  padding: 5rem 0;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
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

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .company-stats {
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
      background: #f8fafe;
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
        color: #667eea;
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

  .overview-image {
    .image-placeholder {
      background: #f8fafe;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        height: 200px;
      }

      .placeholder-content {
        text-align: center;

        span {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;

          @media (max-width: 480px) {
            font-size: 3rem;
          }
        }

        p {
          color: #64748b;
          font-size: 1.125rem;
          margin: 0;

          @media (max-width: 480px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

// Core Services
.core-services {
  padding: 5rem 0;
  background: #f8fafe;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .service-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
      border-color: rgba(102, 126, 234, 0.3);
    }

    &.featured {
      border: 2px solid #667eea;
      background: linear-gradient(135deg, #f8fafe, #f0f9ff);

      .service-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }

    @media (max-width: 768px) {
      padding: 2rem;
    }

    @media (max-width: 480px) {
      padding: 1.5rem;
    }

    .service-icon {
      width: 80px;
      height: 80px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      transition: all 0.3s ease;

      @media (max-width: 480px) {
        width: 60px;
        height: 60px;
        margin-bottom: 1.5rem;
      }

      svg {
        width: 40px;
        height: 40px;
        transition: transform 0.3s ease;

        @media (max-width: 480px) {
          width: 30px;
          height: 30px;
        }
      }

      &.ai-icon {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
      }

      &.molecular-icon {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
      }

      &.database-icon {
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        color: white;
      }
    }

    .service-content {
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 1rem;
        line-height: 1.3;

        @media (max-width: 480px) {
          font-size: 1.25rem;
        }
      }

      p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 1.5rem;

        @media (max-width: 480px) {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
      }

      .service-features {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;

        @media (max-width: 480px) {
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          background: #f1f5f9;
          color: #475569;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;

          @media (max-width: 480px) {
            font-size: 0.8rem;
            padding: 0.2rem 0.6rem;
          }
        }
      }

      .service-metrics {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        @media (max-width: 480px) {
          flex-direction: column;
          gap: 0.75rem;
        }

        .metric {
          text-align: center;
          flex: 1;

          .metric-value {
            display: block;
            font-size: 1.25rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 0.25rem;

            @media (max-width: 480px) {
              font-size: 1.125rem;
            }
          }

          .metric-label {
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 500;

            @media (max-width: 480px) {
              font-size: 0.7rem;
            }
          }
        }
      }
    }

    .service-footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #f1f5f9;

      @media (max-width: 480px) {
        margin-top: 1.5rem;
        padding-top: 1rem;
      }

      .learn-more {
        color: #667eea;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.3s ease;

        &:hover {
          color: #764ba2;
        }

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }
    }
  }
}

// Technology Excellence
.technology-excellence {
  padding: 5rem 0;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
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

  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .tech-category {
    background: #f8fafe;
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    text-align: center;
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

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;

      @media (max-width: 480px) {
        font-size: 2.5rem;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 1.5rem;

      @media (max-width: 480px) {
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }
    }

    .tech-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      @media (max-width: 480px) {
        gap: 0.5rem;
      }

      .tech-item {
        background: white;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        color: #475569;
        font-size: 0.9rem;
        font-weight: 500;
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;

        &:hover {
          background: #667eea;
          color: white;
          transform: translateX(4px);
        }

        @media (max-width: 480px) {
          padding: 0.5rem 0.75rem;
          font-size: 0.85rem;
        }
      }
    }
  }
}

// Quality Assurance
.quality-assurance {
  padding: 5rem 0;
  background: #f8fafe;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
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

  .qa-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .qa-item {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    text-align: center;
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

    .qa-icon {
      font-size: 3rem;
      margin-bottom: 1rem;

      @media (max-width: 480px) {
        font-size: 2.5rem;
      }
    }

    h3 {
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
      text-align: left;

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
}

// Responsive Design Enhancements
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px 60px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 15px 40px;
  }

  .container {
    padding: 0 15px;
  }

  .service-card {
    text-align: center;
  }

  .service-metrics {
    justify-content: center;
  }
}
</style>
