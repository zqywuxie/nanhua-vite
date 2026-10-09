<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Quantitative PCR/Digital PCR-Food Safety Pathogen Detection"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Quantitative PCR/Digital PCR-Food Safety Pathogen Detection
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b>Food Safety</b>: Applicable for food safety testing,
                environmental and animal monitoring, as well as precision
                analysis in research laboratories.
              </li>
              <li>
                <b>Broad Coverage</b>: Detects over 50 types of pathogens,
                including gastrointestinal, respiratory, foodborne, and
                environment-related bacteria, viruses, and fungi.
              </li>
              <li>
                <b>Dual Technology Approach</b>: Fluorescence PCR enables rapid
                large-scale screening, while digital PCR offers high-sensitivity
                absolute quantification for low-load samples.
              </li>
              <li>
                <b>Reliable Performance</b>: Digital PCR features strong
                resistance to inhibitors and precise quantification, ensuring
                accurate results even with complex samples.
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
            >Turtle Technology has launched a comprehensive food safety pathogen
            detection program, covering over 50 targets from common bacteria
            such as Salmonella, Staphylococcus aureus, and E. coli O157, to
            Vibrio cholerae, Campylobacter, pathogenic E. coli subtypes,
            norovirus, rotavirus, adenovirus, and various fungi (e.g.,
            Aspergillus, Cryptococcus). The platform supports both streamlined
            screening via quantitative PCR and high-sensitivity, absolute
            quantification through digital PCR, enabling versatile applications
            in public health surveillance, food safety assurance, and clinical
            diagnostics.</span
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Quantitative PCR/Digital PCR-Food Safety Pathogen Detection Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="/instrumentDetail/Other_Pathogen_Detection_Kits"
          >Prev：Other Pathogen Detection Kits</a
        >
        <a class="next" href="#">Next：None</a>
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Quantitative PCR/Digital PCR-Food Safety Pathogen Detection" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Quantitative_PCR/10001.jpg";
import imgCatalog from "@/assets/instrumentsDetail/Quantitative_PCR/10002.png";
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
