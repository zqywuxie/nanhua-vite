<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Other Pathogen Detection Kits"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Other Pathogen Detection Kits
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Based on digital PCR technology, these kits enable the
                  simultaneous detection of multiple critical pathogens,
                  providing a rapid and accurate diagnostic tool.</b
                >
              </li>
              <li>
                <b
                  >With high sensitivity and specificity, they ensure precise
                  and timely results even at low pathogen loads, supporting
                  early-stage diagnosis.</b
                >
              </li>
              <li>
                <b
                  >Suitable for research institutions and clinical laboratories,
                  the kits facilitate accurate diagnostics.</b
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
            >Leveraging its mature multiplex digital PCR platform, Turtle
            Technology has launched a series of digital PCR detection kits
            capable of simultaneously and precisely detecting multiple
            pathogens. These kits offer ultra-high sensitivity and specificity,
            support absolute quantification, and are ideal for early diagnosis.
            Multiplex detection significantly enhances laboratory efficiency,
            delivering a reliable, integrated solution for both clinical and
            research applications.</span
          >
        </div>
        <div class="section-highlight-block">
          <b>Product Catalog:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Other Pathogen Detection Kits Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a
          class="prev"
          href="/instrumentDetail/Trauma_and_Vector_borne_Pathogen_Detection_Kits"
          >Prev：Trauma and Vector-borne Pathogen Detection Kits</a
        >
        <a
          class="next"
          href="/instrumentDetail/Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection"
          >Next：Quantitative PCR/Digital PCR-Food Safety Pathogen Detection</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Other Pathogen Detection Kits" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Other_Pathogen_Detection_Kits/1750323530690334.jpeg";
import imgCatalog from "@/assets/instrumentsDetail/Other_Pathogen_Detection_Kits/1750323510350915.png";
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

  .navigation-section {
    margin-top: 40px !important;
    padding: 20px !important;
    background: #f8f9fa !important;
    border-radius: 12px !important;
  }

  .nav-links {
    flex-direction: column !important;
    gap: 12px !important;
  }

  .nav-link {
    padding: 12px 16px !important;
    font-size: 0.9rem !important;
    border-radius: 8px !important;
    text-align: center !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .nav-link:active {
    transform: scale(0.98) !important;
  }
}
</style>
