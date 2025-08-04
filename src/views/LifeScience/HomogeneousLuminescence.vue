<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Homogeneous Luminescence</h1>
      <section class="intro">
        <div class="section-title">Product Introduction</div>
        <p>
          Homogeneous luminescence is a significant milestone in the field of
          chemiluminescent immunoassays, enabling direct chemiluminescent
          detection without the need for separation and washing steps. This
          technology offers multiple advantages, including high throughput, low
          background, excellent reproducibility and sensitivity, simple
          operation, minimal sample requirements, and a wide detection range,
          making it suitable for the development of automated detection systems.
        </p>
        <div style="text-align: center; margin: 32px 0 12px 0">
          <div class="img-block">
            <img
              :src="mainDiagram"
              alt="Homogeneous Luminescence Principle Diagram"
              class="intro-img"
              @click="openPreview(mainDiagram)"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Homogeneous Luminescence Principle Diagram
            </div>
          </div>
        </div>
        <p>
          Based on the homogeneous luminescence technology platform, Vdobiotech
          offers a comprehensive solution—from homogeneous reagent materials &
          instruments, technology development to large-scale production.
          Leveraging our extensive experience in innovative development and
          large-scale manufacturing, we assist clients in developing homogeneous
          luminescence-related products, reducing development costs and
          shortening R&D cycles.
        </p>
        <div class="divider"></div>
        <div class="section-title">Types of Homogeneous Luminescence</div>
        <ul>
          <li>Comprehensive Homogeneous Luminescence Solutions</li>
          <li>IgG Detection Kit (Wide Range)</li>
          <li>Monoclonal Antibody Screening Kit</li>
          <li>Cytokine Detection Kit</li>
          <li>Mouse Pairing Antibody Screening Kit</li>
        </ul>
      </section>
      <!-- 图片预览弹窗 -->
      <div
        v-if="previewImg"
        class="img-preview-modal"
        @click.self="closePreview"
      >
        <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import mainDiagram from "@/assets/LifeScience/homogeneous/homogeneous-1/2291fd0eddc849a5a2194c8163a76755.png";
const previewImg = ref("");
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = "";
}
</script>

<style scoped>
.homogeneous-page {
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
  .homogeneous-page {
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