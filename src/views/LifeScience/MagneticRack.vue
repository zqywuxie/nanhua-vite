<template>
  <CatalogContent title="Magnetic Rack" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
    <section v-if="currentTab === 'intro'" class="intro">
      <h2 class="section-title">Product Introduction</h2>
      <p >VDO 5 mL single-tube ultra-strong magnetic rack is specially designed for column-free cell sorting. It adopts a high-strength magnetic pole structure, which can quickly and efficiently adsorb magnetically labeled cells or bead-cell complexes. Suitable for 5 mL standard centrifuge tubes, compatible with various cell sorting experiments, easy to operate, no complex consumables required, and significantly improves sorting efficiency.</p>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img1" alt="5 mL Single-Tube Ultra-Strong Magnetic Rack Product Image" class="intro-img" />
        <div style="color:#888;font-size:14px;margin-top:8px;">5 mL Single-Tube Ultra-Strong Magnetic Rack Product Image</div>
      </div>
      <div class="divider"></div>
      <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
        <li>Ultra-strong magnetic force: Quickly and efficiently capture target cells or beads, reducing sample loss.</li>
        <li>Easy operation: No need for sorting columns, directly adsorbs beads in 5 mL centrifuge tubes, simplifies workflow, saves time.</li>
        <li>Strong compatibility: Fits standard 5 mL centrifuge tubes, suitable for various magnetic bead sorting kits and automation systems.</li>
        <li>Stable and reliable: Uniform magnetic force distribution ensures sorting consistency and improves experimental reproducibility.</li>
      </ul>
      <div class="divider"></div>
      <h2 class="section-title">Product List</h2>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img2" alt="5 mL Single-Tube Ultra-Strong Magnetic Rack Product List" class="intro-img" />
        <div style="color:#888;font-size:14px;margin-top:8px;">5 mL Single-Tube Ultra-Strong Magnetic Rack Product List</div>
      </div>
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
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
import img2 from "@/assets/LifeScience/cell/cell-4/6fdd06278acf403f92cd7198b1ab1840.png";
import img1 from "@/assets/LifeScience/cell/cell-4/9caf925979464f089ebe8d2bd294a910.png";
</script>

<style scoped>
/* 统一图片样式和预览弹窗样式 */
</style>
