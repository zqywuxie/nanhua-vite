<template>
  <div class="affinity-page">
    <h1 class="main-title">Magnetic Rack</h1>
    <div class="tab-nav">
      <div v-for="tab in tabs" :key="tab.key" :class="['tab-item', {active: currentTab === tab.key}]" @click="currentTab = tab.key">
        {{ tab.label }}
      </div>
    </div>
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p style="text-align: justify; font-size: 14px;">VDO 5 mL single-tube ultra-strong magnetic rack is specially designed for column-free cell sorting. It adopts a high-strength magnetic pole structure, which can quickly and efficiently adsorb magnetically labeled cells or bead-cell complexes. Suitable for 5 mL standard centrifuge tubes, compatible with various cell sorting experiments, easy to operate, no complex consumables required, and significantly improves sorting efficiency.</p>
      <div class="img-block">
        <img :src="img1" alt="5 mL Single-Tube Ultra-Strong Magnetic Rack Product Image" class="intro-img" @click="openPreview(img1)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">5 mL Single-Tube Ultra-Strong Magnetic Rack Product Image</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Product Advantages</div>
      <ul>
        <li>Ultra-strong magnetic force: Quickly and efficiently capture target cells or beads, reducing sample loss.</li>
        <li>Easy operation: No need for sorting columns, directly adsorbs beads in 5 mL centrifuge tubes, simplifies workflow, saves time.</li>
        <li>Strong compatibility: Fits standard 5 mL centrifuge tubes, suitable for various magnetic bead sorting kits and automation systems.</li>
        <li>Stable and reliable: Uniform magnetic force distribution ensures sorting consistency and improves experimental reproducibility.</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <div class="img-block">
        <img :src="img2" alt="5 mL Single-Tube Ultra-Strong Magnetic Rack Product List" class="intro-img" @click="openPreview(img2)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">5 mL Single-Tube Ultra-Strong Magnetic Rack Product List</div>
      </div>
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
import img2 from '@/assets/LifeScience/cell/cell-4/6fdd06278acf403f92cd7198b1ab1840.png'
import img1 from '@/assets/LifeScience/cell/cell-4/9caf925979464f089ebe8d2bd294a910.png'
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