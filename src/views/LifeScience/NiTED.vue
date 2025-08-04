<template>
  <MobileOptimizedContent>
    <div class="affinity-page">
      <h1 class="main-title">Ni-TED Agarose Magnetic Beads</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
          <p>
            Ni-TED agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Ni-TED ligand coupled to the bead
            surface. Add Ni-TED agarose magnetic beads to samples containing
            His-tagged proteins and incubate on a rotator to allow full binding.
            His-tagged proteins bound to the beads can be eluted and recovered
            using high concentrations of imidazole. Magnetic separation
            eliminates the need for centrifugation, reduces purification time,
            and improves convenience, making it suitable for high-throughput
            sample purification.
          </p>
          <div class="img-block">
            <img
              :src="img1"
              alt="Ni-TED Agarose Magnetic Beads Light Microscopy and Product Image"
              class="intro-img"
              @click="openPreview(img1)"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Agarose Magnetic Beads Light Microscopy and Product Image
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-title">
            Ni-TED Agarose Magnetic Beads Features
          </div>
          <ul>
            <li>
              High binding capacity: Each mL of settled gel can bind ≈30 mg of
              His-tagged protein
            </li>
            <li>High purity: Eluted protein purity ≥90%</li>
            <li>
              Better suspension: Average particle size 30 μm, better suspension,
              more effective capture of His-tagged proteins
            </li>
            <li>
              Improved hydrophilicity: Uses self-produced highly hydrophilic
              nano-magnetic particles to effectively reduce nonspecific
              adsorption
            </li>
            <li>
              Faster magnetic response: Can be rapidly adsorbed in solution,
              magnetic response time ≤3s
            </li>
            <li>
              Fully automated workflow: Compatible with VDO high-throughput
              automated purification instruments, enabling full automation from
              bead pretreatment, binding, elution, to bead recovery
            </li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">
            Ni-TED Agarose Magnetic Beads Product Information
          </div>
          <div class="img-block">
            <img
              :src="img2"
              alt="Product Information"
              class="intro-img"
              @click="openPreview(img2)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">
            Ni-TED Agarose Magnetic Beads Validation Data
          </div>
          <div style="font-size: 14px">1. Binding Capacity Test</div>
          <div style="font-size: 14px">
            His-tagged protein (molecular weight 22 kDa) standard was incubated
            and purified with VDO Ni-TED agarose magnetic beads. The
            concentration of the eluent was measured by Nanodrop, and the
            binding capacity and recovery rate were calculated. As shown in the
            figure below, the binding capacity of VDO Ni-TED agarose magnetic
            beads is 29.2 mg/mL settled gel, and the recovery rate is 88.5%.
          </div>
          <div class="img-block">
            <img
              :src="img3"
              alt="Binding Capacity Test"
              class="intro-img"
              @click="openPreview(img3)"
            />
          </div>
          <div style="font-size: 14px">2. E. coli Sample Purification</div>
          <div>
            Cell lysate containing His-tagged protein (molecular weight 26 kDa)
            was incubated and purified with VDO Ni-TED agarose magnetic beads.
            SDS-PAGE analysis showed that the purity of His-tagged protein in
            the eluent was >90%, and the total amount of protein obtained was
            2.82 mg.
          </div>
          <div class="img-block">
            <img
              :src="img4"
              alt="SDS-PAGE Analysis 1"
              class="intro-img"
              @click="openPreview(img4)"
            />
          </div>
          <div class="img-block">
            <img
              :src="img5"
              alt="SDS-PAGE Analysis 2"
              class="intro-img"
              @click="openPreview(img5)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">
            Ni-TED Agarose Magnetic Beads Product List
          </div>
          <div class="img-block">
            <img
              :src="img6"
              alt="Product List"
              class="intro-img"
              @click="openPreview(img6)"
            />
          </div>
        </section>
        <!-- Tab Content: Manual -->
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-5/cf5a01c07f4548568d5ae7fc595866a4.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-5/5883f814d05e49bfb91e6a27871ab8b4.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-5/17d4b7ac3b4243ccb12ab6d7f3a4acee.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-5/133be1ebadac4617a8c6a890ecc1d71e.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-5/6ed930c729aa4cf9afd21e7381defe94.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-5/5ae8df6110784811b914bf90a709cac8.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-5/Ni-TED.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
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
  { name: "Ni-TED Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
.affinity-page {
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
  .affinity-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
}
</style> 