<template>
  <MobileOptimizedContent>
    <div class="detail-page">
      <!-- 面包屑导航 -->
      <nav class="breadcrumb-nav">
        <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt;
        <a href="/instrumentDetail/Digital_PCR_Panel_Catalog"
          >Digital PCR Panels</a
        >
      </nav>
      <!-- 顶部主模块：左图右文按钮 -->
      <div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="28-plex Respiratory Pathogen Detection Kit"
            @click="openPreview(imgMain)"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            28-plex Respiratory Pathogen Detection Kit
          </h1>
          <div class="main-desc">
            <ul>
              <li><b>Simultaneous detection of 28 respiratory pathogens</b></li>
              <li>
                <b
                  >Timely response and full coverage of disease control needs</b
                >
              </li>
              <li><b>Ultra-Multiplex</b></li>
              <li><b>High sensitivity</b></li>
              <li><b>High specificity</b></li>
              <li><b>Precise quantification</b></li>
            </ul>
          </div>
          <div class="main-btns">
            <a href="/contact_us" class="main-btn contact">Contact Us</a>
            <a href="#" class="main-btn online">Online</a>
          </div>
        </div>
      </div>

      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title">Detailed Introduction</h2>
        <div class="section-highlight-block">
          <span
            >Enhanced by
            <b>Exponential Ultra-Multiplex Digital PCR Technology</b>.
            Specifically designed to comprehensively enhance the capabilities of
            disease control infrastructure. Covering the quantitative detection
            of 13 respiratory pathogen species with some of the subtypes as
            required by national disease control standards. Capable of
            differentiating influenza A/B, SARS-CoV-2, and other major
            respiratory pathogens.</span
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgTech"
            class="section-img previewable"
            alt="Exponential Ultra-Multiplex Digital PCR Technology"
            @click="openPreview(imgTech)"
          />
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Key Features</h2>
        <div class="section-highlight-block">
          <ul>
            <li>
              <b>Ultra-Multiplex, faster detection:</b> 28 pathogens in a single
              test, rapid and accurate; fulfilling disease control testing
              demands
            </li>
            <li>
              <b>More flexible:</b> Addressing foundational, flexible, and
              forward-looking CDC testing needs; <b>customizable</b>
            </li>
            <li>
              <b>More accurate:</b> Accurate quantification of pathogen load
            </li>
            <li>
              <b>Super low cost:</b> Ultra-Multiplex pathogen detection in just
              2 chips
            </li>
            <li>
              <b>Highly sensitive:</b> 200-500 cp/mL, greatly reducing the
              probability of missed detections
            </li>
            <li>
              <b>Highly specific:</b> Effective differentiation of multiple
              pathogens
            </li>
            <li>
              <b>More intelligent:</b> Automatic testing and data analysis
            </li>
          </ul>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Sampling Method</h2>
        <div class="section-highlight-block">
          <span><b>Nasal Swab, Throat Swab</b></span>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Compatible Device</h2>
        <div class="section-highlight-block">
          <span><b>SCI Digital</b></span>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Test Items</h2>
        <div class="section-img-row">
          <img
            :src="imgTargets"
            class="section-img previewable"
            alt="Test Items"
            @click="openPreview(imgTargets)"
          />
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Product Components</h2>
        <div class="section-img-row">
          <img
            :src="imgComponents"
            class="section-img previewable"
            alt="Product Components"
            @click="openPreview(imgComponents)"
          />
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Sample Report</h2>
        <div class="section-img-row">
          <img
            :src="imgReport"
            class="section-img previewable"
            alt="Sample Report"
            @click="openPreview(imgReport)"
          />
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="/instrumentDetail/Digital_PCR_Panel_Catalog"
          >Prev：Digital PCR Panel Catalog</a
        >
        <a
          class="next"
          href="/instrumentDetail/12_plex_Respiratory_Pathogen_Detection_Kit"
          >Next：12-plex Respiratory Pathogen Detection Kit</a
        >
      </div>
      <div v-if="previewImg" class="img-preview-mask" @click="closePreview">
        <img :src="previewImg" class="img-preview-large" @click.stop />
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import imgMain from "@/assets/instrumentsDetail/28-plex_Respiratory_Pathogen_Detection_Kit/10001.jpeg";
import imgTech from "@/assets/instrumentsDetail/28-plex_Respiratory_Pathogen_Detection_Kit/10002.png";
import imgTargets from "@/assets/instrumentsDetail/28-plex_Respiratory_Pathogen_Detection_Kit/10003.png";
import imgComponents from "@/assets/instrumentsDetail/28-plex_Respiratory_Pathogen_Detection_Kit/10004.png";
import imgReport from "@/assets/instrumentsDetail/28-plex_Respiratory_Pathogen_Detection_Kit/10005.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
}
.main-info-row {
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 48px;
}
.main-img-col {
  flex: 0 0 420px;
}
.main-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.16);
  transform: scale(1.04);
}
.main-info-col {
  flex: 1;
}
.main-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #1a237e;
}
.highlight-title {
  border-left: 8px solid #1976d2;
  padding-left: 18px;
  background: linear-gradient(90deg, #e3f2fd 60%, transparent 100%);
}
.main-desc {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.main-desc ul {
  padding-left: 18px;
}
.main-desc li {
  margin-bottom: 10px;
}
.main-btns {
  display: flex;
  gap: 18px;
}
.main-btn {
  display: inline-block;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  background: #1976d2;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  transition: background 0.2s;
}
.main-btn.contact {
  background: #43a047;
}
.main-btn.online {
  background: #1976d2;
}
.main-btn:hover {
  background: #1565c0;
}
.section-block {
  margin-bottom: 56px;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1976d2;
  border-left: 6px solid #1976d2;
  padding-left: 16px;
}
.section-highlight-block {
  background: #e3f2fd;
  border-radius: 10px;
  padding: 24px 32px;
  font-size: 1.18rem;
  margin-bottom: 28px;
  color: #1a237e;
  font-weight: 500;
  text-align: center;
}
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.section-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.16);
  transform: scale(1.04);
}
.breadcrumb-nav {
  font-size: 1.05rem;
  margin-bottom: 18px;
  color: #888;
}
.breadcrumb-nav a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 2px;
}
.breadcrumb-nav a:hover {
  text-decoration: underline;
}
.prev-next-row {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 24px;
  font-size: 1.08rem;
  color: #888;
}
.prev-next-row a {
  color: #1976d2;
  text-decoration: none;
}
.prev-next-row a:hover {
  text-decoration: underline;
}
.img-preview-mask {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.18);
  background: #fff;
}

/* 移动端优化 */
@media (max-width: 900px) {
  .detail-page {
    padding: 20px 16px 40px 16px;
  }

  .breadcrumb-nav {
    font-size: 0.85rem !important;
    margin-bottom: 20px !important;
    text-align: center;
  }

  .breadcrumb-nav a {
    color: #1976d2 !important;
    text-decoration: none !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .main-info-row {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .main-img-col {
    width: 100%;
    flex: none;
    text-align: center;
  }

  .main-img {
    width: 80% !important;
    max-width: 300px !important;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.12);
  }

  .main-title {
    font-size: 1.6rem !important;
    margin-bottom: 16px !important;
    text-align: center;
    line-height: 1.3 !important;
  }

  .main-desc {
    text-align: left;
    margin-bottom: 20px;
    font-size: 1rem !important;
  }

  .main-desc ul {
    padding-left: 20px !important;
    margin: 16px 0 !important;
  }

  .main-desc li {
    font-size: 0.85rem !important;
    line-height: 1.6 !important;
    margin-bottom: 12px !important;
  }

  .main-btns {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .main-btn {
    width: 100% !important;
    text-align: center !important;
    padding: 14px 20px !important;
    font-size: 1rem !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .main-btn:active {
    transform: scale(0.98) !important;
  }

  .section-block {
    margin-bottom: 32px !important;
    padding: 0 !important;
  }

  .section-title {
    font-size: 1.5rem !important;
    margin-bottom: 20px !important;
    text-align: center !important;
  }

  .section-highlight-block {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    text-align: left !important;
    padding: 16px !important;
    margin: 20px 0 !important;
    border-radius: 12px !important;
  }

  .section-img-row {
    text-align: center;
    margin: 20px 0 !important;
  }

  .section-img {
    width: 90% !important;
    max-width: 350px !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }

  .prev-next-row {
    flex-direction: column !important;
    gap: 12px !important;
    margin-top: 40px !important;
  }

  .prev,
  .next {
    padding: 12px 16px !important;
    font-size: 0.9rem !important;
    border-radius: 8px !important;
    text-align: center !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .prev:active,
  .next:active {
    transform: scale(0.98) !important;
  }

  .img-preview-mask {
    padding: 20px !important;
  }

  .img-preview-large {
    max-width: 95vw !important;
    max-height: 85vh !important;
    border-radius: 12px !important;
  }
}
</style>