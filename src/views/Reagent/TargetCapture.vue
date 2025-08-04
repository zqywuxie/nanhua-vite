<template>
  <MobileOptimizedContent>
    <div class="target-capture-page">
      <h1 class="main-title">Target Capture</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
          <p>
            This series of streptavidin magnetic microspheres can efficiently
            bind biotin derivatives, widely used in target capture, molecular
            hybridization, immunological detection, etc. The product has high
            binding capacity, good dispersion, and fast magnetic response speed,
            suitable for a variety of automated and high-throughput experimental
            platforms.
          </p>
          <div style="text-align: center; margin: 20px 0">
            <img
              :src="imgMain"
              alt="Target Capture Main Image"
              class="preview-img"
              @click="openPreview(imgMain)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">Product Advantages</div>
          <ul>
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
            <img
              :src="imgTable"
              alt="Order Information Table"
              class="preview-img"
              @click="openPreview(imgTable)"
            />
          </div>
        </section>
        <section v-if="tab === 'manual'" class="manuals">
          <h2>Product Manual Download</h2>
          <ul>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-7/Streptavidin-TargetCapture.pdf"
                download
                target="_blank"
                >Magnetic Microspheres (Streptavidin) Product Manual - Target
                Capture (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-7/Carboxyl-TargetCapture.pdf"
                download
                target="_blank"
                >Magnetic Microspheres (Carboxyl) Product Manual - Target
                Capture (PDF)</a
              >
            </li>
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
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import imgMain from "@/assets/Reagent/diagnosis/diagnosis-7/targetcapture_main.png";
import imgTable from "@/assets/Reagent/diagnosis/diagnosis-7/targetcapture_table.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Advantages' },
  { key: "specs", label: "Order Information" },
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
.target-capture-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 48px 0;
  background: #f7f9fb;
}
.main-title {
  font-size: 2.2rem;
  color: #1a2a3a;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 18px;
  text-align: center;
}
.tab-bar {
  display: none;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
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
.intro,
.table-block,
.manuals {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
.intro h2,
.table-block h2,
.manuals h2 {
  font-size: 1.35rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 12px;
  border-left: 4px solid #204a6d;
  padding-left: 12px;
  background: none;
}
ul {
  margin: 0 0 10px 20px;
  padding: 0;
}
li {
  margin-bottom: 6px;
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
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
.divider {
  height: 1px;
  background: #e0e4ea;
  margin: 36px auto 36px auto;
  max-width: 1200px;
}
.section-title {
  font-size: 1.35rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 12px;
  border-left: 4px solid #204a6d;
  padding-left: 12px;
  background: none;
}
@media (max-width: 900px) {
  .target-capture-page,
  .intro,
  .table-block,
  .manuals {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
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