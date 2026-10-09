<template>
  <CatalogContent title="Cell Activation Magnetic Beads" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p >
            VDO Biotech provides 4.5 μm CD3 and CD28 activation magnetic beads.
            The CD3 and CD28 antibodies on the bead surface simulate the signals
            of antigen-presenting cells (APCs), strongly inducing T cell
            activation and proliferation to perform immune functions.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="CD3/CD28 Activation Magnetic Beads Product Image"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              CD3/CD28 Activation Magnetic Beads Product Image
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>
              Efficient expansion: Achieve 150-fold cell proliferation in a
              single 9-day stimulation, meeting high-yield requirements.
            </li>
            <li>
              Uniform particle size: Highly consistent bead size (CV &lt; 5%),
              clear flow cytometry grouping, stable results.
            </li>
            <li>
              Protects cell viability: Gentle activation avoids overstimulation,
              ensuring high cell viability and functionality.
            </li>
            <li>
              Easy operation: Beads are easy to separate, compatible with
              automation, reducing manual error and improving reproducibility.
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Performance Validation</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="CD3/CD28 Activation Magnetic Beads Performance Validation"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              CD3/CD28 Activation Magnetic Beads Performance Validation
            </div>
          </div>
          <p >
            After co-stimulation of T cells with VDO and competitor CD3/CD28
            activation magnetic beads, T cells can be effectively expanded. T
            cells were counted at 3, 6, and 9 days, and the results showed no
            significant difference in T cell numbers compared to competitors.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="CD3/CD28 Activation Magnetic Beads Product List"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              CD3/CD28 Activation Magnetic Beads Product List
            </div>
          </div>
        </section>
        <!-- Tab Content: Manual -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i
                  class="el-icon-document"
                  style="margin-right: 6px; color: #409eff"
                ></i
                >{{ file.name }}
              </a>
            </li>
          </ul>
        </section>
        <!-- Image Preview Modal -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
// Tab Configuration
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const currentTab = ref("intro");
// Image Resources
import img3 from "@/assets/LifeScience/cell/cell-3/dbb1359d772d4fcdb46aa33a9c95e3d1.png";
import img2 from "@/assets/LifeScience/cell/cell-3/38ccfd7cfd3b4bd2b22ede1d3a013d53.png";
import img1 from "@/assets/LifeScience/cell/cell-3/e47de1b575ad4c94bc0413dc8597a5c8.png";

const allImgs = [
  { src: img1, alt: "Cell Activation Magnetic Beads Product Image 1" },
  { src: img2, alt: "Cell Activation Magnetic Beads Product Image 2" },
  { src: img3, alt: "Cell Activation Magnetic Beads Product Image 3" },
];
// PDF Manuals
import pdf1 from "@/assets/LifeScience/cell/cell-3/CS1007.pdf";
import pdf2 from "@/assets/LifeScience/cell/cell-3/CS1008.pdf";
const manualFiles = [
  {
    name: "CS1007-Human CD3/CD28 Activation Magnetic Beads Manual.pdf",
    url: pdf1,
  },
  {
    name: "CS1008-Mouse CD3/CD28 Activation Magnetic Beads Manual.pdf",
    url: pdf2,
  },
];
// Image Preview Modal
</script>

<style scoped>
</style>
