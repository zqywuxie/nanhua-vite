<template>
  <CatalogContent title="Latex Turbidimetry" family="Reagent">
    <div class="latex-turbidimetry-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Introduction</h2>
          <div class="base-richtext">
            <p>
              WeiDu Bio-Latex Microspheres are based on Polystyrene, featuring
              unique surface modification technology to endow microspheres with
              different functional groups, and the number of functional groups
              can be controlled. We can provide customized services to prepare
              microspheres of various sizes to meet customer requirements for
              sensitivity and linearity. This series of latex microspheres have
              a wide range of applications, such as "Particle Enhanced
              Immuno-Nephelometry (PET)", "Latex Agglutination Test", and
              "Microsphere-Captured Enzyme-Linked Immunosorbent Assay".
            </p>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product Features</h2>
<ul class="catalog-features feature-list">
            <li>
              Sufficient Functional Groups: Can Efficiently Couple Sufficient
              Target Proteins
            </li>
            <li>
              Uniform Particle Size, Stable and Controllable Functional Groups:
              Good Reproducibility
            </li>
            <li>
              Can Achieve Mass Production, Single Batch Capacity Can Reach Over
              100L: Small Batch-to-Batch Variation, Stable Supply
            </li>
            <li>
              Can Customize Microsphere Particle Size and Surface Functional
              Groups: Meet Customer Different Product Development Needs
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Polystyrene Polymer</dd></div><div><dt>Density</dt><dd>1.05g/cm³</dd></div><div><dt>Additives</dt><dd>Trace Surface Active Agents</dd></div><div><dt>Microsphere Refractive Index</dt><dd>1.59 (589nm Wavelength, 25℃)</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Particle Size</dt><dd>80nm ~ 400nm</dd></div><div><dt>Dispersion Medium</dt><dd>Purified Water</dd></div><div><dt>Storage Conditions</dt><dd>Store at 2-25℃, Do Not Freeze</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Types of Latex Turbidimetry</h2>
          <ul class="feature-list">
            <li>Carboxylate Latex Microspheres</li>
          </ul>
        </section>
        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Order Information"
              class="main-img"
            />
          </div>

        </section>
      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/Latex/Latex-1/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
];
const tab = ref("intro");
</script>

<style scoped>
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
