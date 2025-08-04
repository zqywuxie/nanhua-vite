<template>
  <MobileOptimizedContent>
    <div class="mixed-mode-page">
      <h1 class="main-title">Mixed-Mode Chromatography</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
          <p>
            The MMA ligand is a multimodal ligand that interacts with target
            molecules through various mechanisms, primarily ionic interactions
            (strong anion exchange), as well as hydrogen bonding and hydrophobic
            interactions. VDX MMA ultra is a high-salt-tolerant mixed-mode
            chromatography media in the VDX series. Compared to traditional ion
            exchange media, it offers unique selectivity, enabling efficient
            binding of target proteins under high conductivity conditions and
            significantly improving the separation and purification efficiency
            of complex samples. It is suitable for the separation and
            purification of monoclonal antibodies, recombinant proteins, and
            other bioproducts.
          </p>
          <div class="divider"></div>
          <div class="section-title">Product Advantages</div>
          <ul>
            <li>
              High salt tolerance: samples can bind at high salt concentrations,
              reducing the dilution factor
            </li>
            <li>
              High recovery: offers higher recovery compared to similar products
            </li>
            <li>
              Special selectivity: combines hydrophobic and ion exchange
              interactions to enhance specific adsorption of target proteins
            </li>
          </ul>
          <img
            :src="img1"
            alt="Product Advantages Diagram"
            width="800"
            class="intro-img"
            @click="openPreview(img1)"
            style="margin: 24px 0"
          />
          <div class="divider"></div>
          <div class="section-title">VDX Core A Multimodal Chromatography</div>
          <p>
            VDX Core A is a high-rigidity agarose core bead bonded with
            octylamine functional groups on the inside, and an inert shell on
            the outside with an exclusion limit of 500 kDa. Under high
            conductivity conditions, target molecules larger than 500 kDa flow
            through the interstitial spaces between beads and are purified by a
            gel filtration mechanism; impurities smaller than 500 kDa enter the
            core and are adsorbed by the octylamine multimodal functional groups
            inside the beads, involving both ion exchange and hydrophobic
            interactions, thus removing small protein impurities and achieving
            purification.
          </p>
          <ul>
            <li>
              Compared to gel filtration, impurities are adsorbed inside the
              core, allowing for a higher sample loading volume and improved
              purification efficiency.
            </li>
            <li>
              The inert outer shell does not adsorb the target molecule,
              resulting in high recovery and helping to maintain the bioactivity
              of biomolecules.
            </li>
          </ul>
          <img
            :src="img2"
            alt="CoreA Principle Diagram"
            width="900"
            class="intro-img"
            @click="openPreview(img2)"
          />
          <div class="divider"></div>
          <div class="section-title">Application Cases</div>
          <ol>
            <li>
              Separation of Antibody Monomers and Polymers by VDX MMA ultra<br /><img
                :src="img3"
                alt="Case 1"
                width="680"
                class="intro-img"
                @click="openPreview(img3)"
              />
            </li>
          </ol>
          <div class="divider"></div>
          <div class="section-title">
            Pre-packed Column Ordering Information
          </div>
          <img
            :src="img4"
            alt="Pre-packed Column Ordering Information"
            width="450"
            class="intro-img"
            @click="openPreview(img4)"
          />
        </section>
        <!-- Tab Content: Manuals -->
        <section v-if="currentTab === 'manual'" class="manuals">
          <div class="section-title">Manual Download</div>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" :download="file.name" target="_blank">
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
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
import img1 from "@/assets/LifeScience/chromatography/chromatography-6/bc3554ba454d43bfa88209f4308aca35.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-6/7b5c5915882642049a082dc67d7bd44d.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-6/000ca8b9f96548f9a06a8da1be22c6f4.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-6/22d9db42ff6a4d3fb8a4a3b31e7e4d6c.png";
import pdf1 from "@/assets/LifeScience/chromatography/chromatography-6/HF190826-20250429.pdf";
const manualFiles = [{ name: "HF190826-20250429.pdf", url: pdf1 }];
const previewImg = ref("");
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = "";
}
</script>

<style scoped>
.mixed-mode-page {
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
ul,
ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.manual-list {
  padding-left: 0;
  margin-top: 18px;
}
.manual-list li {
  list-style: none;
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
.intro-img {
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 8px #e0e6ed;
  margin-bottom: 18px;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #b3c6e0;
}
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.65);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #223a5e55;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 40px;
  right: 60px;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
  text-shadow: 0 2px 8px #223a5e;
}
@media (max-width: 900px) {
  .mixed-mode-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-title {
    font-size: 2rem;
  }
  .img-preview-close {
    top: 12px;
    right: 18px;
  }
}
</style> 