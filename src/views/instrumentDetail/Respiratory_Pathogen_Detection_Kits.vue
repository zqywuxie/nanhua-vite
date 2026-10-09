<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Respiratory Pathogen Detection Kits"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Respiratory Pathogen Detection Kits
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Based on digital PCR technology, the kits can simultaneously
                  detect multiple common respiratory pathogens, including
                  viruses and bacteria.</b
                >
              </li>
              <li>
                <b
                  >With high sensitivity and specificity, it can detect low
                  levels of pathogen infection at early stages, providing
                  support for timely diagnosis and treatment.</b
                >
              </li>
              <li>
                <b
                  >Suitable for clinical diagnosis, epidemiological research,
                  and public health disease control monitoring.</b
                >
              </li>
              <li>
                <b
                  >The kits help medical institutions quickly identify and
                  respond to respiratory infections, especially during flu
                  seasons or outbreaks.</b
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
            >The Multiplex and Ultra-Multiplex respiratory pathogen detection
            kits combine digital PCR technology to achieve simultaneous
            detection of various common respiratory pathogens. The efficient
            multiplex detection capability and exceptional sensitivity play a
            crucial role in the early diagnosis of respiratory infections,
            making the kits particularly suitable for rapid response during flu
            seasons and outbreaks.</span
          >
        </div>
        <div class="section-highlight-block">
          <b>Product Catalog:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Respiratory Pathogen Detection Kits Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="/instrumentDetail/Genetic_Disease_Detection_Kits"
          >Prev：Genetic Disease Detection Kits</a
        >
        <a
          class="next"
          href="/instrumentDetail/Trauma_and_Vector-borne_Pathogen_Detection_Kits"
          >Next：Trauma and Vector-borne Pathogen Detection Kits</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Respiratory Pathogen Detection Kits" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Respiratory_Pathogen_Detection_Kits/10001.jpeg";
import imgCatalog from "@/assets/instrumentsDetail/Respiratory_Pathogen_Detection_Kits/10002.png";
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
