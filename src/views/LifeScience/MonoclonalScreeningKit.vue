<template>
  <CatalogContent title="Monoclonal Antibody Screening Kit" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <h2 class="section-title">Product Introduction</h2>
      <p>During the antibody discovery process, researchers face several critical decisions, such as selecting the best clones and screening candidate drugs. As a core step in this process, antibody screening directly determines the efficiency of subsequent drug development and the success rate of clinical translation. Therefore, establishing an antibody screening platform that combines rapid detection, high-throughput analysis, high accuracy, and ease of operation will provide greater assurance for successful drug development.</p>
      <p>In the IVD field, monoclonal antibodies are key raw materials for immunoassay reagents (such as ELISA, chemiluminescence, fluorescence immunoassay, etc.) and are widely used for the detection of disease markers (such as tumor markers, infectious disease antigens, hormones, etc.), offering high sensitivity and specificity. In sandwich immunoassays, effective monoclonal antibody screening yields high-affinity antibodies, ensuring high performance and low cross-reactivity of the detection system.</p>
      <p>Vdobiotech has successfully developed mouse/human monoclonal antibody screening reagents based on homogeneous luminescence assay (HiLA), enabling efficient screening of positive clones and significantly improving screening efficiency.</p>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgPrinciple" alt="Principle of Homogeneous Luminescence Monoclonal Screening" class="intro-img" />
        <div style="color:#888;font-size:14px;margin-top:8px;">Principle of Homogeneous Luminescence (HiLA) Monoclonal Screening</div>
      </div>
      <h2 class="section-title" style="margin-top:36px;">Product Features</h2>
<ul class="catalog-features">
        <li><strong>Excellent performance</strong>: High sensitivity, wide linear range, reliable results</li>
        <li><strong>Easy operation</strong>: Only sample addition and incubation required, results in less than 2 hours</li>
        <li><strong>Sample saving</strong>: Only 20μL required per reaction, suitable for precious samples</li>
      </ul>
      <h2 class="section-title" style="margin-top:36px;">Product Performance</h2>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgPerf1" alt="Performance 1" class="intro-img" />
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgPerf2" alt="Performance 2" class="intro-img" />
      </div>
      <h2 class="section-title" style="margin-top:36px;">Application Cases</h2>
      <div style="font-size:1.1rem;margin-top:24px;">1. Comparison of Monoclonal Screening Modes</div>
      <p>In monoclonal antibody screening, we compared the detection performance of the same antibody sample using both homogeneous luminescence assay and ELISA. The results showed that the homogeneous luminescence assay kit significantly outperformed ELISA in terms of detection sensitivity and range, demonstrating superior detection performance.</p>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgCase1" alt="Mode Comparison 1" class="intro-img" />
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgCase2" alt="Mode Comparison 2" class="intro-img" />
      </div>
      <div style="font-size:1.1rem;margin-top:24px;">2. Example: Mouse IgG Screening in Cell Supernatant</div>
      <p>Comparative analysis of HiLA and ELISA for screening mouse IgG in cell supernatant.</p>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">1) Comparison of Screening Schemes</div>
      <div class="img-block" style="margin-left:32px;">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgScheme" alt="Screening Scheme Comparison" class="intro-img" />
      </div>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">2) Comparison of Screening Results</div>
      <div class="img-block" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:12px;margin-left:32px;">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgResult1" alt="Screening Result 1" class="intro-img" />
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgResult2" alt="Screening Result 2" class="intro-img" />
      </div>
      <div style="margin-left:32px;">The results showed that the positive/negative concordance rate between HiLA and ELISA was 100%, and the S/N of HiLA was significantly better than that of ELISA.</div>
      <div style="font-size:1.1rem;margin-left:32px;margin-top:12px;">3) Analysis of Screening Results:</div>
      <div style="margin-left:32px;">• In the homogeneous luminescence monoclonal screening scheme, the Mouse Total IgG Detection Kit (Wide Range) (SH2505) was first used to quantify IgG in cell supernatant and adjust all samples to the same concentration, effectively eliminating result bias caused by differences in IgG concentration.</div>
      <div style="margin-left:32px;">• Compared with ELISA, the homogeneous luminescence screening kit uses anti-His antibody for detection, avoiding false positive interference from anti-tag antibodies, thus providing higher detection reliability.</div>
      <div style="margin-left:32px;">• The results showed that the homogeneous luminescence platform demonstrated excellent detection performance and application value in monoclonal screening.</div>
      <h2 class="section-title" style="margin-top:36px;">Product List</h2>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgList" alt="Product List" class="intro-img" />
      </div>
    </section>
    <!-- Tab Content: Product Manuals -->
    <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
      <h2 class="section-title">Product Manuals</h2>
      <ul class="manual-list">
        <li v-for="file in manualFiles" :key="file.name">
          <a :href="file.url" target="_blank" rel="noopener noreferrer">
            <i class="el-icon-document" style="margin-right:6px;"></i>{{ file.name }}
          </a>
        </li>
      </ul>
    </section>
    <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from 'vue'
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
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
const manualFiles = [
  { name: 'SHC001 单抗筛选套装（均相发光法）说明书.pdf', url: pdfManual },
]
</script>

<style scoped>
/* 应用案例序号标题加粗 */
.intro .case-section-title, .intro .case-serial-title, .intro .serial-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
  display: block;
}
</style>
