<template>
  <MobileOptimizedContent>
    <div class="cf-dna-extraction-page">
      <h1 class="main-title">cfDNA Extraction</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section-title">Product Introduction</div>
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
          <div class="section-title">Features</div>
          <ul>
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
          <div class="section-title">Effect Comparison</div>
          <img
            :src="imgCompare"
            alt="cfDNA effect comparison"
            class="preview-img"
            @click="openPreview(imgCompare)"
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
            <img
              :src="imgOrder"
              alt="Order Information Table"
              class="preview-img"
              @click="openPreview(imgOrder)"
            />
          </section>
        </section>
        <section v-if="tab === 'manual'">
          <section class="manuals">
            <h2>Product Manual Download</h2>
            <ul>
              <li>
                <a
                  href="/src/assets/Reagent/diagnosis/diagnosis-4/MS05HC.pdf"
                  download
                  target="_blank"
                  >MS05HC Magnetic Microsphere Product Manual (PDF)</a
                >
              </li>
              <li>
                <a
                  href="/src/assets/Reagent/diagnosis/diagnosis-4/MA200H.pdf"
                  download
                  target="_blank"
                  >MA200H Magnetic Microsphere Product Manual (PDF)</a
                >
              </li>
            </ul>
          </section>
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
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
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
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.cf-dna-extraction-page {
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
.tab-bar {
  display: none;
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
ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.preview-img {
  display: block;
  margin: 24px auto 0 auto;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.preview-img:hover {
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
@media (max-width: 900px) {
  .cf-dna-extraction-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .preview-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
/* 图片预览弹窗样式 */
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(32, 74, 109, 0.25);
  background: #fff;
  border: 2px solid #204a6d;
  display: block;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1010;
  user-select: none;
  transition: color 0.2s;
}
.img-preview-close:hover {
  color: #d23c1a;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 