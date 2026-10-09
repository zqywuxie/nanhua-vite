<template>
  <CatalogContent title="IgG Detection Kit (Wide Range)" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Based on homogeneous luminescence technology, Vdobiotech has
            developed the HiLA series IgG detection kits, providing efficient
            solutions for IgG detection in various sample matrices such as cell
            culture supernatant, serum, or buffer, meeting the needs of diverse
            application scenarios.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgBanner"
              alt="banner"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Product Advantages
          </h2>
<ul class="catalog-features list-paddingleft-2">
            <li>
              Ultra-wide detection range: Direct detection of cell supernatant
              without dilution
            </li>
            <li>
              No sample purification: Eliminates lengthy antibody purification
              steps, simplifying the process
            </li>
            <li>
              Easy operation: Detection can be completed in as little as 30
              minutes, meeting high-throughput needs
            </li>
            <li>
              Micro-volume detection: Only 2-10μL sample required, suitable for
              precious sample analysis
            </li>
          </ul>
          <h2 class="section-title" style="margin-top: 36px">
            Detection Principle (Competitive Assay)
          </h2>
          <p>
            The core components of the kit include anti-IgG antibody crosslinked
            to acceptor beads (R1), biotin-labeled IgG (R2), and streptavidin
            crosslinked to donor beads (R3). In the detection system, the
            anti-IgG antibody crosslinked to acceptor beads and the
            biotin-labeled IgG are incubated together to form an immune complex,
            which then reacts with donor beads to form a luminescent complex.
            Upon excitation with 680 nm light, the donor beads generate singlet
            oxygen, which diffuses to the acceptor beads, causing them to emit
            light at 615 nm. When the sample contains IgG, it competes to bind
            anti-IgG, inhibiting the formation of the luminescent complex. The
            IgG concentration in the sample is inversely proportional to the
            light signal. The light signal is collected by a photosensitive
            element, and mathematical fitting is used to calculate the IgG
            concentration in the sample.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgPrinciple"
              alt="Detection Principle"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Validation Data
          </h2>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin-top: 24px"
          >
            1. Dynamic Range
          </h2>
          <p>
            All six kits have a wide dynamic range of 0-1000 μg/mL, allowing
            direct detection of samples such as high-concentration cell
            supernatant without dilution or purification.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgRange"
              alt="Dynamic Range"
              class="intro-img"
            />
          </div>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin-top: 24px"
          >
            2. Sample Correlation
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgCorr1"
              alt="Correlation 1"
              class="intro-img"
            />
          </div>
          <ul class="list-paddingleft-2">
            <li>
              Comparison with Siemens chemiluminescence results (n=30),
              correlation coefficient r=0.9589, showing good sample correlation.
            </li>
            <li>Sample type: Human serum</li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgCorr2"
              alt="Correlation 2"
              class="intro-img"
            />
          </div>
          <ul class="list-paddingleft-2">
            <li>
              Comparison with HPLC results (n=22), correlation coefficient
              r=0.9778, showing good sample correlation.
            </li>
            <li>Sample type: Cell culture supernatant</li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgCorr3"
              alt="Correlation 3"
              class="intro-img"
            />
          </div>
          <ul class="list-paddingleft-2">
            <li>
              Comparison with HPLC results (n=22), correlation coefficient
              r=0.9923, showing good sample correlation.
            </li>
            <li>Sample type: Cell culture supernatant</li>
          </ul>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin-top: 24px"
          >
            3. Summary of Performance Parameters
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgParams"
              alt="Performance Parameters"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgList"
              alt="Product List"
              class="intro-img"
            />
          </div>
        </section>
        <!-- Tab Content: Product Manuals -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i class="el-icon-document" style="margin-right: 6px"></i
                >{{ file.name }}
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
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgBanner from "@/assets/LifeScience/homogeneous/homogeneous-3/47edf6ca72604f37b64a1c0bf616ef15.png";
import imgPrinciple from "@/assets/LifeScience/homogeneous/homogeneous-3/9906046251c84bad99b9296952b55907.png";
import imgRange from "@/assets/LifeScience/homogeneous/homogeneous-3/462f5c4e0ab64356817866ecff74e9bf.png";
import imgCorr1 from "@/assets/LifeScience/homogeneous/homogeneous-3/362bb74584de4563b6ba04ba95f64b1c.png";
import imgCorr2 from "@/assets/LifeScience/homogeneous/homogeneous-3/1c770f797252454d895b8f1ca4aaa44f.png";
import imgCorr3 from "@/assets/LifeScience/homogeneous/homogeneous-3/eb2a4556015f4c0799475bbd8ab98b6c.png";
import imgParams from "@/assets/LifeScience/homogeneous/homogeneous-3/e5a5a11d0ce0469e9dbd7f80e8431651.png";
import imgList from "@/assets/LifeScience/homogeneous/homogeneous-3/b8095dd54e1b46a68458d76b71b08847.png";
// PDF 说明书
import pdfSH2218 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2218.pdf";
import pdfSH2501 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2501.pdf";
import pdfSH2505 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2505.pdf";
import pdfSH2506 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2506.pdf";
import pdfSH2507 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2507.pdf";
import pdfSH2508 from "@/assets/LifeScience/homogeneous/homogeneous-3/SH2508.pdf";

const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const currentTab = ref("intro");
const manualFiles = [
  {
    name: "SH2218 中文 hIgG检测试剂盒【宽范围】（均相发光法）说明书V1.1 250526.pdf",
    url: pdfSH2218,
  },
  {
    name: "SH2501 中文 hIgG1检测试剂盒【宽范围】（均相发光法）说明书V1.1 250526.pdf",
    url: pdfSH2501,
  },
  {
    name: "SH2505 中文 小鼠总IgG检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf",
    url: pdfSH2505,
  },
  {
    name: "SH2506 中文 小鼠IgG1检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf",
    url: pdfSH2506,
  },
  {
    name: "SH2507 中文 小鼠IgG2a检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf",
    url: pdfSH2507,
  },
  {
    name: "SH2508 中文 小鼠IgG2b检测试剂盒【宽范围】（均相发光法）说明书 250513 Ver.1.0.pdf",
    url: pdfSH2508,
  },
];
</script>

<style scoped>
</style>
