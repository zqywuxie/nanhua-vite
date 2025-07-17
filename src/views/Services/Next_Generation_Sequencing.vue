<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/ngs/nextGene01.png" alt="QuinDyeTM Terminator Product">
    </div>
    <div class="navbar">
      <div class="nav-inner-container">
        <div class="nav-container">
          <span @click="scrollTo('overview')">Overview</span>
          <span @click="scrollTo('Workflow')"> Workflow</span>
          <span @click="scrollTo('services')">Services</span>
          <span @click="scrollTo('resources')">Resources</span>
        </div>
      </div>
      
    </div>
    <!-- 四个锚点内容区 -->
    <section id="overview" class="section-overview">
      <div class="overview-content">
        <h2 class="overview-title">
          <span>Overview</span>
        </h2>
        <p class="overview-desc">
          Quintara Biosciences provides fast, cost-effective Next Generation Sequencing (NGS) services using cutting-edge platforms. We offer a range of solutions, including genome sequencing, single-cell sequencing, 16S/ITS sequencing, and amplicon sequencing.        </p>
        <div class="overview-features">
          <div class="feature-item">
            <img src="../../assets/ngs/nextGene02.png" alt="Accelerate your research" />
            <div>Cutting-edge platform</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/ngs/nextGene03.png" alt="Industry-leading overnight turnaround" />
            <div>Fast, economical and efficient</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/ngs/nextGene04.png" alt="Improve efficiency" />
            <div>Next Generation Sequencing service</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/ngs/nextGene05.png" alt="Supports a wide range of applications" />
            <div>We offer a range of solutions</div>
          </div>
        </div>
      </div>
    </section>
    <section id="Workflow" class="section-workflow">
      <div class="workflow-content">
        <h2 class="workflow-title">
          <span>Workflow</span>
        </h2>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="workflow-step-circle">
              <span>01</span>
            </div>
            <img src="../../assets/ngs/nextGene06.png" alt="Sample Submission" />
            <div class="workflow-step-title">Sample Submission</div>
          </div>
          <div class="workflow-step">
            <div class="workflow-step-circle">
              <span>02</span>
            </div>
            <img src="../../assets/ngs/nextGene07.png" alt="Library Preparation" />
            <div class="workflow-step-title">Library Preparation</div>
          </div>
          <div class="workflow-step">
            <div class="workflow-step-circle">
              <span>03</span>
            </div>
            <img src="../../assets/ngs/nextGene08.png" alt="Sequencing" />
            <div class="workflow-step-title">Sequencing</div>
          </div>
          <div class="workflow-step">
            <div class="workflow-step-circle">
              <span>04</span>
            </div>
            <img src="../../assets/ngs/nextGene09.png" alt="Data Delivery" />
            <div class="workflow-step-title">Data Delivery</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-services-accordion">
      <h2 class="services-title">
        <span>Services</span>
      </h2>
      <div class="accordion">
        <div
          v-for="(service, idx) in services"
          :key="service.title"
          class="accordion-item"
        >
          <div
            class="accordion-title"
            :class="{ active: activeIndex === idx }"
            @click="toggleAccordion(idx)"
          >
            {{ service.title }}
            <span class="arrow" :class="{ open: activeIndex === idx }">▶</span>
          </div>
          <div v-if="activeIndex === idx" class="accordion-content">
            <div v-if="service.tabs && service.tabs.length" class="tabs">
              <div
                v-for="(tab, tIdx) in service.tabs"
                :key="tab.title"
                class="tab"
                :class="{ active: tabIndex[idx] === tIdx }"
                @click="selectTab(idx, tIdx)"
              >
                {{ tab.title }}
                <span v-if="tabIndex[idx] === tIdx" class="tab-arrow"></span>
              </div>
            </div>
            <div class="tab-content">
              <div v-if="service.tabs && service.tabs.length">
                <div class="tab-desc" v-html="service.tabs[tabIndex[idx]].desc"></div>
                <div
                  v-for="(detail, dIdx) in service.tabs[tabIndex[idx]].details"
                  :key="detail.label"
                  class="tab-detail"
                  :class="{ 'no-border': dIdx === service.tabs[tabIndex[idx]].details.length - 1 }"
                >
                  <b>{{ detail.label }}</b>
                  <span v-html="detail.value"></span>
                </div>
                <div v-if="service.tabs[tabIndex[idx]].sampleType" class="tab-detail">
                  <b>Standard Sample Type:</b> {{ service.tabs[tabIndex[idx]].sampleType }}
                </div>
                <div v-if="service.tabs[tabIndex[idx]].volume" class="tab-detail no-border">
                  <b>Standard Volume:</b> {{ service.tabs[tabIndex[idx]].volume }}
                </div>
              </div>
              <div v-else>
                <div v-html="service.desc"></div>
              </div>
            </div>
            <div class="accordion-btns" v-if="service.showBtns">
              <button class="order-btn">ORDER NOW</button>
              <button class="contact-btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section id="resources" class="section-resources">
      <h2 class="resources-title">
        <span>Resources</span>
      </h2>
      <div class="resources-list">
        <div class="resource-card resource-card-horizontal">
          <div class="resource-icon-bg">
            <img src="../../assets/sanger/sangerS07.png" alt="icon" class="resource-icon" />
          </div>
          <div class="resource-info">
            <div class="resource-title">Quintara Service Check List</div>
            <a class="gradient-btn" target="_blank" href="../../assets/document/Quick Manual_QuinDye Terminator_2025_EN.pdf" download>
              DOWNLOAD
            </a>
          </div>
        </div>
        <div class="resource-card resource-card-horizontal">
          <div class="resource-icon-bg">
            <img src="../../assets/sanger/sangerS07.png" alt="icon" class="resource-icon" />
          </div>
          <div class="resource-info">
            <div class="resource-title">Sanger Sequencing</div>
            <a class="gradient-btn order-btn" target="_blank" href="../../assets/document/Quick Manual_QuinDye Terminator_2025_EN.pdf" download>DOWNLOAD</a>
          </div>
        </div>
        <div class="resource-card resource-card-horizontal">
          <div class="resource-icon-bg">
            <img src="../../assets/sanger/sangerS07.png" alt="icon" class="resource-icon" />
          </div>
          <div class="resource-info">
            <div class="resource-title">Nanopore Sequencing</div>
            <a class="gradient-btn order-btn" target="_blank" href="../../assets/document/Quick Manual_QuinDye Terminator_2025_EN.pdf" download>DOWNLOAD</a>
          </div>
        </div>
      </div>
    </section>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Image imports
import nextGene01 from '@/assets/ngs/nextGene01.png'
import nextGene02 from '@/assets/ngs/nextGene02.png'
import nextGene03 from '@/assets/ngs/nextGene03.png'
import nextGene04 from '@/assets/ngs/nextGene04.png'
import nextGene05 from '@/assets/ngs/nextGene05.png'
import nextGene06 from '@/assets/ngs/nextGene06.png'
import nextGene07 from '@/assets/ngs/nextGene07.png'
import nextGene08 from '@/assets/ngs/nextGene08.png'
import nextGene09 from '@/assets/ngs/nextGene09.png'
import sangerS07 from '@/assets/sanger/sangerS07.png'
import WeGoFastFooter from '@/components/WeGoFastFooter.vue'


const services = [
  {
    title: 'DNA Sequencing',
    desc: `We support a wide variety of starting materials for DNA sequencing, including tissue, cells, plasmids, and genomic DNA. Our services, tailored to your sample type, include nucleic acid extraction, PCR, and indexing to ensure exceptional data quality. Results are available in as little as three business days. Results are available in as fast as 3 business days.`,
    showBtns: true,
    tabs: [
      {
        title: 'AmpExpress Amplicon Sequencing',
        desc: `AmpExpress sequencing provides a fast, dependable solution for purified PCR products ranging from 150 to 500 bp. Each sample generates up to 40K paired-end reads at 250 bp per read. With a rapid 3-business-day turnaround and pricing starting at just $60 per sample, AmpExpress delivers high-quality results and exceptional value for your research.`,
        details: [
          {
            label: 'Starting Materials:',
            value: 'purified PCR product with adapter (without +$30)'
          },
          {
            label: 'General Primer:',
            value: `Forward primer with R1 adapter: 5' TCCCTACACGACGCTCTTCCGATCTNNNNN (followed by your forward primer sequence)<br>
Reverse primer with R2 adapter: 5' GTTCAGACGTGTGCTCTTCCGATCTNNNNN (followed by your reverse primer sequence)`
          }
        ]
      },
      {
        title: 'Regular Amplicon Sequencing',
        desc: 'Depending on your sample type, we provide nucleic acid extraction, PCR, and indexing to ensure optimal results. With flexible sequencing options and quick turnaround times. Pricing starts at $60 per sample.',
        details: [
          {
            label: 'Standard Sample Type:',
            value: 'Mouse tissue, Cell pellets, Bacteria culture, Plasmid DNA, genomic DNA'
          },
          {
            label: 'Standard Volume:',
            value: `20 μL DNA at 15-50 ng/ul, or 250,000 cells, or 1 g tissue or 1 g bacteria culture`
          },
          {
            label: 'Primers:',
            value: `Please provide at least 20uL of PCR primers at 10pmol, or submit the PCR primer sequence, and we can synthesize it for you.`
          }
        ]
      },
      {
        title: '16S/ITS Microbiome Amplicon Sequencing',
        desc: '16S/ITS rRNA sequencing is a precise technique for identifying and classifying microbial communities. ...',
        details: [
        {
            label: 'Standard Sample Type:',
            value: `Environmental samples (e.g., soil, water), clinical samples, or microbial cultures, DNA extracted from above samples`
        },
        {
          label: 'Standard Volume:',
          value: `10-50 ng of total DNA`
        }
        ]
      },
      {
        title: 'Genomic DNA Amplicon Sequencing',
        desc: 'Our Genomic DNA sequencing service is perfect for whole-genome sequencing of both large genomes, such as human and mouse, and smaller genomes like bacteria and viruses. FASTQ files. For data analysis, we provide comprehensive solutions, including variant detection and genomic profiling. ',
        details: [
          {
            label: 'Standard Sample Type:',
            value: `Mouse tissue, Cell pellets, Bacteria culture, Plasmid DNA, Genomic DNA`
          },
          {
            label: 'Standard Volume:',
            value: `20 μL DNA at 15-50 ng/ul, or 250,000 cells, or 1 g tissue or 1 g bacteria culture`
          }
        ]
      }
    ]
  },
  {
    title: 'RNA Sequencing',
    desc: 'Need to study gene expression or identify non-coding RNA linked to your disease model in just one week? ...',
    showBtns: true,
    tabs: [
      {
        title: 'Bulk mRNA Sequencing',
        desc: 'We use polyA selection to isolate mature mRNA transcripts, which contain poly-A tails. ...',
        sampleType: 'Mouse tissue, Cell pellets, Purified RNA',
        volume: '50 μL RNA at 100 ng/μL, RIN > 7 or 250,000 cells, or 1 gram tissue'
      },
      {
        title: 'Whole Transcriptomics Sequencing',
        desc: 'Whole transcriptomics description ...',
        sampleType: '...',
        volume: '...'
      }
    ]
  },
  {
    title: 'Single Cell Sequencing',
    desc: '',
    showBtns: true,
    tabs: [
      {
        title: '10x Single Cell Gene Expression Sequencing',
        desc: '10x Single Cell Gene Expression Sequencing enables gene expression profiling at the individual cell level. ...',
        sampleType: 'Fresh or cryopreserved single-cell suspensions',
        volume: '500-10,000 cells per sample'
      },
      {
        title: 'Visium HD Spatial Profiling',
        desc: 'Visium HD description ...',
        sampleType: '...',
        volume: '...'
      }
    ]
  },
  {
    title: 'Data Analysis',
    desc: `
      <ul>
        <li>Amplicon SNP/Indel Analysis</li>
        <li>Amplicon Sequencing Abundance Analysis</li>
        <li>16S/ITS Microbiome Analysis</li>
        <li>Differential Gene Expression Analysis</li>
        <li>Large Genome Mapping and Variant Calling</li>
        <li>Small Genome Mapping and Variant Calling</li>
        <li>VDJ Analysis</li>
      </ul>
    `,
    showBtns: false
  }
];

const activeIndex = ref(0); // 默认展开第一个
const tabIndex = ref([0, 0, 0, 0]); // 每个服务的tab索引

function toggleAccordion(idx) {
  activeIndex.value = activeIndex.value === idx ? -1 : idx;
}
function selectTab(serviceIdx, tIdx) {
  tabIndex.value[serviceIdx] = tIdx;
}

const activeTab = ref(0);
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style lang="less" scoped>
/* 手机端适配 (<768px) */
@media (max-width: 767px) {
  .section-overview .overview-title span {
    font-size: 2.2rem;
  }
  
  .services-title span {
    font-size: 2rem;
  }
  .services-table th,
  .services-table td {
    font-size: 0.8rem !important;
  }
}

/* 平板端适配 (768px-1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .section-overview .overview-desc {
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .services-table th,
  .services-table td {
    font-size: 1rem;
  }
}

/* 手机端适配 (<768px) */
@media (max-width: 767px) {
  /* Overview部分适配 */
  .section-overview .overview-desc {
    font-size: clamp(0.875rem, 4vw, 1rem);
    line-height: 1.8;
  }
  
  .overview-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 10px;
    
    .feature-item {
      width: 100%;
      margin-bottom: 0;
      min-height: 180px;
     
    }
  }

  /* 服务表格适配 */
  .services-table-wrapper {
    width: 100%;
    overflow: hidden;
    height: fit-content;
  }
  
  .services-content {
    overflow: hidden;
  }
  
  .services-table {
    width: 100%;
    min-width: 600px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .services-table thead,
  .services-table tbody {
    display: table;
    width: 100%;
  }

  .services-btns {
    flex-direction: column;
    gap: 15px;
    
    button {
      width: 90%;
      padding: 8px 20px;
      font-size: 1rem;
    }
  }

  /* Sample部分适配 */
  .sam-guide-title {
    font-size: 1.8rem;
    min-width: 300px;
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    .sam-guide-title {
      font-size: 1.5rem;
    }
  }

  .sam-guide-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    
    .sam-guide-tab {
      font-size: 1.1rem;
      min-width: 140px;
      padding: 0 10px 8px;
    }
  }

  .sam-guide-content {
    font-size: 1rem;
    
    .sam-guide-desc {
      font-size: 0.95rem;
    }
  }
};
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.header{
  width: 100%;
  height: 40%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.navbar{
  width: 100%;
  height: 50px;
  position: relative;
  background-color:rgba(42, 59, 119, 0.5) ;
  margin-top: -50px;
  .nav-inner-container{
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    .nav-container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 50px;
      gap: 40px;
      span{
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        padding: 8px 16px;
      }
    }
  }
}

.section {
  padding: 80px 24px 40px 24px;
  min-height: 300px;
}

.section-overview {
  padding: 2vw 0;
  background: #fff;
  .overview-content {
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  .overview-title{
    text-align: center;
  }
  .overview-desc {
    text-align: left;
  }
  .overview-title {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 14px;
    span {
      background-image: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .overview-desc {
    font-size: 1.2rem;
    color: rgb(102, 102, 102);
    line-height: 1.6;
    margin: 0 0 0 0;
    padding: 10px 0;
    max-width: 100%;
  }
  .overview-features {
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    margin-top: 30px;
    flex-wrap: wrap;
    padding: 0;
    .feature-item {
      padding: 0 20px;
      background: #f7f7f7;
      border-radius: 8px;
      width: 300px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 12px 0 rgba(90,79,207,0.06);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
      cursor: pointer;
      &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 8px 32px 0 rgba(90,79,207,0.15);
        img {
          filter: invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1);
          transition: filter 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      }
      img {
        width: 90px;
        height: 90px;
        margin-bottom: 18px;
        object-fit: contain;
        transition: filter 0.4s cubic-bezier(0.4,0,0.2,1);
      }
      div {
        font-size: 1.15rem;
        color: rgb(102, 102, 102);
        text-align: center;
      }
    }
  }
}

.section-services {
  padding: 60px 0 40px 0;
  background: #fff;
  .services-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 24px;
  }
  .services-title {
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 36px;
    span {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .services-table-wrapper {
    margin: 0 auto;
    max-width: 1400px;
    background: #fff;
    border-radius: 8px;
    box-shadow: none;
    padding: 0;
  }
  .services-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    // margin-bottom: 12px;
    thead tr th {
      // background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      color: #fff;
      font-size: 1.15rem;
      font-weight: 600;
      padding: 18px 0;
      border: none;
      border-radius: 0;
    }
    thead tr th:first-child { border-radius: 6px 0 0 0; }
    thead tr th:last-child { border-radius: 0 6px 0 0; }
    tbody td {
      font-size: 1.08rem;
      color: #444;
      padding: 16px 0;
      border: none;
      background: #fff;
    }
    tbody tr:nth-child(even) td {
      background: #f6f8fb;
    }
    .highlight {
      color: #23c6c8;
      font-weight: 500;
    }
  }}
  .services-note {
    text-align: left;
    font-size: 1rem;
    color: #666;
    // margin: 12px 0 32px 0;
    padding: 15px 0 15px 10px;
    border-bottom: 1px solid #e0e0e0;
    a {
      // color: #5a4fcf;
      color: #666;
      text-decoration: none;
      &:hover { color: #23c6c8; }
    }
  }
  .services-btns {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 24px;
    button {
      position: relative;
      z-index: 1;
      background: #fff;
      color: #23c6c8;
      font-size: 1.1rem;
      padding: 10px 36px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 500;
      border: 2px solid transparent;
      background-image:
        linear-gradient(#fff, #fff),
        linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;
      transition: background 0.2s, color 0.2s, border 0.2s;
      margin: 0 8px;
      &:hover {
        background-image:
          linear-gradient(to right, #00bc97 0%, #4e3fa5 80%),
          linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
        color: #fff;
      }
    }
    .contact-btn {
      color: #4e3fa5;
    }
  }


.sam-guide {
  position: relative;
  width: 100%;
  min-height: 700px;
  background-image: url('../../assets/sanger/sangerS06.png');
  background-size: cover;
  background-position: center;
  padding: 0 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .sam-guide-bg {
    position: absolute;
    inset: 0;
    background: inherit;
    z-index: 0;
  }
  .sam-guide-inner {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .sam-guide-title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    pointer-events: none;
    margin:  50px 0 50px 0;
  }
  .sam-guide-title {
    font-size: 2.3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: 0 4px 24px rgba(90,79,207,0.18), 0 1px 2px #0004;
    background: transparent;
    padding: 32px 48px 18px 48px;
    border-radius: 18px 18px 0 0;
    pointer-events: auto;
    position: absolute;
    left: 50%;
    top: -48px;
    transform: translateX(-50%);
    min-width: 420px;
    max-width: 80vw;
  }
  .sam-guide-card {
    position: relative;
    z-index: 1;
    margin: 40px auto 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(90,79,207,0.10);
    max-width: 1400px;
    width: 100%;
    min-width: 320px;
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .sam-guide-tabs {
    display: flex;
    border-bottom: 1px solid #d0d0d0;
    .sam-guide-tab {
      padding: 24px 32px 18px 32px;
      background: #f3f3f3;
      font-size: 2rem;
      color: #222;
      cursor: pointer;
      font-weight: 500;
      border-right: 1px solid #d0d0d0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      position: relative;
      transition: background 0.2s, color 0.2s;
      &.active {
        background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
        color: #fff;
        z-index: 2;
        border-bottom: none;
      }
      .tab-arrow {
        display: block;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #4e3fa5;
        content: '';
      }
    }
    .tab:last-child {
      border-right: none;
    }
  }
  .sam-guide-content {
    margin-top: 24px;
    font-size: 1.18rem;
    color: rgb(102, 102, 102);
    .sam-guide-desc {
      margin-bottom: 10px;
      line-height: 1.7;
    }
    .sam-guide-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: 24px 0 12px 0;
      th.gradient-th {
        color: #fff;
        font-size: 1.15rem;
        font-weight: 600;
        padding: 16px 0;
        border: none;
      }
      th, td {
        text-align: center;
        font-size: 1.08rem;
        padding: 14px 0;
        border: none;
      }
      tr:nth-child(2) td {
        background: #e9ebee;
        font-weight: 600;
        color: #444;
      }
      tr:nth-child(even) td {
        background: #f6f8fb;
      }
    }
    .sam-guide-footnote {
      font-size: 1rem;
      color: #666;
      margin-top: 18px;
      font-style: italic;
    }
  }
}

.section-resources {
  padding: 2.5vw 0;
  background: #fff;
  .resources-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 48px;
    span {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .resources-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 0 40px;
  }
  .resource-card {
    background: #f7f8f9;
    border-radius: 10px;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // width: 370px;
    flex: 1;
    min-height: 160px;
    padding: 24px 32px;
    // min-height: 200px;
    // padding: 36px 24px 32px 24px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 4px 24px 0 rgba(90,79,207,0.10);
    }
  }
  .resource-icon-bg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }
  .resource-icon {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }
  .resource-title {
    font-size: 1.1rem;
    color: rgb(102, 102, 102);
    margin-bottom: 18px;
    text-align: center;
    font-weight: 400;
  }
  .resource-download-btn {
    display: inline-block;
    padding: 5px 25px;
    border-radius: 24px;
    border: 2px solid;
    font-size: 0.9rem;
    font-weight: 500;
    color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%)!important;
    background: #fff;
    border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      color: #fff;
    }
  }
}

.resource-card-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f7f8f9;
  border-radius: 10px;
  box-shadow: none;
  width: 470px;
  min-height: 140px;
  padding: 24px 32px;
  gap: 28px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px 0 rgba(90,79,207,0.10);
  }
  .resource-icon-bg {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 0;
  }
  .resource-icon {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }
  .resource-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 1;
    align-items: flex-start;
  }
  .resource-title {
    font-size: 1.1rem;
    color: rgb(102, 102, 102);
    font-weight: 400;
    margin-bottom: 0;
    text-align: left;
    letter-spacing: 0.01em;
  }
  .resource-download-btn {
    display: inline-block;
    padding: 6px 32px 6px 32px;
    border-radius: 24px;
    border: 2px solid;
    font-size: 1rem;
    font-weight: 500;
    color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
    background: #fff;
    border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    text-align: center;
    width: fit-content;
    letter-spacing: 0.04em;
    &:hover {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      color: #fff;
    }
  }
}

.gradient-btn {
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);;
  color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  font-size: 0.9rem;
  padding: 5px 25px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  border: 2px solid transparent;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  transition: background 0.2s, color 0.2s, border 0.2s;
  margin: 0 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-image:
      linear-gradient(to right, #00bc97 0%, #4e3fa5 80%),
      linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
    color: #fff;
  }
}

@media (max-width: 1024px) {
  .overview-content,
  .services-content,
  .sam-guide-inner,
  .resources-list {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .overview-features {
    gap: 18px;
  }
  .services-table-wrapper {
    padding: 0 8px;
  }
}

@media (max-width: 800px) {
  .overview-title {
    font-size: 2.1rem;
  }
  .overview-features {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
  .feature-item {
    width: 100% !important;
    min-width: 0;
    min-height: 180px;
    font-size: 1rem;
  }
  .services-title {
    font-size: 1.5rem;
  }
  .services-table th, .services-table td {
    font-size: 0.95rem;
    padding: 10px 0;
  }
  .sam-guide-title {
    font-size: 1.3rem;
    min-width: 220px;
    padding: 18px 12px 8px 12px;
  }
  .sam-guide-card {
    padding: 32px 8px 18px 8px;
  }
  .sam-guide-tabs .sam-guide-tab {
    font-size: 1.1rem;
    padding-bottom: 6px;
  }
  .resources-title {
    font-size: 1.5rem;
    padding-left: 0;
  }
  .resources-list {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    padding: 0 8px;
  }
  .resource-card-horizontal {
    width: 100%;
    min-width: 0;
    min-height: 90px;
    padding: 16px 12px;
    gap: 14px;
  }
  .resource-icon-bg {
    width: 48px;
    height: 48px;
  }
  .resource-icon {
    width: 32px;
    height: 32px;
  }
  .resource-title {
    font-size: 0.95rem;
  }
  .resource-download-btn, .gradient-btn {
    font-size: 0.85rem;
    padding: 4px 16px;
  }
}

@media (max-width: 500px) {
  .container {
    padding: 0;
  }
  .navbar .nav-inner-container {
    padding: 0 4px;
  }
  .navbar .nav-container {
    gap: 12px;
    padding: 0 4px;
  }
  .overview-content,
  .services-content,
  .sam-guide-inner,
  .resources-list {
    padding-left: 4px;
    padding-right: 4px;
  }
  .overview-title {
    font-size: 1.2rem;
  }
  .overview-desc {
    font-size: 0.95rem;
  }
  .feature-item {
    min-height: 90px;
    font-size: 0.9rem;
    padding: 8px 0;
  }
  .services-title {
    font-size: 1.1rem;
  }
  .services-table th, .services-table td {
    font-size: 0.7rem !important;
    padding: 4px 0;
  }
  .sam-guide .sam-guide-title {
    font-size: 1.5rem !important;
    min-width: 300px !important;
    padding: 8px 4px 4px 4px !important;
    top: -20px !important;
  }
  .sam-guide-card {
    padding: 12px 2px 8px 2px;
  }
  .sam-guide-tabs .sam-guide-tab {
    font-size: 0.95rem !important;
    min-width: 160px !important;
    padding: 0 8px 4px 8px !important;
    white-space: nowrap !important;
  }
  .resources-title {
    font-size: 1.5rem !important;
    padding-left: 0 !important;
    margin-bottom: 24px !important;
  }
  .resources-list {
    gap: 12px !important;
    padding: 0 8px !important;
  }
  .resource-card-horizontal {
    min-height: 80px !important;
    padding: 12px 8px !important;
    gap: 12px !important;
    flex-direction: row !important;
    align-items: center !important;
  }
  .resource-icon-bg {
    width: 28px;
    height: 28px;
  }
  .resource-icon {
    width: 18px;
    height: 18px;
  }
  .resource-title {
    font-size: 0.8rem;
  }
  .resource-download-btn, .gradient-btn {
    font-size: 0.7rem;
    padding: 2px 8px;
  }
}

@media (max-width: 768px) {
  /* Overview部分适配 */
  .section-overview .overview-desc {
    font-size: 1rem;
    line-height: 1.8;
  }
  
  .overview-features {
    flex-direction: column;
    align-items: center;
    
    .feature-item {
      width: 90%;
      margin-bottom: 20px;
    }
  }

  /* 服务表格适配 */
  .services-table-wrapper {
    overflow-x: auto;
  }
  
  .services-table {
    width: 120%;
    min-width: 600px;
  }

  .services-btns {
    flex-direction: column;
    gap: 15px;
    
    button {
      width: 90%;
      padding: 8px 20px;
      font-size: 1rem;
    }
  }

  /* Sample部分适配 */
  .sam-guide {
    min-height: auto;
    padding-bottom: 40px;
    
    .sam-guide-title {
      font-size: 1.8rem;
      min-width: 300px;
      padding: 20px 30px;
      top: -30px;
    }

    .sam-guide-tabs {
      overflow-x: auto;
      flex-wrap: nowrap;
      
      .sam-guide-tab {
        font-size: 1.1rem;
        min-width: 140px;
        padding: 0 10px 8px;
      }
    }

    .sam-guide-content {
      font-size: 1rem;
      padding: 0 10px;
      
      .sam-guide-desc {
        font-size: 0.95rem;
      }
      
      .sam-guide-table {
        width: 100%;
        overflow-x: auto;
        display: block;
        white-space: nowrap;
      }
    }
  }
}

.section-workflow {
  background: #f6f6f6;
  padding: 60px 0 40px 0;
  .workflow-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 24px;
  }
  .workflow-title {
    font-size: 3rem;
    // font-weight: 600;
    margin-bottom: 48px;
    span {
      background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .workflow-steps {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
  }
  .workflow-step {
    background: #fff;
    border-radius: 50%;
    width: 260px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 24px 0 rgba(90,79,207,0.08);
    position: relative;
    margin-bottom: 16px;
    .workflow-step-circle {
      position: absolute;
      top: 20px;
      left: 20px;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 2rem;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(90,79,207,0.10);
      z-index: 2;
    }
    img {
      margin: 20px 0 18px 0;
      object-fit: contain;
    }
    .workflow-step-title {
      font-size: 1.2rem;
      font-weight: 500;
      color: #222;
      // margin-top: 8px;
    }
    .workflow-step-desc {
      font-size: 1rem;
      color: #444;
      margin-top: 8px;
      text-align: center;
    }
  }
}

.section-services-accordion {
  margin: 40px 0;
  .services-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 32px;
    span {
      background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .accordion {
    padding: 0 40px;
    max-width: 1400px;
    margin: 0 auto;
  }
  .accordion-item {
    background: #f8fafd;
    border-radius: 6px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(90,79,207,0.04);
    overflow: hidden;
  }
  .accordion-title {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 18px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eaf1fb;
    transition: background 0.2s;
    &.active {
      background: #e0e7f7;
    }
    .arrow {
      transition: transform 0.2s;
      &.open {
        transform: rotate(90deg);
      }
    }
  }
  .accordion-content {
    padding: 20px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-top: none;
    .tabs {
      display: flex;
      border-bottom: 1px solid #d0d0d0;
      .tab {
        padding: 18px;
        background: #f3f3f3;
        font-size: 1.2rem;
        color: #222;
        cursor: pointer;
        font-weight: 500;
        border-right: 1px solid #d0d0d0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
        transition: background 0.2s, color 0.2s;
        &.active {
          background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
          color: #fff;
          z-index: 2;
          border-bottom: none;
        }
        .tab-arrow {
          display: block;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #4e3fa5;
          content: '';
        }
      }
      .tab:last-child {
        border-right: none;
      }
    }
    .tab-content {
      margin-top: 18px;
      font-size: 1.15rem;
      color: #444;
      .tab-desc {
        // margin-bottom: 18px;
        line-height: 1.7;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
      }
      .tab-detail {
        // margin-bottom: 12px;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        flex-direction: column;
        b {
          color: #222;
          font-weight: 700;
          margin-bottom: 4px;
        }
        span {
          color: #444;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .accordion-btns {
      display: flex;
      gap: 24px;
      margin-top: 32px;
      justify-content: center;
      button {
        background: #fff;
        color: #23c6c8;
        border: 2px solid;
        border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
        border-radius: 32px;
        padding: 16px 30px;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.2s, color 0.2s;
        &:hover {
          background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
          color: #fff;
        }
      }
      .contact-btn {
        color: #4e3fa5;
        border-image: linear-gradient(90deg, #4e3fa5 0%, #23c6c8 100%) 1;
      }
    }
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: none;}
}
</style>

