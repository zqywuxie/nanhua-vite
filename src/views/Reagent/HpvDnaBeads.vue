<template>
  <CatalogContent title="HPV DNA Beads" family="Reagent">
    <div class="hpv-dna-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
    <section v-if="tab==='intro'" class="intro">
      <h2 class="section-title">Product Introduction</h2>
      <p>Human papilloma virus (HPV), including more than 100 gene subtypes, of which HPV 16 and 18 types account for nearly 50% of cervical cancer precancers. Currently, molecular diagnosis is usually used to detect HPV genomic DNA, which can detect almost all high-risk HPV subtypes that cause cervical cancer. For the development of HPV test kits, we have developed a magnetic bead suitable for HPV DNA extraction. This magnetic bead has excellent capture ability, fast magnetic response, and superparamagnetic, with better dispersion after surface modification with silicon hydroxyl groups, making it an ideal choice for HPV DNA extraction.</p>
      <div class="divider"></div>
      <h2 class="section-title">Product Features</h2>
<ul class="catalog-features">
        <li><b>Fast Magnetic Response</b>: The magnetic bead liquid can be completely adsorbed in about 25 seconds, which is beneficial for thorough magnetic bead transfer; </li>
        <li><b>Good Magnetic Bead Suspension</b>: The magnetic bead is stable at room temperature for 15 minutes, does not separate, which is beneficial for magnetic bead production and packaging; </li>
        <li><b>Good Magnetic Bead Repending</b>: Appropriate silicon hydroxyl modification improves magnetic bead hydrophilicity, which is beneficial for magnetic bead dispersion and reduces non-specific adsorption; </li>
        <li><b>Broad Sample Type Applicability</b>: Both ethanol and non-ethanol sample preservation solutions are applicable; </li>
        <li><b>High Adsorption Capacity</b>: Special surface coating improves magnetic bead capture of nucleic acids.</li>
      </ul>
      <div class="divider"></div>
      <h2 class="section-title">Technical Parameters</h2>
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
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgElution" alt="Elution Solution" class="preview-img" />
      <div style="margin-bottom:8px;">Figure 1. After elution, the solution is clear without magnetic residue</div>
      <div style="margin-top:16px;"><b>2. Magnetic Bead Customer Extraction Reagent Performance Verification</b></div>
      <p>In addition to providing an adapter magnetic bead, we also assist customers in optimizing the reagent system to finally determine the reagent, which is compared with the original reagent. The extraction time is shortened (fast magnetic response), the dispersion is good in complex samples (good repending), and the capture efficiency is improved, as shown below:</p>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgCtAlcohol" alt="CT Value Comparison of Ethanol Samples" class="preview-img" />
      <div style="margin-bottom:8px;">Table 1. CT value comparison of nucleic acid extraction in ethanol samples</div>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgCtNoAlcohol" alt="CT Value Comparison of Non-Ethanol Samples" class="preview-img" />
      <div style="margin-bottom:8px;">Table 2. CT value comparison of nucleic acid extraction in non-ethanol samples</div>
      <div style="margin-top:16px;"><b>3. Real Sample Detection Rate Test</b></div>
      <p>Compared with the control group, the optimized system has improved detection rates in positive samples, negative samples, and blind samples, indicating that the magnetic bead capture efficiency is high and effectively reduces the missed detection rate of HPV virus.</p>
      <div>1) Positive Samples</div>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgPositive" alt="Positive Samples" class="preview-img" />
      <div>2) Negative Samples</div>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgNegative" alt="Negative Samples" class="preview-img" />
      <div>3) Blind Samples</div>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgBlind" alt="Blind Samples" class="preview-img" />
    </section>
    <section v-if="tab==='order'" class="order-info">
      <h2>Order Information</h2>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="imgOrder" alt="Order Information Table" class="preview-img" />
    </section>
    <section v-if="tab==='manual'" class="catalog-resources manuals">
      <h2>Product Product Manuals</h2>
      <ul>
        <li><a :href="catalogPdf0" target="_blank" rel="noopener noreferrer">MA600H Magnetic Bead Product Manual (PDF)</a></li>
      </ul>
    </section>
    <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-5/MA600H.pdf?url';
import { ref } from 'vue'
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
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
</script>

<style scoped>
/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
