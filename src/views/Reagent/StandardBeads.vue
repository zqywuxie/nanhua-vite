<template>
  <CatalogContent title="Standard Beads" family="Reagent">
    <div class="standard-beads-page">

      <h2 class="section-title">Product Introduction</h2>
      <div class="base-richtext">
        <p>
          Standard beads are a series of aqueous solutions containing polymer
          microspheres. Our products have a particle size range from 100nm to
          10μm, enabling instrument calibration and monitoring over a wide
          range.
        </p>
        <p>
          Size standard beads are validated by a series of particle size
          analyzers, including Photon Correlation Spectroscopy (PCS),
          Centrifugal Disc Photometry (CDP), Tunable Resistive Pulse Sensing
          (TRPS), Nanoparticle Tracking Analysis (NTA), or Laser Diffraction
          (LD).
        </p>
        <p>
          Counting standard beads have high NIST traceability. They meet the
          traceability compliance requirements of ISO9000, ISO10012,
          ANSI/NCSL-Z540, and GMP/GLP. Through strict resuspension procedures
          and particle counting detection, microsphere suspensions with accurate
          particle numbers are obtained, making them essential tools for
          calibrating particle counting instruments.
        </p>
      </div>

      <div class="divider"></div>
      <h2 class="section-title">Types of Standard Beads</h2>
      <div class="product-type-list">
        <div class="product-type-item">Size Standard Beads</div>
        <div class="product-type-item">Counting Standard Beads</div>
      </div>
    </div>
  </CatalogContent>
</template>

<script setup>
import CatalogContent from "@/components/Business/CatalogContent.vue";
</script>

<style scoped>
.base-richtext {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4664;
  margin-bottom: 18px;
}
.product-type-list {
  display: flex;
  gap: 32px;
  margin: 16px 0 32px 0;
}
.product-type-item {
  background: #e9eef6;
  border-radius: 8px;
  padding: 14px 40px;
  font-size: 1.1rem;
  color: #223a5e;
  font-weight: 600;
  box-shadow: 0 1px 4px 0 rgba(34, 58, 94, 0.06);
}
</style>
