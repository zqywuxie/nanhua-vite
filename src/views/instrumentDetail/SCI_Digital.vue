<template>
  <MobileOptimizedContent>
    <div class="detail-page">
      <!-- 顶部主模块：左图右文按钮 -->
      <div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="SCI Digital"
            @click="openPreview(imgMain)"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">SCI Digital</h1>
          <div class="main-desc">
            <p><b>Fully Automated, All-in-One digital PCR device</b></p>
            <p>CE, NMPA, ISO13485 certified</p>
          </div>
          <div class="main-btns">
            <a href="/contact_us" class="main-btn contact">Contact Us</a>
            <a href="#" class="main-btn online">Online</a>
          </div>
        </div>
      </div>

      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title">Where Power Meets Agility</h2>
        <div class="section-highlight-block">
          <span
            >SCI Digital is a fully automated, all-in-one digital PCR device,
            integrating sample loading, reaction, and detection in a single
            instrument. It is designed for high sensitivity, flexibility, and
            ease of use.</span
          >
        </div>
        <div class="section-video-row">
          <video :src="video1" controls class="section-video"></video>
        </div>
      </section>

      <!-- 核心优势/参数分组区块 -->
      <section class="section-block">
        <h2 class="section-title">
          Retains the Core Advantages of SCI Digital
        </h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>All-in-1, fully automated</b>
                <div class="feature-desc">
                  Samples in, results out, with no manual sample loading or
                  transfer
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Extensive reagent compatibility</b>
                <div class="feature-desc">
                  Widely compatible with market PCR Mix, simplifying assay
                  development.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Ultimately low cost</b>
                <div class="feature-desc">
                  Price comparable to qPCR; low cost per run.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Superb flexibility</b>
                <div class="feature-desc">
                  2-24 samples, 1 chip/sample, minimum 2 samples/run - farewell
                  to sample pooling, minimizing consumable waste.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>High performance</b>
                <div class="feature-desc">Sensitivity of 0.01%.</div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Extremely easy to use</b>
                <div class="feature-desc">
                  Experiment preparation can be completed in as little as 1
                  minute, greatly enhancing efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术原理区块 -->
      <section class="section-block">
        <h2 class="section-title">Innovative glass-based microfluidic chip</h2>
        <div class="section-highlight-block">
          <span
            >SCI Digital utilizes a proprietary glass-based microfluidic chip,
            enabling ultra-high partitioning and precise quantification.</span
          >
        </div>
        <div class="section-video-row">
          <video :src="video2" controls class="section-video"></video>
        </div>
      </section>

      <!-- Ten Reasons to Choose SCI Digital -->
      <section class="section-block">
        <h2 class="section-title">Ten Reasons to Choose SCI Digital</h2>
        <div class="section-img-row">
          <img
            :src="imgTenReasons"
            class="section-img previewable"
            alt="Ten Reasons to Choose SCI Digital"
            @click="openPreview(imgTenReasons)"
          />
        </div>
      </section>

      <!-- PDF下载区块 -->
      <section class="section-block">
        <h2 class="section-title">Documents</h2>
        <div class="pdf-download-row">
          <img :src="pdfIcon" class="pdf-icon" alt="PDF" />
          <a :href="pdfUrl" target="_blank" class="pdf-link"
            >SCI Digital Brochure</a
          >
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
import imgMain from "@/assets/instrumentsDetail/SCI_Digital/10001.jpeg";
import imgTenReasons from "@/assets/instrumentsDetail/SCI_Digital/10002.png";
import pdfIcon from "@/assets/instrumentsDetail/SCI_Digital/10003.svg";
import video1 from "@/assets/instrumentsDetail/SCI_Digital/1739505198630265.mp4";
import video2 from "@/assets/instrumentsDetail/SCI_Digital/1739504847129505.mp4";
const pdfUrl = "/pdf/SCI_Digital_Brochure.pdf";
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
.main-img,
.section-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.main-img:hover,
.section-img:hover {
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
.main-img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
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
.section-video-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-video {
  width: 80%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
}
.intro-features-cards {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
}
.feature-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #f5faff;
  border-radius: 8px;
  padding: 16px 18px;
  font-size: 1.05rem;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.04);
}
.feature-item .dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #1976d2;
  margin-top: 7px;
  flex-shrink: 0;
}
.feature-item b {
  font-size: 1.08rem;
  color: #1976d2;
  font-weight: 700;
}
.feature-desc {
  font-size: 0.98rem;
  color: #333;
  margin-top: 2px;
}
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.pdf-download-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
}
.pdf-icon {
  width: 38px;
  height: 38px;
}
.pdf-link {
  font-size: 1.18rem;
  color: #1976d2;
  font-weight: 600;
  text-decoration: underline;
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
    text-align: center;
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
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
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

  .section-highlight-block {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    text-align: justify !important;
    padding: 16px !important;
    margin: 20px 0 !important;
    border-radius: 12px !important;
  }

  .section-video-row,
  .section-img-row {
    text-align: center;
    margin: 20px 0 !important;
  }

  .section-video,
  .section-img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }

  .intro-features-cards {
    flex-direction: column;
    gap: 16px;
  }

  .feature-col {
    width: 100% !important;
  }

  .feature-item {
    padding: 16px !important;
    margin-bottom: 12px !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
    background: #f8f9fa !important;
    display: flex !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }

  .feature-item .dot {
    width: 8px !important;
    height: 8px !important;
    background: #1976d2 !important;
    border-radius: 50% !important;
    margin-top: 6px !important;
    flex-shrink: 0;
  }

  .feature-item b {
    font-size: 1rem !important;
    color: #1976d2 !important;
    display: block !important;
    margin-bottom: 8px !important;
  }

  .feature-desc {
    font-size: 0.85rem !important;
    line-height: 1.5 !important;
    color: #555 !important;
  }

  .pdf-download-row {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 16px !important;
    background: #f8f9fa !important;
    border-radius: 12px !important;
    margin-bottom: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .pdf-icon {
    width: 24px !important;
    height: 24px !important;
    flex-shrink: 0;
  }

  .pdf-link {
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    color: #1976d2 !important;
    text-decoration: none !important;
    flex: 1;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .pdf-link:active {
    color: #1565c0 !important;
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