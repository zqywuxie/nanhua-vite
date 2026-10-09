<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit
            Series
          </h1>
          <div class="main-desc">
            <ul>
              <li><b>Technological Breakthrough, Globally Leading</b></li>
              <li><b>Beads-free & Column-free</b></li>
              <li>
                <b
                  >Reverse adsorption technology for highly efficient
                  enrichment</b
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
            >Small Samples, Big Potential - Making Every Micro-sample
            Count</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            >Reverse Adsorption Tech: Like a Black Hole for Impurities, Leaving
            Pure Nucleic Acids in 6-9 minutes</span
          >
        </div>
        <div class="section-highlight-block">
          <b>Product Features</b>
          <ul>
            <li>
              <b>Ultra-Fast & Efficient:</b> No centrifugation required, highly
              integrated consumables eliminate long waits
            </li>
            <li>
              <b>Micro-Sample Optimized:</b> Effective extraction from
              ultra-trace samples
            </li>
            <li>
              <b>Easy Integration:</b> Low cost, simple workflow,
              automation-friendly
            </li>
            <li>
              <b>High Purity Output:</b> Sufficient purity for all downstream
              applications
            </li>
            <li>
              <b>Broad Compatibility:</b> Works with various common sample types
            </li>
          </ul>
        </div>
        <div class="section-highlight-block">
          <b>Product Catalog</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Product Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="javascript:;">Prev：None</a>
        <a class="next" href="javascript:;">Next：None</a>
      </div>


    <InstrumentImagePreview v-model="previewImg" title="UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series/10001.jpg";
import imgCatalog from "@/assets/instrumentsDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series/10002.png";
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
