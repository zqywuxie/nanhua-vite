<template>
  <MobileOptimizedContent>
    <div class="affinity-page">
      <h1 class="main-title">Nano Flow Cytometer</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <section v-if="currentTab === 'intro'" class="intro">
          <section>
            <div class="section-title">Product Introduction</div>
            <p style="text-align: justify; font-size: 14px">
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
              <img
                :src="imgInstrument"
                alt="Nano Flow Cytometer Product Image"
                class="intro-img"
                @click="openPreview(imgInstrument)"
              />
              <div style="color: #888; font-size: 14px; margin-top: 8px">
                Nano Flow Cytometer Product Image
              </div>
            </div>
          </section>

          <section>
            <div class="section-title">Instrument Parameters</div>
            <div class="img-block">
              <img
                :src="imgParams1"
                alt="Instrument Parameters 1"
                class="intro-img"
                @click="openPreview(imgParams1)"
              />
            </div>
            <div class="img-block">
              <img
                :src="imgParams2"
                alt="Instrument Parameters 2"
                class="intro-img"
                @click="openPreview(imgParams2)"
              />
            </div>
          </section>

          <section>
            <div class="section-title">Features and Advantages</div>
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
                <img
                  :src="imgScatter"
                  alt="Scattering Channel Diagram"
                  class="intro-img"
                  @click="openPreview(imgScatter)"
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
                <img
                  :src="imgFluor"
                  alt="Dual Lasers and Eight Fluorescence Channels 1"
                  class="intro-img"
                  @click="openPreview(imgFluor)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Dual Lasers and Eight Fluorescence Channels Diagram 1
                </div>
              </div>
              <div class="img-block">
                <img
                  :src="imgFluor2"
                  alt="Dual Lasers and Eight Fluorescence Channels 2"
                  class="intro-img"
                  @click="openPreview(imgFluor2)"
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
                <img
                  :src="imgSize"
                  alt="Particle Size Analysis Diagram"
                  class="intro-img"
                  @click="openPreview(imgSize)"
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
                <img
                  :src="imgCount"
                  alt="Absolute Counting Without Beads"
                  class="intro-img"
                  @click="openPreview(imgCount)"
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
                <img
                  :src="imgStability"
                  alt="System Stability Validation"
                  class="intro-img"
                  @click="openPreview(imgStability)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  System Stability Validation
                </div>
              </div>
            </div>
            <div class="feature-block">
              <h3>— User-Friendly Interface Design</h3>
              <div class="img-block">
                <img
                  :src="imgUI"
                  alt="User Interface"
                  class="intro-img"
                  @click="openPreview(imgUI)"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  User Interface
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="section-title">Application Scenarios</div>
            <div class="img-block">
              <img
                :src="imgApp"
                alt="Application Scenarios"
                class="intro-img"
                @click="openPreview(imgApp)"
              />
              <div style="color: #888; font-size: 14px; margin-top: 8px">
                Application Scenarios
              </div>
            </div>
            <p style="font-size: 14px; margin-top: 18px">
              For more instrument information, please contact us<br />Contact:
              18761986090 (WeChat available)
            </p>
          </section>
        </section>
        <!-- Image Preview Modal -->
      </MobileOptimizedTabs>

      <div
        v-if="previewImg"
        class="img-preview-modal"
        @click.self="closePreview"
      >
        <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
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
const previewImg = ref("");
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = "";
}
</script>

<style scoped>
.affinity-page {
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
ul,
ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
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
  max-width: 700px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #0002;
}
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
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
  .affinity-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-title {
    font-size: 2rem;
  }
  .intro-img {
    max-width: 98vw;
  }
}
</style> 