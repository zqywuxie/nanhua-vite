<template>
  <div class="detail-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt; <a href="/instrumentDetail/Digital_PCR_Panel_Catalog">Digital PCR Panels</a>
    </nav>
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="Digital PCR Panel Catalog" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">Digital PCR Panel Catalog</h1>
        <div class="main-desc">
          <ul>
            <li><b>Turtle Tech has developed numerous panel kits compatible with SCI Digital series, covering fields including oncology, infectious diseases, and genetic disorders.</b></li>
            <li><b>Proprietary innovative technologies: Ultra-Multiplex and Perfect ARMS<sup>TM</sup> technologies.</b></li>
            <li><b>We not only offer our own developed kits but, more importantly, assist partners by co-development or customization for diverse applications.</b></li>
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
        <span>Compared to qPCR, digital PCR achieves not only higher sensitivity but also absolute quantification when detecting gene mutations.</span>
      </div>
      <div class="section-highlight-block">
        <span>Turtle Technology focuses on the innovation and application of digital PCR platforms, with a core team possessing 20 years of technical expertise and extensive experience in the development, validation, and production of digital PCR test kits. We provide support to clients from various fields, including life science projects, clinical diagnostics, and drug development, by detecting target nucleic acids in blood or other biological samples. Our areas of interest cover various specific sequences, from protein-coding regions to diverse biological sources, such as tumors, microorganisms, embryos, iPS cells, and environmental DNA.</span>
      </div>
      <div class="section-highlight-block">
        <span>In addition, Turtle Technology's groundbreaking <a href="http://www.turtle-tech.com.cn/technology-en/" target="_blank" title="Exponential Ultra-Multiplex Digital PCR Technology"><b>Exponential Ultra-Multiplex Technology</b></a> allows the simultaneous detection of far more targets than the number of fluorescence channels, greatly expanding the application scope of PCR. It can even partially replace expensive NGS for certain tests, achieving the effect of "<b>qPCR-PLUS/NGS-SHARP</b>" providing clients with more possibilities and driving industry development.</span>
      </div>
      <div class="section-highlight-block">
        <span>Turtle Technology has already developed a series of test kits, but more importantly, we support partners in co-development and customization based on our platform. Partners who have previously developed qPCR assay kits can easily adapt to our dPCR systems with minimal optimization, as the platform is backward compatible, enabling a swift and straightforward transition. We will always strive to help our partners move from traditional qPCR to the new era of digital PCR!</span>
      </div>
      <div class="section-highlight-block">
        <b>Turtle Tech's Proprietary Digital PCR Detection Kits - Product Catalog</b>
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog1" class="section-img" alt="Digital PCR Detection Kits Catalog 1" />
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog2" class="section-img" alt="Digital PCR Detection Kits Catalog 2" />
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog3" class="section-img" alt="Digital PCR Detection Kits Catalog 3" />
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog4" class="section-img" alt="Digital PCR Detection Kits Catalog 4" />
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog5" class="section-img" alt="Digital PCR Detection Kits Catalog 5" />
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog6" class="section-img" alt="Digital PCR Detection Kits Catalog 6" />
      </div>
      <div class="section-highlight-block">
        <b>Quantitative PCR/Digital PCR - Food Safety Pathogen Detection - Product Catalog</b>
      </div>
      <div class="section-img-row">
        <img :src="imgFoodSafety" class="section-img" alt="Food Safety Pathogen Detection Catalog" />
      </div>
    </section>
    <!-- Prev/Next 区块 -->
    <div class="prev-next-row">
      <a class="prev" href="javascript:;">Prev：None</a>
      <a class="next" href="/instrumentDetail/28-plex_Respiratory_Pathogen_Detection_Kit">Next：28-plex Respiratory Pathogen Detection Kit</a>
    </div>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10001.jpeg';
import imgCatalog1 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10002.png';
import imgCatalog2 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10003.png';
import imgCatalog3 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10004.png';
import imgCatalog4 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10005.png';
import imgCatalog5 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10006.png';
import imgCatalog6 from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10007.png';
import imgFoodSafety from '@/assets/instrumentsDetail/Digital_PCR_Panel_Catalog/10008.png';
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
  margin-bottom: 10px;
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
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img {
  width: 80%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25,118,210,0.08);
}
.breadcrumb-nav {
  font-size: 1.05rem;
  margin-bottom: 18px;
  color: #888;
}
.breadcrumb-nav a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 2px;
}
.breadcrumb-nav a:hover {
  text-decoration: underline;
}
.prev-next-row {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 24px;
  font-size: 1.08rem;
  color: #888;
}
.prev-next-row a {
  color: #1976d2;
  text-decoration: none;
}
.prev-next-row a:hover {
  text-decoration: underline;
}
</style> 