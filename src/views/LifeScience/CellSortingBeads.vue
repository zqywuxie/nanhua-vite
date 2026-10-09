<template>
  <CatalogContent title="Cell Sorting Magnetic Beads" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Technical Principle -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Technical Principle</h2>
          <p >
            Magnetic-activated cell sorting (MACS) technology is based on the
            specific binding of cell surface antigens and antibodies. By
            labeling target cells with superparamagnetic beads, it enables rapid
            and high-purity sorting, providing an efficient and gentle cell
            separation solution. This technology features fast sorting, high
            cell viability, and high recovery rate. The sorted cells can be
            widely used in cell culture, flow cytometry, CAR-T/TCR-T cell
            therapy, and other fields.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Introduction</h2>
          <p >
            VDO Biotech is committed to providing high-quality magnetic bead
            products and supporting solutions. According to different sorting
            needs, we have developed column-based and column-free cell sorting
            magnetic beads with particle sizes of 50–100 nm and 150–200 nm, made
            of dextran, to help research and industrial customers achieve more
            precise and efficient cell studies.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>
              High safety: Made of natural dextran, with good biodegradability.
            </li>
            <li>
              Efficient and convenient: Obtain high-purity, high-recovery target
              cells in just 20 minutes.
            </li>
            <li>
              Excellent performance: Sorting purity ≥90%, cell recovery ≥85%.
            </li>
            <li>
              No interference and compatibility: Small, degradable beads
              perfectly compatible with various downstream experiments.
            </li>
            <li>
              In-stock supply: Direct supply of mainstream marker sorting beads
              (CD3+/CD4+/CD8+/CD34+/SA, etc.), and customized development
              services available.
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Column-Based Cell Sorting Workflow</h2>
          <p >
            This product series uses 50–100 nm magnetic beads, with
            corresponding antibodies or proteins coupled to the surface, and is
            used with cell sorting columns for gentle sorting. After sorting,
            there is no need to remove the beads, and flow cytometry is not
            affected. The beads are made of biodegradable materials, and the
            production process is sterile, so downstream culture is not
            affected. Perfectly matches research and clinical needs.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Column-Based Cell Sorting Workflow Diagram"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Column-Based Cell Sorting Workflow Diagram
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Column-Free Cell Sorting Workflow</h2>
          <p >
            This product series uses magnetic beads with a diameter of 150–200
            nm, with proteins on the surface that can bind to biomolecules. Used
            with biomolecules, it flexibly sorts various target cells. These
            beads do not require cell sorting columns, making operation more
            convenient and cost more controllable.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Column-Free Cell Sorting Workflow Diagram"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Column-Free Cell Sorting Workflow Diagram
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Cell Sorting Magnetic Beads Product List"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Cell Sorting Magnetic Beads Product List
            </div>
          </div>
        </section>
        <!-- Tab Content: Manual -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i
                  class="el-icon-document"
                  style="margin-right: 6px; color: #409eff"
                ></i
                >{{ file.name }}
              </a>
            </li>
          </ul>
        </section>
        <!-- Image Preview Modal -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
// Tab 配置
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const currentTab = ref("intro");
// 图片资源
import img3 from "@/assets/LifeScience/cell/cell-2/b7479470bf784a5ba488583fbd8002b7.png";
import img2 from "@/assets/LifeScience/cell/cell-2/bd5996e9993841f99f02c53d8e6f2878.png";
import img1 from "@/assets/LifeScience/cell/cell-2/3a2bfaf2f1b349659fdc48e194bd10a0.png";
const allImgs = [
  { src: img1, alt: "Cell Sorting Magnetic Beads Product Image 1" },
  { src: img2, alt: "Cell Sorting Magnetic Beads Product Image 2" },
  { src: img3, alt: "Cell Sorting Magnetic Beads Product Image 3" },
];
// PDF 说明书
import pdf1 from "@/assets/LifeScience/cell/cell-2/CS1001.pdf";
import pdf2 from "@/assets/LifeScience/cell/cell-2/CS1002.pdf";
import pdf3 from "@/assets/LifeScience/cell/cell-2/CS1003.pdf";
import pdf4 from "@/assets/LifeScience/cell/cell-2/CS1004.pdf";
import pdf5 from "@/assets/LifeScience/cell/cell-2/CS1005.pdf";
import pdf6 from "@/assets/LifeScience/cell/cell-2/CS1006.pdf";
import pdf7 from "@/assets/LifeScience/cell/cell-2/CS1009.pdf";
import pdf8 from "@/assets/LifeScience/cell/cell-2/CS1010.pdf";
import pdf9 from "@/assets/LifeScience/cell/cell-2/CS1011.pdf";
import pdf10 from "@/assets/LifeScience/cell/cell-2/CS1012.pdf";
import pdf11 from "@/assets/LifeScience/cell/cell-2/CS1013.pdf";
import pdf12 from "@/assets/LifeScience/cell/cell-2/CS1014.pdf";
import pdf13 from "@/assets/LifeScience/cell/cell-2/CS1015.pdf";
import pdf14 from "@/assets/LifeScience/cell/cell-2/CS1016.pdf";
const manualFiles = [
  {
    name: "CS1001-CD3 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf1,
  },
  {
    name: "CS1002-CD4 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf2,
  },
  {
    name: "CS1003-CD8 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf3,
  },
  {
    name: "CS1004-CD34 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf4,
  },
  {
    name: "CS1005-CD138 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf5,
  },
  { name: "CS1006-Streptavidin Sorting Magnetic Beads Manual.pdf", url: pdf6 },
  {
    name: "CS1009-NK Cell Negative Selection Kit (Anti-Human) Manual.pdf",
    url: pdf7,
  },
  {
    name: "CS1010-VDS Neutrophil Negative Selection Kit (Anti-Human) Manual.pdf",
    url: pdf8,
  },
  {
    name: "CS1011-VDS Streptavidin Sorting Magnetic Beads Manual.pdf",
    url: pdf9,
  },
  { name: "CS1012-Anti-Biotin Sorting Magnetic Beads Manual.pdf", url: pdf10 },
  {
    name: "CS1013-VDS CD138 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf11,
  },
  {
    name: "CS1014-VDS Monocyte Negative Selection Kit (Anti-Human) Manual.pdf",
    url: pdf12,
  },
  {
    name: "CS1015-VDS T Cell Negative Selection Kit (Anti-Human) Manual.pdf",
    url: pdf13,
  },
  {
    name: "CS1016-CD14 Sorting Magnetic Beads (Anti-Human) Manual.pdf",
    url: pdf14,
  },
];
// 图片预览弹窗
</script>

<style scoped>
</style>
