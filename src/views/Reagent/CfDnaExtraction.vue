<template>
  <CatalogContent title="cfDNA Extraction" family="Reagent">
    <div class="cf-dna-extraction-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Introduction</h2>
          <section class="intro">
            <p>
              Liquid biopsy technology based on NGS has been widely used in
              clinical practice as one of the core technologies in precision
              medicine. The efficient extraction and purification of cfDNA are
              the solid foundation to ensure accurate and reliable detection
              results. However, due to the extremely low concentration of cfDNA
              in plasma and the complexity of biological samples, efficient
              cfDNA extraction is not easy. For Bio specifically developed cfDNA
              extraction magnetic beads for this type of plasma sample, with
              excellent nucleic acid capture ability and elution efficiency,
              with fast magnetic response while maintaining good dispersion and
              extremely low non-specific adsorption, is an ideal choice for
              cfDNA purification.
            </p>
          </section>
          <div class="divider"></div>
          <h2 class="section-title">Features</h2>
<ul class="catalog-features">
            <li>Large specific surface area, strong binding ability</li>
            <li>
              Superparamagnetic microspheres, excellent resuspension performance
            </li>
            <li>
              Special surface modification, strong nucleic acid adsorption
              ability and easy elution
            </li>
            <li>
              Fast magnetic response, fast magnetic absorption, no magnetic
              residue
            </li>
            <li>
              Single batch supply of hundreds of liters, small batch-to-batch
              difference, high repeatability
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Effect Comparison</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgCompare"
            alt="cfDNA effect comparison"
            class="preview-img"
          />
          <p>
            Compared to A company and B company, VDO magnetic microsphere
            extraction of cfDNA is superior to A company and B company in yield
            and purity (using quantum dot quantification, Agilent Bioanalyzer
            2100 for fragment analysis)
          </p>
        </section>
        <section v-if="tab === 'order'">
          <div class="divider"></div>
          <section class="order-info">
            <h2>Order Information</h2>
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgOrder"
              alt="Order Information Table"
              class="preview-img"
            />
          </section>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources">
          <section class="catalog-resources manuals">
            <h2>Product Product Manuals</h2>
            <ul>
              <li>
                <a
                  :href="catalogPdf0"
                  target="_blank"
                   rel="noopener noreferrer">MS05HC Magnetic Microsphere Product Manual (PDF)</a
                >
              </li>
              <li>
                <a
                  :href="catalogPdf1"
                  target="_blank"
                   rel="noopener noreferrer">MA200H Magnetic Microsphere Product Manual (PDF)</a
                >
              </li>
            </ul>
          </section>
        </section>
        <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-4/MS05HC.pdf?url';
import catalogPdf1 from '@/assets/Reagent/diagnosis/diagnosis-4/MA200H.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgCompare from "@/assets/Reagent/diagnosis/diagnosis-4/10014.png";
import imgOrder from "@/assets/Reagent/diagnosis/diagnosis-4/10015.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Features' },
  // { key: 'compare', label: 'Effect Comparison' },
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
