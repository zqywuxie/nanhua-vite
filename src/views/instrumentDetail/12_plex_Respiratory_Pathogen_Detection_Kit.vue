<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="12-plex Respiratory Pathogen Detection Kit"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            12-plex Respiratory Pathogen Detection Kit
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Simultaneous detection of 12 respiratory pathogens on a
                  single chip</b
                >
              </li>
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
            >Based on <b>Exponential Ultra-Multiplex Digital PCR Technology</b>,
            achieving precise quantitative detection! Covers 12 respiratory
            pathogens, capable of differentiating influenza A/B and
            SARS-CoV-2.</span
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
        <div class="section-highlight-block">
          <b>Key Features:</b>
        </div>
        <div class="section-highlight-block">
          <ul>
            <li>
              <b>Ultra-Multiplex, faster detection:</b> 12 pathogens in a single
              test, rapid and accurate; fulfilling disease control testing
              demands
            </li>
            <li>
              <b>More accurate:</b> Accurate quantification of pathogen load
            </li>
            <li>
              <b>Super low cost:</b> Multiple pathogen detection at minimal cost
              on just 1 chip
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
        <div class="section-highlight-block">
          <b>Sampling Method:</b> Nasal Swab, Throat Swab
        </div>
        <div class="section-highlight-block">
          <b>Compatible Device:</b> SCI Digital
        </div>
        <div class="section-highlight-block">
          <b>Test Targets:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgTargets"
            class="section-img previewable"
            alt="Test Targets"
            @click="openPreview(imgTargets)"
          />
        </div>
        <div class="section-highlight-block">
          <b>Product Components:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgComponents"
            class="section-img previewable"
            alt="Product Components"
            @click="openPreview(imgComponents)"
          />
        </div>
        <div class="section-highlight-block">
          <b>Sample Report:</b>
        </div>
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
        <a
          class="prev"
          href="/instrumentDetail/28_plex_Respiratory_Pathogen_Detection_Kit"
          >Prev：28-plex Respiratory Pathogen Detection Kit</a
        >
        <a class="next" href="/instrumentDetail/Tumor_Detection_Kits"
          >Next：Tumor Detection Kits</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="12-plex Respiratory Pathogen Detection Kit" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/12-plex_Respiratory_Pathogen_Detection_Kit/10001.jpeg";
import imgTech from "@/assets/instrumentsDetail/12-plex_Respiratory_Pathogen_Detection_Kit/10002.png";
import imgTargets from "@/assets/instrumentsDetail/12-plex_Respiratory_Pathogen_Detection_Kit/10003.png";
import imgComponents from "@/assets/instrumentsDetail/12-plex_Respiratory_Pathogen_Detection_Kit/10004.png";
import imgReport from "@/assets/instrumentsDetail/12-plex_Respiratory_Pathogen_Detection_Kit/10005.png";
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
