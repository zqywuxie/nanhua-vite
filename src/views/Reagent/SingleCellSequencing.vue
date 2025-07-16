<template>
  <div class="single-cell-sequencing-page">
    <h1 class="main-title">Single Cell Sequencing</h1>
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
    <section v-if="tab==='intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>
        The magnetic microspheres developed by Weiduo Biotech have the characteristics of superparamagnetism, moderate magnetic content, good suspension, and fast magnetic response. The magnetic microspheres are surface-modified with carboxyl groups, which can effectively bind amine derivatives, suitable for adding molecular barcode sequences to cells during single cell sequencing. Surface functional groups and particle size can be customized according to customer requirements.
      </p>
      <div class="divider"></div>
      <div class="section-title">Product Features</div>
      <ul>
        <li>Superparamagnetic microspheres, excellent suspension performance</li>
        <li>Hydrophilic microsphere surface, low non-specific adsorption</li>
        <li>Carboxyl-modified surface, can efficiently bind amine derivatives</li>
        <li>Uniform particle size, particle size distribution coefficient (CV) less than 5%, good experimental reproducibility</li>
        <li>Can achieve large-scale production, small batch-to-batch differences, excellent quality and consistent detection results</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Technical Parameters</div>
      <ul>
        <li>Material: Polystyrene polymer/Iron oxide</li>
        <li>Particle size: 15-60μm</li>
        <li>Surface modification: Carboxyl</li>
        <li>Dispersion medium: Magnetic microsphere preservation solution</li>
        <li>Uniformity: CV&lt;5%</li>
        <li>Additives: Trace surface active agent</li>
        <li>Storage conditions: 2-25℃, do not freeze</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Case Analysis</div>
      <div class="img-center">
        <img :src="caseImg" alt="Case Analysis" class="main-img" @click="openModal(caseImg)" />
      </div>
      <p>Weiduo Biotech provides magnetic microspheres with excellent quality and stable technology to assist customers in developing single cell sequencing products.</p>
      <p>WT11: Using C company magnetic microspheres</p>
      <p>WT12-14: Using Vdo magnetic microspheres</p>
      <p>From biological information analysis, products developed using Vdo magnetic microspheres achieved similar results to C company products in single cell analysis and showed excellent performance in single cell transcriptome sequencing.</p>
      <div class="case-link">
        <a href="https://www.vdobiotech.com.cn/service/a76c53fd7b2043918e5e29967dbb2617" target="_blank">CleanNGS application in NGS library preparation for fragment screening and purification</a>
      </div>
    </section>
    <section v-if="tab==='order'" class="order-info">
      <div class="section-title">Order Information</div>
      <div class="img-center">
        <img :src="orderImg" alt="Order Information" class="main-img" @click="openModal(orderImg)" />
      </div>
      <p>Other specifications can be customized as required.</p>
    </section>
    <section v-if="tab==='manual'" class="manuals">
      <div class="section-title">Product Manual Download</div>
      <ul>
        <li>
          <a href="/src/assets/Reagent/diagnosis/diagnosis-9/SingleCellSequencing.pdf" download target="_blank">Single Cell Sequencing Magnetic Microsphere Product Manual (PDF)</a>
        </li>
      </ul>
    </section>
    <div v-if="modalImg" class="img-modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="modalImg" alt="Preview Large Image" />
        <button class="close-btn" @click="closeModal">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import caseImg from '@/assets/Reagent/diagnosis/diagnosis-9/singlecell_table.png'
import orderImg from '@/assets/Reagent/diagnosis/diagnosis-9/singlecell_main.png'
const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  // { key: 'features', label: 'Product Features' },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'case', label: 'Case Analysis' },
  { key: 'order', label: 'Order Information' },
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
.single-cell-sequencing-page {
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
.tab-bar { display: none; }
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
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
.intro ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
.intro li {
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
.case-link {
  margin-top: 18px;
  text-align: center;
}
.case-link a {
  display: inline-block;
  background: #e6f7ff;
  color: #223a5e;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.case-link a:hover {
  background: #409eff;
  color: #fff;
}
.order-info {
  text-align: center;
}
.manuals {
  text-align: center;
  margin-top: 36px;
}
.manuals ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.manuals li {
  margin-bottom: 10px;
}
.manuals a {
  display: inline-block;
  background: #e6f7ff;
  color: #223a5e;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.manuals a:hover {
  background: #409eff;
  color: #fff;
}
@media (max-width: 900px) {
  .single-cell-sequencing-page {
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