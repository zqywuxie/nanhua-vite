<template>
  <MobileOptimizedContent>
    <div class="gel-filtration-page">
      <h1 class="main-title">Gel Filtration Chromatography</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
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
          <div class="section-title">Separation Range and Process</div>
          <div class="intro-imgs">
            <img
              :src="img1"
              alt="Separation Range"
              class="intro-img"
              @click="openPreview(img1)"
            />
            <img
              :src="img2"
              alt="Separation Process"
              class="intro-img"
              @click="openPreview(img2)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">
            Gel Filtration Media Separation Process
          </div>
          <div class="img-block">
            <img
              :src="imgProcess"
              alt="Gel Filtration Media Separation Process"
              class="intro-img"
              @click="openPreview(imgProcess)"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Gel Filtration Media Separation Process
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-title">Application Cases</div>
          <ol>
            <li>
              <span class="case-title"
                >Separation of Substances with Different Molecular Weights by
                Focurose 4FF/6FF</span
              ><br /><img
                :src="img3"
                alt="Case 1"
                class="intro-img"
                @click="openPreview(img3)"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose 4FF and Imported Brands in Influenza
                Vaccine Purification</span
              ><br /><img
                :src="img4"
                alt="Case 2"
                class="intro-img"
                @click="openPreview(img4)"
              />
            </li>
            <li>
              <span class="case-title"
                >Purification of Rabies Virus by Focurose 4FF</span
              ><br /><img
                :src="img5"
                alt="Case 3"
                class="intro-img"
                @click="openPreview(img5)"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose 200PG and Imported Brands in Standard
                Protein Separation</span
              ><br /><img
                :src="img6"
                alt="Case 4-1"
                class="intro-img"
                @click="openPreview(img6)"
              />
              <img
                :src="img7"
                alt="Case 4-2"
                class="intro-img"
                @click="openPreview(img7)"
              />
            </li>
            <li>
              <span class="case-title"
                >Desalting Efficiency of Focurose G25+ at Different Flow
                Rates</span
              ><br /><img
                :src="img8"
                alt="Case 5-1"
                class="intro-img"
                @click="openPreview(img8)"
              />
              <img
                :src="img9"
                alt="Case 5-2"
                class="intro-img"
                @click="openPreview(img9)"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Focurose G25+ and Two Competing Desalting
                Media</span
              ><br /><img
                :src="img10"
                alt="Case 6-1"
                class="intro-img"
                @click="openPreview(img10)"
              /><img
                :src="img11"
                alt="Case 6-2"
                class="intro-img"
                @click="openPreview(img11)"
              />
            </li>
          </ol>
          <div class="divider"></div>
          <div class="section-title">Agarose Gel Filtration Media List</div>
          <div class="intro-imgs">
            <img
              :src="img12"
              alt="Media List"
              class="intro-img"
              @click="openPreview(img12)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">Tips</div>
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
        <section v-if="currentTab === 'manual'" class="manuals">
          <div class="section-title">Manual Download</div>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" download>
                <i class="icon-pdf"></i>{{ file.name }}
              </a>
            </li>
          </ul>
        </section>
        <!-- Image Preview Modal -->
        <div
          v-if="previewImg"
          class="img-preview-modal"
          @click.self="closePreview"
        >
          <img :src="previewImg" class="img-preview-large" @click.stop />
          <span class="img-preview-close" @click="closePreview">×</span>
        </div>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
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
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.gel-filtration-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: "Segoe UI", "PingFang SC", "Hiragino Sans", Arial, sans-serif;
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
.intro-imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.intro-img {
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.04);
}
.manual-list {
  padding-left: 0;
}
.manual-list li {
  list-style: none;
  margin-bottom: 12px;
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
.img-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}
.img-block .intro-img {
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.img-block .intro-img:hover {
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.04);
}
/* 案例标题样式 */
.case-title {
  display: inline-block;
  font-weight: 600;
  color: #204a6d;
  font-size: 1.08rem;
  margin-bottom: 4px;
}
@media (max-width: 900px) {
  .gel-filtration-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .intro-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
/* 图片预览弹窗样式 */
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(32, 74, 109, 0.25);
  background: #fff;
  border: 2px solid #204a6d;
  display: block;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1010;
  user-select: none;
  transition: color 0.2s;
}
.img-preview-close:hover {
  color: #d23c1a;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 