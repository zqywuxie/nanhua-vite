<template>
  <div class="detail-page">
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="SCI_Digital_PRO" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">SCI Digital PRO</h1>
        <div class="main-desc">
          <p><b>Fully automatic, Miniaturized, All-in-One design</b></p>
          <p><b>Seamless Integration of Ultra-Multiplex Technology</b></p>
        </div>
        <div class="main-btns">
          <a href="/contact_us" class="main-btn contact">Contact Us</a>
          <a href="#" class="main-btn online">Online</a>
        </div>
      </div>
    </div>

    <!-- 详细介绍区块 -->
    <section class="section-block">
      <h2 class="section-title section-title-strong">Detailed Introduction <span class="section-index">01</span></h2>
      <div class="intro-center-title">
        <div class="intro-main-title-block">
          <div class="intro-main-title big">Where Power Meets Agility</div>
          <div class="intro-main-title big">Stronger! <span class="highlight-key">Faster!</span> More Flexible!</div>
        </div>
      </div>
      <div class="intro-img-center">
        <img :src="imgAngle" alt="SCI Digital Pro-45度角" />
      </div>
      <div class="intro-features-cards">
        <div class="feature-card">
          <h3 class="feature-title orange">Stronger</h3>
          <ul>
            <li><b>Higher Throughput:</b> Supports 24 samples per run</li>
            <li><b>More Fluorescent Channels:</b> 4/5/6/(6+1) channels (FAM, HEX (VIC), ROX, Cy5, Quasar705, Atto425, customizable)</li>
            <li><b>Greater Multiplexity:</b> <span class="link">Exponential Ultra-Multiplex Digital PCR Technology</span> enables up to <b>63-plex quantitative detection</b></li>
            <li><b>Smarter:</b> AI-assisted chip reading and automated noise removal based on neural network algorithms</li>
          </ul>
        </div>
        <div class="feature-card">
          <h3 class="feature-title orange">Faster</h3>
          <ul>
            <li><b>Sample Loading Time:</b> &lt;4 minutes</li>
            <li><b>Reading Speed:</b> Single-channel scanning time &lt;0.5 minutes per sample</li>
            <li><b>Detection Speed:</b> Total experimental process time ≤3 hours, including droplet generation, PCR amplification, and data reading and analysis</li>
          </ul>
        </div>
        <div class="feature-card">
          <h3 class="feature-title orange">More Flexible</h3>
          <ul>
            <li><b>Amplification Capability:</b> Dual PCR thermal modules for simultaneous operation of different programs with temperature gradient</li>
            <li><b>Compact Design:</b> With a width of only 440mm, it occupies minimal bench space</li>
          </ul>
        </div>
      </div>
      <div class="intro-video-center">
        <video :src="video3" controls class="product-video" />
      </div>
      <div class="intro-features-cards">
        <div class="feature-card advantages-card">
          <h3 class="feature-title orange">Retains the Core Advantages of SCI Digital</h3>
          <div class="advantages-list">
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">All-in-1, fully automated</span>
                <span class="adv-desc">Samples in, results out, no manual sample loading or transfer</span>
              </div>
            </div>
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">Extensive reagent compatibility</span>
                <span class="adv-desc">Compatible with market PCR Mix, simplifying assay development</span>
              </div>
            </div>
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">Ultimately low cost</span>
                <span class="adv-desc">Price comparable to qPCR; low cost per run</span>
              </div>
            </div>
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">Superb flexibility</span>
                <span class="adv-desc">2-24 samples, 1 chip/sample, min 2 samples/run, minimizing waste</span>
              </div>
            </div>
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">High performance</span>
                <span class="adv-desc">Sensitivity of 0.01%</span>
              </div>
            </div>
            <div class="adv-item">
              <span class="adv-dot"></span>
              <div class="adv-content">
                <span class="adv-main">Extremely easy to use</span>
                <span class="adv-desc">Experiment prep in as little as 1 minute</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro-video-center">
        <video :src="video2" controls class="product-video" />
      </div>
      <div class="intro-data-analysis">
        <h3 class="feature-title">Data analysis:</h3>
        <p>The software automatically performs fluorescence signal statistical analysis for each channel, calculating the initial copy number or concentration (copies/μL) of the target molecules in each sample, copy number variation (CNV), and results can be directly printed or imported into Excel.</p>
        <p>The analysis threshold line of the data analysis software can be manually adjusted, and pairwise comparisons between channels can be made. The results can be displayed through 1-D graphs, 2-D graphs, histograms, and original chip images.</p>
      </div>
    </section>

    <!-- 技术原理区块 -->
    <section class="section-block">
      <h2 class="section-title section-title-strong">Innovative glass-based microfluidic chip</h2>
      <div class="intro-principle">
        <p><b>Principal:</b> glass-based sandwich design enabling the solidified oil isolation technology, which forms micro-droplets sealed in independent microchambers by solidifying the oil phase. A totally different approach than oil encapsulated water droplet partitioning method or flow cytometry detection principle.</p>
        <p><b>Advantages:</b> prevents droplet fusion or uneven droplet sizes, ensuring more stable droplets. Rapid generation of 20,000+ droplets with higher effective droplet ratio (>95%) and droplet uniformity (>99%). Higher thermal efficiency, more uniform reactions, increased transparency for higher signal quality.</p>
      </div>
      <div class="intro-video-center">
        <video :src="video1" controls class="product-video" />
      </div>
    </section>

    <!-- 产品规格/技术规格区块 -->
    <section class="section-block">
      <h2 class="section-title section-title-strong">Product Specification</h2>
      <div class="spec-imgs">
        <img :src="imgSpec1" alt="Product Specification" class="spec-img" />
      </div>
      <h2 class="section-title section-title-strong">Technical Specification</h2>
      <div class="spec-imgs">
        <img :src="imgSpec2" alt="Technical Specification" class="spec-img" />
      </div>
    </section>

    <!-- PDF下载区 -->
    <section class="section-block">
      <h2 class="section-title section-title-strong">Document</h2>
      <div class="download-section">
        <a :href="pdfUrl" target="_blank" class="download-btn">
          <img :src="pdfIcon" alt="pdf" class="pdf-icon" />
          SCI Digital Pro-Brochure-EN.pdf
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/SCI_Digital_PRO/10001.jpg'
import imgAngle from '@/assets/instrumentsDetail/SCI_Digital_PRO/10005.jpg'
import imgSpec1 from '@/assets/instrumentsDetail/SCI_Digital_PRO/10003.png'
import imgSpec2 from '@/assets/instrumentsDetail/SCI_Digital_PRO/10002.png'
import pdfIcon from '@/assets/instrumentsDetail/SCI_Digital_PRO/10004.svg'
import video1 from '@/assets/instrumentsDetail/SCI_Digital_PRO/SCI_Digital_PRO-Shanghai Turtle Technology Co. Ltd. - R D Manufacturing Sales and Services of Digital PCR and isothermal amplification devices and reagents - Turtle Technology.mp4'
import video2 from '@/assets/instrumentsDetail/SCI_Digital_PRO/1739427403203657.mp4'
import video3 from '@/assets/instrumentsDetail/SCI_Digital_PRO/1739426911154519.mp4'
const pdfUrl = 'https://turtle-tech.com.cn/static/upload/file/20250513/1747119449187556.pdf'
</script>

<style scoped>
.detail-page {
  background: #f7f7f7;
  min-height: 100vh;
  padding-bottom: 64px;
}
.main-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 0 0 64px 0;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
.main-img-col {
  flex: 1 1 520px;
  display: flex;
  justify-content: flex-end;
  min-width: 380px;
}
.main-img {
  width: 100%;
  max-width: 540px;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(43,123,191,0.10);
}
.main-info-col {
  flex: 1 1 520px;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}
.main-title {
  font-size: 56px;
  font-weight: 900;
  color: #2b7bbf;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.highlight-title {
  border-left: 8px solid #2b7bbf;
  padding-left: 18px;
  background: linear-gradient(90deg, #e6f7ff 0%, #fff 100%);
}
.main-desc {
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
}
.main-btns {
  display: flex;
  gap: 32px;
}
.main-btn {
  display: inline-block;
  padding: 18px 48px;
  font-size: 24px;
  font-weight: 800;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 24px rgba(43,123,191,0.10);
  letter-spacing: 1px;
}
.main-btn.contact {
  background: #2b7bbf;
  color: #fff;
}
.main-btn.contact:hover {
  background: #1a5a8a;
  box-shadow: 0 8px 32px rgba(43,123,191,0.18);
}
.main-btn.online {
  background: #fff;
  color: #2b7bbf;
  border: 3px solid #2b7bbf;
}
.main-btn.online:hover {
  background: #e6f7ff;
  box-shadow: 0 8px 32px rgba(43,123,191,0.18);
}
.section-block {
  background: #fff;
  border-radius: 24px;
  margin: 48px auto 0 auto;
  padding: 48px 48px 40px 48px;
  max-width: 1280px;
  box-shadow: 0 4px 24px rgba(43,123,191,0.10);
}
.section-title {
  font-size: 36px;
  font-weight: 900;
  color: #2b7bbf;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 18px;
  letter-spacing: 1px;
  border-bottom: 3px solid #e6f7ff;
  padding-bottom: 8px;
}
.section-title-strong {
  background: linear-gradient(90deg, #e6f7ff 0%, #fff 100%);
  border-radius: 8px;
  padding: 8px 18px 8px 0;
}
.section-index {
  font-size: 24px;
  color: #aaa;
  font-weight: 400;
}
.intro-center-title {
  text-align: center;
  margin-bottom: 32px;
}
.intro-main-title-block {
  display: inline-block;
  background: linear-gradient(90deg, #2b7bbf 0%, #e6f7ff 100%);
  border-radius: 16px;
  padding: 18px 48px;
  margin-bottom: 12px;
  box-shadow: 0 2px 12px rgba(43,123,191,0.10);
}
.intro-main-title {
  font-size: 40px;
  color: #fff;
  font-weight: 900;
  margin-bottom: 4px;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(43,123,191,0.10);
}
.intro-main-title.big {
  font-size: 48px;
}
.highlight-key {
  color: #E36C09;
  background: #fff3e6;
  border-radius: 8px;
  padding: 0 10px;
  margin: 0 4px;
}
.intro-img-center {
  text-align: center;
  margin-bottom: 32px;
}
.intro-img-center img {
  max-width: 540px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.intro-features-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-bottom: 32px;
}
.feature-card {
  background: linear-gradient(90deg, #f7faff 0%, #fff 100%);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(43,123,191,0.07);
  padding: 32px 32px 24px 32px;
  min-width: 320px;
  max-width: 400px;
  flex: 1 1 320px;
}
.feature-title {
  font-size: 26px;
  font-weight: 800;
  margin: 18px 0 12px 0;
  color: #2b7bbf;
  letter-spacing: 1px;
}
.feature-title.orange {
  color: #E36C09;
}
.feature-card ul {
  margin: 0 0 12px 24px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
}
.intro-video-center {
  text-align: center;
  margin: 32px 0;
}
.product-video {
  max-width: 900px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.intro-data-analysis {
  margin-top: 32px;
  font-size: 20px;
  color: #333;
  font-weight: 500;
  background: #f7faff;
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 0 2px 12px rgba(43,123,191,0.07);
}
.intro-principle {
  font-size: 20px;
  color: #333;
  margin-bottom: 32px;
  font-weight: 500;
}
.spec-imgs {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}
.spec-img {
  max-width: 540px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.download-section {
  display: flex;
  justify-content: center;
  margin: 48px 0 0 0;
}
.download-btn {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(43,123,191,0.10);
  padding: 24px 48px;
  font-size: 22px;
  color: #2b7bbf;
  font-weight: 800;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;
}
.download-btn:hover {
  background: #e6f7ff;
  box-shadow: 0 8px 32px rgba(43,123,191,0.18);
}
.pdf-icon {
  width: 40px;
  height: 40px;
  margin-right: 24px;
}
.link {
  color: #2b7bbf;
  text-decoration: underline;
  cursor: pointer;
}
.advantages-card {
  padding: 28px 24px 18px 24px;
  max-width: 700px;
}
.advantages-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 32px;
}
.adv-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.adv-dot {
  width: 16px;
  height: 16px;
  margin-top: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2b7bbf 60%, #e6f7ff 100%);
  flex-shrink: 0;
}
.adv-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.adv-main {
  font-size: 18px;
  font-weight: 700;
  color: #2b7bbf;
  line-height: 1.1;
}
.adv-desc {
  font-size: 15px;
  color: #555;
  line-height: 1.3;
  font-weight: 400;
}
@media (max-width: 900px) {
  .main-info-row, .section-block {
    max-width: 98vw;
    padding: 24px 8px;
  }
  .intro-main-title-block {
    padding: 12px 8px;
  }
  .feature-card {
    min-width: 220px;
    padding: 18px 8px 12px 8px;
  }
  .spec-imgs {
    gap: 12px;
  }
  .advantages-list {
    grid-template-columns: 1fr;
    gap: 12px 0;
  }
  .advantages-card {
    max-width: 98vw;
    padding: 12px 4px 8px 4px;
  }
  .adv-main {
    font-size: 16px;
  }
  .adv-desc {
    font-size: 13px;
  }
}
</style> 