<template>
  <div class="detail-page">
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img previewable" alt="ISO_Digital" @click="openPreview(imgMain)" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">ISO Digital</h1>
        <div class="main-desc">
          <p><b>Innovative digital isothermal platform combining the advantages of isothermal amplification and digital PCR technology.</b></p>
          <p><b>Fully automated, compact, all-in-one system.</b></p>
          <p><b>Compatible with Digital PCR and Ultra-Multiplex Technology.</b></p>
          <p><b>A major advancement in molecular diagnostics, offering more options for pathogen detection, genetic research, and clinical diagnostics.</b></p>
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
        <span>The world's innovative commercial digital isothermal amplification system is poised to revolutionize the fields of life sciences and precision medicine. It offers researchers and clinicians more advanced and efficient technological tools to drive scientific progress and enhance diagnostic capabilities.</span>
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
          <div class="feature-item"><span class="dot"></span><div><b>Digital Isothermal Amplification</b><div class="feature-desc">Highly sensitive and specific detection without thermal cycling, faster and more efficient, reaction times 15-45 min.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Accurate Quantification</b><div class="feature-desc">Adapts digital PCR technology, giving isothermal amplification precise quantification capabilities.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Strong Compatibility</b><div class="feature-desc">Compatible with Digital LAMP, Digital ERA, Digital RPA, and other mainstream isothermal amplification functions.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Ultra-Multiplex Capability</b><div class="feature-desc">Supports simultaneous detection of multiple targets with optimized isothermal reactions.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Strict Reaction Time Consistency</b><div class="feature-desc">Automated FIFO control ensures identical reagent mixing and droplet generation times for each sample.</div></div></div>
        </div>
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>High Droplet Stability</b><div class="feature-desc">Proprietary solid oil-water separation, 20,000+ droplets, >95% effective, >99% uniformity.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>User-Friendly Operation</b><div class="feature-desc">Software control simplifies experiment setup, execution, and analysis.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Compact Design</b><div class="feature-desc">Fits any lab configuration without taking up excessive space.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>High Expandability</b><div class="feature-desc">Upgradeable to digital PCR functionality.</div></div></div>
        </div>
      </div>
    </section>

    <!-- 竞争优势区块 -->
    <section class="section-block">
      <h2 class="section-title">Competitive Advantages</h2>
      <div class="intro-features-cards">
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Speed</b><div class="feature-desc">No need for thermal cycling, which accelerates the process and delivers faster results.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Quantification</b><div class="feature-desc">Digital quantification ensures that every target molecule is accurately counted, providing precise quantitative results.</div></div></div>
        </div>
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Expandability</b><div class="feature-desc">Adaptable to both small and large laboratories, offering a versatile solution.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Differentiation</b><div class="feature-desc">Compared to conventional isothermal amplification and PCR techniques, digital isothermal amplification offers additional benefits.</div></div></div>
        </div>
      </div>
      <div class="section-img-row">
        <img :src="imgAdvantage" class="section-img previewable" alt="Competitive Advantages" @click="openPreview(imgAdvantage)" />
      </div>
    </section>

    <!-- 应用领域区块 -->
    <section class="section-block">
      <h2 class="section-title">Application Areas</h2>
      <div class="intro-features-cards">
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Pathogen Detection</b><div class="feature-desc">Especially suitable for rapid and reliable diagnosis of infectious diseases.</div></div></div>
        </div>
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Clinical Diagnostics</b><div class="feature-desc">High accuracy and timeliness make it an ideal technology for clinical environments.</div></div></div>
        </div>
      </div>
    </section>

    <!-- 技术原理区块 -->
    <section class="section-block">
      <h2 class="section-title">Innovative glass-based microfluidic chip</h2>
      <div class="section-highlight-block">
        <span><b>Principal:</b> glass-based sandwich design enabling the solidified oil isolation technology, which forms micro-droplets sealed in independent microchambers by solidifying the oil phase. A totally different approach than oil encapsulated water droplet partitioning method or flow cytometry detection principle.</span>
      </div>
      <div class="section-highlight-block">
        <span><b>Advantages:</b> prevents droplet fusion or uneven droplet sizes, ensuring more stable droplets. Rapid generation of 20,000+ droplets with higher effective droplet ratio (>95%) and droplet uniformity (>99%). Higher thermal efficiency, more uniform reactions, increased transparency for higher signal quality.</span>
      </div>
      <div class="section-video-row">
        <video :src="videoDroplet" controls class="section-video"></video>
      </div>
    </section>

    <!-- 参数图区块 -->
    <section class="section-block">
      <h2 class="section-title">Droplet generation Illustration</h2>
      <div class="section-img-row">
        <img :src="imgDroplet" class="section-img previewable" alt="Droplet generation Illustration" @click="openPreview(imgDroplet)" />
      </div>
    </section>
    <div v-if="previewImg" class="img-preview-mask" @click="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imgMain from '@/assets/instrumentsDetail/ISO_Digital/10001.jpg';
import imgAdvantage from '@/assets/instrumentsDetail/ISO_Digital/10002.png';
import imgDroplet from '@/assets/instrumentsDetail/ISO_Digital/10002.png';
import videoMain from '@/assets/instrumentsDetail/ISO_Digital/1750923996473917.mp4';
import videoDroplet from '@/assets/instrumentsDetail/ISO_Digital/1750924085130117.mp4';

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