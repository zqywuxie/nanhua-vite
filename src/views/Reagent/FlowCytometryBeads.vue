<template>
  <MobileOptimizedContent>
    <div class="flow-cytometry-beads-page">
      <h1 class="main-title">Flow Cytometry Beads</h1>
      <div class="base-richtext">
        <p>
          Flow cytometry (FCM) is a multi-parameter, rapid quantitative analysis
          technique for individual cells or other biological microparticles at
          the cellular molecular level. This technology uses optical measurement
          methods to count, identify, and classify individual cells or other
          biological microparticles suspended in flowing liquid. It can analyze
          tens of thousands of cells at high speed and simultaneously measure
          multiple parameters from a single cell, with the advantages of high
          speed, high precision, and good accuracy. It is one of the most
          advanced cell quantitative analysis technologies today.
        </p>
        <div class="img-row">
          <img
            :src="img1"
            alt="Flow Cytometry Beads Diagram 1"
            class="intro-img"
          />
          <img
            :src="img2"
            alt="Flow Cytometry Beads Diagram 2"
            class="intro-img"
          />
        </div>
        <div class="section-title">Types of Flow Cytometry Beads</div>
        <div class="product-type-list">
          <div class="product-type-item">
            Magnetic Fluorescent Encoded Beads
          </div>
          <div class="product-type-item">Absolute Counting Beads</div>
        </div>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import img1 from "@/assets/Reagent/cytometric/cytometric-1/10001.jpg";
import img2 from "@/assets/Reagent/cytometric/cytometric-1/10002.png";
</script>

<style scoped>
.product-page__title {
  font-size: 22px;
  font-weight: bold;
  margin: 24px 0 16px 0;
}
.base-richtext {
  font-size: 14px;
  line-height: 1.8;
}
.img-row {
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  margin: 20px 0 32px 0;
}
.img-row img {
  max-width: 260px;
  border-radius: 6px;
  border: 1px solid #eee;
  background: #fafbfc;
}
.product-page__list {
  margin-top: 12px;
  margin-bottom: 24px;
}
.product-page__list__item {
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px dashed #e0e0e0;
}
</style> 