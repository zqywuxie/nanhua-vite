<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Monoclonal Antibody Screening Kit</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>During the antibody discovery process, researchers face several critical decisions, such as selecting the best clones and screening candidate drugs. As a core step in this process, antibody screening directly determines the efficiency of subsequent drug development and the success rate of clinical translation. Therefore, establishing an antibody screening platform that combines rapid detection, high-throughput analysis, high accuracy, and ease of operation will provide greater assurance for successful drug development.</p>
      <p>In the IVD field, monoclonal antibodies are key raw materials for immunoassay reagents (such as ELISA, chemiluminescence, fluorescence immunoassay, etc.) and are widely used for the detection of disease markers (such as tumor markers, infectious disease antigens, hormones, etc.), offering high sensitivity and specificity. In sandwich immunoassays, effective monoclonal antibody screening yields high-affinity antibodies, ensuring high performance and low cross-reactivity of the detection system.</p>
      <p>Vdobiotech has successfully developed mouse/human monoclonal antibody screening reagents based on homogeneous luminescence assay (HiLA), enabling efficient screening of positive clones and significantly improving screening efficiency.</p>
      <div class="img-block">
        <img :src="imgPrinciple" alt="Principle of Homogeneous Luminescence Monoclonal Screening" class="intro-img" @click="openPreview(imgPrinciple)" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Principle of Homogeneous Luminescence (HiLA) Monoclonal Screening</div>
      </div>
      <div class="section-title" style="margin-top:36px;">Product Features</div>
      <ul>
        <li><strong>Excellent performance</strong>: High sensitivity, wide linear range, reliable results</li>
        <li><strong>Easy operation</strong>: Only sample addition and incubation required, results in less than 2 hours</li>
        <li><strong>Sample saving</strong>: Only 20μL required per reaction, suitable for precious samples</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Product Performance</div>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;">
        <img :src="imgPerf1" alt="Performance 1" class="intro-img" @click="openPreview(imgPerf1)" />
        <img :src="imgPerf2" alt="Performance 2" class="intro-img" @click="openPreview(imgPerf2)" />
      </div>
      <div class="section-title" style="margin-top:36px;">Application Cases</div>
      <div style="font-size:1.1rem;margin-top:24px;">1. Comparison of Monoclonal Screening Modes</div>
      <p>In monoclonal antibody screening, we compared the detection performance of the same antibody sample using both homogeneous luminescence assay and ELISA. The results showed that the homogeneous luminescence assay kit significantly outperformed ELISA in terms of detection sensitivity and range, demonstrating superior detection performance.</p>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;">
        <img :src="imgCase1" alt="Mode Comparison 1" class="intro-img" @click="openPreview(imgCase1)" />
        <img :src="imgCase2" alt="Mode Comparison 2" class="intro-img" @click="openPreview(imgCase2)" />
      </div>
      <div style="font-size:1.1rem;margin-top:24px;">2. Example: Mouse IgG Screening in Cell Supernatant</div>
      <p>Comparative analysis of HiLA and ELISA for screening mouse IgG in cell supernatant.</p>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">1) Comparison of Screening Schemes</div>
      <div class="img-block" style="margin-left:32px;">
        <img :src="imgScheme" alt="Screening Scheme Comparison" class="intro-img" @click="openPreview(imgScheme)" />
      </div>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">2) Comparison of Screening Results</div>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;margin-left:32px;">
        <img :src="imgResult1" alt="Screening Result 1" class="intro-img" @click="openPreview(imgResult1)" />
        <img :src="imgResult2" alt="Screening Result 2" class="intro-img" @click="openPreview(imgResult2)" />
      </div>
      <div style="margin-left:32px;">The results showed that the positive/negative concordance rate between HiLA and ELISA was 100%, and the S/N of HiLA was significantly better than that of ELISA.</div>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">3) Analysis of Screening Results:</div>
      <div style="margin-left:32px;">• In the homogeneous luminescence monoclonal screening scheme, the Mouse Total IgG Detection Kit (Wide Range) (SH2505) was first used to quantify IgG in cell supernatant and adjust all samples to the same concentration, effectively eliminating result bias caused by differences in IgG concentration.</div>
      <div style="margin-left:32px;">• Compared with ELISA, the homogeneous luminescence screening kit uses anti-His antibody for detection, avoiding false positive interference from anti-tag antibodies, thus providing higher detection reliability.</div>
      <div style="margin-left:32px;">• The results showed that the homogeneous luminescence platform demonstrated excellent detection performance and application value in monoclonal screening.</div>
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
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from 'vue'
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import imgPrinciple from '@/assets/LifeScience/homogeneous/homogeneous-4/2ea0947a7bd84e8389ab990b844620dd.png';
import imgPerf1 from '@/assets/LifeScience/homogeneous/homogeneous-4/d91e18064f1348548a5a3d4fb34641a8.png';
import imgPerf2 from '@/assets/LifeScience/homogeneous/homogeneous-4/4c04827c19574df480eb14d5031a353d.png';
import imgCase1 from '@/assets/LifeScience/homogeneous/homogeneous-4/cb09ca8356d747c2a63e8cd8cca19499.png';
import imgCase2 from '@/assets/LifeScience/homogeneous/homogeneous-4/ef238bf803e0495081d26badab8f582e.png';
import imgScheme from '@/assets/LifeScience/homogeneous/homogeneous-4/a00330be402d4abcbde7f6cf2745da40.png';
import imgResult1 from '@/assets/LifeScience/homogeneous/homogeneous-4/b77e9f65cb8a43f1b8f3d23fe0771e2f.jpg';
import imgResult2 from '@/assets/LifeScience/homogeneous/homogeneous-4/dcd36cf7d5f546e0beb1d0dcc3110e24.jpg';
import imgList from '@/assets/LifeScience/homogeneous/homogeneous-4/ef15dafe040a4a2f8bb9ef7c59887357.png';
import pdfManual from '@/assets/LifeScience/homogeneous/homogeneous-4/SHC001.pdf';

const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' },
]
const currentTab = ref('intro')
const previewImg = ref('')
const openPreview = (img) => { previewImg.value = img }
const closePreview = () => { previewImg.value = '' }
const manualFiles = [
  { name: 'SHC001 单抗筛选套装（均相发光法）说明书.pdf', url: pdfManual },
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
p {
  font-size: 1.08rem;
  color: #333;
  line-height: 1.9;
  margin-bottom: 16px;
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
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
}
/* 应用案例序号标题加粗 */
.intro .case-section-title, .intro .case-serial-title, .intro .serial-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
  display: block;
}
</style> 