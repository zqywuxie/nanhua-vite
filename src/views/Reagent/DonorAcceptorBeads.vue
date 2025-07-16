<template>
  <div class="donor-acceptor-beads-page">
    <h1 class="main-title">Donor Acceptor Microspheres</h1>
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
      <div class="section-title">Product Overview</div>
      <p>
        This series of products is specifically designed for homogeneous chemiluminescent immunoassay, with donor microspheres containing photosensitizer and acceptor microspheres containing luminescent dye. By using 680nm to excite donor microspheres, oxygen is converted to an excited singlet oxygen state and diffused to acceptor microspheres within a 200nm range, resulting in a stable and efficient light signal at 615nm.
      </p>
      <div style="text-align:center;margin:20px 0;">
        <img :src="mainImg" alt="Donor Acceptor Microspheres Main Image" class="preview-img" @click="openPreview(mainImg)" />
      </div>
      <div class="divider"></div>
      <h2 class="section-title">Technical Parameters</h2>
      <ul>
        <li>Material: Donor Microspheres - Polystyrene microspheres containing photosensitizer</li>
        <li style="text-indent:2em;">Acceptor Microspheres - Polystyrene microspheres containing luminescent dye</li>
        <li>Particle Size: 200nm</li>
        <li>Surface Modification: Carboxyl (COOH), Streptavidin (SA)</li>
        <li>Density: 1.05g/cm<sup>3</sup></li>
        <li>Storage Solution: Pure Water</li>
        <li>Additives: Trace Surface Active Agent</li>
        <li>Refractive Index: 1.59 (589nm Wavelength, 25℃)</li>
        <li>Storage Conditions: Avoid Light, Store at 2-8℃, Do Not Freeze</li>
      </ul>
    </section>
    <section v-if="tab==='manual'" class="manual">
      <h2>Manual Download</h2>
      <ul>
        <li>
          <a href="https://www.vdobiotech.com.cn/group1/77/ddb3d63caafd4639bcf707e511f241ed.pdf" target="_blank">Homogeneous Luminescent Immunoassay Product Manual</a>
        </li>
        <li>
          <a href="/src/assets/Reagent/homogeneous/Donor Beads Manual.pdf" target="_blank">Donor Beads Manual.pdf</a>
        </li>
        <li>
          <a href="/src/assets/Reagent/homogeneous/Acceptor Beads Manual.pdf" target="_blank">Acceptor Beads Manual.pdf</a>
        </li>
      </ul>
    </section>
    <section v-if="tab==='order'" class="supply">
      <h2>Supply Information</h2>
      <div>
        <h3>Donor Microspheres</h3>
        <img :src="donorImg" alt="Donor Microspheres" class="preview-img" @click="openPreview(donorImg)" />
      </div>
      <div style="margin-top:18px;">
        <h3>Acceptor Microspheres</h3>
        <img :src="acceptorImg" alt="Acceptor Microspheres" class="preview-img" @click="openPreview(acceptorImg)" />
      </div>
      <p style="margin-top:10px;font-size:14px;">Other specifications can be customized according to customer requirements</p>
    </section>
    <!-- 图片预览弹窗 -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 图片采用import相对路径
import mainImg from '@/assets/Reagent/homogeneous/10001.jpg'
import donorImg from '@/assets/Reagent/homogeneous/10002.png'
import acceptorImg from '@/assets/Reagent/homogeneous/10003.png'
const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' },
  { key: 'order', label: 'Supply Information' }
]
const tab = ref('intro')
const previewImg = ref(null)
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = null
}
</script>

<style scoped>
.donor-acceptor-beads-page {
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
.supply h3 {
  font-size: 1.1rem;
  color: #204a6d;
  margin: 18px 0 8px 0;
  font-weight: 600;
}
.supply p {
  color: #888;
}
.manual-download-btn {
  display: inline-flex;
  align-items: center;
  background: #204a6d;
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(32,74,109,0.10);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  margin: 0 auto;
}
.manual-download-btn:hover {
  background: #409eff;
  color: #fff;
  box-shadow: 0 4px 16px rgba(64,158,255,0.18);
}
.icon-pdf {
  font-size: 1.25em;
}
@media (max-width: 900px) {
  .donor-acceptor-beads-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .preview-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
/* 图片预览弹窗样式 */
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