<template>
  <MobileOptimizedContent>
    <div class="affinity-page">
      <h1 class="main-title">
        Pure16 Ultra Automated Protein Purification System
      </h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
          <p style="text-align: justify; font-size: 14px">
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
            <img
              :src="img1"
              alt="Pure16 Ultra Automated Protein Purification System Product Image"
              class="intro-img"
              @click="openPreview(img1)"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Pure16 Ultra Automated Protein Purification System Product Image
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-title">Basic Information</div>
          <ul style="font-size: 15px">
            <li>Product Name: Automated Protein Purification System</li>
            <li>Model: Pure16 Ultra</li>
            <li>Dimensions: 860mm × 810mm × 920mm (L × W × H)</li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Main Features</div>
          <ul>
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
        <div
          v-if="previewImg"
          class="img-preview-modal"
          @click.self="closePreview"
        >
          <img :src="previewImg" class="img-preview-large" @click.stop />
          <span class="img-preview-close" @click="closePreview">×</span>
        </div>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
import img1 from "@/assets/LifeScience/microballoon/microballoon-6/9afee90c3cb7479ba066dc6ca3a801e4.png";
const previewImg = ref("");
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = "";
}
</script>

<style scoped>
.affinity-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: "Segoe UI", "PingFang SC", "Hiragino Sans", Arial, sans-serif;
}
.main-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 36px;
  letter-spacing: 2px;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
}
.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
}
.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}
.tab-item:hover {
  color: #2b7bbf;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin: 36px 0 18px 0;
  background: none;
}
.divider {
  height: 1px;
  background: #e0e6ed;
  margin: 32px 0;
  border: none;
}
ul,
ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
/* 统一图片样式和预览弹窗样式 */
.img-block {
  margin: 18px 0;
  text-align: center;
}
.intro-img {
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  transition: box-shadow 0.2s;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #0002;
}
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #0005;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1001;
  text-shadow: 0 2px 8px #000a;
}
@media (max-width: 900px) {
  .affinity-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-title {
    font-size: 2rem;
  }
  .intro-img {
    max-width: 98vw;
  }
}
</style> 