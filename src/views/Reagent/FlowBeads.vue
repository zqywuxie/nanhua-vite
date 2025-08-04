<template>
  <MobileOptimizedContent>
    <div class="flow-beads-page">
      <h1 class="main-title">Flow Beads</h1>
      <div class="overview-description">
        Flow beads technology is an important part of flow cytometry, achieving
        multi-detection through fluorescently encoded beads. Our flow beads
        products have excellent fluorescence performance, stable coding systems,
        and good dispersibility, providing high-quality technical support for
        flow cytometry and multi-detection applications.
      </div>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <div class="product-list">
        <div
          class="product-card"
          @click="goToProduct('magnetic_fluorescent_beads')"
        >
          <div class="img-center">
            <img
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
            <img
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
      <div v-if="modalImg" class="img-modal" @click.self="closeModal">
        <div class="modal-content">
          <img :src="modalImg" alt="Preview Large Image" />
          <button class="close-btn" @click="closeModal">×</button>
        </div>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import imgMagnetic from "@/assets/Reagent/cytometric/cytometric-1/10001.jpg";
import imgAbsolute from "@/assets/Reagent/cytometric/cytometric-2/10001.png";

const router = useRouter();
const modalImg = ref(null);
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
.flow-beads-page {
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
.img-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
}
.main-img {
  max-width: 180px;
  width: 100%;
  max-height: 180px;
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
.product-info {
  flex: 1;
}
.product-info h3 {
  font-size: 1.3rem;
  color: #223a5e;
  margin-bottom: 12px;
  font-weight: 600;
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
  .flow-beads-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .product-card {
    flex-direction: column;
    padding: 24px 8px 16px 8px;
    align-items: flex-start;
  }
  .img-center {
    margin-right: 0;
    margin-bottom: 18px;
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