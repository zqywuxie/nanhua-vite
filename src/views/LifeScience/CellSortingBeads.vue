<template>
  <div class="affinity-page">
    <h1 class="main-title">Cell Sorting Magnetic Beads</h1>
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
    <!-- Tab Content: Technical Principle -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Technical Principle</div>
      <p style="text-align: justify; font-size: 14px;">Magnetic-activated cell sorting (MACS) technology is based on the specific binding of cell surface antigens and antibodies. By labeling target cells with superparamagnetic beads, it enables rapid and high-purity sorting, providing an efficient and gentle cell separation solution. This technology features fast sorting, high cell viability, and high recovery rate. The sorted cells can be widely used in cell culture, flow cytometry, CAR-T/TCR-T cell therapy, and other fields.</p>
      <div class="divider"></div>
      <div class="section-title">Product Introduction</div>
      <p style="text-align: justify; font-size: 14px;">VDO Biotech is committed to providing high-quality magnetic bead products and supporting solutions. According to different sorting needs, we have developed column-based and column-free cell sorting magnetic beads with particle sizes of 50–100 nm and 150–200 nm, made of dextran, to help research and industrial customers achieve more precise and efficient cell studies.</p>
      <div class="divider"></div>
      <div class="section-title">Product Advantages</div>
      <ul>
        <li>High safety: Made of natural dextran, with good biodegradability.</li>
        <li>Efficient and convenient: Obtain high-purity, high-recovery target cells in just 20 minutes.</li>
        <li>Excellent performance: Sorting purity ≥90%, cell recovery ≥85%.</li>
        <li>No interference and compatibility: Small, degradable beads perfectly compatible with various downstream experiments.</li>
        <li>In-stock supply: Direct supply of mainstream marker sorting beads (CD3+/CD4+/CD8+/CD34+/SA, etc.), and customized development services available.</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Column-Based Cell Sorting Workflow</div>
      <p style="font-size: 14px;">This product series uses 50–100 nm magnetic beads, with corresponding antibodies or proteins coupled to the surface, and is used with cell sorting columns for gentle sorting. After sorting, there is no need to remove the beads, and flow cytometry is not affected. The beads are made of biodegradable materials, and the production process is sterile, so downstream culture is not affected. Perfectly matches research and clinical needs.</p>
      <div class="img-block">
        <img :src="img1" alt="Column-Based Cell Sorting Workflow Diagram" class="intro-img" @click="openPreview(img1)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Column-Based Cell Sorting Workflow Diagram</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Column-Free Cell Sorting Workflow</div>
      <p style="font-size: 14px;">This product series uses magnetic beads with a diameter of 150–200 nm, with proteins on the surface that can bind to biomolecules. Used with biomolecules, it flexibly sorts various target cells. These beads do not require cell sorting columns, making operation more convenient and cost more controllable.</p>
      <div class="img-block">
        <img :src="img2" alt="Column-Free Cell Sorting Workflow Diagram" class="intro-img" @click="openPreview(img2)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Column-Free Cell Sorting Workflow Diagram</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <div class="img-block">
        <img :src="img3" alt="Cell Sorting Magnetic Beads Product List" class="intro-img" @click="openPreview(img3)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Cell Sorting Magnetic Beads Product List</div>
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
// Tab 配置
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' }
]
const currentTab = ref('intro')
// 图片资源
import img3 from '@/assets/LifeScience/cell/cell-2/b7479470bf784a5ba488583fbd8002b7.png'
import img2 from '@/assets/LifeScience/cell/cell-2/bd5996e9993841f99f02c53d8e6f2878.png'
import img1 from '@/assets/LifeScience/cell/cell-2/3a2bfaf2f1b349659fdc48e194bd10a0.png'
const allImgs = [
  { src: img1, alt: 'Cell Sorting Magnetic Beads Product Image 1' },
  { src: img2, alt: 'Cell Sorting Magnetic Beads Product Image 2' },
  { src: img3, alt: 'Cell Sorting Magnetic Beads Product Image 3' },
]
// PDF 说明书
import pdf1 from '@/assets/LifeScience/cell/cell-2/CS1001.pdf'
import pdf2 from '@/assets/LifeScience/cell/cell-2/CS1002.pdf'
import pdf3 from '@/assets/LifeScience/cell/cell-2/CS1003.pdf'
import pdf4 from '@/assets/LifeScience/cell/cell-2/CS1004.pdf'
import pdf5 from '@/assets/LifeScience/cell/cell-2/CS1005.pdf'
import pdf6 from '@/assets/LifeScience/cell/cell-2/CS1006.pdf'
import pdf7 from '@/assets/LifeScience/cell/cell-2/CS1009.pdf'
import pdf8 from '@/assets/LifeScience/cell/cell-2/CS1010.pdf'
import pdf9 from '@/assets/LifeScience/cell/cell-2/CS1011.pdf'
import pdf10 from '@/assets/LifeScience/cell/cell-2/CS1012.pdf'
import pdf11 from '@/assets/LifeScience/cell/cell-2/CS1013.pdf'
import pdf12 from '@/assets/LifeScience/cell/cell-2/CS1014.pdf'
import pdf13 from '@/assets/LifeScience/cell/cell-2/CS1015.pdf'
import pdf14 from '@/assets/LifeScience/cell/cell-2/CS1016.pdf'
const manualFiles = [
  { name: 'CS1001-CD3 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf1 },
  { name: 'CS1002-CD4 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf2 },
  { name: 'CS1003-CD8 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf3 },
  { name: 'CS1004-CD34 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf4 },
  { name: 'CS1005-CD138 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf5 },
  { name: 'CS1006-Streptavidin Sorting Magnetic Beads Manual.pdf', url: pdf6 },
  { name: 'CS1009-NK Cell Negative Selection Kit (Anti-Human) Manual.pdf', url: pdf7 },
  { name: 'CS1010-VDS Neutrophil Negative Selection Kit (Anti-Human) Manual.pdf', url: pdf8 },
  { name: 'CS1011-VDS Streptavidin Sorting Magnetic Beads Manual.pdf', url: pdf9 },
  { name: 'CS1012-Anti-Biotin Sorting Magnetic Beads Manual.pdf', url: pdf10 },
  { name: 'CS1013-VDS CD138 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf11 },
  { name: 'CS1014-VDS Monocyte Negative Selection Kit (Anti-Human) Manual.pdf', url: pdf12 },
  { name: 'CS1015-VDS T Cell Negative Selection Kit (Anti-Human) Manual.pdf', url: pdf13 },
  { name: 'CS1016-CD14 Sorting Magnetic Beads (Anti-Human) Manual.pdf', url: pdf14 },
]
// 图片预览弹窗
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