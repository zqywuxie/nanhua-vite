<template>
  <div class="container">
    <div class="header">
      <div class="banner-bg">
        <img src="../../assets/sanger/sangerS01.png" alt="QuinDyeTM Terminator Product">
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1>Sanger Sequencing</h1>
          <hr class="banner-divider">
          <p>Accelerate your research with industry-leading overnight turnaround</p>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="nav-inner-container">
        <div class="nav-container">
          <span @click="scrollTo('overview')">Overview</span>
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
          Accelerate your research with Quintara's Sanger Sequencing services. We specialize in delivering accurate and reliable DNA sequencing results with an industry-leading overnight turnaround. Our service is designed for efficiency and supports a wide range of applications, including plasmid verification and mutation analysis, ensuring that your projects move forward swiftly without sacrificing quality.
        </p>
        <div class="overview-features">
          <div class="feature-item">
            <img src="../../assets/sanger/sangerS02.png" alt="Accelerate your research" />
            <div>Accelerate your research</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/sanger/sangerS03.png" alt="Industry-leading overnight turnaround" />
            <div>Industry-leading overnight turnaround</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/sanger/sangerS05.png" alt="Improve efficiency" />
            <div>Improve efficiency</div>
          </div>
          <div class="feature-item">
            <img src="../../assets/sanger/sangerS04.png" alt="Supports a wide range of applications" />
            <div>Supports a wide range of applications</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section-services">
      <div class="services-content">
        <h2 class="services-title">
          <span>Services</span>
        </h2>
        <div class="services-table-wrapper">
          <table class="services-table">
            <thead>
              <tr style="background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);">
                <th>Name</th>
                <th>Description</th>
                <th>Turnaround</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plasmid Verification</td>
                <td>Samples can be mixed or non-mixed with primers</td>
                <td class="highlight">1 day</td>
                <td>Starting from $4</td>
              </tr>
              <tr>
                <td>Direct Colony Sequencing</td>
                <td>We use PCR technology</td>
                <td class="highlight">1 day</td>
                <td>Starting from $7</td>
              </tr>
            </tbody>
          </table>
          <div class="services-note">
            * We offer free universal primers, or we can <a href="#">synthesize your primers</a> in-house
          </div>
          <div class="services-btns">
            <button class="order-btn">ORDER NOW</button>
            <button class="contact-btn">CONTACT US</button>
          </div>
        </div>
        
      </div>
    </section>
    <div class="sam-guide">
      <div class="sam-guide-bg"></div>
      <div class="sam-guide-inner">
        <div class="sam-guide-title-container">
          <div class="sam-guide-title">Sample Submission Guideline</div>
        </div>
        <div class="sam-guide-card">
          <div class="sam-guide-tabs">
            <div :class="['sam-guide-tab', activeTab === 0 ? 'active' : '']" @click="activeTab = 0">Plasmid DNA</div>
            <div :class="['sam-guide-tab', activeTab === 1 ? 'active' : '']" @click="activeTab = 1">PCR Product</div>
            <div :class="['sam-guide-tab', activeTab === 2 ? 'active' : '']" @click="activeTab = 2">Bacterial Colony</div>
            <div :class="['sam-guide-tab', activeTab === 3 ? 'active' : '']" @click="activeTab = 3">Genomic DNA</div>
          </div>
          <div class="sam-guide-content">
            <template v-if="activeTab === 0">
              <div class="sam-guide-desc" style="font-size: 1rem;">
                10-15 μL Plasmid DNA<br/>
                1. Premix Primer with Plasmid DNA Sample<br/>
                2. Plasmid DNA and Primer in Separate Tubes, or Use Our Free Primer Library. (Complete List in Excel or Search Online)
              </div>
              <table class="sam-guide-table">
                <thead>
                  <tr style="background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);">
                    <th colspan="2" class="gradient-th">Plasmid DNA Template</th>
                    <th class="gradient-th">5 μL Primer<sup>1</sup></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Volume</td>
                    <td>Concentration</td>
                    <td>Concentration</td>
                  </tr>
                  <tr>
                    <td>10-15 μL</td>
                    <td>80 ng/μL</td>
                    <td>5 pmol/μL (5 μM)</td>
                  </tr>
                </tbody>
              </table>
              <div class="sam-guide-footnote" style="font-size: 0.9rem;">
                <sup>1</sup>Primer For Sequencing: Prefer Tm: 50-60℃, GC content: 40-60%
              </div>
            </template>
            <template v-else-if="activeTab === 1">
              <div class="sam-guide-desc" style="font-size: 1rem;">
                Purified or Unpurified<sup>1</sup>, ~10 ng of purified PCR per Kb<br/>
                1. Premix Primer with Purified PCR DNA Sample<br/>
                2. Purified/Unpurified PCR DNA and Primer in Separate Tubes, or Use Our Free Primer Library. (Complete List in Excel or Search Online)<br/>
                3. Please provide the PCR product size information at the time of order submission
              </div>
              <table class="sam-guide-table">
                <thead>
                  <tr style="background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);">
                    <th colspan="2" class="gradient-th">Purified PCR</th>
                    <th class="gradient-th">5 μL Primer<sup>2</sup></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background: #E6E9ED;">
                    <td>Type & Size</td>
                    <td>Concentration</td>
                    <td>Concentration</td>
                  </tr>
                  <tr><td>&lt; 1 Kb</td><td>10 ng/μL</td><td rowSpan="5">5 pmol/μL (5 μM)</td></tr>
                  <tr><td>1 kb – 2 kb</td><td>20 ng/μL</td></tr>
                  <tr><td>2 kb – 3 kb</td><td>30 ng/μL</td></tr>
                  <tr><td>3 kb – 4 kb</td><td>40 ng/μL</td></tr>
                  <tr><td>&gt;4 kb</td><td></td></tr>
                </tbody>
              </table>
              <div class="sam-guide-footnote">
                <sup>1</sup>In the case of unpurified PCR samples, we will conduct a PCR purification process prior to sequencing<br/>
                <sup>2</sup>Primer For Sequencing: Prefer Tm: 50-60℃, GC content: 40-60%
              </div>
            </template>
            <template v-else-if="activeTab === 2">
              <div class="sam-guide-desc" style="font-size: 1rem;">
                agar plates, colony suspensions or overnight cultures
              </div>
              <div class="sam-guide-desc" style="font-weight:500; margin-top:10px;">
                DNA Amplification Methods:</div>
              <div class="sam-guide-desc" style="font-size: 1rem;">
                1. PCR (Preferred): This method allows for next-day data delivery. Please provide the amplicon size, as well as forward and reverse PCR primers.<br/>
                2. Rolling Circle Amplification (RCA).<br/>
                3. Plasmid Miniprep: Include antibiotic information for the sample.
              </div>
              <div class="sam-guide-footnote" style="margin-top:24px; font-style:italic; color:#888;">
                Note: RCA and plasmid miniprep methods may extend the data delivery timeline by an additional day.<br/>
                Ensure all suspension samples are placed in either tightly sealed 8-strip tubes or in a strip-capped 96-well plate
              </div>
            </template>
            <template v-else>
              <div class="sam-guide-desc" style="font-size: 1rem;">
                1. PCR amplification prior to sequencing. Please provide the <b>PCR primer</b> and the <b>Expected Amplicon Size</b>.<br/><br/>
                2. A minimum of <b>10 μL DNA Sample</b> with a concentration of at least <b>30 mg/μL</b>.
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    
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
  </div>
  
  <WeGoFastFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const activeTab = ref(0);
const showBackToTop = ref(false);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    // 获取navbar的实际高度
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 50;
    
    console.log(`Scrolling to ${id}:`, {
      elementTop: el.offsetTop,
      navbarHeight: navbarHeight
    });
    
    // 使用scrollIntoView，但先滚动到目标位置上方
    const elementPosition = el.offsetTop - navbarHeight - 20;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    
    // 备用方法：如果上面的方法不工作，使用scrollIntoView
    setTimeout(() => {
      el.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  } else {
    console.error(`Element with id "${id}" not found`);
  }
}


</script>

<style lang="less" scoped>
/* 手机端适配 (<768px) */
@media (max-width: 767px) {
  .header {
    height: 350px;
  }
  
  .banner-text h1 {
    font-size: 2.2rem;
  }
  
  .banner-text p {
    font-size: 1.1rem;
  }
  
  .banner-divider {
    width: 70%;
  }
  
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
  .header {
    height: 400px;
  }
  
  .banner-text h1 {
    font-size: 2.8rem;
  }
  
  .banner-text p {
    font-size: 1.2rem;
  }
  
  .banner-divider {
    width: 75%;
  }
  
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
}

/* 回到顶部按钮样式 */
.back-to-top {
  position: fixed !important;
  bottom: 30px !important;
  right: 30px !important;
  width: 50px !important;
  height: 50px !important;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  cursor: pointer !important;
  box-shadow: 0 4px 20px rgba(0, 188, 151, 0.3) !important;
  transition: all 0.3s ease !important;
  z-index: 9999 !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
  border: none !important;
  outline: none !important;
}

.back-to-top:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 30px rgba(0, 188, 151, 0.4);
}

.back-to-top:active {
  transform: translateY(-1px) scale(1.05);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

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
  height: 450px;
  position: relative;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 1;
  }
}

.banner-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  color: #fff;
}

.banner-text {
  max-width: 800px;
  margin-left: 10%;
  margin-top: 0;
  
  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  h1 strong {
    color: #fff;
  }
  
  .banner-divider {
    width: 80%;
    height: 3px;
    margin: 1.5rem 0;
    background: none;
    border: none;
    border-radius: 1px;
    position: relative;
  }
  
  .banner-divider::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 4px,
      #00bc97 4px,
      #00bc97 8px,
      transparent 8px,
      transparent 12px
    );
    background-size: 12px 3px;
  }
  
  p {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}
.navbar{
  width: 100%;
  height: 50px;
  position: relative;
  background-color:rgba(42, 59, 119, 0.5) ;
  margin-top: -50px;
  z-index: 10;
  .nav-inner-container{
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
          .nav-container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;
        gap: 30px;
      span{
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 4px;
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
        
        &:active {
          transform: translateY(0);
        }
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
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #e0e0e0;
    .sam-guide-tab {
      flex: 1;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      color: #333;
      padding: 0 0 12px 0;
      cursor: pointer;
      transition: color 0.2s;
      position: relative;
      &.active {
        color: #2d2d6e;
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0%;
          right: 0%;
          bottom: -2px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
        }
      }
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
</style>

