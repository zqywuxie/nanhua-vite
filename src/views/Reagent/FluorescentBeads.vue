<template>
  <CatalogContent title="Fluorescent Beads" family="Reagent">
    <div class="fluorescent-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            The fluorescence dye is embedded within the microsphere, filling it
            densely and firmly. In addition, this series of fluorescent
            microspheres have the characteristics of strong fluorescence
            intensity and stable constant, which have obvious advantages for the
            development of quantitative detection reagents. This series of
            products is particularly suitable for the research and large-scale
            production of lateral flow layer separation reagents, as well as for
            focusing microscopy, cell biology, biosensors, biochips,
            microfluidics and other technical platforms.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>Internal dye embedding process: filling densely and firmly</li>
            <li>
              Strong fluorescence intensity and stable constant: improving
              detection precision
            </li>
            <li>
              Sufficient surface functional groups: can efficiently conjugate
              sufficient target proteins
            </li>
            <li>
              Uniform particle size and stable surface functional groups: good
              experimental reproducibility
            </li>
            <li>
              Can achieve large-scale supply and stable performance: single
              batch capacity can reach 50L
            </li>
            <li>
              Customizable microsphere size and surface functional groups:
              meeting customer's different product development needs
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>high-brightness fluorescent polystyrene polymer</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Size range</dt><dd>200nm—400nm</dd></div><div><dt>Surface functional groups</dt><dd>carboxyl (COOH), streptavidin (SA)</dd></div><div><dt>Additives</dt><dd>trace surface active agents</dd></div><div><dt>Storage conditions</dt><dd>carboxyl-modified microspheres are stored at
              2-25℃, streptavidin (SA)-modified microspheres are stored at 2-8℃,
              do not freeze</dd></div></dl>
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
                 rel="noopener noreferrer">Fluorescent Microsphere Product Manual (PDF)</a
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
import catalogPdf0 from '@/assets/Reagent/lateral/lateral-3/FluorescentBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/lateral/lateral-3/10001.png";
import img2 from "@/assets/Reagent/lateral/lateral-3/10002.png";
import img3 from "@/assets/Reagent/lateral/lateral-3/10003.png";
import img4 from "@/assets/Reagent/lateral/lateral-3/10004.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const orderImgs = [img1, img2, img3, img4];
const orderImgLabels = [
  "Carboxyl Green Fluorescent Microsphere",
  "Streptavidin (SA) Modified Green Fluorescent Microsphere",
  "Carboxyl Red Fluorescent Microsphere (Customizable)",
  "Streptavidin (SA) Modified Red Fluorescent Microsphere (Customizable)",
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
