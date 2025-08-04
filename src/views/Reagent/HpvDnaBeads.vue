<template>
  <MobileOptimizedContent>
    <div class="hpv-dna-beads-page">
      <h1 class="main-title">HPV DNA Beads</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
    <section v-if="tab==='intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>Human papilloma virus (HPV), including more than 100 gene subtypes, of which HPV 16 and 18 types account for nearly 50% of cervical cancer precancers. Currently, molecular diagnosis is usually used to detect HPV genomic DNA, which can detect almost all high-risk HPV subtypes that cause cervical cancer. For the development of HPV test kits, we have developed a magnetic bead suitable for HPV DNA extraction. This magnetic bead has excellent capture ability, fast magnetic response, and superparamagnetic, with better dispersion after surface modification with silicon hydroxyl groups, making it an ideal choice for HPV DNA extraction.</p>
      <div class="divider"></div>
      <div class="section-title">Product Features</div>
      <ul>
        <li><b>Fast Magnetic Response</b>: The magnetic bead liquid can be completely adsorbed in about 25 seconds, which is beneficial for thorough magnetic bead transfer; </li>
        <li><b>Good Magnetic Bead Suspension</b>: The magnetic bead is stable at room temperature for 15 minutes, does not separate, which is beneficial for magnetic bead production and packaging; </li>
        <li><b>Good Magnetic Bead Repending</b>: Appropriate silicon hydroxyl modification improves magnetic bead hydrophilicity, which is beneficial for magnetic bead dispersion and reduces non-specific adsorption; </li>
        <li><b>Broad Sample Type Applicability</b>: Both ethanol and non-ethanol sample preservation solutions are applicable; </li>
        <li><b>High Adsorption Capacity</b>: Special surface coating improves magnetic bead capture of nucleic acids.</li>
      </ul>
      <div class="divider"></div>
      <div class="section-title">Technical Parameters</div>
      <ul>
        <li><b>Material</b> : Silica/Iron Oxide</li>
        <li><b>Particle Size</b>：0.5~1.5 μm</li>
        <li><b>Preservation Solution</b>：Deionized Pure Water</li>
        <li><b>Surface Modification</b> : Silicon Hydroxyl</li>
        <li><b>Additives</b> : Trace surface active agent, 0.1% Proclin 300</li>
      </ul>
    </section>
    <section v-if="tab==='case'" class="case-block">
      <h2>Application Cases</h2>
      <div style="margin-top:8px;"><b>1. Magnetic Bead Screening Verification</b></div>
      <p>After the four extraction steps of lysis-capture-washing-elution, the magnetic absorption is complete, the magnetic bead transfer is thorough, and the elution solution is clear without magnetic residue, so the nucleic acid extraction performance is good.</p>
      <img :src="imgElution" alt="Elution Solution" class="preview-img" @click="openPreview(imgElution)" />
      <div style="margin-bottom:8px;">Figure 1. After elution, the solution is clear without magnetic residue</div>
      <div style="margin-top:16px;"><b>2. Magnetic Bead Customer Extraction Reagent Performance Verification</b></div>
      <p>In addition to providing an adapter magnetic bead, we also assist customers in optimizing the reagent system to finally determine the reagent, which is compared with the original reagent. The extraction time is shortened (fast magnetic response), the dispersion is good in complex samples (good repending), and the capture efficiency is improved, as shown below:</p>
      <img :src="imgCtAlcohol" alt="CT Value Comparison of Ethanol Samples" class="preview-img" @click="openPreview(imgCtAlcohol)" />
      <div style="margin-bottom:8px;">Table 1. CT value comparison of nucleic acid extraction in ethanol samples</div>
      <img :src="imgCtNoAlcohol" alt="CT Value Comparison of Non-Ethanol Samples" class="preview-img" @click="openPreview(imgCtNoAlcohol)" />
      <div style="margin-bottom:8px;">Table 2. CT value comparison of nucleic acid extraction in non-ethanol samples</div>
      <div style="margin-top:16px;"><b>3. Real Sample Detection Rate Test</b></div>
      <p>Compared with the control group, the optimized system has improved detection rates in positive samples, negative samples, and blind samples, indicating that the magnetic bead capture efficiency is high and effectively reduces the missed detection rate of HPV virus.</p>
      <div>1) Positive Samples</div>
      <img :src="imgPositive" alt="Positive Samples" class="preview-img" @click="openPreview(imgPositive)" />
      <div>2) Negative Samples</div>
      <img :src="imgNegative" alt="Negative Samples" class="preview-img" @click="openPreview(imgNegative)" />
      <div>3) Blind Samples</div>
      <img :src="imgBlind" alt="Blind Samples" class="preview-img" @click="openPreview(imgBlind)" />
    </section>
    <section v-if="tab==='order'" class="order-info">
      <h2>Order Information</h2>
      <img :src="imgOrder" alt="Order Information Table" class="preview-img" @click="openPreview(imgOrder)" />
    </section>
    <section v-if="tab==='manual'" class="manuals">
      <h2>Product Manual Download</h2>
      <ul>
        <li><a href="/src/assets/Reagent/diagnosis/diagnosis-5/MA600H.pdf" download target="_blank">MA600H Magnetic Bead Product Manual (PDF)</a></li>
      </ul>
    </section>
    <!-- 图片预览弹窗 -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from 'vue'
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import imgElution from '@/assets/Reagent/diagnosis/diagnosis-5/10015.png'
import imgCtAlcohol from '@/assets/Reagent/diagnosis/diagnosis-5/10016.png'
import imgCtNoAlcohol from '@/assets/Reagent/diagnosis/diagnosis-5/10017.png'
import imgPositive from '@/assets/Reagent/diagnosis/diagnosis-5/10018.png'
import imgNegative from '@/assets/Reagent/diagnosis/diagnosis-5/10019.png'
import imgBlind from '@/assets/Reagent/diagnosis/diagnosis-5/10020.png'
import imgOrder from '@/assets/Reagent/diagnosis/diagnosis-5/10021.png'
const tabList = [
  { key: 'intro', label: 'Product Introduction' },
  // { key: 'features', label: 'Product Features' },
  // { key: 'specs', label: 'Technical Parameters' },
  { key: 'case', label: 'Application Cases' },
  { key: 'order', label: 'Order Information' },
  { key: 'manual', label: 'Manual' }
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
.hpv-dna-beads-page {
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
@media (max-width: 900px) {
  .hpv-dna-beads-page {
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