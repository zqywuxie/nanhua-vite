<template>
  <div class="mrna-extraction-beads-page">
    <h1 class="main-title">mRNA Extraction & Purification Magnetic Microspheres</h1>
    <div class="tab-nav">
      <div
        v-for="item in tabList"
        :key="item.key"
        :class="['tab-item', {active: tab === item.key}]"
        @click="tab = item.key"
      >
        {{ item.label }}
      </div>
    </div>
    <section v-if="tab==='intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>
        Oligo(dT) Magnetic Microspheres are suitable for rapid separation of high-purity complete mRNA from eukaryotic cell total RNA or from cell, animal, and plant tissue homogenates. The purified mRNA can be directly used for most molecular biological downstream applications, such as RT-PCR, solid-phase cDNA library construction, S1 nucleic acid analysis, ribonucleic acid protection analysis, primer extension, dot blotting,体外转录实验, RACE, splicing hybridization, Northern analysis, gene cloning, gene expression analysis, etc.
      </p>
      <div class="main-img" style="text-align:center;margin:20px 0;">
        <img :src="imgMain" alt="mRNA Extraction Process" class="preview-img" @click="openPreview(imgMain)" />
      </div>
      <div class="divider"></div>
      <div class="section-title">Performance Characteristics</div>
      <ul>
        <li>Superparamagnetic Microspheres, Excellent Separation Performance</li>
        <li>Low Non-Specific Adsorption, Ensuring mRNA Purity</li>
        <li>Uniform Microsphere Size, Stable Surface Groups, Good Experimental Reproducibility</li>
        <li>Low Sedimentation Rate and High Magnetic Content Ensure Rapid Magnetic Separation</li>
        <li>Scalable Supply, Small Batch-to-Batch Variation, Ensuring Consistent Test Results</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Technical Parameters</div>
      <ul>
        <li>Material: Iron Oxide</li>
        <li>Particle Size: 1μm</li>
        <li>Surface Groups: Oligo（dT）</li>
        <li>Density: 1.4g /cm<sup>3</sup></li>
        <li>Storage Solution: PBS pH 7.4</li>
        <li>Storage Temperature: 2-8℃, Do Not Freeze</li>
      </ul>
    </section>
    <section v-if="tab==='order'" class="order-info">
      <h2>Order Information</h2>
      <img :src="imgOrder" alt="Order Information Table" class="preview-img" @click="openPreview(imgOrder)" />
    </section>
    <section v-if="tab==='manual'" class="manuals">
      <h2>Product Manual Download</h2>
      <ul>
        <li><a href="/src/assets/Reagent/diagnosis/diagnosis-3/MS05T.pdf" download target="_blank">MS05T Magnetic Microsphere Product Manual (PDF)</a></li>
        <li><a href="/src/assets/Reagent/diagnosis/diagnosis-3/MS04T.pdf" download target="_blank">MS04T Magnetic Microsphere Product Manual (PDF)</a></li>
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
import imgMain from '@/assets/Reagent/diagnosis/diagnosis-3/10013.png'
import imgOrder from '@/assets/Reagent/diagnosis/diagnosis-3/10014.png'
const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  // { key: 'features', label: 'Performance Characteristics' },
  // { key: 'specs', label: 'Technical Parameters' },
  { key: 'order', label: 'Order Information' },
  { key: 'manual', label: 'Manual' }
]
const tab = ref('intro')
const previewImg = ref(null)
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = null
}
</script>

<style scoped>
.mrna-extraction-beads-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 48px 0;
  background: #f7f9fb;
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
.main-title {
  font-size: 2.2rem;
  color: #1a2a3a;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 18px;
  text-align: center;
}
.tab-bar { display: none; }
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
.intro, .main-img, .features, .specs, .order-info, .manuals, .qrcode {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
.intro h2, .features h2, .specs h2, .order-info h2, .manuals h2, .qrcode h2 {
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
.divider {
  height: 1px;
  background: #e0e4ea;
  margin: 36px auto 36px auto;
  max-width: 1200px;
}
@media (max-width: 900px) {
  .mrna-extraction-beads-page, .intro, .main-img, .features, .specs, .order-info, .manuals, .qrcode {
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