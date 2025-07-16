<template>
  <div class="instruments-container">
    <!-- Banner only, logo and slogan removed -->
    <div class="instruments-banner">
      <img :src="banner" alt="iRepertoire Banner" />
    </div>
    <!-- Tab Switch -->
    <div class="instruments-tabs">
      <div
        v-for="(tab, idx) in tabs"
        :key="tab.key"
        :class="['instruments-tab', {active: currentTab === idx}]"
        @click="currentTab = idx"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- Content Area -->
    <div class="instruments-content">
      <!-- Auto NGS Library Prep System -->
      <template v-if="currentTab === 0">
        <div class="Singlepage">
          <div class="product product2">
            <div class="auto_1280 auto clearfix">
              <div class="title"><h1>Fully Automated NGS Library Prep System</h1></div>
              <div class="part part1">
                <div class="desc-cards">
                  <div class="desc-card">With the continuous development of immune repertoire research, the application of high-throughput sequencing technology in immune repertoire studies has become increasingly common. Library construction plays a decisive role in sequencing results. Library prep must be tailored to research needs, mainly including fragmentation, adapter ligation, enrichment, purification, and final quantification. Manual library prep is tedious, time-consuming, and costly, with potential for human error and contamination at every stage, affecting library quality and sequencing results. Automated library prep effectively solves these problems, minimizes human error, reduces hands-on time, significantly lowers contamination risk, and saves time and cost in method development and optimization.</div>
                  <div class="desc-card">We offer the iR Fully Automated Library Prep System, which uses the iR-Flex system and iR-Cassette™ to automate immune repertoire high-throughput sequencing library construction and purification, providing an all-in-one solution for end users.</div>
                  <div class="desc-card">The iR Cassette is preloaded with all reagents needed for library construction and purification, including amplification primers, enzymes (except reverse transcriptase), dNTPs, and buffers. You only need to add the appropriate volume of RNA template, nuclease-free water, and reverse transcriptase, then load the cassette into the iR automated instrument. The instrument will automatically perform two rounds of PCR, including RT-PCR1, PCR1 recovery, PCR2, and final library purification. After PCR, the iR Cassette can automatically remove primer dimers without additional enzymatic steps.</div>
                  <div class="desc-card">The iR Fully Automated Library Prep System, with its disposable cassettes, multi-slot, and fully enclosed design, maximizes contamination prevention, reduces errors, and increases throughput, providing a true one-step library prep solution for end users.</div>
                </div>
              </div>
              <div class="part part2">
                <h2 class="section-title-with-circle"><span class="circle-index">1</span>Basic Structure and Configuration</h2>
                <div class="structure-cards">
                  <div class="structure-card">
                    <div class="structure-card-content">Each iR-Flex system can connect up to 4 processors, each with 4 independent slots, allowing simultaneous or random construction of up to 16 libraries.</div>
                  </div>
                  <div class="structure-card">
                    <div class="structure-card-content">Preset iR Cassette programs and validated hardware configurations; intelligent management software tracks cassette and sample info, and monitors each processor's status.</div>
                  </div>
                  <div class="structure-card">
                    <div class="structure-card-content">Each cassette contains library prep and purification reagents. *RT enzyme added separately.</div>
                  </div>
                </div>
              </div>
              <div class="part part3">
                <h2 class="section-title-with-circle"><span class="circle-index">2</span>Product Display</h2>
                <div class="product-images-row">
                  <div class="product-image-col">
                    <img :src="productImg1" alt="Product Image 1" />
                  </div>
                  <div class="product-image-col">
                    <img :src="productImg2" alt="Product Image 2" />
                  </div>
                </div>
              </div>
              <div class="part part4">
                <h2 class="section-title-with-circle"><span class="circle-index">3</span>User Manuals</h2>
                <div class="manual-card">
                  <div class="manual-title">Download Related User Manuals</div>
                  <ul class="manual-list">
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135104779.pdf" target="_blank">
                        <span class="download-icon" aria-label="Download">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        Human T and C Cell Receptors, Illumina (iC-System)
                      </a>
                    </li>
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135125995.pdf" target="_blank">
                        <span class="download-icon" aria-label="Download">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        Instrument Setup and Script Loading (iR-Processor Only) V.122017
                      </a>
                    </li>
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135133920.pdf" target="_blank">
                        <span class="download-icon" aria-label="Download">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        Human T and C Cell Receptors, Illumina (iR-Processor) v.082016
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- Immune Library Prep Reagents -->
      <template v-else-if="currentTab === 1">
        <div class="instruments-section alt-bg">
          <div class="instruments-section-title reagent-title-center">Immune Library Prep Reagents</div>
          <div class="reagent-flex">
            <div class="reagent-desc">
              <h3 class="reagent-title">Efficient, Convenient, and Multi-Platform Compatible Immune Library Prep Reagents</h3>
              <p>
                This kit is designed for high-throughput immune repertoire sequencing, compatible with various automation platforms, supporting immune diversity research, disease mechanism exploration, and personalized medicine. The product integrates high sensitivity and specificity, simple workflow, and strong compatibility, suitable for various sample types.
              </p>
              <ul class="reagent-features">
                <li>High sensitivity and specificity for accurate and reliable data</li>
                <li>Simple workflow saves experimental time</li>
                <li>Compatible with multiple automation platforms and sample types</li>
                <li>Suitable for research, clinical, and drug development scenarios</li>
              </ul>
            </div>
            <div class="reagent-imgs">
              <img :src="reagentImg1" alt="Library Prep Reagent Product 1" />
              <img :src="reagentImg2" alt="Library Prep Reagent Product 2" />
            </div>
          </div>
        </div>
      </template>
      <!-- Metagenomics -->
      <template v-else-if="currentTab === 2">
        <div class="instruments-section">
          <div class="instruments-section-title">Metagenomics</div>
          <div class="instruments-flex">
            <div class="instruments-desc">
              <p>
                Metagenomic sequencing solutions support microbial diversity and environmental sample analysis, with automated high-throughput library prep to improve data quality and analysis efficiency.
              </p>
              <ul class="instruments-features">
                <li>High coverage, low bias</li>
                <li>Compatible with various environmental samples</li>
                <li>Automated workflow for improved efficiency</li>
              </ul>
            </div>
            <div class="instruments-img-col">
              <img :src="macroGif" alt="Metagenomics GIF" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Image imports
import banner from '@/assets/technology/Banner001847-ban2_wap.jpg'
import productImg1 from '@/assets/technology/20181105112538331.png'
import productImg2 from '@/assets/technology/20181105112550866.png'
import reagentImg1 from '@/assets/technology/20181112172530765.png'
import reagentImg2 from '@/assets/technology/20181203110646578.png'
import macroGif from '@/assets/technology/1.gif'
const tabs = [
  { key: 'auto', label: 'Fully Automated NGS Library Prep System' },
  { key: 'immune', label: 'Immune Library Prep Reagents' },
  { key: 'macro', label: 'Metagenomics' },
]
const currentTab = ref(0)
</script>

<style scoped>
.instruments-container {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.instruments-header {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
}
.instruments-logo {
  width: 220px;
  max-width: 60vw;
  height: auto;
  margin-bottom: 10px;
}
.instruments-slogan {
  font-size: 1.2rem;
  color: #4e3fa5;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.instruments-banner {
  width: 100%;
  height: 260px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7fa;
}
.instruments-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
}
.instruments-content {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.instruments-section {
  width: 100%;
  margin-bottom: 36px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(90,79,207,0.04);
  padding: 32px 24px;
}
.instruments-section.alt-bg {
  background: #f7f7fa;
}
.instruments-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #00bc97;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
  text-align: left;
}
.instruments-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.instruments-desc {
  font-size: 1.08rem;
  color: #444;
  line-height: 1.7;
  flex: 1 1 320px;
  min-width: 220px;
}
.instruments-features {
  list-style: disc inside;
  color: #333;
  font-size: 1.08rem;
  margin: 18px 0 0 18px;
  padding: 0;
  line-height: 2;
}
.instruments-img-col {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.instruments-img-col img {
  width: 320px;
  max-width: 90vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(90,79,207,0.08);
  background: #f8f8f8;
}
.instruments-tabs {
  width: 100%;
  max-width: 900px;
  margin: 32px auto 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  position: relative;
  z-index: 2;
}
.instruments-tab {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4e3fa5;
  background: #f7f7fa;
  border-radius: 18px 18px 0 0;
  padding: 14px 38px 12px 38px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.18s;
  border: none;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,188,151,0.04);
  position: relative;
  margin-bottom: 0;
  border-bottom: 3px solid transparent;
}
.instruments-tab.active {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
  box-shadow: 0 6px 24px rgba(0,188,151,0.13), 0 2px 8px rgba(78,63,165,0.08);
  z-index: 3;
  border-bottom: 3px solid #fe9a15;
  transform: translateY(-2px) scale(1.06);
}
.instruments-tab:not(.active):hover {
  background: #e6f7f4;
  color: #00bc97;
  box-shadow: 0 4px 16px rgba(0,188,151,0.10);
  transform: translateY(-2px) scale(1.03);
}
@media (max-width: 900px) {
  .instruments-tabs {
    gap: 10px;
  }
  .instruments-tab {
    padding: 10px 12px 8px 12px;
    min-width: 90px;
    font-size: 0.97rem;
  }
}
@media (max-width: 600px) {
  .instruments-tabs {
    gap: 4px;
  }
  .instruments-tab {
    padding: 8px 6px 6px 6px;
    min-width: 70px;
    font-size: 0.92rem;
  }
}
@media (max-width: 900px) {
  .instruments-content {
    padding: 24px 8px 40px 8px;
  }
  .instruments-section {
    padding: 18px 6px;
  }
  .instruments-section-title {
    font-size: 1.1rem;
  }
  .instruments-flex {
    flex-direction: column;
    gap: 18px;
  }
  .instruments-img-col img {
    width: 180px;
  }
}
@media (max-width: 600px) {
  .instruments-banner {
    height: 120px;
  }
  .instruments-section {
    padding: 8px 2px;
  }
  .instruments-img-col img {
    width: 100px;
  }
}

/* 样式完善：让复刻内容更贴合本项目风格 */
.Singlepage {
  padding: 3% 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 rgba(30,34,90,0.06);
  margin: 32px auto;
  max-width: 1480px;
}
.Singlepage .product .title {
  margin-bottom: 40px;
  border-bottom: 1.5px solid #eaeaea;
  padding-bottom: 10px;
  text-align: center;
}
.Singlepage .product .title h1 {
  font-size: 2.2rem;
  background: linear-gradient(to right,#4e3fa5,#fe9a15,#44d269);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 2px;
}
.Singlepage .product .part {
  margin-bottom: 28px;
  padding: 0 2vw;
}
.Singlepage .product .part h2 {
  color: #4e3fa5;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 18px;
}
.Singlepage .product .part ul.ul {
  padding-left: 1.5em;
}
.Singlepage .product .part ul.ul li {
  font-size: 1rem;
  color: #222;
  margin-bottom: 8px;
  line-height: 1.7;
}
.Singlepage .product .part ul li.dot {
  color: #fe9a15;
  font-weight: 500;
}
.Singlepage .product .part dl dd {
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;
  line-height: 1.7;
}
.Singlepage .product .part3 dl dd img {
  max-width: 260px;
  border-radius: 6px;
  border: 1px solid #eee;
  background: #fafbfc;
  padding: 4px;
}
.Singlepage .product .part4 ul li.dot a {
  color: #4e3fa5;
  text-decoration: underline;
  font-size: 1rem;
  transition: color 0.2s;
}
.Singlepage .product .part4 ul li.dot a:hover {
  color: #fe9a15;
}
@media (max-width: 1400px) {
  .Singlepage {
    max-width: 98vw;
    margin: 16px auto;
    border-radius: 8px;
  }
}
@media (max-width: 768px) {
  .Singlepage {
    padding: 4vw 0;
    margin: 8px auto;
  }
  .Singlepage .product .part {
    padding: 0 1vw;
  }
}

/* 段落卡片样式 */
.desc-cards {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.desc-card {
  background: #f8f9fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(30,34,90,0.06);
  padding: 28px 32px;
  font-size: 1.08rem;
  color: #333;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0.02em;
}
@media (max-width: 1024px) {
  .desc-card {
    padding: 18px 10px;
    font-size: 1rem;
  }
}

/* 基本结构和配置卡片与序号圆圈样式 */
.section-title-with-circle {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.circle-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #2ecc71 0%, #8e44ad 100%);
  box-shadow: 0 2px 8px 0 rgba(142,68,173,0.10);
}
.structure-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 12px;
}
.structure-card {
  flex: 1 1 0;
  min-width: 260px;
  max-width: 32%;
  background: linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%);
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 22px;
  transition: box-shadow 0.2s;
}
.structure-card:hover {
  box-shadow: 0 4px 24px 0 rgba(142,68,173,0.16);
}
.structure-card-content {
  font-size: 1.08rem;
  color: #333;
  line-height: 1.8;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 1200px) {
  .structure-card {
    max-width: 48%;
  }
}
@media (max-width: 800px) {
  .structure-cards {
    flex-direction: column;
    gap: 16px;
  }
  .structure-card {
    max-width: 100%;
    min-width: 0;
    padding: 18px 10px;
  }
}

/* 产品展示图片并排大图样式 */
.product-images-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin: 32px 0 12px 0;
}
.product-image-col {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}
.product-image-col img {
  width: 100%;
  max-width: 98%;
  aspect-ratio: 4/3;
  height: auto;
  border-radius: 12px;
  border: 1.5px solid #eee;
  background: #fafbfc;
  box-shadow: 0 4px 24px 0 rgba(30,34,90,0.10);
  padding: 8px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.product-image-col img:hover {
  box-shadow: 0 8px 32px 0 rgba(30,34,90,0.18);
  transform: scale(1.04);
}
@media (max-width: 900px) {
  .product-images-row {
    flex-direction: column;
    gap: 18px;
  }
  .product-image-col img {
    max-width: 98vw;
    padding: 4px;
  }
}

/* 操作手册卡片样式 */
.manual-card {
  background: #f8f9fb;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.08);
  padding: 32px 28px 24px 28px;
  margin: 24px 0 0 0;
  max-width: 600px;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.manual-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #4e3fa5;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}
.manual-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.manual-list li {
  margin-bottom: 14px;
}
.manual-list li:last-child {
  margin-bottom: 0;
}
.manual-list a {
  color: #00bc97;
  font-size: 1.08rem;
  text-decoration: underline;
  transition: color 0.2s;
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 8px;
}
.manual-list a:hover {
  color: #4e3fa5;
}
.download-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
}
@media (max-width: 600px) {
  .manual-card {
    padding: 16px 8px 12px 8px;
    max-width: 98vw;
  }
  .manual-title {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .manual-list a {
    font-size: 0.98rem;
  }
}

/* 免疫组建库试剂Tab优化样式 */
.reagent-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.reagent-desc {
  flex: 1 1 320px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.reagent-title {
  font-size: 1.18rem;
  color: #00bc97;
  font-weight: 700;
  margin-bottom: 12px;
}
.reagent-features {
  list-style: disc inside;
  color: #333;
  font-size: 1.08rem;
  margin: 18px 0 0 18px;
  padding: 0;
  line-height: 2;
}
.reagent-imgs {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
}
.reagent-imgs img {
  width: 260px;
  max-width: 90vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(90,79,207,0.08);
  background: #f8f8f8;
  border: 1px solid #eee;
  padding: 6px;
}
@media (max-width: 900px) {
  .reagent-flex {
    flex-direction: column;
    gap: 18px;
  }
  .reagent-imgs {
    flex-direction: row;
    gap: 10px;
  }
  .reagent-imgs img {
    width: 120px;
    padding: 2px;
  }
}
.reagent-title-center {
  text-align: center;
  width: 100%;
}
</style> 