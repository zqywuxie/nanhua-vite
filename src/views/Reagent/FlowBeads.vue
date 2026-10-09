<template>
  <CatalogContent title="Flow Beads" family="Reagent">
    <div class="flow-beads-page">

      <div class="overview-description">
        Flow beads technology is an important part of flow cytometry, achieving
        multi-detection through fluorescently encoded beads. Our flow beads
        products have excellent fluorescence performance, stable coding systems,
        and good dispersibility, providing high-quality technical support for
        flow cytometry and multi-detection applications.
      </div>
      <div class="divider"></div>
      <h2 class="section-title">Product List</h2>
      <div class="product-list">
        <div
          class="product-card"
          @click="goToProduct('magnetic_fluorescent_beads')"
        >
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgMagnetic"
              alt="Magnetic Fluorescent Encoded Beads"
              class="main-img"
              @click.stop="openModal(imgMagnetic)"
            />
          </div>
          <div class="product-info">
            <h3>Magnetic Fluorescent Encoded Beads</h3>
            <p>
              Encoded beads combining magnetic and fluorescent properties,
              suitable for flow cytometry and multi-detection, with excellent
              separation and detection performance.
            </p>
            <div class="product-features">
              <span class="feature-tag">Magnetic Separation</span>
              <span class="feature-tag">Fluorescent Encoding</span>
              <span class="feature-tag">Multi-detection</span>
            </div>
          </div>
        </div>
        <div class="product-card" @click="goToProduct('absolute_count_beads')">
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgAbsolute"
              alt="Absolute Count Beads"
              class="main-img"
              @click.stop="openModal(imgAbsolute)"
            />
          </div>
          <div class="product-info">
            <h3>Absolute Count Beads</h3>
            <p>
              Standard beads for absolute cell count in flow cytometry,
              providing accurate quantitative reference for cell concentration.
            </p>
            <div class="product-features">
              <span class="feature-tag">Absolute Count</span>
              <span class="feature-tag">Standard Reference</span>
              <span class="feature-tag">High Precision</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </CatalogContent>
</template>

<script setup>
import { useRouter } from "vue-router";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import imgMagnetic from "@/assets/Reagent/cytometric/cytometric-1/10001.jpg";
import imgAbsolute from "@/assets/Reagent/cytometric/cytometric-2/10001.png";

const router = useRouter();
function goToProduct(productKey) {
  router.push(`/reagent/flow_beads/${productKey}`);
}
function openModal(img) {
  modalImg.value = img;
}
function closeModal() {
  modalImg.value = null;
}
</script>

<style scoped>
.overview-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #3a4664;
  text-align: center;
  margin-bottom: 18px;
}
.product-list {
  display: grid;
  gap: 32px;
  margin-top: 24px;
}
.product-card {
  display: flex;
  background: #e9eef6;
  border-radius: 16px;
  padding: 32px 32px 24px 32px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  align-items: center;
  box-shadow: 0 2px 16px rgba(34, 58, 94, 0.06);
}
.product-card:hover {
  background: #fff;
  border-color: #409eff;
  box-shadow: 0 8px 32px rgba(64, 158, 255, 0.13);
  transform: translateY(-2px) scale(1.01);
}
.product-info {
  flex: 1;
}
.product-info p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #3a4664;
  margin-bottom: 16px;
}
.product-features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.feature-tag {
  background: #e6f7ff;
  color: #223a5e;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 0.98rem;
  font-weight: 500;
}
@media (max-width: 900px) {
  .product-card {
    flex-direction: column;
    padding: 24px 8px 16px 8px;
    align-items: flex-start;
  }
}
</style>
