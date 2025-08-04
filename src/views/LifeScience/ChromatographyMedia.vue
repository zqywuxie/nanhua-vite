<template>
  <MobileOptimizedContent>
    <div class="chromatography-media-page">
      <h1 class="main-title">Chromatography Media</h1>
      <div class="intro-imgs">
        <img
          v-for="(img, idx) in introImgs"
          :key="idx"
          :src="img"
          class="intro-img"
          @click="openPreview(img)"
          alt="Chromatography Media Introduction Image"
        />
      </div>
      <div class="divider"></div>
      <div class="section-title">Types of Chromatography Media</div>
      <ul class="media-types">
        <li v-for="(type, idx) in types" :key="idx">{{ type }}</li>
      </ul>
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
import img1 from "@/assets/LifeScience/chromatography/chromatography-1/b586365f6f2b44f19c3b3701d1ffbd49.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-1/0ffcc2b638ce4622a2642a0f65aaf8fa.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-1/e48bb60d70514d95a6a174dc00bb921d.png";

const introImgs = [img1, img2, img3];
const types = [
  "Gel Filtration Chromatography",
  "Ion Exchange Chromatography",
  "Affinity Chromatography",
  "Hydrophobic Chromatography",
  "Mixed-Mode Chromatography",
  "Empty Chromatography Column",
];
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.chromatography-media-page {
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
.intro-imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.intro-img {
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.04);
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
.media-types {
  padding-left: 24px;
  margin-bottom: 18px;
}
.media-types li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
/* 移动端样式现在由 MobileOptimizedContent 组件处理 */
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