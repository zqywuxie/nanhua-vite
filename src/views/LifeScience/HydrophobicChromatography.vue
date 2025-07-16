<template>
  <div class="hydrophobic-page">
    <h1 class="main-title">Hydrophobic Interaction Chromatography</h1>
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
      <p>Hydrophobic interaction chromatography (HIC) separates proteins based on differences in hydrophobicity, i.e., by the reversible interaction between proteins and hydrophobic groups on the media surface. Hydrophobic interactions are enhanced at high ionic strength, so binding occurs in high salt conditions, and elution is usually achieved by decreasing the salt concentration. This unique adsorption and separation mode makes HIC an ideal purification method after ammonium sulfate precipitation or high-salt elution from ion exchange chromatography.</p>
      <img :src="img1" alt="Principle of Hydrophobic Interaction Chromatography" width="800" class="intro-img" @click="openPreview(img1)" style="margin: 24px 0;" />
      <div class="divider"></div>
      <div class="section-title">Application Cases</div>
      <ol>
        <li>Separation of Proteins with Different Hydrophobicity by Phenyl Focurose FF(HS) and Phenyl Focurose HP<br><img :src="img2" alt="Case 1" width="760" class="intro-img" @click="openPreview(img2)" /></li>
      </ol>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <img :src="img3" alt="Product List" width="800" class="intro-img" @click="openPreview(img3)" />
      <div class="divider"></div>
      <div class="section-title">Pre-packed Column Ordering Information</div>
      <img :src="img4" alt="Pre-packed Column Ordering Information" width="450" class="intro-img" @click="openPreview(img4)" />
      <div class="divider"></div>
      <div class="section-title">Tips</div>
      <ul>
        <li>The hydrophobic interaction strength varies with different ligands and ligand concentrations.</li>
        <li>The salt concentration in the buffer varies for different proteins or when using different HIC media for purification.</li>
        <li>Temperature and pH have a significant effect on protein hydrophobicity; pH and temperature should be kept constant during HIC.</li>
      </ul>
    </section>
    <!-- Tab Content: Manuals -->
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
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manuals' }
]
const currentTab = ref('intro')
import img1 from '@/assets/LifeScience/chromatography/chromatography-5/89f177c7ed044704a5d1fab9b50c3fef.png'
import img2 from '@/assets/LifeScience/chromatography/chromatography-5/7979b6da58d048d0bc2d7f888bfd7ae4.png'
import img3 from '@/assets/LifeScience/chromatography/chromatography-5/5419f1a084b14f09a23357488fbb3dc4.png'
import img4 from '@/assets/LifeScience/chromatography/chromatography-5/3224da8d5f9340d7be9623a68221b88e.png'
import pdf1 from '@/assets/LifeScience/chromatography/chromatography-5/HS060302.pdf'
import pdf2 from '@/assets/LifeScience/chromatography/chromatography-5/HS060202.pdf'
const manualFiles = [
  { name: 'HS060302.pdf', url: pdf1 },
  { name: 'HS060202.pdf', url: pdf2 }
]
const previewImg = ref('')
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = ''
}
</script>

<style scoped>
.hydrophobic-page {
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
  padding-left: 0;
  margin-top: 18px;
}
.manual-list li {
  list-style: none;
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
.intro-img {
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 8px #e0e6ed;
  margin-bottom: 18px;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #b3c6e0;
}
.img-preview-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,40,60,0.65);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #223a5e55;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 40px;
  right: 60px;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
  text-shadow: 0 2px 8px #223a5e;
}
@media (max-width: 900px) {
  .hydrophobic-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-title {
    font-size: 2rem;
  }
  .img-preview-close {
    top: 12px;
    right: 18px;
  }
}
</style> 