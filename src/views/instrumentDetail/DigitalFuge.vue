<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="DigitalFuge"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">DigitalFuge</h1>
          <div class="main-desc">
            <p>
              <b
                >Turtle Technology's new DigitalFuge™ Digital Mini Centrifuge is
                designed to process up to 12 sample tubes simultaneously. Paired
                seamlessly with Turtle Technology's Digital PCR systems, it
                synergizes to unlock the efficiency of automation, streamlining
                the Digital PCR testing process for maximum productivity.</b
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
            >The DigitalFuge™ Mini Centrifuge can process up to 12 samples in a
            single batch, seamlessly aligning with the 12-sample capacity of
            Turtle Technology's SCI Digital™ PCR platform. It unleashes a
            synergistic effect of high efficiency and automation in assay
            preparation. It also features interchangeable rotorheads compatible
            with single tubes, 8-strip tubes, and 12-strip tubes, ideal for PCR,
            small-volume cell or HPLC sample separation, and prevention of
            liquid adherence to tube walls. It is the preferred choice for
            handling small-batch centrifugation. Its advanced technology allows
            for efficient centrifugation in a short period, ensuring uniform
            sample distribution and optimal results. Moreover, its compact
            design not only minimizes benchtop space but also offers exceptional
            user convenience.</span
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
                <b>Adjustable speed</b>
                <div class="feature-desc">500~12000rpm</div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Motor</b>
                <div class="feature-desc">
                  Special DC permanent magnet motor, ultra-quiet
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Display</b>
                <div class="feature-desc">
                  LCD screen displaying speed and time simultaneously
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Rotorhead snap-on design</b>
                <div class="feature-desc">
                  Rotorhead replacement without any auxiliary tools, convenient
                  and fast
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Timing function</b>
                <div class="feature-desc">
                  Effective centrifugation time range: 1-99 minutes or 1-59
                  seconds ensuring experiment accuracy
                </div>
              </div>
            </div>
          </div>
          <div class="feature-col">
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Advanced materials</b>
                <div class="feature-desc">
                  Resistant to various chemical corrosions; rotorheads are heat
                  resistance for high-temperature sterilization
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Efficient speed control</b>
                <div class="feature-desc">
                  Faster acceleration/deceleration rates (peak acceleration time
                  &lt;12s and peak deceleration time &lt;16s), completing
                  experiments in a shorter time
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Versatility</b>
                <div class="feature-desc">
                  Innovative interchangeable rotorheads for single tubes, 8-tube
                  strips, and 12-tube strips
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Exquisite design</b>
                <div class="feature-desc">
                  Airduct designed to significantly induce sample temperature
                  rise during high-speed centrifugation
                </div>
              </div>
            </div>
            <div class="feature-item">
              <span class="dot"></span>
              <div>
                <b>Size and weight</b>
                <div class="feature-desc">
                  Length x Width x Height 190x230x120mm, 2.0 kg (without
                  rotorhead)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-img-row">
          <img
            :src="imgFeature"
            class="section-img previewable"
            alt="DigitalFuge Features"
            @click="openPreview(imgFeature)"
          />
        </div>
      </section>


    <InstrumentImagePreview v-model="previewImg" title="DigitalFuge" />
  </InstrumentDetailLayout>
</template>
<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/DigitalFuge/10001.jpg";
import imgFeature from "@/assets/instrumentsDetail/DigitalFuge/10002.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>
<style scoped>
/* 移动端优化 */
</style>
