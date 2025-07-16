<template>
  <div class="affinity-page">
    <h1 class="main-title">Cell Sorting and Activation Magnetic Beads</h1>
    <div class="tab-nav">
      <div v-for="tab in tabs" :key="tab.key" :class="['tab-item', {active: currentTab === tab.key}]" @click="currentTab = tab.key">
        {{ tab.label }}
      </div>
    </div>
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p style="text-align: justify; font-size: 14px;">Leveraging years of expertise in magnetic bead synthesis and antibody development, VDO Biotech has developed a series of superparamagnetic nano-magnetic beads with excellent biocompatibility, providing efficient solutions for target cell separation, purification, and activation for industrial and research customers. Currently, we offer two core product systems:</p>
      <ul style="font-size: 15px; margin-bottom: 0;">
        <li>Column-based sorting beads — suitable for traditional MACS sorting, stable operation, strong compatibility</li>
        <li>Column-free sorting beads (with ultra-strong magnets) — simpler workflow, improved sorting efficiency</li>
      </ul>
      <p style="font-size: 14px; margin-top: 10px;">In addition, we offer cell activation beads that can efficiently stimulate T cell activation and expansion, meeting the needs of cell therapy, immunology research, and other applications.</p>
      <div class="img-block">
        <img :src="img1" alt="Cell Sorting and Activation Magnetic Beads Product Image" class="intro-img" @click="openPreview(img1)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Cell Sorting and Activation Magnetic Beads Product Image</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Product Advantages</div>
      <ul>
        <li>High safety: Naturally biodegradable materials</li>
        <li>Efficient and convenient: Achieve high-purity, high-recovery sorting in 20 minutes</li>
        <li>Excellent performance: Sorting purity ≥90%, cell recovery ≥85%</li>
        <li>In-stock supply: Mainstream marker beads (CD3+/CD4+/CD8+/CD34+/SA, etc.)</li>
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
const tabs = [
  { key: 'intro', label: 'Product Introduction' }
]
const currentTab = ref('intro')
import img1 from '@/assets/LifeScience/cell/cell-1/63a2758c8d5c4583a29b4aa289aece97.jpg'
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