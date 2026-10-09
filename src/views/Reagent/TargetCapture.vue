<template>
  <CatalogContent title="Target Capture" family="Reagent">
    <div class="target-capture-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            This series of streptavidin magnetic microspheres can efficiently
            bind biotin derivatives, widely used in target capture, molecular
            hybridization, immunological detection, etc. The product has high
            binding capacity, good dispersion, and fast magnetic response speed,
            suitable for a variety of automated and high-throughput experimental
            platforms.
          </p>
          <div style="text-align: center; margin: 20px 0">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgMain"
              alt="Target Capture Main Image"
              class="preview-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>
              High Binding Capacity: Streptavidin modified, capable of
              efficiently binding biotin-labeled molecules.
            </li>
            <li>
              Good Dispersion: Microspheres surface specially treated to ensure
              good dispersion and suspension.
            </li>
            <li>
              Fast Magnetic Response: Superparamagnetic, fast magnetic
              attraction, no magnetic residue.
            </li>
            <li>
              Wide Application Range: Compatible with a variety of automated and
              high-throughput experimental platforms.
            </li>
          </ul>
        </section>
        <section v-if="tab === 'specs'" class="table-block">
          <h2>Order Information</h2>
          <div style="text-align: center; margin: 20px 0">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgTable"
              alt="Order Information Table"
              class="preview-img"
            />
          </div>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manuals">
          <h2>Product Product Manuals</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">Magnetic Microspheres (Streptavidin) Product Manual - Target
                Capture (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf1"
                target="_blank"
                 rel="noopener noreferrer">Magnetic Microspheres (Carboxyl) Product Manual - Target
                Capture (PDF)</a
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
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-7/Streptavidin-TargetCapture.pdf?url';
import catalogPdf1 from '@/assets/Reagent/diagnosis/diagnosis-7/Carboxyl-TargetCapture.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgMain from "@/assets/Reagent/diagnosis/diagnosis-7/targetcapture_main.png";
import imgTable from "@/assets/Reagent/diagnosis/diagnosis-7/targetcapture_table.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Advantages' },
  { key: "specs", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.table-block {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
@media (max-width: 900px) {
  .table-block {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
}
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
