<template>
  <div class="support-page">
    <!-- Banner -->
    <div class="support-banner site-page-header">

      <img src="../../assets/support/Banner001847-ban4_wap.jpg" alt="支持Banner" />
    </div>
    <!-- 一级Tab切换模块 -->
    <div class="support-main-tabs">
      <button type="button"
        v-for="(tab, idx) in mainTabs"
        :key="tab.key"
        :class="['support-main-tab', {active: mainTabIdx === idx}]"
        @click="mainTabIdx = idx"
        :aria-pressed="mainTabIdx === idx"
      >
        {{ tab.label }}
      </button>
    </div>
    <!-- Tab切换模块 -->
    <div v-if="mainTabIdx === 0">
      <div class="support-tabs">
        <button type="button"
          v-for="(tab, idx) in tabs"
          :key="tab.key"
          :class="['support-tab', {active: currentTab === idx}]"
          @click="currentTab = idx"
          :aria-pressed="currentTab === idx"
        >
          {{ tab.label }}
        </button>
      </div>
      <!-- Tab内容区 -->
      <div v-if="currentTab === 0">
        <div class="support-qa-list">
          <div v-for="(item, idx) in qaList" :key="idx" class="support-qa-item">
            <div class="qa-q">
              <span class="qa-q-label">Q</span>
              <span class="qa-q-text">{{ item.q }}</span>
            </div>
            <div class="qa-a">
              <span class="qa-a-label">A</span>
              <span class="qa-a-text" v-html="item.a"></span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="support-tab-content-placeholder">
        <div class="tab-placeholder-title">{{ tabs[currentTab].label }}</div>
        <div class="tab-placeholder-desc">This section is a placeholder for "{{ tabs[currentTab].label }}". Detailed information will be added later.</div>
      </div>
    </div>
    <div v-else>
      <!-- Our Location section (copied from home.vue for full style match) -->
      <section class="map-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Location</h2>
            <p class="section-desc">
              Visit our state-of-the-art facility and discover how we can support your research needs.
            </p>
          </div>
          <div class="map-content">
            <div class="map-visual">
              <div class="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style="border:0; min-height:350px; border-radius:20px;" 
                  allowfullscreen="" 
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            <div class="location-info">
              <div class="location-card">
                <div class="location-details">
                  <h3 class="location-title">Nanjing iRepertoire Biotechnology Co., Ltd.</h3>
                  <p class="location-address">4th Floor, Building A9, Huizhi Science Park, No.8 Hengtai Road, Nanjing Economic Development Zone</p>
                  <div class="location-contact">
                    <div class="contact-item">
                      <span class="contact-label">Phone:</span>
                      <span class="contact-value">4008-281-191</span>
                    </div>
                    <div class="contact-item">
                      <span class="contact-label">Email:</span>
                      <span class="contact-value">info@arpbiotech.com</span>
                    </div>
                    <div class="contact-item">
                      <span class="contact-label">Hours:</span>
                      <span class="contact-value">Mon-Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div class="location-actions">
                    <a href="https://maps.google.com/?q=4th Floor, Building A9, Huizhi Science Park, No.8 Hengtai Road, Nanjing Economic Development Zone" target="_blank" class="map-btn primary">
                      Get Directions
                    </a>
                    <a href="tel:4008281191" class="map-btn secondary">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useQueryTab } from '@/composables/useQueryTab'
const mainTabs = [
  { key: 'faq', label: 'FAQ' },
  { key: 'contact', label: 'Contact Us' },
]
const mainTabIdx = useQueryTab(mainTabs, 'section')
const tabs = [
  { key: 'primer', label: 'Primer Kits' },
  { key: 'ir', label: 'iR Library Prep Kits' },
  { key: 'cartridge', label: 'iR Cartridges' },
  { key: 'data', label: 'Data Analysis' },
  { key: 'sample', label: 'Sample Requirements' },
  { key: 'seq', label: 'Sequencing' },
]
const currentTab = useQueryTab(tabs)
const qaList = [
  {
    q: 'What types of immune repertoire libraries can be constructed?',
    a: 'Our primer kit series can amplify and construct libraries for all 7 peptide chains of TCRα, β, δ, γ, and BCR IgH and Igκ/λ.',
  },
  {
    q: 'The primer kits provide multiple molecular barcodes. What is the purpose of setting multiple barcodes?',
    a: 'Our primers carry different molecular barcodes (or IDs), allowing us to pool multiple libraries (same or different chains) into one sequencing channel for simultaneous sequencing. This maximizes the sequencing throughput and reduces the cost per sample.<br>Our iRweb data analysis software can identify and distinguish different barcodes.',
  },
  {
    q: 'What is the difference between large and small package primer kits?',
    a: 'Both large and small package primer kits contain primer mixtures with the same molecular barcode.<br>The large package can be used to construct 10 immune repertoire libraries with the same barcode. The small package can construct 5 libraries with the same barcode.<br>The small package is more affordable and allows users to choose more barcode combinations.',
  },
  {
    q: 'What is the difference between long-read and short-read primer kits for the Illumina platform?',
    a: 'The human long-read primer kit series is compatible with Illumina 250+ cycle (500+ PER) kits, covering the entire region from FR1 to C gene, including CDR1, CDR2, and CDR3.<br>The mouse long-read primer kit series is compatible with Illumina 250+ cycle (500+ PER) kits, covering FR2 to C gene, including CDR2 and CDR3.<br>The human and mouse short-read V-C primer kit series is compatible with Illumina 200+ cycle (100+ PER) kits, covering FR3 to C gene, including CDR3.<br>The human short-read V-J primer kit series is compatible with Illumina 200+ cycle (100+ PER) kits, covering FR3 to J gene, including CDR3.',
  },
  {
    q: 'What is the difference between V-J and V-C primer kits?',
    a: 'V-J primer kits cover FR3 to J gene, including CDR3. V-C primer kits cover FR3 to C gene, including CDR3.',
  },
]
</script>

<style scoped>
.support-page {
  width: 100%;
  background: #fff;
  min-height: 100vh;
}
.support-banner {
  width: 100%;
  height: 220px;
  background: #f7fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  overflow: hidden;
  border-radius: 10px;
}
.support-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.support-main-tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin: 0 auto 32px auto;
  max-width: 1200px;
  padding: 0 24px;
  border-bottom: 2px solid #eaeaea;
  overflow-x: auto;
}
.support-main-tab {
  font-size: 1.13rem;
  font-weight: 700;
  color: #4e3fa5;
  background: #f7fafd;
  border-radius: 16px 16px 0 0;
  padding: 12px 36px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: none;
  outline: none;
  min-width: 120px;
  text-align: center;
}
.support-main-tab.active {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
}
@media (max-width: 700px) {
  .support-main-tabs {
    gap: 8px;
    padding: 0 4px;
  }
  .support-main-tab {
    padding: 8px 14px;
    min-width: 90px;
    font-size: 1rem;
  }
}
.support-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin: 0 auto 36px auto;
  max-width: 1200px;
  padding: 0 8px;
  border: none;
  overflow-x: auto;
}
.support-tab {
  font-size: 1.08rem;
  font-weight: 600;
  color: #fff;
  border-radius: 6px;
  padding: 10px 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  border: none;
  outline: none;
  min-width: 110px;
  text-align: center;
  box-shadow: 0 2px 8px 0 rgba(30,34,90,0.04);
  background: var(--tab-bg, #4e3fa5);
}
.support-tab:nth-child(1) { --tab-bg: #00bc97; }
.support-tab:nth-child(2) { --tab-bg: #4e3fa5; }
.support-tab:nth-child(3) { --tab-bg: #fe9a15; }
.support-tab:nth-child(4) { --tab-bg: #2b7bbf; }
.support-tab:nth-child(5) { --tab-bg: #8e44ad; }
.support-tab:nth-child(6) { --tab-bg: #16a085; }
.support-tab:hover {
  filter: brightness(1.08) contrast(1.1);
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0,188,151,0.10);
}
.support-tab.active {
  background: #222;
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0,188,151,0.13);
}
@media (max-width: 700px) {
  .support-tabs {
    gap: 6px;
    padding: 0 2px;
  }
  .support-tab {
    padding: 8px 10px;
    min-width: 70px;
    font-size: 0.98rem;
  }
}
.support-qa-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
}
.support-qa-item {
  background: #f7fafd;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.06);
  margin-bottom: 24px;
  padding: 24px 18px 18px 18px;
}
.qa-q {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.qa-q-label {
  background: #00bc97;
  color: #fff;
  font-weight: 700;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 1.1rem;
}
.qa-q-text {
  font-size: 1.08rem;
  color: #2b7bbf;
  font-weight: 600;
}
.qa-a {
  display: flex;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 2px;
}
.qa-a-label {
  background: #4e3fa5;
  color: #fff;
  font-weight: 700;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 1.1rem;
}
.qa-a-text {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.8;
}
.support-tab-content-placeholder {
  max-width: 1200px;
  margin: 60px auto 0 auto;
  padding: 48px 12px;
  background: #f7fafd;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.06);
}
.tab-placeholder-title {
  font-size: 1.3rem;
  color: #00bc97;
  font-weight: 700;
  margin-bottom: 18px;
}
.tab-placeholder-desc {
  font-size: 1.08rem;
  color: #666;
}
/* 地图模块样式（与home.vue一致） */
.map-section {
  padding: 100px 0;
  background: #f8f9fa;
}
.map-content {
  display: flex;
  gap: 60px;
  align-items: stretch;
  max-width: 1600px;
  margin: 0 auto;
}
.map-visual {
  flex: 2;
  min-height: 600px;
}
.map-container {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.location-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.location-card {
  background: #fff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}
.location-icon {
  margin-bottom: 30px;
  text-align: center;
}
.location-pin {
  font-size: 3rem;
  display: block;
}
.location-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.location-address {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
}
.location-contact {
  margin-bottom: 40px;
}
.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}
.contact-item:last-child {
  border-bottom: none;
}
.contact-label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}
.contact-value {
  color: #666;
  font-size: 1rem;
}
.location-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.map-btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  flex: 1;
  min-width: 140px;
}
.map-btn.primary {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
}
.map-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 188, 151, 0.3);
}
.map-btn.secondary {
  background: #fff;
  color: #00bc97;
  border: 2px solid #00bc97;
}
.map-btn.secondary:hover {
  background: #00bc97;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 188, 151, 0.2);
}
@media (max-width: 900px) {
  .map-content {
    flex-direction: column;
    gap: 40px;
  }
  .location-card {
    max-width: 100%;
    padding: 30px;
  }
  .map-visual {
    min-height: 400px;
  }
  .map-btn {
    width: 100%;
  }
  .location-actions {
    flex-direction: column;
  }
}
/* container class for consistent padding and centering (from home.vue) */
.container {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 60px;
}
@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }
}
/* section-header, section-title, section-desc styles from home.vue for full fidelity */
.section-header {
  text-align: center;
  margin-bottom: 40px;
  flex-shrink: 0;
}
.section-title {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;
}
.section-desc {
  font-size: 1.4rem;
  color: #888;
  line-height: 1.6;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
}
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  .section-desc {
    font-size: 1.2rem;
    max-width: 100%;
  }
  .section-header {
    margin-bottom: 30px;
  }
}
.support-banner { border-radius: 0; }
.support-main-tab, .support-tab { font: inherit; font-size: 16px; min-height: 44px; color: #596578; background: none; border-radius: 0; border-bottom: 2px solid transparent; box-shadow: none; flex-shrink: 0; }
.support-main-tab.active, .support-tab.active { color: #243b7b; background: none; border-bottom-color: #00bc97; box-shadow: none; font-weight: 600; }
.support-tab:hover { color: #243b7b; filter: none; box-shadow: none; }
.support-main-tab:focus-visible, .support-tab:focus-visible { outline: 2px solid #243b7b; outline-offset: -3px; }
.support-tabs { justify-content: flex-start; padding: 0 24px; gap: 16px; }
.support-qa-item { box-shadow: none; border: 1px solid #e1e6ed; border-radius: var(--vb-radius-panel, 12px); }
.container { max-width: 1248px; padding: 0 24px; }
.section-title, .location-title { background: none; color: #243b7b; -webkit-text-fill-color: currentColor; font-size: 26px; }
.section-desc { font-size: 16px; }
.map-btn { border-radius: var(--vb-radius-control, 6px); }
.map-btn.primary { background: #243b7b; }
.map-btn.primary:hover, .map-btn.secondary:hover { transform: none; box-shadow: none; }
.map-btn.secondary { color: #176cb0; border: 1px solid #cbd2dc; }
.map-btn.secondary:hover { background: #f3f6f7; color: #124a78; }
@media (max-width: 767px) { .support-tabs { padding: 0 16px; gap: 8px; } .container { padding: 0 16px; } }
</style> 