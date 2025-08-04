<template>
  <MobileOptimizedContent>
    <div class="nucleic-acid-extraction-page">
      <h1 class="main-title">Nucleic Acid Extraction and Purification</h1>

      <MobileOptimizedTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
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
          <div class="section-title">Product Advantages</div>
          <ul>
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
          <div class="section-title">Technical Parameters</div>
          <ul>
            <li>Component: Iron Oxide (Fe3O4)</li>
            <li>Dispersion Medium: Deionized Water</li>
            <li>Particle Refractive Index: NA</li>
            <li>Particle Size: 50nm-2μm</li>
            <li>Additives: Contains trace surface active agents</li>
            <li>Storage Conditions: 2-25℃, please do not freeze</li>
          </ul>
          <div class="divider"></div>
          <div class="section-title">Extraction Process</div>
          <img
            :src="imgProcess"
            alt="Magnetic Bead Nucleic Acid Extraction Process"
            class="preview-img"
            @click="openPreview(imgProcess)"
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
            <img
              :src="imgCase1"
              alt="Experimental Result 1"
              class="preview-img"
              @click="openPreview(imgCase1)"
            />
            <p>2. Taking MS02H as an example</p>
            <img
              :src="imgCase2"
              alt="Experimental Result 2"
              class="preview-img"
              @click="openPreview(imgCase2)"
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
          <img
            :src="imgOrder"
            alt="Order Information Table"
            class="preview-img"
            @click="openPreview(imgOrder)"
          />
          <p>
            The above magnetic microsphere products can provide packaging
            specifications of 10ml, 100ml, and 1L.
          </p>
          <img
            :src="imgOrder2"
            alt="Order Information Table 2"
            class="preview-img"
            @click="openPreview(imgOrder2)"
            style="margin-top: 24px"
          />
          <p>
            The above magnetic microsphere products can provide packaging
            specifications of 10ml, 100ml, and 1L.
          </p>
        </section>
        <section v-if="tab === 'manual'" class="manuals">
          <h2>Product Manuals</h2>
          <ul>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MS05HE.pdf"
                download
                target="_blank"
                >MS05HE Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MS05HC.pdf"
                download
                target="_blank"
                >MS05HC Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MA0308C.pdf"
                download
                target="_blank"
                >MA0308C Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MA0309C.pdf"
                download
                target="_blank"
                >MA0309C Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MS02H.pdf"
                download
                target="_blank"
                >MS02H Magnetic Microsphere Product Manual (PDF)</a
              >
            </li>
            <li>
              <a
                href="/src/assets/Reagent/diagnosis/diagnosis-2/MS02HA.pdf"
                download
                target="_blank"
                >MS02HA Magnetic Microsphere Product Manual (PDF)</a
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
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.nucleic-acid-extraction-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: "Segoe UI", "PingFang SC", "Hiragino Sans", Arial, sans-serif;
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
.tab-bar {
  display: none;
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
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
.case-links a {
  color: #204a6d;
  text-decoration: underline;
  margin-right: 12px;
  font-size: 1rem;
}
@media (max-width: 900px) {
  .nucleic-acid-extraction-page {
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