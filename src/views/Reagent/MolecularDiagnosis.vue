<template>
  <div class="molecular-diagnosis-page">
    <h1 class="main-title">Molecular Diagnosis</h1>
    <section class="intro">
      <p>
        We offer multiple product lines in the molecular diagnosis field, including nucleic acid extraction, second-generation sequencing, single-cell sequencing, and target capture. <br />
        In addition to microspheres, we also provide corresponding instrument equipment to facilitate your use. For more detailed information, please contact us.
      </p>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Nucleic Acid Extraction and Purification</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            This series of magnetic microspheres is specifically designed for nucleic acid extraction and purification. It has excellent nucleic acid capture and elution efficiency. With a fast magnetic response, it maintains good dispersion and extremely low non-specific adsorption. It is suitable for nucleic acid extraction and automation instrument extraction requirements for various sample types, making it an ideal choice for nucleic acid extraction and purification of biological samples.
          </p>
          <p>All magnetic microspheres can be provided in 10ml, 100ml, and 1L packaging specifications.</p>
        </div>
        <img :src="imgNucleicAcid" alt="Nucleic Acid Extraction and Purification" class="preview-img" @click="openPreview(imgNucleicAcid)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Viral Nucleic Acid Extraction and Purification</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            We can provide a series of magnetic microspheres suitable for viral nucleic acid extraction. Our magnetic microspheres have excellent nucleic acid capture and elution efficiency, and achieve perfect unity in suspension, dispersion, and magnetic response speed, suitable for nucleic acid extraction requirements for various sample types and automation nucleic acid extraction instruments. The magnetic microspheres developed by Weidu are recognized as an ideal product for viral nucleic acid extraction.
          </p>
          <p>All magnetic microspheres can be provided in 10ml, 100ml, and 1L packaging specifications.</p>
        </div>
        <img :src="imgNucleicAcid" alt="Viral Nucleic Acid Extraction and Purification" class="preview-img" @click="openPreview(imgNucleicAcid)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>mRNA Extraction & Purification Magnetic Microspheres</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            Oligo(dT) magnetic microspheres are suitable for rapidly separating high-purity complete mRNA from eukaryotic cell total RNA or from tissues, animals, and plants. The purified mRNA can be directly used in most downstream applications of molecular biology, such as RT-PCR, solid-phase cDNA library construction, S1 nucleic acid analysis, ribonucleic acid protection analysis, primer extension, dot blot hybridization,体外转录实验, RACE, splicing hybridization, Northern analysis, gene cloning, gene expression analysis, etc.
          </p>
        </div>
        <img :src="imgMrna" alt="mRNA Extraction & Purification Magnetic Microspheres" class="preview-img" @click="openPreview(imgMrna)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>cfDNA (cfDNA) Extraction</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            Liquid biopsy technology based on NGS has been widely used in clinical practice as one of the core technologies in precision medicine. The efficient extraction and purification of cfDNA are the solid foundation to ensure accurate and reliable detection results. However, due to the extremely low concentration of cfDNA in plasma and the complexity of biological samples, efficient cfDNA extraction is not easy. Weidu specially developed cfDNA extraction magnetic beads for such plasma samples, with excellent nucleic acid capture and elution efficiency, fast magnetic response, good dispersion, and extremely low non-specific adsorption, making it an ideal choice for cfDNA purification.
          </p>
        </div>
        <img :src="imgCfDNA" alt="cfDNA (cfDNA) Extraction" class="preview-img" @click="openPreview(imgCfDNA)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>HPV DNA Extraction Microspheres</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            Human papillomavirus (HPV), which includes more than 100 gene subtypes, is associated with approximately 50% of cervical cancer precancers. Currently, molecular diagnosis is usually used to detect HPV genomic DNA, which can detect almost all high-risk HPV subtypes that cause cervical cancer. Weidu developed a magnetic bead suitable for HPV DNA extraction to meet the needs of customer HPV reagent box development, with excellent capture ability, fast magnetic response speed, ultra-superparamagnetic, and better dispersion due to silicon hydroxyl modification on the surface, making it an ideal choice for HPV DNA extraction.
          </p>
        </div>
        <img :src="imgHPV" alt="HPV DNA Extraction Microspheres" class="preview-img" @click="openPreview(imgHPV)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Blood Genomic DNA Extraction Reagent (Bead Method)</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            To better support customer requirements for blood sample genomic extraction, Weidu can provide a comprehensive solution for blood genomic extraction, including magnetic microspheres for nucleic acid extraction, corresponding buffer reagents, and nucleic acid extraction reagent technology services. This product can separate and purify 5-10μg of high-quality genomic DNA from 200μL blood, with 100% DNA sample ratio, no Qubit test required, only Nanodrop detection for accurate quantification, can be directly used for downstream detection experiments, including enzyme digestion, PCR, quantitative PCR, library construction, Southern blotting, chip detection, and high-throughput sequencing experiments.
          </p>
        </div>
        <img :src="imgBloodDNA" alt="Blood Genomic DNA Extraction Reagent (Bead Method)" class="preview-img" @click="openPreview(imgBloodDNA)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Target Capture</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            This series of streptavidin magnetic microspheres can efficiently bind biotin derivatives.
          </p>
        </div>
        <img :src="imgTarget" alt="Target Capture" class="preview-img" @click="openPreview(imgTarget)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>NGS Sequencing</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            CleanNGS, a dedicated magnetic microsphere for high-throughput sequencing product purification and fragment screening, is 1:1 replaceable with Agencourt AMPure XP reagent products, with compatible operation procedures and good consistency of detection results.
          </p>
        </div>
        <img :src="imgNGS" alt="NGS Sequencing" class="preview-img" @click="openPreview(imgNGS)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Single-Cell Sequencing</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            The magnetic microspheres developed by Weidu have characteristics of ultra-superparamagnetic, moderate magnetic content, good suspension, and fast magnetic response. The magnetic microspheres are surface-modified with carboxyl groups, which can effectively bind amine derivatives, suitable for adding molecular barcode sequences to cells during single-cell sequencing. Surface functional groups and particle size can be customized according to customer requirements.
          </p>
          <p>Other specifications can be customized as required.</p>
        </div>
        <img :src="imgSingleCell" alt="Single-Cell Sequencing" class="preview-img" @click="openPreview(imgSingleCell)" />
      </div>
    </section>
    <div class="divider"></div>
    <section class="product-section">
      <h2>Magnetic Rack</h2>
      <div class="section-content">
        <div class="section-text">
          <p>
            When using the magnetic rack provided by Weidu, it can achieve the separation of target substances. Due to the strong magnetic rack product, which can quickly adsorb your microspheres to the tube wall, it can significantly reduce your waiting time.
          </p>
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section class="diagnosis-types">
      <h2>Types of Molecular Diagnosis</h2>
      <ul>
        <li><router-link to="/reagent/molecular/nucleic-acid">Nucleic Acid Extraction and Purification</router-link></li>
        <li><router-link to="/reagent/molecular/mrna">mRNA Extraction & Purification Magnetic Microspheres</router-link></li>
        <li><router-link to="/reagent/molecular/cfdna">cfDNA (cfDNA) Extraction</router-link></li>
        <li><router-link to="/reagent/molecular/hpv">HPV DNA Extraction Microspheres</router-link></li>
        <li><router-link to="/reagent/molecular/blood-dna">Blood Genomic DNA Extraction Reagent (Bead Method)</router-link></li>
        <li><router-link to="/reagent/molecular/target-capture">Target Capture</router-link></li>
        <li><router-link to="/reagent/molecular/ngs">NGS Sequencing</router-link></li>
        <li><router-link to="/reagent/molecular/single-cell">Single-Cell Sequencing</router-link></li>
        <li><router-link to="/reagent/molecular/magnetic-rack">Magnetic Rack</router-link></li>
      </ul>
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
import imgNucleicAcid from '@/assets/Reagent/diagnosis/diagnosis-1/10001.png'
import imgMrna from '@/assets/Reagent/diagnosis/diagnosis-1/10002.png'
import imgCfDNA from '@/assets/Reagent/diagnosis/diagnosis-1/10003.png'
import imgHPV from '@/assets/Reagent/diagnosis/diagnosis-1/10004.png'
import imgBloodDNA from '@/assets/Reagent/diagnosis/diagnosis-1/10005.png'
import imgTarget from '@/assets/Reagent/diagnosis/diagnosis-1/10006.png'
import imgNGS from '@/assets/Reagent/diagnosis/diagnosis-1/10007.png'
import imgSingleCell from '@/assets/Reagent/diagnosis/diagnosis-1/10008.png'

const previewImg = ref(null)
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = null
}
</script>

<style scoped>
.molecular-diagnosis-page {
  padding: 32px 0 24px 0;
  background: #f7f9fb;
}
.main-title {
  font-size: 2.2rem;
  color: #1a2a3a;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 18px;
  text-align: center;
}
.intro {
  max-width: 1200px;
  margin: 0 auto 32px auto;
  font-size: 1.08rem;
  color: #333;
  line-height: 1.8;
  text-align: center;
}
.divider {
  height: 1px;
  background: #e0e4ea;
  margin: 36px auto 36px auto;
  max-width: 1200px;
}
.product-section {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 0 0 0;
}
.product-section h2 {
  font-size: 1.35rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 12px;
  border-left: 4px solid #204a6d;
  padding-left: 12px;
  background: none;
}
.section-content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 0;
}
.section-text {
  flex: 1 1 0%;
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
}
.preview-img {
  flex: 0 0 320px;
  max-width: 320px;
  max-height: 260px;
  object-fit: contain;
  margin: 0;
  border-radius: 6px;
  border: 1.5px solid #e0e4ea;
  background: #fff;
  box-shadow: none;
  display: block;
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
  .section-content {
    flex-direction: column;
    gap: 16px;
  }
  .preview-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
.diagnosis-types {
  max-width: 1200px;
  margin: 48px auto 0 auto;
  padding: 32px 0 0 0;
  border-top: 2px solid #e0e4ea;
}
.diagnosis-types h2 {
  font-size: 1.18rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 1px;
}
.diagnosis-types ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px 32px;
}
.diagnosis-types li {
  margin: 0;
}
.diagnosis-types a, .diagnosis-types .router-link-active {
  color: #1a2a3a;
  font-size: 1rem;
  text-decoration: none;
  padding: 2px 8px;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}
.diagnosis-types a:hover {
  background: #e0e4ea;
  color: #204a6d;
  text-decoration: underline;
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