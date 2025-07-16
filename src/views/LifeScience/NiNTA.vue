<template>
  <div class="affinity-page">
    <h1 class="main-title">Ni-NTA Agarose Magnetic Beads</h1>
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
      <p>Ni-NTA agarose magnetic beads are composed of agarose and nano-magnetic particles, with Ni-NTA ligand coupled to the bead surface. Add Ni-NTA agarose magnetic beads to samples containing His-tagged proteins and incubate on a rotator to allow full binding of His-tagged proteins to the beads. The His-tagged proteins bound to the beads can be eluted with high concentrations of imidazole. Magnetic separation eliminates the need for centrifugation, reduces purification time, and improves convenience—ideal for high-throughput sample purification.</p>
      <div class="img-block">
        <img :src="img1" alt="Ni-NTA Light Microscopy and Product Image" class="intro-img" @click="openPreview(img1)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Ni-NTA Agarose Magnetic Beads Light Microscopy and Product Image</div>
      </div>
      <div class="divider"></div>
      <div class="section-title">Ni-NTA Agarose Magnetic Beads Features</div>
      <ul>
        <li>High binding capacity: Each mL of settled gel can bind ≈60 mg His-tagged protein</li>
        <li>High purity: Post-elution protein purity ≥90%</li>
        <li>Better suspension: Average particle size 30 μm, better suspension, more effective capture of His-tagged proteins</li>
        <li>Better hydrophilicity: Uses in-house high-hydrophilicity nano-magnetic particles to reduce nonspecific adsorption</li>
        <li>Faster magnetic response: Can be rapidly adsorbed in solution, magnetic response ≤3s</li>
        <li>Fully automated workflow: Compatible with VDO high-throughput automated purification instruments for end-to-end automation from bead pretreatment to binding, elution, and bead recovery</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Ni-NTA Agarose Magnetic Beads Product Information</div>
      <div class="img-block">
        <img :src="img2" alt="Product Information" class="intro-img" @click="openPreview(img2)" />
      </div>
      <div class="divider"></div>
      <div class="section-title">Ni-NTA Agarose Magnetic Beads Validation Data</div>
      <div style="font-size: 14px;">1. Capacity Test</div>
      <div style="font-size: 14px;">His-tagged protein (MW 22 kDa) standard was incubated and purified with VDO and Company T's Ni-NTA agarose magnetic beads. Nanodrop was used to measure the concentration of the eluent, and binding capacity and recovery were calculated. As shown below, VDO Ni-NTA agarose magnetic beads have a binding capacity of 55.6 mg/mL settled gel, significantly higher than Company T's 36.8 mg/mL. In addition, the overall recovery rate of VDO beads after two-step elution is 92.4%, comparable to imported competitors.</div>
      <div class="img-block">
        <img :src="img3" alt="Capacity Test" class="intro-img" @click="openPreview(img3)" />
      </div>
      <div style="font-size: 14px;">2. E. coli Sample Purification</div>
      <div>E. coli lysate containing His-tagged protein (MW 26 kDa) was incubated and purified with VDO and Company T's Ni-NTA agarose magnetic beads. SDS-PAGE analysis showed that the purity of His-tagged protein in the eluates from both beads was >90%. The amount of protein obtained with VDO beads was 8.87 mg, higher than Company T's 6.77 mg, indicating higher protein yield.</div>
      <div class="img-block">
        <img :src="img4" alt="SDS-PAGE Analysis 1" class="intro-img" @click="openPreview(img4)" />
      </div>
      <div class="img-block">
        <img :src="img5" alt="SDS-PAGE Analysis 2" class="intro-img" @click="openPreview(img5)" />
      </div>
      <div class="divider"></div>
      <div class="section-title">Ni-NTA Agarose Magnetic Beads Product List</div>
      <div class="img-block">
        <img :src="img6" alt="Product List" class="intro-img" @click="openPreview(img6)" />
      </div>
    </section>
    <!-- Tab Content: Manuals -->
    <section v-if="currentTab === 'manual'" class="manuals">
      <div class="section-title">Manual Download</div>
      <ul class="manual-list">
        <li v-for="file in manualFiles" :key="file.name">
          <a :href="file.url" :download="file.name" target="_blank">
            <i class="el-icon-document" style="margin-right:6px;"></i>{{ file.name }}
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
import img1 from '@/assets/LifeScience/microballoon/microballoon-4/7ea60840aa974389a120316723ee742d.png'
import img2 from '@/assets/LifeScience/microballoon/microballoon-4/c25cd9edc2dd493a8c7d9b786d8eebe0.png'
import img3 from '@/assets/LifeScience/microballoon/microballoon-4/8fede5c5bcac490196cf7d3788923a43.png'
import img4 from '@/assets/LifeScience/microballoon/microballoon-4/0600af63d0a6416299bb36a440341d8e.png'
import img5 from '@/assets/LifeScience/microballoon/microballoon-4/dfead6b9b30449648b80e57aa917aaae.png'
import img6 from '@/assets/LifeScience/microballoon/microballoon-4/9084ec77db4b4062b27fdac680f39c30.png'
import pdfManual from '@/assets/LifeScience/microballoon/microballoon-4/Ni-NTA.pdf'
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manuals' },
]
const currentTab = ref('intro')
const previewImg = ref('')
const openPreview = (img) => { previewImg.value = img }
const closePreview = () => { previewImg.value = '' }
const manualFiles = [
  { name: 'Ni-NTA Agarose Magnetic Beads Manual.pdf', url: pdfManual },
]
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
.intro-img, .img-block img {
  max-width: 70%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.img-block img:hover {
  box-shadow: 0 4px 16px rgba(64,158,255,0.18);
}
.img-preview-modal {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.55);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
}
.img-preview-close {
  position: absolute;
  top: 40px;
  right: 60px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
}
@media (max-width: 900px) {
  .affinity-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
}
</style> 