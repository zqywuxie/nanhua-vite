<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img :src="imgMain" class="main-img" alt="SCI_Cycler" @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge: SCI_Cycler" />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">SCI Cycler</h1>
          <div class="main-desc">
            <p><b>Rapid Multi-functional Thermal Cycler</b></p>
            <p><b>Innovative Features, Thoughtful Design</b></p>
            <ul>
              <li>
                Gradient, uniform cooling, USB program transfer, bilingual
                interface, dual temperature control methods, and power failure
                protection
              </li>
              <li>
                Innovative design: unique one-click DNA renaturation,
                facilitating experiments requiring uniform cooling
              </li>
            </ul>
          </div>
          <div class="main-btns">

            <router-link :to="{ path: '/instruments', query: { page: $route.query.page } }" class="main-btn catalog">View all instruments</router-link>
          </div>
        </div>
      </div>
    </template>

      <!-- 顶部主模块：左图右文按钮 -->


      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title">Detailed Introduction</h2>
        <div class="section-highlight-block">
          <span
            >The SCI Cycler™ is a rapid PCR instrument with multiple features:
            gradient, uniform cooling, USB program transfer, bilingual interface
            (Chinese/English), dual temperature control methods (Tube/Block),
            and power failure protection, meeting diverse PCR needs in the lab.
            Its innovative design includes a unique one-click DNA renaturation
            function, facilitating experiments requiring uniform cooling.</span
          >
        </div>
      </section>

      <!-- 产品特性区块 -->
      <section class="section-block">
        <h2 class="section-title">Product Features</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Light Indicator</b>
                <div class="feature-desc">
                  Lights on when program starts and off when it ends, preventing
                  accidental lid opening.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>High-Resolution Touch Screen</b>
                <div class="feature-desc">
                  Intuitive graphic interface operable with gloves, allowing
                  easy program editing, running, and saving.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Front Intake/Rear Exhaust Air Flow Design</b>
                <div class="feature-desc">
                  Allows close side-by-side of multiple units, saving valuable
                  bench space.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Large Memory</b>
                <div class="feature-desc">
                  Stores up to 18,000 programs. Unlimited programs on USB disks.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Press-Cap Heated Lid</b>
                <div class="feature-desc">
                  Easy and ergonomic. 10-year warranty on the handle.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Program Setup</b>
                <div class="feature-desc">
                  Quick program creation from template by changing temperature,
                  hold time, and cycle number. Temperature adjustable by sliding
                  up and down for higher efficiency.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Slow Cooling and DNA Renaturation</b>
                <div class="feature-desc">
                  Simplified process requiring inputs of only initial
                  temperature, target temperature, and time.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Top-Quality Polycarbonate Shell</b>
                <div class="feature-desc">
                  Durable, non-yellowing, and resistant to deformation and
                  cracking.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-img-row">
          <img
            :src="imgFeature"
            class="section-img"
            alt="SCI Cycler Features"
          @click="openPreview(imgFeature)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgFeature)" @keydown.space.prevent="openPreview(imgFeature)" aria-label="Enlarge: SCI Cycler Features" />
        </div>
      </section>

      <!-- 操作界面区块 -->
      <section class="section-block">
        <h2 class="section-title">Operating Interface</h2>
        <div class="section-img-row">
          <img :src="imgUI" class="section-img" alt="Operating Interface" @click="openPreview(imgUI)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgUI)" @keydown.space.prevent="openPreview(imgUI)" aria-label="Enlarge: Operating Interface" />
        </div>
        <div class="section-highlight-block">
          <span
            >Simple and clear. Temperatures can be adjusted by sliding up and
            down.</span
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgRenaturation"
            class="section-img"
            alt="DNA Renaturation"
          @click="openPreview(imgRenaturation)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgRenaturation)" @keydown.space.prevent="openPreview(imgRenaturation)" aria-label="Enlarge: DNA Renaturation" />
        </div>
        <div class="section-highlight-block">
          <span
            >One-click DNA renaturation with precise temperature control of
            gradual cooling from 95℃ to 25℃ within 12 hours, meeting experiment
            requirements for uniform slow cooling.</span
          >
        </div>
      </section>

      <!-- 产品参数区块 -->
      <section class="section-block">
        <h2 class="section-title">Product Specifications</h2>
        <div class="section-img-row">
          <img
            :src="imgSpec"
            class="section-img"
            alt="Product Specifications"
          @click="openPreview(imgSpec)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgSpec)" @keydown.space.prevent="openPreview(imgSpec)" aria-label="Enlarge: Product Specifications" />
        </div>
        <h3 class="section-title">
          Thermal Functions
        </h3>
        <div class="section-img-row">
          <img :src="imgThermal" class="section-img" alt="Thermal Functions" @click="openPreview(imgThermal)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgThermal)" @keydown.space.prevent="openPreview(imgThermal)" aria-label="Enlarge: Thermal Functions" />
        </div>
        <h3 class="section-title">
          Gradient Functions
        </h3>
        <div class="section-img-row">
          <img
            :src="imgGradient"
            class="section-img"
            alt="Gradient Functions"
          @click="openPreview(imgGradient)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgGradient)" @keydown.space.prevent="openPreview(imgGradient)" aria-label="Enlarge: Gradient Functions" />
        </div>
        <h3 class="section-title">
          Heated Lid Functions
        </h3>
        <div class="section-img-row">
          <img :src="imgLid" class="section-img" alt="Heated Lid Functions" @click="openPreview(imgLid)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgLid)" @keydown.space.prevent="openPreview(imgLid)" aria-label="Enlarge: Heated Lid Functions" />
        </div>
        <h3 class="section-title">
          Programming Functions
        </h3>
        <div class="section-img-row">
          <img
            :src="imgProgram"
            class="section-img"
            alt="Programming Functions"
          @click="openPreview(imgProgram)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgProgram)" @keydown.space.prevent="openPreview(imgProgram)" aria-label="Enlarge: Programming Functions" />
        </div>
        <h3 class="section-title">
          Other Specifications
        </h3>
        <div class="section-img-row">
          <img :src="imgOther" class="section-img" alt="Other Specifications" @click="openPreview(imgOther)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgOther)" @keydown.space.prevent="openPreview(imgOther)" aria-label="Enlarge: Other Specifications" />
        </div>
      </section>

      <!-- 文档下载区块 -->
      <section class="section-block">
        <h2 class="section-title">Documents</h2>
        <div class="pdf-download-row">
          <img :src="pdfIcon" class="pdf-icon" alt="PDF" />
          <a :href="pdfUrl1" target="_blank" class="pdf-link"
            >SCI Cycler Brochure-EN.pdf</a
          >
        </div>
        <div class="pdf-download-row">
          <img :src="pdfIcon" class="pdf-icon" alt="PDF" />
          <a :href="pdfUrl2" target="_blank" class="pdf-link"
            >SCI Cycler Pamphlet.pdf</a
          >
        </div>
        <div class="section-highlight-block" style="font-size: 0.98rem">
          *For research use only. Not for diagnostics
        </div>
      </section>

    <InstrumentImagePreview v-model="previewImg" title="SCI Cycler" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/SCI_Cycler/1740555330129063.jpg";
import imgFeature from "@/assets/instrumentsDetail/SCI_Cycler/1721706546689701.png";
import imgUI from "@/assets/instrumentsDetail/SCI_Cycler/1721706576152708.png";
import imgRenaturation from "@/assets/instrumentsDetail/SCI_Cycler/1721706628184143.png";
import imgSpec from "@/assets/instrumentsDetail/SCI_Cycler/1721707680292622.png";
import imgThermal from "@/assets/instrumentsDetail/SCI_Cycler/1721707051829342.png";
import imgGradient from "@/assets/instrumentsDetail/SCI_Cycler/1721707084190117.png";
import imgLid from "@/assets/instrumentsDetail/SCI_Cycler/1721707098297111.png";
import imgProgram from "@/assets/instrumentsDetail/SCI_Cycler/1721707760142197.png";
import imgOther from "@/assets/instrumentsDetail/SCI_Cycler/1721707130104720.png";
import pdfIcon from "@/assets/instrumentsDetail/SCI_Cycler/pdf.svg";

const previewImg = ref(null);
function openPreview(image) { previewImg.value = image; }

const pdfUrl1 = "/pdf/SCI_Cycler_Brochure-EN.pdf";
const pdfUrl2 = "/pdf/SCI_Cycler_Pamphlet.pdf";
</script>

<style scoped>
.pdf-download-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
}
.pdf-icon {
  width: 38px;
  height: 38px;
}
.pdf-link {
  font-size: 1.18rem;
  color: #1976d2;
  font-weight: 600;
  text-decoration: underline;
}
/* 移动端优化 */
@media (max-width: 900px) {

  .pdf-download-row {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 16px !important;
    background: #f8f9fa !important;
    border-radius: 12px !important;
    margin-bottom: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .pdf-icon {
    width: 24px !important;
    height: 24px !important;
    flex-shrink: 0;
  }

  .pdf-link {
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    color: #1976d2 !important;
    text-decoration: none !important;
    flex: 1;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .pdf-link:active {
    color: #1565c0 !important;
  }
}
</style>
