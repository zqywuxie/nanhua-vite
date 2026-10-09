<template>
  <CatalogContent title="Time Resolved Beads" family="Reagent">
    <div class="time-resolved-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Time Resolved Fluorescent Beads are nanometer particles containing
            rare earth elements (Eu), with long fluorescence lifetime, large
            Stokes shift, and stable properties. High-signal time-resolved
            fluorescent beads are particularly suitable for the development of
            ultra-high sensitivity immunochromatography products, with higher
            signal intensity and sensitivity compared to ordinary time-resolved
            fluorescent beads, and can meet the trace detection requirements of
            the analyte, achieving accurate detection.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>
              Easy to operate: short detection time, suitable for on-site
              detection
            </li>
            <li>
              High sensitivity: higher signal intensity, larger signal-to-noise
              ratio
            </li>
            <li>
              Quantitative detection: specific concentration of the analyte can
              be given based on the built-in standard curve
            </li>
            <li>
              Strong anti-interference: rare earth ion-labeled compounds, long
              half-life, large Stokes shift
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>polymeric polymer containing rare earth elements</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Size range</dt><dd>200nm—400nm</dd></div><div><dt>Surface functional groups</dt><dd>carboxyl (COOH), streptavidin (SA)</dd></div><div><dt>Additives</dt><dd>trace surface active agents</dd></div><div><dt>Storage conditions</dt><dd>carboxyl-modified beads stored at 2-25℃,
              streptavidin (SA)-modified beads stored at 2-8℃, do not freeze</dd></div></dl>
        </section>
        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <div class="order-imgs">
            <div v-for="(img, idx) in orderImgs" :key="idx" class="img-center">
              <p v-if="orderImgLabels[idx]">{{ orderImgLabels[idx] }}</p>
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img"
                :alt="orderImgLabels[idx] || 'Order Image'"
                class="main-img"
              />
            </div>
          </div>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources">
          <h2 class="section-title">Manual</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">Time Resolved Fluorescent Beads Product Manual (PDF)</a
              >
            </li>
          </ul>
        </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/lateral/lateral-4/TimeResolvedBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/lateral/lateral-4/10001.png";
import img2 from "@/assets/Reagent/lateral/lateral-4/10001.png";
import img3 from "@/assets/Reagent/lateral/lateral-4/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const orderImgs = [img1, img2, img3];
const orderImgLabels = [
  "Carboxyl-modified Time Resolved Fluorescent Beads",
  "Streptavidin (SA)-modified Time Resolved Fluorescent Beads",
  "High-signal Carboxyl-modified Time Resolved Fluorescent Beads",
];
</script>

<style scoped>
.order-imgs {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 24px;
  margin-top: 24px;
}
.order-imgs > div {
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
