<template>
  <div class="detail-page">
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img previewable" alt="DigitalFuge" @click="openPreview(imgMain)" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">DigitalFuge</h1>
        <div class="main-desc">
          <p><b>Turtle Technology's new DigitalFuge™ Digital Mini Centrifuge is designed to process up to 12 sample tubes simultaneously. Paired seamlessly with Turtle Technology's Digital PCR systems, it synergizes to unlock the efficiency of automation, streamlining the Digital PCR testing process for maximum productivity.</b></p>
        </div>
        <div class="main-btns">
          <a href="/contact_us" class="main-btn contact">Contact Us</a>
          <a href="#" class="main-btn online">Online</a>
        </div>
      </div>
    </div>
    <!-- 详细介绍区块 -->
    <section class="section-block">
      <h2 class="section-title">Detailed Introduction</h2>
      <div class="section-highlight-block">
        <span>The DigitalFuge™ Mini Centrifuge can process up to 12 samples in a single batch, seamlessly aligning with the 12-sample capacity of Turtle Technology's SCI Digital™ PCR platform. It unleashes a synergistic effect of high efficiency and automation in assay preparation. It also features interchangeable rotorheads compatible with single tubes, 8-strip tubes, and 12-strip tubes, ideal for PCR, small-volume cell or HPLC sample separation, and prevention of liquid adherence to tube walls. It is the preferred choice for handling small-batch centrifugation. Its advanced technology allows for efficient centrifugation in a short period, ensuring uniform sample distribution and optimal results. Moreover, its compact design not only minimizes benchtop space but also offers exceptional user convenience.</span>
      </div>
    </section>
    <!-- 产品特性区块 -->
    <section class="section-block">
      <h2 class="section-title">Product Features</h2>
      <div class="intro-features-cards">
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Adjustable speed</b><div class="feature-desc">500~12000rpm</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Motor</b><div class="feature-desc">Special DC permanent magnet motor, ultra-quiet</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Display</b><div class="feature-desc">LCD screen displaying speed and time simultaneously</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Rotorhead snap-on design</b><div class="feature-desc">Rotorhead replacement without any auxiliary tools, convenient and fast</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Timing function</b><div class="feature-desc">Effective centrifugation time range: 1-99 minutes or 1-59 seconds ensuring experiment accuracy</div></div></div>
        </div>
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Advanced materials</b><div class="feature-desc">Resistant to various chemical corrosions; rotorheads are heat resistance for high-temperature sterilization</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Efficient speed control</b><div class="feature-desc">Faster acceleration/deceleration rates (peak acceleration time <12s and peak deceleration time <16s), completing experiments in a shorter time</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Versatility</b><div class="feature-desc">Innovative interchangeable rotorheads for single tubes, 8-tube strips, and 12-tube strips</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Exquisite design</b><div class="feature-desc">Airduct designed to significantly induce sample temperature rise during high-speed centrifugation</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Size and weight</b><div class="feature-desc">Length x Width x Height 190x230x120mm, 2.0 kg (without rotorhead)</div></div></div>
        </div>
      </div>
      <div class="section-img-row">
        <img :src="imgFeature" class="section-img previewable" alt="DigitalFuge Features" @click="openPreview(imgFeature)" />
      </div>
    </section>
    <div v-if="previewImg" class="img-preview-mask" @click="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import imgMain from '@/assets/instrumentsDetail/DigitalFuge/10001.jpg';
import imgFeature from '@/assets/instrumentsDetail/DigitalFuge/10002.png';
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>
<style scoped>
.detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
}
.main-info-row {
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 48px;
}
.main-img-col {
  flex: 0 0 420px;
}
.main-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25,118,210,0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(25,118,210,0.16);
  transform: scale(1.04);
}
.main-info-col {
  flex: 1;
}
.main-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #1a237e;
}
.highlight-title {
  border-left: 8px solid #1976d2;
  padding-left: 18px;
  background: linear-gradient(90deg, #e3f2fd 60%, transparent 100%);
}
.main-desc {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.main-btns {
  display: flex;
  gap: 18px;
}
.main-btn {
  display: inline-block;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  background: #1976d2;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
  transition: background 0.2s;
}
.main-btn.contact {
  background: #43a047;
}
.main-btn.online {
  background: #1976d2;
}
.main-btn:hover {
  background: #1565c0;
}
.section-block {
  margin-bottom: 56px;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1976d2;
  border-left: 6px solid #1976d2;
  padding-left: 16px;
}
.section-highlight-block {
  background: #e3f2fd;
  border-radius: 10px;
  padding: 24px 32px;
  font-size: 1.18rem;
  margin-bottom: 28px;
  color: #1a237e;
  font-weight: 500;
  text-align: center;
}
.section-video-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-video {
  width: 80%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25,118,210,0.08);
}
.intro-features-cards {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
}
.feature-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #f5faff;
  border-radius: 8px;
  padding: 16px 18px;
  font-size: 1.05rem;
  box-shadow: 0 1px 4px rgba(25,118,210,0.04);
}
.feature-item .dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #1976d2;
  margin-top: 7px;
  flex-shrink: 0;
}
.feature-item b {
  font-size: 1.08rem;
  color: #1976d2;
  font-weight: 700;
}
.feature-desc {
  font-size: 0.98rem;
  color: #333;
  margin-top: 2px;
}
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25,118,210,0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.section-img:hover {
  box-shadow: 0 8px 32px rgba(25,118,210,0.16);
  transform: scale(1.04);
}
.img-preview-mask {
  position: fixed;
  z-index: 9999;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(25,118,210,0.18);
  background: #fff;
}
@media (max-width: 900px) {
  .main-info-row {
    flex-direction: column;
    gap: 24px;
  }
  .main-img-col {
    width: 100%;
    flex: none;
  }
  .intro-features-cards {
    flex-direction: column;
    gap: 18px;
  }
}
</style> 