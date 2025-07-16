<template>
  <div class="magnetic-rack-page">
    <h1 class="main-title">Magnetic Rack</h1>
    <div class="tab-nav">
      <div
        v-for="item in tabList"
        :key="item.key"
        :class="['tab-item', {active: tab === item.key}]"
        @click="tab = item.key"
      >
        {{ item.label }}
      </div>
    </div>
    <section v-if="tab==='intro'">
      <div class="section-title">Product Introduction</div>
      <p>
        Magnetic Rack is used in conjunction with the BioMagnetics Microspheres, achieving efficient separation of target substances, fast adsorption speed, and shortening the experimental waiting time. Suitable for 2ml centrifuge tubes.
      </p>
      <div class="divider"></div>
      <div class="section-title">Equipment</div>
      <ul>
        <li>Magnetic Rack for 2ml Centrifuge Tubes</li>
      </ul>
      <div class="img-center">
        <img class="main-img" :src="magneticRackImg" alt="Magnetic Rack product image" @click="openModal(magneticRackImg)" />
      </div>
    </section>
    <section v-if="tab==='manual'">
      <div class="section-title">Manual Download</div>
      <ul>
        <li>
          <a href="/src/assets/Reagent/diagnosis/diagnosis-10/MagneticRack-Manual.pdf" target="_blank" download>Magnetic Rack Manual (PDF)</a>
        </li>
      </ul>
    </section>
    <div v-if="modalImg" class="img-modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="modalImg" alt="Preview Image" />
        <button class="close-btn" @click="closeModal">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import magneticRackImg from '@/assets/Reagent/diagnosis/diagnosis-10/10001.png'

const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' }
]
const tab = ref('intro')
const modalImg = ref(null)
const openModal = (img) => {
  modalImg.value = img
}
const closeModal = () => {
  modalImg.value = null
}
</script>

<style scoped>
.magnetic-rack-page {
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
.tab-bar { display: none; }
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
.manual-link {
  display: inline-block;
  margin-top: 16px;
  color: #409eff;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.manual-link:hover {
  color: #223a5e;
}
@media (max-width: 900px) {
  .magnetic-rack-page {
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