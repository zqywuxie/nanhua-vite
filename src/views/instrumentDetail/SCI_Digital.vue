<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="SCI Digital"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">SCI Digital</h1>
          <div class="main-desc">
            <p><b>Fully Automated, All-in-One digital PCR device</b></p>
            <p>CE, NMPA, ISO13485 certified</p>
          </div>
          <div class="main-btns">

            <router-link :to="{ path: '/instruments', query: { page: $route.query.page } }" class="main-btn catalog">View all instruments</router-link>
          </div>
        </div>
      </div>
    </template>

      <!-- 顶部主模块：左图右文按钮 -->


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


    <InstrumentImagePreview v-model="previewImg" title="SCI Digital" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
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

</script>

<style scoped>
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
}
</style>
