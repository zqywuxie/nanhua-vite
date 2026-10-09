<template>
  <CatalogContent title="Gel Filtration Chromatography" family="Life Science">
    <div class="gel-filtration-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Gel filtration chromatography, also known as size exclusion
            chromatography or molecular sieve chromatography, separates target
            molecules based on their size, with larger molecules eluting first,
            achieving separation by size.
          </p>
          <ul>
            <li>
              Commonly used in the final polishing stage when impurities are few
            </li>
            <li>Suitable for purification of small-volume samples</li>
            <li>
              Can also be used in the crude purification stage for group
              separation (e.g., desalting)
            </li>
            <li>
              Only one buffer is required for separation; the type of buffer has
              little effect on separation. Adding 150 mM NaCl to the buffer can
              effectively reduce nonspecific adsorption of the target protein.
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Separation Range and Process</h2>
          <div class="intro-imgs">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Separation Range"
              class="intro-img"
            />
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Separation Process"
              class="intro-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">
            Gel Filtration Media Separation Process
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgProcess"
              alt="Gel Filtration Media Separation Process"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Gel Filtration Media Separation Process
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Application Cases</h2>
          <ol>
            <li>
              <span class="case-title"
                >Separation of Substances with Different Molecular Weights by
                Focurose 4FF/6FF</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img3"
                alt="Case 1"
                class="intro-img"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose 4FF and Imported Brands in Influenza
                Vaccine Purification</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img4"
                alt="Case 2"
                class="intro-img"
              />
            </li>
            <li>
              <span class="case-title"
                >Purification of Rabies Virus by Focurose 4FF</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img5"
                alt="Case 3"
                class="intro-img"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose 200PG and Imported Brands in Standard
                Protein Separation</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img6"
                alt="Case 4-1"
                class="intro-img"
              />
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img7"
                alt="Case 4-2"
                class="intro-img"
              />
            </li>
            <li>
              <span class="case-title"
                >Desalting Efficiency of Focurose G25+ at Different Flow
                Rates</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img8"
                alt="Case 5-1"
                class="intro-img"
              />
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img9"
                alt="Case 5-2"
                class="intro-img"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose G25+ and Two Competing Desalting
                Media</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img10"
                alt="Case 6-1"
                class="intro-img"
              /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img11"
                alt="Case 6-2"
                class="intro-img"
              />
            </li>
          </ol>
          <div class="divider"></div>
          <h2 class="section-title">Agarose Gel Filtration Media List</h2>
          <div class="intro-imgs">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img12"
              alt="Media List"
              class="intro-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Tips</h2>
          <ul>
            <li>
              The column height-to-diameter ratio should be between 1:15 and
              1:100; excessive height increases back pressure.
            </li>
            <li>
              The sample volume should be less than 10% of the column bed
              volume, preferably within 5%.
            </li>
            <li>
              The molecular weight difference between substances to be separated
              by gel filtration should be more than 2-fold.
            </li>
            <li>
              Try to reduce the viscosity of the sample during gel filtration
              chromatography.
            </li>
            <li>
              Solid particles should be avoided in the chromatography sample.
            </li>
          </ul>
        </section>
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i class="icon-pdf"></i>{{ file.name }}
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
import img1 from "@/assets/LifeScience/chromatography/chromatography-2/548991fc46fa439faf7a45784c5e1bf0.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-2/2edbe2c69d8949a2815b78f16d6c604a.jpg";
import img3 from "@/assets/LifeScience/chromatography/chromatography-2/3eaf0fb710fd4f3da58ccbd430993e3e.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-2/bc6b90da447140e79636673e0628f378.png";
import img5 from "@/assets/LifeScience/chromatography/chromatography-2/a5149a4360234a55a2bc788a9effcb67.png";
import img6 from "@/assets/LifeScience/chromatography/chromatography-2/9f0a6d51d0f94d6c887e81f05a20261e.png";
import img7 from "@/assets/LifeScience/chromatography/chromatography-2/05739ce0030f40338a6b84f458a477f9.png";
import img8 from "@/assets/LifeScience/chromatography/chromatography-2/f59bf037912742d881d83182489c71a5.png";
import img9 from "@/assets/LifeScience/chromatography/chromatography-2/ccedcd09374b44139c172ad1e70cf994.png";
import img10 from "@/assets/LifeScience/chromatography/chromatography-2/f522e496b52e47f1902a46268be8767c.png";
import img11 from "@/assets/LifeScience/chromatography/chromatography-2/e6e019064703479197238cee4341fa20.png";
import img12 from "@/assets/LifeScience/chromatography/chromatography-2/353c33bcde494b35be41ff18323d63f3.png";
import imgProcess from "@/assets/LifeScience/chromatography/chromatography-2/1a830804983e4d21b2038b4d30b64ab2.jpg";
// PDF 说明书本地 import
import pdf1 from "@/assets/LifeScience/chromatography/chromatography-2/HN060307.pdf";
import pdf2 from "@/assets/LifeScience/chromatography/chromatography-2/HN120209.pdf";
import pdf3 from "@/assets/LifeScience/chromatography/chromatography-2/HN120210.pdf";
import pdf4 from "@/assets/LifeScience/chromatography/chromatography-2/HN030303.pdf";
import pdf5 from "@/assets/LifeScience/chromatography/chromatography-2/HN12035012.pdf";
import pdf6 from "@/assets/LifeScience/chromatography/chromatography-2/HN120350.pdf";
import pdf7 from "@/assets/LifeScience/chromatography/chromatography-2/HN030301.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "Focurose 6FF Manual-HN060307.pdf", url: pdf1 },
  { name: "Focurose 75PG Manual-HN120209.pdf", url: pdf2 },
  { name: "Focurose 200PG Manual-HN120210.pdf", url: pdf3 },
  { name: "Focurose 4FF Manual-HN030303.pdf", url: pdf4 },
  { name: "Focurose G25+ Desalting Column Manual-HN12035012.pdf", url: pdf5 },
  { name: "Focurose G25+ Manual-HN120350.pdf", url: pdf6 },
  { name: "Focurose 4B Manual-HN030301.pdf", url: pdf7 },
];
</script>

<style scoped>
.intro-imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.icon-pdf {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg fill="%23d23c1a" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-1.51-5.96-4.34-.07-.39.24-.74.63-.74.31 0 .58.22.63.52.4 2.28 2.53 3.84 4.81 3.44 2.28-.4 3.84-2.53 3.44-4.81-.4-2.28-2.53-3.84-4.81-3.44-.39.07-.74-.24-.74-.63 0-.31.22-.58.52-.63 2.83-.48 5.48 1.51 5.96 4.34.07.39-.24.74-.63.74-.31 0-.58-.22-.63-.52-.4-2.28-2.53-3.84-4.81-3.44-2.28.4-3.84 2.53-3.44 4.81.4 2.28 2.53 3.84 4.81 3.44.39-.07.74.24.74.63 0 .31-.22.58-.52.63z"/></svg>')
    no-repeat center center;
  background-size: contain;
  margin-right: 8px;
  vertical-align: middle;
}
/* 案例标题样式 */
.case-title {
  display: inline-block;
  font-weight: 600;
  color: #204a6d;
  font-size: 1.08rem;
  margin-bottom: 4px;
}
/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
