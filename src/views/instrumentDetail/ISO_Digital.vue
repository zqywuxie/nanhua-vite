<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="ISO_Digital"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">ISO Digital</h1>
          <div class="main-desc">
            <p>
              <b
                >Innovative digital isothermal platform combining the advantages
                of isothermal amplification and digital PCR technology.</b
              >
            </p>
            <p><b>Fully automated, compact, all-in-one system.</b></p>
            <p>
              <b>Compatible with Digital PCR and Ultra-Multiplex Technology.</b>
            </p>
            <p>
              <b
                >A major advancement in molecular diagnostics, offering more
                options for pathogen detection, genetic research, and clinical
                diagnostics.</b
              >
            </p>
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
            >The world's innovative commercial digital isothermal amplification
            system is poised to revolutionize the fields of life sciences and
            precision medicine. It offers researchers and clinicians more
            advanced and efficient technological tools to drive scientific
            progress and enhance diagnostic capabilities.</span
          >
        </div>
        <div class="section-video-row">
          <video :src="videoMain" controls class="section-video"></video>
        </div>
      </section>

      <!-- 技术参数/特性区块 -->
      <section class="section-block">
        <h2 class="section-title">Technical Features</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Digital Isothermal Amplification</b>
                <div class="feature-desc">
                  Highly sensitive and specific detection without thermal
                  cycling, faster and more efficient, reaction times 15-45 min.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Accurate Quantification</b>
                <div class="feature-desc">
                  Adapts digital PCR technology, giving isothermal amplification
                  precise quantification capabilities.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Strong Compatibility</b>
                <div class="feature-desc">
                  Compatible with Digital LAMP, Digital ERA, Digital RPA, and
                  other mainstream isothermal amplification functions.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Ultra-Multiplex Capability</b>
                <div class="feature-desc">
                  Supports simultaneous detection of multiple targets with
                  optimized isothermal reactions.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Strict Reaction Time Consistency</b>
                <div class="feature-desc">
                  Automated FIFO control ensures identical reagent mixing and
                  droplet generation times for each sample.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>High Droplet Stability</b>
                <div class="feature-desc">
                  Proprietary solid oil-water separation, 20,000+ droplets, >95%
                  effective, >99% uniformity.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>User-Friendly Operation</b>
                <div class="feature-desc">
                  Software control simplifies experiment setup, execution, and
                  analysis.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Compact Design</b>
                <div class="feature-desc">
                  Fits any lab configuration without taking up excessive space.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>High Expandability</b>
                <div class="feature-desc">
                  Upgradeable to digital PCR functionality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 竞争优势区块 -->
      <section class="section-block">
        <h2 class="section-title">Competitive Advantages</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Speed</b>
                <div class="feature-desc">
                  No need for thermal cycling, which accelerates the process and
                  delivers faster results.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Quantification</b>
                <div class="feature-desc">
                  Digital quantification ensures that every target molecule is
                  accurately counted, providing precise quantitative results.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Expandability</b>
                <div class="feature-desc">
                  Adaptable to both small and large laboratories, offering a
                  versatile solution.
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Differentiation</b>
                <div class="feature-desc">
                  Compared to conventional isothermal amplification and PCR
                  techniques, digital isothermal amplification offers additional
                  benefits.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-img-row">
          <img
            :src="imgAdvantage"
            class="section-img previewable"
            alt="Competitive Advantages"
            @click="openPreview(imgAdvantage)"
          />
        </div>
      </section>

      <!-- 应用领域区块 -->
      <section class="section-block">
        <h2 class="section-title">Application Areas</h2>
        <div class="intro-features-cards">
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Pathogen Detection</b>
                <div class="feature-desc">
                  Especially suitable for rapid and reliable diagnosis of
                  infectious diseases.
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Clinical Diagnostics</b>
                <div class="feature-desc">
                  High accuracy and timeliness make it an ideal technology for
                  clinical environments.
                </div>
              </div>
            </div>
          </div>
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

      <!-- 参数图区块 -->
      <section class="section-block">
        <h2 class="section-title">Droplet generation Illustration</h2>
        <div class="section-img-row">
          <img
            :src="imgDroplet"
            class="section-img previewable"
            alt="Droplet generation Illustration"
            @click="openPreview(imgDroplet)"
          />
        </div>
      </section>


    <InstrumentImagePreview v-model="previewImg" title="ISO Digital" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/ISO_Digital/10001.jpg";
import imgAdvantage from "@/assets/instrumentsDetail/ISO_Digital/10002.png";
import imgDroplet from "@/assets/instrumentsDetail/ISO_Digital/10002.png";
import videoMain from "@/assets/instrumentsDetail/ISO_Digital/1750923996473917.mp4";
import videoDroplet from "@/assets/instrumentsDetail/ISO_Digital/1750924085130117.mp4";

const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>

<style scoped>
/* 移动端优化 */
</style>
