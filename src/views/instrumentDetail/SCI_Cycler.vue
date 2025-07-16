<template>
  <div class="detail-page">
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="SCI_Cycler" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">SCI Cycler</h1>
        <div class="main-desc">
          <p><b>Rapid Multi-functional Thermal Cycler</b></p>
          <p><b>Innovative Features, Thoughtful Design</b></p>
          <ul>
            <li>Gradient, uniform cooling, USB program transfer, bilingual interface, dual temperature control methods, and power failure protection</li>
            <li>Innovative design: unique one-click DNA renaturation, facilitating experiments requiring uniform cooling</li>
          </ul>
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
        <span>The SCI Cycler™ is a rapid PCR instrument with multiple features: gradient, uniform cooling, USB program transfer, bilingual interface (Chinese/English), dual temperature control methods (Tube/Block), and power failure protection, meeting diverse PCR needs in the lab. Its innovative design includes a unique one-click DNA renaturation function, facilitating experiments requiring uniform cooling.</span>
      </div>
    </section>

    <!-- 产品特性区块 -->
    <section class="section-block">
      <h2 class="section-title">Product Features</h2>
      <div class="intro-features-cards">
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Light Indicator</b><div class="feature-desc">Lights on when program starts and off when it ends, preventing accidental lid opening.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>High-Resolution Touch Screen</b><div class="feature-desc">Intuitive graphic interface operable with gloves, allowing easy program editing, running, and saving.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Front Intake/Rear Exhaust Air Flow Design</b><div class="feature-desc">Allows close side-by-side of multiple units, saving valuable bench space.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Large Memory</b><div class="feature-desc">Stores up to 18,000 programs. Unlimited programs on USB disks.</div></div></div>
        </div>
        <div class="feature-col">
          <div class="feature-item"><span class="dot"></span><div><b>Press-Cap Heated Lid</b><div class="feature-desc">Easy and ergonomic. 10-year warranty on the handle.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Program Setup</b><div class="feature-desc">Quick program creation from template by changing temperature, hold time, and cycle number. Temperature adjustable by sliding up and down for higher efficiency.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Slow Cooling and DNA Renaturation</b><div class="feature-desc">Simplified process requiring inputs of only initial temperature, target temperature, and time.</div></div></div>
          <div class="feature-item"><span class="dot"></span><div><b>Top-Quality Polycarbonate Shell</b><div class="feature-desc">Durable, non-yellowing, and resistant to deformation and cracking.</div></div></div>
        </div>
      </div>
      <div class="section-img-row">
        <img :src="imgFeature" class="section-img" alt="SCI Cycler Features" />
      </div>
    </section>

    <!-- 操作界面区块 -->
    <section class="section-block">
      <h2 class="section-title">Operating Interface</h2>
      <div class="section-img-row">
        <img :src="imgUI" class="section-img" alt="Operating Interface" />
      </div>
      <div class="section-highlight-block">
        <span>Simple and clear. Temperatures can be adjusted by sliding up and down.</span>
      </div>
      <div class="section-img-row">
        <img :src="imgRenaturation" class="section-img" alt="DNA Renaturation" />
      </div>
      <div class="section-highlight-block">
        <span>One-click DNA renaturation with precise temperature control of gradual cooling from 95℃ to 25℃ within 12 hours, meeting experiment requirements for uniform slow cooling.</span>
      </div>
    </section>

    <!-- 产品参数区块 -->
    <section class="section-block">
      <h2 class="section-title">Product Specifications</h2>
      <div class="section-img-row">
        <img :src="imgSpec" class="section-img" alt="Product Specifications" />
      </div>
      <h3 class="section-title" style="font-size:1.3rem;">Thermal Functions</h3>
      <div class="section-img-row">
        <img :src="imgThermal" class="section-img" alt="Thermal Functions" />
      </div>
      <h3 class="section-title" style="font-size:1.3rem;">Gradient Functions</h3>
      <div class="section-img-row">
        <img :src="imgGradient" class="section-img" alt="Gradient Functions" />
      </div>
      <h3 class="section-title" style="font-size:1.3rem;">Heated Lid Functions</h3>
      <div class="section-img-row">
        <img :src="imgLid" class="section-img" alt="Heated Lid Functions" />
      </div>
      <h3 class="section-title" style="font-size:1.3rem;">Programming Functions</h3>
      <div class="section-img-row">
        <img :src="imgProgram" class="section-img" alt="Programming Functions" />
      </div>
      <h3 class="section-title" style="font-size:1.3rem;">Other Specifications</h3>
      <div class="section-img-row">
        <img :src="imgOther" class="section-img" alt="Other Specifications" />
      </div>
    </section>

    <!-- 文档下载区块 -->
    <section class="section-block">
      <h2 class="section-title">Documents</h2>
      <div class="pdf-download-row">
        <img :src="pdfIcon" class="pdf-icon" alt="PDF" />
        <a :href="pdfUrl1" target="_blank" class="pdf-link">SCI Cycler Brochure-EN.pdf</a>
      </div>
      <div class="pdf-download-row">
        <img :src="pdfIcon" class="pdf-icon" alt="PDF" />
        <a :href="pdfUrl2" target="_blank" class="pdf-link">SCI Cycler Pamphlet.pdf</a>
      </div>
      <div class="section-highlight-block" style="font-size:0.98rem;">*For research use only. Not for diagnostics</div>
    </section>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/SCI_Cycler/1740555330129063.jpg';
import imgFeature from '@/assets/instrumentsDetail/SCI_Cycler/1721706546689701.png';
import imgUI from '@/assets/instrumentsDetail/SCI_Cycler/1721706576152708.png';
import imgRenaturation from '@/assets/instrumentsDetail/SCI_Cycler/1721706628184143.png';
import imgSpec from '@/assets/instrumentsDetail/SCI_Cycler/1721707680292622.png';
import imgThermal from '@/assets/instrumentsDetail/SCI_Cycler/1721707051829342.png';
import imgGradient from '@/assets/instrumentsDetail/SCI_Cycler/1721707084190117.png';
import imgLid from '@/assets/instrumentsDetail/SCI_Cycler/1721707098297111.png';
import imgProgram from '@/assets/instrumentsDetail/SCI_Cycler/1721707760142197.png';
import imgOther from '@/assets/instrumentsDetail/SCI_Cycler/1721707130104720.png';
import pdfIcon from '@/assets/instrumentsDetail/SCI_Cycler/pdf.svg';

const pdfUrl1 = '/pdf/SCI_Cycler_Brochure-EN.pdf';
const pdfUrl2 = '/pdf/SCI_Cycler_Pamphlet.pdf';
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
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
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
.main-desc ul {
  padding-left: 18px;
}
.main-desc li {
  font-size: 1.18rem;
  color: #1976d2;
  margin-bottom: 8px;
  font-weight: 600;
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
  width: 90%;
  max-width: 900px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25,118,210,0.08);
}
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