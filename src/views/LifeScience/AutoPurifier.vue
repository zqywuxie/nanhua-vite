<template>
  <CatalogContent title="Pure16 Ultra Automated Protein Purification System" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p >
            VDO Biotech Pure16 Ultra is a high-throughput automated system for
            protein purification based on magnetic bead technology, specifically
            designed for antibody and protein purification. Its purification
            performance is comparable to traditional methods, while
            significantly simplifying the workflow and saving labor costs.
            Combined with VDO Biotech antibody or protein purification agarose
            magnetic beads, Pure16 Ultra provides customers with efficient,
            high-throughput, and high-capacity purification solutions to meet
            diverse experimental needs.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Pure16 Ultra Automated Protein Purification System Product Image"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Pure16 Ultra Automated Protein Purification System Product Image
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Basic Information</h2>
<dl class="catalog-parameters"><div><dt>Product Name</dt><dd>Automated Protein Purification System</dd></div><div><dt>Model</dt><dd>Pure16 Ultra</dd></div><div><dt>Dimensions</dt><dd>860mm × 810mm × 920mm (L × W × H)</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Main Features</h2>
<ul class="catalog-features">
            <li>
              Fully automated: Complete automation of bead pretreatment,
              incubation, washing, elution, and bead recovery
            </li>
            <li>Time-saving: Full workflow completed in 100 minutes</li>
            <li>High throughput: Up to 16 channels</li>
            <li>
              Efficient: Single channel can process up to 30 mL sample volume
            </li>
            <li>
              Sterile: Fully enclosed UV sterilization system to prevent
              microbial and endotoxin contamination
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
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
import img1 from "@/assets/LifeScience/microballoon/microballoon-6/9afee90c3cb7479ba066dc6ca3a801e4.png";
</script>

<style scoped>
/* 统一图片样式和预览弹窗样式 */
</style>
