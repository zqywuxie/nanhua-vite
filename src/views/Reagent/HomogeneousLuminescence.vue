<template>
  <div class="homogeneous-luminescence-page">
    <h1 class="main-title">Homogeneous Luminescence</h1>
    <section class="intro">
      <p>
        Homogeneous luminescence is a significant milestone in the field of chemiluminescence immunoassay, allowing direct chemiluminescence detection without separation and washing steps. This technology boasts high throughput, low background, excellent reproducibility, and high sensitivity, with simple operation, low sample requirements, and a wide detection range, making it suitable for the development of automated detection systems.
      </p>
    </section>
    <div class="divider"></div>
    <section class="principle">
      <h2>Homogeneous Luminescence Principle</h2>
      <p>
        Homogeneous luminescence is based on two types of nanospheres (donor sphere, receptor sphere), with specific antibodies cross-linked on their surfaces. After co-incubation with the analyte, the two antibodies form a double-antibody sandwich immune complex, thereby maintaining the distance between the two spheres within 200nm. Upon 680nm excitation light, the donor sphere generates singlet oxygen and diffuses to the receptor sphere, which receives energy and emits 615nm emission light. The light signal is collected by the photodetector, and the concentration of the analyte in the sample is calculated using mathematical fitting. When the analyte contains no analyte, no immune complex is formed, and the distance between the two spheres is greater than 200nm, exceeding the transfer distance of singlet oxygen, so the receptor sphere does not emit emission light.
      </p>
      <div style="text-align:center;margin:20px 0;">
        <img :src="mainImg" alt="Homogeneous Luminescence Principle" class="preview-img" @click="openPreview(mainImg)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="features">
      <h2>Homogeneous Luminescence Technical Advantages</h2>
      <ul>
        <li><b>Fast Reaction</b>: Detection speed is fast</li>
        <li><b>Simple Operation</b>: Reaction steps are simple, no washing steps, machines are easy to automate</li>
        <li><b>Good Reproducibility</b>: Homogeneous non-washing, high precision</li>
        <li><b>High Sensitivity</b>: Nanosphere reaction mode + homogeneous non-washing brings high sensitivity</li>
      </ul>
    </section>
    <div class="divider"></div>
    <section class="application">
      <h2>Homogeneous Luminescence Application Fields</h2>
      <ul>
        <li><b>Clinical Applications</b>: Detection of various serum markers (myocardial markers, infectious markers, tumor markers, etc.)</li>
        <li><b>Research Applications</b>: Exosome detection, protein-protein interaction studies, drug screening, cell signaling pathway studies, kinase and enzyme activity determination, etc.</li>
      </ul>
    </section>
    <div class="divider"></div>
    <section class="types">
      <h2>Types of Homogeneous Luminescence</h2>
      <ul>
        <li>Donor and Receptor Spheres</li>
      </ul>
    </section>

    <!-- 图片预览弹窗 -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 图片采用import相对路径
import mainImg from '@/assets/Reagent/homogeneous/trans/10001.jpg'

const previewImg = ref(null)
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = null
}
</script>

<style scoped>
.homogeneous-luminescence-page {
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
.intro {
  max-width: 1200px;
  margin: 0 auto 32px auto;
  font-size: 1.08rem;
  color: #333;
  line-height: 1.8;
  text-align: center;
}
.divider {
  height: 1px;
  background: #e0e4ea;
  margin: 36px auto 36px auto;
  max-width: 1200px;
}
.principle, .features, .application, .types {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
.principle h2, .features h2, .application h2, .types h2 {
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
  box-shadow: 0 4px 24px rgba(32,74,109,0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
@media (max-width: 900px) {
  .homogeneous-luminescence-page, .intro, .principle, .features, .application, .types {
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
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,40,60,0.65);
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
  box-shadow: 0 8px 32px rgba(32,74,109,0.25);
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
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 