<template>
  <CatalogContent title="Nucleic Acid Extraction and Purification" family="Reagent">
    <div class="nucleic-acid-extraction-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            This series of magnetic microspheres is designed for nucleic acid
            extraction and purification, featuring excellent nucleic acid
            capture capacity and elution efficiency. With rapid magnetic
            response while maintaining good dispersion and extremely low
            non-specific adsorption. Suitable for various sample types of
            nucleic acid extraction and automated instrument extraction
            requirements, making it an ideal choice for nucleic acid extraction
            and purification of biological samples.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>Large specific surface area, strong binding capacity</li>
            <li>
              Superparamagnetic microspheres, excellent resuspension performance
            </li>
            <li>
              Special surface modification, strong nucleic acid adsorption
              capacity and easy elution
            </li>
            <li>
              Fast magnetic response, fast magnetic absorption, no magnetic
              residue
            </li>
            <li>
              Rich particle size and surface group selection, meeting various
              sample nucleic acid extraction requirements
            </li>
            <li>
              Single batch supply of hundreds of liters, small batch-to-batch
              variation, high repeatability
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Component</dt><dd>Iron Oxide (Fe3O4)</dd></div><div><dt>Dispersion Medium</dt><dd>Deionized Water</dd></div><div><dt>Particle Refractive Index</dt><dd>NA</dd></div><div><dt>Particle Size</dt><dd>50nm-2μm</dd></div><div><dt>Additives</dt><dd>Contains trace surface active agents</dd></div><div><dt>Storage Conditions</dt><dd>2-25℃, please do not freeze</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Extraction Process</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgProcess"
            alt="Magnetic Bead Nucleic Acid Extraction Process"
            class="preview-img"
          />
        </section>
        <section v-if="tab === 'case'" class="application-case">
          <h2>Application Cases</h2>
          <div>
            <p>
              1. Taking MS02HA as an example, verify the extraction efficiency
              of the magnetic beads in virus samples.
            </p>
            <p>
              <b>Experimental Scheme:</b> Inject 200μl (1000 copies/ml) small
              fragment pure nucleic acid, after extraction, the eluate is 100μl
              enzyme-free water. The same concentration of pure nucleic acid and
              the eluate after extraction are amplified under the same
              conditions.
            </p>
            <p>
              <b>Experimental Results:</b> qPCR test results show that the CT
              value of pure nucleic acid solution is 0.8 higher than that of the
              eluate, which proves that MS02HA magnetic beads have a very high
              capture capacity for small fragment nucleic acids.
            </p>
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgCase1"
              alt="Experimental Result 1"
              class="preview-img"
            />
            <p>2. Taking MS02H as an example</p>
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgCase2"
              alt="Experimental Result 2"
              class="preview-img"
            />
            <p>
              The detection results show that using A company's HBV extraction
              reagent and MS02H magnetic beads can extract low-to-50IU/ml virus
              DNA from HBV serum, which indicates that the recovery rate of
              MS02H magnetic microspheres is close to 100%.
            </p>
          </div>
          <div class="case-links">
            <a
              href="https://www.vdobiotech.com.cn/service/4dc906621f594b6eadd21538dd0430a2"
              target="_blank"
              >Download Application Manual for More Information</a
            >
            <br />
            <b
              >Application Cases of Virus Nucleic Acid Extraction and
              Purification Magnetic Microspheres:</b
            ><br />
            <a
              href="https://www.vdobiotech.com.cn/service/c4aaed2ab41147f4a1c64946c0a98083"
              target="_blank"
              >Application of WD Bio's Nucleic Acid Extraction Microspheres in
              HBV and HCV Nucleic Acid Extraction</a
            ><br />
            <a
              href="https://www.vdobiotech.com.cn/service/4dc906621f594b6eadd21538dd0430a2"
              target="_blank"
              >Application of WD Bio's Nucleic Acid Extraction Microspheres in
              HBV Nucleic Acid Extraction</a
            ><br />
            <a
              href="https://www.vdobiotech.com.cn/service/8742116b51624ee0a3dd7a2aaeb8afc9"
              target="_blank"
              >Application of WD Bio's Nucleic Acid Extraction Magnetic Beads in
              Veterinary Diagnosis (ASFV/PRV)</a
            >
          </div>
        </section>
        <section v-if="tab === 'order'" class="order-info">
          <h2>Order Information</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgOrder"
            alt="Order Information Table"
            class="preview-img"
          />
          <p>
            The above magnetic microsphere products can provide packaging
            specifications of 10ml, 100ml, and 1L.
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="imgOrder2"
            alt="Order Information Table 2"
            class="preview-img"
            style="margin-top: 24px"
          />
          <p>
            The above magnetic microsphere products can provide packaging
            specifications of 10ml, 100ml, and 1L.
          </p>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manuals">
          <h2>Product Manuals</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">MS05HE Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf1"
                target="_blank"
                 rel="noopener noreferrer">MS05HC Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf2"
                target="_blank"
                 rel="noopener noreferrer">MA0308C Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf3"
                target="_blank"
                 rel="noopener noreferrer">MA0309C Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf4"
                target="_blank"
                 rel="noopener noreferrer">MS02H Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf5"
                target="_blank"
                 rel="noopener noreferrer">MS02HA Magnetic Microsphere Product Manual (PDF)</a
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
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-2/MS05HE.pdf?url';
import catalogPdf1 from '@/assets/Reagent/diagnosis/diagnosis-2/MS05HC.pdf?url';
import catalogPdf2 from '@/assets/Reagent/diagnosis/diagnosis-2/MA0308C.pdf?url';
import catalogPdf3 from '@/assets/Reagent/diagnosis/diagnosis-2/MA0309C.pdf?url';
import catalogPdf4 from '@/assets/Reagent/diagnosis/diagnosis-2/10006.pdf?url';
import catalogPdf5 from '@/assets/Reagent/diagnosis/diagnosis-2/10005.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgProcess from "@/assets/Reagent/diagnosis/diagnosis-2/10009.png";
import imgOrder from "@/assets/Reagent/diagnosis/diagnosis-2/10010.png";
import imgCase1 from "@/assets/Reagent/diagnosis/diagnosis-2/10011.png";
import imgCase2 from "@/assets/Reagent/diagnosis/diagnosis-2/10012.png";
import imgOrder2 from "@/assets/Reagent/diagnosis/diagnosis-2/10013.png";
// Tab 配置
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Advantages' },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'process', label: 'Extraction Process' },
  { key: "case", label: "Application Cases" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manuals" },
];
const tab = ref("intro");
</script>

<style scoped>
.case-links a {
  color: #204a6d;
  text-decoration: underline;
  margin-right: 12px;
  font-size: 1rem;
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
