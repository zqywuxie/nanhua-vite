<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Mouse Pairing Antibody Screening Kit</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>Methods such as ELISA, SPR, and BLI have limitations in paired antibody screening/epitope identification: they are time-consuming and labor-intensive, require antibody purification and labeling method development, and have low efficiency, long experimental cycles, and limited throughput.</p>
      <p>To address these technical bottlenecks, Vdobiotech has innovatively developed the Homogeneous Luminescence Assay (HiLA) Mouse Pairing Antibody Screening Kit, suitable for early-stage/unpurified antibody screening. It significantly reduces experimental cost and time, optimizes the workflow, and enables efficient antibody pair identification and candidate drug optimization.</p>
      <div class="section-title" style="margin-top:36px;">Product Advantages</div>
      <ul>
        <li><strong>No purification required</strong>: Eliminates tedious antibody purification steps, compatible with various sample types</li>
        <li><strong>No labeling required</strong>: No need for antibody coating or labeling, direct detection of raw samples</li>
        <li><strong>High screening efficiency</strong>: Detection can be completed in as little as 1 hour, compatible with automated equipment</li>
        <li>Homogeneous, wash-free, easy operation, and intuitive results</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Screening Principle</div>
      <div class="img-block">
        <img :src="img1" alt="Screening Principle" class="intro-img" @click="openPreview(img1)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Application Cases</div>
      <p>Using the following scheme, 14 cell supernatant samples were screened for mouse IgG pairing.</p>
      <div class="img-block">
        <img :src="img2" alt="Application Case" class="intro-img" @click="openPreview(img2)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Additional Notes</div>
      <ul>
        <li>For large-scale antibody screening, it is recommended to first use the Mouse Monoclonal Antibody Screening Kit (Cat. No.: SHC001) for preliminary titer screening to quickly eliminate negative samples and significantly reduce subsequent pairing experiment workload.</li>
        <li>It is recommended to use the Mouse Total IgG Detection Kit (Cat. No.: SH2505) to quantify mouse IgG in complex samples, then dilute to the same concentration for analysis, effectively eliminating uncertainty caused by differences in IgG concentration.</li>
        <li>You may set a reasonable positive threshold according to the specific experimental situation.</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Test Result 1</div>
      <ul>
        <li>Titer determination: Negative monoclonal samples 1#, 5#, 7#, 9#, and 12# were successfully excluded by the Mouse Monoclonal Antibody Screening Kit.</li>
        <li>Sample concentration normalization: After quantification with the Mouse Total IgG Detection Kit, positive samples were diluted to the same concentration.</li>
        <li>Pairing antibody screening: The Mouse Pairing Antibody Screening Kit (SHC005) was used for detection, and the pairing screening results were obtained (see Test Result 2 for details).</li>
      </ul>
      <div class="img-block">
        <img :src="img3" alt="Test Result 1" class="intro-img" @click="openPreview(img3)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Test Result 2</div>
      <ul>
        <li>Orthogonal pairing screening: Based on signal-to-noise ratio (S/N) evaluation, the 20 best antibody pair combinations with the highest affinity were selected.</li>
        <li>The results showed that antibodies 4#, 10#, and 13# exhibited broad-spectrum pairing characteristics and could form effective pairings with antibodies 8#, 14#, 11#, 2#, 6#, and 3#.</li>
      </ul>
      <div class="img-block">
        <img :src="img4" alt="Test Result 2" class="intro-img" @click="openPreview(img4)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Result Analysis</div>
      <ul>
        <li>Compared with customer ELISA data, the antibody pairing screening results of the homogeneous luminescence assay showed high consistency.</li>
        <li>The Vdobiotech HiLA Mouse Pairing Antibody Screening Kit can significantly improve the efficiency of antibody pairing screening, save time and resources, and, with its excellent performance and convenient operation, help accelerate scientific breakthroughs. It is an ideal choice for antibody pairing screening and epitope identification.</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Related Product List</div>
      <div class="img-block">
        <img :src="img5" alt="Related Product List" class="intro-img" @click="openPreview(img5)" />
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
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from 'vue'
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import img1 from '@/assets/LifeScience/homogeneous/homogeneous-6/5641ccb0ca554c4c896d9c127440e51e.png';
import img2 from '@/assets/LifeScience/homogeneous/homogeneous-6/68f44be5e1c5495497fc3d475b663c78.png';
import img3 from '@/assets/LifeScience/homogeneous/homogeneous-6/ce9214764c7b425eab171afc1255c5b0.png';
import img4 from '@/assets/LifeScience/homogeneous/homogeneous-6/fa7e2047d40447cca7ecf650e645e5e3.png';
import img5 from '@/assets/LifeScience/homogeneous/homogeneous-6/fde9c13bdcca4da2abcb22141516c32f.png';
import pdfManual from '@/assets/LifeScience/homogeneous/homogeneous-6/SHC005.pdf';
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual Download' },
]
const currentTab = ref('intro')
const previewImg = ref('')
const openPreview = (img) => { previewImg.value = img }
const closePreview = () => { previewImg.value = '' }
const manualFiles = [
  { name: 'SHC005 小鼠配对抗体筛选试剂盒（均相发光法）说明书.pdf', url: pdfManual },
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
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px rgba(64,158,255,0.18);
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