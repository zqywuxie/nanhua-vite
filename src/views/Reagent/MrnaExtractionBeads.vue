<template>
  <CatalogContent title="mRNA Extraction &amp; Purification Magnetic Microspheres" family="Reagent">
    <div class="mrna-extraction-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Oligo(dT) Magnetic Microspheres are suitable for rapid separation of
            high-purity complete mRNA from eukaryotic cell total RNA or from
            cell, animal, and plant tissue homogenates. The purified mRNA can be
            directly used for most molecular biological downstream applications,
            such as RT-PCR, solid-phase cDNA library construction, S1 nucleic
            acid analysis, ribonucleic acid protection analysis, primer
            extension, dot blotting,体外转录实验, RACE, splicing hybridization,
            Northern analysis, gene cloning, gene expression analysis, etc.
          </p>
          <div class="main-img" style="text-align: center; margin: 20px 0">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgMain"
              alt="mRNA Extraction Process"
              class="preview-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Performance Characteristics</h2>
<ul class="catalog-features">
            <li>
              Superparamagnetic Microspheres, Excellent Separation Performance
            </li>
            <li>Low Non-Specific Adsorption, Ensuring mRNA Purity</li>
            <li>
              Uniform Microsphere Size, Stable Surface Groups, Good Experimental
              Reproducibility
            </li>
            <li>
              Low Sedimentation Rate and High Magnetic Content Ensure Rapid
              Magnetic Separation
            </li>
            <li>
              Scalable Supply, Small Batch-to-Batch Variation, Ensuring
              Consistent Test Results
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Iron Oxide</dd></div><div><dt>Particle Size</dt><dd>1μm</dd></div><div><dt>Surface Groups</dt><dd>Oligo（dT）</dd></div><div><dt>Density</dt><dd>1.4g /cm<sup>3</sup></dd></div><div><dt>Storage Solution</dt><dd>PBS pH 7.4</dd></div><div><dt>Storage Temperature</dt><dd>2-8℃, Do Not Freeze</dd></div></dl>
        </section>
        <section v-if="tab === 'order'" class="order-info">
          <h2>Order Information</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgOrder"
            alt="Order Information Table"
            class="preview-img"
          />
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manuals">
          <h2>Product Product Manuals</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">MS05T Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf1"
                target="_blank"
                 rel="noopener noreferrer">MS04T Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
          </ul>
        </section>
        <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-3/MS05T.pdf?url';
import catalogPdf1 from '@/assets/Reagent/diagnosis/diagnosis-3/MS04T.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgMain from "@/assets/Reagent/diagnosis/diagnosis-3/10013.png";
import imgOrder from "@/assets/Reagent/diagnosis/diagnosis-3/10014.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Performance Characteristics' },
  // { key: 'specs', label: 'Technical Parameters' },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
