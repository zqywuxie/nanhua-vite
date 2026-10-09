<template>
  <div class="background-page">
    <!-- Banner -->
    <div class="background-banner site-page-header site-page-header--technology">
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
              <h2>Single Target by Multiple Fluorescent Encoding</h2>
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
                <div class="comparison-item revolutionary">
                  <h5>Ultra-Multiplex Technology</h5>
                  <p>Multiple Channels = 1 Target</p>
                  <p>Exponential capacity: <strong>2<sup>N</sup>-1</strong></p>
                  <p>Revolutionary encoding breakthrough</p>
                </div>
              </div>
              <div class="tech-image-container">
                <button type="button" class="tech-image-button" aria-label="Enlarge Multiplex Technology Diagram" @click="previewImg = multiplexDiagram">
                <img :src="multiplexDiagram" alt="Multiplex Technology Diagram" class="tech-image" loading="lazy" />
              </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Highlight 2: Exponential Detection Capacity -->
        <div class="tech-highlight-section">
          <div class="highlight-card secondary-card">
            <div class="card-header">
              <h2>Multiple Channels, Up to 30 Targets</h2>
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
                <div class="capacity-item flagship">
                  <div class="capacity-number">5</div>
                  <div class="capacity-label">Channels</div>
                  <div class="capacity-result">30 Targets</div>
                  <div class="capacity-platform">SCI Digital T500</div>
                  <div class="capacity-formula">2<sup>5</sup>-1 = 31</div>
                </div>
              </div>
              <div class="tech-image-container">
                <button type="button" class="tech-image-button" aria-label="Enlarge Channels and Targets" @click="previewImg = channelsTargets">
                <img :src="channelsTargets" alt="Channels and Targets" class="tech-image" loading="lazy" />
              </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Highlight 3: Superior Performance Matrix -->
        <div class="tech-highlight-section">
          <div class="highlight-card tertiary-card">
            <div class="card-header">
              <h2>Technical Advantages</h2>
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
                  <div class="performance-label">Ultra-Multiplexity</div>
                  <div class="performance-desc">
                    Exponential target detection capacity
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-label">High Sensitivity</div>
                  <div class="performance-desc">
                    Single molecule detection capability
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-label">High Precision</div>
                  <div class="performance-desc">
                    Minimal cross-reactivity and interference
                  </div>
                </div>
                <div class="performance-item">
                  <div class="performance-label">Absolute Quantification</div>
                  <div class="performance-desc">
                    Direct counting without standard curves
                  </div>
                </div>
              </div>
              <div class="tech-image-container">
                <button type="button" class="tech-image-button" aria-label="Enlarge Technical Comparison" @click="previewImg = technicalComparison">
                <img :src="technicalComparison" alt="Technical Comparison" class="tech-image" loading="lazy" />
              </button>
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
    <InstrumentImagePreview v-model="previewImg" title="Digital PCR Technology" />
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
const previewImg = ref(null);
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

// 图片import
import bannerImg from "@/assets/Background/Banner001847-ban_wap.jpg";
import multiplexDiagram from "@/assets/technology/multiplex-diagram.png";
import channelsTargets from "@/assets/technology/channels-targets.png";
import technicalComparison from "@/assets/technology/technical-comparison.png";
// Application Fields Data
const applicationFields = [
  {
    title: "Respiratory Pathogen Detection",
    desc: "Rapidly understand different pathogens in one test. Vivolution Biosciences has developed comprehensive detection kits to assist in rapid response to disease control.",
    products: [
      "23-plex Respiratory Pathogen Detection Kit",
      "12-plex Respiratory Pathogen Detection Kit",
    ],
  },
  {
    title: "Blood Infection Detection",
    desc: "Conduct highly sensitive detection of infection pathogens in bloodstream that may cause Sepsis, to quickly identify pathogens and seize valuable treatment opportunities.",
    products: [],
  },
  {
    title: "Tumor Gene Detection",
    desc: "Efficiently analyze the expression of tumor genes to understand the occurrence, development, and drug resistance mechanisms of tumors.",
    products: [],
  },
  {
    title: "Gene Mutation Screening",
    desc: "Simultaneously detect multiple gene mutations, accelerating the screening process.",
    products: [],
  },
  {
    title: "Others",
    desc: "Breeding, livestock and poultry disease tests, food safety, and more applications across various fields.",
    products: [],
  },
];
</script>

<style scoped>
.background-page { width: 100%; background: #fff; color: #4c5563; font-size: 16px; line-height: 1.75; }
.background-banner { position: relative; min-height: 240px; overflow: hidden; }
.banner-bg { position: absolute; inset: 0; }
.banner-bg img { display: block; width: 100%; height: 100%; object-fit: cover; }
.banner-bg::after { content: ''; position: absolute; inset: 0; background: #17234b8c; }
.banner-content { position: relative; width: calc(100% - 48px); max-width: 1120px; margin: auto; padding: 36px 0; }
.banner-text { max-width: 760px; }
.banner-title { margin: 0; font-size: 36px; font-weight: 600; line-height: 1.25; color: #fff; }
.banner-subtitle-main { margin: 8px 0 0; color: #fff; font-size: 28px; font-weight: 500; line-height: 1.3; }
.banner-divider { width: 180px; height: 2px; margin: 16px 0; border: 0; background: repeating-linear-gradient(90deg,#00bc97 0 4px,transparent 4px 12px); }
.banner-subtitle { margin: 0; font-size: 16px; line-height: 1.6; color: #fff; }
.technology-content { width: calc(100% - 48px); max-width: 1120px; margin: 0 auto; padding: 48px 0 64px; }
.section-title { margin: 0 0 28px; }
.section-title h2 { border-left: 5px solid #409eff; padding-left: 16px; margin: 0; font-size: 26px; font-weight: 600; line-height: 1.4; color: #243b7b; }
.title-divider { display: none; }
.technology-intro { display: grid; grid-template-columns: minmax(0,1.15fr) minmax(0,1fr); gap: 48px; align-items: start; margin-bottom: 48px; }
.tech-hero-title { font-size: 21px; font-weight: 600; line-height: 1.5; color: #243b7b; margin: 0 0 14px; }
.tech-hero-subtitle { margin: 0; font-size: 16px; line-height: 1.8; }
.tech-innovation-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; padding: 24px; border: 1px solid #e2e7ed; border-radius: 10px; background: #f6f8fa; }
.innovation-item { min-width: 0; }
.innovation-number { font-size: 30px; font-weight: 600; line-height: 1.25; color: #243b7b; margin-bottom: 12px; white-space: nowrap; }
.innovation-number sup { font-size: 16px; }
.innovation-label { font-size: 15px; font-weight: 600; color: #243b7b; line-height: 1.4; margin-bottom: 8px; }
.innovation-desc { font-size: 14px; line-height: 1.6; color: #697586; }
.tech-highlight-section { padding: 40px 0; border-top: 1px solid #e2e7ed; }
.highlight-card { background: #fff; border: 0; box-shadow: none; }
.card-header { margin-bottom: 24px; }
.card-header h2 { margin: 0; color: #243b7b; font-size: 24px; font-weight: 600; line-height: 1.4; }
.card-content { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,1fr); grid-template-areas: 'description figure' 'summary figure'; gap: 24px 40px; align-items: start; }
.card-content > * { min-width: 0; }
.tech-description { grid-area: description; }
.tech-description p { font-size: 16px; line-height: 1.85; margin: 0 0 16px; }
.tech-description p:last-child { margin-bottom: 0; }
strong { color: #243b7b; font-weight: 600; }
.tech-image-container { grid-area: figure; position: sticky; top: 24px; }
.tech-image-button { display: block; width: 100%; min-width: 0; padding: 12px; border: 1px solid #e2e7ed; border-radius: 10px; background: #fff; cursor: zoom-in; }
.tech-image { display: block; width: auto; max-width: 100%; max-height: 420px; height: auto; margin: auto; object-fit: contain; }
.tech-image-button:hover { border-color: #9baec4; }
.tech-comparison, .capacity-showcase { grid-area: summary; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
.comparison-item, .capacity-item { padding: 18px; border: 1px solid #e2e7ed; border-radius: 8px; background: #f7f9fb; min-width: 0; }
.comparison-item h5 { margin: 0 0 12px; color: #243b7b; font-size: 16px; font-weight: 600; line-height: 1.5; }
.comparison-item p { margin: 8px 0 0; font-size: 14px; line-height: 1.65; }
.capacity-number { color: #243b7b; font-size: 28px; font-weight: 600; line-height: 1.3; }
.capacity-label { margin: 4px 0 12px; font-size: 14px; color: #697586; }
.capacity-result { font-size: 17px; font-weight: 600; color: #243b7b; }
.capacity-platform, .capacity-formula { margin-top: 6px; font-size: 14px; line-height: 1.6; }
.performance-grid { grid-area: summary; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px 20px; padding: 20px; border: 1px solid #e2e7ed; border-radius: 8px; background: #f7f9fb; }
.performance-label { color: #243b7b; font-size: 16px; line-height: 1.5; font-weight: 600; }
.performance-desc { color: #697586; margin-top: 6px; font-size: 14px; line-height: 1.65; }
.advantage-summary { grid-column: 1 / -1; padding: 20px 24px; background: #f6f8fa; border: 1px solid #e2e7ed; border-radius: 8px; }
.advantage-summary p { margin: 0; max-width: 85ch; font-size: 16px; line-height: 1.8; }
.application-section { border-top: 1px solid #e2e7ed; padding-top: 40px; margin-top: 8px; }
.application-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 20px; }
.application-card { min-width: 0; padding: 24px; border: 1px solid #e2e7ed; border-radius: 10px; background: #fff; }
.application-card:last-child { grid-column: 1 / -1; }
.application-card h4 { color: #243b7b; font-size: 19px; font-weight: 600; line-height: 1.4; margin: 0 0 12px; }
.application-card p { margin: 0; font-size: 16px; line-height: 1.75; max-width: 80ch; }
.product-links { margin-top: 16px; padding-top: 12px; border-top: 1px solid #e2e7ed; display: grid; gap: 6px; }
.product-link { font-size: 14px; line-height: 1.6; color: #596578; }
.collaboration-section { margin-top: 48px; padding: 32px; border: 1px solid #e2e7ed; border-radius: 10px; background: #f6f8fa; }
.collaboration-section .section-title { margin-bottom: 18px; }
.collaboration-content { max-width: 82ch; }
.collaboration-content > p { margin: 0; font-size: 16px; line-height: 1.85; }
.collaboration-highlight { margin-top: 24px; }
.collaboration-highlight h3 { margin: 0 0 10px; font-size: 20px; font-weight: 600; color: #243b7b; line-height: 1.5; }
.highlight-text { margin: 0; color: #596578; font-size: 16px; line-height: 1.75; }
.technology-content h2, .technology-content h3, .technology-content h4, .technology-content h5 { overflow-wrap: anywhere; }
.technology-content p { overflow-wrap: anywhere; }
.tech-image-button:focus-visible { outline: 2px solid #243b7b; outline-offset: 3px; }
@media (max-width:1023px) {
  .technology-intro { grid-template-columns: 1fr; gap: 24px; }
  .tech-hero { max-width: 76ch; }
  .tech-innovation-grid { max-width: 640px; }
  .card-content { gap: 24px; }
  .tech-image { max-height: 340px; }
}
@media (max-width:767px) {
  .banner-content, .technology-content { width: calc(100% - 32px); }
  .banner-content { padding: 28px 0; }
  .background-banner { min-height: 0; }
  .banner-title { font-size: 26px; }
  .banner-subtitle-main { font-size: 23px; }
  .technology-content { padding: 32px 0 40px; }
  .section-title h2 { font-size: 24px; }
  .tech-innovation-grid { padding: 16px; gap: 12px; }
  .innovation-number { font-size: 25px; }
  .innovation-label { font-size: 14px; }
  .innovation-desc { font-size: 13px; }
  .technology-intro { margin-bottom: 32px; }
  .tech-highlight-section { padding: 28px 0; }
  .card-header h2 { font-size: 23px; }
  .card-content { grid-template-columns: minmax(0,1fr); grid-template-areas: 'description' 'figure' 'summary'; gap: 24px; }
  .tech-image-container { position: static; }
  .tech-image { max-height: 280px; }
  .comparison-item, .capacity-item { padding: 14px; }
  .performance-grid { padding: 16px; gap: 16px; }
  .advantage-summary { grid-column: 1; padding: 18px; }
  .application-section { padding-top: 28px; }
  .application-grid { grid-template-columns: 1fr; gap: 16px; }
  .application-card { padding: 20px; }
  .collaboration-section { margin-top: 32px; padding: 20px; }
}
@media (max-width:359px) {
  .tech-comparison, .capacity-showcase, .performance-grid { grid-template-columns: 1fr; }
  .tech-innovation-grid { padding: 12px; gap: 8px; }
}
</style>
