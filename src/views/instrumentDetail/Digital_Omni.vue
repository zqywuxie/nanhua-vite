<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Digital Omni"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">Digital Omni</h1>
          <div class="main-desc">
            <ul>
              <li><b>Nucleic Acids and Proteins — All in One</b></li>
              <li>
                <b>Isothermal and Thermal Cycling — Seamlessly Integrated</b>
              </li>
              <li>
                <b
                  >Evolving from Molecular Detection to Single-Molecule
                  Quantification</b
                >
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
            >Digital Omni™: Ushering in a New Era of "Omni-Modality" Digital
            Molecular Detection</span
          >
        </div>
        <div class="section-img-row">
          <img
            :src="imgBanner"
            class="section-img previewable"
            alt="Digital Omni Banner"
            @click="openPreview(imgBanner)"
          />
        </div>
        <div class="section-highlight-block">
          <span
            >Digital Omni is the first fully integrated platform that combines
            digital PCR, digital isothermal amplification, and digital
            immunoassays into a single system. It offers ultra-multiplex nucleic
            acid quantification with 15–30 targets per run and achieves
            femtogram-level sensitivity in protein detection. With its
            exceptional openness, compatibility, and automation, Digital Omni
            provides a unified, highly efficient, and low-barrier solution for
            applications in research, diagnostics, food safety, and public
            health.</span
          >
        </div>
      </section>

      <!-- 参数/亮点区块 -->
      <section class="section-block">
        <h2 class="section-title">Key Features</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Full Modality</b>
                <div class="feature-desc">
                  digital PCR, digital isothermal amplification, digital
                  immunoassay (BIOSEER, immuno-PCR ELISA)
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Throughput</b>
                <div class="feature-desc">Supports 24 samples per run</div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Fluorescent Channels</b>
                <div class="feature-desc">
                  4/5/6/(6+1) channels (FAM, HEX (VIC), ROX, Cy5, Quasar705,
                  Atto425, with customizable channel)
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Multiplexity</b>
                <div class="feature-desc">
                  Exponential Ultra-Multiplex Digital PCR Technology
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Intellegent</b>
                <div class="feature-desc">
                  AI-assisted chip reading and automated noise removal based on
                  neural network algorithms
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Sample Loading Time</b>
                <div class="feature-desc">&lt;4 minutes</div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Reading Speed</b>
                <div class="feature-desc">
                  Single-channel scanning time &lt;0.5 minutes per sample
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Detection Speed</b>
                <div class="feature-desc">
                  Total experimental process time ≤3 hours, including droplet
                  generation, amplification, and data reading and analysis
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Amplification Capability</b>
                <div class="feature-desc">
                  Dual PCR thermal modules for simultaneous operation of
                  different programs with temperature gradient
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Compact Design</b>
                <div class="feature-desc">
                  With a width of only 440mm, it occupies minimal bench space
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Omni优势区块 -->
      <section class="section-block">
        <h2 class="section-title">Retains the Core Advantages</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>All-in-1, fully automated</b>
                <div class="feature-desc">
                  Samples in, results out, with no manual sample loading or
                  transfer
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Extensive reagent compatibility</b>
                <div class="feature-desc">
                  Widely compatible with reagents for PCR, isothermal
                  amplification, and immunoassay, simplifying assay development.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Ultimately low cost</b>
                <div class="feature-desc">
                  Price comparable to qPCR; low cost per run.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Superb flexibility</b>
                <div class="feature-desc">
                  2-24 samples, 1 chip/sample, minimum 2 samples/run - farewell
                  to sample pooling, minimizing consumable waste.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>High performance</b>
                <div class="feature-desc">Sensitivity of 0.01%.</div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Extremely easy to use</b>
                <div class="feature-desc">
                  Experiment preparation can be completed in as little as 1
                  minute, greatly enhancing efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 数据分析区块 -->
      <section class="section-block">
        <h2 class="section-title">Data Analysis</h2>
        <div class="section-highlight-block">
          <span
            >The software automatically performs fluorescence signal statistical
            analysis for each channel, calculating the initial copy number or
            concentration (copies/μL) of the target molecules in each sample,
            copy number variation (CNV), and results can be directly printed or
            imported into Excel.</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            >The analysis threshold line of the data analysis software can be
            manually adjusted, and pairwise comparisons between channels can be
            made. The results can be displayed through 1-D graphs, 2-D graphs,
            histograms, and original chip images.</span
          >
        </div>
      </section>

      <!-- 技术原理区块 -->
      <section class="section-block">
        <h2 class="section-title">Innovative glass-based microfluidic chip</h2>
        <div class="section-highlight-block">
          <span
            ><b>Principal:</b> glass-based sandwich design enabling the
            solidified oil isolation technology, which forms micro-droplets
            sealed in independent microchambers by solidifying the oil phase. A
            totally different approach than oil encapsulated water droplet
            partitioning method or flow cytometry detection principle.</span
          >
        </div>
        <div class="section-highlight-block">
          <span
            ><b>Advantages:</b> prevents droplet fusion or uneven droplet sizes,
            ensuring more stable droplets. Rapid generation of 20,000+ droplets
            with higher effective droplet ratio (>95%) and droplet uniformity
            (>99%). Higher thermal efficiency, more uniform reactions, increased
            transparency for higher signal quality.</span
          >
        </div>
        <div class="section-video-row">
          <video :src="videoDroplet" controls class="section-video"></video>
        </div>
      </section>

      <!-- 产品参数图片区块 -->
      <section class="section-block">
        <h2 class="section-title">Product Specification</h2>
        <div class="section-img-row">
          <img
            :src="imgSpec"
            class="section-img previewable"
            alt="Product Specification"
            @click="openPreview(imgSpec)"
          />
        </div>
      </section>
      <section class="section-block">
        <h2 class="section-title">Technical Specification</h2>
        <div class="section-img-row">
          <img
            :src="imgTechSpec"
            class="section-img previewable"
            alt="Technical Specification"
            @click="openPreview(imgTechSpec)"
          />
        </div>
      </section>


    <InstrumentImagePreview v-model="previewImg" title="Digital Omni" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Digital_Omni/10001.png";
import imgBanner from "@/assets/instrumentsDetail/Digital_Omni/10002.png";
import imgSpec from "@/assets/instrumentsDetail/Digital_Omni/10004.png";
import imgTechSpec from "@/assets/instrumentsDetail/Digital_Omni/10003.png";
import videoDroplet from "@/assets/instrumentsDetail/Digital_Omni/1739427494934415.mp4";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>

<style scoped>
/* 移动端优化 */
</style>
