<template>
  <MobileOptimizedContent>
    <div class="detail-page">
      <!-- 顶部主模块：左图右文按钮 -->
      <div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="SCI_Digital_PRO"
            @click="openPreview(imgMain)"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">SCI Digital PRO</h1>
          <div class="main-desc">
            <p><b>Fully automatic, Miniaturized, All-in-One design</b></p>
            <p><b>Seamless Integration of Ultra-Multiplex Technology</b></p>
          </div>
          <div class="main-btns">
            <a href="/contact_us" class="main-btn contact">Contact Us</a>
            <a href="#" class="main-btn online">Online</a>
          </div>
        </div>
      </div>

      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title section-title-strong">
          Detailed Introduction <span class="section-index">01</span>
        </h2>
        <div class="intro-center-title">
          <div class="intro-main-title-block">
            <div class="intro-main-title big">Where Power Meets Agility</div>
            <div class="intro-main-title big">
              Stronger! <span class="highlight-key">Faster!</span> More
              Flexible!
            </div>
          </div>
        </div>
        <div class="intro-img-center">
          <img
            :src="imgAngle"
            alt="SCI Digital Pro-45度角"
            class="previewable"
            @click="openPreview(imgAngle)"
          />
        </div>
        <div class="intro-features-cards">
          <div class="feature-card">
            <h3 class="feature-title orange">Stronger</h3>
            <ul>
              <li><b>Higher Throughput:</b> Supports 24 samples per run</li>
              <li>
                <b>More Fluorescent Channels:</b> 4/5/6/(6+1) channels (FAM, HEX
                (VIC), ROX, Cy5, Quasar705, Atto425, customizable)
              </li>
              <li>
                <b>Greater Multiplexity:</b>
                <span class="link"
                  >Exponential Ultra-Multiplex Digital PCR Technology</span
                >
                enables up to <b>63-plex quantitative detection</b>
              </li>
              <li>
                <b>Smarter:</b> AI-assisted chip reading and automated noise
                removal based on neural network algorithms
              </li>
            </ul>
          </div>
          <div class="feature-card">
            <h3 class="feature-title orange">Faster</h3>
            <ul>
              <li><b>Sample Loading Time:</b> &lt;4 minutes</li>
              <li>
                <b>Reading Speed:</b> Single-channel scanning time &lt;0.5
                minutes per sample
              </li>
              <li>
                <b>Detection Speed:</b> Total experimental process time ≤3
                hours, including droplet generation, PCR amplification, and data
                reading and analysis
              </li>
            </ul>
          </div>
          <div class="feature-card">
            <h3 class="feature-title orange">More Flexible</h3>
            <ul>
              <li>
                <b>Amplification Capability:</b> Dual PCR thermal modules for
                simultaneous operation of different programs with temperature
                gradient
              </li>
              <li>
                <b>Compact Design:</b> With a width of only 440mm, it occupies
                minimal bench space
              </li>
            </ul>
          </div>
        </div>
        <div class="intro-video-center">
          <video :src="video3" controls class="product-video" />
        </div>
        <div class="intro-features-cards">
          <div class="feature-card advantages-card">
            <h3 class="feature-title orange">
              Retains the Core Advantages of SCI Digital
            </h3>
            <div class="advantages-list">
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">All-in-1, fully automated</span>
                  <span class="adv-desc"
                    >Samples in, results out, no manual sample loading or
                    transfer</span
                  >
                </div>
              </div>
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">Extensive reagent compatibility</span>
                  <span class="adv-desc"
                    >Compatible with market PCR Mix, simplifying assay
                    development</span
                  >
                </div>
              </div>
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">Ultimately low cost</span>
                  <span class="adv-desc"
                    >Price comparable to qPCR; low cost per run</span
                  >
                </div>
              </div>
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">Superb flexibility</span>
                  <span class="adv-desc"
                    >2-24 samples, 1 chip/sample, min 2 samples/run, minimizing
                    waste</span
                  >
                </div>
              </div>
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">High performance</span>
                  <span class="adv-desc">Sensitivity of 0.01%</span>
                </div>
              </div>
              <div class="adv-item">
                <span class="adv-dot"></span>
                <div class="adv-content">
                  <span class="adv-main">Extremely easy to use</span>
                  <span class="adv-desc"
                    >Experiment prep in as little as 1 minute</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-video-center">
          <video :src="video2" controls class="product-video" />
        </div>
        <div class="intro-data-analysis">
          <h3 class="feature-title">Data analysis:</h3>
          <p>
            The software automatically performs fluorescence signal statistical
            analysis for each channel, calculating the initial copy number or
            concentration (copies/μL) of the target molecules in each sample,
            copy number variation (CNV), and results can be directly printed or
            imported into Excel.
          </p>
          <p>
            The analysis threshold line of the data analysis software can be
            manually adjusted, and pairwise comparisons between channels can be
            made. The results can be displayed through 1-D graphs, 2-D graphs,
            histograms, and original chip images.
          </p>
        </div>
      </section>

      <!-- 技术原理区块 -->
      <section class="section-block">
        <h2 class="section-title section-title-strong">
          Innovative glass-based microfluidic chip
        </h2>
        <div class="intro-principle">
          <p>
            <b>Principal:</b> glass-based sandwich design enabling the
            solidified oil isolation technology, which forms micro-droplets
            sealed in independent microchambers by solidifying the oil phase. A
            totally different approach than oil encapsulated water droplet
            partitioning method or flow cytometry detection principle.
          </p>
          <p>
            <b>Advantages:</b> prevents droplet fusion or uneven droplet sizes,
            ensuring more stable droplets. Rapid generation of 20,000+ droplets
            with higher effective droplet ratio (>95%) and droplet uniformity
            (>99%). Higher thermal efficiency, more uniform reactions, increased
            transparency for higher signal quality.
          </p>
        </div>
        <div class="intro-video-center">
          <video :src="video1" controls class="product-video" />
        </div>
      </section>

      <!-- 产品规格/技术规格区块 -->
      <section class="section-block">
        <h2 class="section-title section-title-strong">
          Product Specification
        </h2>
        <div class="spec-imgs">
          <img
            :src="imgSpec1"
            alt="Product Specification"
            class="spec-img previewable"
            @click="openPreview(imgSpec1)"
          />
        </div>
        <h2 class="section-title section-title-strong">
          Technical Specification
        </h2>
        <div class="spec-imgs">
          <img
            :src="imgSpec2"
            alt="Technical Specification"
            class="spec-img previewable"
            @click="openPreview(imgSpec2)"
          />
        </div>
      </section>

      <!-- PDF下载区 -->
      <section class="section-block">
        <h2 class="section-title section-title-strong">Document</h2>
        <div class="download-section">
          <a :href="pdfUrl" target="_blank" class="download-btn">
            <img :src="pdfIcon" alt="pdf" class="pdf-icon" />
            SCI Digital Pro-Brochure-EN.pdf
          </a>
        </div>
      </section>
      <div v-if="previewImg" class="img-preview-mask" @click="closePreview">
        <img :src="previewImg" class="img-preview-large" @click.stop />
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import imgMain from "@/assets/instrumentsDetail/SCI_Digital_PRO/10001.jpg";
import imgAngle from "@/assets/instrumentsDetail/SCI_Digital_PRO/10005.jpg";
import imgSpec1 from "@/assets/instrumentsDetail/SCI_Digital_PRO/10003.png";
import imgSpec2 from "@/assets/instrumentsDetail/SCI_Digital_PRO/10002.png";
import pdfIcon from "@/assets/instrumentsDetail/SCI_Digital_PRO/10004.svg";
import video1 from "@/assets/instrumentsDetail/SCI_Digital_PRO/SCI_Digital_PRO.mp4";
import video2 from "@/assets/instrumentsDetail/SCI_Digital_PRO/1739427403203657.mp4";
import video3 from "@/assets/instrumentsDetail/SCI_Digital_PRO/1739426911154519.mp4";
const pdfUrl =
  "https://turtle-tech.com.cn/static/upload/file/20250513/1747119449187556.pdf";
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
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
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
.section-title-strong {
  background: linear-gradient(90deg, #e6f7ff 0%, #fff 100%);
  border-radius: 8px;
  padding: 8px 18px 8px 0;
}
.section-index {
  font-size: 24px;
  color: #aaa;
  font-weight: 400;
}
.intro-center-title {
  text-align: center;
  margin-bottom: 32px;
}
.intro-main-title-block {
  display: inline-block;
  background: linear-gradient(90deg, #2b7bbf 0%, #e6f7ff 100%);
  border-radius: 16px;
  padding: 18px 48px;
  margin-bottom: 12px;
  box-shadow: 0 2px 12px rgba(43, 123, 191, 0.1);
}
.intro-main-title {
  font-size: 40px;
  color: #fff;
  font-weight: 900;
  margin-bottom: 4px;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(43, 123, 191, 0.1);
}
.intro-main-title.big {
  font-size: 48px;
}
.highlight-key {
  color: #e36c09;
  background: #fff3e6;
  border-radius: 8px;
  padding: 0 10px;
  margin: 0 4px;
}
.intro-img-center {
  text-align: center;
  margin-bottom: 32px;
}
.intro-img-center img {
  max-width: 540px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}
.intro-features-cards {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
  justify-content: center;
}
.feature-card {
  background: #f5faff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.04);
  padding: 16px 18px;
  font-size: 1.05rem;
  min-width: 220px;
  flex: 1;
}
.feature-title {
  font-size: 1.08rem;
  color: #1976d2;
  font-weight: 700;
  margin-bottom: 12px;
}
.feature-title.orange {
  color: #e36c09;
}
.feature-card ul {
  margin: 0 0 12px 24px;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
}
.intro-video-center {
  text-align: center;
  margin-bottom: 18px;
}
.product-video {
  width: 80%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
}
.intro-data-analysis {
  margin-top: 32px;
  font-size: 20px;
  color: #333;
  font-weight: 500;
  background: #f7faff;
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 0 2px 12px rgba(43, 123, 191, 0.07);
}
.intro-principle {
  font-size: 20px;
  color: #333;
  margin-bottom: 32px;
  font-weight: 500;
}
.section-img-row,
.intro-img-center,
.spec-imgs {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img,
.spec-img {
  width: 90%;
  max-width: 900px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
}
.download-section,
.pdf-download-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
  justify-content: center;
}
.download-btn {
  font-size: 1.18rem;
  color: #1976d2;
  font-weight: 600;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  box-shadow: none;
  display: inline;
}
.pdf-icon {
  width: 38px;
  height: 38px;
  margin-right: 0;
}
.link {
  color: #2b7bbf;
  text-decoration: underline;
  cursor: pointer;
}
.advantages-card {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 24px 18px 24px;
  max-width: 700px;
}
.advantages-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 32px;
  justify-items: center;
}
.adv-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.adv-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #1976d2;
  margin-top: 7px;
  flex-shrink: 0;
}
.adv-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.adv-main {
  font-size: 1.08rem;
  color: #1976d2;
  font-weight: 700;
  line-height: 1.1;
}
.adv-desc {
  font-size: 0.98rem;
  color: #333;
  line-height: 1.3;
  font-weight: 400;
}
.main-img,
.intro-img-center img,
.spec-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.main-img:hover,
.intro-img-center img:hover,
.spec-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.18);
  transform: scale(1.03);
}
.img-preview-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.25);
  background: #fff;
}
/* 移动端优化 */
@media (max-width: 900px) {
  .detail-page {
    padding: 20px 16px 40px 16px;
  }

  .main-info-row {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .main-img-col {
    width: 100%;
    flex: none;
  }

  .main-img {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.12);
  }

  .main-title {
    font-size: 1.8rem !important;
    margin-bottom: 16px !important;
    text-align: center;
  }

  .main-desc {
    text-align: center;
    margin-bottom: 20px;
  }

  .main-desc p {
    font-size: 0.95rem !important;
    margin: 8px 0 !important;
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

  .intro-center-title {
    margin-bottom: 24px !important;
  }

  .intro-main-title {
    font-size: 1.3rem !important;
    text-align: center !important;
    margin: 8px 0 !important;
  }

  .intro-img-center {
    margin: 20px 0 !important;
    text-align: center;
  }

  .intro-img-center img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 12px !important;
  }

  .intro-features-cards {
    flex-direction: column;
    gap: 16px;
  }

  .feature-card {
    padding: 20px !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .feature-title {
    font-size: 1.3rem !important;
    margin-bottom: 16px !important;
    text-align: center !important;
  }

  .feature-card ul {
    padding-left: 16px !important;
  }

  .feature-card li {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    margin-bottom: 12px !important;
  }

  .advantages-list {
    grid-template-columns: 1fr;
    gap: 12px 0;
  }

  .advantages-card {
    max-width: 100%;
    padding: 16px 12px;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .adv-main {
    font-size: 1rem !important;
  }

  .adv-desc {
    font-size: 0.85rem !important;
    line-height: 1.5 !important;
  }

  .intro-principle p,
  .intro-data-analysis p {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    margin: 12px 0 !important;
    text-align: justify !important;
  }

  .product-video {
    width: 100% !important;
    height: auto !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }

  .spec-imgs {
    text-align: center;
    margin: 20px 0 !important;
  }

  .spec-img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 12px !important;
  }

  .download-section {
    text-align: center;
    margin: 20px 0 !important;
  }

  .download-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 14px 20px !important;
    background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%) !important;
    color: white !important;
    text-decoration: none !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    font-size: 0.95rem !important;
    transition: all 0.3s ease !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .download-btn:active {
    transform: scale(0.98) !important;
    box-shadow: 0 8px 20px rgba(25, 118, 210, 0.3) !important;
  }

  .pdf-icon {
    width: 20px !important;
    height: 20px !important;
  }
}
</style> 