<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="ProteoSense™ Immunoassay Kit"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            ProteoSense™ Immunoassay Kit
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Ultrasensitive (fg/mL) quantitative detection of protein
                  targets using minimal sample volumes</b
                >
              </li>
              <li><b>Fast & Simple Workflow</b></li>
              <li><b>Compatible with Digital Omni</b></li>
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
            >The ProteoSense™ Immunoassay Kit enables ultrasensitive (fg/mL)
            quantitative detection of protein targets using minimal sample
            volumes (2-5 µL). Based on the novel Binding-Induced Oligonucleotide
            Successive Exchange and Extension Reactions (BIOSEER) proximity
            assay technology, this kit combines the specificity of high-affinity
            antibody-antigen binding with the sensitivity and amplification
            power of Digital Omni. It establishes a robust and streamlined
            next-generation single-molecule protein detection platform.
            Featuring a user-friendly workflow and simple data analysis, it
            delivers results from sample to answer in just 3 hours.</span
          >
        </div>
        <div class="section-highlight-block">
          <ul>
            <li>
              <b>Ultrahigh Sensitivity:</b> Detection limit down to fg/mL, far
              exceeding traditional methods, enabling precise detection of
              extremely low-abundance proteins.
            </li>
            <li>
              <b>Wide Dynamic Range:</b> ≥5 log units, reducing the need for
              sample dilution and ensuring concentrations fall within the
              detectable range.
            </li>
            <li>
              <b>Minimal Sample Consumption:</b> Requires only 2-5 µL (compared
              to 75 µL for triplicate wells in other methods).
            </li>
            <li>
              <b>Fast & Simple Workflow:</b> Sample-to-result in 3 hours, with
              no wash steps required.
            </li>
            <li>
              <b>Instrument Versatility:</b> Compatible with Digital Omni
              Molecular System
            </li>
          </ul>
        </div>
        <div class="section-img-row">
          <img
            :src="imgTech"
            class="section-img previewable"
            alt="BIOSEER Technology Route"
            @click="openPreview(imgTech)"
          />
        </div>
        <div class="section-highlight-block">
          <span
            >The ProteoSense™ Immunoassay Kit utilizes a pair of target-specific
            matched antibodies, each conjugated to a unique DNA oligonucleotide.
            When both antibodies bind simultaneously to the target analyte, the
            two DNA strands are brought into proximity, triggering the BIOSEER
            reaction and forming an amplifiable template strand. This platform
            leverages the inherent high sensitivity of PCR technology
            (qPCR/dPCR) and the specificity of antibody-antigen binding.</span
          >
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Product Specifications</h2>
        <div class="section-img-row">
          <img
            :src="imgSpecs"
            class="section-img previewable"
            alt="Product Specifications"
            @click="openPreview(imgSpecs)"
          />
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Product Catalog</h2>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Product Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
        <div class="section-highlight-block">
          <span
            >Additional detection targets are currently under optimization. Stay
            tuned!</span
          >
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="javascript:;">Prev：None</a>
        <a
          class="next"
          href="/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit"
          >Next：ProteoSense™ Antibody-Oligo Conjugation Kit</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="ProteoSense™ Immunoassay Kit" />
  </InstrumentDetailLayout>
</template>

<script setup>
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import { ref } from "vue";
import imgMain from "@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10001.png";
import imgTech from "@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10002.png";
import imgSpecs from "@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10003.png";
import imgCatalog from "@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10004.png";
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
