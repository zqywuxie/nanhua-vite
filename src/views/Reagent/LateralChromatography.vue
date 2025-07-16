<template>
  <div class="lateral-chromatography-page">
    <h1 class="main-title">Lateral Chromatography</h1>
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
      <div class="section-title">Colored Microspheres</div>
      <p>Utilizing the unique internal saturated dyeing process, we have developed a series of colored microspheres for the biological development. This series of products are colorful and rich in color, suitable for qualitative and semi-quantitative detection. This product covers a rainbow color, which helps to avoid background interference of samples and also provides an effective tool for multi-color spectroscopy detection. Colored microspheres are ideal choices for agglutination tests and lateral chromatography technology platforms.</p>
      <div class="divider"></div>
      <div class="section-title">Fluorescent Microspheres</div>
      <p>VDobiotech fluorescent microspheres are specifically designed for ultra-sensitive "lateral chromatography", which can read data through a fluorescence detector to achieve a more sensitive quantitative detection effect, making it the preferred material for ultra-sensitive lateral chromatography. The fluorescence dye is embedded in the microsphere's internal structure, filled with full and firm, with strong fluorescence intensity and stable persistence, which is an ideal choice for quantitative detection reagents. </p>
      <div class="divider"></div>
      <div class="section-title">Time-resolved Fluorescent Microspheres</div>
      <p>VDobiotech time-resolved fluorescent microspheres are specifically designed for ultra-sensitive "lateral chromatography", which can read data through a fluorescence detector to achieve a more sensitive quantitative detection result, making it the preferred material for ultra-sensitive lateral chromatography. The fluorescence dye is embedded in the microsphere's internal structure, filled with full and firm, with strong fluorescence intensity and stable persistence, which is an ideal choice for quantitative detection reagents. </p>
      <div class="divider"></div>
      <div class="section-title">High-signal Time-resolved Fluorescent Microspheres</div>
      <p>Time-resolved fluorescent microspheres contain rare earth elements (Eu), with long fluorescence lifetime, large Stokes shift, and stable properties. Compared with ordinary time-resolved fluorescent microspheres, high-signal time-resolved fluorescent microspheres have higher signal intensity and sensitivity, which can meet the trace detection requirements of the analyte, achieving accurate detection. </p>
    </section>
    <section v-if="tab==='case'">
      <div class="section-title">Application Cases</div>
      <ul>
        <li><a href="https://www.vdobiotech.com.cn/service/a50e61cd496a4375bf8dcf9e1cac29ad" target="_blank">Guidance for lateral chromatography based on microspheres</a></li>
        <li><a href="https://www.vdobiotech.com.cn/group1/0a/baf13d95c4974533a11d5e0dd2bb7a9d.pdf" target="_blank">FAQ for lateral chromatography microspheres</a></li>
        <li><a href="https://www.vdobiotech.com.cn/service/0d581033894d4c61aee987aff16381c6" target="_blank">A novel lateral chromatography test strip and a portable fluorescence detection instrument for rapid diagnosis of PRV virus</a></li>
        <li><a href="https://www.vdobiotech.com.cn/service/14d86c8d92ca436a99e6486712fb2cbb" target="_blank">Fluorescent microsphere lateral immunochromatography strip detection of CSFV (porcine cysticercosis) based on monoclonal antibodies</a></li>
        <li><a href="https://www.vdobiotech.com.cn/service/c557b23b0ed44bacb31e27700d543dc4" target="_blank">Case sharing | Performance comparison evaluation of two time-resolved fluorescent microspheres</a></li>
        <li><a href="http://cn.vdobiotech.com/service/af24ea77feb64848a064177b152f215e" target="_blank">Case sharing | VDobiotech high-signal time-resolved fluorescent microspheres - an essential tool for ultra-sensitive lateral chromatography</a></li>
      </ul>
    </section>
    <section v-if="tab==='order'">
      <div class="section-title">Order Information</div>
      <div class="order-group-list">
        <div v-for="(group, gidx) in orderGroups" :key="gidx" class="order-group">
          <div class="order-group-title">{{ group.title }}</div>
          <div class="order-imgs">
            <div v-for="(item, idx) in group.items" :key="idx" class="img-center">
              <p v-if="item.label">{{ item.label }}</p>
              <img :src="item.img" :alt="item.label || 'Order Image'" class="main-img" @click="openModal(item.img)" />
            </div>
          </div>
        </div>
      </div>
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
import img1 from '@/assets/Reagent/lateral/lateral-1/10001.png'
import img2 from '@/assets/Reagent/lateral/lateral-1/10002.png'
import img3 from '@/assets/Reagent/lateral/lateral-1/10003.png'
import img4 from '@/assets/Reagent/lateral/lateral-1/10004.png'
import img5 from '@/assets/Reagent/lateral/lateral-1/10005.png'
import img6 from '@/assets/Reagent/lateral/lateral-1/10006.png'
import img7 from '@/assets/Reagent/lateral/lateral-1/10007.png'
import img8 from '@/assets/Reagent/lateral/lateral-1/10008.png'
import img9 from '@/assets/Reagent/lateral/lateral-1/10009.png'
import img10 from '@/assets/Reagent/lateral/lateral-1/10010.png'
import img11 from '@/assets/Reagent/lateral/lateral-1/10011.png'
const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'case', label: 'Application Cases' },
  { key: 'order', label: 'Order Information' }
]
const tab = ref('intro')
const orderGroups = [
  {
    title: 'Colored Microspheres',
    items: [
      { img: img1, label: 'Red Latex Microsphere' },
      { img: img2, label: 'S-Avidin (SA) Modified Colored Microsphere' },
      { img: img3, label: 'Blue Latex Microsphere' },
      { img: img4, label: 'Black Latex Microsphere' }
    ]
  },
  {
    title: 'Green Fluorescent Microspheres',
    items: [
      { img: img5, label: 'Green Fluorescent Microsphere-1' },
      { img: img6, label: 'Green Fluorescent Microsphere-2' }
    ]
  },
  {
    title: 'Red Fluorescent Microspheres',
    items: [
      { img: img7, label: 'Red Fluorescent Microsphere-1' },
      { img: img8, label: 'Red Fluorescent Microsphere-2' }
    ]
  },
  {
    title: 'Time-resolved Fluorescent Microspheres',
    items: [
      { img: img9, label: 'Time-resolved Fluorescent Microsphere-1' },
      { img: img10, label: 'Time-resolved Fluorescent Microsphere-2' }
    ]
  },
  {
    title: 'High-signal Time-resolved Fluorescent Microspheres',
    items: [
      { img: img11, label: 'High-signal Time-resolved Fluorescent Microsphere' }
    ]
  }
]
const modalImg = ref(null)
const openModal = (img) => {
  modalImg.value = img
}
const closeModal = () => {
  modalImg.value = null
}
</script>

<style scoped>
.lateral-chromatography-page {
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
.order-group-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.order-group {
  background: #fafdff;
  border-radius: 12px;
  padding: 18px 12px 12px 12px;
  box-shadow: 0 2px 8px rgba(34,58,94,0.04);
}
.order-group-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #2b7bbf;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.order-imgs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px 24px;
  margin-top: 24px;
  justify-items: center;
}
.order-imgs > div {
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f8fa;
  border-radius: 10px;
  padding: 12px 8px 18px 8px;
  box-shadow: 0 2px 8px rgba(34,58,94,0.06);
}
.order-imgs p {
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #204a6d;
  font-weight: 500;
  text-align: center;
}
.main-img {
  max-width: 320px;
  width: 100%;
  max-height: 240px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(34,58,94,0.10);
  cursor: pointer;
  transition: box-shadow 0.25s, border 0.25s, transform 0.25s;
  border: 2px solid transparent;
  margin-top: 8px;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(64,158,255,0.18);
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
  .lateral-chromatography-page {
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