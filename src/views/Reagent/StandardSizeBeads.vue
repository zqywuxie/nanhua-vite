<template>
  <ReagentLayout>
    <template #default>
      <div class="main-container">
        <div class="main-title">Scale Standard Microspheres</div>
        <div class="section">
          <div class="section-title">Product Introduction</div>
          <div class="section-divider"></div>
          <p class="section-text">
            Scale standard microspheres are a series of polymer microspheres with different particle sizes, widely used for calibration and performance verification of particle size analyzers. The product particle size range covers 100nm to 10μm, with good monodispersity and traceability, suitable for photon correlation spectroscopy (PCS), centrifugal disk photometer (PCP), adjustable resistance pulse sensor (TRPS), nanoparticle tracking analysis (NTA), laser diffraction (LD), and various particle size analysis instruments.
          </p>
          <div class="img-center">
            <img :src="img1" alt="Scale Standard Microspheres Schematic 1" class="preview-img" @click="openModal(img1)" />
          </div>
          <p class="section-text">
            The product has high NIST traceability, meeting traceability compliance requirements such as ISO9000, ISO10012, ANSI/NCSL-Z540, and GMP/GLP. Through strict resuspension procedures and particle counting detection, microspheres with accurate particle numbers are obtained, which is an essential tool for calibrating particle counters.
          </p>
        </div>
        <div class="section">
          <div class="section-title">Main Applications</div>
          <div class="section-divider"></div>
          <ul class="section-list">
            <li>Calibration and Performance Verification of Particle Size Analyzers</li>
            <li>Particle Size Distribution Analysis</li>
            <li>Instrument Intercomparison and Quality Control</li>
          </ul>
        </div>
      </div>
    </template>
  </ReagentLayout>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/Reagent/standard/standard-1/10001.png'

const modalVisible = ref(false)
const modalImg = ref('')
const openModal = (img) => {
  modalImg.value = img
  modalVisible.value = true
}
const closeModal = () => {
  modalVisible.value = false
}
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
  box-shadow: 0 2px 12px rgba(34,58,94,0.10);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  border: 2px solid transparent;
}
.preview-img:hover {
  box-shadow: 0 6px 24px rgba(42,67,119,0.18);
  border: 2px solid #2a4377;
  transform: scale(1.04);
}
.modal-overlay {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(34, 42, 58, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(34,58,94,0.18);
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