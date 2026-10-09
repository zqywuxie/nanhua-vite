<template>
  <CatalogContent title="Magnetic Fluorescent Coded Beads" family="Reagent">
    <div class="magnetic-fluorescent-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Overview</h2>
          <div class="base-richtext">
            <p>
              Flow cytometry technology is based on flow cytometry, using one or
              more particle sizes and carrying different fluorescence signals as
              solid phase carriers, which can simultaneously detect multiple
              substances in the sample for analysis, achieving high-throughput
              detection. It has many advantages such as high throughput, wide
              linear range, high accuracy, and good repeatability. Currently,
              flow cytometry technology is widely used in clinical diagnosis and
              medical research fields, such as tumor-related diseases,
              autoimmune diseases, cardiovascular diseases, inflammatory
              infections, infectious diseases, etc., providing higher clinical
              value for disease diagnosis, treatment monitoring, and disease
              assessment. We have launched 4μm and 5μm particle size 9-plex
              Magnetic Fluorescent Coded Beads, capable of detecting 18
              indicators simultaneously. The product size is uniform and has
              superparamagnetism, making it an ideal choice for automated
              detection.
            </p>
          </div>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Magnetic Fluorescent Coded Beads Schematic"
              class="main-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features feature-list">
            <li>
              Strong fluorescence intensity and stable persistence, small CV
              within a single peak, improving detection precision
            </li>
            <li>
              Rich surface groups, capable of coupling sufficient antibodies and
              other ligands, improving detection sensitivity
            </li>
            <li>
              High-throughput detection of multiple substances simultaneously in
              the sample, ensuring detection efficiency
            </li>
            <li>
              Uniform particle size and superparamagnetism, suitable for
              automated detection platforms
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Fe<sub>3</sub>O<sub>4</sub> / PS</dd></div><div><dt>Fluorescence Channel</dt><dd>APC</dd></div><div><dt>Particle Size</dt><dd>4μm, 5μm</dd></div><div><dt>Multi-detection</dt><dd>9 single-color fluorescence</dd></div><div><dt>Particle Count</dt><dd>1.2x10<sup>8</sup> Count/mL</dd></div><div><dt>Surface Groups</dt><dd>Carboxyl (-COOH)</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Performance Verification</h2>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Performance Verification"
              class="main-img"
            />
          </div>
          <p class="img-caption">
            Distinct separation between signal peaks, small CV within a single
            peak, capable of detecting 18 indicators simultaneously.
          </p>
        </section>
        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Order Information"
              class="main-img"
            />
          </div>

        </section>
        <section v-if="tab === 'manual'" class="catalog-resources">
          <h2 class="section-title">Manual</h2>
          <div class="base-richtext">
            <ul>
              <li>
                <a
                  :href="catalogPdf0"
                  target="_blank"
                   rel="noopener noreferrer">Magnetic Fluorescent Coded Beads Product Manual (PDF)</a
                >
              </li>
            </ul>
          </div>
        </section>
      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/cytometric/cytometric-1/MagneticFluorescentBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/cytometric/cytometric-1/10001.jpg";
import img2 from "@/assets/Reagent/cytometric/cytometric-1/10002.png";
import img3 from "@/assets/Reagent/cytometric/cytometric-1/10003.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.product-tabs {
  display: none;
}
:deep(.el-tabs__nav) {
  display: none;
}
:deep(.el-tabs__item) {
  display: none;
}
:deep(.el-tabs__item.is-active) {
  display: none;
}
.base-richtext {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4664;
  margin-bottom: 18px;
}
.feature-list {
  padding-left: 24px;
  margin-bottom: 18px;
}
.feature-list li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
</style>
