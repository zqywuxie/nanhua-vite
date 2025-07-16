<template>
  <div class="affinity-page">
    <h1 class="main-title">Cell Activation Magnetic Beads</h1>
    <!-- Tab Navigation -->
    <div class="tab-nav">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', {active: currentTab === tab.key}]"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p style="text-align: justify; font-size: 14px;">VDO Biotech provides 4.5 μm CD3 and CD28 activation magnetic beads. The CD3 and CD28 antibodies on the bead surface simulate the signals of antigen-presenting cells (APCs), strongly inducing T cell activation and proliferation to perform immune functions.</p>
      <div class="img-block">
        <img :src="img1" alt="CD3/CD28 Activation Magnetic Beads Product Image" class="intro-img" @click="openPreview(img1)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">CD3/CD28 Activation Magnetic Beads Product Image</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Product Advantages</div>
      <ul>
        <li>Efficient expansion: Achieve 150-fold cell proliferation in a single 9-day stimulation, meeting high-yield requirements.</li>
        <li>Uniform particle size: Highly consistent bead size (CV &lt; 5%), clear flow cytometry grouping, stable results.</li>
        <li>Protects cell viability: Gentle activation avoids overstimulation, ensuring high cell viability and functionality.</li>
        <li>Easy operation: Beads are easy to separate, compatible with automation, reducing manual error and improving reproducibility.</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Performance Validation</div>
      <div class="img-block">
        <img :src="img2" alt="CD3/CD28 Activation Magnetic Beads Performance Validation" class="intro-img" @click="openPreview(img2)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">CD3/CD28 Activation Magnetic Beads Performance Validation</div>
      </div>
      <p style="font-size: 14px;">After co-stimulation of T cells with VDO and competitor CD3/CD28 activation magnetic beads, T cells can be effectively expanded. T cells were counted at 3, 6, and 9 days, and the results showed no significant difference in T cell numbers compared to competitors.</p>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <div class="img-block">
        <img :src="img3" alt="CD3/CD28 Activation Magnetic Beads Product List" class="intro-img" @click="openPreview(img3)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">CD3/CD28 Activation Magnetic Beads Product List</div>
      </div>
    </section>
    <!-- Tab Content: Manual -->
    <section v-if="currentTab === 'manual'" class="manuals">
      <div class="section-title">Manual Download</div>
      <ul class="manual-list">
        <li v-for="file in manualFiles" :key="file.name">
          <a :href="file.url" :download="file.name" target="_blank">
            <i class="el-icon-document" style="margin-right:6px;color:#409eff;"></i>{{ file.name }}
          </a>
        </li>
      </ul>
    </section>
    <!-- Image Preview Modal -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Tab Configuration
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' }
]
const currentTab = ref('intro')
// Image Resources
import img3 from '@/assets/LifeScience/cell/cell-3/dbb1359d772d4fcdb46aa33a9c95e3d1.png'
import img2 from '@/assets/LifeScience/cell/cell-3/38ccfd7cfd3b4bd2b22ede1d3a013d53.png'
import img1 from '@/assets/LifeScience/cell/cell-3/e47de1b575ad4c94bc0413dc8597a5c8.png'

const allImgs = [
  { src: img1, alt: 'Cell Activation Magnetic Beads Product Image 1' },
  { src: img2, alt: 'Cell Activation Magnetic Beads Product Image 2' },
  { src: img3, alt: 'Cell Activation Magnetic Beads Product Image 3' },
]
// PDF Manuals
import pdf1 from '@/assets/LifeScience/cell/cell-3/CS1007.pdf'
import pdf2 from '@/assets/LifeScience/cell/cell-3/CS1008.pdf'
const manualFiles = [
  { name: 'CS1007-Human CD3/CD28 Activation Magnetic Beads Manual.pdf', url: pdf1 },
  { name: 'CS1008-Mouse CD3/CD28 Activation Magnetic Beads Manual.pdf', url: pdf2 },
]
// Image Preview Modal
const previewImg = ref('')
function openPreview(img) { previewImg.value = img }
function closePreview() { previewImg.value = '' }
</script>

<style scoped>
.affinity-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans', Arial, sans-serif;
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
ul, ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.manual-list {
  list-style: none;
  padding: 0;
}
.manual-list li {
  margin-bottom: 12px;
}
.manual-list a {
  color: #204a6d;
  text-decoration: none;
  font-size: 1.08rem;
  transition: color 0.2s;
}
.manual-list a:hover {
  color: #409eff;
  text-decoration: underline;
}
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
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.55);
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