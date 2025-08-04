<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Protein A Agarose Magnetic Beads</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Overview</div>
          <p>
            Protein A agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Protein A ligand coupled to the bead
            surface. Add Protein A agarose magnetic beads to antibody-containing
            samples and incubate to allow full binding of antibodies to the
            beads. The antibody bound to the beads can be eluted under acidic
            conditions after magnetic separation. Magnetic separation eliminates
            the need for centrifugation, reduces purification time, and improves
            convenience—ideal for high-throughput sample purification.
          </p>
          <div class="img-block">
            <img
              :src="img1"
              alt="ProteinA Light Microscopy and Product Image"
              class="intro-img"
              @click="openPreview(img1)"
            />
          </div>
          <div class="section-title">Product Features</div>
          <ul>
            <li>
              High binding capacity: Each mL of Protein A settled gel can bind
              ≥70 mg of human IgG
            </li>
            <li>
              High purity: For real samples (CHO, HEK293), post-elution purity
              ≥90%
            </li>
            <li>
              High alkali resistance: Ligand is sequence-optimized to withstand
              standard CIP with 0.1M NaOH; after 40 cycles, binding capacity
              decreases by less than 20%
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
          <div class="section-title">
            Protein A Agarose Magnetic Bead Purification Workflow
          </div>
          <div class="img-block">
            <img
              :src="img2"
              alt="Purification Workflow"
              class="intro-img"
              @click="openPreview(img2)"
            />
          </div>
          <div class="section-title">Product Information</div>
          <div class="img-block">
            <img
              :src="img3"
              alt="Product Information"
              class="intro-img"
              @click="openPreview(img3)"
            />
          </div>
          <div class="section-title">Validation Data</div>
          <ul>
            <li>
              Standard Human IgG Test: VDO Protein A agarose magnetic beads have
              a binding capacity of 86.07 mg/mL settled gel, with a total
              two-step elution yield of 78.42 mg/mL settled gel and an overall
              recovery rate of 91.1%.
            </li>
          </ul>
          <div class="img-block">
            <img
              :src="img4"
              alt="Standard Human IgG Test"
              class="intro-img"
              @click="openPreview(img4)"
            />
          </div>
          <ul>
            <li>
              Alkali Resistance Test: Using 0.1M NaOH (15 min/cycle) to test
              alkali resistance of VDO Protein A agarose magnetic beads, binding
              and elution capacity decrease by less than 20% within 40 cycles.
            </li>
          </ul>
          <div class="img-block">
            <img
              :src="img5"
              alt="Alkali Resistance Test"
              class="intro-img"
              @click="openPreview(img5)"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – Human Standard</li>
          </ul>
          <div class="img-block">
            <img
              :src="img6"
              alt="Competitor Comparison – Human Standard"
              class="intro-img"
              @click="openPreview(img6)"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – CHO Cells</li>
          </ul>
          <div class="img-block">
            <img
              :src="img7"
              alt="Competitor Comparison – CHO Cells"
              class="intro-img"
              @click="openPreview(img7)"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – HEK293</li>
          </ul>
          <div class="img-block">
            <img
              :src="img8"
              alt="Competitor Comparison – HEK293"
              class="intro-img"
              @click="openPreview(img8)"
            />
          </div>
          <div class="section-title">Product List</div>
          <div class="img-block">
            <img
              :src="img9"
              alt="Product List"
              class="intro-img"
              @click="openPreview(img9)"
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-2/26ae28a5734a42e0a34b969f9ccad050.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-2/6608f42c41884a7ab4d2b3c74799883a.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-2/4f9548fd6b4649688771a5021d8dac72.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-2/f277e88090cc4d21afa07a218c7b3733.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-2/0aeca0ddb9e843d3b1cce47df33eab0a.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-2/bb335917fd5e4a55a3d5f1f19641991e.png";
import img7 from "@/assets/LifeScience/microballoon/microballoon-2/b18ad001d7b1448eabf6a48271a1c3c2.png";
import img8 from "@/assets/LifeScience/microballoon/microballoon-2/1abb4a5195124105bb2dfb208750ef0d.png";
import img9 from "@/assets/LifeScience/microballoon/microballoon-2/e996e0ab19364632831e5129d6f672e8.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-2/ProteinA.pdf";
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
  { name: "Protein A Agarose Magnetic Beads Manual.pdf", url: pdfManual },
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
.intro-img {
  display: block;
  max-width: 320px;
  width: 70%;
  margin: 18px auto 24px auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img,
.img-block img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
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
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
}
</style> 