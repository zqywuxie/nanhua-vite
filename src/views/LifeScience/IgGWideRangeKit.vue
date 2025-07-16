<template>
  <div class="homogeneous-page">
    <h1 class="main-title">IgG Detection Kit (Wide Range)</h1>
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
      <p>Based on homogeneous luminescence technology, Vdobiotech has developed the HiLA series IgG detection kits, providing efficient solutions for IgG detection in various sample matrices such as cell culture supernatant, serum, or buffer, meeting the needs of diverse application scenarios.</p>
      <div class="img-block">
        <img :src="imgBanner" alt="banner" class="intro-img" @click="openPreview(imgBanner)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Product Advantages</div>
      <ul class="list-paddingleft-2">
        <li>Ultra-wide detection range: Direct detection of cell supernatant without dilution</li>
        <li>No sample purification: Eliminates lengthy antibody purification steps, simplifying the process</li>
        <li>Easy operation: Detection can be completed in as little as 30 minutes, meeting high-throughput needs</li>
        <li>Micro-volume detection: Only 2-10μL sample required, suitable for precious sample analysis</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Detection Principle (Competitive Assay)</div>
      <p>The core components of the kit include anti-IgG antibody crosslinked to acceptor beads (R1), biotin-labeled IgG (R2), and streptavidin crosslinked to donor beads (R3). In the detection system, the anti-IgG antibody crosslinked to acceptor beads and the biotin-labeled IgG are incubated together to form an immune complex, which then reacts with donor beads to form a luminescent complex. Upon excitation with 680 nm light, the donor beads generate singlet oxygen, which diffuses to the acceptor beads, causing them to emit light at 615 nm. When the sample contains IgG, it competes to bind anti-IgG, inhibiting the formation of the luminescent complex. The IgG concentration in the sample is inversely proportional to the light signal. The light signal is collected by a photosensitive element, and mathematical fitting is used to calculate the IgG concentration in the sample.</p>
      <div class="img-block">
        <img :src="imgPrinciple" alt="Detection Principle" class="intro-img" @click="openPreview(imgPrinciple)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Validation Data</div>
      <div class="section-title" style="font-size:1.1rem;margin-top:24px;">1. Dynamic Range</div>
      <p>All six kits have a wide dynamic range of 0-1000 μg/mL, allowing direct detection of samples such as high-concentration cell supernatant without dilution or purification.</p>
      <div class="img-block">
        <img :src="imgRange" alt="Dynamic Range" class="intro-img" @click="openPreview(imgRange)" />
      </div>
      <div class="section-title" style="font-size:1.1rem;margin-top:24px;">2. Sample Correlation</div>
      <div class="img-block">
        <img :src="imgCorr1" alt="Correlation 1" class="intro-img" @click="openPreview(imgCorr1)" />
      </div>
      <ul class="list-paddingleft-2">
        <li>Comparison with Siemens chemiluminescence results (n=30), correlation coefficient r=0.9589, showing good sample correlation.</li>
        <li>Sample type: Human serum</li>
      </ul>
      <div class="img-block">
        <img :src="imgCorr2" alt="Correlation 2" class="intro-img" @click="openPreview(imgCorr2)" />
      </div>
      <ul class="list-paddingleft-2">
        <li>Comparison with HPLC results (n=22), correlation coefficient r=0.9778, showing good sample correlation.</li>
        <li>Sample type: Cell culture supernatant</li>
      </ul>
      <div class="img-block">
        <img :src="imgCorr3" alt="Correlation 3" class="intro-img" @click="openPreview(imgCorr3)" />
      </div>
      <ul class="list-paddingleft-2">
        <li>Comparison with HPLC results (n=22), correlation coefficient r=0.9923, showing good sample correlation.</li>
        <li>Sample type: Cell culture supernatant</li>
      </ul>
      <div class="section-title" style="font-size:1.1rem;margin-top:24px;">3. Summary of Performance Parameters</div>
      <div class="img-block">
        <img :src="imgParams" alt="Performance Parameters" class="intro-img" @click="openPreview(imgParams)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Product List</div>
      <div class="img-block">
        <img :src="imgList" alt="Product List" class="intro-img" @click="openPreview(imgList)" />
      </div>
    </section>
    <!-- Tab Content: Manual Download -->
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
    <!-- 图片预览弹窗 -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import imgBanner from '@/assets/LifeScience/homogeneous/homogeneous-3/47edf6ca72604f37b64a1c0bf616ef15.png';
import imgPrinciple from '@/assets/LifeScience/homogeneous/homogeneous-3/9906046251c84bad99b9296952b55907.png';
import imgRange from '@/assets/LifeScience/homogeneous/homogeneous-3/462f5c4e0ab64356817866ecff74e9bf.png';
import imgCorr1 from '@/assets/LifeScience/homogeneous/homogeneous-3/362bb74584de4563b6ba04ba95f64b1c.png';
import imgCorr2 from '@/assets/LifeScience/homogeneous/homogeneous-3/1c770f797252454d895b8f1ca4aaa44f.png';
import imgCorr3 from '@/assets/LifeScience/homogeneous/homogeneous-3/eb2a4556015f4c0799475bbd8ab98b6c.png';
import imgParams from '@/assets/LifeScience/homogeneous/homogeneous-3/e5a5a11d0ce0469e9dbd7f80e8431651.png';
import imgList from '@/assets/LifeScience/homogeneous/homogeneous-3/b8095dd54e1b46a68458d76b71b08847.png';
// PDF 说明书
import pdfSH2218 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2218.pdf';
import pdfSH2501 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2501.pdf';
import pdfSH2505 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2505.pdf';
import pdfSH2506 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2506.pdf';
import pdfSH2507 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2507.pdf';
import pdfSH2508 from '@/assets/LifeScience/homogeneous/homogeneous-3/SH2508.pdf';

const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' },
]
const currentTab = ref('intro')
const previewImg = ref('')
const openPreview = (img) => { previewImg.value = img }
const closePreview = () => { previewImg.value = '' }
const manualFiles = [
  { name: 'SH2218 中文 hIgG检测试剂盒【宽范围】（均相发光法）说明书V1.1 250526.pdf', url: pdfSH2218 },
  { name: 'SH2501 中文 hIgG1检测试剂盒【宽范围】（均相发光法）说明书V1.1 250526.pdf', url: pdfSH2501 },
  { name: 'SH2505 中文 小鼠总IgG检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf', url: pdfSH2505 },
  { name: 'SH2506 中文 小鼠IgG1检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf', url: pdfSH2506 },
  { name: 'SH2507 中文 小鼠IgG2a检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf', url: pdfSH2507 },
  { name: 'SH2508 中文 小鼠IgG2b检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf', url: pdfSH2508 },
]
</script>

<style scoped>
.homogeneous-page {
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
  display: block;
  max-width: 600px;
  width: 100%;
  margin: 18px auto 24px auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img, .img-block img {
  max-width: 100%;
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
  .homogeneous-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
}
</style> 