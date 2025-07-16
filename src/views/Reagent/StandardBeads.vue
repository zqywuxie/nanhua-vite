<template>
  <ReagentLayout>
    <template #default>
      <div class="standard-beads-page">
        <h1 class="main-title">标准微球</h1>
        <div class="section-title">产品介绍</div>
        <div class="base-richtext">
          <p>标准微球是一系列含有聚合物微球的水溶液。我们的产品拥有100nm 至 10μm 的粒径范围，可实现在宽范围内对仪器进行标定和监测。</p>
          <p>尺度标准微球是由一系列粒度分析仪的验证而得，包括光子相关光谱仪（PCS)、离心式圆盘光度计（PCP）、可调电阻脉冲传感（TRPS）、纳米粒子跟踪分析（NTA）或激光衍射（LD）等。</p>
          <p>计数标准微球具有高度的NIST可溯源性。可满足ISO9000、ISO10012、ANSI/NCSL-Z540以及GMP/GLP等可溯源合规的要求，通过严格的再悬浮程序以及粒子计数检测，得到具有准确粒子数量的微球悬浮体，是标定粒子计数仪器的必备工具。</p>
        </div>

        <div class="divider"></div>
        <div class="section-title">标准微球的种类</div>
        <div class="product-type-list">
          <div class="product-type-item">尺度标准微球</div>
          <div class="product-type-item">计数标准微球</div>
        </div>


      </div>
    </template>
  </ReagentLayout>
</template>

<script setup>
import { ref } from 'vue'
const modalImg = ref(null)
const openModal = (img) => {
  modalImg.value = img
}
const closeModal = () => {
  modalImg.value = null
}
</script>

<style scoped>
.standard-beads-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans', Arial, sans-serif;
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
.base-richtext {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4664;
  margin-bottom: 18px;
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
  box-shadow: 0 2px 16px rgba(34,58,94,0.10);
  cursor: pointer;
  transition: box-shadow 0.25s, border 0.25s, transform 0.25s;
  border: 2px solid transparent;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(64,158,255,0.18);
  border: 2px solid #409eff;
  transform: scale(1.04);
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
  box-shadow: 0 1px 4px 0 rgba(34,58,94,0.06);
}
.img-modal {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(34,58,94,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 32px 32px 16px 32px;
  box-shadow: 0 8px 40px rgba(34,58,94,0.18);
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
  box-shadow: 0 2px 16px rgba(34,58,94,0.10);
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
  .standard-beads-page {
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