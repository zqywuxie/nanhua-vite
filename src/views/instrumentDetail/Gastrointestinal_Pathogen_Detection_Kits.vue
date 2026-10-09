<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Gastrointestinal Pathogen Detection Kits"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Gastrointestinal Pathogen Detection Kits
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Based on advanced digital PCR technology, quickly and
                  accurately detect various gastrointestinal pathogens.</b
                >
              </li>
              <li>
                <b
                  >High sensitivity and specificity, capable of detecting low
                  loads, which helps in the timely diagnosis and control of
                  infectious diseases.</b
                >
              </li>
              <li>
                <b
                  >Supports simultaneous detection of multiple pathogens,
                  significantly improving detection efficiency and reducing
                  sample processing time.</b
                >
              </li>
              <li>
                <b
                  >Suitable for research applications, public health disease
                  control monitoring, and diagnostics, helping medical
                  institutions quickly respond to public health crises.</b
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
            >The Multiplex and Ultra-Multiplex gastrointestinal pathogen
            detection kits from Turtle Technology utilizes digital PCR
            technology for efficient detection of various pathogens. The high
            sensitivity and specificity ensure accurate detection results even
            at low loads, providing powerful tools for clinical diagnosis and
            disease control surveillance. The kits' multiplex detection
            capability and simple operation process make them essential tools
            for controlling the spread of gastrointestinal pathogenic
            diseases.</span
          >
        </div>
        <div class="section-highlight-block">
          <b>Product Catalog:</b>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog"
            class="section-img previewable"
            alt="Gastrointestinal Pathogen Detection Kits Catalog"
            @click="openPreview(imgCatalog)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="/instrumentDetail/Tumor_Detection_Kits"
          >Prev：Tumor Detection Kits</a
        >
        <a class="next" href="/instrumentDetail/Genetic_Disease_Detection_Kits"
          >Next：Genetic Disease Detection Kits</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Gastrointestinal Pathogen Detection Kits" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Gastrointestinal_Pathogen_Detection_Kits/10001.jpeg";
import imgCatalog from "@/assets/instrumentsDetail/Gastrointestinal_Pathogen_Detection_Kits/10002.png";
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
