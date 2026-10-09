<template>
  <CatalogContent title="Nano Flow Cytometer" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <section v-if="currentTab === 'intro'" class="intro">
          <section>
            <h2 class="section-title">Product Introduction</h2>
            <p >
              Exoplorer™ Nano Flow Cytometer is a cutting-edge instrument
              designed for the characterization of biological nanoparticles,
              including extracellular vesicles, viruses, lipid nanoparticles
              (LNPs), bacteria, subcellular structures, and other nanoparticles.
              With outstanding sensitivity, resolution, and throughput,
              Exoplorer™ Nano Flow Cytometer enables comprehensive nanoparticle
              analysis in the 5–3000 nm range, including size distribution,
              particle counting, and biochemical property assessment, making it
              a revolutionary tool for life science and biomedical research.
            </p>
            <div class="img-block">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgInstrument"
                alt="Nano Flow Cytometer Product Image"
                class="intro-img"
              />
              <div style="color: #888; font-size: 14px; margin-top: 8px">
                Nano Flow Cytometer Product Image
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title">Instrument Parameters</h2>
            <div class="img-block">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgParams1"
                alt="Instrument Parameters 1"
                class="intro-img"
              />
            </div>
            <div class="img-block">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgParams2"
                alt="Instrument Parameters 2"
                class="intro-img"
              />
            </div>
          </section>

          <section>
            <h2 class="section-title">Features and Advantages</h2>
            <div class="feature-block">
              <h3>— 4 Scattering Channels</h3>
              <div style="font-size: 14px">
                4 scattering channels: VSSC-1, VSSC-2, FSC, and BSSC<br />Detection
                size range: 5 nm–3000 nm<br />Exoplorer™ supports three signal
                parameters (area, height, and width), effectively distinguishing
                system background from noise and ensuring precise optical signal
                capture.
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgScatter"
                  alt="Scattering Channel Diagram"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Scattering Channel Diagram
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— Dual Lasers and Eight Fluorescence Channels</h3>
              <div style="font-size: 14px">
                Equipped with dual lasers (violet and blue), supporting up to
                eight fluorescence channels<br />Accurately detects each signal
                peak of 8-peak beads
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgFluor"
                  alt="Dual Lasers and Eight Fluorescence Channels 1"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Dual Lasers and Eight Fluorescence Channels Diagram 1
                </div>
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgFluor2"
                  alt="Dual Lasers and Eight Fluorescence Channels 2"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Dual Lasers and Eight Fluorescence Channels Diagram 2
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— Particle Size Analysis</h3>
              <div style="font-size: 14px">
                Uses standard algorithms for curve fitting to calculate particle
                size. The results are given in nanometers and determined by the
                refractive index of the biological sample.
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgSize"
                  alt="Particle Size Analysis Diagram"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Particle Size Analysis Diagram
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— Absolute Counting Without Beads</h3>
              <div style="font-size: 14px">
                The absolute counting function offers excellent consistency,
                stability, and reliability.
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgCount"
                  alt="Absolute Counting Without Beads"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Absolute Counting Without Beads
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— Exceptional System Stability</h3>
              <div style="font-size: 14px">
                Average fluorescence intensity fluctuation remains within ±5%
                for 30 consecutive days<br />Operating temperature range:
                15–28°C, fluctuation ±2°C
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgStability"
                  alt="System Stability Validation"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  System Stability Validation
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— User-Friendly Interface Design</h3>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="imgUI"
                  alt="User Interface"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  User Interface
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title">Application Scenarios</h2>
            <div class="img-block">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgApp"
                alt="Application Scenarios"
                class="intro-img"
              />
              <div style="color: #888; font-size: 14px; margin-top: 8px">
                Application Scenarios
              </div>
            </div>
            <p style=" margin-top: 18px">
              For more instrument information, please contact us<br />Contact:
              18761986090 (WeChat available)
            </p>
          </section>
        </section>
        <!-- Image Preview Modal -->
      </CatalogTabs>


    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
import imgInstrument from "@/assets/LifeScience/Cell_analyze/d4502828eb9e40f7976686e7833dbafe.png";
import imgParams1 from "@/assets/LifeScience/Cell_analyze/3fe2692d5c754221b6e82714fb2baa77.png";
import imgParams2 from "@/assets/LifeScience/Cell_analyze/6d00932d454b430f9000a8f8fa85ec29.png";
import imgScatter from "@/assets/LifeScience/Cell_analyze/dde824f24adb4f6ba189b858bc63dbf7.png";
import imgFluor from "@/assets/LifeScience/Cell_analyze/5a38688b69104e3c8ecbcf47e4dfbab7.png";
import imgFluor2 from "@/assets/LifeScience/Cell_analyze/6b1c242d8d874af188994c1e0afca01c.png";
import imgSize from "@/assets/LifeScience/Cell_analyze/ab39c0a117894f188b0b36fe58c4fd72.png";
import imgCount from "@/assets/LifeScience/Cell_analyze/0cec76041ac948aea5bee5ffdcd3e974.png";
import imgStability from "@/assets/LifeScience/Cell_analyze/8b6d75b42aeb4b55ac8decb1681a688d.png";
import imgUI from "@/assets/LifeScience/Cell_analyze/81a4f58f1c494eb583a0c87c41720e18.png";
import imgApp from "@/assets/LifeScience/Cell_analyze/021b8ebd9ba149fa870605694d09ff92.png";
</script>

<style scoped>
/* 统一图片样式和预览弹窗样式 */
</style>
