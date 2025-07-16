<template>
  <div class="chemiluminescent-magnetic-beads-page">
    <h1 class="main-title">Chemiluminescent Magnetic Beads</h1>
    <!-- Tab navigation -->
    <div class="tab-nav">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', {active: currentTab === tab.key}]"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- Tab content -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>
        The VDO Chemiluminescent Magnetic Beads exhibit superparamagnetism and a moderate magnetic content, boasting excellent resuspension and a fast magnetic response speed; this series of products utilizes advanced microsphere synthesis technology and unique surface treatment processes, allowing for the modification of multiple functional groups, providing a rich selection for customers to develop different technical routes. The high loading of functional groups on the microsphere surface ensures product binding capacity, demonstrating excellent performance in the chemiluminescent immunology field. In addition, we can provide comprehensive technical support and overall application solutions for the subsequent applications of our customers.
      </p>
      <div class="section-title">Product Advantages</div>
      <ul>
        <li><b>High Magnetic Content</b>: Short magnetic response time, can reach within 10s</li>
        <li><b>Large-scale production capacity, single batch can reach 50L</b>: Achieve stable mass production</li>
        <li><b>Uniform microsphere size, stable and controllable functional groups on the surface</b>: Good repeatability</li>
        <li><b>Superparamagnetism and appropriate density</b>: Ensures good resuspension and suspension time</li>
        <li><b>Sufficient functional groups on the surface</b>: Can efficiently couple sufficient target proteins</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Technical Parameters</div>
      <ul>
        <li>Material: Iron Oxide</li>
        <li>Particle Size: 0.6μm, 1μm, 1.5μm, 3μm</li>
        <li>Additives: Trace surface active agents</li>
        <li>Uniformity: CV&lt;5%</li>
        <li>Density: 1.05-3.38g/cm³</li>
        <li>Functional Groups on Surface: Carboxyl (COOH) / Tosyl / Streptavidin (SA)</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Performance Verification</div>
      <div class="performance-item">
        <h3>1. Reactivity</h3>
        <img :src="img1" alt="Reactivity" class="preview-img" @click="openPreview(img1)" />
        <p>In the IL-6 project, the reactivity of VDO magnetic beads with different concentration standard samples was basically consistent with that of the control J magnetic beads.</p>
      </div>
      <div class="performance-item">
        <h3>2. Signal-to-Noise Ratio</h3>
        <img :src="img2" alt="Signal-to-Noise Ratio" class="preview-img" @click="openPreview(img2)" />
        <p>The VDO magnetic beads (CMP1003CA/ CMP1003SA) and the control J magnetic beads had the same signal-to-noise ratio in the IL-6 project.</p>
      </div>
      <div class="performance-item">
        <h3>3. Batch-to-Batch Stability</h3>
        <img :src="img3" alt="Batch-to-Batch Stability" class="preview-img" @click="openPreview(img3)" />
        <p>Three batches of VDO magnetic beads were randomly selected for reaction testing under the same conditions in the IL-6 project, and the results showed that the reaction curves of the three batches were well overlapped, indicating consistent test results and good batch repeatability.</p>
      </div>
      <div class="performance-item">
        <h3>4. Accelerated Stability</h3>
        <img :src="img4" alt="Accelerated Stability" class="preview-img" @click="openPreview(img4)" />
        <p>The VDO carboxyl magnetic beads and streptavidin microspheres were placed at 37℃ for 21 days and 42 days, respectively, and detected in the IL-6 and CEA projects, with signal values remaining above 95%, demonstrating good stability.</p>
      </div>
    </section>
    <section v-if="currentTab === 'manual'" class="manual">
      <h2>Manual Download</h2>
      <ul>
        <li>
          <a href="/src/assets/Reagent/chem/Magnetic Beads (Streptavidin) Product Manual Chinese Version.pdf" target="_blank">Magnetic Beads (Streptavidin) Product Manual Chinese Version.pdf</a>
        </li>
        <li>
          <a href="/src/assets/Reagent/chem/Magnetic Beads (Carboxyl) Product Manual Chinese Version.pdf" target="_blank">Magnetic Beads (Carboxyl) Product Manual Chinese Version.pdf</a>
        </li>
        <li>
          <a href="/src/assets/Reagent/chem/Magnetic Beads (Carboxyl-T Process) Product Manual.pdf" target="_blank">Magnetic Beads (Carboxyl-T Process) Product Manual.pdf</a>
        </li>
        <li>
          <a href="/src/assets/Reagent/chem/Magnetic Beads (Tosyl) Product Manual.pdf" target="_blank">Magnetic Beads (Tosyl) Product Manual.pdf</a>
        </li>
      </ul>
    </section>
    <section v-if="currentTab === 'cases'" class="cases">
      <h2>VDO Chemiluminescent Magnetic Beads Application Cases</h2>
      <ol>
        <li><a href="http://cn.vdobiotech.com/service/5ea84fd61a1d46c9b9620bebd650d275" target="_blank">Chemiluminescent Microsphere Product Technical Manual</a></li>
        <li><a href="https://mp.weixin.qq.com/s/uzy6uzFbA9kVETCKYUsj2w" target="_blank">Carboxyl Magnetic Bead Coupling Scheme</a></li>
        <li><a href="http://cn.vdobiotech.com/service/5938fadc83a941d7b98803dbc9a781ef" target="_blank">Application of VDO Chemiluminescent Magnetic Beads in Cyfra21-1 Detection</a></li>
        <li><a href="http://cn.vdobiotech.com/service/f4700793f6954d139493411abc907b60" target="_blank">Experimental Technology Guide for Carboxyl Magnetic Bead Coupling SA and Antibodies</a></li>
        <li><a href="http://cn.vdobiotech.com/service/3e541acc7b7d45ae9d6ced98a9e5f1b1" target="_blank">Development of NT-proBNP Diagnostic Reagent Based on High Specific Activity Alkaline Phosphatase (CmAP) and an Optimized Coupling Method</a></li>
      </ol>
    </section>
    <section v-if="currentTab === 'order'" class="order-info">
      <h2>Order Information</h2>
      <img :src="orderImg" alt="Order Information" class="preview-img" @click="openPreview(orderImg)" />
      <div class="trial">
        <a href="https://mp.weixin.qq.com/s/tUbNa9JmcY66MWZHP2hH3w" target="_blank" class="trial-btn"><b>Trial Application Activity</b></a>
      </div>
    </section>
    <div class="divider"></div>
    <!-- Image preview modal -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Tab configuration
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'performance', label: 'Performance Verification' },
  { key: 'manual', label: 'Manual' },
  { key: 'cases', label: 'Application Cases' },
  { key: 'order', label: 'Order Information' }
]
const currentTab = ref('intro')
// Images use import relative paths
import img1 from '@/assets/Reagent/chem/10002.png'
import img2 from '@/assets/Reagent/chem/10003.png'
import img3 from '@/assets/Reagent/chem/10004.png'
import img4 from '@/assets/Reagent/chem/10005.png'
import orderImg from '@/assets/Reagent/chem/10006.png'

const previewImg = ref(null)
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = null
}
</script>

<style scoped>
.chemiluminescent-magnetic-beads-page {
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
.performance-item {
  margin-bottom: 32px;
}
.preview-img {
  display: block;
  margin: 24px auto 0 auto;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.preview-img:hover {
  box-shadow: 0 4px 24px rgba(32,74,109,0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
.cases ol {
  padding-left: 20px;
}
.cases li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
  line-height: 1.8;
}
.trial {
  text-align: center;
  margin-top: 32px;
}
.trial-btn {
  display: inline-block;
  background: #e6f7ff;
  color: #204a6d;
  padding: 8px 32px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 8px;
  transition: background 0.2s, color 0.2s;
  border: 1.5px solid #204a6d;
}
.trial-btn:hover {
  background: #204a6d;
  color: #fff;
}
@media (max-width: 900px) {
  .chemiluminescent-magnetic-beads-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .preview-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
/* Image preview modal styles */
.img-preview-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,40,60,0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(32,74,109,0.25);
  background: #fff;
  border: 2px solid #204a6d;
  display: block;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1010;
  user-select: none;
  transition: color 0.2s;
}
.img-preview-close:hover {
  color: #d23c1a;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 