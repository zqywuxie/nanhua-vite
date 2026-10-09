<template>
  <CatalogContent title="Magnetic Rack" family="Reagent">
    <div class="magnetic-rack-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
    <section v-if="tab==='intro'">
      <h2 class="section-title">Product Introduction</h2>
      <p>
        Magnetic Rack is used in conjunction with the BioMagnetics Microspheres, achieving efficient separation of target substances, fast adsorption speed, and shortening the experimental waiting time. Suitable for 2ml centrifuge tubes.
      </p>
      <div class="divider"></div>
      <h2 class="section-title">Equipment</h2>
      <ul>
        <li>Magnetic Rack for 2ml Centrifuge Tubes</li>
      </ul>
      <div class="img-center">
        <img role="button" tabindex="0" aria-label="Enlarge image" class="main-img" :src="magneticRackImg" alt="Magnetic Rack product image" />
      </div>
    </section>
    <section v-if="tab==='manual'" class="catalog-resources">
      <h2 class="section-title">Product Manuals</h2>
      <ul>
        <li>
          <a :href="catalogPdf0" target="_blank" rel="noopener noreferrer">Magnetic Rack Manual (PDF)</a>
        </li>
      </ul>
    </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-10/MagneticRack-Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import magneticRackImg from "@/assets/Reagent/diagnosis/diagnosis-10/10001.png";

const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.manual-link {
  display: inline-block;
  margin-top: 16px;
  color: #409eff;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.manual-link:hover {
  color: #223a5e;
}
</style>
