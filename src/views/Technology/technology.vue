<template>
  <div class="background-page">
    <!-- Banner -->
    <div class="background-banner">
      <div class="banner-bg">
        <img :src="bannerImg" alt="banner" />
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Exponential Ultra-Multiplex</h1>
          <h2 class="banner-subtitle-main">Digital PCR Technology</h2>
          <hr class="banner-divider" />
          <p class="banner-subtitle">
            Revolutionizing Genetic Detection with 2<sup>N</sup>-1 Exponential
            Multiplexing
          </p>
        </div>
      </div>
    </div>

    <!-- Technology Content -->
    <div class="technology-content">
      <!-- Ultra-Multiplex Technology Section -->
      <div class="technology-section">
        <div class="section-title">
          <h2>Exponential Ultra-Multiplex Digital PCR Technology</h2>
          <div class="title-divider"></div>
        </div>
        <div class="technology-intro">
          <div class="tech-hero">
            <h3 class="tech-hero-title">
              Breaking the Boundaries of Genetic Detection
            </h3>
            <p class="tech-hero-subtitle">
              Our proprietary fluorescence encoding technology transcends
              conventional multiplex limitations, enabling exponential target
              detection capacity through innovative single-target
              multi-fluorescence labeling.
            </p>
          </div>

          <div class="tech-innovation-grid">
            <div class="innovation-item">
              <div class="innovation-number">2<sup>N</sup>-1</div>
              <div class="innovation-label">Detection Formula</div>
              <div class="innovation-desc">
                Exponential growth in target capacity
              </div>
            </div>
            <div class="innovation-item">
              <div class="innovation-number">30</div>
              <div class="innovation-label">Max Targets</div>
              <div class="innovation-desc">
                Single tube detection capability
              </div>
            </div>
            <div class="innovation-item">
              <div class="innovation-number">5</div>
              <div class="innovation-label">Channels</div>
              <div class="innovation-desc">SCI Digital T500 platform</div>
            </div>
          </div>
        </div>

        <!-- Technology Highlight 1: Revolutionary Fluorescence Encoding -->
        <div class="tech-highlight-section">
          <div class="highlight-card primary-card">
            <div class="card-header">
              <div class="card-icon">🔬</div>
              <h4>Single Target by Multiple Fluorescent Encoding</h4>
            </div>
            <div class="card-content">
              <div class="tech-description">
                <p>
                  In conventional multiplex PCR, each fluorescent channel can
                  only label one target, and the number of targets detectable in
                  a single reaction is limited by the number of fluorescent
                  channels N.
                </p>
                <p>
                  However, Vivolution Biosciences' Exponential Ultra-Multiplex
                  Technology utilizes multiple fluorescence to simultaneously
                  label a single target, greatly expanding the utility of
                  fluorescent channels, leading to the explosive growth in the
                  number of detectable targets that reaches
                  <strong>2<sup>N</sup>-1</strong>.
                </p>
                <p>
                  This groundbreaking approach breaks through the fundamental
                  limitations of traditional PCR by introducing a revolutionary
                  fluorescence encoding system. By labeling a single target with
                  multiple fluorescent channels, we transform the linear
                  relationship between channels and targets into an exponential
                  one, opening up unprecedented possibilities in genetic
                  detection.
                </p>
              </div>
              <div class="tech-comparison">
                <div class="comparison-item conventional">
                  <h5>Conventional Multiplex PCR</h5>
                  <p>1 Channel = 1 Target</p>
                  <p>Limited by channel count (N)</p>
                  <p>Linear growth in detection capacity</p>
                </div>
                <div class="comparison-arrow">→</div>
                <div class="comparison-item revolutionary">
                  <h5>Ultra-Multiplex Technology</h5>
                  <p>Multiple Channels = 1 Target</p>
                  <p>Exponential capacity: <strong>2<sup>N</sup>-1</strong></p>
                  <p>Revolutionary encoding breakthrough</p>
                </div>
              </div>
              <div class="tech-image-container">
                <img
                  :src="multiplexDiagram"
                  alt="Multiplex Technology Diagram"
                  class="tech-image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Highlight 2: Exponential Detection Capacity -->
        <div class="tech-highlight-section">
          <div class="highlight-card secondary-card">
            <div class="card-header">
              <div class="card-icon">📊</div>
              <h4>Multiple Channels, Up to 30 Targets</h4>
            </div>
            <div class="card-content">
              <div class="tech-description">
                <p>
                  Using 4 fluorescent channels, a maximum of 15 targets can be
                  detected. Moreover, with Vivolution Biosciences' flagship
                  <strong>SCI Digital T500</strong> equipped with 5 fluorescent
                  channels, up to approximately 30 targets can be detected in a
                  single assay. This achieves a high target labeling capacity,
                  providing researchers with a broader research perspective.
                </p>
                <p>
                  The exponential relationship between channels and detectable
                  targets represents a paradigm shift in molecular diagnostics.
                  Where traditional systems scale linearly, our Ultra-Multiplex
                  technology scales exponentially, dramatically expanding the
                  analytical capabilities within a single reaction.
                </p>
                <p>
                  This breakthrough enables comprehensive pathogen panels,
                  complex genetic screening, and multi-target biomarker analysis
                  that would previously require multiple separate assays,
                  significantly reducing time, cost, and sample requirements
                  while increasing throughput and efficiency.
                </p>
              </div>
              <div class="capacity-showcase">
                <div class="capacity-item">
                  <div class="capacity-number">4</div>
                  <div class="capacity-label">Channels</div>
                  <div class="capacity-result">15 Targets</div>
                  <div class="capacity-formula">2<sup>4</sup>-1 = 15</div>
                </div>
                <div class="capacity-arrow">→</div>
                <div class="capacity-item flagship">
                  <div class="capacity-number">5</div>
                  <div class="capacity-label">Channels</div>
                  <div class="capacity-result">30 Targets</div>
                  <div class="capacity-platform">SCI Digital T500</div>
                  <div class="capacity-formula">2<sup>5</sup>-1 = 31</div>
                </div>
              </div>
              <div class="tech-image-container">
                <img
                  :src="channelsTargets"
                  alt="Channels and Targets"
                  class="tech-image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Highlight 3: Superior Performance Matrix -->
        <div class="tech-highlight-section">
          <div class="highlight-card tertiary-card">
            <div class="card-header">
              <div class="card-icon">⚡</div>
              <h4>Technical Advantages</h4>
            </div>
            <div class="card-content">
              <div class="tech-description">
                <p>
                  Compared to previous methods such as multi-color melting curve
                  qPCR and conventional multiplex qPCR, our approach excels in
                  all aspects including target quantity, sensitivity, and
                  competitive inhibition suppression.
                </p>
                <p>
                  Leveraging Vivolution Biosciences' mature digital PCR
                  platform, we achieve:
                  <strong
                    >Ultra-Multiplexity + high sensitivity + high precision +
                    absolute quantification</strong
                  >, further expanding the boundaries of scientific research and
                  molecular diagnostics.
                </p>
                <p>
                  Our technology represents a quantum leap in molecular
                  detection capabilities, combining the precision of digital PCR
                  with the exponential multiplexing power of our proprietary
                  fluorescence encoding system. This synergy delivers
                  unparalleled performance across all critical metrics that
                  matter in modern molecular diagnostics.
                </p>
              </div>
              <div class="performance-grid">
                <div class="performance-item">
                  <div class="performance-icon">🎯</div>
                  <div class="performance-label">Ultra-Multiplexity</div>
                  <div class="performance-desc">
                    Exponential target detection capacity
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-icon">🔍</div>
                  <div class="performance-label">High Sensitivity</div>
                  <div class="performance-desc">
                    Single molecule detection capability
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-icon">📏</div>
                  <div class="performance-label">High Precision</div>
                  <div class="performance-desc">
                    Minimal cross-reactivity and interference
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-icon">📊</div>
                  <div class="performance-label">Absolute Quantification</div>
                  <div class="performance-desc">
                    Direct counting without standard curves
                  </div>
                </div>
              </div>
              <div class="tech-image-container">
                <img
                  :src="technicalComparison"
                  alt="Technical Comparison"
                  class="tech-image"
                />
              </div>
              <div class="advantage-summary">
                <p>
                  <strong>Revolutionary Performance:</strong> Transcending
                  conventional multiplex qPCR and melting curve analysis
                  limitations through innovative digital PCR technology combined
                  with exponential multiplexing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Fields Section -->
      <div class="application-section">
        <div class="section-title">
          <h2>Application Fields</h2>
          <div class="title-divider"></div>
        </div>
        <div class="application-grid">
          <div
            v-for="(field, index) in applicationFields"
            :key="index"
            class="application-card"
          >
            <div class="application-icon">{{ field.icon }}</div>
            <h4>{{ field.title }}</h4>
            <p>{{ field.desc }}</p>
            <div v-if="field.products" class="product-links">
              <span
                v-for="(product, idx) in field.products"
                :key="idx"
                class="product-link"
              >
                {{ product }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Collaboration Section -->
      <div class="collaboration-section">
        <div class="section-title">
          <h2>Technology Collaboration and Research</h2>
          <div class="title-divider"></div>
        </div>
        <div class="collaboration-content">
          <p>
            The application of Ultra-Multiplex technology is boundless, and
            Vivolution Biosciences has already developed or is in the process of
            developing multiple assay kits covering various fields.
            Additionally, we welcome more technical collaborations and joint
            research efforts to collectively advance in scientific research and
            clinical diagnostics, shaping the future together.
          </p>
          <div class="collaboration-highlight">
            <h3>
              Choose Vivolution Biosciences for cutting-edge technologies.
            </h3>
            <p class="highlight-text">
              We are leading life science and molecular diagnostics into digital
              era!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

// 图片import
import bannerImg from "@/assets/Background/Banner001847-ban_wap.jpg";
import multiplexDiagram from "@/assets/technology/multiplex-diagram.png";
import channelsTargets from "@/assets/technology/channels-targets.png";
import technicalComparison from "@/assets/technology/technical-comparison.png";
// Application Fields Data
const applicationFields = [
  {
    icon: "🫁",
    title: "Respiratory Pathogen Detection",
    desc: "Rapidly understand different pathogens in one test. Vivolution Biosciences has developed comprehensive detection kits to assist in rapid response to disease control.",
    products: [
      "23-plex Respiratory Pathogen Detection Kit",
      "12-plex Respiratory Pathogen Detection Kit",
    ],
  },
  {
    icon: "🩸",
    title: "Blood Infection Detection",
    desc: "Conduct highly sensitive detection of infection pathogens in bloodstream that may cause Sepsis, to quickly identify pathogens and seize valuable treatment opportunities.",
    products: [],
  },
  {
    icon: "🧬",
    title: "Tumor Gene Detection",
    desc: "Efficiently analyze the expression of tumor genes to understand the occurrence, development, and drug resistance mechanisms of tumors.",
    products: [],
  },
  {
    icon: "🔬",
    title: "Gene Mutation Screening",
    desc: "Simultaneously detect multiple gene mutations, accelerating the screening process.",
    products: [],
  },
  {
    icon: "🌾",
    title: "Others",
    desc: "Breeding, livestock and poultry disease tests, food safety, and more applications across various fields.",
    products: [],
  },
];
</script>

<style scoped>
.background-page {
  width: 100%;
  background: #fff;
  min-height: 100vh;
  /* padding-bottom: 48px; */
}
.background-banner {
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: brightness(0.7);
}

.banner-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  color: #fff;
}

.banner-text {
  max-width: 800px;
  margin-left: 10%;
  margin-top: 0;
}

.banner-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 8px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff;
  letter-spacing: 1px;
}

.banner-subtitle-main {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #00bc97;
  letter-spacing: 0.5px;
}

.banner-divider {
  width: 80%;
  height: 3px;
  margin: 1.5rem 0;
  background: none;
  border: none;
  border-radius: 1px;
  position: relative;
}

.banner-divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #00bc97 0%,
    #4e3fa5 50%,
    transparent 8px,
    transparent 12px
  );
  background-size: 12px 3px;
}

.banner-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.background-about {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 56px;
  max-width: 1200px;
  margin: 0 auto 56px auto;
  padding: 0 24px;
  min-height: 320px;
}
.about-img img {
  width: 340px;
  height: 260px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}
.about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 22px;
  color: #2b7bbf;
  letter-spacing: 1px;
}
.about-desc p {
  font-size: 17px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.8;
}
.about-links {
  display: flex;
  gap: 28px;
  margin-top: 24px;
}
.about-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(90deg, #00bc97 0%, #2b7bbf 100%);
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(59, 123, 191, 0.1);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.about-btn img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.about-btn:hover {
  background: linear-gradient(90deg, #2b7bbf 0%, #00bc97 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(59, 123, 191, 0.16);
}
.background-piclist {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.piclist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}
.piclist-item {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(59, 123, 191, 0.08);
  padding: 36px 24px 28px 24px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.piclist-item:hover {
  box-shadow: 0 8px 32px rgba(59, 123, 191, 0.16);
  transform: translateY(-4px) scale(1.03);
}
.piclist-img-wrap {
  width: 200px;
  height: 120px;
  margin: 0 auto 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafd;
  border-radius: 8px;
  overflow: hidden;
}
.piclist-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.piclist-item h3 {
  font-size: 21px;
  color: #2b7bbf;
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 1.4;
}
.piclist-item p {
  font-size: 15.5px;
  color: #444;
  line-height: 1.7;
}
@media (max-width: 900px) {
  .background-about {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    min-height: unset;
  }
  .about-img img {
    width: 100%;
    max-width: 340px;
    height: 200px;
  }
  .about-content {
    width: 100%;
    padding: 0;
  }
}
@media (max-width: 900px) {
  .banner-title {
    font-size: 2.8rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .background-banner {
    height: 350px;
    margin-bottom: 24px;
  }

  .banner-text {
    margin-left: 5%;
  }

  .banner-title {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  .banner-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .banner-divider {
    width: 70%;
  }


}

@media (max-width: 600px) {
  .background-about {
    padding: 0 8px;
    margin-bottom: 32px;
  }
  .about-title {
    font-size: 22px;
    margin-bottom: 14px;
  }
  .about-desc p {
    font-size: 15px;
  }
  .about-links {
    gap: 12px;
    margin-top: 14px;
  }
  .about-btn {
    font-size: 14px;
    padding: 7px 16px;
  }
  .piclist-grid {
    gap: 18px;
  }
  .piclist-item {
    padding: 18px 8px 14px 8px;
  }
  .piclist-img-wrap {
    width: 100px;
    height: 60px;
    margin-bottom: 10px;
  }
  .piclist-item h3 {
    font-size: 16px;
    margin-bottom: 7px;
  }
  .piclist-item p {
    font-size: 13px;
  }
}
/* Technology Content Styles */
.technology-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Tech Overview Section */
.tech-overview-section {
  margin-bottom: 60px;
  padding: 40px 0;
}

.overview-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.overview-stats .stat-item {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid #e6eaf0;
  min-width: 150px;
  transition: all 0.3s ease;
}

.overview-stats .stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #00bc97;
}

.overview-stats .stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #00bc97;
  margin-bottom: 8px;
  display: block;
}

.overview-stats .stat-label {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

/* Section Styles */
.section-title {
  text-align: center;
  margin-bottom: 40px;
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
  margin: 0 auto;
  border-radius: 2px;
}

/* Company Introduction Section */
.company-intro-section {
  margin-bottom: 80px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #f8fafe 0%, #f0f4f8 100%);
  border-radius: 20px;
}

.company-intro-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.intro-text {
  flex: 2;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.highlight-text {
  font-size: 1.3rem;
  color: #00bc97;
  font-weight: 600;
}

.company-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00bc97;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}
.background-about-rows {
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto 56px auto;
  padding: 0 24px;
}
.about-row {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.about-row-title {
  min-width: 160px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b7bbf;
  margin-top: 6px;
}
.about-row-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.team-list-row {
  flex-direction: row;
  gap: 32px;
}
.team-member-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f7fafd;
  border-radius: 10px;
  padding: 14px 22px;
  box-shadow: 0 2px 8px rgba(59, 123, 191, 0.06);
  min-width: 220px;
  max-width: 320px;
}
.team-member-photo img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
  border: 2px solid #e0e6f0;
}
.team-member-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.team-member-name {
  font-weight: 600;
  color: #2b7bbf;
  font-size: 1.08rem;
}
.team-member-role {
  color: #00bc97;
  font-size: 0.98rem;
}
.team-member-desc {
  color: #444;
  font-size: 0.97rem;
  line-height: 1.5;
}
.background-about-rows.with-img {
  flex-direction: row;
  align-items: stretch;
  gap: 40px;
}
.about-img-col {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  max-width: 360px;
}
.about-img-col img {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}
.about-rows-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
}
.tech-content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 48px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(59, 123, 191, 0.06);
}
.tech-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2b7bbf;
  margin-bottom: 28px;
  text-align: left;
}
.tech-paragraphs p {
  font-size: 1.08rem;
  color: #333;
  margin-bottom: 14px;
  line-height: 1.9;
}
.tech-solutions {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  margin-top: 32px;
}
.solution-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  gap: 12px;
}
.solution-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 50%;
  background: #f7fafd;
  box-shadow: 0 2px 8px rgba(59, 123, 191, 0.08);
}
.solution-title {
  font-size: 1.08rem;
  color: #2b7bbf;
  font-weight: 600;
  text-align: center;
}
.tech-title-center {
  text-align: center;
  font-size: 2.6rem;
  letter-spacing: 2px;
}
.tech-img-center {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 32px 0 32px 0;
}
.tech-img-center img {
  max-width: 640px;
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(59, 123, 191, 0.13);
}
.solution-item-0 {
  background: linear-gradient(90deg, #e0f7fa 0%, #b2ebf2 100%);
  color: #00796b;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 188, 212, 0.08);
}
.solution-item-1 {
  background: linear-gradient(90deg, #fffde7 0%, #fff9c4 100%);
  color: #fbc02d;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(251, 192, 45, 0.08);
}
.solution-item-2 {
  background: linear-gradient(90deg, #fce4ec 0%, #f8bbd0 100%);
  color: #c2185b;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(194, 24, 91, 0.08);
}
.solution-item-3 {
  background: linear-gradient(90deg, #e8f5e9 0%, #a5d6a7 100%);
  color: #388e3c;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(56, 142, 60, 0.08);
}
.solution-item-4 {
  background: linear-gradient(90deg, #ede7f6 0%, #b39ddb 100%);
  color: #512da8;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(81, 45, 168, 0.08);
}
.solution-item-5 {
  background: linear-gradient(90deg, #fff3e0 0%, #ffcc80 100%);
  color: #f57c00;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(245, 124, 0, 0.08);
}
.solution-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 1.12rem;
  font-weight: 600;
  padding: 28px 0 22px 0;
  transition: box-shadow 0.2s;
}
.solution-title {
  text-align: center;
  width: 100%;
}
.tech-advantages-section {
  margin-top: 56px;
}
.tech-advantages-title {
  font-size: 2rem;
  color: #2b7bbf;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
}
.tech-advantages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  justify-content: center;
}
.tech-advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #f7fafd;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(59, 123, 191, 0.08);
  padding: 22px 32px;
  min-width: 320px;
  max-width: 420px;
}
.advantage-icon img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e0e6f0;
}
.advantage-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.advantage-title {
  font-weight: 600;
  color: #2b7bbf;
  font-size: 1.15rem;
}
.advantage-desc {
  color: #444;
  font-size: 1.01rem;
  line-height: 1.7;
}
.tech-advantages-divider {
  border: none;
  border-top: 2px solid #e0e6f0;
  margin: 56px 0 40px 0;
  width: 100%;
}
/* Technology Section */
.technology-section {
  margin-bottom: 80px;
}

.technology-intro {
  text-align: center;
  margin-bottom: 60px;
}

.tech-hero {
  margin-bottom: 50px;
}

.tech-hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.3;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.tech-innovation-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.innovation-item {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafe 0%, #fff 100%);
  border-radius: 15px;
  border: 1px solid #e6eaf0;
  min-width: 150px;
  transition: all 0.3s ease;
}

.innovation-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #00bc97;
}

.innovation-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #00bc97;
  margin-bottom: 8px;
  display: block;
}

.innovation-label {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.innovation-desc {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* Individual Tech Highlight Sections */
.tech-highlight-section {
  margin-bottom: 60px;
}

.tech-highlight-section .highlight-card {
  max-width: 1200px;
  margin: 0 auto;
}

.highlight-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.highlight-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.primary-card {
  border-left: 5px solid #00bc97;
}

.secondary-card {
  border-left: 5px solid #4e3fa5;
}

.tertiary-card {
  border-left: 5px solid #ff6b6b;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 30px 30px 20px 30px;
  background: linear-gradient(135deg, #f8fafe 0%, #fff 100%);
}

.card-icon {
  font-size: 2rem;
  padding: 10px;
  background: rgba(0, 188, 151, 0.1);
  border-radius: 12px;
}

.card-header h4 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.card-content {
  padding: 0 30px 30px 30px;
}

.card-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

/* Tech Description Styles */
.tech-description {
  margin-bottom: 30px;
}

.tech-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
}

.tech-description p:last-child {
  margin-bottom: 0;
}

.tech-image-container {
  text-align: center;
  margin: 20px 0;
}

.tech-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tech-image:hover {
  transform: scale(1.02);
}

/* Tech Comparison Styles */
.tech-comparison {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 12px;
}

.comparison-item {
  flex: 1;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
}

.conventional {
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.revolutionary {
  background: rgba(0, 188, 151, 0.1);
  border: 1px solid rgba(0, 188, 151, 0.3);
}

.comparison-item h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.comparison-item p {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #666;
}

.comparison-arrow {
  font-size: 1.5rem;
  color: #00bc97;
  font-weight: bold;
}

/* Capacity Showcase Styles */
.capacity-showcase {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f0ff 0%, #f0e6ff 100%);
  border-radius: 12px;
}

.capacity-item {
  flex: 1;
  text-align: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(78, 63, 165, 0.2);
}

.flagship {
  border: 2px solid #4e3fa5;
  background: rgba(78, 63, 165, 0.05);
}

.capacity-number {
  font-size: 2rem;
  font-weight: 800;
  color: #4e3fa5;
  margin-bottom: 5px;
}

.capacity-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
}

.capacity-result {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.capacity-platform {
  font-size: 0.8rem;
  color: #4e3fa5;
  font-weight: 500;
}

.capacity-formula {
  font-size: 0.75rem;
  color: #888;
  font-style: italic;
  margin-top: 5px;
}

.capacity-arrow {
  font-size: 1.5rem;
  color: #4e3fa5;
  font-weight: bold;
}

/* Performance Grid Styles */
.performance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #fff8f0 0%, #ffe6e6 100%);
  border-radius: 12px;
}

.performance-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.2);
}

.performance-icon {
  font-size: 1.5rem;
}

.performance-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

.performance-desc {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.3;
}

.advantage-summary {
  text-align: center;
  padding: 15px;
  background: rgba(255, 107, 107, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.2);
}

.advantage-summary p {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
  text-align: center;
}

/* Application Section */
.application-section {
  margin-bottom: 80px;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.application-card {
  background: linear-gradient(135deg, #f8fafe 0%, #fff 100%);
  padding: 20px 15px;
  border-radius: 12px;
  border: 1px solid #e6eaf0;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.application-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #00bc97;
}

.application-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: block;
}

.application-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.3;
}

.application-card p {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 12px;
  flex-grow: 1;
}

.product-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-link {
  background: #00bc97;
  color: white;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Culture Section */
.culture-section {
  margin-bottom: 80px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #f0f4f8 0%, #f8fafe 100%);
  border-radius: 20px;
}

.culture-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.value-number {
  font-size: 2rem;
  font-weight: 700;
  color: #00bc97;
  min-width: 50px;
}

.value-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.value-content p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 900px) {
  .overview-stats {
    gap: 30px;
  }

  .overview-stats .stat-item {
    min-width: 120px;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .tech-comparison,
  .capacity-showcase {
    flex-direction: column;
    gap: 15px;
  }

  .comparison-arrow,
  .capacity-arrow {
    transform: rotate(90deg);
    font-size: 1.2rem;
  }

  .performance-grid {
    grid-template-columns: 1fr;
  }

  .application-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 1200px) {
  .application-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .application-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .technology-content {
    padding: 0 15px;
  }

  .overview-stats {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .overview-stats .stat-item {
    min-width: 200px;
  }

  .application-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .application-card {
    min-height: auto;
    padding: 15px;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .tech-hero-title {
    font-size: 2rem;
  }

  .tech-innovation-grid {
    flex-direction: column;
    gap: 20px;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .card-content {
    padding: 0 20px 30px 20px;
  }
}

/* Collaboration Section */
.collaboration-section {
  margin-bottom: 80px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 20px;
}

.collaboration-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.collaboration-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.collaboration-highlight {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.collaboration-highlight h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.collaboration-highlight .highlight-text {
  font-size: 1.2rem;
  color: #00bc97;
  font-weight: 600;
}
</style>