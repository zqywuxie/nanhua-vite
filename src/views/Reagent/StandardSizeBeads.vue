<template>
  <CatalogContent title="Scale Standard Microspheres" family="Reagent">
    <div class="main-container">

      <div class="section">
        <h2 class="section-title">Product Introduction</h2>
        <div class="section-divider"></div>
        <p class="section-text">
          Scale standard microspheres are a series of polymer microspheres with different particle sizes, widely used for calibration and performance verification of particle size analyzers. The product particle size range covers 100nm to 10μm, with good monodispersity and traceability, suitable for photon correlation spectroscopy (PCS), centrifugal disk photometer (PCP), adjustable resistance pulse sensor (TRPS), nanoparticle tracking analysis (NTA), laser diffraction (LD), and various particle size analysis instruments.
        </p>
        <div class="img-center">
          <img role="button" tabindex="0" aria-label="Enlarge image" :src="img1" alt="Scale Standard Microspheres Schematic 1" class="preview-img" />
        </div>
        <p class="section-text">
          The product has high NIST traceability, meeting traceability compliance requirements such as ISO9000, ISO10012, ANSI/NCSL-Z540, and GMP/GLP. Through strict resuspension procedures and particle counting detection, microspheres with accurate particle numbers are obtained, which is an essential tool for calibrating particle counters.
        </p>
      </div>
      <div class="section">
        <h2 class="section-title">Main Applications</h2>
        <div class="section-divider"></div>
        <ul class="section-list">
          <li>Calibration and Performance Verification of Particle Size Analyzers</li>
          <li>Particle Size Distribution Analysis</li>
          <li>Instrument Intercomparison and Quality Control</li>
        </ul>
      </div>
    </div>
  </CatalogContent>
</template>

<script setup>
import CatalogContent from "@/components/Business/CatalogContent.vue";
import img1 from '@/assets/Reagent/standard/standard-1/10001.png'

</script>

<style scoped>
.section {
  margin-bottom: 48px;
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
</style>
