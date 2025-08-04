<template>
  <MobileOptimizedContent>
    <div class="latex-turbidimetry-page">
      <h1 class="main-title">Latex Turbidimetry</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section-title">Product Introduction</div>
          <div class="base-richtext">
            <p>
              WeiDu Bio-Latex Microspheres are based on Polystyrene, featuring
              unique surface modification technology to endow microspheres with
              different functional groups, and the number of functional groups
              can be controlled. We can provide customized services to prepare
              microspheres of various sizes to meet customer requirements for
              sensitivity and linearity. This series of latex microspheres have
              a wide range of applications, such as "Particle Enhanced
              Immuno-Nephelometry (PET)", "Latex Agglutination Test", and
              "Microsphere-Captured Enzyme-Linked Immunosorbent Assay".
            </p>
          </div>
          <div class="divider"></div>
          <div class="section-title">Product Features</div>
          <ul class="feature-list">
            <li>
              Sufficient Functional Groups: Can Efficiently Couple Sufficient
              Target Proteins
            </li>
            <li>
              Uniform Particle Size, Stable and Controllable Functional Groups:
              Good Reproducibility
            </li>
            <li>
              Can Achieve Mass Production, Single Batch Capacity Can Reach Over
              100L: Small Batch-to-Batch Variation, Stable Supply
            </li>
            <li>
              Can Customize Microsphere Particle Size and Surface Functional
              Groups: Meet Customer Different Product Development Needs
            </li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Technical Parameters</div>
          <ul class="feature-list">
            <li>Material: Polystyrene Polymer</li>
            <li>Density: 1.05g/cm³</li>
            <li>Additives: Trace Surface Active Agents</li>
            <li>Microsphere Refractive Index: 1.59 (589nm Wavelength, 25℃)</li>
            <li>Uniformity: CV&lt;5%</li>
            <li>Particle Size: 80nm ~ 400nm</li>
            <li>Dispersion Medium: Purified Water</li>
            <li>Storage Conditions: Store at 2-25℃, Do Not Freeze</li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Types of Latex Turbidimetry</div>
          <ul class="feature-list">
            <li>Carboxylate Latex Microspheres</li>
          </ul>
        </section>
        <section v-if="tab === 'order'">
          <div class="section-title">Order Information</div>
          <div class="img-center">
            <img
              :src="img1"
              alt="Order Information"
              class="main-img"
              @click="openModal(img1)"
            />
          </div>
          <div v-if="modalImg" class="img-modal" @click.self="closeModal">
            <div class="modal-content">
              <img :src="modalImg" alt="Preview Large Image" />
              <button class="close-btn" @click="closeModal">×</button>
            </div>
          </div>
        </section>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import img1 from "@/assets/Reagent/Latex/Latex-1/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
];
const tab = ref("intro");
const modalImg = ref(null);
const openModal = (img) => {
  modalImg.value = img;
};
const closeModal = () => {
  modalImg.value = null;
};
</script>

<style scoped>
.latex-turbidimetry-page {
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
.base-richtext {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4664;
  margin-bottom: 18px;
}
.feature-list {
  padding-left: 24px;
  margin-bottom: 18px;
}
.feature-list li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.img-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 24px 0;
}
.main-img {
  max-width: 600px;
  width: 100%;
  max-height: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(34, 58, 94, 0.1);
  cursor: pointer;
  transition: box-shadow 0.25s, border 0.25s, transform 0.25s;
  border: 2px solid transparent;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(64, 158, 255, 0.18);
  border: 2px solid #409eff;
  transform: scale(1.04);
}
.img-modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(34, 58, 94, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 32px 32px 16px 32px;
  box-shadow: 0 8px 40px rgba(34, 58, 94, 0.18);
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content img {
  max-width: 800px;
  max-height: 70vh;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(34, 58, 94, 0.1);
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 18px;
  background: #223a5e;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.close-btn:hover {
  background: #409eff;
}
@media (max-width: 900px) {
  .latex-turbidimetry-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-img {
    max-width: 98vw;
    max-height: 40vw;
  }
  .modal-content img {
    max-width: 96vw;
    max-height: 60vw;
  }
}
</style> 