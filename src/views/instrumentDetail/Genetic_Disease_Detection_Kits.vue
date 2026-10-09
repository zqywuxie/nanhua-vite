<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Genetic Disease Detection Kits"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Genetic Disease Detection Kits
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Utilizing digital PCR technology, focusing on genetic disease
                  screening and specific prenatal testing.</b
                >
              </li>
              <li>
                <b
                  >Non-invasive, highly sensitive, and high-precision genetic
                  testing detects genetic markers related to eugenics, helping
                  to identify potential genetic risks.</b
                >
              </li>
              <li>
                <b
                  >Widely applicable in genetic counseling, eugenics assessment,
                  and prenatal diagnosis, improving the health of newborns.</b
                >
              </li>
              <li>
                <b
                  >Achieves high sensitivity and precise genetic disease
                  screening through digital PCR technology, particularly
                  suitable for non-invasive testing.</b
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
            >Turtle Technology’s Genetic Disease Product Line offers a
            comprehensive range of digital PCR-based solutions for the accurate
            detection of inherited and rare genetic disorders. With high
            sensitivity, specificity, and absolute quantification capabilities,
            our kits support a wide array of clinical and research
            applications—from carrier screening and prenatal testing to
            postnatal diagnosis and population genetics studies. Designed to
            deliver reliable results across various sample types, these products
            empower healthcare providers and researchers with the tools needed
            to advance precision medicine and improve patient outcomes.</span
          >
        </div>
        <div class="section-highlight-block">
          <b>Product Catalog:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Genetic Disease Detection Kits Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
        <div class="section-highlight-block">
          <span
            >Note: the NIPScreen Fetal T21, T18 and T13 dPCR Amplification
            Reagent Kit need to be used with the High Density Chips.</span
          >
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a
          class="prev"
          href="/instrumentDetail/Gastrointestinal_Pathogen_Detection_Kits"
          >Prev：Gastrointestinal Pathogen Detection Kits</a
        >
        <a
          class="next"
          href="/instrumentDetail/Respiratory_Pathogen_Detection_Kits"
          >Next：Respiratory Pathogen Detection Kits</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Genetic Disease Detection Kits" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Genetic_Disease_Detection_Kits/10001.jpg";
import imgCatalog from "@/assets/instrumentsDetail/Genetic_Disease_Detection_Kits/10002.png";
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
