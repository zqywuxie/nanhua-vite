<template>
  <CatalogContent title="Carboxyl Latex Beads" family="Reagent">
    <div class="carboxyl-latex-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Description</h2>
          <div class="base-richtext">
            <p>
              This series of latex microspheres is composed of polystyrene as
              the base material. Through unique surface modification technology,
              microspheres are equipped with different functional groups, and
              the number of functional groups can be controlled. We can provide
              customized services to prepare microspheres of various particle
              sizes to meet customer requirements for sensitivity and linear
              range. This series of latex microspheres has a wide range of
              applications, such as "Particle Enhanced Immuno-Nephelometry
              (PET)", "Solid Phase Immunoassay", "Latex Agglutination Test", and
              "Microsphere Capture Enzyme-Linked Immunosorbent Assay".
            </p>
            <p>
              This series of latex microspheres can produce batches of 100L or
              more, with small batch-to-batch differences, providing
              high-quality products for customers' large-scale production.
            </p>
          </div>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Product Image"
              class="main-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Polystyrene High Polymer</dd></div><div><dt>Particle Size</dt><dd>80 nm-400 nm</dd></div><div><dt>Surface Modification</dt><dd>Carboxyl</dd></div><div><dt>Density</dt><dd>1.05g/cm³</dd></div><div><dt>Dispersion Medium</dt><dd>Pure Water</dd></div><div><dt>Microsphere Refractive Index</dt><dd>1.59 (589nm Wavelength, 25℃)</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Additives</dt><dd>Trace Surface Active Agents</dd></div><div><dt>Storage Conditions</dt><dd>2-25℃ Storage, Do Not Freeze</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Performance Characteristics</h2>
<ul class="catalog-features feature-list">
            <li>
              Sufficient Functional Groups: Can Efficiently Couple Sufficient
              Target Proteins
            </li>
            <li>
              Uniform Particle Size and Stable Functional Group Control: Good
              Repeatability
            </li>
            <li>
              Batch Capacity Can Reach 100L or More: Small Batch-to-Batch
              Differences, Stable Supply for Large-scale Production
            </li>
            <li>
              Customizable Microsphere Particle Size and Surface Functional
              Group Number: Meet Customer's Different Product Development Needs
            </li>
          </ul>
        </section>
        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Order Information"
              class="main-img"
            />
          </div>

          <div class="base-richtext" style="margin-top: 12px">
            <span style="color: #000000; font-size: 14px"
              >Other functional groups and particle sizes can be customized
              according to customer requirements</span
            >
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
                   rel="noopener noreferrer">Latex Microsphere Product Manual (PDF)</a
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
import catalogPdf0 from '@/assets/Reagent/Latex/Latex-2/LatexBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/Latex/Latex-2/10001.png";
import img2 from "@/assets/Reagent/Latex/Latex-2/10002.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'features', label: 'Performance Characteristics' },
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
