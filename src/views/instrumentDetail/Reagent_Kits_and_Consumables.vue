<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Reagent Kits and Consumables"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Reagent Kits and Consumables
          </h1>
          <div class="main-desc">
            <p>
              <b
                >Turtle Tech offers a wide range of universal reagent kits and
                consumables, compatible with SCI Digital series, to achieve
                optimal dPCR performance and ensure the reliability of
                experimental results.</b
              >
            </p>
            <p>
              <b
                >These universal reagent kits and consumables provide
                comprehensive support for dPCR experiments, ensuring smooth
                procedures and accurate results.</b
              >
            </p>
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
          <span><b>Universal Reagent Kits - Product Catalog</b></span>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog1"
            class="section-img previewable"
            alt="Universal Reagent Kits Catalog"
            @click="openPreview(imgCatalog1)"
          />
        </div>
        <div class="section-highlight-block">
          <span><b>Consumables - Product Catalog</b></span>
        </div>
        <div class="section-img-row">
          <img
            :src="imgCatalog2"
            class="section-img previewable"
            alt="Consumables Catalog"
            @click="openPreview(imgCatalog2)"
          />
        </div>
      </section>
      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="javascript:;">Prev：None</a>
        <a class="next" href="javascript:;">Next：None</a>
      </div>


    <InstrumentImagePreview v-model="previewImg" title="Reagent Kits and Consumables" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Reagent Kits and Consumables/10001.png";
import imgCatalog1 from "@/assets/instrumentsDetail/Reagent Kits and Consumables/10002.png";
import imgCatalog2 from "@/assets/instrumentsDetail/Reagent Kits and Consumables/10003.png";
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
    display: flex !important;
    flex-direction: column !important;
    gap: 20px !important;
    margin: 20px 0 !important;
  }

  .catalog-item {
    width: 100% !important;
    text-align: center;
    padding: 16px !important;
    background: #f8f9fa !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .catalog-item h3 {
    font-size: 1.2rem !important;
    margin-bottom: 16px !important;
    color: #1976d2 !important;
    text-align: center !important;
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
