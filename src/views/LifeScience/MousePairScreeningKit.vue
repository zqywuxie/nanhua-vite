<template>
  <CatalogContent title="Mouse Pairing Antibody Screening Kit" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <h2 class="section-title">Product Introduction</h2>
      <p>Methods such as ELISA, SPR, and BLI have limitations in paired antibody screening/epitope identification: they are time-consuming and labor-intensive, require antibody purification and labeling method development, and have low efficiency, long experimental cycles, and limited throughput.</p>
      <p>To address these technical bottlenecks, Vdobiotech has innovatively developed the Homogeneous Luminescence Assay (HiLA) Mouse Pairing Antibody Screening Kit, suitable for early-stage/unpurified antibody screening. It significantly reduces experimental cost and time, optimizes the workflow, and enables efficient antibody pair identification and candidate drug optimization.</p>
      <h2 class="section-title" style="margin-top:36px;">Product Advantages</h2>
<ul class="catalog-features">
        <li><strong>No purification required</strong>: Eliminates tedious antibody purification steps, compatible with various sample types</li>
        <li><strong>No labeling required</strong>: No need for antibody coating or labeling, direct detection of raw samples</li>
        <li><strong>High screening efficiency</strong>: Detection can be completed in as little as 1 hour, compatible with automated equipment</li>
        <li>Homogeneous, wash-free, easy operation, and intuitive results</li>
      </ul>
      <h2 class="section-title" style="margin-top:36px;">Screening Principle</h2>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img1" alt="Screening Principle" class="intro-img" />
      </div>
      <h2 class="section-title" style="margin-top:36px;">Application Cases</h2>
      <p>Using the following scheme, 14 cell supernatant samples were screened for mouse IgG pairing.</p>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img2" alt="Application Case" class="intro-img" />
      </div>
      <h2 class="section-title" style="margin-top:36px;">Additional Notes</h2>
      <ul>
        <li>For large-scale antibody screening, it is recommended to first use the Mouse Monoclonal Antibody Screening Kit (Cat. No.: SHC001) for preliminary titer screening to quickly eliminate negative samples and significantly reduce subsequent pairing experiment workload.</li>
        <li>It is recommended to use the Mouse Total IgG Detection Kit (Cat. No.: SH2505) to quantify mouse IgG in complex samples, then dilute to the same concentration for analysis, effectively eliminating uncertainty caused by differences in IgG concentration.</li>
        <li>You may set a reasonable positive threshold according to the specific experimental situation.</li>
      </ul>
      <h2 class="section-title" style="margin-top:36px;">Test Result 1</h2>
      <ul>
        <li>Titer determination: Negative monoclonal samples 1#, 5#, 7#, 9#, and 12# were successfully excluded by the Mouse Monoclonal Antibody Screening Kit.</li>
        <li>Sample concentration normalization: After quantification with the Mouse Total IgG Detection Kit, positive samples were diluted to the same concentration.</li>
        <li>Pairing antibody screening: The Mouse Pairing Antibody Screening Kit (SHC005) was used for detection, and the pairing screening results were obtained (see Test Result 2 for details).</li>
      </ul>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img3" alt="Test Result 1" class="intro-img" />
      </div>
      <h2 class="section-title" style="margin-top:36px;">Test Result 2</h2>
      <ul>
        <li>Orthogonal pairing screening: Based on signal-to-noise ratio (S/N) evaluation, the 20 best antibody pair combinations with the highest affinity were selected.</li>
        <li>The results showed that antibodies 4#, 10#, and 13# exhibited broad-spectrum pairing characteristics and could form effective pairings with antibodies 8#, 14#, 11#, 2#, 6#, and 3#.</li>
      </ul>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img4" alt="Test Result 2" class="intro-img" />
      </div>
      <h2 class="section-title" style="margin-top:36px;">Result Analysis</h2>
      <ul>
        <li>Compared with customer ELISA data, the antibody pairing screening results of the homogeneous luminescence assay showed high consistency.</li>
        <li>The Vdobiotech HiLA Mouse Pairing Antibody Screening Kit can significantly improve the efficiency of antibody pairing screening, save time and resources, and, with its excellent performance and convenient operation, help accelerate scientific breakthroughs. It is an ideal choice for antibody pairing screening and epitope identification.</li>
      </ul>
      <h2 class="section-title" style="margin-top:36px;">Related Product List</h2>
      <div class="img-block">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="img5" alt="Related Product List" class="intro-img" />
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
const manualFiles = [
  { name: 'SHC005 小鼠配对抗体筛选试剂盒（均相发光法）说明书.pdf', url: pdfManual },
]
</script>

<style scoped>
</style>
