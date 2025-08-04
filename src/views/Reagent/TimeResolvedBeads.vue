<template>
  <MobileOptimizedContent>
    <div class="time-resolved-beads-page">
      <h1 class="main-title">Time Resolved Beads</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section-title">Product Introduction</div>
          <p>
            Time Resolved Fluorescent Beads are nanometer particles containing
            rare earth elements (Eu), with long fluorescence lifetime, large
            Stokes shift, and stable properties. High-signal time-resolved
            fluorescent beads are particularly suitable for the development of
            ultra-high sensitivity immunochromatography products, with higher
            signal intensity and sensitivity compared to ordinary time-resolved
            fluorescent beads, and can meet the trace detection requirements of
            the analyte, achieving accurate detection.
          </p>
          <div class="divider"></div>
          <div class="section-title">Product Advantages</div>
          <ul>
            <li>
              Easy to operate: short detection time, suitable for on-site
              detection
            </li>
            <li>
              High sensitivity: higher signal intensity, larger signal-to-noise
              ratio
            </li>
            <li>
              Quantitative detection: specific concentration of the analyte can
              be given based on the built-in standard curve
            </li>
            <li>
              Strong anti-interference: rare earth ion-labeled compounds, long
              half-life, large Stokes shift
            </li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Technical Parameters</div>
          <ul>
            <li>Material: polymeric polymer containing rare earth elements</li>
            <li>Uniformity: CV&lt;5%</li>
            <li>Size range: 200nm—400nm</li>
            <li>
              Surface functional groups: carboxyl (COOH), streptavidin (SA)
            </li>
            <li>Additives: trace surface active agents</li>
            <li>
              Storage conditions: carboxyl-modified beads stored at 2-25℃,
              streptavidin (SA)-modified beads stored at 2-8℃, do not freeze
            </li>
          </ul>
        </section>
        <section v-if="tab === 'order'">
          <div class="section-title">Order Information</div>
          <div class="order-imgs">
            <div v-for="(img, idx) in orderImgs" :key="idx" class="img-center">
              <p v-if="orderImgLabels[idx]">{{ orderImgLabels[idx] }}</p>
              <img
                :src="img"
                :alt="orderImgLabels[idx] || 'Order Image'"
                class="main-img"
                @click="openModal(img)"
              />
            </div>
          </div>
        </section>
        <section v-if="tab === 'manual'">
          <div class="section-title">Manual</div>
          <ul>
            <li>
              <a
                href="/src/assets/Reagent/lateral/lateral-4/TimeResolvedBeads-Manual.pdf"
                download
                target="_blank"
                >Time Resolved Fluorescent Beads Product Manual (PDF)</a
              >
            </li>
          </ul>
        </section>
      </MobileOptimizedTabs>

      <!-- Image Modal -->
      <div v-if="modalImg" class="img-modal" @click.self="closeModal">
        <div class="modal-content">
          <img :src="modalImg" alt="Preview Image" />
          <button class="close-btn" @click="closeModal">×</button>
        </div>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import img1 from "@/assets/Reagent/lateral/lateral-4/10001.png";
import img2 from "@/assets/Reagent/lateral/lateral-4/10001.png";
import img3 from "@/assets/Reagent/lateral/lateral-4/10001.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const orderImgs = [img1, img2, img3];
const orderImgLabels = [
  "Carboxyl-modified Time Resolved Fluorescent Beads",
  "Streptavidin (SA)-modified Time Resolved Fluorescent Beads",
  "High-signal Carboxyl-modified Time Resolved Fluorescent Beads",
];
const modalImg = ref(null);
const openModal = (img) => {
  modalImg.value = img;
};
const closeModal = () => {
  modalImg.value = null;
};
</script>

<style scoped>
.time-resolved-beads-page {
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
.tab-bar {
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
ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.order-imgs {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 24px;
  margin-top: 24px;
}
.order-imgs > div {
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-img {
  max-width: 320px;
  width: 100%;
  max-height: 240px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(34, 58, 94, 0.1);
  cursor: pointer;
  transition: box-shadow 0.25s, border 0.25s, transform 0.25s;
  border: 2px solid transparent;
  margin-top: 8px;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(64, 158, 255, 0.18);
  border: 2px solid #409eff;
  transform: scale(1.04);
}
.img-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 24px 0;
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
  .time-resolved-beads-page {
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