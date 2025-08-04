<template>
  <MobileOptimizedContent>
    <div class="absolute-counting-beads-page">
      <h1 class="main-title">Absolute Counting Beads</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section-title">Product Description</div>
          <div class="base-richtext">
            <p>
              This series of products is specifically developed for absolute
              cell counting applications, suitable for flow cytometers and cell
              counters. By comparing the number of cells (or other particles)
              with the number of microspheres, the absolute value of cells or
              other particles can be determined.
            </p>
            <p>
              This series of products includes non-fluorescent series (FC) and
              fluorescent series (FM) absolute counting microspheres. The
              non-fluorescent absolute counting microspheres are blank
              carboxylated polystyrene microspheres, suitable for single cell or
              particle counting. The fluorescent absolute counting microspheres
              are carboxylated polystyrene microspheres embedded with
              fluorescent dyes, with multiple combinations (FITC, PE, APC) of
              internal fluorescent dyes available for selection, suitable for
              different cell categories and absolute counting after subsequent
              labeling.
            </p>
          </div>
          <div class="img-center">
            <img
              :src="img1"
              alt="Absolute Counting Microspheres Schematic"
              class="main-img"
              @click="openModal(img1)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">Technical Parameters</div>
          <ul class="feature-list">
            <li>Particle Size: 7μm</li>
            <li>Fluorescence Channel: FITC/PE/APC</li>
            <li>Particle Count: 1x10<sup>6</sup> Count/Tube</li>
            <li>Dispersion: Good</li>
          </ul>
        </section>
        <section v-if="tab === 'order'">
          <div class="section-title">Order Information</div>
          <div class="img-center">
            <img
              :src="img2"
              alt="Order Information"
              class="main-img"
              @click="openModal(img2)"
            />
          </div>
          <div v-if="modalImg" class="img-modal" @click.self="closeModal">
            <div class="modal-content">
              <img :src="modalImg" alt="Preview Large Image" />
              <button class="close-btn" @click="closeModal">×</button>
            </div>
          </div>
        </section>
        <section v-if="tab === 'manual'">
          <div class="section-title">Manual</div>
          <div class="base-richtext">
            <ul>
              <li>
                <a
                  href="/src/assets/Reagent/cytometric/cytometric-2/AbsoluteCountingBeads-Manual.pdf"
                  download
                  target="_blank"
                  >Flow Microspheres - Absolute Counting Microspheres Manual
                  (PDF)</a
                >
              </li>
            </ul>
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
import img1 from "@/assets/Reagent/cytometric/cytometric-2/10001.png";
import img2 from "@/assets/Reagent/cytometric/cytometric-2/10002.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
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
.absolute-counting-beads-page {
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
.product-tabs {
  display: none;
}
:deep(.el-tabs__nav) {
  display: none;
}
:deep(.el-tabs__item) {
  display: none;
}
:deep(.el-tabs__item.is-active) {
  display: none;
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
.table-scroll {
  overflow-x: auto;
  margin: 16px 0;
}
.table-scroll table {
  min-width: 400px;
  border-collapse: collapse;
  width: 100%;
}
.table-scroll th,
.table-scroll td {
  border: 1px solid #e0e0e0;
  padding: 8px 16px;
  text-align: left;
  font-size: 14px;
}
.table-scroll th {
  background: #f7f7f7;
}
@media (max-width: 900px) {
  .absolute-counting-beads-page {
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