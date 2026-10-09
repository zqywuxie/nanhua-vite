<template>
  <CatalogContent title="Cytokine Detection Kit" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Cytokines are soluble proteins produced by various cells of the
            immune system, such as neutrophils, monocytes, macrophages, B cells,
            and T cells. They mainly include interleukins (ILs),
            colony-stimulating factors (CSFs), interferons (IFNs), tumor
            necrosis factors (TNFs), and transforming growth factors (TGFs).
            They are important regulators of cell and tissue growth, migration,
            development, and differentiation, playing key roles in tissue
            repair, cancer development and progression, control of cell
            proliferation and apoptosis, and immune response regulation.
            Therefore, cytokine detection is of great significance in basic
            immunology research, disease mechanism exploration, disease
            diagnosis, vaccine development, and cell therapy.
          </p>
          <p>
            ELISA is a commonly used method for cytokine detection, but it is
            cumbersome, time-consuming, and susceptible to various factors.
            Vdobiotech has launched a series of homogeneous luminescence
            cytokine detection kits. Compared with traditional ELISA, there is
            no need for repeated washing steps; only simple sample addition and
            incubation are required before testing, significantly simplifying
            the operation, reducing labor and time costs, and enabling rapid and
            accurate quantification of cytokines in cell culture supernatant or
            serum.
          </p>
          <p>
            <a :href="pdfSolution" target="_blank" rel="noopener noreferrer"
              >Homogeneous Luminescence Solution</a
            >
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="image.png"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Product Features
          </h2>
<ul class="catalog-features">
            <li>
              Homogeneous, wash-free reaction mode, convenient and efficient,
              compatible with automated instruments
            </li>
            <li>
              Wide dynamic range, small sample volume, enables high-throughput
              rapid detection
            </li>
            <li>
              Higher sensitivity and anti-interference capability, good
              stability, excellent repeatability
            </li>
            <li>
              High sample compatibility, suitable for natural samples such as
              cell supernatant and serum
            </li>
          </ul>
          <h2 class="section-title" style="margin-top: 36px">
            Application Scenarios
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Application Scenarios"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Detection Principle
          </h2>
          <p>
            Taking the Human IL-6 (hIL-6) Detection Kit as an example: The core
            components of the kit include hIL-6 antibody 1 crosslinked to
            acceptor beads (R1), biotin-labeled hIL-6 antibody 2 (R2), and
            streptavidin crosslinked to donor beads (R3). In the detection
            system, antibody 1 crosslinked to acceptor beads and biotin-labeled
            antibody 2 are incubated with the analyte to form a double-antibody
            sandwich immune complex, which then reacts with donor beads to form
            a luminescent complex. When the distance between the two beads is
            less than 200 nm, upon excitation, the donor beads generate singlet
            oxygen, which diffuses to the acceptor beads, causing them to emit
            light. The light signal is collected by a photosensitive element,
            and mathematical fitting is used to calculate the concentration of
            hIL-6 in the analyte.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Detection Principle"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Validation Data
          </h2>
          <p>
            The detection performance of this series of kits has been fully
            validated under different procedures to ensure the reliability of
            the results.
          </p>
          <p>
            (Note: Detection procedure 1, incubation at 37°C; detection
            procedure 2, incubation at room temperature.)
          </p>
          <div class="verify-block">
            <div class="verify-item">
              <span class="verify-title">1. Dynamic Range:</span> 0-30000 pg/mL
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img4"
                alt="Dynamic Range"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">2. Linear Range:</span> 0.13~3000 pg/mL
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img5"
                alt="Linear Range"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">3. Limit of Blank:</span> Calibrator C1
              was tested 20 times, and the mean and SD of the signal were
              calculated. The mean signal + 2×SD was calculated using the
              standard curve, and the corresponding concentration value is the
              limit of blank.
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img6"
                alt="Limit of Blank"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">4. Repeatability:</span> High and low
              concentration samples were tested 10 times, and the concentration
              CV was calculated.
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img7"
                alt="Repeatability"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">5. Intermediate Precision:</span> High
              and low value samples were tested in 5 rounds, each round repeated
              5 times, and the concentration CV was calculated.
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img8"
                alt="Intermediate Precision"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">6. Accuracy:</span> High and low
              concentration hIL-6 samples were mixed at a 1:9 ratio and the
              recovery rate was tested.
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img9"
                alt="Accuracy"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">7. Specificity:</span> The following
              proteins were diluted to 0.05 μg/mL with calibrator buffer and the
              cross-interference rate was tested.
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img10"
                alt="Specificity"
                class="intro-img"
              />
            </div>
            <div class="verify-item">
              <span class="verify-title">8. Traceability:</span> The standard
              material NIBSC 89/548 was tested, 1 IU/mL ≈ 5 pg/mL.
            </div>
          </div>
          <h2 class="section-title" style="margin-top: 36px">
            Summary of Cytokine Detection Kit Performance Parameters
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img11"
              alt="Performance Parameter Summary"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img12"
              alt="Product List"
              class="intro-img"
            />
          </div>
          <h2 class="section-title" style="margin-top: 36px">References</h2>
          <ul>
            <li>
              Foster JR. The functions of cytokines and their uses in
              toxicology. Int J Exp Pathol. 2001 Jun;82(3):171-92.
            </li>
            <li>
              Stenken JA, Poschenrieder AJ. Bioanalytical chemistry of
              cytokines--a review. Anal Chim Acta. 2015 Jan 1;853:95-115.
            </li>
          </ul>
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
import img1 from "@/assets/LifeScience/homogeneous/homogeneous-5/ec96b788557648bc854058eb3975768e.png";
import img2 from "@/assets/LifeScience/homogeneous/homogeneous-5/dc6cf56d793042a6ba4bb67616d80e94.png";
import img3 from "@/assets/LifeScience/homogeneous/homogeneous-5/b41b355f20dd400180242613e120c651.png";
import img4 from "@/assets/LifeScience/homogeneous/homogeneous-5/2800724abbff4bcda2b2947465453d32.png";
import img5 from "@/assets/LifeScience/homogeneous/homogeneous-5/1bcf54e52d5941c29e90023147804ce3.png";
import img6 from "@/assets/LifeScience/homogeneous/homogeneous-5/bf09c9133f97466c8af02887b9b5299d.png";
import img7 from "@/assets/LifeScience/homogeneous/homogeneous-5/3aae9655c4a348e4a719c683aeb30a0f.png";
import img8 from "@/assets/LifeScience/homogeneous/homogeneous-5/c698b56488d640eea18d86025d671995.png";
import img9 from "@/assets/LifeScience/homogeneous/homogeneous-5/b390cf6d3ca545f3bc122f7f1c4d25cd.png";
import img10 from "@/assets/LifeScience/homogeneous/homogeneous-5/686a5e2cdbdd4e1fbf47e7a2c866b7b3.png";
import img11 from "@/assets/LifeScience/homogeneous/homogeneous-5/8abe35eed8724de4840c5917c3cea409.png";
import img12 from "@/assets/LifeScience/homogeneous/homogeneous-5/b417966294a1480c83283f88270ef72c.png";
import pdfSH2201 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2201.pdf";
import pdfSH2203 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2203.pdf";
import pdfSH2204 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2204.pdf";
import pdfSH2205 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2205.pdf";
import pdfSH2206 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2206.pdf";
import pdfSH2207 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2207.pdf";
import pdfSH2208 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2208.pdf";
import pdfSH2209 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2209.pdf";
import pdfSH2210 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2210.pdf";
import pdfSH2211 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2211.pdf";
import pdfSH2213 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2213.pdf";
import pdfSH2401 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2401.pdf";
import pdfSH2402 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2402.pdf";
import pdfSH2403 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2403.pdf";
import pdfSH2404 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2404.pdf";
import pdfSH2405 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2405.pdf";
import pdfSH2406 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2406.pdf";
import pdfSH2407 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2407.pdf";
import pdfSH2408 from "@/assets/LifeScience/homogeneous/homogeneous-5/SH2408.pdf";
// 均相发光解决方案 PDF（如有本地文件可import，否则留空）
const pdfSolution = "";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "SH2201 Cytokine Detection Kit Manual.pdf", url: pdfSH2201 },
  { name: "SH2203 Cytokine Detection Kit Manual.pdf", url: pdfSH2203 },
  { name: "SH2204 Cytokine Detection Kit Manual.pdf", url: pdfSH2204 },
  { name: "SH2205 Cytokine Detection Kit Manual.pdf", url: pdfSH2205 },
  { name: "SH2206 Cytokine Detection Kit Manual.pdf", url: pdfSH2206 },
  { name: "SH2207 Cytokine Detection Kit Manual.pdf", url: pdfSH2207 },
  { name: "SH2208 Cytokine Detection Kit Manual.pdf", url: pdfSH2208 },
  { name: "SH2209 Cytokine Detection Kit Manual.pdf", url: pdfSH2209 },
  { name: "SH2210 Cytokine Detection Kit Manual.pdf", url: pdfSH2210 },
  { name: "SH2211 Cytokine Detection Kit Manual.pdf", url: pdfSH2211 },
  { name: "SH2213 Cytokine Detection Kit Manual.pdf", url: pdfSH2213 },
  { name: "SH2401 Cytokine Detection Kit Manual.pdf", url: pdfSH2401 },
  { name: "SH2402 Cytokine Detection Kit Manual.pdf", url: pdfSH2402 },
  { name: "SH2403 Cytokine Detection Kit Manual.pdf", url: pdfSH2403 },
  { name: "SH2404 Cytokine Detection Kit Manual.pdf", url: pdfSH2404 },
  { name: "SH2405 Cytokine Detection Kit Manual.pdf", url: pdfSH2405 },
  { name: "SH2406 Cytokine Detection Kit Manual.pdf", url: pdfSH2406 },
  { name: "SH2407 Cytokine Detection Kit Manual.pdf", url: pdfSH2407 },
  { name: "SH2408 Cytokine Detection Kit Manual.pdf", url: pdfSH2408 },
];
</script>

<style scoped>
a {
  color: #409eff;
  text-decoration: underline;
}
.verify-block {
  margin: 18px 0 24px 0;
}
.verify-item {
  margin-bottom: 24px;
}
.verify-title {
  font-weight: bold;
  font-size: 1.08rem;
  margin-right: 8px;
}
</style>
