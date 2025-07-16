<template>
  <div class="homogeneous-page">
    <h1 class="main-title">Comprehensive Homogeneous Luminescence Solution</h1>
    <section class="intro">
      <div class="section-title">Product Introduction</div>
      <p>Homogeneous luminescence is a significant milestone in the field of chemiluminescent immunoassays, enabling direct chemiluminescent detection without the need for separation and washing steps. This technology offers multiple advantages, including high throughput, low background, excellent reproducibility and sensitivity, simple operation, minimal sample requirements, and a wide detection range, making it suitable for the development of automated detection systems.</p>
      <div style="text-align:center;margin:32px 0 12px 0;">
        <div class="img-block">
          <img :src="imgPrinciple" alt="Homogeneous Luminescence Principle Diagram" class="intro-img" @click="openPreview(imgPrinciple)" />
          <div style="color:#888;font-size:14px;margin-top:8px;">Homogeneous Luminescence Principle Diagram</div>
        </div>
      </div>
      <p>Based on the homogeneous luminescence technology platform, Vdobiotech offers a comprehensive solution—from homogeneous reagent materials & instruments, technology development to large-scale production. Leveraging our extensive experience in innovative development and large-scale manufacturing, we assist clients in developing homogeneous luminescence-related products, reducing development costs and shortening R&D cycles.</p>
      <div style="text-align:center;margin:32px 0 12px 0;">
        <div class="img-block">
          <img :src="imgFlow" alt="Solution Flow Chart" class="intro-img" @click="openPreview(imgFlow)" />
        </div>
      </div>
      <div class="section-title" style="margin-top:36px;">Serum Biomarker Detection Reagents</div>
      <p>(Compared with Magnetic Particle Chemiluminescence)</p>
      <p>Vdobiotech has developed a series of high-performance homogeneous luminescence serum biomarker detection kits. Key performance indicators such as sensitivity, precision, and correlation are on par with imported chemiluminescence reagents.</p>
      <div class="section-title" style="margin-top:36px;">Project 1: hs-cTnI</div>
      <div class="img-block"><img :src="imgHsctni1" alt="hs-cTnI-1" class="intro-img" @click="openPreview(imgHsctni1)" /></div>
      <div class="img-block"><img :src="imgHsctni2" alt="hs-cTnI-2" class="intro-img" @click="openPreview(imgHsctni2)" /></div>
      <ul class="list-paddingleft-2" style="list-style-type: disc;">
        <li>Clinical sample correlation comparison between VDO reagent and competitor B (n=36), correlation coefficient r=0.9928, demonstrating good sample correlation.</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Project 2: PCT</div>
      <div class="img-block"><img :src="imgPct1" alt="PCT-1" class="intro-img" @click="openPreview(imgPct1)" /></div>
      <div class="img-block"><img :src="imgPct2" alt="PCT-2" class="intro-img" @click="openPreview(imgPct2)" /></div>
      <ul class="list-paddingleft-2" style="list-style-type: disc;">
        <li>Clinical sample correlation comparison between VDO reagent and competitor R (n=82), correlation coefficient r=0.9978, demonstrating good sample correlation.</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Project 3: IL-6</div>
      <div class="img-block"><img :src="imgIl61" alt="IL-6-1" class="intro-img" @click="openPreview(imgIl61)" /></div>
      <div class="img-block"><img :src="imgIl62" alt="IL-6-2" class="intro-img" @click="openPreview(imgIl62)" /></div>
      <ul class="list-paddingleft-2" style="list-style-type: disc;">
        <li>Clinical sample correlation comparison between VDO reagent and competitor R (n=84), correlation coefficient r=0.9968, demonstrating good sample correlation.</li>
      </ul>
      <div class="section-title" style="margin-top:36px;">Product List</div>
      <div class="img-block"><img :src="imgList1" alt="Product List 1" class="intro-img" @click="openPreview(imgList1)" /></div>
      <div class="img-block"><img :src="imgList2" alt="Product List 2" class="intro-img" @click="openPreview(imgList2)" /></div>
      <div class="img-block"><img :src="imgList3" alt="Product List 3" class="intro-img" @click="openPreview(imgList3)" /></div>
      <div class="img-block"><img :src="imgList4" alt="Product List 4" class="intro-img" @click="openPreview(imgList4)" /></div>
      <div class="img-block"><img :src="imgList5" alt="Product List 5" class="intro-img" @click="openPreview(imgList5)" /></div>
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
import imgPrinciple from '@/assets/LifeScience/homogeneous/homogeneous-2/2291fd0eddc849a5a2194c8163a76755.png';
import imgFlow from '@/assets/LifeScience/homogeneous/homogeneous-2/4ae62add3a254c6daae7cc697f63d2e4.png';
import imgHsctni1 from '@/assets/LifeScience/homogeneous/homogeneous-2/337c329aa9854d13a49e74cc8976482c.png';
import imgHsctni2 from '@/assets/LifeScience/homogeneous/homogeneous-2/82d6540ee3b444a8b1adf26f66f4b284.png';
import imgPct1 from '@/assets/LifeScience/homogeneous/homogeneous-2/2b8d2c862a7943d5824552b78fc9cf95.png';
import imgPct2 from '@/assets/LifeScience/homogeneous/homogeneous-2/b5064364dbaa41bda46d23ed54d531eb.png';
import imgIl61 from '@/assets/LifeScience/homogeneous/homogeneous-2/76534732a02a4f0e94ceba31eaf18fb5.png';
import imgIl62 from '@/assets/LifeScience/homogeneous/homogeneous-2/66854e29ea5d43429b263d04c10d42b2.png';
import imgList1 from '@/assets/LifeScience/homogeneous/homogeneous-2/38f0f4dce27e42e1a65cc555c7fce119.png';
import imgList2 from '@/assets/LifeScience/homogeneous/homogeneous-2/a2729444d4684ecc9e3e174aa5cb76a1.png';
import imgList3 from '@/assets/LifeScience/homogeneous/homogeneous-2/74e24cb373c446d2ab8c5f3d267e7382.png';
import imgList4 from '@/assets/LifeScience/homogeneous/homogeneous-2/54e38ca228f04e0bb8da32c30325427a.png';
import imgList5 from '@/assets/LifeScience/homogeneous/homogeneous-2/a3a58d40631e4508a593fe3d43b51c6a.png';

const previewImg = ref('')
function openPreview(img) { previewImg.value = img }
function closePreview() { previewImg.value = '' }
</script>

<style scoped>
.homogeneous-page {
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
ul, ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #333;
}
p {
  font-size: 1.08rem;
  color: #333;
  line-height: 1.9;
  margin-bottom: 16px;
}
/* 统一图片样式和预览弹窗样式 */
.img-block {
  margin: 18px 0;
  text-align: center;
}
.intro-img {
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  transition: box-shadow 0.2s;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #0002;
}
.img-preview-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #0005;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1001;
  text-shadow: 0 2px 8px #000a;
}
@media (max-width: 900px) {
  .main-title {
    font-size: 2rem;
  }
  .intro-img {
    max-width: 98vw;
  }
}
</style> 