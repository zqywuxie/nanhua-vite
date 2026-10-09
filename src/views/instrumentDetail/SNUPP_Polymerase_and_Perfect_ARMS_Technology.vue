<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="SNUPP Polymerase and Perfect-ARMS Technology"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            SNUPP Polymerase and Perfect-ARMS Technology
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Ultra-high specific DNA polymerase for single base mismatch
                  discrimination</b
                >
              </li>
              <li>
                <b>Reduces non-specific amplification in NTC and samples</b>
              </li>
              <li>
                <b
                  >Widely used in SNP analysis, genotyping, tumor mutation
                  detection, pathogen detection, gene editing, and more</b
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
            >SNUPP is an ultra-high specific DNA polymerase that can identify
            single base mismatches with high precision, thus reducing the
            non-specific amplification of NTC and samples. It can be widely used
            in SNP analysis, genotyping, tumor mutation detection, pathogen
            detection, gene editing detection, and more.</span
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgTech"
            class="section-img previewable"
            alt="SNUPP Technology"
            @click="openPreview(imgTech)"
          />
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Perfect-ARMS Technology</h2>
        <div class="section-img-row">
          <img
            :src="imgARMS"
            class="section-img previewable"
            alt="Perfect-ARMS Technology"
            @click="openPreview(imgARMS)"
          />
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="javascript:;">Prev：None</a>
        <a class="next" href="javascript:;">Next：None</a>
      </div>


    <InstrumentImagePreview v-model="previewImg" title="SNUPP Polymerase and Perfect-ARMS Technology" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology/10001.jpg";
import imgTech from "@/assets/instrumentsDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology/10002.png";
import imgARMS from "@/assets/instrumentsDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology/10003.png";
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
