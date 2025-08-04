<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Protein G Agarose Magnetic Beads</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Overview</div>
          <p>
            Protein G agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Protein G ligand coupled to the bead
            surface. Add Protein G agarose magnetic beads to antibody-containing
            samples and incubate on a rotator to allow full binding of
            antibodies to the beads. The antibody bound to the beads can be
            eluted under acidic conditions using a magnetic separation device.
            Magnetic separation eliminates the need for centrifugation, reduces
            purification time, and improves convenience—ideal for
            high-throughput sample purification.
          </p>
          <div class="img-block">
            <img
              :src="img1"
              alt="ProteinG Light Microscopy and Product Image"
              class="intro-img"
              @click="openPreview(img1)"
            />
          </div>
          <div class="section-title">Product Features</div>
          <ul>
            <li>
              High binding capacity: Each mL of Protein G settled gel can bind
              ≥70 mg Human IgG
            </li>
            <li>
              High purity: Can obtain high-purity antibodies from mouse and
              other animal serum samples
            </li>
            <li>
              Better suspension: Average particle size 30 μm, better suspension,
              more effective capture of free antibodies
            </li>
            <li>
              Better hydrophilicity: Uses in-house high-hydrophilicity
              nano-magnetic particles to reduce nonspecific adsorption
            </li>
            <li>
              Faster magnetic response: Can be rapidly adsorbed in solution,
              magnetic response ≤3s
            </li>
            <li>
              Fully automated workflow: Compatible with VDO high-throughput
              automated purification instruments for end-to-end automation from
              bead pretreatment to binding, elution, and bead recovery
            </li>
          </ul>
          <div class="section-title">Product Information</div>
          <div class="img-block">
            <img
              :src="img2"
              alt="Product Information"
              class="intro-img"
              @click="openPreview(img2)"
            />
          </div>
          <div class="section-title">Validation Data</div>
          <div class="verify-block">
            <div class="verify-item">
              <span class="verify-title">1. Capacity Test</span>
              <p>
                Capacity test of VDO and competitor R Protein G agarose magnetic
                beads using human IgG standard. Results show VDO Protein G
                agarose magnetic beads have a binding capacity of 95 mg/mL
                settled gel, with a total two-step elution yield of 81 mg/mL
                settled gel and an overall recovery rate of 85%. VDO Protein G
                agarose magnetic beads have comparable binding capacity to the
                competitor, with higher recovery.
              </p>
              <div class="img-block">
                <img
                  :src="img3"
                  alt="Capacity Test"
                  class="intro-img"
                  @click="openPreview(img3)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Protein G Agarose Magnetic Beads Capacity Test
                </div>
              </div>
            </div>
            <div class="verify-item">
              <span class="verify-title">2. Real Sample Purification</span>
              <p>
                Under the same experimental conditions, VDO and competitor R
                Protein G agarose magnetic beads were used to purify antibodies
                from mouse, rabbit, bovine, goat, and sheep serum samples.
                Results show VDO Protein G agarose magnetic beads achieve higher
                yield and purity in serum sample purification.
              </p>
              <div class="img-block">
                <img
                  :src="img4"
                  alt="Real Sample Purification – Table"
                  class="intro-img"
                  @click="openPreview(img4)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Yield/Purity of Purified Antibodies from Different Animal
                  Serum Samples
                </div>
              </div>
              <div class="img-block">
                <img
                  :src="img5"
                  alt="Real Sample Purification – Electrophoresis"
                  class="intro-img"
                  @click="openPreview(img5)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  SDS-PAGE of Purified Antibodies
                </div>
              </div>
            </div>
          </div>
          <div class="section-title">Product List</div>
          <div class="img-block">
            <img
              :src="img6"
              alt="Product List"
              class="intro-img"
              @click="openPreview(img6)"
            />
          </div>
        </section>
        <!-- Tab Content: Manuals -->
        <section v-if="currentTab === 'manual'" class="manuals">
          <div class="section-title">Manual Download</div>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" :download="file.name" target="_blank">
                <i class="el-icon-document" style="margin-right: 6px"></i
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-3/2edc236059534f1f8e61fc42fdd37e38.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-3/a74dfd1f197a4ccbbd8d859070b979ad.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-3/dd463b80c377400cab032819f0fd0929.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-3/4d19a355da2a48af9416cab3c769e416.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-3/c033a7f8c1de4b7c950e93ad7ea413af.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-3/2159640b1b4b43dc87d99babc12ba78a.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-3/ProteinG.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
const previewImg = ref("");
const openPreview = (img) => {
  previewImg.value = img;
};
const closePreview = () => {
  previewImg.value = "";
};
const manualFiles = [
  { name: "Protein G Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
.homogeneous-page {
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
.intro-img,
.img-block img {
  max-width: 70%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
@media (max-width: 900px) {
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
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
.img-block img:hover {
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.18);
}
.img-preview-modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
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
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
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
}
</style> 