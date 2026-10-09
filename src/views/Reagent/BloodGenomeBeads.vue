<template>
  <CatalogContent title="Magnet Beads Blood Genome DNA Extraction Reagent" family="Reagent">
    <div class="blood-genome-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Product Introduction</h2>
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgMain"
                alt="Main Image"
                class="preview-img"
              />
            </div>
          </section>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
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
          <h2 class="section-title">Extraction Process</h2>
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
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgProcess"
              alt="Extraction Process"
              class="preview-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Validation Data</h2>
          <div>
            <b>1. Competitor Comparison Results</b>
            <p>
              Use Duobio reagent and competitor reagent to extract genomic DNA
              from three EDTA anticoagulated blood samples, each sample volume
              of 200μL, elution volume of 100μL.
            </p>
            <div style="text-align: center; margin: 20px 0">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgCompetitorTable"
                alt="Competitor Comparison Table"
                class="preview-img"
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgCompetitorConcentration"
                alt="DNA Concentration Comparison"
                class="preview-img"
                style="max-width: 266px; max-height: 190px"
              />
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgCompetitorPurity"
                alt="DNA Purity Comparison"
                class="preview-img"
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgVolumeTable"
                alt="Flexible Volume Table"
                class="preview-img"
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgVolumeConcentration"
                alt="Concentration at Different Volumes"
                class="preview-img"
                style="max-width: 266px; max-height: 190px"
              />
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgVolumePurity"
                alt="Purity at Different Volumes"
                class="preview-img"
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgStabilityTable"
                alt="Accelerated Stability Table"
                class="preview-img"
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
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgStabilityConcentration"
                alt="Accelerated Stability Concentration"
                class="preview-img"
                style="max-width: 266px; max-height: 190px"
              />
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgStabilityPurity"
                alt="Accelerated Stability Purity"
                class="preview-img"
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
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgOrder"
            alt="Order Information Table"
            class="preview-img"
          />
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manuals">
          <h2>Product Product Manuals</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">Blood Genome DNA Extraction Reagent Manual (PDF)</a
              >
            </li>
          </ul>
        </section>

        <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-6/DNA.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
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
</script>

<style scoped>
.process,
.validation {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
@media (max-width: 900px) {
  .process,
  .validation {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
}
/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
