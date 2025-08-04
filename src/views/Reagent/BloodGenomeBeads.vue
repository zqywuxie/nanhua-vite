<template>
  <MobileOptimizedContent>
    <div class="blood-genome-beads-page">
      <h1 class="main-title">
        Magnet Beads Blood Genome DNA Extraction Reagent
      </h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <div class="section-title">Product Introduction</div>
          <section class="intro">
            <p>
              To better support customer requirements for blood sample genome
              extraction, Duobio provides a comprehensive solution for blood
              genome extraction, including magnetic microspheres for nucleic
              acid extraction, supporting buffer reagents, and nucleic acid
              extraction reagent technology services. This product can separate
              and purify high-quality genomic DNA (5-10μg) from 200μL blood,
              with DNA sample ratio of 100%, no Qubit test required, only
              Nanodrop detection for accurate quantification, directly
              applicable for downstream detection experiments, including enzyme
              digestion, PCR, fluorescence quantitative PCR, library
              construction, Southern hybridization, chip detection, and
              high-throughput sequencing experiments.
            </p>
            <div style="text-align: center; margin: 20px 0">
              <img
                :src="imgMain"
                alt="Main Image"
                class="preview-img"
                @click="openPreview(imgMain)"
              />
            </div>
          </section>
          <div class="divider"></div>
          <div class="section-title">Product Advantages</div>
          <ul>
            <li>
              <b>High Purity</b>: DNA ratio close to 100%, no Qubit test
              required, only Nanodrop detection for accurate quantification of
              genomic DNA content.
            </li>
            <li>
              <b>Flexible Volume</b>: No need to adjust extraction reagent
              volume and operation process, can extract genomic DNA from
              50-300μL sample volume.
            </li>
            <li>
              <b>Simple and Convenient</b>: No need to add proteinase K,
              simplify operation process and storage conditions.
            </li>
            <li>
              <b>High Efficiency</b>: Full process takes only 30 minutes, can
              process 32 or 96 samples simultaneously.
            </li>
            <li>
              <b>Safe Process</b>: Reagent components do not contain
              phenol/chloroform and other organic reagents, safe and low
              toxicity.
            </li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Extraction Process</div>
          <p>
            Blood samples are released by pre-lysis, adsorbed by magnetic beads
            coated with special materials, and then separated by magnetic
            separation. Add lysis solution, denature proteins to release genomic
            DNA, and ensure that DNA is released from the nucleus in a
            relatively clean environment, greatly avoiding interference from
            protein impurities and RNA in blood samples, and reducing lysis
            requirements,
            <b style="color: #4472c4"
              >no need to add proteinase K, improving DNA purity and
              concentration, DNA ratio of 100%</b
            >.
          </p>
          <div style="text-align: center; margin: 20px 0">
            <img
              :src="imgProcess"
              alt="Extraction Process"
              class="preview-img"
              @click="openPreview(imgProcess)"
            />
          </div>
          <div class="divider"></div>
          <div class="section-title">Validation Data</div>
          <div>
            <b>1. Competitor Comparison Results</b>
            <p>
              Use Duobio reagent and competitor reagent to extract genomic DNA
              from three EDTA anticoagulated blood samples, each sample volume
              of 200μL, elution volume of 100μL.
            </p>
            <div style="text-align: center; margin: 20px 0">
              <img
                :src="imgCompetitorTable"
                alt="Competitor Comparison Table"
                class="preview-img"
                @click="openPreview(imgCompetitorTable)"
              />
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-bottom: 8px;
                flex-wrap: wrap;
              "
            >
              <img
                :src="imgCompetitorConcentration"
                alt="DNA Concentration Comparison"
                class="preview-img"
                @click="openPreview(imgCompetitorConcentration)"
                style="max-width: 266px; max-height: 190px"
              />
              <img
                :src="imgCompetitorPurity"
                alt="DNA Purity Comparison"
                class="preview-img"
                @click="openPreview(imgCompetitorPurity)"
                style="max-width: 266px; max-height: 190px"
              />
            </div>
            <p>
              Conclusion: Compared to the control reagent, Duobio reagent
              extracted genomic DNA concentration for 3 samples was higher than
              that of the competitor reagent (Qubit test results) and DNA ratio
              of 100%.
            </p>
          </div>
          <div>
            <b
              >2. No Need to Adjust Reagent Volume, Simultaneously Meet Large
              and Small Volume Sample Extraction</b
            >
            <div style="text-align: center; margin: 20px 0">
              <img
                :src="imgVolumeTable"
                alt="Flexible Volume Table"
                class="preview-img"
                @click="openPreview(imgVolumeTable)"
              />
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-bottom: 8px;
                flex-wrap: wrap;
              "
            >
              <img
                :src="imgVolumeConcentration"
                alt="Concentration at Different Volumes"
                class="preview-img"
                @click="openPreview(imgVolumeConcentration)"
                style="max-width: 266px; max-height: 190px"
              />
              <img
                :src="imgVolumePurity"
                alt="Purity at Different Volumes"
                class="preview-img"
                @click="openPreview(imgVolumePurity)"
                style="max-width: 266px; max-height: 190px"
              />
            </div>
            <p>
              Conclusion: Within the 50-300μL volume range, using the same
              extraction reagent volume and operation process, blood sample
              volume and genomic DNA are linearly related, and OD260/280 value
              is around 1.8, OD260/230>1.5.
            </p>
          </div>
          <div>
            <b>3. Reagent Accelerated Stability Good</b>
            <div style="text-align: center; margin: 20px 0">
              <img
                :src="imgStabilityTable"
                alt="Accelerated Stability Table"
                class="preview-img"
                @click="openPreview(imgStabilityTable)"
              />
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-bottom: 8px;
                flex-wrap: wrap;
              "
            >
              <img
                :src="imgStabilityConcentration"
                alt="Accelerated Stability Concentration"
                class="preview-img"
                @click="openPreview(imgStabilityConcentration)"
                style="max-width: 266px; max-height: 190px"
              />
              <img
                :src="imgStabilityPurity"
                alt="Accelerated Stability Purity"
                class="preview-img"
                @click="openPreview(imgStabilityPurity)"
                style="max-width: 266px; max-height: 190px"
              />
            </div>
            <p>
              Conclusion: After placing Duobio reagent at 45℃ for 4 weeks, the
              extracted genomic DNA concentration and purity are stable.
            </p>
          </div>
        </section>
        <section v-if="tab === 'order'">
          <h2>Order Information</h2>
          <img
            :src="imgOrder"
            alt="Order Information Table"
            class="preview-img"
            @click="openPreview(imgOrder)"
          />
        </section>
        <section v-if="tab === 'manual'" class="manuals">
          <h2>Product Manual Download</h2>
          <ul>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-6/DNA.pdf"
                download
                target="_blank"
                >Blood Genome DNA Extraction Reagent Manual (PDF)</a
              >
            </li>
          </ul>
        </section>

        <!-- 图片预览弹窗 -->
        <div
          v-if="previewImg"
          class="img-preview-modal"
          @click.self="closePreview"
        >
          <img :src="previewImg" class="img-preview-large" @click.stop />
          <span class="img-preview-close" @click="closePreview">×</span>
        </div>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
import imgMain from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_main.jpg";
import imgProcess from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_process.jpg";
import imgCompetitorTable from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_competitor_table.jpg";
import imgCompetitorConcentration from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_competitor_concentration.png";
import imgCompetitorPurity from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_competitor_purity.png";
import imgVolumeTable from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_volume_table.jpg";
import imgVolumeConcentration from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_volume_concentration.png";
import imgVolumePurity from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_volume_purity.png";
import imgStabilityTable from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_stability_table.jpg";
import imgStabilityConcentration from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_stability_concentration.png";
import imgStabilityPurity from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_stability_purity.png";
import imgOrder from "@/assets/Reagent/diagnosis/diagnosis-6/bloodgenome_order.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Advantages' },
  // { key: 'process', label: 'Extraction Process' },
  // { key: 'validation', label: 'Validation Data' },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.blood-genome-beads-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 48px 0;
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
.tab-bar {
  display: none;
}
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
.intro,
.process,
.validation,
.order-info,
.manuals {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
.intro h2,
.process h2,
.validation h2,
.order-info h2,
.manuals h2 {
  font-size: 1.35rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 12px;
  border-left: 4px solid #204a6d;
  padding-left: 12px;
  background: none;
}
ul {
  margin: 0 0 10px 20px;
  padding: 0;
}
li {
  margin-bottom: 6px;
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
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
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
.divider {
  height: 1px;
  background: #e0e4ea;
  margin: 36px auto 36px auto;
  max-width: 1200px;
}
.section-title {
  font-size: 1.35rem;
  color: #204a6d;
  font-weight: 600;
  margin-bottom: 12px;
  border-left: 4px solid #204a6d;
  padding-left: 12px;
  background: none;
}
@media (max-width: 900px) {
  .blood-genome-beads-page,
  .intro,
  .process,
  .validation,
  .order-info,
  .manuals {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .preview-img {
    max-width: 100%;
    margin: 0 auto;
  }
}
/* 图片预览弹窗样式 */
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.65);
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
  box-shadow: 0 8px 32px rgba(32, 74, 109, 0.25);
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 