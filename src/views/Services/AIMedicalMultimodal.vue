<template>
  <div class="ai-medical-page legacy-service business-surface">
    <!-- Hero Banner -->
    <ServiceHero title="AI Medical Multimodal Intelligence" :parent="{ label: 'Services', to: '/services' }" />
<div class="legacy-layout business-container"><ServiceDirectory :sections="directorySections" /><div class="legacy-body"><section class="service-introduction" id="legacy-overview" tabindex="-1"><h2 class="service-section-title">Overview</h2><p>Integrating deep learning, computer vision, and natural language processing technologies to provide intelligent solutions for medical imaging analysis, pathological diagnosis, and clinical decision-making</p><div class="service-capabilities"><span>Deep Learning</span><span>Computer Vision</span><span>Natural Language Processing</span><span>Medical Imaging Analysis</span></div></section>

    <!-- Solution Overview -->
    <section id="legacy-section-1" tabindex="-1" class="solution-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2 class="service-section-title">AI Medical Multimodal Solutions</h2>
            <p>
              Vivolution Biosciences' AI Medical Multimodal Intelligence
              platform integrates cutting-edge deep learning algorithms,
              computer vision technology, and natural language processing
              capabilities to provide comprehensive intelligent diagnostic
              support for medical institutions. Our solutions have been
              successfully deployed in 300+ medical institutions nationwide,
              processing over 15 million medical images with diagnostic accuracy
              exceeding 97%.
            </p>
            <div class="key-metrics">
              <div class="metric-item">
                <span class="metric-number">97%+</span>
                <span class="metric-label">Diagnostic Accuracy</span>
              </div>
              <div class="metric-item">
                <span class="metric-number">15M+</span>
                <span class="metric-label">Images Processed</span>
              </div>
              <div class="metric-item">
                <span class="metric-number">300+</span>
                <span class="metric-label">Partner Hospitals</span>
              </div>
              <div class="metric-item">
                <span class="metric-number">50ms</span>
                <span class="metric-label">Average Response Time</span>
              </div>
            </div>
          </div>
          <div class="overview-visual">
            <div class="ai-workflow">
              <div class="workflow-step">

                <h4>Data Input</h4>
                <p>Multimodal Medical Data</p>
              </div>
              <div class="workflow-arrow">→</div>
              <div class="workflow-step">

                <h4>AI Analysis</h4>
                <p>Deep Learning Processing</p>
              </div>
              <div class="workflow-arrow">→</div>
              <div class="workflow-step">

                <h4>Intelligent Diagnosis</h4>
                <p>Precise Results Output</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="legacy-section-2" tabindex="-1" class="services-overview">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Core Technology Services</h2>
          <p>
            Professional intelligent solutions for the healthcare sector based
            on advanced artificial intelligence technology
          </p>
        </div>

        <div class="services-grid">
          <div class="service-item">

            <h3>Medical Imaging AI Analysis</h3>
            <p>
              Utilizing deep learning technology for intelligent analysis of
              medical images, including automatic recognition and diagnostic
              assistance for various imaging types such as CT, MRI, and X-ray
            </p>
            <ul class="feature-list">
              <li>Image segmentation and annotation</li>
              <li>Lesion detection and localization</li>
              <li>Disease risk assessment</li>
              <li>Diagnostic report generation</li>
              <li>Multi-organ structure recognition</li>
              <li>Real-time image enhancement</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Digital Pathology AI</h3>
            <p>
              Combining pathological expertise with AI technology to provide
              precise pathological diagnostic support, improving diagnostic
              efficiency and accuracy
            </p>
            <ul class="feature-list">
              <li>Histopathological analysis</li>
              <li>Cell morphology recognition</li>
              <li>Cancer grading assessment</li>
              <li>Prognostic prediction models</li>
              <li>Automated cell counting</li>
              <li>Biomarker expression analysis</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Clinical Decision Support</h3>
            <p>
              Based on big data and machine learning algorithms, providing
              intelligent diagnostic recommendations and decision support for
              clinicians
            </p>
            <ul class="feature-list">
              <li>Treatment plan recommendations</li>
              <li>Drug interaction analysis</li>
              <li>Treatment outcome prediction</li>
              <li>Personalized medical plans</li>
              <li>Risk stratification</li>
              <li>Evidence-based guidelines</li>
            </ul>
          </div>

          <div class="service-item">

            <h3>Multimodal Data Fusion</h3>
            <p>
              Integrating multiple data sources including imaging, text,
              genomics, and other information to provide comprehensive
              intelligent analysis services
            </p>
            <ul class="feature-list">
              <li>Multi-source data integration</li>
              <li>Cross-modal feature extraction</li>
              <li>Comprehensive analysis modeling</li>
              <li>Intelligent report generation</li>
              <li>Data quality assessment</li>
              <li>Real-time data processing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section id="legacy-section-3" tabindex="-1" class="technology-stack">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Technology Architecture</h2>
          <p>
            Utilizing the most advanced AI technology stack to ensure service
            professionalism and reliability
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-category">
            <h3> Deep Learning Frameworks</h3>
            <div class="tech-items">
              <span class="tech-tag">TensorFlow</span>
              <span class="tech-tag">PyTorch</span>
              <span class="tech-tag">Keras</span>
              <span class="tech-tag">ONNX</span>
              <span class="tech-tag">TensorRT</span>
              <span class="tech-tag">OpenVINO</span>
            </div>
          </div>

          <div class="tech-category">
            <h3> Computer Vision</h3>
            <div class="tech-items">
              <span class="tech-tag">OpenCV</span>
              <span class="tech-tag">DICOM</span>
              <span class="tech-tag">ITK</span>
              <span class="tech-tag">SimpleITK</span>
              <span class="tech-tag">MONAI</span>
              <span class="tech-tag">Pillow</span>
            </div>
          </div>

          <div class="tech-category">
            <h3> Natural Language Processing</h3>
            <div class="tech-items">
              <span class="tech-tag">BERT</span>
              <span class="tech-tag">GPT</span>
              <span class="tech-tag">Transformer</span>
              <span class="tech-tag">spaCy</span>
              <span class="tech-tag">Hugging Face</span>
              <span class="tech-tag">NLTK</span>
            </div>
          </div>

          <div class="tech-category">
            <h3> Cloud Computing Platforms</h3>
            <div class="tech-items">
              <span class="tech-tag">AWS</span>
              <span class="tech-tag">Azure</span>
              <span class="tech-tag">Google Cloud</span>
              <span class="tech-tag">Kubernetes</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">MLflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Cases -->
    <section id="legacy-section-4" tabindex="-1" class="success-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Success Stories</h2>
          <p>
            Real-world applications and significant performance improvements
          </p>
        </div>
        <div class="cases-grid">
          <div class="case-item">
            <div class="case-header">

              <div class="case-info">
                <h3>Major Tertiary Hospital Radiology Department</h3>
                <span class="case-type">Lung Cancer Screening AI System</span>
              </div>
            </div>
            <div class="case-content">
              <p>
                After deploying our lung cancer screening AI system, the
                hospital's radiology department achieved a 300% improvement in
                diagnostic efficiency and reduced the missed diagnosis rate to
                below 0.5%, providing valuable treatment time for early-stage
                lung cancer patients.
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">300%</span>
                  <span class="metric-desc">Efficiency Improvement</span>
                </div>
                <div class="metric">
                  <span class="metric-value">0.5%</span>
                  <span class="metric-desc">Missed Diagnosis Rate</span>
                </div>
                <div class="metric">
                  <span class="metric-value">95.8%</span>
                  <span class="metric-desc">Accuracy Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-item">
            <div class="case-header">

              <div class="case-info">
                <h3>Renowned Pathology Diagnostic Center</h3>
                <span class="case-type">AI-Assisted Pathology Diagnosis</span>
              </div>
            </div>
            <div class="case-content">
              <p>
                Through the AI pathology diagnosis system, the center's
                pathologists have significantly improved work efficiency,
                achieving 98% diagnostic accuracy for complex cases and
                substantially reducing misdiagnosis risks.
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">98%</span>
                  <span class="metric-desc">Diagnostic Accuracy</span>
                </div>
                <div class="metric">
                  <span class="metric-value">60%</span>
                  <span class="metric-desc">Time Saved</span>
                </div>
                <div class="metric">
                  <span class="metric-value">1000+</span>
                  <span class="metric-desc">Daily Processing</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-item">
            <div class="case-header">

              <div class="case-info">
                <h3>Neurosurgery Specialty Hospital</h3>
                <span class="case-type">Brain Tumor Segmentation System</span>
              </div>
            </div>
            <div class="case-content">
              <p>
                The AI brain tumor automatic segmentation system helps doctors
                precisely locate tumor boundaries, reducing surgical planning
                time by 70% and improving surgical success rate to 99.2%.
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">70%</span>
                  <span class="metric-desc">Planning Time Reduction</span>
                </div>
                <div class="metric">
                  <span class="metric-value">99.2%</span>
                  <span class="metric-desc">Surgical Success Rate</span>
                </div>
                <div class="metric">
                  <span class="metric-value">0.1mm</span>
                  <span class="metric-desc">Segmentation Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research & Development -->
    <section id="legacy-section-5" tabindex="-1" class="research-development">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Research & Development Capabilities</h2>
          <p>Continuous technological innovation and academic contributions</p>
        </div>
        <div class="rd-content">
          <div class="rd-stats">
            <div class="rd-stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Published Papers</span>
            </div>
            <div class="rd-stat">
              <span class="stat-number">20+</span>
              <span class="stat-label">Patent Technologies</span>
            </div>
            <div class="rd-stat">
              <span class="stat-number">15+</span>
              <span class="stat-label">Core Algorithms</span>
            </div>
            <div class="rd-stat">
              <span class="stat-number">100+</span>
              <span class="stat-label">Datasets</span>
            </div>
          </div>
          <div class="rd-highlights">
            <div class="highlight-item">
              <h3> Top International Conference Papers</h3>
              <p>
                Published 30+ papers at top medical imaging conferences
                including MICCAI, IPMI, ISBI
              </p>
            </div>
            <div class="highlight-item">
              <h3> Core Technology Patents</h3>
              <p>
                Hold 20+ invention patents related to medical imaging AI with
                strong technical barriers
              </p>
            </div>
            <div class="highlight-item">
              <h3> Industry-Academia Collaboration</h3>
              <p>
                Established deep partnerships with top research institutions
                including Tsinghua, Peking University, and CAS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="legacy-section-6" tabindex="-1" class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="service-section-title">Expert Team</h2>
          <p>Gathering top AI medical experts from around the world</p>
        </div>
        <div class="team-grid">
          <div class="team-member">

            <h3>Prof. Li</h3>
            <p class="member-title">Chief AI Medical Scientist</p>
            <p class="member-desc">
              PhD from Tsinghua University, 15 years of research experience in
              medical imaging AI, published 50+ SCI papers
            </p>
          </div>
          <div class="team-member">

            <h3>Dr. Wang</h3>
            <p class="member-title">Deep Learning Technical Director</p>
            <p class="member-desc">
              Postdoc from Stanford University, specializing in medical image
              deep learning algorithm development with multiple core patents
            </p>
          </div>
          <div class="team-member">

            <h3>Director Zhang</h3>
            <p class="member-title">Clinical Application Lead</p>
            <p class="member-desc">
              Chief physician at Peking Union Medical College Hospital, 30 years
              of clinical experience, responsible for AI system clinical
              validation and application promotion
            </p>
          </div>
          <div class="team-member">

            <h3>Dr. Chen</h3>
            <p class="member-title">Product Technology Manager</p>
            <p class="member-desc">
              PhD from Chinese Academy of Sciences, responsible for technical
              architecture design and engineering implementation of AI medical
              products
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->


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


const directorySections = [{"id": "legacy-overview", "label": "Overview"}, {"id": "legacy-section-1", "label": "AI Medical Multimodal Solutions"}, {"id": "legacy-section-2", "label": "Core Technology Services"}, {"id": "legacy-section-3", "label": "Technology Architecture"}, {"id": "legacy-section-4", "label": "Success Stories"}, {"id": "legacy-section-5", "label": "Research & Development Capabilities"}, {"id": "legacy-section-6", "label": "Expert Team"}];
</script>
