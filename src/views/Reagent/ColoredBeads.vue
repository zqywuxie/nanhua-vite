<template>
  <CatalogContent title="Colored Beads" family="Reagent">
    <div class="colored-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
    <section v-if="tab==='intro'">
      <h2 class="section-title">Product Introduction</h2>
      <p>Colored beads are obtained by unique surface modification technology, which can be used for qualitative and semi-quantitative detection. This series of beads are colorful and rich, covering a rainbow series of colors, providing multiple choices to avoid interference from sample colors, and also providing effective tools for multiple chromatography detection. These products are suitable for agglutination tests, lateral flow chromatography, and other technical platforms. This series of beads can produce 500 million doses per batch, with small batch-to-batch differences, and can provide high-quality products to customers stably.</p>
      <div class="divider"></div>
      <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Main Material</dt><dd>Polystyrene High Molecular Weight Polymer</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Size Range</dt><dd>200nm—400nm</dd></div><div><dt>Surface Functional Groups</dt><dd>Carboxyl (COOH), Streptavidin (SA)</dd></div><div><dt>Additives</dt><dd>Trace Surface Active Agents</dd></div><div><dt>Storage Conditions</dt><dd>Carboxyl-modified beads are stored at 2-25℃, Streptavidin (SA)-modified beads are stored at 2-8℃, do not freeze</dd></div></dl>
      <div class="divider"></div>
      <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
        <li>Rich Functional Groups: Higher Protein Binding Capacity</li>
        <li>Higher Sensitivity: Ideal Alternative for Colloidal Gold</li>
        <li>Mass Production: Can Produce 500 Million Doses Per Batch</li>
        <li>Internal Dyeing Process: Colorful, No Dye on Surface, Easy to Coupling</li>
        <li>Customizable Production: Particle Size, Surface Functional Group Content, and Color Can Be Adjusted</li>
      </ul>
    </section>
    <section v-if="tab==='order'">
      <h2 class="section-title">Order Information</h2>
      <div class="order-imgs">
        <div v-for="(img, idx) in orderImgs" :key="idx" class="img-center">
          <p v-if="orderImgLabels[idx]">{{ orderImgLabels[idx] }}</p>
          <img role="button" tabindex="0" aria-label="Enlarge image" :src="img" :alt="orderImgLabels[idx] || 'Order Image'" class="main-img" />
        </div>
      </div>
    </section>
    <section v-if="tab==='manual'" class="catalog-resources">
      <h2 class="section-title">Manual</h2>
      <ul>
        <li><a :href="catalogPdf0" target="_blank" rel="noopener noreferrer">Colored Beads Product Manual (PDF)</a></li>
      </ul>
    </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/lateral/lateral-2/ColoredBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/lateral/lateral-1/10001.png";
import img2 from "@/assets/Reagent/lateral/lateral-1/10002.png";
import img3 from "@/assets/Reagent/lateral/lateral-1/10003.png";
import img4 from "@/assets/Reagent/lateral/lateral-1/10004.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const orderImgs = [img1, img2, img3, img4];
const orderImgLabels = [
  "Red Carboxyl Latex Beads",
  "Streptavidin Modified (SA) Red Latex Beads",
  "Blue Latex Beads",
  "Black Carboxyl Latex Beads",
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
