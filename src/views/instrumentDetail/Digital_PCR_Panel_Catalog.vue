<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Digital PCR Panel Catalog"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">Digital PCR Panel Catalog</h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Turtle Tech has developed numerous panel kits compatible with
                  SCI Digital series, covering fields including oncology,
                  infectious diseases, and genetic disorders.</b
                >
              </li>
              <li>
                <b
                  >Proprietary innovative technologies: Ultra-Multiplex and
                  Perfect ARMS<sup>TM</sup> technologies.</b
                >
              </li>
              <li>
                <b
                  >We not only offer our own developed kits but, more
                  importantly, assist partners by co-development or
                  customization for diverse applications.</b
                >
              </li>
            </ul>
          </div>
          <div class="main-btns">

            <router-link :to="{ path: '/instruments', query: { page: $route.query.page } }" class="main-btn catalog">View all instruments</router-link>
          </div>
        </div>
      </div>
    </template>

      <!-- 面包屑导航 -->

      <!-- 顶部主模块：左图右文按钮 -->


      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title">Detailed Introduction</h2>
        <div class="section-highlight-block">
          <span
            >Compared to qPCR, digital PCR achieves not only higher sensitivity
            but also absolute quantification when detecting gene
            mutations.</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            >Turtle Technology focuses on the innovation and application of
            digital PCR platforms, with a core team possessing 20 years of
            technical expertise and extensive experience in the development,
            validation, and production of digital PCR test kits. We provide
            support to clients from various fields, including life science
            projects, clinical diagnostics, and drug development, by detecting
            target nucleic acids in blood or other biological samples. Our areas
            of interest cover various specific sequences, from protein-coding
            regions to diverse biological sources, such as tumors,
            microorganisms, embryos, iPS cells, and environmental DNA.</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            >In addition, Turtle Technology's groundbreaking
            <a
              href="http://www.turtle-tech.com.cn/technology-en/"
              target="_blank"
              title="Exponential Ultra-Multiplex Digital PCR Technology"
              ><b>Exponential Ultra-Multiplex Technology</b></a
            >
            allows the simultaneous detection of far more targets than the
            number of fluorescence channels, greatly expanding the application
            scope of PCR. It can even partially replace expensive NGS for
            certain tests, achieving the effect of "<b>qPCR-PLUS/NGS-SHARP</b>"
            providing clients with more possibilities and driving industry
            development.</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            >Turtle Technology has already developed a series of test kits, but
            more importantly, we support partners in co-development and
            customization based on our platform. Partners who have previously
            developed qPCR assay kits can easily adapt to our dPCR systems with
            minimal optimization, as the platform is backward compatible,
            enabling a swift and straightforward transition. We will always
            strive to help our partners move from traditional qPCR to the new
            era of digital PCR!</span
          >
        </div>
        <div class="section-highlight-block">
          <b
            >Turtle Tech's Proprietary Digital PCR Detection Kits - Product
            Catalog</b
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog1"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 1"
            @click="openPreview(imgCatalog1)"
          />
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog2"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 2"
            @click="openPreview(imgCatalog2)"
          />
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog3"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 3"
            @click="openPreview(imgCatalog3)"
          />
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog4"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 4"
            @click="openPreview(imgCatalog4)"
          />
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog5"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 5"
            @click="openPreview(imgCatalog5)"
          />
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog6"
            class="section-img previewable"
            alt="Digital PCR Detection Kits Catalog 6"
            @click="openPreview(imgCatalog6)"
          />
        </div>
        <div class="section-highlight-block">
          <b
            >Quantitative PCR/Digital PCR - Food Safety Pathogen Detection -
            Product Catalog</b
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgFoodSafety"
            class="section-img previewable"
            alt="Food Safety Pathogen Detection Catalog"
            @click="openPreview(imgFoodSafety)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="javascript:;">Prev：None</a>
        <a
          class="next"
          href="/instrumentDetail/28-plex_Respiratory_Pathogen_Detection_Kit"
          >Next：28-plex Respiratory Pathogen Detection Kit</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Digital PCR Panel Catalog" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10001.jpeg";
import imgCatalog1 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10002.png";
import imgCatalog2 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10003.png";
import imgCatalog3 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10004.png";
import imgCatalog4 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10005.png";
import imgCatalog5 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10006.png";
import imgCatalog6 from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10007.png";
import imgFoodSafety from "@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10008.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>

<style scoped>
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

/* 移动端优化 */
@media (max-width: 900px) {

  .catalog-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    margin: 20px 0 !important;
  }

  .catalog-item {
    padding: 16px !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
    background: #f8f9fa !important;
    text-align: center;
  }

  .catalog-item img {
    width: 100% !important;
    max-width: 250px !important;
    height: auto !important;
    border-radius: 8px !important;
    margin-bottom: 12px !important;
  }

  .catalog-item h3 {
    font-size: 1.1rem !important;
    margin-bottom: 8px !important;
    color: #1976d2 !important;
  }

  .catalog-item p {
    font-size: 0.85rem !important;
    line-height: 1.5 !important;
    color: #555 !important;
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
}
</style>
