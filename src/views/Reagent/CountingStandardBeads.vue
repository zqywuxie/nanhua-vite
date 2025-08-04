<template>
  <MobileOptimizedContent>
    <div class="main-container">
      <h1 class="main-title">Counting Standard Beads</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section">
            <div class="section-title">Product Description</div>
            <div class="section-divider"></div>
            <p class="section-text">
              This series of microspheres is specifically designed for the
              development, calibration, and verification of particle counting
              devices. When these instruments encounter problems or undergo
              daily maintenance, customers can use this series of products to
              verify and calibrate the instruments to ensure normal operation
              and correct data output.
            </p>
            <p class="section-text">
              The measurement process of this series strictly follows the
              measurement procedures provided by the National Institute of
              Standards and Technology (NIST). This series of microspheres has
              high NIST traceability. It can meet the requirements of ISO9000,
              ISO10012, ANSI/NCSL-Z540, and GMP/GLP traceability. Through strict
              re-suspension and particle counting detection, a microsphere
              suspension with accurate particle counts is obtained, which is an
              essential tool for calibrating particle counting instruments.
            </p>
            <div class="section-divider"></div>
            <div class="section-title">Technical Parameters</div>
            <ul class="section-list">
              <li>Material: Polystyrene High Molecular Weight Polymer</li>
              <li>Particle Size: 1µm-10µm</li>
              <li>Density: 1.05g/cm<sup>3</sup></li>
              <li>Dispersion Medium: Pure Water</li>
              <li>Particle Refractive Index: 1.59 (589nm Wavelength, 25℃)</li>
              <li>Uniformity: CV&lt;3%</li>
              <li>Additives: Trace Surface Active Agent</li>
              <li>Storage Conditions: Store at 2-25℃, do not freeze</li>
            </ul>
          </div>
        </section>
        <section v-if="tab === 'order'">
          <div class="section">
            <div class="section-title">Order Information</div>
            <div class="section-divider"></div>
            <div class="img-center">
              <img
                :src="tableImg"
                alt="Counting Standard Beads Order Information"
                class="preview-img"
                @click="openModal(tableImg)"
              />
            </div>
            <p class="section-text">
              Other specifications can be customized according to customer
              requirements
            </p>
            <p class="section-text">
              We can also customize drug counting microspheres, water quality
              monitoring microspheres, and low concentration counting
              microspheres according to customer requirements, welcome to
              inquire.
            </p>
          </div>
        </section>
        <section v-if="tab === 'manual'">
          <div class="section">
            <div class="section-title">Manual</div>
            <div class="section-divider"></div>
            <div class="pdf-placeholder">
              <span>No manual PDF available yet,敬请期待</span>
            </div>
          </div>
        </section>
      </MobileOptimizedTabs>

      <!-- Image Modal -->
      <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <img :src="modalImg" alt="Preview" />
          <button class="modal-close" @click="closeModal">×</button>
        </div>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import tableImg from "@/assets/Reagent/standard/standard-2/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const modalVisible = ref(false);
const modalImg = ref("");
const openModal = (img) => {
  modalImg.value = img;
  modalVisible.value = true;
};
const closeModal = () => {
  modalVisible.value = false;
};
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px 64px 16px;
  background: #f7f9fb;
}
.main-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 40px;
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
.custom-tabs {
  display: none;
}
.section {
  margin-bottom: 48px;
}
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 4px solid #2a4377;
  padding-left: 16px;
  margin-bottom: 12px;
  background: transparent;
}
.section-divider {
  height: 2px;
  background: #e3e8f0;
  margin: 16px 0 32px 0;
  border-radius: 1px;
}
.section-text {
  font-size: 1.08rem;
  color: #38485a;
  line-height: 1.9;
  margin-bottom: 32px;
}
.section-list {
  font-size: 1.08rem;
  color: #38485a;
  margin: 0 0 0 24px;
  padding-left: 16px;
  line-height: 2.1;
  margin-bottom: 32px;
}
.img-center {
  text-align: center;
  margin: 32px 0 40px 0;
}
.preview-img {
  max-width: 520px;
  width: 90vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(34, 58, 94, 0.1);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  border: 2px solid transparent;
}
.preview-img:hover {
  box-shadow: 0 6px 24px rgba(42, 67, 119, 0.18);
  border: 2px solid #2a4377;
  transform: scale(1.04);
}
.modal-overlay {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(34, 42, 58, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(34, 58, 94, 0.18);
  padding: 24px 24px 16px 24px;
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content img {
  max-width: 700px;
  max-height: 65vh;
  width: 80vw;
  border-radius: 10px;
  background: #f7f9fb;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 18px;
  background: #2a4377;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-close:hover {
  background: #223a5e;
}
.pdf-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  color: #888;
  font-size: 16px;
  flex-direction: column;
}
@media (max-width: 700px) {
  .main-container {
    padding: 20px 2vw 32px 2vw;
  }
  .main-title {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  .section-title {
    font-size: 1.08rem;
    padding-left: 10px;
  }
  .preview-img {
    max-width: 98vw;
  }
  .modal-content img {
    max-width: 98vw;
  }
}
</style> 