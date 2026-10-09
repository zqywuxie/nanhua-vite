<template>
  <CatalogContent title="Counting Standard Beads" family="Reagent">
    <div class="main-container">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section">
            <h2 class="section-title">Product Description</h2>
            <div class="section-divider"></div>
            <p class="section-text">
              This series of microspheres is specifically designed for the
              development, calibration, and verification of particle counting
              devices. When these instruments encounter problems or undergo
              daily maintenance, customers can use this series of products to
              verify and calibrate the instruments to ensure normal operation
              and correct data output.
            </p>
            <p class="section-text">
              The measurement process of this series strictly follows the
              measurement procedures provided by the National Institute of
              Standards and Technology (NIST). This series of microspheres has
              high NIST traceability. It can meet the requirements of ISO9000,
              ISO10012, ANSI/NCSL-Z540, and GMP/GLP traceability. Through strict
              re-suspension and particle counting detection, a microsphere
              suspension with accurate particle counts is obtained, which is an
              essential tool for calibrating particle counting instruments.
            </p>
            <div class="section-divider"></div>
            <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Polystyrene High Molecular Weight Polymer</dd></div><div><dt>Particle Size</dt><dd>1µm-10µm</dd></div><div><dt>Density</dt><dd>1.05g/cm<sup>3</sup></dd></div><div><dt>Dispersion Medium</dt><dd>Pure Water</dd></div><div><dt>Particle Refractive Index</dt><dd>1.59 (589nm Wavelength, 25℃)</dd></div><div><dt>Uniformity</dt><dd>CV&lt;3%</dd></div><div><dt>Additives</dt><dd>Trace Surface Active Agent</dd></div><div><dt>Storage Conditions</dt><dd>Store at 2-25℃, do not freeze</dd></div></dl>
          </div>
        </section>
        <section v-if="tab === 'order'">
          <div class="section">
            <h2 class="section-title">Order Information</h2>
            <div class="section-divider"></div>
            <div class="img-center">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="tableImg"
                alt="Counting Standard Beads Order Information"
                class="preview-img"
              />
            </div>
            <p class="section-text">
              Other specifications can be customized according to customer
              requirements
            </p>
            <p class="section-text">
              We can also customize drug counting microspheres, water quality
              monitoring microspheres, and low concentration counting
              microspheres according to customer requirements, welcome to
              inquire.
            </p>
          </div>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources">
          <div class="section">
            <h2 class="section-title">Manual</h2>
            <div class="section-divider"></div>
            <div class="pdf-placeholder">
              <span>No manual PDF available yet,敬请期待</span>
            </div>
          </div>
        </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import tableImg from "@/assets/Reagent/standard/standard-2/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.custom-tabs {
  display: none;
}
.section {
  margin-bottom: 48px;
}
.section-divider {
  height: 2px;
  background: #e3e8f0;
  margin: 16px 0 32px 0;
  border-radius: 1px;
}
.section-text {
  font-size: 1.08rem;
  color: #38485a;
  line-height: 1.9;
  margin-bottom: 32px;
}
.section-list {
  font-size: 1.08rem;
  color: #38485a;
  margin: 0 0 0 24px;
  padding-left: 16px;
  line-height: 2.1;
  margin-bottom: 32px;
}
.pdf-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  color: #888;
  font-size: 16px;
  flex-direction: column;
}
</style>
