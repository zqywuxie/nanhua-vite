<template>
  <div class="tech-bg-root">
    <div class="tech-main-content">
      <!-- 主标题 -->
      <h1 class="main-gradient-title">Our Technical Advantages</h1>
      <!-- 介绍段落 -->
      <div class="tech-paragraphs">
        <p>Compared with healthy individuals, the immune repertoire of patients with various diseases may change in quantity or quality. Quantitative changes may be an increase or decrease in immune repertoire diversity. Qualitative changes are mainly reflected in the increase or decrease of disease-related specific CDR3s in T or B cells.</p>
        <p>Excellent amplification technology is key to quantitative and qualitative research of the immune repertoire. A good amplification method should have comprehensive coverage and be quantitative. Comprehensive coverage means that 100,000 to 500,000 different CDR3s in a sample can all be amplified in one experiment, and quantitativeness means that no bias is introduced during amplification. We use the multiplex PCR method developed by iRepertoire, which can comprehensively and quantitatively amplify immune genes.</p>
        <p>Excellent multiplex PCR should have specificity, sensitivity, multiplex capability, quantitativeness, uniform target amplification, ease of use, ease of design and development, speed, and low cost. iRepertoire provides two different multiplex PCR methods, both of which amplify all V(D)J combinations in the sample, including the highly variable CDR3 region. Through arm-PCR (amplicon rescue multiplex PCR, patent 7999092), we can sensitively amplify all clones of the selected chain from human or mouse samples, even extremely rare clones. Through dam-PCR (dimer-avoiding multiplex PCR, patent pending), we can simultaneously amplify all chains or any combination of BCR and TCR chains in a more accurate quantitative manner than other competing methods.</p>
        <p>In 2009, iRepertoire developed a new generation of mPCR technology, arm-PCR (amplicon rescue multiplex PCR, patent number: 7999092). For arm-PCR, high concentrations of nested primers are used in the initial PCR cycles. Then, using the sequence with a shared tag introduced in the first round of amplification as a template, new universal primers and enzymes are added for the second round of PCR detection. In mPCR, since the exponential phase of amplification is performed by a pair of primers for all potential targets, all CDR3s are amplified in a semi-quantitative manner.</p>
        <p>iRepertoire's dam-PCR technology allows any combination of TCR and BCR chains to be amplified simultaneously in one reaction. The unique combination of single-cycle binding, extension steps, and strict removal steps avoids primer dimer formation. First, only 3' primers are added for a single binding and extension step. Unbound 3' primers are washed away, then 5' primers are added. After another single-cycle binding and extension, the 5' primers are removed. Universal primers that bind to the sites introduced in the previous two steps are added for multiple cycles of exponential amplification. Dam-PCR also allows the inclusion of unique molecular identifiers (UMIs), so each RNA strand can be labeled for direct quantification, eliminating PCR and/or sequencing errors. This increases confidence in sequencing targets and allows quantitative study of the ratio between chains in the acquired immune repertoire.</p>
        <p>Therefore, arm-PCR provides an inclusive, semi-quantitative description of the immune repertoire of specific chains, while dam-PCR provides quantitative observation of the frequency of any combination or all BCR and TCR chain clones.</p>
        <p>Common challenges of multiplex PCR: uneven primer efficiency, uneven target amplification conditions, background amplification, primer dimers.</p>
        <p>To address these challenges, we have successfully provided solutions:</p>
      </div>
      <!-- 六大技术优势点 -->
      <div class="tech-solutions-block">
        <div class="tech-solutions-grid">
          <div v-for="item in solutions" :key="item" class="solution-block">
            <span class="solution-title">{{ item }}</span>
          </div>
        </div>
        <div class="tech-solutions-img-row">
          <img :src="gifImg" alt="Uniform Target Amplification" />
        </div>
      </div>
      <!-- iRepertoire免疫组库测序技术优势 -->
      <hr class="tech-section-divider" />
      <div class="tech-advantage-block">
        <h2 class="main-gradient-title">iRepertoire Immune Repertoire Sequencing Technical Advantages</h2>
        <div class="tech-advantage-list">
          <div class="advantage-card" v-for="item in advantages" :key="item.title">
            <div class="advantage-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="advantage-content">
              <div class="advantage-title">{{ item.title }}</div>
              <div class="advantage-desc" v-html="item.desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gifImg from '@/assets/Background/20181119134940515.gif'
import icon1 from '@/assets/Background/1.gif'
import iconLogo from '@/assets/Background/Top002394-logo.jpg'
const solutions = [
  'Comprehensive Coverage',
  'Uniform Target Amplification',
  'High Specificity',
  'High Sensitivity',
  'Quantitative',
  'Simultaneous Amplification of Multiple Targets',
]
const advantages = [
  {
    title: 'One-stop Service',
    desc: 'Provides a full range of services including sample processing, amplification, library construction, sequencing, subsequent information analysis, and data mining.',
    icon: icon1
  },
  {
    title: 'Diverse Sequencing Platforms',
    desc: 'Options include Illumina, Roche, or Ion Torrent, according to requirements.',
    icon: gifImg
  },
  {
    title: 'Targeted Research Methods',
    desc: 'Primers are specifically designed for both ends of the CDR3 V and J regions to specifically amplify the CDR3 region.',
    icon: iconLogo
  },
  {
    title: 'High-fidelity Amplification Technology',
    desc: 'Uses patented unique multiplex PCR technology to achieve equivalent amplification of different clones, with unique clone numbers up to 10<sup>5</sup>.',
    icon: icon1
  },
]
</script>

<style scoped>
.tech-bg-root {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 20px 0;
}
.tech-main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(59,123,191,0.12);
  position: relative;
  overflow: hidden;
}

.tech-main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
}
.main-gradient-title {
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.tech-paragraphs {
  margin-bottom: 36px;
}
.tech-paragraphs p {
  font-size: 1.08rem;
  color: #333;
  margin-bottom: 14px;
  line-height: 1.9;
}
.tech-solutions-block {
  width: 100%;
  margin-bottom: 48px;
}
.tech-solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto 36px auto;
}
.solution-block {
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(59,123,191,0.12);
  padding: 38px 0;
  font-size: 1.32rem;
  font-weight: 800;
  color: #1a6fa6;
  letter-spacing: 1.5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 188, 151, 0.1);
  position: relative;
  overflow: hidden;
}

.solution-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #00bc97 0%, #4e3fa5 100%);
}

.solution-block:hover {
  box-shadow: 0 12px 40px rgba(0,188,151,0.2);
  transform: translateY(-4px) scale(1.05);
  border-color: rgba(0, 188, 151, 0.3);
}
.tech-solutions-img-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.tech-solutions-img-row img {
  width: 100%;
  max-width: 480px;
  max-height: 340px;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(59,123,191,0.15);
  object-fit: contain;
  border: 2px solid rgba(0, 188, 151, 0.2);
  transition: all 0.3s ease;
}

.tech-solutions-img-row img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 32px rgba(59,123,191,0.2);
  border-color: rgba(0, 188, 151, 0.4);
}
.tech-advantage-block {
  margin-top: 56px;
}
.tech-advantage-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px 36px;
  justify-content: flex-start;
  margin-top: 32px;
}
.advantage-card {
  display: flex;
  align-items: flex-start;
  gap: 22px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(59,123,191,0.12);
  padding: 36px 44px;
  flex: 1 1 45%;
  min-width: 340px;
  max-width: 100%;
  font-size: 1.18rem;
  border: 1px solid rgba(0, 188, 151, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.advantage-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #00bc97 0%, #4e3fa5 100%);
}

.advantage-card:hover {
  box-shadow: 0 8px 30px rgba(0,188,151,0.18);
  transform: translateY(-3px);
  border-color: rgba(0, 188, 151, 0.3);
}
.advantage-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e0e6f0;
}
.advantage-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.advantage-title {
  font-weight: 700;
  color: #2b7bbf;
  font-size: 1.25rem;
}
.advantage-desc {
  color: #444;
  font-size: 1.08rem;
  line-height: 1.8;
}
@media (min-width: 901px) {
  .tech-advantage-list {
    flex-wrap: wrap;
    gap: 36px 36px;
  }
  .advantage-card {
    flex-basis: 48%;
    max-width: 48%;
  }
}
@media (max-width: 900px) {
  .tech-main-content {
    padding: 18px 4px 32px 4px;
  }
  .tech-solutions-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
    max-width: 100%;
  }
  .solution-block {
    font-size: 1.08rem;
    min-height: 70px;
    padding: 22px 0;
  }
  .tech-solutions-img-row img {
    max-width: 100%;
    max-height: 180px;
  }
  .tech-advantage-list {
    gap: 18px 8px;
  }
  .advantage-card {
    min-width: 0;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 12px;
    font-size: 1.05rem;
  }
  .advantage-icon img {
    width: 48px;
    height: 48px;
  }
  .advantage-title {
    font-size: 1.12rem;
  }
  .advantage-desc {
    font-size: 0.98rem;
  }
}
.tech-section-divider {
  border: none;
  border-top: 2px solid #e0e6f0;
  margin: 48px 0 0 0;
  width: 100%;
}
</style> 