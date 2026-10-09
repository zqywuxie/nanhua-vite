<template>
  <CatalogContent title="Cell Sorting and Activation Magnetic Beads" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p >
            Leveraging years of expertise in magnetic bead synthesis and
            antibody development, VDO Biotech has developed a series of
            superparamagnetic nano-magnetic beads with excellent
            biocompatibility, providing efficient solutions for target cell
            separation, purification, and activation for industrial and research
            customers. Currently, we offer two core product systems:
          </p>
          <ul style="font-size: 15px; margin-bottom: 0">
            <li>
              Column-based sorting beads — suitable for traditional MACS
              sorting, stable operation, strong compatibility
            </li>
            <li>
              Column-free sorting beads (with ultra-strong magnets) — simpler
              workflow, improved sorting efficiency
            </li>
          </ul>
          <p style=" margin-top: 10px">
            In addition, we offer cell activation beads that can efficiently
            stimulate T cell activation and expansion, meeting the needs of cell
            therapy, immunology research, and other applications.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Cell Sorting and Activation Magnetic Beads Product Image"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Cell Sorting and Activation Magnetic Beads Product Image
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>High safety: Naturally biodegradable materials</li>
            <li>
              Efficient and convenient: Achieve high-purity, high-recovery
              sorting in 20 minutes
            </li>
            <li>
              Excellent performance: Sorting purity ≥90%, cell recovery ≥85%
            </li>
            <li>
              In-stock supply: Mainstream marker beads (CD3+/CD4+/CD8+/CD34+/SA,
              etc.)
            </li>
          </ul>
        </section>
      </CatalogTabs>

      <!-- Image Preview Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
import img1 from "@/assets/LifeScience/cell/cell-1/63a2758c8d5c4583a29b4aa289aece97.jpg";
</script>

<style scoped>
/* 统一图片样式和预览弹窗样式 */
</style>
