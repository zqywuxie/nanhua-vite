<template>
  <CatalogContent title="Absolute Counting Beads" family="Reagent">
    <div class="absolute-counting-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Description</h2>
          <div class="base-richtext">
            <p>
              This series of products is specifically developed for absolute
              cell counting applications, suitable for flow cytometers and cell
              counters. By comparing the number of cells (or other particles)
              with the number of microspheres, the absolute value of cells or
              other particles can be determined.
            </p>
            <p>
              This series of products includes non-fluorescent series (FC) and
              fluorescent series (FM) absolute counting microspheres. The
              non-fluorescent absolute counting microspheres are blank
              carboxylated polystyrene microspheres, suitable for single cell or
              particle counting. The fluorescent absolute counting microspheres
              are carboxylated polystyrene microspheres embedded with
              fluorescent dyes, with multiple combinations (FITC, PE, APC) of
              internal fluorescent dyes available for selection, suitable for
              different cell categories and absolute counting after subsequent
              labeling.
            </p>
          </div>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Absolute Counting Microspheres Schematic"
              class="main-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Particle Size</dt><dd>7μm</dd></div><div><dt>Fluorescence Channel</dt><dd>FITC/PE/APC</dd></div><div><dt>Particle Count</dt><dd>1x10<sup>6</sup> Count/Tube</dd></div><div><dt>Dispersion</dt><dd>Good</dd></div></dl>
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

        </section>
        <section v-if="tab === 'manual'" class="catalog-resources">
          <h2 class="section-title">Manual</h2>
          <div class="base-richtext">
            <ul>
              <li>
                <a
                  :href="catalogPdf0"
                  target="_blank"
                   rel="noopener noreferrer">Flow Microspheres - Absolute Counting Microspheres Manual
                  (PDF)</a
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
import catalogPdf0 from '@/assets/Reagent/cytometric/cytometric-2/AbsoluteCountingBeads-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/cytometric/cytometric-2/10001.png";
import img2 from "@/assets/Reagent/cytometric/cytometric-2/10002.png";
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
.table-scroll {
  overflow-x: auto;
  margin: 16px 0;
}
.table-scroll table {
  min-width: 400px;
  border-collapse: collapse;
  width: 100%;
}
.table-scroll th,
.table-scroll td {
  border: 1px solid #e0e0e0;
  padding: 8px 16px;
  text-align: left;
  font-size: 14px;
}
.table-scroll th {
  background: #f7f7f7;
}
</style>
